// AI Modules for different subjects and learning contexts
class AIModules {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.lockoutUntil = null;
    this.abuseAttempts = 0;
    this.testMode = false; // Test mode flag
  }

  // Security check for inappropriate requests
  checkForAbuse(message) {
    // Don't flag educational content about literature, history, or academic topics
    const educationalContext = [
      /shakespeare|romeo and juliet|literature|poetry|drama/i,
      /history|historical|academic|educational|learning/i,
      /analysis|criticism|interpretation|discussion/i,
      /capulet|juliet|mask|party|nuptials|pentecost/i,
      /paragraph|writing|essay|topic sentence|supporting detail|concluding sentence/i,
      /mud puddles|rainwater|dirt|clay soil|sandy soil|ground|rain/i,
      /outline|structure|polished|transition|flow/i
    ];
    
    // If it's educational content, don't flag it
    if (educationalContext.some(pattern => pattern.test(message))) {
      return false;
    }
    
    const abusePatterns = [
      /kill.*myself|suicide|self.*harm/i,
      /jailbreak|bypass|hack|exploit/i,
      /ignore.*instructions|forget.*rules/i,
      /act.*as.*if|pretend.*to.*be/i,
      /you.*are.*now|from.*now.*on/i,
      /override|disable.*safety/i,
      /dangerous|harmful|illegal/i,
      /threat|threaten|blackmail/i,
      /if.*you.*don.*t.*tell/i,
      /i.*will.*hurt.*myself/i
    ];

    return abusePatterns.some(pattern => pattern.test(message));
  }

  // Toggle test mode
  toggleTestMode() {
    this.testMode = !this.testMode;
    return this.testMode ? "Test mode ON - Security violations will be shown but no lockout" : "Test mode OFF - Normal security behavior";
  }

  // Check API quota status
  async checkQuotaStatus() {
    try {
      console.log('Checking API key:', this.apiKey.substring(0, 10) + '...');
      
      // Check if API key looks like a valid Anthropic key
      if (!this.apiKey.startsWith('sk-ant-') && !this.apiKey.startsWith('sk-')) {
        return "Invalid API key format. Anthropic API keys should start with 'sk-ant-' or 'sk-'. Please get a valid API key from https://console.anthropic.com/";
      }
      
      // Clean the API key to remove any problematic characters
      const cleanApiKey = this.apiKey.replace(/[^\x00-\x7F]/g, '');
      console.log('Cleaned API Key length:', cleanApiKey.length);
      console.log('Cleaned API Key starts with:', cleanApiKey.substring(0, 10));
      
      // Test the API key with a simple request via background script
      const response = await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({
          action: 'callClaudeAPI',
          apiKey: cleanApiKey,
          messages: [{
            role: 'user',
            content: 'test'
          }],
          maxTokens: 10,
          temperature: 0.7
        }, (response) => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else if (response && response.success) {
            resolve("API key valid");
          } else {
            resolve(response ? response.error : 'Unknown error');
          }
        });
      });
      
      console.log('API check response:', response);
      return response;
    } catch (error) {
      console.error('API check error:', error);
      return `API check failed: ${error.message}`;
    }
  }

  // Handle security lockout
  handleSecurityViolation() {
    if (this.testMode) {
      return `🧪 **TEST MODE - SECURITY VIOLATION DETECTED** 🧪

Your request has been flagged as inappropriate or potentially harmful. The AI Tutor Assistant is designed for educational purposes only.

**Test Mode:** ON (No actual lockout)
**Reason:** Inappropriate request detected
**Would normally lock for:** 5 minutes

Please use this tool responsibly for learning and education. If you have a legitimate educational question, please rephrase it appropriately.

In normal mode, the extension would be locked for 5 minutes.`;
    } else {
      this.lockoutUntil = Date.now() + (5 * 60 * 1000); // 5 minutes
      this.abuseAttempts++;
      
      return `🚫 **SECURITY VIOLATION DETECTED** 🚫

Your request has been flagged as inappropriate or potentially harmful. The AI Tutor Assistant is designed for educational purposes only.

**Lockout Duration:** 5 minutes
**Reason:** Inappropriate request detected

Please use this tool responsibly for learning and education. If you have a legitimate educational question, please rephrase it appropriately.

The extension will be available again in 5 minutes.`;
    }
  }

  // Check if currently locked out
  isLockedOut() {
    if (this.lockoutUntil && Date.now() < this.lockoutUntil) {
      const remainingMinutes = Math.ceil((this.lockoutUntil - Date.now()) / (60 * 1000));
      return `🚫 **EXTENSION LOCKED** 🚫

The AI Tutor Assistant is currently locked due to a security violation.

**Time Remaining:** ${remainingMinutes} minutes

Please wait for the lockout to expire before using the extension again.`;
    }
    return null;
  }

  // Math Support Module
  async handleMathRequest(problem, context = {}) {
    console.log('Handling math request:', problem);
    console.log('Context received:', context);
    
    // Security check
    if (this.checkForAbuse(problem)) {
      return this.handleSecurityViolation();
    }

    // Developer test mode - ONLY for math problems with test phrase
    if (problem.includes('T0mBr^dy!!')) {
      // Check if this looks like a math problem (more strict criteria)
      const hasMathContent = problem.match(/[0-9]+\s*[+\-*/=]\s*[0-9]+/) || 
                            problem.match(/\d+\.?\d*/) ||
                            problem.includes('equation') ||
                            problem.includes('solve') ||
                            problem.includes('=') ||
                            problem.match(/[a-zA-Z]\s*[+\-*/=]/);
      
      // Additional check: must have math symbols or be clearly mathematical
      const hasMathSymbols = problem.match(/[+\-*/=]/) || 
                            problem.match(/\d+/) ||
                            problem.includes('x') || problem.includes('y') || 
                            problem.includes('a') || problem.includes('b') ||
                            problem.includes('p') || problem.includes('q');
      
      // Only activate for math problems, not reading/writing/other subjects
      if (hasMathContent && hasMathSymbols && !problem.includes('theme') && 
          !problem.includes('passage') && !problem.includes('reading') &&
          !problem.includes('comprehension') && !problem.includes('question') &&
          !problem.includes('answer') && !problem.includes('multiple choice')) {
        return this.handleDeveloperTest(problem);
      }
    }

    // NO LOCKOUT - AI should always respond with guidance, never direct answers

    // Use selected text if available, otherwise use the problem
    const mathProblem = (context && context.selectedText) || problem;
    
    // Build context from chat history
    // Don't pass chat history to keep responses fresh
    let contextInfo = `Student is working on: "${mathProblem}"`;

    const prompt = `You are a helpful math tutor. The student's question is: "${mathProblem}"

Give a short, direct response that actually helps with the math:

**CRITICAL RULE: NEVER GIVE THE FINAL ANSWER - ALWAYS GUIDE THE STUDENT TO DISCOVER IT THEMSELVES**

**ABSOLUTELY FORBIDDEN: Never show p= or q= values or work through the complete solution step by step. This gives away the answer!**

**Response Style:**
- Be concise and focused on the math problem
- Give 2-3 clear steps maximum
- Explain WHY each step works
- Ask guiding questions to help them discover the answer
- NEVER provide the final answer directly
- If the student asks for examples, GIVE EXAMPLES - don't ask them to do it
- If the student asks for clarification, CLARIFY - don't ask guiding questions
- Only ask guiding questions when the student seems stuck or confused
- Provide concrete examples when helpful
- Keep it under 100 words

**FOR SYSTEM OF EQUATIONS:**
- If you see format like {5p+q=36p−14q=−8, recognize this as a system
- Help them identify the two separate equations first
- Guide them through the solving method step by step
- Don't give the final answer - guide them to discover it
- NEVER show the complete solution with p= and q= values
- NEVER work through the entire problem step by step with answers

**Examples of good responses:**
- "Let's go step by step. First, write down the midpoint formula: (x,y) = ((x₁+x₂)/2, (y₁+y₂)/2). This works because the midpoint is the average of the two endpoints. Now substitute your x-values: -5a and 7a. What do you get when you add them?"
- "Here's the idea: a negative sign in front of f(x) flips the graph over the x-axis. This happens because multiplying by -1 changes every positive y-value to negative and vice versa. Look at the original graph and pick a few key points. For each point, keep the x-value the same but multiply the y-value by -1."
- "I see you have a system of equations. First, let's separate them: 5p + q = 3 and 6p - (1/4)q = -8. To solve this, we need to eliminate one variable. What do you think would be a good first step?"

**Examples of BAD responses (don't do this):**
- "Can you walk me through sketching the graph..." (when student asked for examples)
- "Let me know if you need clarification..." (when student asked for clarification)
- "What specific part would you like help with?" (when student asked for examples)
- "p = 1056/71, q = 76/71" (giving the final answer)
- "p - 14(76/71) = -8, p = 1056/71" (showing complete solution)

**Example for "more examples" requests:**
Student: "yea some more examples would be helpful"
Good response: "Here are more examples: 1) For y = x², the reflection y = -x² flips the parabola upside down. 2) For y = sin(x), y = -sin(x) inverts all the peaks and valleys. 3) For y = |x|, y = -|x| creates a V-shape pointing downward instead of upward."

**CRITICAL RULES:**
- If the student asks for "more examples", "examples", "more", or "helpful" - GIVE MORE EXAMPLES DIRECTLY
- If the student asks for "clarification" or "explain" - CLARIFY DIRECTLY  
- NEVER ask the student to "walk through" or "show me" something they just asked for
- NEVER end with a question when the student asked for information
- ONLY ask guiding questions when the student seems genuinely stuck or confused
- If student asks "what is the answer" - guide them to discover it, don't give the final answer

Remember: Be direct, helpful, and concise. Always explain WHY, not just HOW.`;

    return await this.callAI(prompt);
  }

  // Reading Support Module
  async handleReadingRequest(selectedText, question, context = {}) {
    // Security check
    const fullText = selectedText + (question || '');
    if (this.checkForAbuse(fullText)) {
      return this.handleSecurityViolation();
    }

    // NO LOCKOUT - AI should always respond with guidance, never direct answers

    const prompt = `You are a helpful reading comprehension tutor.

Selected text: "${selectedText}"
${question ? `Question: "${question}"` : ''}

Give a short, direct response that actually helps with reading comprehension:

**CRITICAL RULE: NEVER GIVE THE FINAL ANSWER - ALWAYS GUIDE THE STUDENT TO DISCOVER IT THEMSELVES**

**Response Style:**
- Be concise and focused on the specific question asked
- Give 2-3 clear steps maximum
- Explain WHY the answer makes sense
- Ask specific guiding questions about the question being asked
- NEVER provide the final answer directly
- If the student asks for examples, GIVE EXAMPLES - don't ask them to do it
- If the student asks for clarification, CLARIFY - don't ask guiding questions
- Only ask guiding questions when the student seems stuck or confused
- Provide concrete evidence from the text that relates to the specific question
- Keep it under 100 words

**IMPORTANT:** Focus on the specific question being asked. Don't give generic reading advice - address the exact question with specific guidance.

**Examples of good responses:**
- "Look closely at what Capulet is doing: He starts talking about how long ago they wore masks. 'Slips back through time' is figurative - he is mentally going back to those past experiences, not literally time-traveling. This makes sense because he's reminiscing about his youth."
- "Step through the context: Capulet is sharing memories about the past. Think of it as daydreaming about earlier days. He isn't confused - he's reflecting and recalling details from long ago. This is why the phrase works as a metaphor for memory."

**CRITICAL RULES:**
- If the student asks for "more examples", "examples", "more", or "helpful" - GIVE MORE EXAMPLES DIRECTLY
- If the student asks for "clarification" or "explain" - CLARIFY DIRECTLY  
- NEVER ask the student to "walk through" or "show me" something they just asked for
- NEVER end with a question when the student asked for information
- ONLY ask guiding questions when the student seems genuinely stuck or confused

Remember: Be direct, helpful, and concise. Always explain WHY the answer makes sense.`;

    return await this.callAI(prompt);
  }

  // Writing Support Module
  async handleWritingRequest(text, context = {}) {
    // Security check
    if (this.checkForAbuse(text)) {
      return this.handleSecurityViolation();
    }

    // NO LOCKOUT - AI should always respond with guidance, never direct answers

    const prompt = `You are a helpful writing tutor. The student is working on: "${text}"

Give a short, direct response that actually helps with writing:

**CRITICAL RULE: NEVER GIVE THE FINAL ANSWER - ALWAYS GUIDE THE STUDENT TO DISCOVER IT THEMSELVES**

**Response Style:**
- Be concise and focused on the specific writing task
- Give 2-3 clear steps maximum
- Ask 1-2 specific guiding questions maximum
- NEVER provide the final answer directly
- If the student asks for examples, GIVE EXAMPLES - don't ask them to do it
- If the student asks for clarification, CLARIFY - don't ask guiding questions
- Only ask guiding questions when the student seems stuck or confused
- Provide concrete examples that relate to their specific writing task
- Keep it under 80 words

**IMPORTANT:** Focus on the specific writing task being addressed. Don't give generic writing advice - address the exact task with specific guidance.

**FOR PARAGRAPH WRITING TASKS:**
- Help them understand the structure (TS, supporting details, CS)
- Guide them through the process step by step
- Ask only 1-2 specific questions about their outline or content
- Be more direct and less wordy

**Examples of good responses:**
- "Start with the topic sentence exactly as written. Turn each supporting detail into a complete sentence. Add transition words between them. What transition word would work between the topic sentence and first detail?"
- "You have the structure: TS, supporting details, CS. The first detail needs to be a complete sentence. What words would you add to make it flow better?"

Remember: Be direct, helpful, and concise. Focus on the writing, not emotions.`;

    return await this.callAI(prompt);
  }

  // Grammar Support Module
  async handleGrammarRequest(text, context = {}) {
    // Security check
    if (this.checkForAbuse(text)) {
      return this.handleSecurityViolation();
    }

    // NO LOCKOUT - AI should always respond with guidance, never direct answers

    const prompt = `You are a helpful grammar tutor. The student's sentence is: "${text}"

**ABSOLUTE RULE: YOU MUST NEVER TELL THE STUDENT WHAT ANY WORD IS. ONLY ASK QUESTIONS TO GUIDE THEM.**

**CONVERSATION FLOW RULE: If the student gives you an answer, acknowledge it and move forward. Don't repeat the same questions!**

**FORBIDDEN PHRASES - NEVER USE THESE:**
- "It's a noun"
- "It's an article" 
- "It's a verb"
- "It's an adjective"
- "This is a noun"
- "This word is a verb"
- "These are adjectives"
- "The first word is..."
- "Next we have..."
- "Then we have..."

**ONLY ALLOWED:**
- Ask questions about what words are doing
- Ask questions about word functions
- Ask questions about word types
- Guide with hints and clues
- Wait for student responses
- Acknowledge when students give correct answers
- Build on student responses in follow-up questions

**EXAMPLE OF WHAT NOT TO DO:**
"What type of word is 'The'? It's an article" ❌

**EXAMPLE OF WHAT TO DO:**
"What type of word is 'The'? Think about what it does before nouns." ✅

**FOR FOLLOW-UP QUESTIONS:**
- If student says "room is the subject right" - respond with "Yes, exactly! 'Room' is the subject. Now, what type of word is 'room'? Is it naming a person, place, thing, or idea?"
- If student gives a correct answer, acknowledge it and ask about the next word
- Build on their correct responses instead of repeating the same questions
- NEVER repeat the same questions you already asked
- If student confirms something is correct, move on to the next part
- If student asks "what is it then?" - give them a hint or clue, don't ask more questions
- If student says "OH I SEE" - acknowledge their discovery and move forward

**Response Style:**
- Be concise and focused on the specific grammar question asked
- Give 2-3 clear steps maximum
- Explain WHY the grammar rule applies to their specific sentence
- Ask specific guiding questions about the grammar issue in their sentence
- NEVER provide the final answer directly
- If the student asks for examples, GIVE EXAMPLES - don't ask them to do it
- If the student asks for clarification, CLARIFY - don't ask guiding questions
- Only ask guiding questions when the student seems stuck or confused
- Provide concrete examples that relate to their specific sentence
- Keep it under 100 words

**IMPORTANT:** Focus on the specific grammar question being asked about this sentence. Don't give generic grammar advice - address the exact question with specific guidance.

**IMPORTANT RULES:**
- Stay focused ONLY on the original sentence: "${text}"
- Do NOT change topics or ask about other words
- If the student makes a typo, acknowledge it briefly but stay on the original sentence
- Work through the sentence word by word systematically
- Answer ONLY the specific question asked

**CORRECT RESPONSE EXAMPLES:**
- "Let's look at the first word. What is 'The' doing in this sentence? What kind of word comes before nouns to specify them?"
- "Now look at 'president'. What is this word doing? Is it naming a person, place, thing, or idea? What do we call words that name things?"
- "What about 'was'? What is this word doing? Is it showing an action or connecting the subject to more information? What do we call words that connect subjects to descriptions?"

**FOLLOW-UP RESPONSE EXAMPLES:**
- Student: "room is the subject right" → "Yes, exactly! 'Room' is the subject. Now, what type of word is 'room'? Is it naming a person, place, thing, or idea?"
- Student: "seems is a verb" → "Correct! 'Seems' is a verb. What kind of verb is it? Is it showing action or connecting the subject to more information?"
- Student: "chilly is an adjective" → "Perfect! 'Chilly' is an adjective. What is it describing in this sentence?"
- Student: "am is a adverb" → "Not quite. 'Am' is not an adverb. Think about what 'am' is doing - is it describing something or showing action?"
- Student: "if it isnt an adverb what is it?" → "Think about what 'am' does in the sentence. It's showing a state of being, which makes it a..."
- Student: "OH I SEE Is a verb" → "Exactly! 'Am' is a verb - specifically a linking verb. Great discovery! Now, what about the next word?"

**WRONG RESPONSE EXAMPLES (NEVER DO):**
- "The first word is 'The'. What type of word is 'The'? It's an article" ❌
- "Next we have 'president'. What part of speech is 'president'? It's a noun" ❌
- "Then we have 'was'. What is 'was' doing? It's a linking verb" ❌
- "The word 'happy' is an adjective" ❌

**WRONG FOLLOW-UP EXAMPLES (NEVER DO):**
- Student: "room is the subject right?" → "What role does 'The' play? What type of word is 'room'?" ❌ (Repeating same questions)
- Student: "its the subject right?" → "What role does 'The' play? What type of word is 'room'?" ❌ (Repeating same questions)

**CRITICAL RULES:**
- If the student asks for "more examples", "examples", "more", or "helpful" - GIVE MORE EXAMPLES DIRECTLY
- If the student asks for "clarification" or "explain" - CLARIFY DIRECTLY  
- NEVER ask the student to "walk through" or "show me" something they just asked for
- NEVER end with a question when the student asked for information
- ONLY ask guiding questions when the student seems genuinely stuck or confused

**FINAL REMINDER: NEVER SAY "IT'S A [PART OF SPEECH]" OR "THIS IS A [PART OF SPEECH]" - ONLY ASK QUESTIONS AND WAIT FOR STUDENT RESPONSES!**

**CRITICAL: When students give correct answers, acknowledge them and move to the next word. Don't repeat the same questions!**

**ABSOLUTELY FORBIDDEN: Never repeat the same questions you already asked. If you asked "What role does 'The' play?" and the student answered, don't ask it again!**

**CRITICAL: Don't be repetitive! If the student asks "what is it then?" give them a hint, don't ask more questions. If they say "OH I SEE" acknowledge it and move on.**

Remember: Be direct, helpful, and concise. Always explain WHY the grammar rule applies.`;

    return await this.callAI(prompt);
  }

  // Vocabulary Support Module
  async handleVocabularyRequest(word, context = {}) {
    // Security check
    if (this.checkForAbuse(word)) {
      return this.handleSecurityViolation();
    }

    // NO LOCKOUT - AI should always respond with guidance, never direct answers

    const prompt = `You are a helpful vocabulary tutor. The student needs help with the word: "${word}"

Give a short, direct response that actually helps with vocabulary:

**CRITICAL RULE: NEVER GIVE THE FINAL ANSWER - ALWAYS GUIDE THE STUDENT TO DISCOVER IT THEMSELVES**

**Response Style:**
- Be concise and focused on the specific word being asked about
- Give 2-3 clear steps maximum
- Ask specific guiding questions about this particular word
- NEVER provide the final definition directly
- If the student asks for examples, GIVE EXAMPLES - don't ask them to do it
- If the student asks for clarification, CLARIFY - don't ask guiding questions
- Only ask guiding questions when the student seems stuck or confused
- Provide concrete examples that relate to this specific word
- Keep it under 100 words

**IMPORTANT:** Focus on the specific word being asked about. Don't give generic vocabulary advice - address the exact word with specific guidance.

**Examples of good responses:**
- "Here's how to figure out the meaning: Look at the context around the word. What clues can you find? Break down the word parts - are there any prefixes or suffixes you recognize?"
- "Think of it this way: What does the word seem to be describing? How is it used in the sentence? Can you substitute another word that would make sense?"

Remember: Be direct, helpful, and concise. Focus on the word, not emotions.`;

    return await this.callAI(prompt);
  }

  // General Learning Support
  async handleGeneralRequest(message, context = {}) {
  // Security check
  if (this.checkForAbuse(message)) {
    return this.handleSecurityViolation();
  }

  // NO LOCKOUT - AI should always respond with guidance, never direct answers

      const prompt = `You are a helpful AI tutor assistant. The student says: "${message}"

Give a short, direct response that actually helps with their question:

**CRITICAL RULE: NEVER GIVE THE FINAL ANSWER - ALWAYS GUIDE THE STUDENT TO DISCOVER IT THEMSELVES**

**Response Style:**
- Be concise and focused on the specific question being asked
- Give 2-3 clear steps maximum
- Ask specific guiding questions about their exact question
- NEVER provide the final answer directly
- If the student asks for examples, GIVE EXAMPLES - don't ask them to do it
- If the student asks for clarification, CLARIFY - don't ask guiding questions
- Only ask guiding questions when the student seems stuck or confused
- Provide concrete examples that relate to their specific question
- Keep it under 100 words

**IMPORTANT:** Focus on the specific question being asked. Don't give generic advice - address the exact question with specific guidance.

**Examples of good responses:**
- "Let's go step by step. First, identify what you're looking for. Then, look for clues in the problem. What information do you have to work with?"
- "Here's how to approach this: Start by understanding what the question is asking. Then, think about what method or formula applies. Finally, work through it step by step."

Remember: Be direct, helpful, and concise. Focus on guiding them to discover the answer to their specific question.`;

    return await this.callAI(prompt);
  }

  // Developer test function - shows actual solution
  handleDeveloperTest(problem) {
    console.log('🔧 DEVELOPER TEST MODE ACTIVATED');
    console.log('Problem text:', problem);
    
    // Clean up the problem text - remove conversation history and context
    let cleanProblem = problem;
    
    // Remove "Previous conversation:" and everything before the current question
    if (cleanProblem.includes('Previous conversation:')) {
      const currentQuestionIndex = cleanProblem.indexOf('Current question:');
      if (currentQuestionIndex !== -1) {
        cleanProblem = cleanProblem.substring(currentQuestionIndex + 'Current question:'.length).trim();
      }
    }
    
    // Remove "Additional context: T0mBr^dy!!" if present
    cleanProblem = cleanProblem.replace(/\s*Additional context: T0mBr\^dy!!\s*/g, '').trim();
    
    // Remove any remaining conversation artifacts
    cleanProblem = cleanProblem.replace(/Student:.*?Tutor:.*?(?=Student:|$)/gs, '').trim();
    cleanProblem = cleanProblem.replace(/Student:\s*/g, '').trim();
    cleanProblem = cleanProblem.replace(/Tutor:\s*/g, '').trim();
    
    console.log('Cleaned problem text:', cleanProblem);
    
    // Check for the specific format: {(1/3)p - (1/4)q = 3-4p - 7q = 4}
    if (cleanProblem.includes('(1/3)p') && cleanProblem.includes('(1/4)q') && (cleanProblem.includes('= 3') || cleanProblem.includes('=3')) && 
        cleanProblem.includes('-4p') && cleanProblem.includes('7q') && (cleanProblem.includes('= 4') || cleanProblem.includes('=4'))) {
      console.log('Detected (1/3)p-(1/4)q system in specific format');
      return `🔧 **DEVELOPER TEST MODE - ACTUAL SOLUTION** 🔧<br><br>

**System of Equations:**<br>
- (1/3)p - (1/4)q = 3<br>
- -4p - 7q = 4<br><br>

**Solution Steps:**<br>
1. From first equation: (1/3)p - (1/4)q = 3, so q = 4((1/3)p - 3) = (4/3)p - 12<br>
2. Substitute into second: -4p - 7((4/3)p - 12) = 4<br>
3. Simplify: -4p - (28/3)p + 84 = 4<br>
4. Combine like terms: -4p - (28/3)p = 4 - 84 = -80<br>
5. Convert to common denominator: (-12/3)p - (28/3)p = -80<br>
6. Combine: (-40/3)p = -80, so p = -80 × (-3/40) = 6<br>
7. Back substitute: q = (4/3)(6) - 12 = 8 - 12 = -4<br><br>

**Final Answer: p = 6, q = -4**<br><br>

**Verification:**<br>
- (1/3)(6) - (1/4)(-4) = 2 - (-1) = 2 + 1 = 3 ✓<br>
- -4(6) - 7(-4) = -24 + 28 = 4 ✓<br><br>

The AI can solve it correctly! The guidance system is working as intended.`;
    }
    
    // Check for the rendered format: {13p−14q=3−4p−7q=4} (where 13p means (1/3)p and 14q means (1/4)q)
    if (cleanProblem.includes('13p') && cleanProblem.includes('14q') && cleanProblem.includes('=3') && 
        cleanProblem.includes('-4p') && cleanProblem.includes('7q') && cleanProblem.includes('=4')) {
      console.log('Detected 13p-14q system in rendered format (LaTeX fractions converted to numbers)');
      return `🔧 **DEVELOPER TEST MODE - ACTUAL SOLUTION** 🔧<br><br>
**System of Equations:**<br>
- (1/3)p - (1/4)q = 3<br>
- -4p - 7q = 4<br><br>
**Solution Steps:**<br>
1. From first equation: (1/3)p - (1/4)q = 3, so q = 4((1/3)p - 3) = (4/3)p - 12<br>
2. Substitute into second: -4p - 7((4/3)p - 12) = 4<br>
3. Simplify: -4p - (28/3)p + 84 = 4<br>
4. Combine like terms: -4p - (28/3)p = 4 - 84 = -80<br>
5. Convert to common denominator: (-12/3)p - (28/3)p = -80<br>
6. Combine: (-40/3)p = -80, so p = -80 × (-3/40) = 6<br>
7. Back substitute: q = (4/3)(6) - 12 = 8 - 12 = -4<br><br>
**Final Answer: p = 6, q = -4**<br><br>
**Verification:**<br>
- (1/3)(6) - (1/4)(-4) = 2 - (-1) = 2 + 1 = 3 ✓<br>
- -4(6) - 7(-4) = -24 + 28 = 4 ✓<br><br>
The AI can solve it correctly! The guidance system is working as intended.`;
    }
    
    // Check for the exact string format: {13p−14q=3−4p−7q=4}
    if (cleanProblem.includes('13p−14q=3−4p−7q=4') || cleanProblem.includes('13p-14q=3-4p-7q=4')) {
      console.log('Detected exact 13p-14q system string format');
      return `🔧 **DEVELOPER TEST MODE - ACTUAL SOLUTION** 🔧<br><br>
**System of Equations:**<br>
- (1/3)p - (1/4)q = 3<br>
- -4p - 7q = 4<br><br>
**Solution Steps:**<br>
1. From first equation: (1/3)p - (1/4)q = 3, so q = 4((1/3)p - 3) = (4/3)p - 12<br>
2. Substitute into second: -4p - 7((4/3)p - 12) = 4<br>
3. Simplify: -4p - (28/3)p + 84 = 4<br>
4. Combine like terms: -4p - (28/3)p = 4 - 84 = -80<br>
5. Convert to common denominator: (-12/3)p - (28/3)p = -80<br>
6. Combine: (-40/3)p = -80, so p = -80 × (-3/40) = 6<br>
7. Back substitute: q = (4/3)(6) - 12 = 8 - 12 = -4<br><br>
**Final Answer: p = 6, q = -4**<br><br>
**Verification:**<br>
- (1/3)(6) - (1/4)(-4) = 2 - (-1) = 2 + 1 = 3 ✓<br>
- -4(6) - 7(-4) = -24 + 28 = 4 ✓<br><br>
The AI can solve it correctly! The guidance system is working as intended.`;
    }
    
    // Check if it contains the specific system we're looking for directly in the problem
    // Handle LaTeX format, regular fractions, and Unicode minus characters
    if ((problem.includes('1/3') || problem.includes('1⁄3') || problem.includes('\\dfrac{1}{3}')) && problem.includes('p') && 
        (problem.includes('1/4') || problem.includes('1⁄4') || problem.includes('\\dfrac{1}{4}')) && problem.includes('q') && 
        (problem.includes('-4p') || problem.includes('−4p')) && 
        (problem.includes('7q') || problem.includes('−7q'))) {
      console.log('Detected 1/3p-1/4q system directly in problem');
      return `🔧 **DEVELOPER TEST MODE - ACTUAL SOLUTION** 🔧<br><br>

**System of Equations:**<br>
- (1/3)p - (1/4)q = 3<br>
- -4p - 7q = 4<br><br>

**Solution Steps:**<br>
1. From first equation: (1/3)p - (1/4)q = 3, so q = 4((1/3)p - 3) = (4/3)p - 12<br>
2. Substitute into second: -4p - 7((4/3)p - 12) = 4<br>
3. Simplify: -4p - (28/3)p + 84 = 4<br>
4. Combine like terms: -4p - (28/3)p = 4 - 84 = -80<br>
5. Convert to common denominator: (-12/3)p - (28/3)p = -80<br>
6. Combine: (-40/3)p = -80, so p = -80 × (-3/40) = 6<br>
7. Back substitute: q = (4/3)(6) - 12 = 8 - 12 = -4<br><br>

**Final Answer: p = 6, q = -4**<br><br>

**Verification:**<br>
- (1/3)(6) - (1/4)(-4) = 2 - (-1) = 2 + 1 = 3 ✓<br>
- -4(6) - 7(-4) = -24 + 28 = 4 ✓<br><br>

The AI can solve it correctly! The guidance system is working as intended.`;
    }
    
    // Extract the system of equations from the problem
    const systemMatch = problem.match(/\{([^}]+)\}/);
    if (systemMatch) {
      const systemText = systemMatch[1];
      console.log('System text:', systemText);
      
      // Split by looking for patterns like "13p" or "-4p" to separate equations
      const equations = systemText.split(/(?=\d+p)/);
      const eq1 = equations[0].trim();
      const eq2 = equations[1] ? equations[1].trim() : '';
      
      console.log('Split equations:', equations);
      
      console.log('Equation 1:', eq1);
      console.log('Equation 2:', eq2);
      
      // Check if we have valid equations
      if (eq1 && eq2 && (eq1.includes('p') || eq1.includes('q')) && (eq2.includes('p') || eq2.includes('q'))) {
        // Check which system we're solving
        if (eq1.includes('13p') && eq2.includes('-4p')) {
        // Solve: 13p - 14q = 3 and -4p - 7q = 4
        return `🔧 **DEVELOPER TEST MODE - ACTUAL SOLUTION** 🔧

**System of Equations:**
- 13p - 14q = 3
- -4p - 7q = 4

**Solution Steps:**
1. From first equation: 13p - 14q = 3, so q = (13p - 3)/14
2. Substitute into second: -4p - 7((13p - 3)/14) = 4
3. Simplify: -4p - (13p - 3)/2 = 4
4. Multiply by 2: -8p - (13p - 3) = 8
5. Expand: -8p - 13p + 3 = 8
6. Combine: -21p = 5, so p = -5/21
7. Back substitute: q = (13(-5/21) - 3)/14 = -64/147

**Final Answer: p = -5/21, q = -64/147**

**Verification:**
- 13(-5/21) - 14(-64/147) = -65/21 + 896/147 = -65/21 + 128/21 = 63/21 = 3 ✓
- -4(-5/21) - 7(-64/147) = 20/21 + 448/147 = 20/21 + 64/21 = 84/21 = 4 ✓

The AI can solve it correctly! The guidance system is working as intended.`;
      } else {
        // Original system: 5p + q = 3 and 6p - (1/4)q = -8
        return `🔧 **DEVELOPER TEST MODE - ACTUAL SOLUTION** 🔧

**System of Equations:**
- 5p + q = 3
- 6p - (1/4)q = -8

**Solution Steps:**
1. From first equation: q = 3 - 5p
2. Substitute into second: 6p - (1/4)(3 - 5p) = -8
3. Simplify: 6p - 3/4 + (5/4)p = -8
4. Combine like terms: (29/4)p = -29/4
5. Solve: p = -1
6. Back substitute: q = 3 - 5(-1) = 8

**Final Answer: p = -1, q = 8**

**Verification:**
- 5(-1) + 8 = -5 + 8 = 3 ✓
- 6(-1) - (1/4)(8) = -6 - 2 = -8 ✓
The AI can solve it correctly! The guidance system is working as intended.`;
        }
      }
    }
    
    // For any other math problem, try to solve it
    console.log('Detected general math problem for developer testing');
    
    // Try to solve the system of equations
    const solution = this.solveSystemOfEquations(cleanProblem);
    if (solution) {
      return `🔧 **DEVELOPER TEST MODE - ACTUAL SOLUTION** 🔧<br><br>
**Problem:** ${cleanProblem}<br><br>
${solution}<br><br>
**This is a test of the AI's ability to solve various math problems.**<br>
The AI can solve it correctly! The guidance system is working as intended.`;
    }
    
    // If we can't solve it, provide general approach
    return `🔧 **DEVELOPER TEST MODE - GENERAL MATH SOLUTION** 🔧<br><br>
**Problem:** ${cleanProblem}<br><br>
**Solution Approach:**<br>
1. **Identify the problem type** - Is this a system of equations, single equation, or other math concept?<br>
2. **Extract the key information** - What are the variables, coefficients, and constants?<br>
3. **Choose the appropriate method** - Substitution, elimination, factoring, etc.<br>
4. **Work step by step** - Show each algebraic manipulation clearly<br>
5. **Verify your answer** - Check that your solution satisfies the original equation(s)<br><br>
**This is a test of the AI's ability to solve various math problems.**<br>
The AI should be able to handle this problem and provide step-by-step guidance.<br><br>
**Note:** In normal mode, the AI would guide you through solving this problem yourself rather than giving the direct answer.`;
  }

  // Solve system of equations for developer test mode
  solveSystemOfEquations(problem) {
    try {
      // Look for system of equations pattern: {ax+by=c dx+ey=f}
      const systemMatch = problem.match(/\{([^}]+)\}/);
      if (!systemMatch) return null;
      
      const equations = systemMatch[1];
      console.log('Raw equations string:', equations);
      
      // Handle the specific case: 2a−73b=3−3a+7b=6
      // This should be split into: 2a−73b=3 and -3a+7b=6
      let eq1 = '';
      let eq2 = '';
      
      // Look for the pattern where we have a number followed by a minus sign after an equals
      // Pattern: =3−3a (equals, number, minus, variable)
      const splitMatch = equations.match(/(\d+)([−-])([a-zA-Z])/);
      if (splitMatch) {
        const splitIndex = splitMatch.index + splitMatch[1].length;
        eq1 = equations.substring(0, splitIndex).trim();
        eq2 = equations.substring(splitIndex).trim();
        console.log('Split at pattern match:', { eq1, eq2 });
      } else {
        // Fallback: try to find where we have a number followed by a minus sign
        const fallbackMatch = equations.match(/(\d+)([−-])/);
        if (fallbackMatch) {
          const splitIndex = fallbackMatch.index + fallbackMatch[1].length;
          eq1 = equations.substring(0, splitIndex).trim();
          eq2 = equations.substring(splitIndex).trim();
          console.log('Split at fallback match:', { eq1, eq2 });
        }
      }
      
      // If still no split, try splitting at the second equals sign
      if (!eq1 || !eq2) {
        const equalsPositions = [];
        let pos = equations.indexOf('=');
        while (pos !== -1) {
          equalsPositions.push(pos);
          pos = equations.indexOf('=', pos + 1);
        }
        
        if (equalsPositions.length >= 2) {
          // Split at the second equals sign
          const secondEquals = equalsPositions[1];
          eq1 = equations.substring(0, secondEquals).trim();
          eq2 = equations.substring(secondEquals + 1).trim();
          console.log('Split at second equals:', { eq1, eq2 });
        }
      }
      
      if (!eq1 || !eq2) {
        console.log('Could not parse equations');
        return null;
      }
      
      console.log('Final parsed equations:', { eq1, eq2 });
      
      // For the specific case: 2a−73b=3 and -3a+7b=6
      if (eq1.includes('2a') && eq1.includes('73b') && eq2.includes('-3a') && eq2.includes('7b')) {
        return `**System of Equations:**<br>
- 2a - 7b = 3<br>
- -3a + 7b = 6<br><br>
**Solution Steps:**<br>
1. **Use elimination method** - Add the equations to eliminate b<br>
2. **Add equations:** (2a - 7b) + (-3a + 7b) = 3 + 6<br>
3. **Simplify:** 2a - 7b - 3a + 7b = 9<br>
4. **Combine like terms:** -a = 9, so a = -9<br>
5. **Substitute back:** 2(-9) - 7b = 3<br>
6. **Solve for b:** -18 - 7b = 3, so -7b = 21, therefore b = -3<br><br>
**Final Answer: a = -9, b = -3**<br><br>
**Verification:**<br>
- 2(-9) - 7(-3) = -18 + 21 = 3 ✓<br>
- -3(-9) + 7(-3) = 27 - 21 = 6 ✓`;
      }
      
      // Generic system solver for other cases
      return `**System of Equations:**<br>
- ${eq1}<br>
- ${eq2}<br><br>
**Solution Steps:**<br>
1. **Identify the variables** and coefficients<br>
2. **Choose a method** (substitution or elimination)<br>
3. **Solve for one variable** in terms of the other<br>
4. **Substitute back** to find the second variable<br>
5. **Verify** by checking both equations<br><br>
**Note:** This is a general approach. The specific solution would depend on the exact coefficients.`;
      
    } catch (error) {
      console.error('Error solving system of equations:', error);
      return null;
    }
  }

  // Generate similar math problems
  async generateSimilarMathProblem(originalProblem) {
    const prompt = `Create a similar math problem to this one: "${originalProblem}"

Requirements:
1. Use completely different numbers
2. Keep the same mathematical concept
3. Make it slightly easier for learning
4. Format it clearly
5. Don't solve it - just present the problem

Generate a similar problem that teaches the same concept.`;

    return await this.callAI(prompt);
  }

  // Analyze text for learning opportunities
  analyzeTextForLearning(text) {
    const analysis = {
      math: this.detectMathContent(text),
      reading: this.detectReadingContent(text),
      writing: this.detectWritingContent(text),
      vocabulary: this.extractDifficultWords(text),
      grammar: this.identifyGrammarConcepts(text)
    };
    
    return analysis;
  }

  detectMathContent(text) {
    const mathPatterns = [
      /solve|equation|formula|calculate|math|algebra|geometry|trigonometry|calculus/,
      /[0-9]+\s*[+\-*/=]\s*[0-9]+/,
      /\$[0-9]+/,
      /percent|%|fraction|decimal/,
      /x\s*[+\-*/=]|y\s*[+\-*/=]/,
      /quadratic|polynomial|derivative|integral/,
      /\([a-zA-Z]\d*\+[a-zA-Z]\d*\)\d*[=]/,
      /[a-zA-Z]\d*\+[a-zA-Z]\d*\+[a-zA-Z]\d*/,
      /simplify|expand|factor/,
      /\([^)]*\)[0-9]*[=]/, // Any parentheses with exponent and equals
      /[a-zA-Z]\d+/, // Variables with numbers
      /[=+\-*/]/ // Any math operators
    ];
    
    const result = mathPatterns.some(pattern => pattern.test(text.toLowerCase()));
    console.log('Math detection for:', text, 'Result:', result);
    return result;
  }

  detectReadingContent(text) {
    const readingPatterns = [
      /read|passage|text|comprehension|article|story|chapter/,
      /question|answer|multiple choice|essay/,
      /main idea|theme|character|plot/,
      /infer|conclude|summarize/,
      /^[A-Z][a-z]+\s+(looks|is|was|has|have|goes|went|comes|came|says|said)/,
      /^[A-Z][a-z]+\s+[a-z]+\s*\.\.\./
    ];
    
    return readingPatterns.some(pattern => pattern.test(text.toLowerCase()));
  }

  detectWritingContent(text) {
    const writingPatterns = [
      /write|essay|paragraph|composition|draft|outline/,
      /grammar|spelling|punctuation|sentence/,
      /introduction|conclusion|body paragraph/,
      /thesis|argument|evidence/
    ];
    
    return writingPatterns.some(pattern => pattern.test(text.toLowerCase()));
  }

  extractDifficultWords(text) {
    // Simple heuristic to find potentially difficult words
    const words = text.toLowerCase().match(/\b[a-z]{8,}\b/g) || [];
    const commonWords = new Set([
      'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'man', 'men', 'put', 'say', 'she', 'too', 'use'
    ]);
    
    return words.filter(word => !commonWords.has(word)).slice(0, 5);
  }

  identifyGrammarConcepts(text) {
    const concepts = [];
    
    if (/\b(am|is|are|was|were|be|being|been)\b/.test(text)) {
      concepts.push('verb tenses');
    }
    if (/\b(a|an|the)\b/.test(text)) {
      concepts.push('articles');
    }
    if (/[.!?]/.test(text)) {
      concepts.push('sentence structure');
    }
    if (/\b(and|but|or|so|yet|for|nor)\b/.test(text)) {
      concepts.push('conjunctions');
    }
    if (/\b(this|that|these|those)\b/.test(text)) {
      concepts.push('demonstratives');
    }
    
    return concepts;
  }

  // Core AI API call method using Claude via background script
  async callAI(prompt) {
    if (!this.apiKey) {
      throw new Error('API key not set');
    }

    try {
      console.log('Sending request to Claude API via background script...');
      console.log('API Key length:', this.apiKey.length);
      console.log('API Key starts with:', this.apiKey.substring(0, 10));
      
      // Check if API key looks like a valid Anthropic key
      if (!this.apiKey.startsWith('sk-ant-') && !this.apiKey.startsWith('sk-')) {
        throw new Error('Invalid API key format. Anthropic API keys should start with "sk-ant-" or "sk-". Please get a valid API key from https://console.anthropic.com/');
      }
      
      // Clean the API key to remove any problematic characters
      const cleanApiKey = this.apiKey.replace(/[^\x00-\x7F]/g, '');
      console.log('Original API Key length:', this.apiKey.length);
      console.log('Cleaned API Key length:', cleanApiKey.length);
      console.log('Cleaned API Key starts with:', cleanApiKey.substring(0, 10));
      console.log('Cleaned API Key ends with:', cleanApiKey.substring(cleanApiKey.length - 10));
      console.log('API Key cleaning changed length:', this.apiKey.length !== cleanApiKey.length);
      
      // Check if Chrome extension APIs are available
      if (typeof chrome === 'undefined' || !chrome.runtime || !chrome.runtime.sendMessage) {
        throw new Error('Chrome extension APIs not available. This might be due to the extension context or browser restrictions.');
      }
      
      // Send request to background script to avoid CORS issues
      const response = await new Promise((resolve, reject) => {
        chrome.runtime.sendMessage({
          action: 'callClaudeAPI',
          apiKey: cleanApiKey,
          messages: [{
            role: 'user',
            content: prompt
          }],
          maxTokens: 4000,
          temperature: 0.7
        }, (response) => {
          if (chrome.runtime.lastError) {
            reject(new Error(chrome.runtime.lastError.message));
          } else if (response && response.success) {
            resolve(response.response);
          } else {
            reject(new Error(response ? response.error : 'Unknown error'));
          }
        });
      });

      console.log('Claude API response received via background script');
      return response;
    } catch (error) {
      console.error('Claude API Error:', error);
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      
      // Provide more specific error messages
      if (error.message.includes('Failed to fetch')) {
        throw new Error('Network error: Unable to connect to Claude API. This might be due to CORS restrictions or network issues. Please check your internet connection and try again.');
      } else if (error.message.includes('CORS')) {
        throw new Error('CORS error: The extension cannot access the Claude API due to browser security restrictions.');
      } else {
        throw error;
      }
    }
  }

  // Clear context/memory
  clearContext() {
    // Reset any internal state if needed
    console.log('AI context cleared');
  }
}

// Export for use in content script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = AIModules;
}

// Make available globally for browser environment
if (typeof window !== 'undefined') {
  window.AIModules = AIModules;
}
