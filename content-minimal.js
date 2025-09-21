// Minimal AI Tutor Content Script
console.log('🚀 MINIMAL AI TUTOR LOADED 🚀');

// Test if AIModules is available
console.log('AIModules available:', typeof window.AIModules);

// Simple floating button
function createFloatingButton() {
  console.log('Creating floating button');
  
  const existingBtn = document.getElementById('ai-tutor-floating-btn');
  if (existingBtn) {
    existingBtn.remove();
  }

  const button = document.createElement('button');
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
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText.length > 0) {
      // Test AI response
      if (typeof window.AIModules !== 'undefined') {
        console.log('AIModules available, testing AI response');
        // Try to use AI
        try {
          const ai = new window.AIModules('AIzaSyBg1pozqH0G5WmMRiQnVnPZd6wDZfBoghw');
          ai.handleMathRequest(selectedText, { selectedText }).then(response => {
            alert('AI Response: ' + response);
          }).catch(error => {
            alert('AI Error: ' + error.message);
          });
        } catch (error) {
          alert('AI Error: ' + error.message);
        }
      } else {
        alert('AIModules not available. Selected: ' + selectedText);
      }
    } else {
      alert('Please select some text first!');
    }
  });

  document.body.appendChild(button);
  console.log('Floating button created');
}

// Simple text selection
function setupTextSelection() {
  console.log('Setting up text selection');
  
  document.addEventListener('mouseup', (e) => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
    
    if (selectedText.length > 0) {
      console.log('Text selected:', selectedText);
      const button = document.getElementById('ai-tutor-floating-btn');
      if (button) {
        button.style.display = 'block';
      }
    } else {
      const button = document.getElementById('ai-tutor-floating-btn');
      if (button) {
        button.style.display = 'none';
      }
    }
  });
}

// Initialize
function initialize() {
  console.log('Initializing minimal AI tutor');
  createFloatingButton();
  setupTextSelection();
  console.log('Minimal AI tutor initialized successfully');
}

// Start when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
