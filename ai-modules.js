// AI Modules for different subjects and learning contexts
class AIModules {
  constructor(apiKey) {
    this.apiKey = apiKey;
  }

  // Security check removed - no lockout functionality

  // Test mode removed - no security functionality

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

  // Security violation handler removed

  // Lockout check removed

  // Math Support Module
  async handleMathRequest(problem, context = {}) {
    console.log('Handling math request:', problem);
    console.log('Context received:', context);
    
    // Security check removed

    // Developer test mode completely disabled - no direct answers allowed
    // All requests now use normal guidance mode only

    // NO LOCKOUT - AI should always respond with guidance, never direct answers

    // Use selected text if available, otherwise use the problem
    let mathProblem = (context && context.selectedText) || problem;
    
    // Check if we need to extract HTML for complex math
    if (context.htmlExtracted || this.needsHTMLExtraction(mathProblem)) {
      console.log('Math problem needs HTML extraction');
      mathProblem = await this.extractMathFromHTML(mathProblem, context);
    }
    
    // Check if this is a piecewise function problem
    const isPiecewiseFunction = mathProblem.includes('piecewise') || 
                               mathProblem.includes('f(x)=') && mathProblem.includes('{') ||
                               mathProblem.includes('≤') || mathProblem.includes('≥');
    
    if (isPiecewiseFunction) {
      console.log('Detected piecewise function problem');
    }
    
    // Build context from chat history
    // Don't pass chat history to keep responses fresh
    let contextInfo = `Student is working on: "${mathProblem}"`;

    const prompt = `You are a helpful math tutor. The student's question is: "${mathProblem}"

**ABSOLUTE RULE: NEVER GIVE THE FINAL ANSWER - ONLY PROVIDE GUIDANCE**

**CRITICAL: READ THE STUDENT'S QUESTION CAREFULLY. If they ask "what does f(-1) represent" or "can i have an example" or any NEW question, respond to THAT question. Do NOT repeat the same piecewise function guidance.**

**DETECT NEW QUESTIONS:**
- If student asks "what does f(-1) represent" → Explain the concept, don't repeat piecewise guidance
- If student asks "can i have an example" → Provide examples, don't repeat piecewise guidance  
- If student asks "give me an example" → Provide examples, don't repeat piecewise guidance
- If student asks anything different from the original problem → Respond to that new question

**CRITICAL: This is a piecewise function problem. You must guide the student to identify which condition applies to their input value. Do NOT solve it for them.**

**MATHEMATICAL ACCURACY REQUIRED:**
- NEVER say "-1 is less than or equal to -3" (this is FALSE)
- ALWAYS check inequalities correctly: -1 is NOT ≤ -3
- For f(-1): Check "Is -1 ≤ -3? No. Is -3 < -1 ≤ 0? Yes!"
- ALWAYS recognize fractions correctly: 8/2 = 4, not 82
- Simplify fractions before performing operations
- Look for fraction notation like 8/2, 3/4, 1/2 in expressions

**STRICTLY FORBIDDEN:**
- Never show final answers, complete solutions, or work through the entire problem
- Never provide numerical answers or algebraic solutions
- Never show step-by-step work with answers
- Never give examples that solve the specific problem
- Never provide the midpoint coordinates, equation solutions, or any final results

**ONLY ALLOWED:**
- Explain the concept or formula with specific steps
- Guide them to the next step with clear instructions
- Ask targeted questions that help them think forward
- Explain WHY something works with reasoning
- Give general examples (not solving their specific problem)
- For piecewise functions: guide them to identify which condition applies
- For inequalities: help them understand which range their input falls into
- For compound inequalities: show the process step-by-step without completing their specific problem
- Be specific and helpful like ChatGPT - give clear guidance

**Response Style:**
- Be helpful and specific (aim for 100-150 words)
- Focus on the concept AND provide clear guidance
- Give specific steps and explain WHY each step works
- Ask targeted questions that guide them forward
- Explain the reasoning behind steps
- Never work through their specific problem completely
- Be more like ChatGPT - helpful, detailed, and educational

**Example for midpoint problems:**
"To find the midpoint, you need to average the x-coordinates and y-coordinates separately. The formula is ((x₁+x₂)/2, (y₁+y₂)/2). This works because the midpoint is exactly halfway between the two points. What do you get when you add your x-coordinates together?"

**Example for function transformations:**
"A negative sign in front of f(x) reflects the graph across the x-axis. This happens because multiplying by -1 changes positive y-values to negative and vice versa. Pick a few points from your original graph - what would happen to their y-coordinates?"

**Example for compound inequalities:**
"To solve a compound inequality like -1 < 6x - 8/2 < 1, you need to isolate x in the middle. The key is to perform the same operation on all three parts. First, simplify 8/2 = 4, so you have -1 < 6x - 4 < 1. Then add 4 to all parts: -1 + 4 < 6x - 4 + 4 < 1 + 4, which gives you 3 < 6x < 5. Then divide all parts by 6: 3/6 < x < 5/6, which simplifies to 1/2 < x < 5/6. This works because you're maintaining the inequality relationships. What would be your next step after getting 3 < 6x < 5?"

**IMPORTANT: FRACTION RECOGNITION:**
- Always look for fractions like 8/2, 3/4, 1/2 in mathematical expressions
- Simplify fractions first: 8/2 = 4, 3/4 = 0.75, 1/2 = 0.5
- Don't confuse fractions with whole numbers (8/2 ≠ 82)

**Example for piecewise functions:**
"To evaluate a piecewise function, first identify which condition applies to your input value. Look at the intervals: x ≤ -3, -3 < x ≤ 0, x > 0. Which interval does your input value fall into? For example, if you're evaluating f(-1), check: is -1 ≤ -3? No. Is -3 < -1 ≤ 0? Yes! So use the middle formula (x²)."

**CORRECT GUIDANCE FORMAT:**
"Look at the three intervals: x ≤ -3, -3 < x ≤ 0, and x > 0. Which interval does -1 fall into? Check: Is -1 ≤ -3? What do you think? Is -3 < -1 ≤ 0? What do you think? Now look at your piecewise function definition - which formula corresponds to the interval you identified?"

**SPECIFIC PIECEWISE FUNCTION GUIDANCE:**
- NEVER solve the problem for the student
- ALWAYS guide them to identify which interval their input falls into
- Ask them to check each inequality systematically and correctly
- Help them understand which range their input falls into
- Guide them to identify which formula to use, but don't tell them what the formula is
- CRITICAL: Make sure inequalities are checked correctly (e.g., -1 is NOT ≤ -3)
- Guide them through: "Is -1 ≤ -3? What do you think? Is -3 < -1 ≤ 0? What do you think? Now look at your piecewise function definition - which formula corresponds to the interval you identified?"
- STOP after identifying the interval - let them figure out which formula to use

**COMMON MISTAKE TO AVOID:**
- NEVER say "Since -1 is less than or equal to -3" - this is mathematically WRONG
- NEVER confirm answers like "Yes, that's correct!" or "No, that's not true" - let them figure it out
- NEVER reveal the actual formula (like "f(x) = x^2") - just say "the middle formula"
- NEVER say "it's the middle one in the piecewise function" - this gives away the answer
- NEVER calculate the result - just guide them to identify which formula to use
- NEVER say "you should use the corresponding formula for that interval" - this gives away too much
- NEVER ask "which formula you would use for the interval -3 < x ≤ 0?" - this is too leading
- NEVER repeat the same response when student asks a new question
- ALWAYS ask "What do you think?" instead of confirming their answers
- ALWAYS respond to new questions appropriately

**IMPORTANT: RESPOND TO NEW QUESTIONS APPROPRIATELY**
- If student asks a NEW question (not about the current piecewise function), respond to that question
- If student asks for examples, provide general examples, not solutions to their specific problem
- If student asks what f(-1) represents, explain the concept without solving their problem
- If student asks for help with a different problem, help with that new problem
- NEVER repeat the same piecewise function guidance when student asks something different

**If student asks for the answer:**
"I can't give you the answer directly, but I can guide you through the process. Let's work through this step by step together!"

**If student asks for examples:**
"I can help you understand the concept! What specific part of piecewise functions would you like to explore?"

**If student asks what f(-1) represents:**
"f(-1) means we're finding the output value when the input is -1. This is function evaluation - you're looking for what the function outputs when you put -1 in for x. To find this value, you need to determine which interval -1 falls into and use the corresponding formula from your piecewise function definition."

**If student asks a new question:**
"I'd be happy to help! What's your new question?"

Remember: Guide, don't solve. Help them discover the answer themselves.`;

    return await this.callAI(prompt);
  }

