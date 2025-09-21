// Popup script for AI Tutor Extension - Free Version
document.addEventListener('DOMContentLoaded', async () => {
  const statusIndicator = document.getElementById('statusIndicator');
  const statusText = document.getElementById('statusText');

  // Update status to show free mode is active
  updateStatus('success', 'Free Mode Active - Ready to help!');

  function updateStatus(type, message) {
    if (statusIndicator && statusText) {
      statusIndicator.className = `status-indicator ${type}`;
      statusText.textContent = message;
    }
  }

  // Check if content script is active
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: 'ping' }, (response) => {
      if (chrome.runtime.lastError) {
        updateStatus('warning', 'Extension not active on this page');
      } else {
        updateStatus('success', 'Extension active and ready!');
      }
    });
  });
});
