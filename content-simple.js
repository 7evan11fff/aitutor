// Simple AI Tutor Content Script
console.log('🚀 AI TUTOR SIMPLE VERSION LOADED 🚀');

// Initialize AI modules
let aiModules = null;

function initializeAIModules() {
  const apiKey = localStorage.getItem('gemini_api_key') || 'AIzaSyBg1pozqH0G5WmMRiQnVnPZd6wDZfBoghw';
  if (!localStorage.getItem('gemini_api_key')) {
    localStorage.setItem('gemini_api_key', apiKey);
  }
  // aiModules = new AIModules(apiKey);
  console.log('AI modules initialized with key:', apiKey.substring(0, 10) + '...');
}

// Create floating button
function createFloatingButton() {
  console.log('Creating floating button');
  
  const existingBtn = document.getElementById('ai-tutor-floating-btn');
  if (existingBtn) {
    existingBtn.remove();
  }

  const button = document.createElement('div');
  button.id = 'ai-tutor-floating-btn';
  button.innerHTML = '🤖 AI Tutor';
  button.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #667eea;
    color: white;
    padding: 10px 15px;
    border-radius: 25px;
    cursor: pointer;
    z-index: 10000;
    font-family: Arial, sans-serif;
    font-size: 14px;
    box-shadow: 0 2px 10px rgba(0,0,0,0.3);
    user-select: none;
  `;

  button.addEventListener('click', () => {
    alert('AI Tutor is working! This is a simple test version.');
  });

  document.body.appendChild(button);
  console.log('Floating button created');
}

// Setup text selection
function setupTextSelection() {
  console.log('Setting up text selection');
  
  document.addEventListener('mouseup', (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText.length > 0) {
      console.log('Text selected:', selectedText);
      // Show the floating button when text is selected
      const button = document.getElementById('ai-tutor-floating-btn');
      if (button) {
        button.style.display = 'block';
      }
    }
  });
}

// Initialize
function initialize() {
  console.log('Initializing simple AI tutor');
  initializeAIModules();
  createFloatingButton();
  setupTextSelection();
  console.log('Simple AI tutor initialized successfully');
}

// Start when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
