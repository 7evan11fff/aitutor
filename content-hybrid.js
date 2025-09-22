// Hybrid AI Tutor Content Script - Building up from working minimal version
console.log('🚀 HYBRID AI TUTOR LOADED 🚀');

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
`;
document.head.appendChild(style);

// Test if AIModules is available
console.log('AIModules available:', typeof window.AIModules);

// Detailed AI responses with step-by-step guidance
console.log('🔍 DEBUG: About to define detailedResponses object');
const detailedResponses = {
  math: {
    algebra: [
      "Let's solve this algebra problem step by step! First, I need to understand what we're working with. Can you tell me what the equation looks like? For example, is it something like '2x + 5 = 13'? Once I know the equation, I'll guide you through each step: identifying the variable, isolating it, and checking your answer.",
      "Great! Now let's break this down systematically. Step 1: What variable are we solving for? Step 2: What operations do you see in the equation? Step 3: What's the first thing we need to do to isolate the variable? Remember, we want to get the variable by itself on one side of the equals sign.",
      "Perfect! Now let's work through the solution. The key principle is: whatever you do to one side of the equation, you must do to the other side to keep it balanced. So if we subtract 5 from the left side, we must subtract 5 from the right side too. What do you think the next step should be?",
      "Excellent work! Now let's verify our answer by substituting it back into the original equation. If we got x = 4, then 2(4) + 5 should equal 13. Let's check: 8 + 5 = 13. Does this work? If yes, we've solved it correctly! If not, let's trace back through our steps to find where we might have made an error."
    ],
    geometry: [
      "Let's tackle this geometry problem together! First, let's identify what we're working with. What shape are we dealing with? Is it a rectangle, circle, triangle, or something else? Once we know the shape, we can identify the formula we need and the information we already have.",
      "Great! Now let's think about what we're trying to find. Are we looking for area, perimeter, volume, or something else? For area, we might use A = l × w for rectangles, or A = πr² for circles. What formula do you think applies to your problem?",
      "Perfect! Now let's identify what information we have. What measurements are given in the problem? Write them down clearly. Then, let's plug these values into our formula. Remember to be careful with units - if the problem gives measurements in different units, we might need to convert them first.",
      "Excellent! Now let's calculate step by step. Show me your work as you go through each part of the formula. Don't forget to include units in your final answer. For example, if we're finding area, our answer should be in square units (like cm² or in²)."
    ]
  },
  reading: [
    "Let's work on this reading comprehension together! First, let's read the passage carefully. What's the main idea? Look for the topic sentence or the central theme that the author is discussing.",
    "Great! Now let's identify the key details. What specific information supports the main idea? Look for facts, examples, or explanations that help you understand the topic better.",
    "Perfect! Now let's think about the author's purpose. Why did they write this? Are they trying to inform, persuade, entertain, or explain something? Understanding the purpose helps you answer questions about the text.",
    "Excellent! Now let's practice making inferences. What can you conclude from the information given? What does the author imply or suggest without directly stating it?"
  ],
  writing: [
    "Let's work on your writing together! First, let's identify what type of writing you're doing. Is it an essay, story, report, or something else? Each type has its own structure and requirements.",
    "Great! Now let's plan your main idea. What's the central point you want to make? This will be your thesis statement or main argument that everything else supports.",
    "Perfect! Now let's organize your supporting points. What evidence, examples, or details will you use to support your main idea? Arrange them in a logical order that flows well.",
    "Excellent! Now let's work on your introduction and conclusion. The introduction should grab the reader's attention and introduce your main idea. The conclusion should summarize your points and leave a strong final impression."
  ],
  grammar: [
    "Let's work on grammar together! First, let's identify what part of speech we're dealing with. Is it a noun, verb, adjective, adverb, or something else?",
    "Great! Now let's look at the sentence structure. What's the subject and what's the predicate? Understanding the basic structure helps you identify grammar issues.",
    "Perfect! Now let's check for common grammar mistakes. Are there any issues with subject-verb agreement, verb tenses, or punctuation?",
    "Excellent! Now let's practice using the correct grammar. Try rewriting the sentence or phrase with the proper grammar rules applied."
  ],
  vocabulary: [
    "Let's work on vocabulary together! First, let's look at the context. What clues do you see around the word that might help you understand its meaning?",
    "Great! Now let's break down the word. Are there any prefixes, suffixes, or root words you recognize? These can give you hints about the word's meaning.",
    "Perfect! Now let's make an educated guess. Based on the context and word parts, what do you think this word means? Don't worry about being perfect - just make your best guess.",
    "Excellent! Now let's verify your understanding. Can you use the word in a sentence of your own? This helps confirm that you really understand its meaning."
  ]
};
console.log('🔍 DEBUG: detailedResponses object defined successfully');

// Site detection patterns
console.log('🔍 DEBUG: About to define sitePatterns object');
const sitePatterns = {
  math: [
    'khanacademy.org', 'mathway.com', 'symbolab.com', 'desmos.com', 'wolframalpha.com',
    'math.com', 'purplemath.com', 'mathisfun.com', 'brilliant.org', 'coursera.org',
    'edx.org', 'udemy.com', 'mathplanet.com', 'mathbits.com', 'coolmath.com',
  ],
  reading: [
    'newsela.com', 'commonlit.org', 'readworks.org', 'scholastic.com', 'time.com',
    'nationalgeographic.com', 'scientificamerican.com', 'bbc.com', 'npr.org',
    'pbs.org', 'smithsonianmag.com', 'history.com', 'biography.com'
  ],
  writing: [
    'grammarly.com', 'hemingwayapp.com', 'prowritingaid.com', 'scribbr.com',
    'owl.purdue.edu', 'writingcenter.unc.edu', 'grammar.com', 'englishgrammar.org'
  ],
  vocabulary: [
    'dictionary.com', 'merriam-webster.com', 'thesaurus.com', 'vocabulary.com',
    'wordnik.com', 'oxforddictionaries.com', 'cambridge.org', 'macmillandictionary.com'
  ],
  general: [
    'wikipedia.org', 'britannica.com', 'encyclopedia.com', 'britannica.com',
    'study.com', 'sparknotes.com', 'cliffsnotes.com', 'shmoop.com'
  ]
};
console.log('🔍 DEBUG: sitePatterns object defined successfully');

// Enhanced site detection
console.log('🔍 DEBUG: About to define detectSiteContext function');
function detectSiteContext() {
  const hostname = window.location.hostname.toLowerCase();
  const pathname = window.location.pathname.toLowerCase();
  const title = document.title.toLowerCase();
  const bodyText = document.body.innerText.toLowerCase();
  
  console.log('Detecting site context for:', hostname);
  console.log('Page title:', title);
  console.log('Body text sample:', bodyText.substring(0, 200) + '...');
  
  // Check for math patterns
  if (sitePatterns.math.some(site => hostname.includes(site))) {
    console.log('Detected as math site');
    return 'math';
  }
  
  // Check for reading patterns
  if (sitePatterns.reading.some(site => hostname.includes(site))) {
    console.log('Detected as reading site');
    return 'reading';
  }
  
  // Check for writing patterns
  if (sitePatterns.writing.some(site => hostname.includes(site))) {
    console.log('Detected as writing site');
    return 'writing';
  }
  
  // Check for vocabulary patterns
  if (sitePatterns.vocabulary.some(site => hostname.includes(site))) {
    console.log('Detected as vocabulary site');
    return 'vocabulary';
  }
  
  // Enhanced content detection with scoring
  const mathKeywords = ['solve', 'equation', 'formula', 'calculate', 'algebra', 'geometry', 'trigonometry', 'calculus', 'problem', 'math', 'mathematics', 'number', 'variable', 'function', 'graph', 'coordinate', 'binomial', 'midpoint', 'exponent'];
  const readingKeywords = ['passage', 'comprehension', 'article', 'story', 'chapter', 'read', 'reading', 'text', 'literature', 'book', 'novel', 'poem', 'essay'];
  const writingKeywords = ['essay', 'paragraph', 'composition', 'draft', 'outline', 'write', 'writing', 'grammar', 'spelling', 'sentence', 'structure', 'thesis', 'subject', 'verb', 'predicate', 'noun', 'pronoun', 'adjective', 'adverb'];
  const vocabularyKeywords = ['vocabulary', 'word', 'definition', 'meaning', 'synonym', 'antonym', 'thesaurus', 'dictionary', 'term', 'phrase', 'idiom', 'expression'];
  
  const mathScore = mathKeywords.filter(keyword => bodyText.includes(keyword)).length;
  const readingScore = readingKeywords.filter(keyword => bodyText.includes(keyword)).length;
  const writingScore = writingKeywords.filter(keyword => bodyText.includes(keyword)).length;
  const vocabularyScore = vocabularyKeywords.filter(keyword => bodyText.includes(keyword)).length;
  
  console.log('Content scores - Math:', mathScore, 'Reading:', readingScore, 'Writing:', writingScore, 'Vocabulary:', vocabularyScore);
  
  // Check for math expressions and symbols
  const mathExpressions = bodyText.match(/[0-9]+\s*[+\-*/=]\s*[0-9]+/g) || [];
  const mathSymbols = bodyText.match(/[x²³√π∑∫]/g) || [];
  
  // Check for grammar-specific patterns
  const grammarPatterns = /\b(subject|verb|predicate|noun|pronoun|adjective|adverb|preposition|conjunction|interjection)\b/i;
  const hasGrammarPatterns = grammarPatterns.test(bodyText);
  
  console.log('Grammar patterns found:', hasGrammarPatterns);
  console.log('Math score:', mathScore, 'Reading score:', readingScore, 'Writing score:', writingScore);
  
  // Prioritize grammar detection
  if (hasGrammarPatterns || writingScore > 1) {
    console.log('Detected as writing/grammar content');
    return 'writing';
  }
  
  if (mathScore > 2 || mathExpressions.length > 0 || mathSymbols.length > 0) {
    console.log('Detected as math content');
    return 'math';
  }
  
  if (readingScore > 2) {
    console.log('Detected as reading content');
    return 'reading';
  }
  
  if (vocabularyScore > 1) {
    console.log('Detected as vocabulary content');
    return 'vocabulary';
  }
  
  // Check for common educational patterns
  if (bodyText.includes('question') || bodyText.includes('answer') || bodyText.includes('quiz') || 
      bodyText.includes('test') || bodyText.includes('exam') || bodyText.includes('homework')) {
    console.log('Detected as educational content');
    return 'general';
  }
  
  console.log('Detected as general content');
  return 'general';
}
console.log('🔍 DEBUG: detectSiteContext function defined successfully');

// Initialize AI Modules
let aiModules = null;

function initializeAIModules() {
  console.log('🔍 DEBUG: Inside initializeAIModules function');
  const apiKey = localStorage.getItem('claude_api_key') || null;
  if (!localStorage.getItem('claude_api_key')) {
    localStorage.setItem('claude_api_key', apiKey);
  }
  console.log('🔍 DEBUG: About to create AIModules instance');
  console.log('🔍 DEBUG: AIModules class exists:', typeof window.AIModules);
  
  // Wait for AIModules to be available
  if (typeof window.AIModules === 'undefined') {
    console.log('🔍 DEBUG: AIModules not available yet, waiting...');
    // Wait a bit and try again
    setTimeout(() => {
      if (typeof window.AIModules !== 'undefined') {
        aiModules = new window.AIModules(apiKey);
        console.log('🔍 DEBUG: AIModules instance created successfully after wait');
      } else {
        console.error('🔍 DEBUG: AIModules still not available after wait');
      }
    }, 100);
  } else {
    aiModules = new window.AIModules(apiKey);
    console.log('🔍 DEBUG: AIModules instance created successfully');
  }
}

// Test AI response function
async function getAIResponse(prompt, context = '') {
  console.log('🔍 DEBUG: Inside getAIResponse function');
  console.log('Prompt:', prompt);
  console.log('Context:', context);
  
  if (!aiModules) {
    console.log('🔍 DEBUG: aiModules not initialized, calling initializeAIModules');
    initializeAIModules();
  }
  
  try {
    // Build context from chat history for better follow-up responses
    const chatHistoryContext = getChatHistory().slice(-4).map(msg => 
      `${msg.type === 'user' ? 'Student' : 'Tutor'}: ${msg.content}`
    ).join('\n');
    
    const fullContext = chatHistoryContext ? 
      `Previous conversation:\n${chatHistoryContext}\n\nCurrent question: ${prompt}` : 
      prompt;
    
    // Detect the best handler based on content
    const siteContext = detectSiteContext();
    console.log('Site context detected:', siteContext);
    
    // Also check the actual prompt text for grammar keywords
    const promptText = prompt.toLowerCase();
    const grammarKeywords = ['subject', 'verb', 'predicate', 'noun', 'pronoun', 'adjective', 'adverb', 'grammar', 'sentence', 'part of speech', 'identify', 'words'];
    const hasGrammarKeywords = grammarKeywords.some(keyword => promptText.includes(keyword));
    
    console.log('Prompt contains grammar keywords:', hasGrammarKeywords);
    
    let response;
    if (hasGrammarKeywords || siteContext === 'writing') {
      console.log('Using grammar handler');
      // Pass the full context including the selected text and conversation
      const contextToSend = context ? `${context}\n\nStudent question: ${fullContext}` : fullContext;
      console.log('Full context being sent to grammar handler:', contextToSend);
      response = await aiModules.handleGrammarRequest(contextToSend, { selectedText: context });
    } else if (siteContext === 'math') {
      console.log('Using math handler');
      // Check if HTML extraction was used for this context
      const htmlExtracted = context && context.includes('MathJax') || context.includes('katex') || context.includes('latex');
      response = await aiModules.handleMathRequest(fullContext, { 
        selectedText: context,
        htmlExtracted: htmlExtracted
      });
    } else if (siteContext === 'reading') {
      console.log('Using reading handler');
      response = await aiModules.handleReadingRequest(fullContext, { selectedText: context });
    } else if (siteContext === 'vocabulary') {
      console.log('Using vocabulary handler');
      response = await aiModules.handleVocabularyRequest(fullContext, { selectedText: context });
    } else {
      console.log('Using general handler');
      response = await aiModules.handleGeneralRequest(fullContext, { selectedText: context });
    }
    
    console.log('AI response received:', response);
    return response;
  } catch (error) {
    console.error('AI Error:', error);
    
    // Check if it's an API error
    if (error.message.includes('API') || error.message.includes('quota') || error.message.includes('401') || error.message.includes('429')) {
      return `**AI Service Error** ⚠️
      
