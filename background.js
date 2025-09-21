// Background script for AI Tutor Extension
console.log('AI Tutor Extension background script loaded');

// Handle extension installation
chrome.runtime.onInstalled.addListener((details) => {
  console.log('AI Tutor Extension installed/updated:', details.reason);
});

// Handle messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  console.log('Background received message:', request);
  
  if (request.action === 'getApiKey') {
    // Get API key from storage
    chrome.storage.local.get(['claude_api_key'], (result) => {
      sendResponse({ apiKey: result.claude_api_key });
    });
    return true; // Keep message channel open for async response
  }
  
  if (request.action === 'setApiKey') {
    // Save API key to storage
    chrome.storage.local.set({ claude_api_key: request.apiKey }, () => {
      sendResponse({ success: true });
    });
    return true;
  }
  
  if (request.action === 'callClaudeAPI') {
    // Handle Claude API calls from content script
    handleClaudeAPICall(request, sendResponse);
    return true; // Keep message channel open for async response
  }
});

// Handle Claude API calls
async function handleClaudeAPICall(request, sendResponse) {
  try {
    console.log('Background: Making Claude API call...');
    console.log('Background: API Key length:', request.apiKey ? request.apiKey.length : 'undefined');
    console.log('Background: API Key starts with:', request.apiKey ? request.apiKey.substring(0, 10) : 'undefined');
    console.log('Background: API Key ends with:', request.apiKey ? request.apiKey.substring(request.apiKey.length - 10) : 'undefined');
    console.log('Background: Messages:', request.messages);
    
    const requestBody = {
      model: 'claude-3-haiku-20240307',
      max_tokens: request.maxTokens || 4000,
      temperature: request.temperature || 0.7,
      messages: request.messages
    };
    
    console.log('Background: Request body:', JSON.stringify(requestBody, null, 2));
    
    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': request.apiKey,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-direct-browser-access': 'true'
      },
      body: JSON.stringify(requestBody)
    });

    console.log('Background: Claude API response status:', response.status);

    if (!response.ok) {
      if (response.status === 401) {
        const errorData = await response.json().catch(() => ({}));
        console.error('401 Unauthorized:', errorData);
        sendResponse({ 
          success: false, 
          error: `Invalid API key (401). Error: ${JSON.stringify(errorData)}. Please check your API key at Anthropic Console: https://console.anthropic.com/` 
        });
        return;
      }
      
      if (response.status === 404) {
        const errorData = await response.json().catch(() => ({}));
        console.error('404 Not Found:', errorData);
        sendResponse({ 
          success: false, 
          error: `API endpoint not found (404). Error: ${JSON.stringify(errorData)}. This might be due to an incorrect model name or API version.` 
        });
        return;
      }
      
      if (response.status === 400) {
        const errorData = await response.json().catch(() => ({}));
        console.error('400 Bad Request:', errorData);
        
        if (errorData.error && errorData.error.message) {
          if (errorData.error.message.includes('expired') || errorData.error.message.includes('API key expired')) {
            sendResponse({ 
              success: false, 
              error: 'API key expired. Please get a new API key from Anthropic Console: https://console.anthropic.com/' 
            });
            return;
          } else if (errorData.error.message.includes('invalid') || errorData.error.message.includes('API key')) {
            sendResponse({ 
              success: false, 
              error: 'Invalid API key. Please check your API key at Anthropic Console: https://console.anthropic.com/' 
            });
            return;
          }
        }
        
        sendResponse({ 
          success: false, 
          error: `API request failed: 400 - Bad Request. Error: ${JSON.stringify(errorData)}` 
        });
        return;
      }
      
      if (response.status === 429) {
        // Rate limit - wait and retry once
        console.log('Rate limit hit, waiting 2 seconds before retry...');
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        const retryResponse = await fetch('https://api.anthropic.com/v1/messages', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'x-api-key': request.apiKey,
            'anthropic-version': '2023-06-01',
            'anthropic-dangerous-direct-browser-access': 'true'
          },
          body: JSON.stringify({
            model: 'claude-3-haiku-20240307',
            max_tokens: request.maxTokens || 4000,
            temperature: request.temperature || 0.7,
            messages: request.messages
          })
        });
        
        if (!retryResponse.ok) {
          sendResponse({ 
            success: false, 
            error: `API request failed after retry: ${retryResponse.status}` 
          });
          return;
        }
        
        const retryData = await retryResponse.json();
        console.log('Background: Claude API retry response received:', retryData);
        
        if (retryData.content && retryData.content[0] && retryData.content[0].text) {
          sendResponse({ 
            success: true, 
            response: retryData.content[0].text 
          });
          return;
        } else {
          sendResponse({ 
            success: false, 
            error: 'Unexpected retry API response format' 
          });
          return;
        }
      }
      
      sendResponse({ 
        success: false, 
        error: `API request failed: ${response.status}` 
      });
      return;
    }

    const data = await response.json();
    console.log('Background: Claude API response received:', data);
    
    if (data.content && data.content[0] && data.content[0].text) {
      sendResponse({ 
        success: true, 
        response: data.content[0].text 
      });
    } else {
      sendResponse({ 
        success: false, 
        error: 'Unexpected API response format' 
      });
    }
  } catch (error) {
    console.error('Background: Claude API Error:', error);
    sendResponse({ 
      success: false, 
      error: `Network error: ${error.message}` 
    });
  }
}

// Handle extension icon click
chrome.action.onClicked.addListener((tab) => {
  console.log('Extension icon clicked on tab:', tab.url);
  // The popup will handle the UI
});
