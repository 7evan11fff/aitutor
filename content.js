// Content script for AI Tutor Extension - Free Version (No API Key Required)
class AITutor {
  constructor() {
    this.isActive = false;
    this.currentContext = null;
    this.selectedText = '';
    this.freeAIServices = null;
    this.conversationHistory = [];
    this.init();
  }

  async init() {
    try {
      // Initialize free AI services
      if (typeof FreeAIServices === 'undefined') {
        console.error('FreeAIServices class not found. Check if free-ai-services.js is loaded.');
        return;
      }
      this.freeAIServices = new FreeAIServices();
      
      // Create floating button
      this.createFloatingButton();
      
      // Create widget
      this.createWidget();
      
      // Set up text selection
      this.setupTextSelection();
      
      // Detect page context
      this.detectPageContext();
      
      // Listen for messages from popup
      chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
        if (request.action === 'ping') {
          sendResponse({ status: 'active' });
        }
      });
      
      console.log('AI Tutor extension initialized successfully');
    } catch (error) {
      console.error('Error initializing AI Tutor extension:', error);
    }
  }

  createFloatingButton() {
    // Remove existing button if any
    const existingBtn = document.getElementById('ai-tutor-floating-btn');
    if (existingBtn) {
      existingBtn.remove();
    }

    const button = document.createElement('button');
    button.id = 'ai-tutor-floating-btn';
    button.textContent = 'I Need Help';
    button.addEventListener('click', () => this.toggleWidget());
    
    document.body.appendChild(button);
  }

  createWidget() {
    // Remove existing widget if any
    const existingWidget = document.getElementById('ai-tutor-widget');
    if (existingWidget) {
      existingWidget.remove();
    }

    const widget = document.createElement('div');
    widget.id = 'ai-tutor-widget';
    widget.innerHTML = `
      <div class="tutor-widget-header">
        <h2 class="tutor-widget-title">AI Tutor Assistant</h2>
        <button class="tutor-widget-close" id="tutor-close">×</button>
      </div>
      <div class="tutor-widget-content" id="tutor-content">
        <div class="tutor-message system">
          <strong>Welcome!</strong> I'm here to help you learn step by step. What would you like help with?
          <br><br>
          <small>💡 <strong>Free Mode:</strong> No API key required! I'll guide you through learning with step-by-step questions and examples.</small>
        </div>
      </div>
      <div class="tutor-widget-footer">
        <div class="tutor-input-group">
          <textarea id="tutor-input" placeholder="Ask me anything or select text on the page..."></textarea>
        </div>
        <div class="tutor-buttons">
          <button class="tutor-btn tutor-btn-secondary" id="tutor-clear">Clear</button>
          <button class="tutor-btn tutor-btn-primary" id="tutor-send">Get Help</button>
        </div>
      </div>
    `;

    // Create overlay
    const overlay = document.createElement('div');
    overlay.id = 'tutor-overlay';
    overlay.className = 'tutor-overlay';
    overlay.addEventListener('click', () => this.hideWidget());

    document.body.appendChild(overlay);
    document.body.appendChild(widget);

    // Add event listeners
    document.getElementById('tutor-close').addEventListener('click', () => this.hideWidget());
    document.getElementById('tutor-clear').addEventListener('click', () => this.clearConversation());
    document.getElementById('tutor-send').addEventListener('click', () => this.sendMessage());
    
    // Add Enter key support for textarea
    document.getElementById('tutor-input').addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        this.sendMessage();
      }
    });
  }

  setupTextSelection() {
    document.addEventListener('mouseup', (e) => {
      const selection = window.getSelection();
      const selectedText = selection.toString().trim();
      
      if (selectedText.length > 0) {
        this.selectedText = selectedText;
        this.highlightSelectedText(selection);
      }
    });
  }

  highlightSelectedText(selection) {
    // Remove previous highlights
    document.querySelectorAll('.ai-tutor-selected-text').forEach(el => {
      el.classList.remove('ai-tutor-selected-text');
    });

    // Highlight current selection
    if (selection.rangeCount > 0) {
      const range = selection.getRangeAt(0);
      const span = document.createElement('span');
      span.className = 'ai-tutor-selected-text';
      
      try {
        range.surroundContents(span);
      } catch (e) {
        // If surroundContents fails, just store the text
        console.log('Could not highlight selection');
      }
    }
  }

  detectPageContext() {
    const bodyText = document.body.innerText.toLowerCase();
    
    // Detect math content
    const mathPatterns = [
      /solve|equation|formula|calculate|math|algebra|geometry|trigonometry|calculus/,
      /[0-9]+\s*[+\-*/=]\s*[0-9]+/, // Basic math expressions
      /\$[0-9]+/, // Money problems
      /percent|%|fraction|decimal/
    ];
    
    const hasMath = mathPatterns.some(pattern => pattern.test(bodyText));
    
    // Detect reading content
    const readingPatterns = [
      /read|passage|text|comprehension|article|story|chapter/,
      /question|answer|multiple choice|essay/
    ];
    
    const hasReading = readingPatterns.some(pattern => pattern.test(bodyText));
    
    // Detect writing content
    const writingPatterns = [
      /write|essay|paragraph|composition|draft|outline/,
      /grammar|spelling|punctuation|sentence/
    ];
    
    const hasWriting = writingPatterns.some(pattern => pattern.test(bodyText));
    
    this.currentContext = {
      math: hasMath,
      reading: hasReading,
      writing: hasWriting,
      detected: hasMath || hasReading || hasWriting
    };

    // Update widget based on context
    this.updateContextualHelp();
  }

  updateContextualHelp() {
    const content = document.getElementById('tutor-content');
    if (!content) return;

    let contextMessage = '';
    
    if (this.currentContext.math) {
      contextMessage += '📚 <strong>Math detected:</strong> I can help with step-by-step problem solving!<br>';
    }
    if (this.currentContext.reading) {
      contextMessage += '📖 <strong>Reading detected:</strong> I can help analyze text and answer questions!<br>';
    }
    if (this.currentContext.writing) {
      contextMessage += '✍️ <strong>Writing detected:</strong> I can help with structure and grammar!<br>';
    }
    
    if (contextMessage) {
      const messageDiv = document.createElement('div');
      messageDiv.className = 'tutor-message system';
      messageDiv.innerHTML = contextMessage;
      content.appendChild(messageDiv);
    }
  }

  toggleWidget() {
    const widget = document.getElementById('ai-tutor-widget');
    const overlay = document.getElementById('tutor-overlay');
    
    if (widget.classList.contains('show')) {
      this.hideWidget();
    } else {
      this.showWidget();
    }
  }

  showWidget() {
    const widget = document.getElementById('ai-tutor-widget');
    const overlay = document.getElementById('tutor-overlay');
    
    widget.classList.add('show');
    overlay.classList.add('show');
    this.isActive = true;
    
    // Focus on the widget
    setTimeout(() => {
      const content = document.getElementById('tutor-content');
      content.scrollTop = content.scrollHeight;
    }, 100);
  }

  hideWidget() {
    const widget = document.getElementById('ai-tutor-widget');
    const overlay = document.getElementById('tutor-overlay');
    
    widget.classList.remove('show');
    overlay.classList.remove('show');
    this.isActive = false;
  }

  clearConversation() {
    const content = document.getElementById('tutor-content');
    content.innerHTML = `
      <div class="tutor-message system">
        <strong>Conversation cleared!</strong> What would you like help with?
        <br><br>
        <small>💡 <strong>Free Mode:</strong> No API key required! I'll guide you through learning with step-by-step questions and examples.</small>
      </div>
    `;
    this.updateContextualHelp();
  }

  async sendMessage() {
    const userInput = this.getUserInput();
    if (!userInput.trim()) {
      this.addMessage('system', 'Please enter a question or select some text to get help.');
      return;
    }

    // Add user message
    this.addMessage('user', userInput);
    this.conversationHistory.push({ role: 'user', content: userInput });
    
    // Clear input
    document.getElementById('tutor-input').value = '';
    
    // Show loading
    this.showLoading();

    try {
      const response = await this.processUserRequest(userInput);
      this.hideLoading();
      this.addMessage('assistant', response);
      this.conversationHistory.push({ role: 'assistant', content: response });
    } catch (error) {
      this.hideLoading();
      this.addMessage('system', `Error: ${error.message}`);
    }
  }

  getUserInput() {
    const input = document.getElementById('tutor-input');
    return input ? input.value.trim() : '';
  }

  async processUserRequest(userInput) {
    const context = this.buildContext();
    
    // Use free AI services instead of API calls
    if (this.freeAIServices) {
      return this.freeAIServices.generateResponse(userInput, context);
    } else {
      // Fallback response if FreeAIServices is not available
      return this.getFallbackResponse(userInput, context);
    }
  }

  getFallbackResponse(userInput, context) {
    const input = userInput.toLowerCase();
    
    if (context.context.math || input.includes('math') || input.includes('solve') || input.includes('equation')) {
      return "Let's work on this math problem together! What do you think the first step should be? Remember, we need to isolate the variable on one side of the equation.";
    } else if (context.context.reading || input.includes('read') || input.includes('text') || input.includes('passage')) {
      return "Great! Let's analyze this text together. What do you think is the main idea? Can you identify any key details that support that main idea?";
    } else if (context.context.writing || input.includes('write') || input.includes('essay') || input.includes('paragraph')) {
      return "Let's work on your writing! What's your main point or thesis? How can you organize your supporting ideas in a logical way?";
    } else if (input.includes('grammar') || input.includes('sentence') || input.includes('tense')) {
      return "Let's look at the grammar here. What part of speech is this word? How does it function in the sentence?";
    } else if (input.includes('word') || input.includes('meaning') || input.includes('vocabulary')) {
      return "Let's figure out this word together! Look at the context around it. What clues can you find about its meaning?";
    } else {
      return "That's a great question! Let's work through this step by step. What do you already know about this topic? What would you like to understand better?";
    }
  }

  addMessage(type, content) {
    const contentDiv = document.getElementById('tutor-content');
    const messageDiv = document.createElement('div');
    messageDiv.className = `tutor-message ${type}`;
    messageDiv.innerHTML = content;
    contentDiv.appendChild(messageDiv);
    contentDiv.scrollTop = contentDiv.scrollHeight;
  }

  showLoading() {
    const contentDiv = document.getElementById('tutor-content');
    const loadingDiv = document.createElement('div');
    loadingDiv.id = 'tutor-loading';
    loadingDiv.className = 'tutor-loading';
    loadingDiv.innerHTML = `
      <div class="tutor-spinner"></div>
      <span>Thinking...</span>
    `;
    contentDiv.appendChild(loadingDiv);
    contentDiv.scrollTop = contentDiv.scrollHeight;
  }

  hideLoading() {
    const loadingDiv = document.getElementById('tutor-loading');
    if (loadingDiv) {
      loadingDiv.remove();
    }
  }

  buildContext() {
    const pageTitle = document.title;
    const pageUrl = window.location.href;
    const bodyText = document.body.innerText.substring(0, 2000); // Limit text length
    
    return {
      title: pageTitle,
      url: pageUrl,
      content: bodyText,
      context: this.currentContext,
      selectedText: this.selectedText
    };
  }
}

// Initialize the AI Tutor when the page loads
function initializeAITutor() {
  try {
    new AITutor();
  } catch (error) {
    console.error('Failed to initialize AI Tutor:', error);
    // Create a simple fallback button
    createFallbackButton();
  }
}

function createFallbackButton() {
  const button = document.createElement('button');
  button.id = 'ai-tutor-floating-btn';
  button.textContent = 'I Need Help';
  button.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 10000;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    border: none;
    border-radius: 50px;
    padding: 12px 24px;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;
    box-shadow: 0 4px 20px rgba(102, 126, 234, 0.4);
  `;
  button.addEventListener('click', () => {
    alert('AI Tutor is working! This is a simple fallback mode. The full extension should load properly after refreshing the page.');
  });
  document.body.appendChild(button);
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeAITutor);
} else {
  initializeAITutor();
}