The AI service is currently unavailable. This might be due to:
- API quota exceeded
- Network connectivity issues
- Service maintenance

**What you can do:**
1. Try again in a few minutes
2. Type \`check quota\` to see your API status
3. Type \`update api key\` to use a different key
4. Type \`clear quota\` to reset to default

**In the meantime, here's some general help:**
${getFallbackResponse(prompt, context)}`;
    }
    
    return `**AI Error:** ${error.message}`;
  }
}

// Fallback responses when AI is unavailable
console.log('🔍 DEBUG: About to define getFallbackResponse function');
function getFallbackResponse(prompt, context) {
  const lowerPrompt = prompt.toLowerCase();
  
  // Check if this is a piecewise function problem
  if (context && (context.includes('piecewise') || context.includes('f(x)=') && context.includes('{'))) {
    return "I'd love to help you with this piecewise function! Let's work through it step by step. First, can you identify which condition applies to your input value? Look at the inequalities and see which range your input falls into.";
  }
  
  // Check if this is a math problem
  if (context && context.includes('Selected text:') && context.includes('=')) {
    const selectedText = context.replace('Selected text: "', '').replace('"', '');
    
    // Check for piecewise function pattern
    if (selectedText.includes('f(x)=') && selectedText.includes('{')) {
      return "I'd love to help you with this piecewise function! Let's work through it step by step. First, can you identify which condition applies to your input value? Look at the inequalities and see which range your input falls into.";
    }
    
    // Check for binomial expansion pattern
    if (selectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)\d*[=]/)) {
      return "I'd love to help you with this binomial expansion! Let's work through it step by step. First, can you identify what 'a' and 'b' are in your expression?";
    }
    
    // Generic math problem fallback
    if (selectedText.match(/[=+\-*/]/)) {
      return "I'd love to help you with this math problem! Let's work through it step by step. What specific part are you having trouble with?";
    }
  }
  
  if (lowerPrompt.includes('math') || lowerPrompt.includes('solve') || lowerPrompt.includes('calculate')) {
    return "I'd love to help you with this math problem! Let's work through it step by step. What specific part are you having trouble with?";
  }
  
  if (lowerPrompt.includes('reading') || lowerPrompt.includes('comprehension') || lowerPrompt.includes('passage')) {
    return "I'd love to help you with this reading comprehension! Let's work through it together. What specific part would you like help with?";
  }
  
  if (lowerPrompt.includes('writing') || lowerPrompt.includes('essay') || lowerPrompt.includes('paragraph')) {
    return "I'd love to help you with your writing! Let's work through it step by step. What specific part would you like help with?";
  }
  
  if (lowerPrompt.includes('grammar') || lowerPrompt.includes('sentence') || lowerPrompt.includes('punctuation')) {
    return "I'd love to help you with grammar! Let's work through it together. What specific part would you like help with?";
  }
  
  if (lowerPrompt.includes('vocabulary') || lowerPrompt.includes('word') || lowerPrompt.includes('definition')) {
    return "I'd love to help you with vocabulary! Let's work through it together. What specific word or concept would you like help with?";
  }
  
  return "I'd love to help you with this! Let's work through it step by step. What specific part would you like help with?";
}
console.log('🔍 DEBUG: getFallbackResponse function defined successfully');

// Follow-up responses for continued conversation
console.log('🔍 DEBUG: About to define getFollowUpResponse function');
function getFollowUpResponse(prompt, context) {
  const lowerPrompt = prompt.toLowerCase();
  
  // Check if we have selected text that looks like math
  if (context && context.includes('Selected text:') && context.includes('=')) {
    const selectedText = context.replace('Selected text: "', '').replace('"', '');
    
    // Check for binomial expansion pattern
    if (selectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)\d*[=]/)) {
      return `**Binomial Expansion Problem** 🧮

**Problem:** ${selectedText}

**Step 1:** Recall the Binomial Formula
(a + b)² = a² + 2ab + b²

**Step 2:** Identify the terms
Looking at your expression, identify what 'a' and 'b' are in the parentheses.

**Step 3:** Apply the formula
Substitute your terms into the formula: (a + b)² = a² + 2ab + b²

**Step 4:** Simplify each term
- (a)² = ?
- 2(a)(b) = ?
- (b)² = ?

**Step 5:** Combine the terms
Add all three terms together to get your final answer.

**Need help with a specific step?** Let me know which part you'd like me to explain further!`;
    }
    
    // Generic math problem fallback - only for basic math, not functions
    if (selectedText.match(/[=+\-*/]/) && !selectedText.includes('function') && !selectedText.includes('f(') && !selectedText.includes('{')) {
      return `**Math Problem** 🔢

**Problem:** ${selectedText}

**Step 1:** Identify what you're solving for
Look at what the problem is asking you to find.

**Step 2:** Identify the given information
What numbers, variables, or values are provided?

**Step 3:** Choose the right method
- Algebra: Solve for variables
- Arithmetic: Perform calculations
- Geometry: Use formulas

**Step 4:** Work step by step
Show your work clearly for each step.

**What specific part would you like help with?**`;
    }
  }
  
  if (lowerPrompt.includes('math') || lowerPrompt.includes('solve') || lowerPrompt.includes('calculate')) {
    return "I'd love to help you with this math problem! Let's work through it step by step. What specific part are you having trouble with?";
  }
  
  if (lowerPrompt.includes('reading') || lowerPrompt.includes('comprehension') || lowerPrompt.includes('passage')) {
    return "I'd love to help you with this reading comprehension! Let's work through it together. What specific part would you like help with?";
  }
  
  if (lowerPrompt.includes('writing') || lowerPrompt.includes('essay') || lowerPrompt.includes('paragraph')) {
    return "I'd love to help you with your writing! Let's work through it step by step. What specific part would you like help with?";
  }
  
  if (lowerPrompt.includes('grammar') || lowerPrompt.includes('sentence') || lowerPrompt.includes('punctuation')) {
    return "I'd love to help you with grammar! Let's work through it together. What specific part would you like help with?";
  }
  
  if (lowerPrompt.includes('vocabulary') || lowerPrompt.includes('word') || lowerPrompt.includes('definition')) {
    return "I'd love to help you with vocabulary! Let's work through it together. What specific word or concept would you like help with?";
  }
  
  return "I'd love to help you with this! Let's work through it step by step. What specific part would you like help with?";
}
console.log('🔍 DEBUG: getFollowUpResponse function defined successfully');