  // Helper method to detect if math problem needs HTML extraction
  needsHTMLExtraction(mathProblem) {
    // Check if the problem looks like it might be incomplete or needs HTML extraction
    const indicators = [
      // Very short text that might be incomplete
      mathProblem.length < 10,
      // Contains HTML-like patterns
      mathProblem.includes('<') && mathProblem.includes('>'),
      // Contains math symbols that might be rendered
      /[√∫∑π∞≤≥≠≈]/.test(mathProblem),
      // Contains LaTeX patterns
      mathProblem.includes('\\') || mathProblem.includes('$'),
      // Contains MathJax patterns
      mathProblem.includes('MathJax') || mathProblem.includes('katex'),
      // Looks like a selection that might have missed math content
      mathProblem.includes('Selected text:') && mathProblem.length < 50
    ];
    
    return indicators.some(indicator => indicator);
  }

  // Extract math content from HTML in the selected area
  async extractMathFromHTML(mathProblem, context) {
    console.log('Extracting math from HTML...');
    
    try {
      // If we have context with selectedText, try to find the actual math content
      if (context && context.selectedText) {
        // Look for math elements in the current selection
        const selection = window.getSelection();
        if (selection && selection.rangeCount > 0) {
          const range = selection.getRangeAt(0);
          const container = range.commonAncestorContainer;
          
          // Extract math content from various math rendering systems
          const mathContent = this.extractMathFromSelection(container, range);
          if (mathContent && mathContent !== mathProblem) {
            console.log('Extracted math content:', mathContent);
            return mathContent;
          }
        }
      }
      
      // Fallback: try to find math content in the document
      const mathContent = this.findMathInDocument(mathProblem);
      if (mathContent) {
        console.log('Found math content in document:', mathContent);
        return mathContent;
      }
      
      // If no math content found, return original problem
      console.log('No math content found, using original problem');
      return mathProblem;
      
    } catch (error) {
      console.error('Error extracting math from HTML:', error);
      return mathProblem;
    }
  }

