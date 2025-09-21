// Simple Content Script for AI Tutor Extension - Debug Version
console.log('Simple content script loaded');

// Simple fallback responses
const simpleResponses = {
  math: [
    "Let's work on this math problem together! What do you think the first step should be?",
    "Great! Let's break this down step by step. What are we trying to solve for?",
    "Remember, we need to isolate the variable on one side of the equation.",
    "What operation should we do first to solve this problem?"
  ],
  reading: [
    "Let's analyze this text together. What do you think is the main idea?",
    "Can you identify any key details that support the main idea?",
    "What questions do you have about this passage?",
    "Let's look for clues in the context to help us understand this better."
  ],
  writing: [
    "Let's work on your writing! What's your main point or thesis?",
    "How can you organize your supporting ideas in a logical way?",
    "What evidence or examples will support each point?",
    "Let's brainstorm some ideas together. What comes to mind first?"
  ],
  general: [
    "That's a great question! Let's work through this step by step.",
    "What do you already know about this topic?",
    "What would you like to understand better?",
    "Let's break this down into smaller, manageable pieces."
  ]
};

function getRandomResponse(category) {
  const responses = simpleResponses[category] || simpleResponses.general;
  return responses[Math.floor(Math.random() * responses.length)];
}

function detectContext(text) {
  const lowerText = text.toLowerCase();
  if (lowerText.includes('math') || lowerText.includes('solve') || lowerText.includes('equation')) {
    return 'math';
  } else if (lowerText.includes('read') || lowerText.includes('text') || lowerText.includes('passage')) {
    return 'reading';
  } else if (lowerText.includes('write') || lowerText.includes('essay') || lowerText.includes('paragraph')) {
    return 'writing';
  }
  return 'general';
}

function createFloatingButton() {
  console.log('Creating floating button');
  
  // Remove existing button
  const existingBtn = document.getElementById('ai-tutor-floating-btn');
  if (existingBtn) {
    existingBtn.remove();
  }

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
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;
  
  button.addEventListener('click', () => {
    console.log('Button clicked');
    showSimpleWidget();
  });
  
  document.body.appendChild(button);
  console.log('Floating button created');
}

function showSimpleWidget() {
  console.log('Showing simple widget');
  
  // Remove existing widget
  const existingWidget = document.getElementById('simple-tutor-widget');
  if (existingWidget) {
    existingWidget.remove();
  }

  const widget = document.createElement('div');
  widget.id = 'simple-tutor-widget';
  widget.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 10001;
    width: 90%;
    max-width: 500px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow: hidden;
  `;

  widget.innerHTML = `
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; display: flex; justify-content: space-between; align-items: center;">
      <h2 style="margin: 0; font-size: 20px;">AI Tutor Assistant</h2>
      <button id="simple-close" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">×</button>
    </div>
    <div style="padding: 24px;">
      <div style="margin-bottom: 16px; padding: 16px; background: #f0f9ff; border-left: 4px solid #48bb78; border-radius: 8px;">
        <strong>Welcome!</strong> I'm here to help you learn step by step. What would you like help with?
        <br><br>
        <small>💡 <strong>Free Mode:</strong> No API key required! I'll guide you through learning with step-by-step questions.</small>
      </div>
      <div style="margin-bottom: 16px;">
        <textarea id="simple-input" placeholder="Ask me anything or select text on the page..." style="width: 100%; min-height: 80px; padding: 12px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 14px; font-family: inherit; resize: vertical;"></textarea>
      </div>
      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <button id="simple-clear" style="padding: 10px 20px; border: none; border-radius: 8px; background: #e2e8f0; color: #4a5568; cursor: pointer;">Clear</button>
        <button id="simple-send" style="padding: 10px 20px; border: none; border-radius: 8px; background: #667eea; color: white; cursor: pointer;">Get Help</button>
      </div>
    </div>
  `;

  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'simple-overlay';
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 10000;
  `;

  document.body.appendChild(overlay);
  document.body.appendChild(widget);

  // Add event listeners
  document.getElementById('simple-close').addEventListener('click', () => {
    widget.remove();
    overlay.remove();
  });

  overlay.addEventListener('click', () => {
    widget.remove();
    overlay.remove();
  });

  document.getElementById('simple-clear').addEventListener('click', () => {
    document.getElementById('simple-input').value = '';
  });

  document.getElementById('simple-send').addEventListener('click', () => {
    const input = document.getElementById('simple-input').value.trim();
    if (input) {
      const context = detectContext(input);
      const response = getRandomResponse(context);
      alert(`AI Tutor Response:\n\n${response}`);
    } else {
      alert('Please enter a question!');
    }
  });

  console.log('Simple widget created');
}

// Initialize when page loads
function initializeSimpleTutor() {
  console.log('Initializing simple tutor');
  
  try {
    createFloatingButton();
    console.log('Simple tutor initialized successfully');
  } catch (error) {
    console.error('Error initializing simple tutor:', error);
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'ping') {
    sendResponse({ status: 'active' });
  }
});

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeSimpleTutor);
} else {
  initializeSimpleTutor();
}