// Detailed responses for specific problem types
console.log('🔍 DEBUG: About to define getDetailedResponse function');
function getDetailedResponse(prompt, context) {
  const lowerPrompt = prompt.toLowerCase();
  
  // Check if we have selected text that looks like math
  if (context && context.includes('Selected text:') && context.includes('=')) {
    const selectedText = context.replace('Selected text: "', '').replace('"', '');
    
    // Check for binomial expansion pattern
    if (selectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)\d*[=]/)) {
      return `**Binomial Expansion Problem** 🧮

**Problem:** ${selectedText}

**Step 1:** Recall the Binomial Formula
(a + b)² = a² + 2ab + b²

**Step 2:** Identify the terms
Looking at your expression, identify what 'a' and 'b' are in the parentheses.

**Step 3:** Apply the formula
Substitute your terms into the formula: (a + b)² = a² + 2ab + b²

**Step 4:** Simplify each term
- (a)² = ?
- 2(a)(b) = ?
- (b)² = ?

**Step 5:** Combine the terms
Add all three terms together to get your final answer.

**Need help with a specific step?** Let me know which part you'd like me to explain further!`;
    }
    
    // Generic math problem fallback - only for basic math, not functions
    if (selectedText.match(/[=+\-*/]/) && !selectedText.includes('function') && !selectedText.includes('f(') && !selectedText.includes('{')) {
      return `**Math Problem** 🔢

**Problem:** ${selectedText}

**Step 1:** Identify what you're solving for
Look at what the problem is asking you to find.

**Step 2:** Identify the given information
What numbers, variables, or values are provided?

**Step 3:** Choose the right method
- Algebra: Solve for variables
- Arithmetic: Perform calculations
- Geometry: Use formulas

**Step 4:** Work step by step
Show your work clearly for each step.

**What specific part would you like help with?**`;
    }
  }
  
  if (lowerPrompt.includes('math') || lowerPrompt.includes('solve') || lowerPrompt.includes('calculate')) {
    return "I'd love to help you with this math problem! Let's work through it step by step. What specific part are you having trouble with?";
  }
  
  if (lowerPrompt.includes('reading') || lowerPrompt.includes('comprehension') || lowerPrompt.includes('passage')) {
    return "I'd love to help you with this reading comprehension! Let's work through it together. What specific part would you like help with?";
  }
  
  if (lowerPrompt.includes('writing') || lowerPrompt.includes('essay') || lowerPrompt.includes('paragraph')) {
    return "I'd love to help you with your writing! Let's work through it step by step. What specific part would you like help with?";
  }
  
  if (lowerPrompt.includes('grammar') || lowerPrompt.includes('sentence') || lowerPrompt.includes('punctuation')) {
    return "I'd love to help you with grammar! Let's work through it together. What specific part would you like help with?";
  }
  
  if (lowerPrompt.includes('vocabulary') || lowerPrompt.includes('word') || lowerPrompt.includes('definition')) {
    return "I'd love to help you with vocabulary! Let's work through it together. What specific word or concept would you like help with?";
  }
  
  return "I'd love to help you with this! Let's work through it step by step. What specific part would you like help with?";
}
console.log('🔍 DEBUG: getDetailedResponse function defined successfully');

// Chat history management
let chatHistory = [];

function saveMessageToHistory(type, content) {
  const message = {
    type: type,
    content: content,
    timestamp: new Date().toISOString()
  };
  
  chatHistory.push(message);
  
  // Keep only the last 10 messages
  if (chatHistory.length > 10) {
    chatHistory = chatHistory.slice(-10);
  }
  
  // Save to localStorage
  try {
    localStorage.setItem('ai-tutor-chat-history', JSON.stringify(chatHistory));
  } catch (error) {
    console.warn('Could not save chat history to localStorage:', error);
  }
}

function loadChatHistory() {
  try {
    const saved = localStorage.getItem('ai-tutor-chat-history');
    if (saved) {
      chatHistory = JSON.parse(saved);
      // Ensure we only keep the last 10 messages
      if (chatHistory.length > 10) {
        chatHistory = chatHistory.slice(-10);
      }
    }
  } catch (error) {
    console.warn('Could not load chat history from localStorage:', error);
    chatHistory = [];
  }
}

function getChatHistory() {
  return chatHistory || [];
}

// Enhanced widget with chat functionality
function showEnhancedWidget() {
  console.log('Showing enhanced widget');
  
  const existingWidget = document.getElementById('enhanced-tutor-widget');
  if (existingWidget) {
    existingWidget.remove();
  }

  // Load chat history
  loadChatHistory();
  
  const context = detectSiteContext();
  const siteInfo = getSiteInfo(context);
  
  const widget = document.createElement('div');
  widget.id = 'enhanced-tutor-widget';
  widget.style.cssText = `
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 90%;
    max-width: 600px;
    height: 80%;
    max-height: 500px;
    background: white;
    border-radius: 12px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    z-index: 10001;
    display: flex;
    flex-direction: column;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  `;

  widget.innerHTML = `
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h3 style="margin: 0; font-size: 18px; font-weight: 600;">🎓 AI Tutor Assistant</h3>
        <p style="margin: 5px 0 0 0; font-size: 12px; opacity: 0.9;">${siteInfo.name} • ${siteInfo.subject}</p>
      </div>
      <div style="display: flex; gap: 10px;">
        <button id="enhanced-clear" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 12px;">Clear Chat</button>
        <button id="enhanced-close" style="background: rgba(255,255,255,0.2); border: none; color: white; padding: 8px 12px; border-radius: 6px; cursor: pointer; font-size: 12px;">✕</button>
      </div>
    </div>
    <div id="enhanced-content" style="flex: 1; padding: 20px; overflow-y: auto; background: #f8f9fa;">
      <div style="text-align: center; color: #666; margin-top: 50px;">
        <div style="font-size: 48px; margin-bottom: 20px;">🤖</div>
        <h4 style="margin: 0 0 10px 0; color: #333;">Welcome to AI Tutor!</h4>
        <p style="margin: 0; font-size: 14px;">Select text and ask questions, or type a general question below.</p>
      </div>
    </div>
    <div style="padding: 20px; border-top: 1px solid #e9ecef; background: white;">
      <div style="display: flex; gap: 10px;">
        <input id="enhanced-input" type="text" placeholder="Ask me anything..." style="flex: 1; padding: 12px; border: 1px solid #ddd; border-radius: 6px; font-size: 14px; outline: none;">
        <button id="enhanced-send" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 12px 20px; border-radius: 6px; cursor: pointer; font-size: 14px; font-weight: 600;">Send</button>
      </div>
    </div>
  `;

  // Create overlay
  const overlay = document.createElement('div');
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
  document.getElementById('enhanced-close').addEventListener('click', () => {
    widget.remove();
    overlay.remove();
  });

  overlay.addEventListener('click', () => {
    widget.remove();
    overlay.remove();
  });

  document.getElementById('enhanced-clear').addEventListener('click', () => {
    // Clear chat history
    chatHistory = [];
    localStorage.removeItem('ai-tutor-chat-history');
    
    const contentDiv = document.getElementById('enhanced-content');
    if (contentDiv) {
      contentDiv.innerHTML = `
        <div style="text-align: center; color: #666; margin-top: 50px;">
          <div style="font-size: 48px; margin-bottom: 20px;">🤖</div>
          <h4 style="margin: 0 0 10px 0; color: #333;">Welcome to AI Tutor!</h4>
          <p style="margin: 0; font-size: 14px;">Select text and ask questions, or type a general question below.</p>
        </div>
      `;
    }
  });

  document.getElementById('enhanced-send').addEventListener('click', async () => {
    const input = document.getElementById('enhanced-input');
    if (input) {
      const message = input.value.trim();
      
      if (message) {
        input.value = '';
        await handleEnhancedMessage(message);
      }
    }
  });

  document.getElementById('enhanced-input').addEventListener('keypress', async (e) => {
    if (e.key === 'Enter') {
      const message = e.target.value.trim();
      
      if (message) {
        e.target.value = '';
        await handleEnhancedMessage(message);
      }
    }
  });

  // Display chat history if available
  if (chatHistory.length > 0) {
    displayChatHistory();
  }

  console.log('Enhanced widget created');
}

function getSiteInfo(context) {
  const siteInfo = {
    name: 'Current Site',
    subject: context || 'General',
    url: window.location.href
  };
  
  const hostname = window.location.hostname.toLowerCase();
  
  if (hostname.includes('khanacademy.org')) {
    siteInfo.name = 'Khan Academy';
    siteInfo.subject = 'Math & Science';
  } else if (hostname.includes('mathway.com')) {
    siteInfo.name = 'Mathway';
    siteInfo.subject = 'Math';
  } else if (hostname.includes('newsela.com')) {
    siteInfo.name = 'Newsela';
    siteInfo.subject = 'Reading';
  } else if (hostname.includes('grammarly.com')) {
    siteInfo.name = 'Grammarly';
    siteInfo.subject = 'Writing';
  }
  
  return siteInfo;
}