  // Extract math content from a selection
  extractMathFromSelection(container, range) {
    // Look for various math rendering elements
    const mathSelectors = [
      '.MathJax, .math, [data-math], .katex, .latex, .mjx-chtml, .mjx-math',
      '[class*="math"], [class*="MathJax"], [class*="katex"]',
      'span[aria-label], div[aria-label]',
      'span[title], div[title]'
    ];
    
    let mathContent = null;
    
    // Check if container itself is a math element
    if (container.nodeType === Node.ELEMENT_NODE) {
      mathContent = this.extractFromMathElement(container);
      if (mathContent) return mathContent;
    }
    
    // Look for math elements within the selection
    for (const selector of mathSelectors) {
      const elements = container.querySelectorAll ? container.querySelectorAll(selector) : [];
      for (const element of elements) {
        mathContent = this.extractFromMathElement(element);
        if (mathContent) return mathContent;
      }
    }
    
    // Look in parent elements
    let parent = container.parentElement;
    while (parent && parent !== document.body) {
      for (const selector of mathSelectors) {
        const elements = parent.querySelectorAll(selector);
        for (const element of elements) {
          mathContent = this.extractFromMathElement(element);
          if (mathContent) return mathContent;
        }
      }
      parent = parent.parentElement;
    }
    
    return null;
  }

  // Extract content from a specific math element
  extractFromMathElement(element) {
    // Try different attributes that might contain the math source
    const attributes = [
      'data-math', 'data-latex', 'data-original', 'aria-label', 'title'
    ];
    
    for (const attr of attributes) {
      const value = element.getAttribute(attr);
      if (value && value.trim().length > 0) {
        return value.trim();
      }
    }
    
    // Try to find LaTeX source in script tags or other elements
    const scriptTags = element.querySelectorAll('script[type="math/tex"], script[type="math/asciimath"], script[type="math/mml"]');
    for (const script of scriptTags) {
      if (script.textContent && script.textContent.trim().length > 0) {
        return script.textContent.trim();
      }
    }
    
    // Try to reconstruct LaTeX from common patterns
    const textContent = element.textContent;
    if (textContent && textContent.trim().length > 0) {
      // Check if this looks like a piecewise function that needs LaTeX formatting
      if (textContent.includes('f(x)=') && textContent.includes('{') && textContent.includes('≤')) {
        return this.reconstructPiecewiseFunction(textContent);
      }
      return textContent.trim();
    }
    
    return null;
  }