async function handleEnhancedMessage(message) {
  const contentDiv = document.getElementById('enhanced-content');
  
  // Check if contentDiv exists
  if (!contentDiv) {
    console.error('Enhanced content div not found');
    return;
  }
  
  // Handle special commands
  if (message.toLowerCase().startsWith('update api key')) {
    let newKey;
    
    // Check if the key is provided in the message
    if (message.toLowerCase() === 'update api key') {
      newKey = prompt('Enter new API key:');
    } else {
      // Extract the key from the message
      newKey = message.substring('update api key '.length).trim();
    }
    
    if (newKey) {
      localStorage.setItem('claude_api_key', newKey);
      // Reinitialize AI modules with new key
      if (typeof AIModules !== 'undefined') {
        aiModules = new AIModules(newKey);
      }
      addMessageToWidget('ai', '✅ API key updated successfully!');
    } else {
      addMessageToWidget('ai', '❌ No API key provided. Please try again.');
    }
    return;
  }
  
  if (message.toLowerCase() === 'check quota') {
    const currentKey = localStorage.getItem('claude_api_key');
    if (currentKey) {
      addMessageToWidget('ai', `🔑 **API Key Status**\n\n**Current Key:** ${currentKey.substring(0, 20)}...\n**Key Length:** ${currentKey.length} characters\n**Key Format:** ${currentKey.startsWith('sk-ant-') ? '✅ Valid Anthropic format' : '❌ Invalid format'}\n\n**Next Steps:**\n- If the key looks correct, try asking a question\n- If you get errors, try updating the key with: \`update api key YOUR_NEW_KEY\``);
    } else {
      addMessageToWidget('ai', '❌ **No API Key Set**\n\nPlease set your API key using:\n\`update api key YOUR_CLAUDE_API_KEY_HERE\`\n\nGet your key from: https://console.anthropic.com/');
    }
    return;
  }
  
  if (message.toLowerCase() === 'set api key AIzaSyACWghg-C70p2-NIgrv4ZSX82xD5ywP04Y') {
    // No default API key - user must provide their own
    // Reinitialize AI modules with new key
    if (typeof AIModules !== 'undefined') {
      aiModules = new AIModules('jtrjrenyeu65i84yeYEy-MU&JSRNYryrhdhru-786i543brweENEW775uEnytrjrhHT53etg ehtrutN864mnenteruIMUn4ny3nyt3etnewr');
    }
    addMessageToWidget('ai', '✅ Claude API key set successfully');
    return;
  }
  
  if (message.toLowerCase() === 'set api key AIzaSyAGaUBwEaYQ5cSPATOKGpD9ulnE82Jx_bY') {
    // No default API key - user must provide their own
    // Reinitialize AI modules with new key
    if (typeof AIModules !== 'undefined') {
      aiModules = new AIModules('jtrjrenyeu65i84yeYEy-MU&JSRNYryrhdhru-786i543brweENEW775uEnytrjrhHT53etg ehtrutN864mnenteruIMUn4ny3nyt3etnewr');
    }
    addMessageToWidget('ai', '✅ Claude API key updated successfully');
    return;
  }
  
  // Handle any message that starts with "set api key" followed by a key
  if (message.toLowerCase().startsWith('set api key ')) {
    const newKey = message.substring(12).trim(); // Remove "set api key " prefix
    if (newKey && newKey.length > 10) { // Basic validation
      localStorage.setItem('claude_api_key', newKey);
      // Reinitialize AI modules with new key
      if (typeof AIModules !== 'undefined') {
        aiModules = new AIModules(newKey);
      }
      addMessageToWidget('ai', `✅ API key updated to: ${newKey}`);
    } else {
      addMessageToWidget('ai', '❌ Invalid API key format. Please provide a valid key.');
    }
    return;
  }
  
  if (message.toLowerCase() === 'check quota') {
    if (typeof AIModules !== 'undefined' && aiModules) {
      try {
        const status = await aiModules.checkQuotaStatus();
        addMessageToWidget('ai', `📊 Quota Status: ${status}`);
      } catch (error) {
        addMessageToWidget('ai', `❌ Quota check failed: ${error.message}`);
      }
    } else {
      addMessageToWidget('ai', '❌ AI modules not available for quota check');
    }
    return;
  }
  
  if (message.toLowerCase() === 'clear quota') {
    localStorage.removeItem('claude_api_key');
    localStorage.removeItem('ai-tutor-chat-history');
    addMessageToWidget('ai', '🧹 API key and chat history cleared. Extension will use default key.');
    return;
  }
  
  if (message.toLowerCase() === 'get new key') {
    addMessageToWidget('ai', `🔑 **Get a New API Key:**

**Step 1:** Go to [Google AI Studio](https://aistudio.google.com/)
**Step 2:** Sign in with your Google account
**Step 3:** Click "Get API Key" or "Create API Key"
**Step 4:** Copy the new API key
**Step 5:** Type: \`set api key [YOUR_NEW_KEY]\`

**Example:**
\`set api key AIzaSyAGaUBwEaYQ5cSPATOKGpD9ulnE82Jx_bY\`

**Note:** API keys are free but have usage limits. If you hit the limit, just get a new key!`);
    return;
  }
  
  if (message.toLowerCase().includes('multi select') || message.toLowerCase().includes('toggle multi')) {
    toggleMultiSelectMode();
    addMessageToWidget('ai', `Multi-select mode is now ${multiSelectMode ? 'ON' : 'OFF'}. ${multiSelectMode ? 'Select a passage first, then a question.' : 'Use regular text selection.'}`);
    return;
  }
  
  if (message.toLowerCase() === 'help') {
    addMessageToWidget('ai', `🤖 **AI Tutor Commands:**
    
**API Management:**
- \`update api key\` - Set a new API key
- \`set api key [KEY]\` - Set a specific API key
- \`get new key\` - Instructions to get a new API key
- \`check quota\` - Check your current quota status
- \`clear quota\` - Clear API key and reset to default

**Selection Modes:**
- \`multi select\` - Toggle multi-select mode
- Press \`T\` - Toggle text selection mode
- Press \`I\` - Toggle image selection mode
- Press \`M\` - Toggle multi-select mode (keyboard)
- Press \`A\` - Toggle aggressive mode

**General:**
- \`help\` - Show this help message
- Select text and ask questions
- Click on images to analyze them`);
    return;
  }
  
  // Add user message
  addMessageToWidget('user', message);
  
  // Show thinking indicator
  const thinkingDiv = document.createElement('div');
  thinkingDiv.id = 'thinking-indicator';
  thinkingDiv.style.cssText = `
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 15px;
    background: #f8f9fa;
    border-radius: 8px;
    margin: 10px 0;
    color: #666;
  `;
  thinkingDiv.innerHTML = `
    <div style="width: 20px; height: 20px; border: 2px solid #ddd; border-top: 2px solid #667eea; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    <span>AI is thinking...</span>
  `;
  
  contentDiv.appendChild(thinkingDiv);
  contentDiv.scrollTop = contentDiv.scrollHeight;
  
  try {
    // Check if this is a combined image and text request
    if (message.includes('Image: Please analyze this image') && selectedImage) {
      // Handle combined image and text analysis
      const response = await getImageAnalysis(selectedImage, message);
      
      // Remove thinking indicator
      const indicator = document.getElementById('thinking-indicator');
      if (indicator) {
        indicator.remove();
      }
      
      // Add AI response
      addMessageToWidget('ai', response);
    } else {
      // Regular text-only response
      const response = await getAIResponse(message, '');
      
      // Remove thinking indicator
      const indicator = document.getElementById('thinking-indicator');
      if (indicator) {
        indicator.remove();
      }
      
      // Add AI response
      addMessageToWidget('ai', response);
    }
    
  } catch (error) {
    // Remove thinking indicator
    const indicator = document.getElementById('thinking-indicator');
    if (indicator) {
      indicator.remove();
    }
    
    // Check for specific error types
    let errorMessage = `Sorry, I encountered an error: ${error.message}`;
    
    if (error.message.includes('API key expired') || error.message.includes('invalid API key') || error.message.includes('401')) {
      errorMessage = `**API Error:** ${error.message}
      
**To fix this:**
1. Get a new API key from [Google AI Studio](https://aistudio.google.com/)
2. Type: \`update api key\` and enter your new key
3. Or type: \`clear quota\` to reset to default key`;
    } else if (error.message.includes('quota') || error.message.includes('429')) {
      errorMessage = `**Quota Error:** ${error.message}
      
**To fix this:**
1. Wait a few minutes and try again
2. Type: \`check quota\` to see your current status
3. Type: \`update api key\` to use a different key`;
    }
    
    // Add error message
    addMessageToWidget('ai', errorMessage);
  }
}

function addMessageToWidget(type, content) {
  const contentDiv = document.getElementById('enhanced-content');
  
  // Check if contentDiv exists
  if (!contentDiv) {
    console.error('Enhanced content div not found');
    return;
  }
  
  const messageDiv = document.createElement('div');
  messageDiv.style.cssText = `
    margin: 10px 0;
    padding: 15px;
    border-radius: 8px;
    ${type === 'user' ? 'background: #e3f2fd; margin-left: 20px;' : 'background: white; margin-right: 20px; border: 1px solid #e9ecef;'}
  `;
  
  if (type === 'user') {
    messageDiv.innerHTML = `<strong>You:</strong> ${content}`;
  } else {
    messageDiv.innerHTML = `<strong>AI Tutor:</strong> ${content}`;
  }
  
  contentDiv.appendChild(messageDiv);
  contentDiv.scrollTop = contentDiv.scrollHeight;
  
  // Save message to chat history
  saveMessageToHistory(type, content);
}

function displayChatHistory() {
  const contentDiv = document.getElementById('enhanced-content');
  
  // Check if contentDiv exists
  if (!contentDiv) {
    console.error('Enhanced content div not found');
    return;
  }
  
  // Clear welcome message
  contentDiv.innerHTML = '';
  
  // Display chat history
  chatHistory.forEach(message => {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
      margin: 10px 0;
      padding: 15px;
      border-radius: 8px;
      ${message.type === 'user' ? 'background: #e3f2fd; margin-left: 20px;' : 'background: white; margin-right: 20px; border: 1px solid #e9ecef;'}
    `;
    
    if (message.type === 'user') {
      messageDiv.innerHTML = `<strong>You:</strong> ${message.content}`;
    } else {
      messageDiv.innerHTML = `<strong>AI Tutor:</strong> ${message.content}`;
    }
    
    contentDiv.appendChild(messageDiv);
  });
  
  contentDiv.scrollTop = contentDiv.scrollHeight;
}

// Enhanced floating button with better UI
function createFloatingButton() {
  console.log('Creating enhanced floating button');
  
  const existingBtn = document.getElementById('ai-tutor-floating-btn');
  if (existingBtn) {
    existingBtn.remove();
  }

  // Create container for both buttons
  const buttonContainer = document.createElement('div');
  buttonContainer.id = 'ai-tutor-floating-btn';
  buttonContainer.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    z-index: 10000;
  `;

  // I Need Help button
  const helpButton = document.createElement('button');
  helpButton.id = 'help-button';
  helpButton.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 16px;">🎓</span>
      <span style="font-weight: 600; font-size: 14px;">I Need Help</span>
      <div id="multi-select-indicator" 
           title="Click to toggle multi-select mode (select passage + question)" 
           style="
        width: 8px; 
        height: 8px; 
        border-radius: 50%; 
        background: #ccc; 
        margin-left: 4px;
        transition: background 0.3s ease;
        cursor: pointer;
      "></div>
    </div>
  `;
  helpButton.style.cssText = `
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(102, 126, 234, 0.4);
    user-select: none;
    transition: all 0.3s ease;
    display: block;
  `;

  // Open Chat button
  const chatButton = document.createElement('button');
  chatButton.id = 'chat-button';
  chatButton.innerHTML = `
    <div style="display: flex; align-items: center; gap: 8px;">
      <span style="font-size: 16px;">💬</span>
      <span style="font-weight: 600; font-size: 14px;">Open Chat</span>
    </div>
  `;
  chatButton.style.cssText = `
    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    font-size: 14px;
    font-weight: 600;
    box-shadow: 0 4px 15px rgba(76, 175, 80, 0.4);
    user-select: none;
    transition: all 0.3s ease;
    display: block;
  `;

  // Add hover effects for help button
  helpButton.addEventListener('mouseenter', () => {
    helpButton.style.transform = 'translateY(-2px)';
    helpButton.style.boxShadow = '0 6px 20px rgba(102, 126, 234, 0.6)';
  });

  helpButton.addEventListener('mouseleave', () => {
    helpButton.style.transform = 'translateY(0)';
    helpButton.style.boxShadow = '0 4px 15px rgba(102, 126, 234, 0.4)';
  });

  // Add hover effects for chat button
  chatButton.addEventListener('mouseenter', () => {
    chatButton.style.transform = 'translateY(-2px)';
    chatButton.style.boxShadow = '0 6px 20px rgba(76, 175, 80, 0.6)';
  });

  chatButton.addEventListener('mouseleave', () => {
    chatButton.style.transform = 'translateY(0)';
    chatButton.style.boxShadow = '0 4px 15px rgba(76, 175, 80, 0.4)';
  });

  // Help button click handler
  helpButton.addEventListener('click', async (e) => {
    console.log('Button clicked!');
    console.log('Global selectedText:', selectedText);
    console.log('Selected image:', selectedImage);
    
    // Check if the multi-select indicator was clicked
    console.log('Click target:', e.target);
    console.log('Target ID:', e.target ? e.target.id : 'no target');
    console.log('Target class:', e.target ? e.target.className : 'no target');
    
    if (e.target && e.target.id === 'multi-select-indicator') {
      console.log('Multi-select indicator clicked!');
      e.stopPropagation();
      toggleMultiSelectMode();
      return;
    }
    
    // Show enhanced widget
    showEnhancedWidget();
    
        // Check for selected text (either from selection or element click)
        const selection = window.getSelection();
        const currentSelection = selection.toString().trim();
        let textToSend = selectedText || currentSelection;
        
        // Handle multi-select mode - combine passage and question
        if (multiSelectMode && selectedPassage && selectedQuestion) {
          textToSend = `Passage: ${selectedPassage}\n\nQuestion: ${selectedQuestion}`;
          console.log('Multi-select mode: combining passage and question');
          console.log('Combined text:', textToSend);
        } else if (multiSelectMode && selectedPassage && !selectedQuestion) {
          // Only passage selected, use it
          textToSend = selectedPassage;
          console.log('Multi-select mode: only passage selected');
        }
        
        // Handle image analysis if we have a selected image
        if (selectedImage) {
          console.log('Image selected: analyzing image and text together');
          console.log('Text to send:', textToSend);
          
          // Show enhanced widget first
          setTimeout(async () => {
            // Add user message
            addMessageToWidget('user', textToSend.length > 0 ? `Text: ${textToSend}\n\nImage: Please analyze this image and help with the text above.` : 'Please analyze this image.');
            
            // Get combined image and text analysis
            try {
              const response = await getImageAnalysis(selectedImage, textToSend);
              addMessageToWidget('ai', response);
            } catch (error) {
              console.error('Error in combined image analysis:', error);
              addMessageToWidget('ai', `Sorry, I couldn't analyze the image and text: ${error.message}`);
            }
          }, 500);
          return;
        }
        
        // If we have selected text, show a prompt to add more context
        if (textToSend.length > 0) {
          const additionalContext = prompt(`Selected text: "${textToSend}"\n\nAdd any additional context or questions:`);
          if (additionalContext && additionalContext.trim()) {
            textToSend = `${textToSend}\n\nAdditional context: ${additionalContext.trim()}`;
          }
        }
    
    console.log('Current selection:', currentSelection);
    console.log('Text to send:', textToSend);
    
    // If there's selected text, add it as the first message
    if (textToSend.length > 0) {
      setTimeout(() => {
        console.log('Sending message to AI:', textToSend);
        handleEnhancedMessage(textToSend);
      }, 500); // Increased timeout to ensure widget is ready
    }
  });

  // Chat button click handler
  chatButton.addEventListener('click', () => {
    console.log('Chat button clicked!');
    showEnhancedWidget();
  });

  // Add both buttons to container
  buttonContainer.appendChild(helpButton);
  buttonContainer.appendChild(chatButton);

  document.body.appendChild(buttonContainer);
  console.log('Enhanced floating button created');
  
  // Update the indicator after the button is in the DOM
  setTimeout(() => {
    updateMultiSelectIndicator();
  }, 50);
}

// Function to update the multi-select indicator
function updateMultiSelectIndicator() {
  console.log('🔄 Updating multi-select indicator. Mode:', multiSelectMode);
  const indicator = document.getElementById('multi-select-indicator');
  console.log('Indicator element found:', !!indicator);
  if (indicator) {
    const newColor = multiSelectMode ? '#4CAF50' : '#ccc';
    indicator.style.background = newColor;
    console.log('🔄 Indicator color set to:', newColor);
  } else {
    console.log('❌ Multi-select indicator element not found!');
  }
}

// Enhanced text selection with better detection
function setupTextSelection() {
  console.log('Setting up enhanced text selection');
  
  document.addEventListener('mouseup', (e) => {
    // Skip if text selection mode is disabled
    if (!textSelectionMode) {
      return;
    }
    
    const selection = window.getSelection();
    const currentSelection = selection.toString().trim();
    
    if (currentSelection.length > 0) {
      console.log('Text selected:', currentSelection);
      
      // Try to get MathJax/LaTeX code if available
      let mathText = currentSelection;
      let htmlExtracted = false;
      const range = selection.getRangeAt(0);
      const container = range.commonAncestorContainer;
      
      // Look for MathJax elements in the selection
      if (container.nodeType === Node.ELEMENT_NODE) {
        const mathElements = container.querySelectorAll('.MathJax, .math, [data-math], .katex, .latex, .mjx-chtml, .mjx-math, [class*="math"], [class*="MathJax"], [class*="katex"]');
        if (mathElements.length > 0) {
          // Get the LaTeX source if available
          const mathElement = mathElements[0];
          const latexSource = mathElement.getAttribute('data-math') || 
                             mathElement.getAttribute('data-latex') ||
                             mathElement.getAttribute('data-original') ||
                             mathElement.getAttribute('aria-label') ||
                             mathElement.textContent;
          if (latexSource && latexSource !== currentSelection) {
            mathText = latexSource;
            htmlExtracted = true;
            console.log('MathJax/LaTeX detected:', mathText);
          }
        }
      }
      
      // Also try to find LaTeX in the parent elements
      if (mathText === currentSelection) {
        let parent = container.parentElement;
        while (parent && parent !== document.body) {
          const parentMathElements = parent.querySelectorAll('.MathJax, .math, [data-math], .katex, .latex, .mjx-chtml, .mjx-math, [class*="math"], [class*="MathJax"], [class*="katex"]');
          if (parentMathElements.length > 0) {
            const mathElement = parentMathElements[0];
            const latexSource = mathElement.getAttribute('data-math') || 
                               mathElement.getAttribute('data-latex') ||
                               mathElement.getAttribute('data-original') ||
                               mathElement.getAttribute('aria-label') ||
                               mathElement.textContent;
            if (latexSource && latexSource !== currentSelection) {
              mathText = latexSource;
              htmlExtracted = true;
              console.log('MathJax/LaTeX detected in parent:', mathText);
              break;
            }
          }
          parent = parent.parentElement;
        }
      }
      
      // If we still haven't found LaTeX, try to reconstruct it from common patterns
      if (mathText === currentSelection) {
        // Look for patterns like "13p" which might be "(1/3)p" in LaTeX
        let reconstructedText = currentSelection;
        
        // Common LaTeX fraction patterns that get rendered as numbers
        reconstructedText = reconstructedText
          .replace(/\b13p\b/g, '(1/3)p')  // 13p -> (1/3)p
          .replace(/\b14q\b/g, '(1/4)q')  // 14q -> (1/4)q
          .replace(/\b12x\b/g, '(1/2)x')  // 12x -> (1/2)x
          .replace(/\b23y\b/g, '(2/3)y')  // 23y -> (2/3)y
          .replace(/\b34z\b/g, '(3/4)z')  // 34z -> (3/4)z
          .replace(/\b15a\b/g, '(1/5)a')  // 15a -> (1/5)a
          .replace(/\b25b\b/g, '(2/5)b')  // 25b -> (2/5)b
          .replace(/\b35c\b/g, '(3/5)c')  // 35c -> (3/5)c
          .replace(/\b45d\b/g, '(4/5)d'); // 45d -> (4/5)d
        
        if (reconstructedText !== currentSelection) {
          mathText = reconstructedText;
          console.log('Reconstructed LaTeX from patterns:', mathText);
        }
      }
      
      // Handle multi-select mode
      if (multiSelectMode) {
        console.log('Multi-select mode is ON');
        console.log('Current selection:', currentSelection);
        console.log('Selected passage:', selectedPassage);
        console.log('Selected question:', selectedQuestion);
        
        if (!selectedPassage) {
          // First selection - store as passage IMMEDIATELY
          selectedPassage = mathText;
          selectedText = mathText; // Update global selectedText
          console.log('📝 First selection (passage):', selectedPassage);
          console.log('📝 Global selectedText updated to:', selectedText);
          
          // Clear the browser selection to prevent interference
          if (window.getSelection) {
            window.getSelection().removeAllRanges();
          }
          
          // Show notification
          const notification = document.createElement('div');
          notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #2196F3;
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          `;
          notification.textContent = `Passage selected! (${selectedPassage.length} chars) Now select the question.`;
          document.body.appendChild(notification);
          setTimeout(() => notification.remove(), 3000);
        } else if (!selectedQuestion) {
          // Second selection - store as question IMMEDIATELY
          selectedQuestion = mathText;
          // Combine passage and question for the global selectedText
          selectedText = `Passage: ${selectedPassage}\n\nQuestion: ${selectedQuestion}`;
          console.log('📝 Second selection (question):', selectedQuestion);
          console.log('📝 Combined text:', selectedText);
          console.log('📝 Global selectedText updated to:', selectedText);
          
          // Clear the browser selection to prevent interference
          if (window.getSelection) {
            window.getSelection().removeAllRanges();
          }
          
          // Show notification
          const notification = document.createElement('div');
          notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            background: #4CAF50;
            color: white;
            padding: 12px 20px;
            border-radius: 6px;
            font-family: Arial, sans-serif;
            font-size: 14px;
            z-index: 10000;
            box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          `;
          notification.textContent = `Both selected! Passage: ${selectedPassage.length} chars, Question: ${selectedQuestion.length} chars. Click "I Need Help" to send both.`;
          document.body.appendChild(notification);
          setTimeout(() => notification.remove(), 3000);
        }
      } else {
        // Regular single selection mode
        selectedText = mathText;
      }
      
      // Button is now permanently visible, no need to show/hide it
    }
  });
  
  // Also listen for clicks on specific elements that might contain problems
  document.addEventListener('click', (e) => {
    // Check if clicked element contains math problems, questions, or educational content
    if (isEducationalContent(e.target)) {
      handleEducationalClick(e);
    }
    
    // Handle non-selectable elements (buttons, math equations, etc.)
    if (isNonSelectableEducationalContent(e.target)) {
      handleNonSelectableClick(e);
    }
    
    // Aggressive mode - analyze any element
    if (aggressiveMode) {
      handleAggressiveClick(e);
    }
  });
  
  // Add keyboard shortcuts
  document.addEventListener('keydown', (e) => {
    // Multi-select mode (Ctrl/Cmd + Shift + M)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'M') {
      e.preventDefault();
      toggleMultiSelectMode();
    }
    // Deselect all (Ctrl/Cmd + Shift + D)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'D') {
      e.preventDefault();
      deselectAll();
    }
    // Image selection mode (Ctrl/Cmd + Shift + A)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'A') {
      e.preventDefault();
      toggleImageSelectionMode();
    }
    // Aggressive mode (Ctrl/Cmd + Shift + G)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'G') {
      e.preventDefault();
      toggleAggressiveMode();
    }
    // Text selection mode (Ctrl/Cmd + Shift + T)
    if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'T') {
      e.preventDefault();
      toggleTextSelectionMode();
    }
  });
  
  // Add image click detection
  document.addEventListener('click', (e) => {
    if (e.target.tagName === 'IMG' && imageSelectionMode) {
      handleImageClick(e);
    }
  });
}