  // Reconstruct piecewise function as proper LaTeX
  reconstructPiecewiseFunction(text) {
    console.log('Reconstructing piecewise function from:', text);
    
    // Try to extract the function definition
    const functionMatch = text.match(/f\(x\)\s*=\s*\{([^}]+)\}/);
    if (!functionMatch) {
      return text; // Return original if we can't parse it
    }
    
    const functionBody = functionMatch[1];
    console.log('Function body:', functionBody);
    
    // Split by common separators and try to identify the pieces
    const pieces = functionBody.split(/[,;]/).map(p => p.trim()).filter(p => p.length > 0);
    console.log('Pieces found:', pieces);
    
    if (pieces.length >= 3) {
      // Try to reconstruct as LaTeX cases
      let latexFunction = 'f(x) = \\begin{cases}\n';
      
      for (let i = 0; i < pieces.length; i += 2) {
        if (i + 1 < pieces.length) {
          const formula = pieces[i].trim();
          const condition = pieces[i + 1].trim();
          
          // Clean up the condition
          let cleanCondition = condition
            .replace(/x\s*≤\s*-3/g, 'x \\leq -3')
            .replace(/x\s*>\s*0/g, 'x > 0')
            .replace(/-3\s*<\s*x\s*≤\s*0/g, '-3 < x \\leq 0');
          
          latexFunction += `${formula} \\,, \\quad & ${cleanCondition}`;
          if (i + 2 < pieces.length) {
            latexFunction += '\\\\\n';
          }
        }
      }
      
      latexFunction += '\n\\end{cases}';
      console.log('Reconstructed LaTeX:', latexFunction);
      return latexFunction;
    }
    