// Element selection functions
function isEducationalContent(element) {
  const text = element.textContent || element.innerText || '';
  const mathPatterns = [
    /solve|equation|calculate|math|algebra|geometry|problem|formula/,
    /[0-9]+\s*[+\-*/=]\s*[0-9]+/,
    /\$[0-9]+/,
    /percent|%|fraction|decimal/
  ];
  
  const questionPatterns = [
    /what|how|why|when|where|which|who/,
    /question|answer|choose|select|identify/,
    /true|false|multiple choice/
  ];
  
  // Check for common educational platform class names and IDs
  const educationalClasses = [
    'problem', 'question', 'math', 'exercise', 'quiz', 'assignment',
    'khan-exercise', 'khan-problem', 'math-problem', 'math-question',
    'question-text', 'problem-text', 'exercise-content', 'lesson-content',
    'assessment-item', 'quiz-item', 'test-question', 'homework-problem'
  ];
  
  const educationalIds = [
    'problem', 'question', 'exercise', 'quiz', 'assignment', 'math-problem',
    'question-text', 'problem-text', 'exercise-content', 'lesson-content'
  ];
  
  // Check class names
  const hasEducationalClass = educationalClasses.some(className => 
    element.classList.contains(className) || 
    element.closest(`.${className}`) !== null
  );
  
  // Check IDs
  const hasEducationalId = educationalIds.some(id => 
    element.id === id || 
    element.closest(`#${id}`) !== null
  );
  
  // Check for common educational platform selectors
  const isKhanAcademy = element.closest('.perseus-widget, .exercise, .problem') !== null;
  const isMathway = element.closest('.problem, .question, .math-problem') !== null;
  const isNewsela = element.closest('.article, .passage, .text') !== null;
  const isCommonLit = element.closest('.question, .passage, .text') !== null;
  
  return mathPatterns.some(pattern => pattern.test(text.toLowerCase())) ||
         questionPatterns.some(pattern => pattern.test(text.toLowerCase())) ||
         hasEducationalClass ||
         hasEducationalId ||
         isKhanAcademy ||
         isMathway ||
         isNewsela ||
         isCommonLit;
}

function handleEducationalClick(e) {
  const element = e.target;
  const text = element.textContent || element.innerText || '';
  
  // Handle multi-select mode
  if (multiSelectMode) {
    console.log('Educational content clicked in multi-select mode');
    console.log('Current selection:', text.trim());
    console.log('Selected passage:', selectedPassage);
    console.log('Selected question:', selectedQuestion);
    
    if (!selectedPassage) {
      // First selection - store as passage
      selectedPassage = text.trim();
      selectedText = text.trim();
      lastSelectedElement = element;
      highlightElement(element);
      console.log('📝 First selection (passage):', selectedPassage);
      
      // Show notification
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2196F3;
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      `;
      notification.textContent = `Passage selected! (${selectedPassage.length} chars) Now select the question.`;
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 3000);
    } else if (!selectedQuestion) {
      // Second selection - store as question
      selectedQuestion = text.trim();
      selectedText = `Passage: ${selectedPassage}\n\nQuestion: ${selectedQuestion}`;
      lastSelectedElement = element;
      highlightElement(element);
      console.log('📝 Second selection (question):', selectedQuestion);
      console.log('📝 Combined text:', selectedText);
      
      // Show notification
      const notification = document.createElement('div');
      notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #4CAF50;
        color: white;
        padding: 12px 20px;
        border-radius: 6px;
        font-family: Arial, sans-serif;
        font-size: 14px;
        z-index: 10000;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
      `;
      notification.textContent = `Both selected! Passage: ${selectedPassage.length} chars, Question: ${selectedQuestion.length} chars. Click "I Need Help" to send both.`;
      document.body.appendChild(notification);
      setTimeout(() => notification.remove(), 3000);
    }
    return;
  }
  
  // Regular single selection mode
  // If it's a math problem, automatically select it
  if (text.match(/[0-9]+\s*[+\-*/=]\s*[0-9]+/) || text.includes('solve') || text.includes('calculate')) {
    selectedText = text.trim();
    lastSelectedElement = element;
    highlightElement(element);
    showContextualTooltip(e, 'math');
    
    // Show the floating button
    const button = document.getElementById('ai-tutor-floating-btn');
    if (button) {
      button.style.display = 'block';
    }
  }
  
  // If it's a question, provide context
  if (text.match(/\?$/) || text.includes('what') || text.includes('how') || text.includes('why')) {
    selectedText = text.trim();
    questionContext = text.trim();
    lastSelectedElement = element;
    highlightElement(element);
    showContextualTooltip(e, 'question');
    
    // Show the floating button
    const button = document.getElementById('ai-tutor-floating-btn');
    if (button) {
      button.style.display = 'block';
    }
  }
}

function isNonSelectableEducationalContent(element) {
  // Check if element is a button, input, or other non-selectable element
  const nonSelectableTags = ['BUTTON', 'INPUT', 'SELECT', 'TEXTAREA', 'A', 'DIV', 'SPAN', 'P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'];
  if (!nonSelectableTags.includes(element.tagName)) {
    return false;
  }
  
  // Check if element is inside educational content containers
  const educationalContainers = [
    '.problem', '.question', '.exercise', '.quiz', '.assignment',
    '.math-problem', '.math-question', '.khan-exercise', '.khan-problem',
    '.perseus-widget', '.exercise-content', '.lesson-content',
    '.assessment-item', '.quiz-item', '.test-question', '.homework-problem',
    '[data-testid*="problem"]', '[data-testid*="question"]', '[data-testid*="exercise"]',
    '.math', '.algebra', '.geometry', '.calculus', '.trigonometry'
  ];
  
  const isInEducationalContainer = educationalContainers.some(selector => {
    try {
      return element.closest(selector) !== null;
    } catch (e) {
      return false;
    }
  });
  
  const text = element.textContent || element.innerText || element.value || '';
  const placeholder = element.placeholder || '';
  const title = element.title || '';
  const alt = element.alt || '';
  const ariaLabel = element.getAttribute('aria-label') || '';
  const dataValue = element.getAttribute('data-value') || '';
  
  // Combine all possible text sources
  const fullText = `${text} ${placeholder} ${title} ${alt} ${ariaLabel} ${dataValue}`.trim();
  
  // Check for math patterns (more comprehensive)
  const mathPatterns = [
    /[0-9]+\s*[+\-*/=]\s*[0-9]+/,
    /solve|calculate|find|compute|evaluate/,
    /x\s*[+\-*/=]|y\s*[+\-*/=]/,
    /\$[0-9]+/,
    /[0-9]+\s*[+\-*/]\s*[0-9]+/,
    /[0-9]+\.?[0-9]*\s*[+\-*/=]\s*[0-9]+\.?[0-9]*/,
    /[a-zA-Z]\s*[+\-*/=]\s*[0-9]+/,
    /[0-9]+\s*[+\-*/=]\s*[a-zA-Z]/,
    /fraction|decimal|percent|ratio|proportion/,
    /area|perimeter|volume|circumference|diameter|radius/,
    /angle|triangle|rectangle|circle|square|polygon/
  ];
  
  // Check for question patterns (more comprehensive)
  const questionPatterns = [
    /\?$/,
    /what|how|why|when|where|which|who/,
    /question|answer|choose|select|identify/,
    /true|false|multiple choice/,
    /correct|incorrect|right|wrong/,
    /best|most|least|greatest|smallest/,
    /explain|describe|compare|contrast|analyze/
  ];
  
  // Check for educational keywords (expanded)
  const educationalKeywords = [
    'problem', 'question', 'exercise', 'quiz', 'assignment',
    'math', 'algebra', 'geometry', 'calculus', 'trigonometry',
    'solve', 'calculate', 'find', 'compute', 'evaluate',
    'answer', 'choose', 'select', 'identify', 'explain',
    'lesson', 'chapter', 'section', 'unit', 'module',
    'practice', 'homework', 'test', 'exam', 'assessment',
    'step', 'solution', 'method', 'formula', 'equation'
  ];
  
  // Check for common educational platform classes and IDs
  const educationalClasses = [
    'problem', 'question', 'math', 'exercise', 'quiz', 'assignment',
    'khan-exercise', 'khan-problem', 'math-problem', 'math-question',
    'question-text', 'problem-text', 'exercise-content', 'lesson-content',
    'assessment-item', 'quiz-item', 'test-question', 'homework-problem',
    'perseus-widget', 'perseus-renderer', 'perseus-input',
    'math-input', 'math-output', 'math-display', 'math-expression'
  ];
  
  const hasEducationalClass = educationalClasses.some(className => 
    element.classList.contains(className) || 
    element.closest(`.${className}`) !== null
  );
  
  const hasEducationalId = educationalClasses.some(idName => 
    element.id.includes(idName) || 
    element.closest(`#${idName}`) !== null
  );
  
  // Check if element contains math symbols or expressions
  const hasMathSymbols = /[+\-*/=<>≤≥±√π∞∑∏∫∂∇∆]/.test(fullText);
  
  // Check if element contains numbers (common in math problems)
  const hasNumbers = /[0-9]/.test(fullText);
  
  // Check if element is clickable (common for interactive problems)
  const isClickable = element.style.cursor === 'pointer' || 
                     element.getAttribute('onclick') || 
                     element.getAttribute('role') === 'button' ||
                     element.tabIndex >= 0;
  
  return isInEducationalContainer ||
         mathPatterns.some(pattern => pattern.test(fullText.toLowerCase())) ||
         questionPatterns.some(pattern => pattern.test(fullText.toLowerCase())) ||
         educationalKeywords.some(keyword => fullText.toLowerCase().includes(keyword)) ||
         hasEducationalClass ||
         hasEducationalId ||
         (hasMathSymbols && hasNumbers) ||
         (isClickable && (hasNumbers || fullText.length > 3));
}

function handleNonSelectableClick(e) {
  const element = e.target;
  const text = element.textContent || element.innerText || element.value || '';
  const placeholder = element.placeholder || '';
  const title = element.title || '';
  const alt = element.alt || '';
  const ariaLabel = element.getAttribute('aria-label') || '';
  const dataValue = element.getAttribute('data-value') || '';
  
  // Combine all possible text sources
  const fullText = `${text} ${placeholder} ${title} ${alt} ${ariaLabel} ${dataValue}`.trim();
  
  if (fullText.length > 0) {
    selectedText = fullText.trim();
    lastSelectedElement = element;
    highlightElement(element);
    showContextualTooltip(e, 'general');
    
    // Show the floating button
    const button = document.getElementById('ai-tutor-floating-btn');
    if (button) {
      button.style.display = 'block';
    }
  }
}

function highlightElement(element) {
  // Remove previous highlights
  document.querySelectorAll('.ai-tutor-highlight').forEach(el => {
    el.classList.remove('ai-tutor-highlight');
    el.style.backgroundColor = '';
    el.style.borderRadius = '';
    el.style.cursor = '';
  });
  
  // Highlight the element
  element.classList.add('ai-tutor-highlight');
  element.style.backgroundColor = 'rgba(102, 126, 234, 0.3)';
  element.style.borderRadius = '3px';
  element.style.cursor = 'pointer';
}

function showContextualTooltip(e, context) {
  // Remove existing tooltip
  const existingTooltip = document.getElementById('selection-tooltip');
  if (existingTooltip) {
    existingTooltip.remove();
  }

  const tooltip = document.createElement('div');
  tooltip.id = 'selection-tooltip';
  tooltip.style.cssText = `
    position: fixed;
    top: ${e.clientY - 40}px;
    left: ${e.clientX}px;
    background: #667eea;
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
    z-index: 10001;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;
  
  // Different messages based on context
  let message = 'Click "I Need Help" to analyze this text';
  if (context === 'math') {
    message = 'Math problem detected! Click "I Need Help" to solve it';
  } else if (context === 'question') {
    message = 'Question detected! Click "I Need Help" for guidance';
  } else if (context === 'reading') {
    message = 'Text selected! Click "I Need Help" for analysis';
  }
  tooltip.textContent = message;
  
  document.body.appendChild(tooltip);
  
  setTimeout(() => {
    if (tooltip.parentNode) {
      tooltip.remove();
    }
  }, 3000);
}

// Global variables for element selection
let selectedText = '';
let lastSelectedElement = null;
let questionContext = '';
let multiSelectMode = false;
let selectedPassage = '';
let selectedQuestion = '';
let selectedImage = null;
let imageSelectionMode = false;
let aggressiveMode = false;
let textSelectionMode = true;

// Toggle functions for keyboard shortcuts
function toggleMultiSelectMode() {
  console.log('🔄 Toggling multi-select mode. Current state:', multiSelectMode);
  multiSelectMode = !multiSelectMode;
  console.log('🔄 Multi-select mode is now:', multiSelectMode);
  
  // Show notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${multiSelectMode ? '#4CAF50' : '#f44336'};
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;
  notification.textContent = multiSelectMode ? 
    'Multi-Select Mode: ON - Select passage first, then question' : 
    'Multi-Select Mode: OFF';
  
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
  
  // Clear previous selections when toggling OFF multi-select
  if (!multiSelectMode) {
    console.log('🔄 Clearing selections because multi-select turned OFF');
    // Clear selections but preserve the mode state
    selectedText = '';
    selectedPassage = '';
    selectedQuestion = '';
    selectedImage = null;
    lastSelectedElement = null;
    questionContext = '';
    imageSelectionMode = false;
    
    // Clear highlights
    const highlights = document.querySelectorAll('.ai-tutor-highlight, .ai-tutor-selected-text');
    highlights.forEach(highlight => {
      highlight.classList.remove('ai-tutor-highlight', 'ai-tutor-selected-text');
      highlight.style.backgroundColor = '';
      highlight.style.borderRadius = '';
      highlight.style.cursor = '';
      highlight.style.border = '';
      highlight.style.transition = '';
    });
  }
  
  console.log('🔄 Multi-select toggle complete. Final state:', multiSelectMode);
  
  // Update the visual indicator
  updateMultiSelectIndicator();
}

function deselectAll() {
  // Clear text selections
  if (window.getSelection) {
    window.getSelection().removeAllRanges();
  }
  
  // Clear stored selections
  selectedText = '';
  selectedPassage = '';
  selectedQuestion = '';
  selectedImage = null;
  lastSelectedElement = null;
  questionContext = '';
  
  // Reset modes (but preserve multiSelectMode)
  imageSelectionMode = false;
  // Don't reset multiSelectMode here - it should only be reset when explicitly toggled off
  
  // Remove all highlights
  const highlights = document.querySelectorAll('.ai-tutor-highlight, .ai-tutor-selected-text');
  highlights.forEach(highlight => {
    // Remove the highlight classes
    highlight.classList.remove('ai-tutor-highlight', 'ai-tutor-selected-text');
    
    // Remove inline styles that might have been added
    highlight.style.backgroundColor = '';
    highlight.style.borderRadius = '';
    highlight.style.cursor = '';
    highlight.style.border = '';
    highlight.style.transition = '';
  });
  
  // Remove image highlights
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.border = '';
    img.style.borderRadius = '';
    img.style.transition = '';
  });
  
  // Remove any existing tooltips
  const tooltips = document.querySelectorAll('#selection-tooltip, #image-tooltip');
  tooltips.forEach(tooltip => tooltip.remove());
  
  // Clear any existing highlights that might not have classes
  const allElements = document.querySelectorAll('*');
  allElements.forEach(element => {
    if (element.style.backgroundColor && element.style.backgroundColor.includes('rgba(102, 126, 234')) {
      element.style.backgroundColor = '';
      element.style.borderRadius = '';
      element.style.cursor = '';
      element.style.border = '';
    }
  });
  
  // Also clear any spans that might have been created for text highlighting
  const spans = document.querySelectorAll('span');
  spans.forEach(span => {
    if (span.style.backgroundColor && span.style.backgroundColor.includes('rgba(102, 126, 234')) {
      span.style.backgroundColor = '';
      span.style.borderRadius = '';
      span.style.cursor = '';
      // If this span was created for highlighting, unwrap it
      if (span.parentNode && span.children.length === 0) {
        const parent = span.parentNode;
        while (span.firstChild) {
          parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);
      }
    }
  });
  
  // Show notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #2196F3;
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;
  notification.textContent = 'All selections cleared';
  
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 2000);
  
  console.log('All selections cleared (multiSelectMode preserved:', multiSelectMode, ')');
  console.log('Cleared highlights:', highlights.length);
  console.log('Cleared images:', images.length);
}

function toggleImageSelectionMode() {
  imageSelectionMode = !imageSelectionMode;
  
  // Show notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${imageSelectionMode ? '#4CAF50' : '#f44336'};
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;
  notification.textContent = imageSelectionMode ? 
    'Image Selection Mode: ON - Click on images to analyze them' : 
    'Image Selection Mode: OFF';
  
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
  
  // Clear previous image selection when toggling
  if (!imageSelectionMode) {
    selectedImage = null;
    selectedText = '';
    // Remove image highlights
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.border = '';
      img.style.borderRadius = '';
    });
  }
  
  console.log('Image selection mode:', imageSelectionMode);
  console.log('You can now click on images to select them for analysis');
}

function toggleAggressiveMode() {
  aggressiveMode = !aggressiveMode;
  
  // Show notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${aggressiveMode ? '#FF6B35' : '#f44336'};
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;
  notification.textContent = aggressiveMode ? 
    'Aggressive Mode: ON - Click any element to analyze' : 
    'Aggressive Mode: OFF';
  
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
  
  console.log('Aggressive mode:', aggressiveMode);
}

function toggleTextSelectionMode() {
  textSelectionMode = !textSelectionMode;
  
  // Show notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: ${textSelectionMode ? '#28a745' : '#dc3545'};
    color: white;
    padding: 12px 20px;
    border-radius: 6px;
    font-family: Arial, sans-serif;
    font-size: 14px;
    z-index: 10000;
    box-shadow: 0 4px 12px rgba(0,0,0,0.3);
  `;
  notification.textContent = textSelectionMode ? 
    'Text Selection: ON - You can select text' : 
    'Text Selection: OFF - Click elements instead';
  
  document.body.appendChild(notification);
  setTimeout(() => notification.remove(), 3000);
  
  // Clear any existing selections when disabling (but preserve multi-select)
  if (!textSelectionMode) {
    // Only clear if not in multi-select mode
    if (!multiSelectMode) {
      deselectAll();
    }
  }
  
  console.log('Text selection mode:', textSelectionMode);
}

function handleImageClick(e) {
  const img = e.target;
  const imgSrc = img.src;
  const imgAlt = img.alt || '';
  const imgTitle = img.title || '';
  
  console.log('Image clicked:', img);
  console.log('Image alt:', imgAlt);
  console.log('Image src:', imgSrc);
  
  // Store the actual DOM element for analysis
  selectedImage = img;
  
  // Also store as selectedText for the button click handler
  selectedText = `Image: ${imgAlt || 'No description available'}`;
  
  // Highlight the image
  img.style.border = '3px solid #667eea';
  img.style.borderRadius = '6px';
  img.style.transition = 'border 0.3s ease';
  
  // Show image analysis tooltip
  showImageTooltip(e, img);
  
  // Show the floating button
  const button = document.getElementById('ai-tutor-floating-btn');
  if (button) {
    button.style.display = 'block';
  }
  
  console.log('Image selected for analysis:', selectedImage);
  console.log('Selected text set to:', selectedText);
}

function showImageTooltip(e, img) {
  // Remove existing tooltip
  const existingTooltip = document.getElementById('image-tooltip');
  if (existingTooltip) {
    existingTooltip.remove();
  }

  const tooltip = document.createElement('div');
  tooltip.id = 'image-tooltip';
  tooltip.style.cssText = `
    position: fixed;
    top: ${e.clientY - 40}px;
    left: ${e.clientX}px;
    background: #667eea;
    color: white;
    padding: 8px 12px;
    border-radius: 6px;
    font-size: 12px;
    z-index: 10001;
    cursor: pointer;
    box-shadow: 0 2px 8px rgba(0,0,0,0.2);
  `;
  
  let message = 'Image selected! You can also select text and ask questions about both. Click "I Need Help" to analyze.';
  if (img.alt) {
    message = `Image: ${img.alt.substring(0, 30)}... Click "I Need Help" to analyze`;
  }
  
  tooltip.textContent = message;
  
  document.body.appendChild(tooltip);
  
  setTimeout(() => {
    if (tooltip.parentNode) {
      tooltip.remove();
    }
  }, 3000);
}