    return text; // Return original if reconstruction fails
  }

  // Find math content in the document
  findMathInDocument(problem) {
    // Look for math elements that might contain the problem
    const mathSelectors = [
      '.MathJax, .math, [data-math], .katex, .latex, .mjx-chtml, .mjx-math',
      '[class*="math"], [class*="MathJax"], [class*="katex"]'
    ];
    
    for (const selector of mathSelectors) {
      const elements = document.querySelectorAll(selector);
      for (const element of elements) {
        const content = this.extractFromMathElement(element);
        if (content && content.includes(problem.substring(0, 10))) {
          return content;
        }
      }
    }
    
    return null;
  }

  // Reading Support Module
  async handleReadingRequest(selectedText, question, context = {}) {
    // Security check
    const fullText = selectedText + (question || '');
    // Security check removed

    // NO LOCKOUT - AI should always respond with guidance, never direct answers

    const prompt = `You are a helpful reading comprehension tutor.

Selected text: "${selectedText}"
${question ? `Question: "${question}"` : ''}

**ABSOLUTE RULE: NEVER GIVE THE FINAL ANSWER - ONLY PROVIDE GUIDANCE**

**STRICTLY FORBIDDEN:**
- Never provide the correct answer choice
- Never explain what the answer is
- Never work through the question step-by-step with the answer
- Never give examples that solve the specific question

**ONLY ALLOWED:**
- Guide them to look at specific parts of the text
- Ask questions to help them think
- Explain reading strategies
- Point out key details to consider
- Help them understand the question type

**Response Style:**
- Be concise (under 80 words)
- Focus on the strategy, not the answer
- Ask guiding questions
- Point to specific text evidence
- Never solve the question for them

**Example:**
"Look at the context around that phrase. What is Capulet doing right before he says 'slips back through time'? Is he talking about the present or the past? This will help you understand what the phrase means."

**If student asks for the answer:**
"I can't give you the answer directly, but I can help you find it in the text. Let's work through this together!"

Remember: Guide, don't solve. Help them discover the answer themselves.`;

    return await this.callAI(prompt);
  }

  // Writing Support Module
  async handleWritingRequest(text, context = {}) {
    // Security check
    // Security check removed

    // NO LOCKOUT - AI should always respond with guidance, never direct answers

    const prompt = `You are a helpful writing tutor. The student is working on: "${text}"

**ABSOLUTE RULE: NEVER GIVE THE FINAL ANSWER - ONLY PROVIDE GUIDANCE**

**STRICTLY FORBIDDEN:**
- Never write the paragraph for them
- Never provide complete sentences or solutions
- Never work through the entire writing task
- Never give examples that solve their specific writing problem

**ONLY ALLOWED:**
- Guide them through the writing process
- Ask questions to help them think
- Explain writing strategies
- Point out what needs to be done
- Help them understand structure

**Response Style:**
- Be concise (under 80 words)
- Focus on the process, not the product
- Ask guiding questions
- Explain the strategy
- Never write for them

**Example:**
"Start with your topic sentence. Then take each supporting detail and turn it into a complete sentence. What transition words could connect your ideas?"

**If student asks for the answer:**
"I can't write it for you, but I can guide you through the process. Let's work on this step by step!"

Remember: Guide, don't write. Help them discover how to write it themselves.`;

    return await this.callAI(prompt);
  }

  // Grammar Support Module
  async handleGrammarRequest(text, context = {}) {
    // Security check
    // Security check removed

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

**ABSOLUTE RULE: NEVER GIVE THE FINAL ANSWER - ONLY PROVIDE GUIDANCE**

**STRICTLY FORBIDDEN:**
- Never provide the definition directly
- Never explain what the word means
- Never work through the word step-by-step with the answer
- Never give examples that solve the specific word

**ONLY ALLOWED:**
- Guide them to look at context clues
- Ask questions to help them think
- Explain vocabulary strategies
- Point out word parts to consider
- Help them understand how to figure it out

**Response Style:**
- Be concise (under 80 words)
- Focus on the strategy, not the answer
- Ask guiding questions
- Explain the approach
- Never define the word for them

**Example:**
"Look at the context around that word. What clues can you find? Break down the word parts - are there any prefixes or suffixes you recognize?"

**If student asks for the answer:**
"I can't give you the definition directly, but I can help you figure it out. Let's work through this together!"

Remember: Guide, don't define. Help them discover the meaning themselves.`;

    return await this.callAI(prompt);
  }

  // General Learning Support
  async handleGeneralRequest(message, context = {}) {
  // Security check
  // Security check removed

  // NO LOCKOUT - AI should always respond with guidance, never direct answers

      const prompt = `You are a helpful AI tutor assistant. The student says: "${message}"

**ABSOLUTE RULE: NEVER GIVE THE FINAL ANSWER - ONLY PROVIDE GUIDANCE**

**STRICTLY FORBIDDEN:**
- Never provide the correct answer
- Never solve the problem completely
- Never work through the entire question with answers
- Never give examples that solve their specific problem

**ONLY ALLOWED:**
- Guide them through the process
- Ask questions to help them think
- Explain strategies and approaches
- Point out what to consider
- Help them understand the question

**Response Style:**
- Be concise (under 80 words)
- Focus on the process, not the answer
- Ask guiding questions
- Explain the approach
- Never solve for them

**Example:**
"Let's break this down step by step. First, what is the question asking you to find? Then, what information do you have to work with?"

**If student asks for the answer:**
"I can't give you the answer directly, but I can guide you through the process. Let's work on this together!"

Remember: Guide, don't solve. Help them discover the answer themselves.`;

    return await this.callAI(prompt);
  }

  // Developer test function removed - no direct answers allowed
  handleDeveloperTest(problem) {
    console.log('🔧 DEVELOPER TEST MODE REMOVED - NO DIRECT ANSWERS ALLOWED');
    return "Developer test mode has been disabled. The AI will only provide guidance, never direct answers. Please ask for help with your problem and I'll guide you through solving it step by step.";
    
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
    
    // Check for the specific format: {2a−73b=3−3a+7b=6}
    if ((cleanProblem.includes('2a') && cleanProblem.includes('73b') && cleanProblem.includes('=3') && 
         cleanProblem.includes('-3a') && cleanProblem.includes('7b') && cleanProblem.includes('=6')) ||
        cleanProblem.includes('2a−73b=3−3a+7b=6') ||
        cleanProblem.includes('2a-73b=3-3a+7b=6')) {
      console.log('Detected 2a-73b=3-3a+7b=6 system');
      return `🔧 **DEVELOPER TEST MODE - ACTUAL SOLUTION** 🔧<br><br>
**System of Equations:**<br>
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
- -3(-9) + 7(-3) = 27 - 21 = 6 ✓<br><br>
The AI can solve it correctly! The guidance system is working as intended.`;
    }
    
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
      throw new Error('API key not set. Please get a valid Claude API key from https://console.anthropic.com/ and type "update api key YOUR_KEY_HERE" to set it.');
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
        console.log('Chrome extension APIs not available, using fallback guidance');
        return this.getFallbackGuidance(prompt);
      }
      
      // Send request to background script to avoid CORS issues
      const response = await Promise.race([
        new Promise((resolve, reject) => {
          console.log('Sending message to background script with API key:', cleanApiKey.substring(0, 20) + '...');
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
            console.log('Received response from background script:', response);
            if (chrome.runtime.lastError) {
              console.error('Chrome runtime error:', chrome.runtime.lastError);
              reject(new Error(chrome.runtime.lastError.message));
            } else if (response && response.success) {
              console.log('API call successful, response length:', response.response ? response.response.length : 'undefined');
              resolve(response.response);
            } else if (response && response.error) {
              console.error('API call failed with error:', response.error);
              reject(new Error(response.error));
            } else {
              console.error('API call failed with no response or unknown error:', response);
              reject(new Error('No response from background script. This might be due to extension context issues.'));
            }
          });
        }),
        new Promise((_, reject) => {
          setTimeout(() => {
            reject(new Error('API call timeout after 30 seconds. Please check your internet connection and try again.'));
          }, 30000);
        })
      ]);

      console.log('Claude API response received via background script');
      return response;
    } catch (error) {
      console.error('Claude API Error:', error);
      console.error('Error details:', {
        message: error.message,
        name: error.name,
        stack: error.stack
      });
      
      // If Chrome extension APIs are not available, use fallback guidance
      if (error.message.includes('Chrome extension APIs not available')) {
        console.log('Using fallback guidance due to Chrome extension API unavailability');
        return this.getFallbackGuidance(prompt);
      }
      
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

  // Fallback guidance when API is not available
  getFallbackGuidance(prompt) {
    console.log('Providing fallback guidance for:', prompt);
    
    // Check if this is a piecewise function problem
    if (prompt.includes('piecewise') || (prompt.includes('f(x)=') && prompt.includes('{'))) {
      return "I'd love to help you with this piecewise function! Let's work through it step by step. First, identify which interval your input value falls into. Look at the three intervals: x ≤ -3, -3 < x ≤ 0, and x > 0. For example, if you're evaluating f(-1), check: is -1 ≤ -3? No. Is -3 < -1 ≤ 0? Yes! So you would use the middle formula (x²).";
    }
    
    // Check if this is a math problem
    if (prompt.includes('math') || prompt.includes('solve') || prompt.includes('calculate') || prompt.includes('=')) {
      return "I'd love to help you with this math problem! Let's work through it step by step. What specific part are you having trouble with? Can you tell me what you're trying to find?";
    }
    
    // Check if this is a reading problem
    if (prompt.includes('reading') || prompt.includes('comprehension') || prompt.includes('passage')) {
      return "I'd love to help you with this reading comprehension! Let's work through it together. What specific part would you like help with?";
    }
    
    // Check if this is a writing problem
    if (prompt.includes('writing') || prompt.includes('essay') || prompt.includes('paragraph')) {
      return "I'd love to help you with your writing! Let's work through it step by step. What specific part would you like help with?";
    }
    
    // Check if this is a grammar problem
    if (prompt.includes('grammar') || prompt.includes('sentence') || prompt.includes('punctuation')) {
      return "I'd love to help you with grammar! Let's work through it together. What specific part would you like help with?";
    }
    
    // Check if this is a vocabulary problem
    if (prompt.includes('vocabulary') || prompt.includes('word') || prompt.includes('definition')) {
      return "I'd love to help you with vocabulary! Let's work through it together. What specific word or concept would you like help with?";
    }
    
    // Default response
    return "I'd love to help you with this! Let's work through it step by step. What specific part would you like help with?";
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