function handleAggressiveClick(e) {
  const element = e.target;
  
  // Skip if already handled by other modes
  if (isEducationalContent(element) || isNonSelectableEducationalContent(element)) {
    return;
  }
  
  const text = element.textContent || element.innerText || element.value || '';
  const placeholder = element.placeholder || '';
  const title = element.title || '';
  const alt = element.alt || '';
  const ariaLabel = element.getAttribute('aria-label') || '';
  const dataValue = element.getAttribute('data-value') || '';
  
  // Combine all possible text sources
  const fullText = `${text} ${placeholder} ${title} ${alt} ${ariaLabel} ${dataValue}`.trim();
  
  if (fullText.length > 0) {
    selectedText = fullText.trim();
    lastSelectedElement = element;
    highlightElement(element);
    showContextualTooltip(e, 'general');
    
    // Show the floating button
    const button = document.getElementById('ai-tutor-floating-btn');
    if (button) {
      button.style.display = 'block';
    }
  }
}

// Image analysis functions
function handleImageAnalysis(image) {
  console.log('Analyzing image:', image);
  console.log('Image alt:', image.alt);
  console.log('Image src:', image.src);
  
  // Show enhanced widget
  showEnhancedWidget();
  
  // Add user message about image
  setTimeout(async () => {
    addMessageToWidget('user', `Please analyze this image: ${image.alt || 'No description available'}`);
    
    // Get image analysis (now async)
    try {
      const response = await getImageAnalysis(image, '');
      console.log('Image analysis response:', response);
      addMessageToWidget('ai', response);
    } catch (error) {
      console.error('Error in image analysis:', error);
      addMessageToWidget('ai', `Sorry, I couldn't analyze the image: ${error.message}`);
    }
  }, 500);
}

async function getImageAnalysis(image, userInput) {
  const alt = image.alt || '';
  const src = image.src || '';
  
  console.log('Analyzing image with alt:', alt, 'src:', src);
  console.log('User input:', userInput);
  
  // Check if this is a combined text and image request
  if (userInput && userInput.trim()) {
    console.log('Combined request - Text part:', userInput);
    
    // Use the text part to determine which AI handler to use
    if (userInput.includes('graph') || userInput.includes('function') || userInput.includes('equation') || userInput.includes('y =') || userInput.includes('f(x)')) {
      return await getMathGraphAnalysis(image, userInput);
    } else {
      return await getGeneralImageAnalysis(image, userInput);
    }
  }
  
  // Regular image-only analysis
  if (detectMathGraph(image)) {
    console.log('Detected as math graph');
    return await getMathGraphAnalysis(image, userInput);
  } else if (detectChart(image)) {
    console.log('Detected as chart');
    return await getChartAnalysis(image, userInput);
  } else if (detectDiagram(image)) {
    console.log('Detected as diagram');
    return await getDiagramAnalysis(image, userInput);
  } else {
    console.log('Using general analysis');
    return await getGeneralImageAnalysis(image, userInput);
  }
}

function detectMathGraph(img) {
  const alt = img.alt.toLowerCase();
  const src = img.src.toLowerCase();
  
  console.log('Checking if image is math graph. Alt:', alt, 'Src:', src);
  
  // Only detect as math graph if there are very clear indicators
  const mathGraphKeywords = ['graph', 'plot', 'function', 'equation', 'coordinate', 'axis', 'slope', 'intercept', 'chart'];
  
  // Check alt text first (most reliable) - must be specific
  if (alt && alt !== 'image' && alt !== 'picture' && alt !== 'mathematical graph' && alt !== 'no description available') {
    const hasMathKeywords = mathGraphKeywords.some(keyword => alt.includes(keyword));
    console.log('Alt text has math keywords:', hasMathKeywords);
    return hasMathKeywords;
  }
  
  // Check src for graph-related terms - must be specific
  if (src && mathGraphKeywords.some(keyword => src.includes(keyword))) {
    console.log('Src has math keywords');
    return true;
  }
  
  // Special case: if URL contains "graphics" but also math-related terms, it might be a graph
  // But only if the alt text or context suggests it's actually a graph
  if (src && src.includes('graphics') && (src.includes('math') || src.includes('algebra') || src.includes('geometry'))) {
    // Only consider it a graph if there are clear indicators in alt text or context
    const parent = img.closest('div, section, article');
    const parentText = parent ? parent.textContent.toLowerCase() : '';
    const hasGraphIndicators = alt.includes('graph') || alt.includes('plot') || alt.includes('chart') || 
                              parentText.includes('graph') || parentText.includes('plot') || parentText.includes('chart') ||
                              parentText.includes('function') || parentText.includes('equation');
    
    if (hasGraphIndicators) {
      console.log('Src has graphics + math context + graph indicators');
      return true;
    } else {
      console.log('Src has graphics + math context but no graph indicators');
      return false;
    }
  }
  
  // Only check context if alt is completely empty or very generic
  if (!alt || alt === 'image' || alt === 'picture' || alt === 'mathematical graph' || alt === 'no description available') {
    const parent = img.closest('div, section, article');
    const parentText = parent ? parent.textContent.toLowerCase() : '';
    const mathContextKeywords = ['graph', 'plot', 'function', 'equation', 'coordinate'];
    
    const hasContextKeywords = mathContextKeywords.some(keyword => parentText.includes(keyword));
    console.log('Context has math keywords:', hasContextKeywords);
    return hasContextKeywords;
  }
  
  console.log('Not detected as math graph');
  return false;
}

function detectChart(img) {
  const alt = img.alt.toLowerCase();
  const src = img.src.toLowerCase();
  const chartKeywords = ['chart', 'bar', 'pie', 'line', 'data', 'statistics', 'percentage'];
  
  return chartKeywords.some(keyword => alt.includes(keyword) || src.includes(keyword));
}

function detectDiagram(img) {
  const alt = img.alt.toLowerCase();
  const src = img.src.toLowerCase();
  const diagramKeywords = ['diagram', 'flowchart', 'process', 'cycle', 'structure', 'model'];
  
  return diagramKeywords.some(keyword => alt.includes(keyword) || src.includes(keyword));
}

async function getMathGraphAnalysis(image, input) {
  const alt = image.alt || 'Mathematical graph';
  const src = image.src || '';
  
  console.log('Math graph analysis - Alt:', alt, 'Src:', src);
  
  // Ensure aiModules is initialized
  if (!aiModules) {
    console.log('Initializing aiModules for image analysis...');
    initializeAIModules();
  }
  
  // Use AI to actually analyze the image
  try {
    let prompt;
    if (input && input.trim()) {
      // Combined text and image request - use the text as the main prompt
      prompt = input;
    } else {
      // Image-only request
      prompt = `What does this graph show? Be specific about the shape, direction, and key features.`;
    }
    
    const response = await aiModules.handleMathRequest(prompt);
    return response;
  } catch (error) {
    console.error('Error analyzing math graph:', error);
    return `I can see this is a mathematical graph. What specific aspect would you like me to help you with?`;
  }
}

async function getChartAnalysis(image, input) {
  const alt = image.alt || 'Data chart';
  const src = image.src || '';
  
  // Ensure aiModules is initialized
  if (!aiModules) {
    console.log('Initializing aiModules for chart analysis...');
    initializeAIModules();
  }
  
  try {
    const response = await aiModules.handleGeneralRequest(`What does this chart show? Be specific about the data and trends.`);
    return response;
  } catch (error) {
    console.error('Error analyzing chart:', error);
    return `I can see this is a data chart. What specific aspect would you like me to help you with?`;
  }
}

async function getDiagramAnalysis(image, input) {
  const alt = image.alt || 'Educational diagram';
  const src = image.src || '';
  
  // Ensure aiModules is initialized
  if (!aiModules) {
    console.log('Initializing aiModules for diagram analysis...');
    initializeAIModules();
  }
  
  try {
    const response = await aiModules.handleGeneralRequest(`What does this diagram show? Be specific about the components and relationships.`);
    return response;
  } catch (error) {
    console.error('Error analyzing diagram:', error);
    return `I can see this is an educational diagram. What specific aspect would you like me to help you with?`;
  }
}

async function getGeneralImageAnalysis(image, input) {
  const alt = image.alt || 'Educational image';
  const src = image.src || '';
  
  // Ensure aiModules is initialized
  if (!aiModules) {
    console.log('Initializing aiModules for general image analysis...');
    initializeAIModules();
  }
  
  // Try to get more context from the image
  const parent = image.closest('div, section, article, figure');
  const context = parent ? parent.textContent.substring(0, 200) : '';
  
  console.log('General image analysis - Alt:', alt, 'Context:', context.substring(0, 50) + '...');
  
  // Check if this is likely a math-related image based on context
  const isMathContext = context.toLowerCase().includes('math') || 
                       context.toLowerCase().includes('algebra') || 
                       context.toLowerCase().includes('geometry') ||
                       context.toLowerCase().includes('equation') ||
                       context.toLowerCase().includes('solve') ||
                       context.toLowerCase().includes('problem') ||
                       context.toLowerCase().includes('calculate');
  
  try {
    let response;
    if (isMathContext) {
      if (input && input.trim()) {
        response = await aiModules.handleMathRequest(input);
      } else {
        response = await aiModules.handleMathRequest(`What does this math image show? Be specific about the problem or concept.`);
      }
      return response;
    } else {
      if (input && input.trim()) {
        response = await aiModules.handleGeneralRequest(input);
      } else {
        response = await aiModules.handleGeneralRequest(`What does this image show? Be specific about the content.`);
      }
      return response;
    }
  } catch (error) {
    console.error('Error analyzing image:', error);
    return `I can see this is an educational image. What specific aspect would you like me to help you with?`;
  }
}

// Initialize
function initialize() {
  console.log('Initializing hybrid AI tutor');
  
  // Load existing chat history instead of clearing it
  loadChatHistory();
  
  // Don't clear AI memory/context to maintain conversation flow
  // if (window.aiModules) {
  //   window.aiModules.clearContext();
  // }
  
  createFloatingButton();
  setupTextSelection();
  
  // Update the multi-select indicator on initialization
  setTimeout(() => {
    updateMultiSelectIndicator();
  }, 100);
  
  console.log('Hybrid AI tutor initialized successfully');
}

// Start when page loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initialize);
} else {
  initialize();
}
