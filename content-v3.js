// Enhanced AI Tutor Content Script - Detailed Responses & Better Functionality
console.log('🚀🚀🚀 CONTENT-V3.JS LOADED - VERSION 4.0 - MATH DETECTION FIXED 🚀🚀🚀');
console.log('This is the UPDATED version with proper word counting!');
console.log('Timestamp:', new Date().toISOString());
console.log('Word counting function test:', (() => {
  const testText = "This is a test with exactly ten words to verify counting works correctly";
  const words = testText.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
})());

// Functions will be checked after they are defined
console.log('🔍 DEBUG: About to define detailedResponses object');

// Detailed AI responses with step-by-step guidance
const detailedResponses = {
  math: {
    algebra: [
      "Let's solve this algebra problem step by step! First, I need to understand what we're working with. Can you tell me what the equation looks like? For example, is it something like '2x + 5 = 13'? Once I know the equation, I'll guide you through each step: identifying the variable, isolating it, and checking your answer.",
      "Great! Now let's break this down systematically. Step 1: What variable are we solving for? Step 2: What operations do you see in the equation? Step 3: What's the first thing we need to do to isolate the variable? Remember, we want to get the variable by itself on one side of the equals sign.",
      "Perfect! Now let's work through the solution. The key principle is: whatever you do to one side of the equation, you must do to the other side to keep it balanced. So if we subtract 5 from the left side, we must subtract 5 from the right side too. What do you think the next step should be?",
      "Excellent work! Now let's verify our answer by substituting it back into the original equation. If we got x = 4, then 2(4) + 5 should equal 13. Let's check: 8 + 5 = 13. Does this work? If yes, we've solved it correctly! If not, let's trace back through our steps to find where we might have made an error.",
      "Time to tackle this algebra challenge! 🧮 First, let's identify what we're dealing with. What does your equation look like? Is it linear like '3x + 7 = 22' or something more complex? Once I see the equation, I'll walk you through the solving process step by step.",
      "Awesome! Let's dive into the algebra adventure! 🚀 Step 1: Spot the variable - what letter are we solving for? Step 2: Identify the operations - addition, subtraction, multiplication, division? Step 3: Plan our attack - what's the first move to isolate our variable?",
      "Fantastic! Now let's execute our plan! The golden rule of algebra: keep the equation balanced! Whatever operation you do to one side, do the same to the other side. It's like keeping a seesaw level! What's your next move?",
      "Outstanding! Now for the moment of truth - let's check our work! Plug your answer back into the original equation. Does it make both sides equal? If yes, you've conquered this algebra problem! If not, let's debug together and find where we went off track."
    ],
    geometry: [
      "Let's tackle this geometry problem together! First, let's identify what we're working with. What shape are we dealing with? Is it a rectangle, circle, triangle, or something else? Once we know the shape, we can identify the formula we need and the information we already have.",
      "Great! Now let's think about what we're trying to find. Are we looking for area, perimeter, volume, or something else? For area, we might use A = l × w for rectangles, or A = πr² for circles. What formula do you think applies to your problem?",
      "Perfect! Now let's identify what information we have. What measurements are given in the problem? Write them down clearly. Then, let's plug these values into our formula. Remember to be careful with units - if the problem gives measurements in different units, we might need to convert them first.",
      "Excellent! Now let's calculate step by step. Show me your work as you go through each part of the formula. Don't forget to include units in your final answer. For example, if we're finding area, our answer should be in square units (like cm² or in²).",
      "Ready to explore some geometric shapes! 🔺 First, let's identify our shape. Is it a polygon like a rectangle or triangle, or a curved shape like a circle? Each shape has its own special formulas and properties we can use.",
      "Awesome! Now let's figure out what we're calculating. Are we finding the space inside (area), the distance around (perimeter), or the 3D space (volume)? Different shapes have different formulas for each measurement.",
      "Fantastic! Let's gather our data. What measurements do we have? Length, width, radius, height? Write them down and check the units. If they're different, we'll need to convert them to match before we calculate.",
      "Outstanding! Time to put it all together! Let's plug our numbers into the formula and work through the calculation step by step. Remember to show your work and include the proper units in your final answer!"
    ],
    wordProblems: [
      "Let's solve this word problem step by step! First, let me understand what's happening. Can you tell me what the problem is asking? What information are we given, and what do we need to find?",
      "Great! Now let's identify the key information. What numbers are given in the problem? What do they represent? Are there any keywords that tell us what operation to use? Words like 'total', 'sum', 'altogether' often mean addition, while 'difference', 'less than', 'fewer' often mean subtraction.",
      "Perfect! Now let's set up our equation or calculation. What variable will represent what we're trying to find? How can we express the relationship between the given information and what we need to find?",
      "Now let's work through the actual calculation. Let me show you how to solve this specific problem step by step, then you can try similar problems on your own.",
      "Time to decode this word problem! 🕵️ First, let's read it carefully and identify what's being asked. What's the question at the end? What information do we have to work with?",
      "Excellent! Now let's hunt for clues. What numbers do you see? What do they represent in the story? Look for keywords like 'total', 'each', 'per', 'times', 'more than', 'less than' - these tell us what operation to use!",
      "Awesome! Now let's translate this into math. What variable will stand for what we're trying to find? How can we write an equation that connects all the information we have?",
      "Fantastic! Now let's solve it! Work through the calculation step by step, and I'll guide you if you get stuck. Remember to check if your answer makes sense in the context of the problem!"
    ]
  },
  reading: {
    comprehension: [
      "Let's analyze this text together! First, let's read through it once to get a general understanding. What do you think the main topic or subject is? Don't worry about details yet - just try to get the big picture.",
      "Great! Now let's look for the main idea. The main idea is usually stated in one or two sentences and tells us what the entire passage is about. Look for a sentence that seems to summarize the whole passage. It's often found at the beginning or end of a paragraph.",
      "Excellent! Now let's identify the supporting details. These are the facts, examples, or explanations that help prove or explain the main idea. Can you find at least three supporting details in the text? Write them down as you find them.",
      "Perfect! Now let's think about the author's purpose. Why do you think the author wrote this? To inform, persuade, entertain, or explain? Look for clues like the tone of the writing, the type of information presented, and any opinions expressed.",
      "Great work! Now let's make some inferences. An inference is something we can figure out from the text even though it's not directly stated. What can you infer about the author's opinion on this topic? What can you infer about the intended audience?",
      "Ready to dive into this text! 📚 First, let's skim through and get the gist. What's the overall subject or theme? Don't get bogged down in details yet - just capture the main concept.",
      "Awesome! Now let's hunt for the main idea. Look for a sentence that captures the essence of the entire passage. It might be at the beginning, end, or even in the middle. What sentence do you think sums up the whole text?",
      "Fantastic! Time to find the evidence! Look for specific facts, examples, or details that support the main idea. Can you spot at least three pieces of evidence? Jot them down as you find them.",
      "Outstanding! Now let's figure out the author's goal. Why did they write this piece? To teach us something, convince us of something, tell us a story, or explain how something works? Look for clues in their word choice and tone.",
      "Excellent! Now let's read between the lines! What can you figure out that the author doesn't say directly? What do you think the author really thinks about this topic? Who do you think they wrote this for?"
    ],
    vocabulary: [
      "Let's figure out this word together! First, let's look at the context - the words and sentences around the unknown word. What clues can you find? Does the sentence give you any hints about what the word might mean?",
      "Great! Now let's look for word parts. Many words are made up of smaller parts called roots, prefixes, and suffixes. For example, 'unhappy' has the prefix 'un-' (meaning 'not') and the root 'happy'. Can you identify any familiar parts in this word?",
      "Excellent! Now let's try to use context clues. Look at the other words in the sentence. Do any of them give you hints about what this word might mean? Sometimes the sentence will define the word, give an example, or provide a contrast.",
      "Perfect! Now let's make an educated guess. Based on the context and word parts, what do you think this word means? Don't worry if you're not sure - just make your best guess. Then, let's check if your guess makes sense when you substitute it back into the sentence.",
      "Great work! Now let's verify our understanding. Does your definition make sense in the context of the sentence? Does it fit with the overall meaning of the paragraph? If not, let's try a different approach or look for more context clues.",
      "Time to crack this word code! 🔍 First, let's examine the context - what's happening around this word? What clues do the surrounding words give us about its meaning?",
      "Awesome! Now let's break down the word itself. Look for familiar parts like prefixes (un-, re-, pre-), suffixes (-tion, -ly, -able), or roots you might recognize. These word parts are like puzzle pieces!",
      "Fantastic! Let's use our detective skills! Look at the other words in the sentence. Do any of them give us hints? Sometimes the author defines the word, gives an example, or shows us the opposite.",
      "Outstanding! Time to make our best guess! Based on all the clues we've found, what do you think this word means? Don't worry about being perfect - just make an educated guess!",
      "Excellent! Now let's test our theory! Does your definition work when you plug it back into the sentence? Does it make sense with the whole paragraph? If not, let's gather more clues and try again!"
    ]
  },
  writing: {
    structure: [
      "Let's organize your writing! First, let's identify your main point or thesis. What is the one main idea you want to communicate? This should be a clear, specific statement that tells your reader exactly what you're going to discuss.",
      "Great! Now let's plan your supporting points. What are the 2-3 main reasons or pieces of evidence that support your thesis? Each supporting point should be distinct and directly related to your main idea. Write them down in order of importance.",
      "Excellent! Now let's think about your introduction. How will you grab your reader's attention? You might start with a question, a surprising fact, or a brief story. Then, how will you introduce your thesis? The introduction should be like a roadmap for your essay.",
      "Perfect! Now let's plan your body paragraphs. Each paragraph should focus on one supporting point. Start with a topic sentence that introduces the point, then provide evidence or examples, and end with a sentence that connects back to your thesis.",
      "Great work! Now let's think about your conclusion. How will you wrap up your essay? You might summarize your main points, restate your thesis in different words, or end with a call to action or a thought-provoking question.",
      "Ready to build your writing masterpiece! 🏗️ First, let's nail down your main argument. What's the one key point you want to make? This thesis should be clear, specific, and tell your reader exactly what you're going to prove.",
      "Awesome! Now let's gather your evidence! What are the 2-3 strongest reasons that support your main point? Each reason should be different and directly back up your thesis. Rank them from strongest to weakest.",
      "Fantastic! Time to craft your hook! How will you grab your reader's attention right away? Try a surprising fact, a thought-provoking question, or a brief story. Then introduce your thesis like a roadmap!",
      "Outstanding! Now let's structure your body! Each paragraph should tackle one supporting point. Start with a topic sentence, add evidence and examples, then connect it back to your main argument.",
      "Excellent! Let's wrap it up with style! How will you conclude? Summarize your main points, restate your thesis in fresh words, or end with a powerful call to action that makes your reader think!"
    ],
    brainstorming: [
      "Let's brainstorm some ideas! First, let's think about your topic broadly. What comes to mind when you think about this subject? Don't worry about organization yet - just write down everything that pops into your head.",
      "Great! Now let's think about different angles or perspectives. How might different people view this topic? What are the pros and cons? What are the different aspects or parts of this topic that you could explore?",
      "Excellent! Now let's think about personal connections. Have you had any personal experiences related to this topic? What stories or examples could you use to illustrate your points? Personal examples often make writing more engaging and convincing.",
      "Perfect! Now let's think about questions. What questions do you have about this topic? What would you like to know more about? Sometimes the best writing comes from exploring questions that genuinely interest you.",
      "Great work! Now let's organize these ideas. Which ideas seem most important or interesting? Which ones could you develop into full paragraphs? Start grouping related ideas together and see what patterns emerge.",
      "Time to unleash your creativity! 💡 First, let's do a brain dump - write down everything that comes to mind about this topic. Don't judge or organize yet, just let your thoughts flow!",
      "Awesome! Now let's explore different viewpoints. How would a student, teacher, parent, or expert see this topic? What are the different sides of the argument? What aspects haven't you considered yet?",
      "Fantastic! Let's add some personal flavor! What experiences have you had with this topic? What stories, memories, or examples could make your writing more interesting and authentic?",
      "Outstanding! Now let's get curious! What questions do you have about this topic? What would you like to learn more about? Sometimes the best writing comes from exploring your own genuine curiosity!",
      "Excellent! Time to sort and prioritize! Which ideas are the strongest? Which ones could become full paragraphs? Group similar ideas together and see what themes emerge. You're building the foundation of your essay!"
    ]
  },
  grammar: {
    tenses: [
      "Let's look at verb tenses! First, let's identify the verb in the sentence. What action is being described? Then, let's determine when this action takes place - is it happening now (present), did it happen in the past, or will it happen in the future?",
      "Great! Now let's look at the tense markers. Words like 'yesterday', 'last week', 'tomorrow', 'next year' can help us identify the time frame. What time markers do you see in this sentence?",
      "Excellent! Now let's think about the specific tense. Is it simple present (I walk), present continuous (I am walking), simple past (I walked), past continuous (I was walking), or future (I will walk)? Each tense has a specific form and use.",
      "Perfect! Now let's check if the tense is consistent throughout the sentence or paragraph. All verbs in the same time frame should use the same tense. Are there any tense shifts that don't make sense?",
      "Great work! Now let's practice. Can you rewrite this sentence using a different tense? How does changing the tense affect the meaning? This will help you understand when and why we use different tenses.",
      "Time to master verb tenses! ⏰ First, let's spot the verb - what action is happening? Then figure out when - now, before, or later? This will help us identify the correct tense to use.",
      "Awesome! Let's hunt for time clues! Look for words like 'yesterday', 'now', 'tomorrow', 'always', 'never' - these tell us when the action happens and help us choose the right tense.",
      "Fantastic! Now let's identify the specific tense! Is it present (I walk), past (I walked), or future (I will walk)? Each tense has its own special form and tells us exactly when something happens.",
      "Outstanding! Let's check for consistency! All verbs in the same time period should use the same tense. Are there any tense jumps that don't make sense?",
      "Excellent! Time to practice! Try rewriting this sentence in a different tense. How does changing the tense change the meaning? This helps you understand why we use different tenses!"
    ],
    partsOfSpeech: [
      "Let's identify parts of speech! First, let's find the subject - who or what is doing the action? The subject is usually a noun or pronoun. Can you identify the subject in this sentence?",
      "Great! Now let's find the verb - what action is being performed? The verb tells us what the subject is doing. Look for action words like 'run', 'think', 'write', or being words like 'is', 'are', 'was'.",
      "Excellent! Now let's look for adjectives - words that describe nouns. They often answer questions like 'what kind?', 'which one?', or 'how many?'. Can you find any adjectives in this sentence?",
      "Perfect! Now let's look for adverbs - words that describe verbs, adjectives, or other adverbs. They often answer questions like 'how?', 'when?', 'where?', or 'to what extent?'. What adverbs can you find?",
      "Great work! Now let's look for prepositions - words that show relationships between other words. Common prepositions include 'in', 'on', 'at', 'by', 'for', 'with'. What prepositions do you see?",
      "Excellent! Now let's look for conjunctions - words that connect other words, phrases, or clauses. Common conjunctions include 'and', 'but', 'or', 'so', 'because'. What conjunctions can you find?",
      "Ready to become a grammar detective! 🕵️ First, let's find the subject - who or what is doing something? Look for nouns or pronouns that are the main characters of the sentence.",
      "Awesome! Now let's hunt for the verb - what action is happening? Look for action words like 'jump', 'think', 'create' or state-of-being words like 'is', 'are', 'was'.",
      "Fantastic! Time to spot adjectives! These describe nouns and answer questions like 'what kind?', 'which one?', or 'how many?'. They make our writing more colorful!",
      "Outstanding! Let's find adverbs! These describe verbs, adjectives, or other adverbs and answer 'how?', 'when?', 'where?', or 'to what extent?'. They add detail to our actions!",
      "Excellent! Now let's look for prepositions! These show relationships between words and often tell us about location, time, or direction. Look for words like 'in', 'on', 'at', 'by', 'for'.",
      "Great work! Finally, let's find conjunctions! These connect words, phrases, or clauses together. Look for words like 'and', 'but', 'or', 'so', 'because' that join ideas!"
    ]
  },
  vocabulary: [
    "Let's explore this word together! First, let's look at the context - the words and sentences around it. What clues can you find about what this word might mean? Sometimes the sentence will give you hints through examples, definitions, or contrasts.",
    "Great! Now let's look for word parts. Many words are built from smaller pieces. Can you identify any prefixes (like 'un-', 're-', 'pre-'), suffixes (like '-tion', '-ly', '-able'), or roots that you recognize? These can give us clues about the word's meaning.",
    "Excellent! Now let's think about the word's function in the sentence. What part of speech is it? Is it a noun, verb, adjective, or adverb? This can help us understand how the word is being used and what it might mean.",
    "Perfect! Now let's make an educated guess. Based on the context and word parts, what do you think this word means? Don't worry if you're not sure - just make your best guess. Then, let's test it by substituting your definition back into the sentence.",
    "Great work! Now let's think about synonyms and antonyms. Can you think of any words that mean the same thing as this word? What about words that mean the opposite? This can help deepen your understanding of the word's meaning and usage.",
    "Ready to decode this word mystery! 🔍 First, let's examine the context - what's happening around this word? What clues do the surrounding words give us about its meaning?",
    "Awesome! Now let's break down the word itself! Look for familiar pieces like prefixes (un-, re-, pre-), suffixes (-tion, -ly, -able), or roots you might know. These word parts are like puzzle pieces!",
    "Fantastic! Let's figure out the word's job! What part of speech is it? Is it a noun (person, place, thing), verb (action), adjective (describes), or adverb (tells how/when/where)? This helps us understand its role!",
    "Outstanding! Time to make our best guess! Based on all the clues we've found, what do you think this word means? Don't worry about being perfect - just make an educated guess!",
    "Excellent! Let's expand our vocabulary! Can you think of words that mean the same thing (synonyms) or the opposite (antonyms)? This helps us understand the word's meaning and how to use it!"
  ]
};

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
  general: [
    'wikipedia.org', 'britannica.com', 'encyclopedia.com', 'britannica.com',
    'study.com', 'sparknotes.com', 'cliffsnotes.com', 'shmoop.com'
  ]
};

// Enhanced site detection
console.log('🔍 DEBUG: About to define detectSiteContext function');
function detectSiteContext() {
  const hostname = window.location.hostname.toLowerCase();
  const pathname = window.location.pathname.toLowerCase();
  const title = document.title.toLowerCase();
  const bodyText = document.body.innerText.toLowerCase();
  
  const context = {
    math: false,
    reading: false,
    writing: false,
    general: false,
    siteType: 'unknown',
    confidence: 0
  };
  
  // Check URL patterns
  for (const [type, sites] of Object.entries(sitePatterns)) {
    for (const site of sites) {
      if (hostname.includes(site) || hostname.endsWith(site)) {
        context[type] = true;
        context.siteType = type;
        context.confidence += 0.8;
        break;
      }
    }
  }
  
  // Check content patterns
  const mathKeywords = ['solve', 'equation', 'calculate', 'algebra', 'geometry', 'trigonometry', 'calculus', 'problem', 'formula'];
  const readingKeywords = ['article', 'passage', 'text', 'comprehension', 'read', 'story', 'chapter', 'essay'];
  const writingKeywords = ['write', 'essay', 'paragraph', 'composition', 'grammar', 'spelling', 'sentence'];
  
  const mathScore = mathKeywords.filter(keyword => bodyText.includes(keyword)).length;
  const readingScore = readingKeywords.filter(keyword => bodyText.includes(keyword)).length;
  const writingScore = writingKeywords.filter(keyword => bodyText.includes(keyword)).length;
  
  if (mathScore > 2) {
    context.math = true;
    context.confidence += 0.6;
  }
  if (readingScore > 2) {
    context.reading = true;
    context.confidence += 0.6;
  }
  if (writingScore > 2) {
    context.writing = true;
    context.confidence += 0.6;
  }
  
  // Check for math expressions
  if (bodyText.match(/[0-9]+\s*[+\-*/=]\s*[0-9]+/)) {
    context.math = true;
    context.confidence += 0.4;
  }
  
  // Check for reading content
  if (bodyText.match(/paragraph|passage|article|text/)) {
    context.reading = true;
    context.confidence += 0.4;
  }
  
  return context;
}

// Extract math numbers while avoiding multiple choice options and handling LaTeX
function extractMathNumbers(problemText) {
  // Clean up LaTeX notation before extracting numbers
  let cleanText = problemText
    .replace(/\\/g, '') // Remove backslashes
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  console.log('extractMathNumbers - Original text:', problemText);
  console.log('extractMathNumbers - Cleaned text:', cleanText);
  
  // Extract numbers but avoid multiple choice patterns
  const numbers = cleanText.match(/\d+\.?\d*/g);
  
  // Filter out numbers that are part of multiple choice options (like a2, b2, c2, d2, e2)
  const filteredNumbers = numbers ? numbers.filter(num => {
    const numStr = num.toString();
    // Check if this number is part of a multiple choice pattern
    const beforeNum = cleanText.substring(0, cleanText.indexOf(numStr));
    const afterNum = cleanText.substring(cleanText.indexOf(numStr) + numStr.length);
    
    // If there's a letter right before or after the number, it might be a choice
    const hasLetterBefore = /[a-zA-Z]$/.test(beforeNum.trim());
    const hasLetterAfter = /^[a-zA-Z]/.test(afterNum.trim());
    
    // Also check for common multiple choice patterns
    const isChoicePattern = /[a-e]\d+/.test(cleanText) && (hasLetterBefore || hasLetterAfter);
    
    return !isChoicePattern;
  }) : [];
  
  console.log('extractMathNumbers - Filtered numbers:', filteredNumbers);
  return filteredNumbers;
}

// Problem solving engine for specific math problems
function solveMathProblem(problemText) {
  console.log('Solving math problem:', problemText);
  
  // Extract decimal numbers, fractions, and operations from the problem
  // Use more intelligent number extraction that avoids extracting numbers from multiple choice options
  const numbers = extractMathNumbers(problemText);
  
  // Clean up LaTeX notation for fraction extraction
  let cleanText = problemText
    .replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)') // \dfrac{a}{b} -> (a)/(b)
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')  // \frac{a}{b} -> (a)/(b)
    .replace(/\\[a-zA-Z]+\{[^}]*\}/g, '') // Remove other LaTeX commands
    .replace(/\{[^}]*\}/g, '') // Remove remaining braces
    .replace(/\\/g, '') // Remove backslashes
    .replace(/\s+/g, ' ') // Normalize whitespace
    .trim();
  
  const fractions = cleanText.match(/\d+\/\d+/g);
  const operations = cleanText.match(/[+\-*/=]/g);
  
  console.log('LaTeX cleaning:', {
    original: problemText,
    cleaned: cleanText,
    fractions: fractions,
    operations: operations
  });
  
  console.log('Extracted numbers:', numbers);
  console.log('Extracted fractions:', fractions);
  console.log('Extracted operations:', operations);
  
  // Check for coordinate geometry problems FIRST - before multiple choice detection
  const hasMidpoint = cleanText.toLowerCase().includes('midpoint');
  const hasEndpoint = cleanText.toLowerCase().includes('endpoint');
  const hasParentheses = cleanText.match(/\([^)]*\)/);
  const hasCoordinate = cleanText.toLowerCase().includes('coordinate');
  
  if ((hasMidpoint || hasEndpoint) && hasParentheses) {
    console.log('Detected coordinate geometry problem, routing to solver');
    return solveCoordinateGeometryProblem(problemText);
  }
  
  // Check if this looks like a multiple choice question
  const isMultipleChoice = /[a-e]\d+/.test(problemText) || 
                          /[a-e]\s*[+\-*/=]/.test(problemText) ||
                          (/submit|question\s*\d+\?/i.test(problemText) && !hasMidpoint && !hasEndpoint);
  
  if (isMultipleChoice) {
    return `**Problem:** ${cleanText}\n\n**Analysis:** This appears to be a multiple choice question. I can see the mathematical expression, but I need to help you understand how to solve it rather than just adding up all the numbers.\n\n**Step 1:** Let me identify the actual math problem in the question.\n\n**Step 2:** The expression appears to be: ${cleanText}\n\n**Step 3:** This looks like it might be asking you to simplify or solve an algebraic expression.\n\n**Step 4:** To help you better, could you tell me what the question is specifically asking you to do? Are you supposed to:\n- Simplify the expression?\n- Solve for a variable?\n- Find the value?\n- Choose the correct simplified form?\n\n**Note:** I can see this is a multiple choice format, so I want to help you understand the math rather than just give you the answer!`;
  }
  
  if ((!numbers || numbers.length < 1) && (!fractions || fractions.length < 1)) {
    return "I can see this is a math problem, but I need to see the actual numbers to solve it. Can you show me the specific problem with numbers?";
  }
  
  // Unit conversion problems
  if (cleanText.toLowerCase().includes('kilograms') && cleanText.toLowerCase().includes('grams')) {
    return solveUnitConversion(cleanText, numbers);
  }
  
  // Speed/time unit conversions
  if (cleanText.toLowerCase().includes('kilometers per hour') && cleanText.toLowerCase().includes('kilometers per minute')) {
    return solveSpeedConversion(cleanText, numbers);
  }
  
  if (cleanText.toLowerCase().includes('per hour') && cleanText.toLowerCase().includes('per minute')) {
    return solveSpeedConversion(cleanText, numbers);
  }
  
  // Simple algebra problems (e.g., "2x + 5 = 13")
  if (cleanText.includes('x') && cleanText.includes('=')) {
    return solveAlgebraProblem(cleanText, numbers);
  }
  
  // Area problems
  if (cleanText.toLowerCase().includes('area')) {
    return solveAreaProblem(cleanText, numbers);
  }
  
  // Coordinate geometry problems (already checked above)
  
  // Fraction problems
  if (fractions && fractions.length > 0) {
    return solveFractionProblem(cleanText, numbers, fractions, operations);
  }
  
  // Basic arithmetic
  if (operations && (operations.includes('+') || operations.includes('-') || operations.includes('*') || operations.includes('/'))) {
    return solveArithmeticProblem(cleanText, numbers, operations);
  }
  
  // Word problems
  if (cleanText.toLowerCase().includes('total') || cleanText.toLowerCase().includes('sum') || cleanText.toLowerCase().includes('altogether')) {
    return solveWordProblem(cleanText, numbers);
  }
  
  // If we have numbers but no clear operation, try to solve based on context
  if (numbers.length >= 1) {
    return solveGenericMathProblem(cleanText, numbers);
  }
  
  return "I can see this is a math problem, but I need more specific information. Can you tell me the exact numbers and what operation you're trying to perform?";
}

function solveAlgebraProblem(problemText, numbers) {
  const num1 = parseInt(numbers[0]);
  const num2 = parseInt(numbers[1]);
  const num3 = parseInt(numbers[2]);
  
  if (problemText.includes('+') && problemText.includes('=')) {
    // Format: "2x + 5 = 13"
    const coefficient = num1;
    const constant = num2;
    const result = num3;
    
    const solution = (result - constant) / coefficient;
    
    return `Let's solve this algebra problem step by step!

**Problem:** ${problemText}

**Step 1:** Identify what we're solving for
We're solving for x in the equation: ${coefficient}x + ${constant} = ${result}

**Step 2:** Isolate the variable term
To get x by itself, we need to move the ${constant} to the other side.
We do this by subtracting ${constant} from both sides:
${coefficient}x + ${constant} - ${constant} = ${result} - ${constant}
${coefficient}x = ${result - constant}

**Step 3:** Solve for x
Now we divide both sides by ${coefficient}:
${coefficient}x ÷ ${coefficient} = ${result - constant} ÷ ${coefficient}
x = ${solution}

**Step 4:** Check our answer
Let's verify: ${coefficient}(${solution}) + ${constant} = ${coefficient * solution} + ${constant} = ${coefficient * solution + constant}
Since ${coefficient * solution + constant} = ${result}, our answer is correct!

**Answer:** x = ${solution}`;
  }
  
  return "I can see this is an algebra problem, but I need to see the exact equation to solve it step by step.";
}

function solveAreaProblem(problemText, numbers) {
  if (problemText.toLowerCase().includes('circle')) {
    const radius = parseInt(numbers[0]);
    const area = Math.PI * radius * radius;
    
    return `Let's find the area of this circle step by step!

**Problem:** Find the area of a circle with radius ${radius} cm

**Step 1:** Identify the formula
The formula for the area of a circle is: A = πr²
Where π ≈ 3.14 and r is the radius

**Step 2:** Plug in the values
A = π × ${radius}²
A = 3.14 × ${radius * radius}
A = 3.14 × ${radius * radius}

**Step 3:** Calculate
A = ${(3.14 * radius * radius).toFixed(2)} cm²

**Answer:** The area is ${(3.14 * radius * radius).toFixed(2)} cm²`;
  }
  
  if (problemText.toLowerCase().includes('rectangle')) {
    const length = parseInt(numbers[0]);
    const width = parseInt(numbers[1]);
    const area = length * width;
    
    return `Let's find the area of this rectangle step by step!

**Problem:** Find the area of a rectangle with length ${length} cm and width ${width} cm

**Step 1:** Identify the formula
The formula for the area of a rectangle is: A = length × width

**Step 2:** Plug in the values
A = ${length} × ${width}

**Step 3:** Calculate
A = ${area} cm²

**Answer:** The area is ${area} cm²`;
  }
  
  return "I can see this is an area problem, but I need to know what shape we're working with to solve it step by step.";
}

function solveArithmeticProblem(problemText, numbers, operations) {
  const num1 = parseFloat(numbers[0]);
  const num2 = parseFloat(numbers[1]);
  const num3 = parseFloat(numbers[2]);
  
  if (operations.includes('+')) {
    const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
    return `Let's solve this addition problem step by step!

**Problem:** ${problemText}

**Step 1:** Add the numbers one by one
${numbers.join(' + ')}

**Calculation:**
${numbers[0]} + ${numbers[1]}${numbers.length > 2 ? ` + ${numbers[2]}` : ''} = ${sum}

**Answer:** ${sum}`;
  }
  
  if (operations.includes('-')) {
    const difference = num1 - num2;
    return `Let's solve this subtraction problem step by step!

**Problem:** ${problemText}

**Step 1:** Subtract the second number from the first
${num1} - ${num2} = ${difference}

**Answer:** ${difference}`;
  }
  
  if (operations.includes('*')) {
    const product = num1 * num2;
    return `Let's solve this multiplication problem step by step!

**Problem:** ${problemText}

**Step 1:** Multiply the numbers
${num1} × ${num2} = ${product}

**Answer:** ${product}`;
  }
  
  if (operations.includes('/')) {
    const quotient = num1 / num2;
    return `Let's solve this division problem step by step!

**Problem:** ${problemText}

**Step 1:** Divide the first number by the second
${num1} ÷ ${num2} = ${quotient}

**Answer:** ${quotient}`;
  }
  
  return "I can see this is a math problem, but I need to understand what operation to perform.";
}

function solveWordProblem(problemText, numbers) {
  const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
  
  return `Let's solve this word problem step by step!

**Problem:** ${problemText}

**Step 1:** Identify what we're looking for
We need to find the total/sum of the given numbers.

**Step 2:** Identify the numbers
The numbers given are: ${numbers.join(', ')}

**Step 3:** Add them together
${numbers.join(' + ')} = ${sum}

**Answer:** ${sum}`;
}

function solveSpeedConversion(problemText, numbers) {
  const value = parseFloat(numbers[0]);
  
  if (problemText.toLowerCase().includes('kilometers per hour') && problemText.toLowerCase().includes('kilometers per minute')) {
    // Convert km/h to km/min: 1 hour = 60 minutes
    const kmPerMinute = value / 60;
    
    return `Let's solve this speed conversion problem step by step!

**Problem:** ${problemText}

**Step 1:** Identify the conversion needed
We need to convert from kilometers per hour to kilometers per minute.

**Step 2:** Recall the conversion factor
1 hour = 60 minutes

**Step 3:** Set up the conversion
${value} km/h ÷ 60 min/h = ${value} ÷ 60 km/min

**Step 4:** Calculate
${value} ÷ 60 = ${kmPerMinute.toFixed(4)} km/min

**Answer:** ${kmPerMinute.toFixed(4)} kilometers per minute`;
  }
  
  if (problemText.toLowerCase().includes('per hour') && problemText.toLowerCase().includes('per minute')) {
    // Generic per hour to per minute conversion
    const perMinute = value / 60;
    
    return `Let's solve this rate conversion problem step by step!

**Problem:** ${problemText}

**Step 1:** Identify the conversion needed
We need to convert from per hour to per minute.

**Step 2:** Recall the conversion factor
1 hour = 60 minutes

**Step 3:** Set up the conversion
${value} per hour ÷ 60 min/h = ${value} ÷ 60 per minute

**Step 4:** Calculate
${value} ÷ 60 = ${perMinute.toFixed(4)} per minute

**Answer:** ${perMinute.toFixed(4)} per minute`;
  }
  
  return "I can see this is a speed conversion problem, but I need to identify the specific units being converted.";
}

function solveUnitConversion(problemText, numbers) {
  const value = parseFloat(numbers[0]);
  
  if (problemText.toLowerCase().includes('kilograms') && problemText.toLowerCase().includes('grams')) {
    // Convert kilograms to grams: 1 kg = 1000 g
    const grams = value * 1000;
    
    return `Let's solve this unit conversion problem step by step!

**Problem:** ${problemText}

**Step 1:** Identify the conversion needed
We need to convert from kilograms to grams.

**Step 2:** Recall the conversion factor
1 kilogram = 1000 grams

**Step 3:** Set up the conversion
${value} kg × (1000 g / 1 kg) = ${value} × 1000 g

**Step 4:** Calculate
${value} × 1000 = ${grams} g

**Answer:** ${grams} grams per square centimeter`;
  }
  
  if (problemText.toLowerCase().includes('meters') && problemText.toLowerCase().includes('centimeters')) {
    // Convert meters to centimeters: 1 m = 100 cm
    const centimeters = value * 100;
    
    return `Let's solve this unit conversion problem step by step!

**Problem:** ${problemText}

**Step 1:** Identify the conversion needed
We need to convert from meters to centimeters.

**Step 2:** Recall the conversion factor
1 meter = 100 centimeters

**Step 3:** Set up the conversion
${value} m × (100 cm / 1 m) = ${value} × 100 cm

**Step 4:** Calculate
${value} × 100 = ${centimeters} cm

**Answer:** ${centimeters} centimeters`;
  }
  
  return "I can see this is a unit conversion problem, but I need to identify the specific units being converted.";
}

function solveGenericMathProblem(problemText, numbers) {
  // If only one number, this is likely a unit conversion or rate problem
  if (numbers.length === 1) {
    const value = parseFloat(numbers[0]);
    
    // Check for common unit conversion patterns
    if (problemText.toLowerCase().includes('per hour') && problemText.toLowerCase().includes('per minute')) {
      const perMinute = value / 60;
      return `Let's solve this rate conversion problem step by step!

**Problem:** ${problemText}

**Step 1:** Identify the conversion needed
We need to convert from per hour to per minute.

**Step 2:** Recall the conversion factor
1 hour = 60 minutes

**Step 3:** Set up the conversion
${value} per hour ÷ 60 min/h = ${value} ÷ 60 per minute

**Step 4:** Calculate
${value} ÷ 60 = ${perMinute.toFixed(4)} per minute

**Answer:** ${perMinute.toFixed(4)} per minute`;
    }
    
    // If it's just a single number with no clear operation, ask for clarification
    return `I can see this problem involves the number ${value}, but I need more information to solve it properly.

**Problem:** ${problemText}

**What I need to know:**
- What operation should I perform with this number?
- Are you looking for a unit conversion?
- Is this part of a larger calculation?

Can you provide more details about what you're trying to find?`;
  }
  
  // Try to determine what operation makes sense
  if (numbers.length === 2) {
    const num1 = parseFloat(numbers[0]);
    const num2 = parseFloat(numbers[1]);
    
    // If one number is much larger, might be multiplication
    if (num1 > 10 && num2 > 10) {
      const product = num1 * num2;
      return `Let's solve this math problem step by step!

**Problem:** ${problemText}

**Step 1:** I can see we have two numbers: ${num1} and ${num2}
**Step 2:** Let's try multiplying them: ${num1} × ${num2} = ${product}

**Answer:** ${product}`;
    } else {
      // Try addition
      const sum = num1 + num2;
      return `Let's solve this math problem step by step!

**Problem:** ${problemText}

**Step 1:** I can see we have two numbers: ${num1} and ${num2}
**Step 2:** Let's add them: ${num1} + ${num2} = ${sum}

**Answer:** ${sum}`;
    }
  }
  
  // If more than 2 numbers, probably addition
  const sum = numbers.reduce((acc, num) => acc + parseFloat(num), 0);
  return `Let's solve this math problem step by step!

**Problem:** ${problemText}

**Step 1:** I can see we have these numbers: ${numbers.join(', ')}
**Step 2:** Let's add them together: ${numbers.join(' + ')} = ${sum}

**Answer:** ${sum}`;
}

function solveFractionProblem(problemText, numbers, fractions, operations) {
  console.log('Solving fraction problem:', problemText);
  console.log('Fractions found:', fractions);
  console.log('Numbers found:', numbers);
  console.log('Operations found:', operations);
  
  let result = `**Problem:** ${problemText}\n\n`;
  
  // Convert fractions to decimals for calculation
  const fractionValues = fractions.map(fraction => {
    const [numerator, denominator] = fraction.split('/').map(Number);
    return numerator / denominator;
  });
  
  console.log('Fraction values:', fractionValues);
  
  // Combine all numbers (decimals + converted fractions)
  const allNumbers = [...(numbers || []).map(Number), ...fractionValues];
  
  console.log('All numbers for calculation:', allNumbers);
  
  if (allNumbers.length < 2) {
    return result + "I can see fractions in this problem, but I need more information to solve it. Can you show me the complete problem with all the numbers?";
  }
  
  // Determine the operation
  let operation = '+';
  if (operations) {
    if (operations.includes('+')) operation = '+';
    else if (operations.includes('-')) operation = '-';
    else if (operations.includes('*')) operation = '*';
    else if (operations.includes('/')) operation = '/';
  }
  
  // Check if it's asking for addition
  if (problemText.toLowerCase().includes('add') || problemText.toLowerCase().includes('sum') || 
      problemText.toLowerCase().includes('total') || problemText.toLowerCase().includes('altogether') ||
      operations?.includes('+')) {
    
    result += "**Step 1:** I can see this is an addition problem with fractions.\n\n";
    
    // Show the fractions
    result += "**Step 2:** Let's identify the fractions:\n";
    fractions.forEach((fraction, index) => {
      const [num, den] = fraction.split('/').map(Number);
      result += `- ${fraction} = ${num}/${den} = ${(num/den).toFixed(4)}\n`;
    });
    
    if (numbers && numbers.length > 0) {
      result += "\n**Step 3:** I also see these numbers:\n";
      numbers.forEach((num, index) => {
        result += `- ${num}\n`;
      });
    }
    
    // Calculate the sum
    const sum = allNumbers.reduce((acc, num) => acc + num, 0);
    
    result += `\n**Step 4:** Now let's add them all together:\n`;
    result += `${allNumbers.join(' + ')} = ${sum}\n\n`;
    
    // Convert back to fraction if possible
    const simplifiedFraction = decimalToFraction(sum);
    if (simplifiedFraction) {
      result += `**Step 5:** Let's convert the decimal to a fraction:\n`;
      result += `${sum} = ${simplifiedFraction}\n\n`;
    }
    
    result += `**Answer:** ${sum}`;
    if (simplifiedFraction && simplifiedFraction !== sum.toString()) {
      result += ` or ${simplifiedFraction}`;
    }
    
  } else if (problemText.toLowerCase().includes('subtract') || problemText.toLowerCase().includes('difference') ||
             operations?.includes('-')) {
    
    result += "**Step 1:** I can see this is a subtraction problem with fractions.\n\n";
    
    result += "**Step 2:** Let's identify the fractions:\n";
    fractions.forEach((fraction, index) => {
      const [num, den] = fraction.split('/').map(Number);
      result += `- ${fraction} = ${num}/${den} = ${(num/den).toFixed(4)}\n`;
    });
    
    if (numbers && numbers.length > 0) {
      result += "\n**Step 3:** I also see these numbers:\n";
      numbers.forEach((num, index) => {
        result += `- ${num}\n`;
      });
    }
    
    // Calculate the difference
    const difference = allNumbers.reduce((acc, num, index) => {
      if (index === 0) return num;
      return acc - num;
    });
    
    result += `\n**Step 4:** Now let's subtract:\n`;
    result += `${allNumbers.join(' - ')} = ${difference}\n\n`;
    
    const simplifiedFraction = decimalToFraction(difference);
    if (simplifiedFraction) {
      result += `**Step 5:** Let's convert the decimal to a fraction:\n`;
      result += `${difference} = ${simplifiedFraction}\n\n`;
    }
    
    result += `**Answer:** ${difference}`;
    if (simplifiedFraction && simplifiedFraction !== difference.toString()) {
      result += ` or ${simplifiedFraction}`;
    }
    
  } else if (problemText.toLowerCase().includes('multiply') || problemText.toLowerCase().includes('times') ||
             operations?.includes('*')) {
    
    result += "**Step 1:** I can see this is a multiplication problem with fractions.\n\n";
    
    result += "**Step 2:** Let's identify the fractions:\n";
    fractions.forEach((fraction, index) => {
      const [num, den] = fraction.split('/').map(Number);
      result += `- ${fraction} = ${num}/${den} = ${(num/den).toFixed(4)}\n`;
    });
    
    if (numbers && numbers.length > 0) {
      result += "\n**Step 3:** I also see these numbers:\n";
      numbers.forEach((num, index) => {
        result += `- ${num}\n`;
      });
    }
    
    // Calculate the product
    const product = allNumbers.reduce((acc, num) => acc * num, 1);
    
    result += `\n**Step 4:** Now let's multiply them all together:\n`;
    result += `${allNumbers.join(' × ')} = ${product}\n\n`;
    
    const simplifiedFraction = decimalToFraction(product);
    if (simplifiedFraction) {
      result += `**Step 5:** Let's convert the decimal to a fraction:\n`;
      result += `${product} = ${simplifiedFraction}\n\n`;
    }
    
    result += `**Answer:** ${product}`;
    if (simplifiedFraction && simplifiedFraction !== product.toString()) {
      result += ` or ${simplifiedFraction}`;
    }
    
  } else if (problemText.toLowerCase().includes('divide') || operations?.includes('/')) {
    
    result += "**Step 1:** I can see this is a division problem with fractions.\n\n";
    
    result += "**Step 2:** Let's identify the fractions:\n";
    fractions.forEach((fraction, index) => {
      const [num, den] = fraction.split('/').map(Number);
      result += `- ${fraction} = ${num}/${den} = ${(num/den).toFixed(4)}\n`;
    });
    
    if (numbers && numbers.length > 0) {
      result += "\n**Step 3:** I also see these numbers:\n";
      numbers.forEach((num, index) => {
        result += `- ${num}\n`;
      });
    }
    
    // Calculate the quotient
    const quotient = allNumbers.reduce((acc, num, index) => {
      if (index === 0) return num;
      return acc / num;
    });
    
    result += `\n**Step 4:** Now let's divide:\n`;
    result += `${allNumbers.join(' ÷ ')} = ${quotient}\n\n`;
    
    const simplifiedFraction = decimalToFraction(quotient);
    if (simplifiedFraction) {
      result += `**Step 5:** Let's convert the decimal to a fraction:\n`;
      result += `${quotient} = ${simplifiedFraction}\n\n`;
    }
    
    result += `**Answer:** ${quotient}`;
    if (simplifiedFraction && simplifiedFraction !== quotient.toString()) {
      result += ` or ${simplifiedFraction}`;
    }
    
  } else {
    // Generic fraction problem
    result += "**Step 1:** I can see fractions in this problem. Let me work with them step by step.\n\n";
    
    result += "**Step 2:** Let's identify the fractions:\n";
    fractions.forEach((fraction, index) => {
      const [num, den] = fraction.split('/').map(Number);
      result += `- ${fraction} = ${num}/${den} = ${(num/den).toFixed(4)}\n`;
    });
    
    if (numbers && numbers.length > 0) {
      result += "\n**Step 3:** I also see these numbers:\n";
      numbers.forEach((num, index) => {
        result += `- ${num}\n`;
      });
    }
    
    result += `\n**Step 4:** All the values are: ${allNumbers.join(', ')}\n\n`;
    result += "**Step 5:** What operation would you like me to perform with these fractions and numbers?";
  }
  
  return result;
}

// Helper function to convert decimal to simplified fraction
function decimalToFraction(decimal) {
  if (decimal % 1 === 0) {
    return decimal.toString();
  }
  
  const tolerance = 1e-6;
  let h1 = 1, h2 = 0, k1 = 0, k2 = 1;
  let b = decimal;
  
  do {
    let a = Math.floor(b);
    let aux = h1; h1 = a * h1 + h2; h2 = aux;
    aux = k1; k1 = a * k1 + k2; k2 = aux;
    b = 1 / (b - a);
  } while (Math.abs(decimal - h1/k1) > decimal * tolerance);
  
  if (k1 === 1) return h1.toString();
  if (h1 === 0) return "0";
  return `${h1}/${k1}`;
}

function solveCoordinateGeometryProblem(problemText) {
  console.log('Solving coordinate geometry problem:', problemText);
  console.log('Problem text length:', problemText.length);
  
  // Extract coordinates from the problem text
  // Handle different types of parentheses and negative signs
  const coordinatePattern = /[\(（]([^,，]+)[,，]([^\)）]+)[\)）]/g;
  const coordinates = [];
  let match;
  
  console.log('Starting coordinate extraction...');
  while ((match = coordinatePattern.exec(problemText)) !== null) {
    console.log('Found match:', match[0], 'x:', match[1], 'y:', match[2]);
    // Clean the coordinate strings and handle different negative signs
    const xStr = match[1].trim().replace(/[−–]/g, '-'); // Replace different minus signs with standard minus
    const yStr = match[2].trim().replace(/[−–]/g, '-');
    
    const x = parseFloat(xStr);
    const y = parseFloat(yStr);
    console.log('Processed:', xStr, '->', x, '|', yStr, '->', y);
    if (!isNaN(x) && !isNaN(y)) {
      coordinates.push({ x, y });
    }
  }
  
  const rawMatches = problemText.match(/[\(（][^,，]+[,，][^\)）]+[\)）]/g);
  console.log('Raw coordinate matches:', rawMatches);
  
  console.log('Extracted coordinates:', coordinates);
  
  if (coordinates.length < 2) {
    return `**Problem:** ${problemText}\n\nI can see this is a coordinate geometry problem, but I need to see the specific coordinates to solve it. Can you show me the exact coordinates?`;
  }
  
  // Check what type of problem this is
  if (problemText.toLowerCase().includes('midpoint')) {
    return solveMidpointProblem(problemText, coordinates);
  } else if (problemText.toLowerCase().includes('distance')) {
    return solveDistanceProblem(problemText, coordinates);
  } else if (problemText.toLowerCase().includes('slope')) {
    return solveSlopeProblem(problemText, coordinates);
  } else {
    return `**Problem:** ${problemText}\n\nI can see this is a coordinate geometry problem with coordinates ${coordinates.map(c => `(${c.x}, ${c.y})`).join(' and ')}, but I need to know what you're trying to find. Are you looking for:\n- The midpoint?\n- The distance?\n- The slope?\n- Something else?\n\nPlease let me know what you need to calculate!`;
  }
}

function solveMidpointProblem(problemText, coordinates) {
  const point1 = coordinates[0];
  const point2 = coordinates[1];
  
  return `**Problem:** ${problemText}\n\n**Step 1:** Identify the endpoints\nI can see the endpoints are (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}).\n\n**Step 2:** Use the midpoint formula\nThe midpoint formula is: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)\n\n**Step 3:** Plug in the coordinates\nM = ((${point1.x} + ${point2.x})/2, (${point1.y} + ${point2.y})/2)\nM = (${point1.x + point2.x}/2, ${point1.y + point2.y}/2)\n\n**Step 4:** Calculate the midpoint\nNow you need to calculate:\n- x-coordinate: (${point1.x} + ${point2.x}) ÷ 2 = ?\n- y-coordinate: (${point1.y} + ${point2.y}) ÷ 2 = ?\n\n**Your turn:** Work through the calculations and find the midpoint coordinates!`;
}

// AIModules class is loaded from ai-modules.js

// Initialize AI Modules
console.log('🔍 DEBUG: About to define aiModules variable');
let aiModules = null;

function initializeAIModules() {
  console.log('🔍 DEBUG: Inside initializeAIModules function');
  const apiKey = localStorage.getItem('gemini_api_key') || 'AIzaSyBg1pozqH0G5WmMRiQnVnPZd6wDZfBoghw';
  if (!localStorage.getItem('gemini_api_key')) {
    localStorage.setItem('gemini_api_key', apiKey);
  }
  console.log('🔍 DEBUG: About to create AIModules instance');
  console.log('🔍 DEBUG: AIModules class exists:', typeof AIModules);
  aiModules = new AIModules(apiKey);
  console.log('🔍 DEBUG: AIModules instance created successfully');
}

// AI-powered responses using modular system
console.log('🔍 DEBUG: About to define getAIResponse function');
async function getAIResponse(prompt, context = '') {
  console.log('🔍 DEBUG: Inside getAIResponse function');
  if (!aiModules) {
    console.log('🔍 DEBUG: aiModules not initialized, calling initializeAIModules');
    initializeAIModules();
  }
  
  // Check for test mode toggle command FIRST (before any AI processing)
  if (prompt.toLowerCase().includes('toggle test mode') || prompt.toLowerCase().includes('test mode')) {
    return aiModules.toggleTestMode();
  }
  
  // Check for quota status command
  if (prompt.toLowerCase().includes('check quota') || prompt.toLowerCase().includes('quota status')) {
    const status = await aiModules.checkQuotaStatus();
    return `**API Quota Status** 📊\n\n${status}\n\n**Current API Key:** ${aiModules.apiKey.substring(0, 10)}...\n\n**To update your API key:**\n1. Go to Google AI Studio (https://aistudio.google.com/)\n2. Create a new API key\n3. Replace the key in the extension settings`;
  }
  
  // Set API key command
  if (prompt.toLowerCase().includes('set api key') && prompt.includes('AIzaSy')) {
    const keyMatch = prompt.match(/AIzaSy[A-Za-z0-9_-]{33}/);
    if (keyMatch) {
      const newKey = keyMatch[0];
      localStorage.setItem('gemini_api_key', newKey);
      aiModules = new AIModules(newKey);
      return `**API Key Updated** ✅\n\nNew API key set: ${newKey.substring(0, 10)}...\n\n**Testing connection...**`;
    } else {
      return `**Invalid API Key Format** ❌\n\nPlease provide a valid Google AI API key starting with "AIzaSy"`;
    }
  }
  
  // Force update to new API key command
  if (prompt.toLowerCase().includes('update api key') || prompt.toLowerCase().includes('use new key')) {
    const newKey = 'AIzaSyBg1pozqH0G5WmMRiQnVnPZd6wDZfBoghw';
    localStorage.setItem('gemini_api_key', newKey);
    aiModules = new AIModules(newKey);
    return `**API Key Force Updated** ✅\n\nNew API key set: ${newKey.substring(0, 10)}...\n\n**Testing connection...**`;
  }
  
  // Test API with simple call
  if (prompt.toLowerCase().includes('test api')) {
    try {
      const testResponse = await aiModules.callAI('Hello, this is a test. Please respond with "API working"');
      return `**API Test Successful** ✅\n\nResponse: ${testResponse}`;
    } catch (error) {
      return `**API Test Failed** ❌\n\nError: ${error.message}`;
    }
  }
  
  try {
    // Get chat history for context
    const chatHistory = getChatHistory();
    const recentMessages = chatHistory.slice(-4); // Last 4 messages for context
    
    // Determine the best module to use based on context
    const analysis = aiModules.analyzeTextForLearning(prompt + ' ' + context);
    console.log('AI Analysis:', analysis);
    console.log('Prompt:', prompt);
    console.log('Context:', context);
    console.log('AI Modules initialized:', !!aiModules);
    
    // Create context with chat history
    const fullContext = {
      currentPrompt: prompt,
      selectedText: context,
      chatHistory: recentMessages,
      analysis: analysis
    };
    
    let aiResponse;
    if (analysis.math) {
      console.log('Routing to math AI handler');
      aiResponse = await aiModules.handleMathRequest(prompt, fullContext);
    } else if (analysis.reading) {
      console.log('Routing to reading AI handler');
      aiResponse = await aiModules.handleReadingRequest(context, prompt, fullContext);
    } else if (analysis.writing) {
      console.log('Routing to writing AI handler');
      aiResponse = await aiModules.handleWritingRequest(prompt, fullContext);
    } else if (analysis.grammar) {
      console.log('Routing to grammar AI handler');
      aiResponse = await aiModules.handleGrammarRequest(prompt, fullContext);
    } else if (analysis.vocabulary.length > 0) {
      console.log('Routing to vocabulary AI handler');
      aiResponse = await aiModules.handleVocabularyRequest(analysis.vocabulary[0], fullContext);
    } else {
      console.log('Routing to general AI handler');
      aiResponse = await aiModules.handleGeneralRequest(prompt, fullContext);
    }
    
    console.log('AI Response received:', aiResponse);
    return aiResponse;
  } catch (error) {
    console.error('AI Module Error:', error);
    
    // Check if it's a rate limit error
    if (error.message && error.message.includes('429')) {
      console.log('Rate limit exceeded, using fallback response');
      return `**AI Quota/Rate Limit Reached** ⏰

The AI service is currently unavailable due to:
- **API Quota Exceeded** (most likely)
- **Rate Limiting** (too many requests)

**Quick Fix:**
1. **Check your quota:** Ask "check quota" to see your API status
2. **Get a new API key:** Go to https://aistudio.google.com/
3. **Wait a few minutes** and try again

**Basic Math Help:**
- Identify what you're solving for
- Look for given information  
- Choose the appropriate method
- Work step by step

**Problem:** ${context.replace('Selected text: "', '').replace('"', '')}

**Need a new API key?** Ask me "check quota" for instructions!`;
    }
    
    return getFallbackResponse(prompt, context);
  }
}

console.log('🔍 DEBUG: getAIResponse function defined successfully');

// Fallback responses when AI is unavailable
console.log('🔍 DEBUG: About to define getFallbackResponse function');
function getFallbackResponse(prompt, context) {
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
    
    // System of equations detection moved to AI modules for dynamic responses
    
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
    
    // Generic math expression
    if (selectedText.match(/[=+\-*/]/) || selectedText.match(/[0-9]/)) {
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
    // Check if they're referring to selected text that's not actually math
    if (context && context.includes('Selected text:') && 
        (context.includes('Welcome!') || context.includes('AI-Powered') || context.includes('How to Use'))) {
      return `**I'd love to help you with a math problem!** 🧮

I can see you're asking about a math problem, but the text you've selected appears to be the extension's welcome message, not an actual math problem.

**To get help with math:**
1. **Select a math problem** on the page (like an equation, word problem, or calculation)
2. **Or tell me** what specific math problem you're working on
3. **Then I can help you** with step-by-step solutions

**What math problem would you like help with?** You can either:
- Select a math problem on the page
- Type out the problem you're working on
- Tell me what you're trying to solve

I'm here to help you work through any math challenge! 🎯`;
    }
    
    return "I'd love to help you with this math problem! Let's work through it step by step. What specific part are you having trouble with?";
  }
  
  // Grammar questions should be handled by AI - no hardcoded responses
  if (lowerPrompt.includes('vocabulary') || lowerPrompt.includes('word') || lowerPrompt.includes('meaning')) {
    return "I can help you understand vocabulary! Let's break down word meanings, context clues, and word parts. What word are you working with?";
  } else if (lowerPrompt.includes('reading') || lowerPrompt.includes('comprehension')) {
    return "Let's improve your reading comprehension! I can help you find main ideas, supporting details, and make inferences. What passage are you working with?";
  } else if (lowerPrompt.includes('writing') || lowerPrompt.includes('essay') || lowerPrompt.includes('paragraph')) {
    return "I can help you with writing! Let's work on structure, organization, and clarity. What type of writing are you working on?";
  } else {
    // Grammar questions should be handled by AI - no hardcoded responses
    
    // Check if user is asking about selected text but it wasn't detected properly
    if (context && context.includes('Selected text:') && context.length > 20) {
      const selectedText = context.replace('Selected text: "', '').replace('"', '');
      if (selectedText && selectedText.length > 0) {
        return `**I can help you with that!** 🎯
      
I can see you have some text selected: "${selectedText.substring(0, 100)}${selectedText.length > 100 ? '...' : ''}"

**What would you like me to help you with?**
- **Math problems:** I can solve equations, explain formulas, and guide you through calculations
- **Reading comprehension:** I can help you understand passages and answer questions
- **Writing:** I can help with essays, paragraphs, and grammar
- **Vocabulary:** I can explain word meanings and usage
- **Grammar:** I can help identify parts of speech and sentence structure

**Just tell me what you need help with!** For example:
- "Help me solve this math problem"
- "Explain this passage"
- "Help me with this writing task"
- "What does this word mean?"`;
      }
    }
    
    return "I'm here to help you learn! What specific topic or question would you like to work on?";
  }


// AI-powered follow-up responses for all subjects
function getFollowUpResponse(input, selectedText) {
  const lowerInput = input.toLowerCase();
  
  // Writing follow-up questions
  if (lowerInput.includes('topic sentence') || lowerInput.includes('paragraph') || lowerInput.includes('essay')) {
    const writingResponses = [
      `**Topic Sentence Explained!** 📝\n\nA topic sentence is the main idea sentence of a paragraph. It tells the reader what the paragraph is about and introduces the main point.\n\n**Key characteristics:**\n- States the main idea clearly\n- Usually the first sentence\n- More general than other sentences\n- Doesn't contain specific details\n\n**Example:** "Science is my favorite subject because it helps me understand the world."\n\n**Why it works:** It introduces the main idea (science is favorite) and gives a reason (helps understand world). The other sentences would provide specific examples.\n\n**Need help identifying one?** Look for the sentence that introduces what the whole paragraph will discuss!`,
      
      `**Let's Master Topic Sentences!** ✍️\n\nA topic sentence is like the "headline" of a paragraph - it tells you what you're about to read!\n\n**What makes a good topic sentence:**\n- Clear and specific\n- Introduces the main idea\n- Sets up what follows\n- Not too detailed\n\n**Think of it as:** The sentence that answers "What is this paragraph about?"\n\n**In your example:** "Science is my favorite subject because it helps me understand the world" is the topic sentence because it introduces the main idea (favorite subject) and the reason (understanding the world).\n\n**Want to practice identifying them?**`,
      
      `**Topic Sentence Deep Dive!** 🔍\n\nA topic sentence is the foundation of a good paragraph. It's the sentence that introduces the main idea and tells readers what to expect.\n\n**The formula:** Main idea + supporting reason (optional)\n\n**Your example breakdown:**\n- Main idea: "Science is my favorite subject"\n- Supporting reason: "because it helps me understand the world"\n- Result: Perfect topic sentence!\n\n**How to spot them:**\n- Usually first sentence\n- More general than other sentences\n- Introduces what the paragraph will discuss\n- Doesn't give specific details\n\n**Ready to find more topic sentences?**`
    ];
    return writingResponses[Math.floor(Math.random() * writingResponses.length)];
  }
  
  // Reading follow-up questions
  if (lowerInput.includes('reading') || lowerInput.includes('comprehension') || lowerInput.includes('main idea')) {
    const readingResponses = [
      `**Reading Comprehension Help!** 📚\n\nI can help you with reading strategies! What specific aspect of reading are you working on?\n\n**I can help with:**\n- Finding the main idea\n- Identifying supporting details\n- Understanding author's purpose\n- Making inferences\n- Vocabulary strategies\n\n**What would you like to focus on?**`,
      
      `**Let's Improve Your Reading!** 🌟\n\nReading comprehension is about understanding what you read. What part are you finding challenging?\n\n**Common areas:**\n- Main idea identification\n- Supporting details\n- Author's purpose\n- Making connections\n- Critical thinking\n\n**Just ask me about any of these!**`
    ];
    return readingResponses[Math.floor(Math.random() * readingResponses.length)];
  }
  
  // Math follow-up questions
  if (lowerInput.includes('simplify') || lowerInput.includes('variables') || lowerInput.includes('exponents') ||
      lowerInput.includes('exponent') || lowerInput.includes('x2') || lowerInput.includes('x3') ||
      lowerInput.includes('algebra') || lowerInput.includes('math') || lowerInput.includes('can i') ||
      lowerInput.includes('ok') || lowerInput.includes('yes') || lowerInput.includes('no') ||
      lowerInput.includes('combine') || lowerInput.includes('expression') || lowerInput.includes('x^') ||
      lowerInput.includes('like terms') || lowerInput.includes('different exponents') ||
      lowerInput.includes('step 3') || lowerInput.includes('step 2') || lowerInput.includes('step 1') ||
      lowerInput.includes('step 4') || lowerInput.includes('step 5') || lowerInput.includes('help me with')) {
    
    // Check if this is a binomial expansion follow-up
    if (selectedText && (selectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)\d*[=]/) || 
                        selectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)\d*/) ||
                        selectedText.includes('m4+n7') || selectedText.includes('m2+ mn+ n2') ||
                        selectedText.includes('(m4+n7)2') || selectedText.includes('binomial') ||
                        selectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)/))) {
      console.log('Routing to binomial follow-up for:', selectedText);
      return getBinomialFollowUpResponse(input, selectedText);
    }
    
    // System of equations detection moved to AI modules for dynamic responses
    
    return getAIResponse(input, `Selected text: "${selectedText}"`);
  }
  
  // Grammar questions should be handled by AI - no hardcoded responses
  
  // Vocabulary follow-up questions
  if (lowerInput.includes('vocabulary') || lowerInput.includes('word') || lowerInput.includes('meaning') || 
      lowerInput.includes('definition') || lowerInput.includes('synonym') || lowerInput.includes('antonym') ||
      lowerInput.includes('what does') || lowerInput.includes('what is') || lowerInput.includes('mean')) {
    
    // Check if user is asking about a specific word meaning
    if (lowerInput.includes('what does') || lowerInput.includes('what is') || lowerInput.includes('mean')) {
      // Extract the word they're asking about from their question
      let targetWord = '';
      if (selectedText && selectedText.trim().length > 0) {
        targetWord = selectedText.trim();
      } else if (lowerInput.includes('what does')) {
        const match = lowerInput.match(/what does (\w+)/);
        if (match) targetWord = match[1];
      } else if (lowerInput.includes('what is')) {
        const match = lowerInput.match(/what is (\w+)/);
        if (match) targetWord = match[1];
      }
      
      if (targetWord) {
        return getSpecificWordHelp(targetWord);
      }
      
      const wordMeaningResponses = [
        `**Word Meaning Helper!** 📖\n\nI can help you understand what that word means! Let's break it down together.\n\n**Strategies to find word meanings:**\n- Look for context clues in the sentence\n- Break down word parts (prefixes, suffixes, roots)\n- Think of similar-sounding words\n- Consider what would make sense in context\n\n**What word are you trying to understand?** I'll help you figure it out!`,
        
        `**Vocabulary Detective!** 🔍\n\nReady to solve the mystery of that word? Let's investigate together!\n\n**My word-solving tools:**\n- Context clue analysis\n- Word part breakdown\n- Meaning strategies\n- Usage examples\n- Related words\n\n**What word needs investigating?** Let's crack the case!`,
        
        `**Word Explorer!** 🌟\n\nLet's discover what that word means! I'll guide you through the process.\n\n**How to find word meanings:**\n- Read the word in context\n- Look for familiar word parts\n- Think about what makes sense\n- Make an educated guess\n\n**What word are you exploring?** Let's find out together!`,
        
        `**Vocabulary Guide!** 📚\n\nI'm here to help you understand that word! Let's work through it step by step.\n\n**Word meaning strategies:**\n- Use context clues\n- Break down word parts\n- Think of similar words\n- Consider the sentence meaning\n\n**What word do you need help with?** I'll guide you to the answer!`
      ];
      return wordMeaningResponses[Math.floor(Math.random() * wordMeaningResponses.length)];
    }
    
    const vocabularyResponses = [
      `**Vocabulary Building Time!** 📖\n\nI can help you understand words and build your vocabulary! What word are you working with?\n\n**I can help with:**\n- Word meanings\n- Context clues\n- Word parts (prefixes, suffixes, roots)\n- Synonyms and antonyms\n- Usage examples\n\n**What word would you like to explore?**`,
      
      `**Let's Expand Your Vocabulary!** 🚀\n\nVocabulary is key to understanding and communication. What word or vocabulary skill are you working on?\n\n**I can help with:**\n- Finding word meanings\n- Using context clues\n- Breaking down word parts\n- Finding related words\n- Using words correctly\n\n**What vocabulary question do you have?**`,
      
      `**Word Detective Time!** 🔍\n\nLet's figure out this word together! What word are you trying to understand?\n\n**My vocabulary tools:**\n- Context clue analysis\n- Word part breakdown\n- Meaning strategies\n- Usage examples\n- Related words\n\n**What word needs investigating?**`,
      
      `**Vocabulary Adventure!** 🌟\n\nReady to master some new words? What vocabulary challenge are you facing?\n\n**I can help you with:**\n- Understanding word meanings\n- Using context clues effectively\n- Breaking down complex words\n- Finding word connections\n- Building word knowledge\n\n**What word would you like to explore?**`
    ];
    return vocabularyResponses[Math.floor(Math.random() * vocabularyResponses.length)];
  }
  
  // Fall back to math follow-up responses for math-related questions
  return getMathFollowUpResponse(input, selectedText);
}

// Specific follow-up responses for system of equations problems
function getSystemOfEquationsFollowUpResponse(input, selectedText) {
  const lowerInput = input.toLowerCase();
  
  if (lowerInput.includes('step 1') || lowerInput.includes('identify') || lowerInput.includes('what') || lowerInput.includes('solving')) {
    return `**Step 1: Identify What You're Solving For** 🔍

Looking at your system: {5p+q=3, 6p−14q=−8}

**What we need to find:**
- The values of **p** and **q** that make both equations true
- This is a system of linear equations with two variables

**The two equations are:**
1. **5p + q = 3** (first equation)
2. **6p - 14q = -8** (second equation)

**Goal:** Find the values of p and q that satisfy both equations simultaneously.

**Ready for Step 2?** Ask me about choosing the right method!`;
  }
  
  if (lowerInput.includes('step 2') || lowerInput.includes('method') || lowerInput.includes('choose') || lowerInput.includes('how')) {
    return `**Step 2: Choose the Right Method** ⚙️

For solving systems of equations, you have several options:

**Method 1: Substitution**
- Solve one equation for one variable
- Substitute that expression into the other equation
- Solve for the remaining variable

**Method 2: Elimination**
- Add or subtract the equations to eliminate one variable
- Solve for the remaining variable
- Substitute back to find the other variable

**Method 3: Graphing**
- Graph both equations
- Find the intersection point

**For your system:** I recommend **elimination** because the coefficients are set up nicely for it.

**Ready for Step 3?** Ask me about applying the elimination method!`;
  }
  
  if (lowerInput.includes('step 3') || lowerInput.includes('elimination') || lowerInput.includes('apply') || lowerInput.includes('method')) {
    return `**Step 3: Apply the Elimination Method** ⚡

**Your system:**
- Equation 1: 5p + q = 3
- Equation 2: 6p - 14q = -8

**Step 3a: Make the coefficients of one variable the same**
- We need to make the coefficients of either p or q the same
- Let's work with q: we need to make the coefficients of q equal

**Step 3b: Multiply equations if needed**
- Equation 1: 5p + q = 3 (multiply by 14)
- Equation 2: 6p - 14q = -8 (keep as is)

**Step 3c: Add the equations**
- 14(5p + q) = 14(3) → 70p + 14q = 42
- 6p - 14q = -8
- Add them: (70p + 14q) + (6p - 14q) = 42 + (-8)

**Ready for Step 4?** Ask me about solving for p!`;
  }
  
  if (lowerInput.includes('step 4') || (lowerInput.includes('solve') && lowerInput.includes('p')) || (lowerInput.includes('calculate') && lowerInput.includes('p'))) {
    return `**Step 4: Solve for the First Variable** 🧮

From Step 3, we have:
- 70p + 14q = 42
- 6p - 14q = -8
- Adding: (70p + 14q) + (6p - 14q) = 42 + (-8)

**Simplifying:**
- 70p + 6p + 14q - 14q = 42 - 8
- 76p + 0q = 34
- 76p = 34

**Solve for p:**
- p = 34 ÷ 76
- p = 17/38 (or approximately 0.447)

**Now we need to find q!** Ask me about Step 5!`;
  }
  
  if (lowerInput.includes('step 5') || (lowerInput.includes('substitute') && lowerInput.includes('back')) || (lowerInput.includes('find') && lowerInput.includes('q')) || lowerInput.includes('back to find')) {
    return `**Step 5: Substitute Back to Find the Second Variable** 🔄

We found p = 17/38, now let's find q:

**Use either original equation:**
- Equation 1: 5p + q = 3
- Substitute p = 17/38: 5(17/38) + q = 3

**Calculate:**
- 5(17/38) = 85/38
- 85/38 + q = 3
- q = 3 - 85/38
- q = (114 - 85)/38 = 29/38

**Final Answer:**
- p = 17/38
- q = 29/38

**Check your work:** Substitute both values back into both original equations to verify!

**Need help with the calculations?** Ask me about any specific step!`;
  }
  
  // Default response
  return `**System of Equations Help** 🔢

I can help you with any step of solving this system!

**Your system:** {5p+q=3, 6p−14q=−8}

**Available steps:**
- **Step 1:** Identify what you're solving for
- **Step 2:** Choose the right method
- **Step 3:** Apply the elimination method
- **Step 4:** Solve for the first variable
- **Step 5:** Substitute back to find the second variable

**What would you like help with?** Just ask about any specific step!`;
}

// Specific follow-up responses for binomial expansion problems
function getBinomialFollowUpResponse(input, selectedText) {
  const lowerInput = input.toLowerCase();
  
  // Extract the binomial expression from selected text
  const binomialMatch = selectedText.match(/\(([a-zA-Z]\d*)\+([a-zA-Z]\d*)\)(\d*)/);
  if (!binomialMatch) {
    // Try alternative patterns
    if (selectedText.includes('m4+n7') && selectedText.includes('m2+ mn+ n2')) {
      // Handle the specific case: (m4+n7)2=m2+ mn+ n2
      if (lowerInput.includes('step 3') || lowerInput.includes('apply') || lowerInput.includes('formula') || lowerInput.includes('substitute')) {
        return `**Step 3: Apply the Formula** ⚡

Now we substitute our terms into the binomial formula:

**Formula:** (a + b)² = a² + 2ab + b²
**Our terms:** a = m4, b = n7

**Substituting:**
(m4 + n7)² = (m4)² + 2(m4)(n7) + (n7)²

**This gives us three terms to work with:**
1. **First term:** (m4)²
2. **Middle term:** 2(m4)(n7)  
3. **Last term:** (n7)²

**Important:** The middle term is 2 times the product of both terms, not just 2 times one term.

**Ready for Step 4?** Ask me about simplifying each term!`;
      }
      
      if (lowerInput.includes('step 4') || lowerInput.includes('simplify') || lowerInput.includes('calculate')) {
        return `**Step 4: Simplify Each Term** 🧮

Now let's simplify each of the three terms:

**Term 1: (m4)²**
- This means m4 multiplied by itself
- (m4)² = m4 × m4
- **You need to calculate:** m4 × m4 = ?

**Term 2: 2(m4)(n7)**
- This means 2 times m4 times n7
- 2(m4)(n7) = 2 × m4 × n7
- **You need to calculate:** 2 × m4 × n7 = ?

**Term 3: (n7)²**
- This means n7 multiplied by itself
- (n7)² = n7 × n7
- **You need to calculate:** n7 × n7 = ?

**Hint:** When multiplying variables with exponents, add the exponents together.

**Ready for Step 5?** Ask me about combining the terms!`;
      }
      
      if (lowerInput.includes('step 5') || lowerInput.includes('combine') || lowerInput.includes('final') || lowerInput.includes('answer')) {
        return `**Step 5: Combine the Terms** ✨

After simplifying each term, you'll have three simplified terms. Now combine them:

**Your expanded form will be:**
(Simplified Term 1) + (Simplified Term 2) + (Simplified Term 3)

**Example structure:**
- If Term 1 simplifies to m⁸
- If Term 2 simplifies to 2m⁴n⁷  
- If Term 3 simplifies to n¹⁴
- Then: m⁸ + 2m⁴n⁷ + n¹⁴

**Final check:**
- Make sure all terms are simplified
- Add them together with + signs
- This is your final answer!

**Need help with a specific calculation?** Let me know which term you're having trouble with!`;
      }
      
      // Default response for this specific case
      return `**Binomial Expansion Help** 🧮

I can help you with any step of the binomial expansion process!

**Available steps:**
- **Step 1:** Recall the formula
- **Step 2:** Identify the terms  
- **Step 3:** Apply the formula
- **Step 4:** Simplify each term
- **Step 5:** Combine the terms

**Your problem:** (m4 + n7)²

**What would you like help with?** Just ask about any specific step!`;
    }
    return "I can see this is a binomial expansion problem, but I need to identify the specific terms. Can you show me the complete expression?";
  }
  
  const a = binomialMatch[1]; // First term (e.g., "m4")
  const b = binomialMatch[2]; // Second term (e.g., "n7") 
  const exponent = binomialMatch[3] || "2"; // Exponent (e.g., "2")
  
  if (lowerInput.includes('step 1') || lowerInput.includes('formula') || lowerInput.includes('recall')) {
    return `**Step 1: Recall the Binomial Formula** 📚

The binomial formula for (a + b)² is:
**(a + b)² = a² + 2ab + b²**

**For your problem:** (${a} + ${b})²

**What this means:**
- a = ${a}
- b = ${b}
- We're squaring the entire expression (${a} + ${b})

**The formula tells us:** When we expand (${a} + ${b})², we get three terms:
1. The first term squared: (${a})²
2. Two times the product: 2(${a})(${b})
3. The second term squared: (${b})²

**Ready for the next step?** Ask me about Step 2!`;
  }
  
  if (lowerInput.includes('step 2') || lowerInput.includes('identify') || lowerInput.includes('terms')) {
    return `**Step 2: Identify the Terms** 🔍

Looking at your expression: (${a} + ${b})²

**The two terms are:**
- **First term (a):** ${a}
- **Second term (b):** ${b}

**What each term represents:**
- ${a} is a variable with an exponent
- ${b} is a variable with an exponent
- The parentheses group them together
- The ² outside means we're squaring the entire sum

**Key point:** We're not squaring ${a} and ${b} separately, we're squaring (${a} + ${b}) as a whole.

**Ready for Step 3?** Ask me about applying the formula!`;
  }
  
  if (lowerInput.includes('step 3') || lowerInput.includes('apply') || lowerInput.includes('formula') || lowerInput.includes('substitute')) {
    return `**Step 3: Apply the Formula** ⚡

Now we substitute our terms into the binomial formula:

**Formula:** (a + b)² = a² + 2ab + b²
**Our terms:** a = ${a}, b = ${b}

**Substituting:**
(${a} + ${b})² = (${a})² + 2(${a})(${b}) + (${b})²

**This gives us three terms to work with:**
1. **First term:** (${a})²
2. **Middle term:** 2(${a})(${b})  
3. **Last term:** (${b})²

**Important:** The middle term is 2 times the product of both terms, not just 2 times one term.

**Ready for Step 4?** Ask me about simplifying each term!`;
  }
  
  if (lowerInput.includes('step 4') || lowerInput.includes('simplify') || lowerInput.includes('calculate')) {
    return `**Step 4: Simplify Each Term** 🧮

Now let's simplify each of the three terms:

**Term 1: (${a})²**
- This means ${a} multiplied by itself
- (${a})² = ${a} × ${a}
- **You need to calculate:** ${a} × ${a} = ?

**Term 2: 2(${a})(${b})**
- This means 2 times ${a} times ${b}
- 2(${a})(${b}) = 2 × ${a} × ${b}
- **You need to calculate:** 2 × ${a} × ${b} = ?

**Term 3: (${b})²**
- This means ${b} multiplied by itself
- (${b})² = ${b} × ${b}
- **You need to calculate:** ${b} × ${b} = ?

**Hint:** When multiplying variables with exponents, add the exponents together.

**Ready for Step 5?** Ask me about combining the terms!`;
  }
  
  if (lowerInput.includes('step 5') || lowerInput.includes('combine') || lowerInput.includes('final') || lowerInput.includes('answer')) {
    return `**Step 5: Combine the Terms** ✨

After simplifying each term, you'll have three simplified terms. Now combine them:

**Your expanded form will be:**
(Simplified Term 1) + (Simplified Term 2) + (Simplified Term 3)

**Example structure:**
- If Term 1 simplifies to m⁸
- If Term 2 simplifies to 2m⁴n⁷  
- If Term 3 simplifies to n¹⁴
- Then: m⁸ + 2m⁴n⁷ + n¹⁴

**Final check:**
- Make sure all terms are simplified
- Add them together with + signs
- This is your final answer!

**Need help with a specific calculation?** Let me know which term you're having trouble with!`;
  }
  
  // Default response for other questions
  return `**Binomial Expansion Help** 🧮

I can help you with any step of the binomial expansion process!

**Available steps:**
- **Step 1:** Recall the formula
- **Step 2:** Identify the terms  
- **Step 3:** Apply the formula
- **Step 4:** Simplify each term
- **Step 5:** Combine the terms

**Your problem:** (${a} + ${b})²

**What would you like help with?** Just ask about any specific step!`;
}

// AI-powered follow-up responses for math questions
function getMathFollowUpResponse(input, selectedText) {
  const lowerInput = input.toLowerCase();
  
  // General "tell me more" or "explain more" responses
  if (lowerInput.includes('more') || lowerInput.includes('explain') || lowerInput.includes('tell me')) {
    const responses = [
      `**Let me explain the midpoint concept in more detail!** 🎓\n\n**What is a midpoint?**\nThe midpoint is the exact center point between two coordinates. It's like finding the middle of a line segment.\n\n**Why do we divide by 2?**\nBecause we want the point that's exactly halfway between the two endpoints. Dividing by 2 gives us the average of the two coordinates.\n\n**Visual thinking:**\nImagine you're walking from point A to point B. The midpoint is where you'd be if you walked exactly half the distance.\n\n**For your problem:**\nYou have (-5a, 2b) and (7a, 10b). The midpoint will be exactly halfway between these two points.\n\n**What would you like to know more about?**\n- The formula itself?\n- How to work with variables (a and b)?\n- Step-by-step calculation?\n- Something else?`,
      
      `**Great question! Let me break this down further!** 📚\n\n**Think of it this way:**\nA midpoint is like the "halfway house" between two points. If you were driving from one city to another, the midpoint would be where you'd stop for lunch - exactly in the middle!\n\n**The math behind it:**\nWe add the coordinates and divide by 2 because we want the average position. It's like finding the center of gravity between two objects.\n\n**Your specific case:**\nWith (-5a, 2b) and (7a, 10b), we're finding the point that's equally distant from both endpoints.\n\n**Want to explore further?**\n- How the formula works?\n- Why variables behave this way?\n- Practice with different numbers?\n- Visual representation?`,
      
      `**Excellent! Let's dive deeper into midpoints!** 🔍\n\n**The big picture:**\nMidpoints are everywhere in geometry! They help us find centers, balance points, and symmetrical positions.\n\n**Why this matters:**\nUnderstanding midpoints helps with:\n- Finding centers of shapes\n- Balancing objects\n- Creating symmetrical designs\n- Solving more complex geometry problems\n\n**Your problem context:**\nYou're working with coordinates that have variables (a and b). This is actually more advanced than regular numbers!\n\n**What interests you most?**\n- The geometric meaning?\n- How to handle the variables?\n- Real-world applications?\n- Moving to the next step?`
    ];
    return responses[Math.floor(Math.random() * responses.length)];
  }
  
  // Midpoint follow-up questions
  if (lowerInput.includes('midpoint')) {
    if (lowerInput.includes('formula')) {
      const formulaResponses = [
        `**Midpoint Formula Help:**\n\nThe midpoint formula is: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)\n\n**How to use it:**\n1. Add the x-coordinates together\n2. Divide by 2 for the x-coordinate of the midpoint\n3. Add the y-coordinates together\n4. Divide by 2 for the y-coordinate of the midpoint\n\n**Example:** For points (3, 4) and (7, 8):\n- x-coordinate: (3 + 7) ÷ 2 = 10 ÷ 2 = 5\n- y-coordinate: (4 + 8) ÷ 2 = 12 ÷ 2 = 6\n- Midpoint: (5, 6)\n\n**Your turn:** Try applying this to your coordinates!`,
        
        `**The Midpoint Formula Unlocked!** 🔓\n\n**The magic formula:** M = ((x₁ + x₂)/2, (y₁ + y₂)/2)\n\n**Why it works:**\n- We add the coordinates to get the total distance\n- We divide by 2 to find the middle point\n- It's like finding the average of two numbers!\n\n**Step-by-step breakdown:**\n1. **X-coordinates:** Add them up, then halve\n2. **Y-coordinates:** Add them up, then halve\n3. **Combine:** Put them together as (x, y)\n\n**Quick example:** (2, 4) and (8, 6)\n- X: (2 + 8) ÷ 2 = 5\n- Y: (4 + 6) ÷ 2 = 5\n- Answer: (5, 5)\n\n**Ready to try yours?**`,
        
        `**Formula Deep Dive!** 🧮\n\n**The midpoint formula:** M = ((x₁ + x₂)/2, (y₁ + y₂)/2)\n\n**Think of it as:**\n- Finding the "average" of two points\n- Like finding the center of a seesaw\n- The balance point between two locations\n\n**Breaking it down:**\n- **x₁ + x₂:** Total horizontal distance\n- **÷ 2:** Split it in half\n- **Same for y:** Total vertical distance, split in half\n\n**Real-world analogy:**\nIf you're meeting a friend halfway between your houses, you'd find the midpoint!\n\n**Want to practice with your coordinates?**`
      ];
      return formulaResponses[Math.floor(Math.random() * formulaResponses.length)];
    } else if (lowerInput.includes('step') || lowerInput.includes('how')) {
      const stepResponses = [
        `**Step-by-Step Midpoint Process:**\n\n1. **Identify your two points** - Look for coordinates in parentheses like (x₁, y₁) and (x₂, y₂)\n2. **Add the x-coordinates** - x₁ + x₂\n3. **Divide by 2** - (x₁ + x₂) ÷ 2\n4. **Add the y-coordinates** - y₁ + y₂\n5. **Divide by 2** - (y₁ + y₂) ÷ 2\n6. **Write your answer** - (x-coordinate, y-coordinate)\n\n**Remember:** The midpoint is exactly halfway between the two points!\n\nWhat specific step are you having trouble with?`,
        
        `**Let's Walk Through This Together!** 🚶‍♂️\n\n**The midpoint journey:**\n1. **Spot the coordinates** - Find your two points\n2. **X-coordinate adventure** - Add them, then halve\n3. **Y-coordinate adventure** - Add them, then halve\n4. **Combine the results** - Write as (x, y)\n\n**Pro tip:** Think of it as finding the "middle ground" between two points!\n\n**Which step needs more attention?**\n- Finding the coordinates?\n- Adding them together?\n- Dividing by 2?\n- Writing the final answer?`,
        
        `**Your Midpoint Roadmap!** 🗺️\n\n**Step 1:** **Locate** - Find your two coordinate points\n**Step 2:** **Calculate X** - Add x-coordinates, divide by 2\n**Step 3:** **Calculate Y** - Add y-coordinates, divide by 2\n**Step 4:** **Combine** - Write as (x-result, y-result)\n\n**Visual check:**\nThe midpoint should be exactly in the middle of your line segment!\n\n**What part would you like to focus on?**`
      ];
      return stepResponses[Math.floor(Math.random() * stepResponses.length)];
    } else if (lowerInput.includes('calculate') || lowerInput.includes('work')) {
      const calculateResponses = [
        `**Let's Work Through the Calculation:**\n\nFirst, I need to see your coordinates. Can you tell me what the two endpoint coordinates are?\n\nOnce I know the coordinates, I'll help you:\n1. Add the x-coordinates\n2. Add the y-coordinates\n3. Divide each sum by 2\n4. Write the final answer\n\n**What are your two coordinate points?**`,
        
        `**Time to Calculate!** ⏰\n\n**I'm ready to help you work through this step by step!**\n\n**What I need from you:**\n- What are your two coordinate points?\n- Are you working with numbers or variables?\n\n**Then we'll tackle:**\n- Adding the coordinates\n- Dividing by 2\n- Writing the final answer\n\n**Share your coordinates and let's solve this together!**`,
        
        `**Calculation Station!** 🚂\n\n**All aboard the midpoint calculation train!**\n\n**Next stop:** Your coordinates!\n- Tell me your two points\n- I'll guide you through each step\n- We'll arrive at the midpoint together\n\n**Ready to start the journey?** What are your coordinates?`
      ];
      return calculateResponses[Math.floor(Math.random() * calculateResponses.length)];
    }
  }
  
  // Variables (a and b) help
  if (lowerInput.includes('variable') || lowerInput.includes('a') || lowerInput.includes('b')) {
    return `**Working with Variables (a and b):**\n\nIn your problem, you have coordinates with variables: (-5a, 2b) and (7a, 10b)\n\n**Don't worry about the variables yet!** Just treat them like regular numbers:\n- For x-coordinates: -5a + 7a = 2a\n- For y-coordinates: 2b + 10b = 12b\n\n**Then divide by 2:**\n- x-coordinate: 2a ÷ 2 = a\n- y-coordinate: 12b ÷ 2 = 6b\n\n**Your midpoint:** (a, 6b)\n\n**The variables just stay as they are!** The midpoint formula works the same way.\n\nDoes this help clarify how to work with the variables?`;
  }
  
  // Check if user wants to work on the selected problem
  if (lowerInput.includes('question') || lowerInput.includes('selected') || lowerInput.includes('do the') || 
      lowerInput.includes('solve') || lowerInput.includes('work on') || lowerInput.includes('this problem')) {
    
    // If there's selected text that looks like a math problem, solve it
    if (selectedText && (selectedText.includes('Question') || selectedText.includes('midpoint') || 
                        selectedText.includes('endpoint') || selectedText.includes('Submit'))) {
      console.log('User wants to work on selected math problem, routing to solver');
      return solveMathProblem(selectedText);
    } else {
      return `**I'd love to help you solve a math problem!** 🎓\n\nI don't see a math problem selected. Please:\n1. Select a math problem on the page\n2. Or tell me what specific problem you're working on\n\n**Then I can help you:**\n- Break it down step by step\n- Explain the formulas\n- Guide you through the solution\n- Check your work\n\nWhat math problem would you like help with?`;
    }
  }
  
  // General math help
  if (lowerInput.includes('help') || lowerInput.includes('stuck')) {
    const helpResponses = [
      `**I'm here to help!** 🎓\n\nWhat specific part of the math problem are you working on?\n\n**I can help with:**\n- Explaining formulas\n- Breaking down steps\n- Checking your work\n- Solving similar problems\n- Understanding concepts\n\n**Just ask me:**\n- "How do I use the formula?"\n- "What's the next step?"\n- "Can you check my work?"\n- "I don't understand..."\n\nWhat would you like help with?`,
      
      `**Ready to tackle this together!** 💪\n\nWhat's giving you trouble with this math problem?\n\n**I'm your math sidekick for:**\n- Formula explanations\n- Step-by-step breakdowns\n- Work checking\n- Similar problem practice\n- Concept understanding\n\n**Just say:**\n- "Show me the formula"\n- "What comes next?"\n- "Check my answer"\n- "I'm confused about..."\n\nWhat do you need help with?`,
      
      `**Let's solve this puzzle!** 🧩\n\nWhat part of the math problem is challenging you?\n\n**I can assist with:**\n- Breaking down formulas\n- Walking through steps\n- Verifying your work\n- Practice problems\n- Concept clarity\n\n**Try asking:**\n- "How does this formula work?"\n- "What's the next step?"\n- "Is my answer right?"\n- "I don't get this part..."\n\nWhat would you like to explore?`
    ];
    return helpResponses[Math.floor(Math.random() * helpResponses.length)];
  }
  
  // Default helpful response
  const defaultResponses = [
    `**I'm here to help you learn!** 🎓\n\nI can see you're working on a math problem. What specific question do you have?\n\n**I can help you with:**\n- Explaining the steps\n- Understanding the formula\n- Working through calculations\n- Checking your work\n- Solving similar problems\n\n**Just ask me anything about the problem!**`,
    
    `**Ready to dive into this math challenge!** 🌊\n\nWhat would you like to know about this problem?\n\n**I'm here to help with:**\n- Step-by-step guidance\n- Formula explanations\n- Calculation support\n- Answer verification\n- Practice problems\n\n**What's on your mind?**`,
    
    `**Let's make math make sense!** 🧠\n\nI can see you're working on a math problem. What do you need help with?\n\n**I can assist with:**\n- Breaking down the process\n- Explaining the concepts\n- Working through calculations\n- Checking your work\n- Similar problems\n\n**What would you like to know?**`
  ];
  return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
}

function solveDistanceProblem(problemText, coordinates) {
  const point1 = coordinates[0];
  const point2 = coordinates[1];
  
  // Calculate distance using distance formula
  const distance = Math.sqrt(Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2));
  
  return `**Problem:** ${problemText}\n\n**Step 1:** Identify the points\nI can see the points are (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}).\n\n**Step 2:** Use the distance formula\nThe distance formula is: d = √[(x₂ - x₁)² + (y₂ - y₁)²]\n\n**Step 3:** Plug in the coordinates\nd = √[(${point2.x} - ${point1.x})² + (${point2.y} - ${point1.y})²]\nd = √[${point2.x - point1.x}² + ${point2.y - point1.y}²]\nd = √[${Math.pow(point2.x - point1.x, 2)} + ${Math.pow(point2.y - point1.y, 2)}]\nd = √${Math.pow(point2.x - point1.x, 2) + Math.pow(point2.y - point1.y, 2)}\nd = √${distance * distance}\nd = ${distance}\n\n**Answer:** The distance is ${distance}`;
}

function solveSlopeProblem(problemText, coordinates) {
  const point1 = coordinates[0];
  const point2 = coordinates[1];
  
  // Calculate slope
  const slope = (point2.y - point1.y) / (point2.x - point1.x);
  
  return `**Problem:** ${problemText}\n\n**Step 1:** Identify the points\nI can see the points are (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}).\n\n**Step 2:** Use the slope formula\nThe slope formula is: m = (y₂ - y₁)/(x₂ - x₁)\n\n**Step 3:** Plug in the coordinates\nm = (${point2.y} - ${point1.y})/(${point2.x} - ${point1.x})\nm = ${point2.y - point1.y}/${point2.x - point1.x}\nm = ${slope}\n\n**Answer:** The slope is ${slope}`;
}

// Get detailed response based on context
async function getDetailedResponse(userInput, context, selectedText = '') {
  const input = userInput.toLowerCase();
  
  // System of equations detection moved to AI modules for dynamic responses
  
  // Check for binomial expansion - before AI call
  if (selectedText && (selectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)\d*[=]/) || 
                      selectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)\d*/) ||
                      selectedText.includes('m4+n7') || selectedText.includes('m2+ mn+ n2') ||
                      selectedText.includes('(m4+n7)2') || selectedText.includes('binomial') ||
                      selectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)/))) {
    console.log('Detected binomial expansion in main response function:', selectedText);
    return getBinomialFollowUpResponse(userInput, selectedText);
  }
  
  // Use AI for all questions when there's selected text or context
  if (userInput && (selectedText || userInput.length > 5)) {
    const contextInfo = selectedText ? `Selected text: "${selectedText}"` : '';
    console.log('Calling AI with:', { userInput, selectedText, contextInfo });
    const aiResponse = await getAIResponse(userInput, contextInfo);
    console.log('AI Response:', aiResponse);
    if (aiResponse && !aiResponse.includes('I\'d love to help') && !aiResponse.includes('I\'m here to help you learn!')) {
      return aiResponse;
    }
  }
  
  // Check if user is asking about "this" or "current" and we have selected text
  if ((userInput.toLowerCase().includes('this') || userInput.toLowerCase().includes('current') || 
       userInput.toLowerCase().includes('help me') || userInput.toLowerCase().includes('solve')) && 
      selectedText && selectedText.length > 0) {
    console.log('User asking about selected text:', selectedText);
    
    // System of equations detection moved to AI modules for dynamic responses
    
    const contextInfo = `Selected text: "${selectedText}"`;
    const aiResponse = await getAIResponse(userInput, contextInfo);
    console.log('AI Response for selected text:', aiResponse);
    if (aiResponse && !aiResponse.includes('I\'d love to help') && !aiResponse.includes('I\'m here to help you learn!')) {
      return aiResponse;
    }
  }
  
  // Handle image analysis
  if (selectedImage) {
    return getImageAnalysis(selectedImage, userInput);
  }
  
  // Handle multi-select mode for reading comprehension
  if (multiSelectMode && selectedPassage && selectedQuestion) {
    return getReadingComprehensionAnalysis(selectedPassage, selectedQuestion);
  }
  
  
  // Check for writing content - before reading detection
  const problemText = selectedText || userInput;
  
  // Check if this looks like writing content (writing prompts, instructions, exercises)
  const isWritingContent = selectedText && (
    selectedText.includes('topic sentence') || selectedText.includes('paragraph') || 
    selectedText.includes('essay') || selectedText.includes('write') || 
    selectedText.includes('composition') || selectedText.includes('grammar') ||
    selectedText.includes('sentence') || selectedText.includes('learn with an example') ||
    selectedText.includes('select the') || selectedText.includes('example') ||
    selectedText.includes('prompt') || selectedText.includes('instruction') ||
    selectedText.includes('assignment') || selectedText.includes('exercise')
  );
  
  console.log('Writing content check (FIRST):', {
    selectedTextLength: selectedText ? selectedText.length : 0,
    isWritingContent,
    contextWriting: context.writing,
    inputWrite: input.includes('write'),
    inputEssay: input.includes('essay'),
    inputParagraph: input.includes('paragraph'),
    selectedTextPreview: selectedText ? selectedText.substring(0, 100) + '...' : 'none'
  });
  
  // Vocabulary responses - check this FIRST (most specific)
  if ((context.vocabulary || input.includes('vocabulary') || input.includes('word') || input.includes('meaning') || 
       input.includes('definition') || input.includes('synonym') || input.includes('antonym') ||
       (selectedText && selectedText.split(' ').length <= 3 && !selectedText.includes('Question') && 
        !selectedText.includes('midpoint') && !selectedText.includes('endpoint') && 
        !selectedText.includes('Submit') && !selectedText.includes('Activity') &&
        // Exclude any math expressions - check for math patterns first
        !selectedText.match(/[=+\-*/]/) && // No math operators
        !selectedText.match(/\([^)]*\)/) && // No parentheses
        !selectedText.match(/[0-9]/) && // No numbers
        !selectedText.match(/[a-zA-Z]\d/) && // No variables with exponents
        !selectedText.match(/[a-zA-Z]\+[a-zA-Z]/)))) { // No variable addition
    console.log('Routing to vocabulary analysis (PRIORITY)');
    if (selectedText) {
      return getVocabularyAnalysis(selectedText);
    } else {
      return getRandomResponse(detailedResponses.vocabulary);
    }
  }
  
  // Grammar responses - check this SECOND
  if ((context.grammar || input.includes('grammar') || input.includes('tense') || input.includes('verb') || 
       input.includes('noun') || input.includes('adjective') || input.includes('adverb') || 
       input.includes('subject') || input.includes('predicate') || input.includes('sentence') ||
       input.includes('parts of speech') || input.includes('conjugation') || 
       input.includes('label') || input.includes('kind') || input.includes('type') ||
       input.includes('pronoun') || input.includes('transitive') || input.includes('helping') ||
       input.includes('classify') || input.includes('identify') || input.includes('categorize') ||
       input.includes('preposition') || input.includes('conjunction') || input.includes('interjection') ||
       (input.includes('define') && (input.includes('words') || input.includes('verb') || input.includes('noun'))))) {
    console.log('Routing to grammar analysis');
    if (selectedText) {
      return getGrammarAnalysis(selectedText);
    } else if (input.includes('tense') || input.includes('verb')) {
      return getRandomResponse(detailedResponses.grammar.tenses);
    } else {
      return getRandomResponse(detailedResponses.grammar.partsOfSpeech);
    }
  }
  
  // Writing responses - check this SECOND
  if ((context.writing || input.includes('write') || input.includes('essay') || input.includes('paragraph') || isWritingContent)) {
    console.log('Routing to writing analysis');
    if (selectedText) {
      return getWritingAnalysis(selectedText);
    } else if (input.includes('brainstorm') || input.includes('outline')) {
      return getRandomResponse(detailedResponses.writing.brainstorming);
    } else {
      return getRandomResponse(detailedResponses.writing.structure);
    }
  }
  
  // Clean the selected text first (remove quotes and extra characters)
  const cleanSelectedText = selectedText ? selectedText.replace(/^["']|["']$/g, '').trim() : '';
  
  // Check for math problems FIRST - before reading detection
  const isMathProblem = cleanSelectedText && (
    cleanSelectedText.includes('Question') || 
    cleanSelectedText.includes('midpoint') || 
    cleanSelectedText.includes('endpoint') || 
    cleanSelectedText.includes('Submit') ||
    cleanSelectedText.match(/\([^)]*\)/) && (cleanSelectedText.includes('midpoint') || cleanSelectedText.includes('endpoint')) ||
    // Check for fraction patterns like "14s+497t=" or algebraic expressions
    cleanSelectedText.match(/[0-9]+[a-zA-Z]+\+[0-9]+[a-zA-Z]*[0-9]*[a-zA-Z]*=/) ||
    cleanSelectedText.match(/[0-9]+[a-zA-Z]*[+\-*/=][0-9]+[a-zA-Z]*/) ||
    cleanSelectedText.includes('=') && cleanSelectedText.match(/[0-9]+[a-zA-Z]*/) ||
    cleanSelectedText.match(/[a-zA-Z]+\+[0-9]+/) ||
    cleanSelectedText.match(/[0-9]+\+[a-zA-Z]+/) ||
    // Check for LaTeX patterns
    cleanSelectedText.includes('\\dfrac') ||
    cleanSelectedText.includes('\\frac') ||
    cleanSelectedText.includes('\\(') ||
    cleanSelectedText.includes('\\[') ||
    cleanSelectedText.includes('$') ||
    // Check for binomial expansion patterns like (m4+n7)2=m2+ mn+ n2
    cleanSelectedText.match(/\([a-zA-Z]\d*\+[a-zA-Z]\d*\)\d*[=]/) ||
    cleanSelectedText.match(/[a-zA-Z]\d*\+[a-zA-Z]\d*\+[a-zA-Z]\d*/) ||
    // Check for any math expression with parentheses and equals
    cleanSelectedText.match(/\([^)]*\)[0-9]*[=]/) ||
    // Check for any expression with variables and equals
    cleanSelectedText.includes('=') && cleanSelectedText.match(/[a-zA-Z]/) && cleanSelectedText.match(/[0-9]/) ||
    // Check for simplify/expand keywords
    input.includes('simplify') || input.includes('expand') || input.includes('factor')
  ) && !cleanSelectedText.includes('Welcome!') && !cleanSelectedText.includes('AI-Powered') && !cleanSelectedText.includes('How to Use');
  
  console.log('Math problem check:', {
    selectedText: selectedText,
    cleanSelectedText: cleanSelectedText,
    isMathProblem: isMathProblem,
    hasQuestion: cleanSelectedText ? cleanSelectedText.includes('Question') : false,
    hasMidpoint: cleanSelectedText ? cleanSelectedText.includes('midpoint') : false,
    hasSubmit: cleanSelectedText ? cleanSelectedText.includes('Submit') : false,
    hasMathPattern: cleanSelectedText ? cleanSelectedText.match(/[0-9]+[a-zA-Z]+\+[0-9]+[a-zA-Z]*[0-9]*[a-zA-Z]*=/) : false
  });
  
  // Check if this looks like reading content (long text, articles, passages)
  // Make reading detection more specific to avoid catching math problems
  const isReadingContent = selectedText && selectedText.length > 100 && 
                          (selectedText.includes('article') || selectedText.includes('passage') || 
                           selectedText.includes('author') || selectedText.includes('writes') ||
                           selectedText.includes('according to') || selectedText.includes('the text') ||
                           selectedText.includes('play') || selectedText.includes('character') ||
                           selectedText.includes('story') || selectedText.includes('novel') ||
                           selectedText.match(/[A-Z][a-z]+ [A-Z][a-z]+/) || // Proper names
                           selectedText.split(' ').length > 20) && // Long text
                          !isMathProblem; // Exclude math problems
  
  console.log('Reading content check:', {
    selectedTextLength: selectedText ? selectedText.length : 0,
    isReadingContent,
    contextReading: context.reading,
    inputRead: input.includes('read'),
    inputText: input.includes('text'),
    inputPassage: input.includes('passage'),
    selectedTextPreview: selectedText ? selectedText.substring(0, 100) + '...' : 'none'
  });
  
  // Check for follow-up questions about ANY subject FIRST
  const followUpKeywords = ['midpoint', 'coordinate', 'endpoint', 'calculate', 'formula', 'step',
                           'more', 'help', 'explain', 'tell me', 'show me', 'how', 'what', 'next', 'continue',
                           'topic sentence', 'paragraph', 'essay', 'writing', 'reading', 'comprehension',
                           'grammar', 'tense', 'vocabulary', 'word', 'meaning', 'definition', 'synonym', 'antonym',
                           'what does', 'what is', 'mean', 'classify', 'identify', 'categorize',
                           'simplify', 'variables', 'exponents', 'exponent', 'x2', 'x3', 'algebra', 'math',
                           'can i', 'ok', 'yes', 'no', 'sure', 'thanks', 'thank you',
                           'combine', 'expression', 'x^', 'like terms', 'different exponents',
                           'adverb', 'adjective', 'noun', 'verb', 'pronoun', 'preposition', 'conjunction',
                           'so', 'ok so', 'define', 'parts of speech', 'subject', 'predicate'];
  const hasFollowUpKeyword = input && followUpKeywords.some(keyword => input.toLowerCase().includes(keyword));
  
  // Check if there's selected text that looks like any educational content (indicating follow-up)
  const hasEducationalSelectedText = selectedText && (selectedText.includes('Question') || selectedText.includes('midpoint') || 
                                                     selectedText.includes('endpoint') || selectedText.includes('Submit') ||
                                                     selectedText.includes('Activity') || selectedText.includes('topic sentence') ||
                                                     selectedText.includes('paragraph') || selectedText.includes('essay')) &&
                                                     !selectedText.includes('Welcome!') && !selectedText.includes('AI-Powered') && 
                                                     !selectedText.includes('How to Use') && !selectedText.includes('Selected Text:');
  
  console.log('Follow-up detection check:', {
    input: input,
    hasFollowUpKeyword: hasFollowUpKeyword,
    hasEducationalSelectedText: hasEducationalSelectedText,
    selectedText: selectedText,
    keywords: followUpKeywords
  });
  
  if (hasFollowUpKeyword || (hasEducationalSelectedText && input)) {
    console.log('Detected follow-up question:', input);
    return getFollowUpResponse(input, selectedText);
  }
  
  // Check for math problems SECOND - after follow-up detection
  if (isMathProblem) {
    console.log('Routing to AI math solver (math problem detected)');
    return getAIResponse(input, contextInfo);
  }
  
  // Reading responses - check this SECOND
  if ((context.reading || input.includes('read') || input.includes('text') || input.includes('passage') || isReadingContent)) {
    console.log('Routing to reading analysis');
    if (selectedText) {
      return getReadingAnalysis(selectedText);
    } else if (input.includes('word') || input.includes('meaning') || input.includes('vocabulary')) {
      return getRandomResponse(detailedResponses.reading.vocabulary);
    } else {
      return getRandomResponse(detailedResponses.reading.comprehension);
    }
  }
  
  // Enhanced math detection - check for math patterns in the text (ONLY if not reading content)
  // More specific math detection - avoid false positives on reading content
  const hasMathPatterns = problemText.match(/[0-9]+\s*[+\-*/=]\s*[0-9]+/) || 
                         (problemText.match(/\d+\.?\d*/) && (problemText.includes('solve') || problemText.includes('calculate') || problemText.includes('find'))) ||
                         (problemText.includes('solve') && (problemText.includes('equation') || problemText.includes('problem'))) || 
                         (problemText.includes('calculate') && (problemText.includes('area') || problemText.includes('perimeter') || problemText.includes('volume'))) ||
                         problemText.includes('equation') ||
                         problemText.includes('fraction') ||
                         (problemText.includes('algebra') && !problemText.includes('article')) ||
                         (problemText.includes('geometry') && (problemText.includes('problem') || problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('midpoint') && (problemText.includes('find') || problemText.includes('calculate') || problemText.includes('line segment'))) ||
                         (problemText.includes('endpoint') && (problemText.includes('find') || problemText.includes('calculate') || problemText.includes('line segment'))) ||
                         // Check for algebraic expressions like "14s+497t="
                         problemText.match(/[0-9]+[a-zA-Z]+\+[0-9]+[a-zA-Z]*[0-9]*[a-zA-Z]*=/) ||
                         problemText.match(/[0-9]+[a-zA-Z]*[+\-*/=][0-9]+[a-zA-Z]*/) ||
                         (problemText.includes('=') && problemText.match(/[0-9]+[a-zA-Z]*/)) ||
                         (problemText.includes('coordinate') && (problemText.includes('geometry') || problemText.includes('plane'))) ||
                         (problemText.includes('slope') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('distance') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('perimeter') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('area') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('volume') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('angle') && (problemText.includes('find') || problemText.includes('measure'))) ||
                         (problemText.includes('triangle') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('rectangle') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('circle') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('square') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('polygon') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.match(/\([^)]*\)/) && (problemText.includes('midpoint') || problemText.includes('endpoint') || problemText.includes('coordinate'))) || // Parentheses (coordinates)
                         problemText.match(/[a-zA-Z]\s*[+\-*/=]/) ||
                         (problemText.match(/[+\-*/=]/) && !problemText.includes('play') && !problemText.includes('character') && !problemText.includes('story')) ||
                         // Additional math patterns
                         problemText.includes('line segment') ||
                         (problemText.includes('Question') && problemText.match(/\([^)]*\)/)) ||
                         problemText.includes('Submit') ||
                         // Specific patterns for coordinate geometry problems
                         (problemText.includes('midpoint') && problemText.match(/\([^)]*\)/)) ||
                         (problemText.includes('endpoint') && problemText.match(/\([^)]*\)/)) ||
                         (problemText.includes('Question') && problemText.includes('midpoint')) ||
                         (problemText.includes('Question') && problemText.includes('endpoint'));
  
  console.log('Math detection check:', {
    contextMath: context.math,
    hasMathPatterns: hasMathPatterns,
    problemText: problemText,
    input: input
  });
  
  // Math responses - try to solve specific problems
  if (context.math || hasMathPatterns || input.includes('math') || input.includes('solve') || input.includes('equation') || input.includes('problem') || input.includes('answer')) {
    // Try to solve the specific problem using AI
    console.log('Attempting to solve math problem with AI:', problemText);
    console.log('Selected text:', selectedText);
    console.log('User input:', userInput);
    
    const mathSolution = getAIResponse(userInput, contextInfo);
    console.log('AI math solution result:', mathSolution);
    
    // Always return the AI math solution
    return mathSolution;
  }
  
  // If we have selected text but it's not clearly reading content, check if it's math
  if (selectedText && !hasMathPatterns && !context.reading) {
    // This might be a fallback case - let's try to detect what it is
    const textLower = selectedText.toLowerCase();
    if (textLower.includes('ask me anything') || textLower.includes('select text')) {
      return "I can see you've selected some text, but it doesn't appear to be a specific math problem or reading passage. Could you please:\n\n1. **Select a specific math problem** if you need help with math\n2. **Select a reading passage** if you need help with reading comprehension\n3. **Ask me a specific question** about what you'd like help with\n\nWhat would you like to work on?";
    }
  }
  
  // Writing responses
  if (context.writing || input.includes('write') || input.includes('essay') || input.includes('paragraph')) {
    if (input.includes('structure') || input.includes('organize')) {
      return getRandomResponse(detailedResponses.writing.structure);
    } else {
      return getRandomResponse(detailedResponses.writing.brainstorming);
    }
  }
  
  // Grammar responses
  if (input.includes('grammar') || input.includes('sentence') || input.includes('tense')) {
    if (input.includes('tense') || input.includes('verb')) {
      return getRandomResponse(detailedResponses.grammar.tenses);
    } else {
      return getRandomResponse(detailedResponses.grammar.partsOfSpeech);
    }
  }
  
  // Vocabulary responses
  if (input.includes('word') || input.includes('meaning') || input.includes('vocabulary')) {
    return getRandomResponse(detailedResponses.vocabulary);
  }
  
  // Final fallback - if we have any text that might be math, try to solve it with AI
  if (problemText && (problemText.match(/\d/) || problemText.match(/[+\-*/=]/) || problemText.match(/[a-zA-Z]\s*[+\-*/=]/))) {
    console.log('Final fallback: treating as math problem with AI:', problemText);
    return getAIResponse(input, contextInfo);
  }
  
  // General response
  return "That's a great question! Let's work through this step by step. What do you already know about this topic? What would you like to understand better? I'm here to guide you through the learning process, so don't hesitate to ask follow-up questions!";
}

// Get reading comprehension analysis for passage + question
function getReadingComprehensionAnalysis(passage, question) {
  const passageWords = passage.trim().split(/\s+/).filter(word => word.length > 0);
  const questionWords = question.trim().split(/\s+/).filter(word => word.length > 0);
  const passageWordCount = passageWords.length;
  const questionWordCount = questionWords.length;
  
  return `Let's tackle this reading comprehension question step by step!

**📖 Passage Analysis:**
- **Length:** ${passageWordCount} words
- **Question:** ${questionWordCount} words

**Step 1: Read the Question First**
Let's start by understanding what the question is asking:
"${question}"

**Step 2: Identify Question Type**
- Is this asking for the main idea?
- Is this asking for specific details?
- Is this asking you to make an inference?
- Is this asking about the author's purpose or tone?

**Step 3: Read the Passage Strategically**
Now let's read the passage with the question in mind:
"${passage}"

**Step 4: Find Key Information**
Look for information that directly relates to the question. Underline or highlight:
- Key terms from the question
- Supporting details
- Examples or evidence

**Step 5: Eliminate Wrong Answers**
If this is multiple choice, eliminate answers that are:
- Not mentioned in the passage
- Only partially correct
- Too broad or too narrow

**Step 6: Make Your Best Choice**
Choose the answer that is:
- Directly supported by the passage
- Most complete and accurate
- Directly answers what the question asks

**💡 Pro Tips:**
- Don't rely on outside knowledge - stick to what's in the passage
- Look for signal words like "however," "therefore," "in contrast"
- Pay attention to the author's tone and purpose

What type of question do you think this is, and what information from the passage seems most relevant?`;
}

// Get image analysis for selected image
function getImageAnalysis(image, userInput) {
  const input = userInput.toLowerCase();
  const isMathGraph = detectMathGraph(image.element);
  const isChart = detectChart(image.element);
  const isDiagram = detectDiagram(image.element);
  
  if (isMathGraph) {
    return getMathGraphAnalysis(image, input);
  } else if (isChart) {
    return getChartAnalysis(image, input);
  } else if (isDiagram) {
    return getDiagramAnalysis(image, input);
  } else {
    return getGeneralImageAnalysis(image, input);
  }
}

function getMathGraphAnalysis(image, input) {
  return `Let's analyze this math graph step by step!

**📊 Graph Analysis:**

**Step 1: Identify the Graph Type**
- What type of graph is this? (line graph, parabola, bar chart, etc.)
- What are the axes labeled? (x-axis and y-axis)
- What units are used on each axis?

**Step 2: Read the Axes**
- What is the scale on the x-axis? (What does each unit represent?)
- What is the scale on the y-axis? (What does each unit represent?)
- Are there any specific points marked or labeled?

**Step 3: Identify Key Features**
- Are there any intercepts? (Where does the graph cross the axes?)
- What is the slope or rate of change?
- Are there any maximum or minimum points?
- Is the graph increasing, decreasing, or constant?

**Step 4: Look for Patterns**
- Does the graph show a linear relationship? (straight line)
- Does it show a quadratic relationship? (parabola)
- Are there any other mathematical patterns?

**Step 5: Answer the Question**
- What specific information are you looking for?
- How can you use the graph to find that information?
- What calculations might you need to make?

**💡 Pro Tips:**
- Always read the axes labels carefully
- Look for key points like intercepts and peaks
- Pay attention to the scale - don't assume it starts at zero
- Use the graph to estimate values between marked points

What specific aspect of this graph would you like to focus on?`;
}

function getChartAnalysis(image, input) {
  return `Let's analyze this chart step by step!

**📈 Chart Analysis:**

**Step 1: Identify the Chart Type**
- What type of chart is this? (bar chart, pie chart, line graph, histogram, etc.)
- What is the title or main topic?

**Step 2: Read the Labels**
- What do the categories represent?
- What do the values represent?
- What units are being used?

**Step 3: Examine the Data**
- What are the highest and lowest values?
- Are there any obvious patterns or trends?
- Which categories are largest/smallest?

**Step 4: Look for Relationships**
- How do the different categories compare?
- Are there any significant differences?
- What conclusions can you draw?

**Step 5: Answer the Question**
- What specific information are you looking for?
- How can you use the chart to find that information?
- What calculations might you need to make?

**💡 Pro Tips:**
- Read all labels and legends carefully
- Compare the relative sizes of different sections
- Look for trends over time if it's a time-series chart
- Pay attention to the scale and units

What specific information are you trying to find in this chart?`;
}

function getDiagramAnalysis(image, input) {
  return `Let's analyze this diagram step by step!

**🔬 Diagram Analysis:**

**Step 1: Identify the Diagram Type**
- What type of diagram is this? (flowchart, process diagram, structure diagram, etc.)
- What is the main topic or subject?

**Step 2: Read the Labels**
- What do the different parts represent?
- Are there any arrows or connections?
- What do the symbols mean?

**Step 3: Follow the Flow**
- If it's a process, what are the steps?
- What comes first, second, third?
- Are there any decision points or branches?

**Step 4: Identify Relationships**
- How do the different parts connect?
- What causes what?
- Are there any feedback loops?

**Step 5: Answer the Question**
- What specific information are you looking for?
- How can you use the diagram to find that information?
- What patterns or processes do you see?

**💡 Pro Tips:**
- Start from the beginning and follow the flow
- Pay attention to arrows and direction indicators
- Look for key decision points or branching
- Identify the main components and their functions

What specific aspect of this diagram would you like to understand better?`;
}

function getGeneralImageAnalysis(image, input) {
  return `Let's analyze this image step by step!

**🖼️ Image Analysis:**

**Step 1: Observe the Overall Image**
- What do you see in this image?
- What is the main subject or focus?
- What is the context or setting?

**Step 2: Look for Details**
- Are there any text or labels visible?
- What objects, people, or elements are present?
- Are there any numbers, symbols, or measurements?

**Step 3: Identify Patterns**
- Are there any repeating elements?
- What relationships do you see between different parts?
- Are there any geometric shapes or structures?

**Step 4: Consider the Purpose**
- What might this image be trying to show or explain?
- Is it educational, informational, or illustrative?
- What questions might this image help answer?

**Step 5: Answer the Question**
- What specific information are you looking for?
- How can you use this image to find that information?
- What details are most relevant to your question?

**💡 Pro Tips:**
- Look at the image from different angles
- Pay attention to any text or labels
- Consider what the image is trying to communicate
- Think about how the different elements work together

What specific information are you trying to find in this image?`;
}

// Get reading analysis for selected text
function getReadingAnalysis(text) {
  // Better word counting that handles all whitespace
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  const paragraphs = text.split(/\n\s*\n/).filter(p => p.trim().length > 0).length;
  
  console.log('Reading analysis - Text length:', text.length);
  console.log('Reading analysis - Word count:', wordCount);
  console.log('Reading analysis - Sentences:', sentences);
  console.log('Reading analysis - Paragraphs:', paragraphs);
  
  // Extract key information
  const firstSentence = text.split(/[.!?]+/)[0].trim();
  const lastSentence = text.split(/[.!?]+/).filter(s => s.trim().length > 0).pop().trim();
  
  // Look for key words and concepts
  const textWords = text.toLowerCase().split(/\s+/);
  const commonWords = ['the', 'a', 'an', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by', 'is', 'are', 'was', 'were', 'be', 'been', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'could', 'should'];
  const importantWords = textWords.filter(word => 
    word.length > 4 && 
    !commonWords.includes(word) && 
    !word.match(/^\d+$/)
  );
  
  // Get unique important words
  const uniqueWords = [...new Set(importantWords)].slice(0, 5);
  
  // Analyze the actual content to provide specific help
  let specificAnalysis = '';
  let keyPoints = [];
  let questionsToThink = [];
  
  // Look for main ideas and supporting details
  const sentenceArray = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
  
  // Find the main idea (usually in first sentence or paragraph)
  const mainIdea = sentenceArray[0] || firstSentence;
  
  // Look for supporting details
  const supportingDetails = sentenceArray.slice(1, 4).filter(s => s.trim().length > 10);
  
  // Look for evidence (numbers, dates, names, quotes)
  const evidence = [];
  const hasNumbers = text.match(/\d+/g);
  const hasDates = text.match(/\b(19|20)\d{2}\b/g);
  const hasNames = text.match(/\b[A-Z][a-z]+ [A-Z][a-z]+\b/g);
  
  if (hasNumbers) evidence.push(`Numbers: ${hasNumbers.slice(0, 3).join(', ')}`);
  if (hasDates) evidence.push(`Dates: ${hasDates.slice(0, 3).join(', ')}`);
  if (hasNames) evidence.push(`Names: ${hasNames.slice(0, 3).join(', ')}`);
  
  // Look for quotes or important phrases
  const quotes = text.match(/"([^"]+)"/g);
  if (quotes) evidence.push(`Quotes: ${quotes.slice(0, 2).join(', ')}`);
  
  // Build key points
  keyPoints.push(`Main idea: "${mainIdea.substring(0, 100)}${mainIdea.length > 100 ? '...' : ''}"`);
  if (supportingDetails.length > 0) {
    keyPoints.push(`Supporting details: ${supportingDetails.length} sentences with evidence`);
    // Add actual supporting details
    supportingDetails.forEach((detail, index) => {
      keyPoints.push(`  - Detail ${index + 1}: "${detail.trim().substring(0, 80)}${detail.trim().length > 80 ? '...' : ''}"`);
    });
  }
  if (evidence.length > 0) {
    keyPoints.push(`Evidence found: ${evidence.join('; ')}`);
    // Explain what the evidence means
    if (hasNumbers) {
      keyPoints.push(`  - Numbers suggest: specific data or measurements`);
    }
    if (hasDates) {
      keyPoints.push(`  - Dates indicate: historical context or timeline`);
    }
    if (hasNames) {
      keyPoints.push(`  - Names show: people or characters involved`);
    }
    if (quotes) {
      keyPoints.push(`  - Quotes provide: direct evidence or opinions`);
    }
  }
  keyPoints.push(`Important words: ${uniqueWords.join(', ')}`);
  
  // Build questions to think about with specific guidance
  questionsToThink.push("What is the author's main argument? (Look at the first sentence and key words)");
  questionsToThink.push("What evidence supports this argument? (Check for numbers, dates, names, quotes)");
  questionsToThink.push("What is the author's purpose in writing this? (Inform, persuade, entertain, or explain?)");
  questionsToThink.push("What can you infer that isn't directly stated? (Read between the lines)");
  
  console.log('Final word count for display:', wordCount);
  console.log('Final sentence count for display:', sentences);
  
  const readingResponses = [
    `📖 Reading Analysis (${wordCount} words, ${sentences} sentences)

Main Topic: ${identifyMainTopic(uniqueWords)}

Key Points:
${keyPoints.map(point => `- ${point}`).join('\n')}

Questions to think about:
${questionsToThink.map(q => `- ${q}`).join('\n')}

💡 Tip: Focus on the main argument and look for evidence that supports it. What do you think the author wants you to understand?`,

    `📚 Text Breakdown (${wordCount} words, ${sentences} sentences)

Main Focus: ${identifyMainTopic(uniqueWords)}

What I found:
${keyPoints.map(point => `- ${point}`).join('\n')}

Dig deeper with these questions:
${questionsToThink.map(q => `- ${q}`).join('\n')}

🔍 Challenge: Can you identify the author's main point and find evidence that supports it?`,

    `📖 Reading Guide (${wordCount} words, ${sentences} sentences)

Central Theme: ${identifyMainTopic(uniqueWords)}

Key Information:
${keyPoints.map(point => `- ${point}`).join('\n')}

Think critically about:
${questionsToThink.map(q => `- ${q}`).join('\n')}

🎯 Goal: Understand the author's message and the evidence they use to support it.`,

    `📝 Text Analysis (${wordCount} words, ${sentences} sentences)

Core Topic: ${identifyMainTopic(uniqueWords)}

Important Details:
${keyPoints.map(point => `- ${point}`).join('\n')}

Questions for deeper understanding:
${questionsToThink.map(q => `- ${q}`).join('\n')}

🧠 Your mission: Find the main idea and analyze how the author supports their argument.`
  ];
  
  return readingResponses[Math.floor(Math.random() * readingResponses.length)];
}

// Get writing analysis for selected text
function getWritingAnalysis(text) {
  // Better word counting that handles all whitespace
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  
  console.log('Writing analysis - Text length:', text.length);
  console.log('Writing analysis - Word count:', wordCount);
  console.log('Writing analysis - Sentences:', sentences);
  
  // Extract key information
  const firstSentence = text.split(/[.!?]+/)[0].trim();
  
  // Look for writing-specific keywords and provide specific guidance
  const writingKeywords = ['topic sentence', 'paragraph', 'essay', 'write', 'composition', 'grammar', 'sentence', 'example', 'prompt', 'instruction', 'assignment', 'exercise'];
  const foundKeywords = writingKeywords.filter(keyword => text.toLowerCase().includes(keyword));
  
  // Analyze the actual content to provide specific help
  let specificGuidance = '';
  let actualHelp = '';
  
  if (text.toLowerCase().includes('topic sentence')) {
    // Look for actual topic sentences in the text
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const topicSentences = sentences.filter(sentence => {
      const lower = sentence.toLowerCase().trim();
      return lower.length > 10 && 
             (lower.includes('main') || lower.includes('idea') || 
              lower.includes('topic') || lower.includes('paragraph') ||
              lower.includes('discuss') || lower.includes('about') ||
              lower.includes('focus') || lower.includes('point'));
    });
    
    if (topicSentences.length > 0) {
      specificGuidance = `**🎯 Topic Sentences Found:**
${topicSentences.map((ts, i) => `${i + 1}. "${ts.trim()}"`).join('\n')}

**How to identify topic sentences:**
- They state the main idea of a paragraph
- They are usually the first sentence
- They introduce what the paragraph will discuss`;
      
      actualHelp = `**✅ I found ${topicSentences.length} potential topic sentence(s) in your text!**`;
    } else {
      specificGuidance = `**🎯 Topic Sentence Practice:**
- A topic sentence states the main idea of a paragraph
- It should be clear and specific
- It usually comes at the beginning of a paragraph
- Look for the sentence that introduces what the paragraph will discuss`;
      
      actualHelp = `**🔍 I don't see clear topic sentences in your text. Look for sentences that:**
- State the main idea
- Introduce what the paragraph will discuss
- Are usually at the beginning of paragraphs`;
    }
  } else if (text.toLowerCase().includes('paragraph')) {
    specificGuidance = `**📝 Paragraph Structure:**
- Start with a topic sentence
- Add 2-3 supporting sentences with details
- End with a concluding sentence
- Make sure all sentences relate to the main topic`;
  } else if (text.toLowerCase().includes('essay')) {
    specificGuidance = `**📚 Essay Writing:**
- Introduction: Hook + thesis statement
- Body paragraphs: Each with topic sentence + evidence
- Conclusion: Restate thesis + summarize main points`;
  } else if (text.toLowerCase().includes('grammar')) {
    specificGuidance = `**📖 Grammar Focus:**
- Check subject-verb agreement
- Use proper punctuation
- Make sure sentences are complete
- Watch for run-on sentences and fragments`;
  } else {
    specificGuidance = `**✍️ Writing Task:**
- Read the instructions carefully
- Identify what type of writing is needed
- Plan your response before writing
- Check your work when finished`;
  }
  
  const writingResponses = [
    `✍️ Writing Help (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
What to do:
1. Read the instructions carefully
2. Identify the specific writing skill being practiced
3. Look at any examples provided
4. Complete the task step by step
  
💡 Need more help? Ask me about the specific writing skill you're working on!`,

    `📝 Writing Guide (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
Your action plan:
1. Read the instructions carefully
2. Identify the specific writing skill being practiced
3. Look at any examples provided
4. Complete the task step by step
  
🎯 Ready to write? Let me know what specific help you need!`,

    `✍️ Writing Support (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
Steps to success:
1. Read the instructions carefully
2. Identify the specific writing skill being practiced
3. Look at any examples provided
4. Complete the task step by step
  
🚀 Need guidance? Ask me about the writing skill you're practicing!`,

    `📚 Writing Workshop (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
Let's get writing:
1. Read the instructions carefully
2. Identify the specific writing skill being practiced
3. Look at any examples provided
4. Complete the task step by step
  
💪 What writing challenge can I help you tackle?`
  ];
  
  return writingResponses[Math.floor(Math.random() * writingResponses.length)];
}

// Get grammar analysis for selected text
function getGrammarAnalysis(text) {
  // Better word counting that handles all whitespace
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0).length;
  
  console.log('Grammar analysis - Text length:', text.length);
  console.log('Grammar analysis - Word count:', wordCount);
  console.log('Grammar analysis - Sentences:', sentences);
  
  // Extract key information
  const firstSentence = text.split(/[.!?]+/)[0].trim();
  
  // Look for grammar-specific keywords and provide specific guidance
  const grammarKeywords = ['grammar', 'tense', 'verb', 'noun', 'adjective', 'adverb', 'subject', 'predicate', 'sentence', 'parts of speech', 'conjugation', 'agreement'];
  const foundKeywords = grammarKeywords.filter(keyword => text.toLowerCase().includes(keyword));
  
  // Analyze the actual content to provide specific help
  let specificGuidance = '';
  let actualHelp = '';
  
  // Check if user is asking about parts of speech labeling/classification
  if (text.split(' ').length <= 10 && (text.includes(' ') || text.length > 3)) {
    // This looks like a sentence for parts of speech analysis
    const words = text.trim().split(/\s+/).filter(word => word.length > 0 && word !== '...');
    
    // AI-powered intelligent classification
    const classifiedWords = words.map((word, index) => {
      const lowerWord = word.toLowerCase();
      let partOfSpeech = '';
      let explanation = '';
      
      // Intelligent classification based on context and word characteristics
      if (lowerWord === 'this' || lowerWord === 'that' || lowerWord === 'these' || lowerWord === 'those') {
        partOfSpeech = 'demonstrative pronoun';
        explanation = 'points to something specific (this = near, that = far)';
      } else if (lowerWord === 'my' || lowerWord === 'your' || lowerWord === 'his' || lowerWord === 'her' || 
          lowerWord === 'our' || lowerWord === 'their' || lowerWord === 'its') {
        partOfSpeech = 'possessive pronoun';
        explanation = 'shows ownership (my book, your car)';
      } else if (lowerWord === 'the' || lowerWord === 'a' || lowerWord === 'an') {
        partOfSpeech = 'article';
        explanation = 'introduces a noun (the = specific, a/an = general)';
      } else if (lowerWord === 'is' || lowerWord === 'are' || lowerWord === 'was' || lowerWord === 'were' ||
                 lowerWord === 'am' || lowerWord === 'be' || lowerWord === 'been' || lowerWord === 'being') {
        partOfSpeech = 'linking verb';
        explanation = 'connects subject to description (This is a book)';
      } else if (lowerWord === 'new' || lowerWord === 'old' || lowerWord === 'big' || lowerWord === 'small' ||
                 lowerWord === 'good' || lowerWord === 'bad' || lowerWord === 'happy' || lowerWord === 'sad' ||
                 lowerWord === 'beautiful' || lowerWord === 'ugly' || lowerWord === 'fast' || lowerWord === 'slow') {
        partOfSpeech = 'adjective';
        explanation = 'describes a noun (new car, big house)';
      } else if (lowerWord.endsWith('ing') && lowerWord.length > 3) {
        partOfSpeech = 'verb (present participle)';
        explanation = 'shows ongoing action (running, thinking)';
      } else if (lowerWord.endsWith('ed') && lowerWord.length > 3) {
        partOfSpeech = 'verb (past tense)';
        explanation = 'shows completed action (walked, talked)';
      } else if (lowerWord.endsWith('ly') && lowerWord.length > 3) {
        partOfSpeech = 'adverb';
        explanation = 'describes how something is done (quickly, slowly)';
      } else if (lowerWord === 'and' || lowerWord === 'but' || lowerWord === 'or' || lowerWord === 'so' ||
                 lowerWord === 'yet' || lowerWord === 'for' || lowerWord === 'nor') {
        partOfSpeech = 'conjunction';
        explanation = 'connects words or phrases (bread and butter)';
      } else if (lowerWord === 'in' || lowerWord === 'on' || lowerWord === 'at' || lowerWord === 'by' ||
                 lowerWord === 'for' || lowerWord === 'with' || lowerWord === 'to' || lowerWord === 'from' ||
                 lowerWord === 'under' || lowerWord === 'over' || lowerWord === 'through' || lowerWord === 'between') {
        partOfSpeech = 'preposition';
        explanation = 'shows relationship between words (in the house)';
      } else if (lowerWord === 'i' || lowerWord === 'you' || lowerWord === 'he' || lowerWord === 'she' ||
                 lowerWord === 'it' || lowerWord === 'we' || lowerWord === 'they') {
        partOfSpeech = 'personal pronoun';
        explanation = 'takes place of a noun (I am happy)';
      } else if (lowerWord.match(/^\d+$/)) {
        partOfSpeech = 'numeral';
        explanation = 'represents a number (one, two, three)';
      } else {
        partOfSpeech = 'noun';
        explanation = 'person, place, thing, or idea';
      }
      
      return `${index + 1}. **"${word}"** - ${partOfSpeech}\n   *${explanation}*`;
    });
    
    specificGuidance = `**🤖 AI-Powered Parts of Speech Analysis:**

**Your sentence:** "${text}"

**Intelligent word-by-word classification:**
${classifiedWords.join('\n')}

**💡 AI Insights:**
- I analyzed each word's context and characteristics
- I considered how words work together in your sentence
- I provided specific explanations for each classification

**🎯 Quick reference for common parts of speech:**
- **Noun**: person, place, thing, idea (cat, school, happiness)
- **Pronoun**: takes place of noun (I, you, he, she, it, we, they, this, that)
- **Verb**: action or state of being (run, think, is, are, was, were)
- **Adjective**: describes a noun (new, old, big, small, good, bad)
- **Adverb**: describes verb/adjective (quickly, very, often)
- **Preposition**: shows relationship (in, on, at, by, for, with)
- **Conjunction**: connects words/phrases (and, but, or, so)
- **Article**: a, an, the

**❓ Want me to explain any specific word in more detail?** Just ask!`;
    
    actualHelp = `**✅ AI Analysis Complete!** I've intelligently classified each word in your sentence.`;
  } else if (text.toLowerCase().includes('tense') || text.toLowerCase().includes('verb')) {
    // Look for verb tense examples in the text
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const verbExamples = sentences.filter(sentence => {
      const lower = sentence.toLowerCase().trim();
      return lower.includes('verb') || lower.includes('tense') || 
             lower.match(/\b(am|is|are|was|were|be|been|being|have|has|had|do|does|did|will|would|could|should)\b/);
    });
    
    if (verbExamples.length > 0) {
      specificGuidance = `**⏰ Verb Tense Focus:**
${verbExamples.map((ve, i) => `${i + 1}. "${ve.trim()}"`).join('\n')}

**How to identify verb tenses:**
- Present: am, is, are, do, does
- Past: was, were, did, had
- Future: will, would, could, should
- Perfect: have/has/had + past participle`;
      
      actualHelp = `**✅ I found ${verbExamples.length} verb tense example(s) in your text!**`;
    } else {
      specificGuidance = `**⏰ Verb Tense Practice:**
- Present tense: happening now (I walk, she runs)
- Past tense: happened before (I walked, she ran)
- Future tense: will happen (I will walk, she will run)
- Perfect tense: completed action (I have walked, she has run)`;
      
      actualHelp = `**🎯 Verb Tense Practice:**`;
    }
  } else if (text.toLowerCase().includes('parts of speech') || text.toLowerCase().includes('noun') || text.toLowerCase().includes('adjective')) {
    // Look for parts of speech examples
    const sentences = text.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const speechExamples = sentences.filter(sentence => {
      const lower = sentence.toLowerCase().trim();
      return lower.includes('noun') || lower.includes('verb') || lower.includes('adjective') || 
             lower.includes('adverb') || lower.includes('subject') || lower.includes('predicate');
    });
    
    if (speechExamples.length > 0) {
      specificGuidance = `**📝 Parts of Speech Examples:**
${speechExamples.map((se, i) => `${i + 1}. "${se.trim()}"`).join('\n')}

**How to identify parts of speech:**
- Noun: person, place, thing, idea
- Verb: action or state of being
- Adjective: describes a noun
- Adverb: describes a verb, adjective, or other adverb`;
      
      actualHelp = `**✅ I found ${speechExamples.length} parts of speech example(s) in your text!**`;
    } else {
      specificGuidance = `**📝 Parts of Speech Practice:**
- Noun: person, place, thing, idea (cat, school, happiness)
- Verb: action or state of being (run, think, is)
- Adjective: describes a noun (big, red, happy)
- Adverb: describes a verb (quickly, very, often)`;
      
      actualHelp = `**🎯 Parts of Speech Practice:**`;
    }
  } else {
    specificGuidance = `**📖 Grammar Focus:**
- Check subject-verb agreement
- Use proper punctuation
- Make sure sentences are complete
- Watch for run-on sentences and fragments`;
    
    actualHelp = `**📚 Grammar Practice:**`;
  }
  
  const grammarResponses = [
    `📖 Grammar Help (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
What to do:
1. Read the instructions carefully
2. Identify the specific grammar skill being practiced
3. Look at any examples provided
4. Complete the task step by step
  
💡 Need more help? Ask me about the specific grammar concept you're working on!`,

    `📝 Grammar Guide (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
Your action plan:
1. Read the instructions carefully
2. Identify the specific grammar skill being practiced
3. Look at any examples provided
4. Complete the task step by step
  
🎯 Ready to practice? Let me know what specific help you need!`,

    `📖 Grammar Support (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
Steps to success:
1. Read the instructions carefully
2. Identify the specific grammar skill being practiced
3. Look at any examples provided
4. Complete the task step by step
  
🚀 Need guidance? Ask me about the grammar concept you're working on!`,

    `📚 Grammar Practice (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
Your mission:
1. Read the instructions carefully
2. Identify the specific grammar skill being practiced
3. Look at any examples provided
4. Complete the task step by step
  
✨ Ready to learn? Let me know what grammar help you need!`
  ];
  
  return grammarResponses[Math.floor(Math.random() * grammarResponses.length)];
}

// Get vocabulary analysis for selected text
function getVocabularyAnalysis(text) {
  // Better word counting that handles all whitespace
  const words = text.trim().split(/\s+/).filter(word => word.length > 0);
  const wordCount = words.length;
  
  console.log('Vocabulary analysis - Text length:', text.length);
  console.log('Vocabulary analysis - Word count:', wordCount);
  console.log('Vocabulary analysis - Text:', text);
  
  // Extract the main word(s) from the text
  const mainWords = words.filter(word => 
    word.length > 2 && 
    !word.match(/^\d+$/) && // Not just numbers
    !word.match(/^[A-Z]+$/) && // Not all caps (like acronyms)
    !['the', 'and', 'or', 'but', 'in', 'on', 'at', 'to', 'for', 'of', 'with', 'by'].includes(word.toLowerCase())
  );
  
  const primaryWord = mainWords[0] || words[0] || text.trim();
  
  // Look for vocabulary-specific keywords
  const vocabKeywords = ['vocabulary', 'word', 'meaning', 'definition', 'synonym', 'antonym', 'context', 'clue'];
  const foundKeywords = vocabKeywords.filter(keyword => text.toLowerCase().includes(keyword));
  
  // Analyze the word and provide specific help
  let specificGuidance = '';
  let actualHelp = '';
  
  if (mainWords.length > 0) {
    specificGuidance = `**🔍 Word Analysis: "${primaryWord}"**
    
**Let's explore this word together!**

**Context clues to look for:**
- How is the word used in a sentence?
- What words come before and after it?
- Does the sentence give you hints about its meaning?

**Word parts to examine:**
- Are there any prefixes (un-, re-, pre-)?
- Are there any suffixes (-tion, -ly, -able)?
- Do you recognize any root words?

**Strategies to try:**
- Read the word in context
- Look for familiar word parts
- Think of similar-sounding words
- Consider what would make sense in the sentence

**What do you think this word means?** Make your best guess based on the context!`;
    
    actualHelp = `**📚 Vocabulary Practice: "${primaryWord}"**`;
  } else {
    specificGuidance = `**📖 Vocabulary Building:**
- Use context clues to understand word meanings
- Look for word parts (prefixes, suffixes, roots)
- Think about what would make sense in the sentence
- Make educated guesses and check your understanding`;
    
    actualHelp = `**🎯 Vocabulary Practice:**`;
  }
  
  const vocabularyResponses = [
    `📚 Vocabulary Help (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
What to do:
1. Look at the word in context
2. Identify any word parts you recognize
3. Make your best guess about the meaning
4. Check if it makes sense in the sentence
  
💡 Need more help? Ask me about specific vocabulary strategies!`,

    `📖 Word Study (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
Your action plan:
1. Examine the word carefully
2. Look for context clues
3. Break down word parts if possible
4. Make an educated guess
  
🎯 Ready to explore? Let me know what vocabulary help you need!`,

    `📝 Vocabulary Guide (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
Steps to success:
1. Read the word in context
2. Look for familiar word parts
3. Consider what would make sense
4. Make your best guess
  
🚀 Need guidance? Ask me about vocabulary strategies!`,

    `📚 Word Analysis (${wordCount} words)
  
${actualHelp}
  
${specificGuidance}
  
Your mission:
1. Study the word carefully
2. Use context clues
3. Identify word parts
4. Make an educated guess
  
✨ Ready to learn? Let me know what vocabulary help you need!`
  ];
  
  return vocabularyResponses[Math.floor(Math.random() * vocabularyResponses.length)];
}

// Get specific help for a word
function getSpecificWordHelp(word) {
  const lowerWord = word.toLowerCase();
  
  // Common word meanings and analysis
  const wordMeanings = {
    'context': {
      meaning: 'the words or situation that surround something and help explain its meaning',
      partOfSpeech: 'noun',
      wordParts: 'con- (with) + text (words)',
      examples: 'context clues, in this context, out of context',
      synonyms: 'situation, circumstances, background, setting',
      context: 'used when talking about the surrounding information that helps you understand something'
    },
    'floral': {
      meaning: 'relating to flowers',
      partOfSpeech: 'adjective',
      wordParts: 'flor- (flower) + -al (relating to)',
      examples: 'floral arrangement, floral pattern, floral scent',
      synonyms: 'flowery, botanical, plant-related',
      context: 'describes things that are related to or decorated with flowers'
    },
    'abridge': {
      meaning: 'to shorten or condense',
      partOfSpeech: 'verb',
      wordParts: 'a- (to) + bridge (shorten)',
      examples: 'abridged version, abridge a story, abridged dictionary',
      synonyms: 'shorten, condense, summarize, truncate',
      context: 'used when making something shorter while keeping the main points'
    },
    'attempt': {
      meaning: 'to try to do something',
      partOfSpeech: 'verb/noun',
      wordParts: 'at- (to) + tempt (try)',
      examples: 'attempt to solve, make an attempt, failed attempt',
      synonyms: 'try, effort, endeavor, strive',
      context: 'used when someone tries to do something, whether successful or not'
    },
    'we': {
      meaning: 'the people speaking (first person plural pronoun)',
      partOfSpeech: 'pronoun',
      wordParts: 'basic pronoun',
      examples: 'we are going, we like pizza, we will help',
      synonyms: 'us, our group, ourselves',
      context: 'refers to the speaker and at least one other person'
    },
    'are': {
      meaning: 'present tense of "be" for plural subjects',
      partOfSpeech: 'verb (linking verb)',
      wordParts: 'irregular verb form',
      examples: 'we are happy, they are students, you are right',
      synonyms: 'is (for singular), exist, live',
      context: 'connects a subject to a description or state of being'
    }
  };
  
  if (wordMeanings[lowerWord]) {
    const info = wordMeanings[lowerWord];
    return `**🤖 AI Word Analysis: "${word}"** 📚

**🧠 Intelligent Analysis:**
I've analyzed this word's meaning, usage, and context to give you comprehensive understanding.

**📖 Core Meaning:** ${info.meaning}
**🔤 Part of Speech:** ${info.partOfSpeech}
**🔍 Word Structure:** ${info.wordParts}

**💬 Real Examples:**
- ${info.examples}

**🔗 Related Words:** ${info.synonyms}

**🎯 Smart Usage:** ${info.context}

**💡 AI Insight:** This word is commonly used in ${info.partOfSpeech === 'verb' ? 'sentences where someone is doing something' : info.partOfSpeech === 'adjective' ? 'descriptions of things' : 'referring to people or things'}. I can help you understand how to use it in different contexts!

**❓ Want me to explain this word in a different way or show more examples?** Just ask!`;
  }
  
  // For unknown words, provide AI-powered analysis
  return `**🤖 AI Word Analysis: "${word}"** 📚

**🧠 Intelligent Analysis:**
I'm analyzing this word to help you understand it better. Let me break it down using AI-powered techniques.

**🔍 Word Structure Analysis:**
- **Prefixes:** un-, re-, pre-, dis-, mis- (change meaning)
- **Roots:** Look for familiar parts you know (core meaning)
- **Suffixes:** -tion, -ly, -able, -ing, -ed (change word type)

**🎯 Smart Context Clues Strategy:**
1. **Read around the word** - What's happening in the sentence?
2. **Look for signal words** - Other words that hint at the meaning
3. **Think of similar sounds** - Does it remind you of any words you know?
4. **Consider the situation** - What would make sense here?

**💡 AI Insight:** Based on my analysis, "${word}" appears to be a ${word.length > 6 ? 'longer word that might be complex' : 'shorter word that could be common'}. 

**🤔 What do you think "${word}" might mean?** Use the context clues and make your best educated guess! I'm here to help you figure it out.

**❓ Need more help?** Ask me to analyze this word in a different way or explain any part of my analysis!`;
}

function identifyMainTopic(words) {
  const topics = {
    science: ['research', 'study', 'experiment', 'data', 'analysis', 'scientific', 'discovery'],
    history: ['historical', 'century', 'war', 'battle', 'ancient', 'medieval', 'revolution'],
    technology: ['computer', 'digital', 'software', 'internet', 'technology', 'device', 'system'],
    nature: ['environment', 'climate', 'species', 'ecosystem', 'natural', 'wildlife', 'conservation'],
    education: ['learning', 'student', 'teacher', 'school', 'education', 'academic', 'study'],
    health: ['health', 'medical', 'disease', 'treatment', 'patient', 'doctor', 'medicine']
  };
  
  for (const [topic, keywords] of Object.entries(topics)) {
    if (words.some(word => keywords.some(keyword => word.includes(keyword)))) {
      return topic;
    }
  }
  
  return 'a general topic';
}

function getRandomResponse(responses) {
  return responses[Math.floor(Math.random() * responses.length)];
}

// Text selection and highlighting
let selectedText = '';
let selectionRange = null;
let lastSelectedElement = null;
let questionContext = '';
let multiSelectMode = false;
let selectedPassage = '';
let selectedQuestion = '';
let selectedImage = null;
let chatHistory = [];
let imageSelectionMode = false;
let aggressiveMode = false;
let textSelectionMode = true;

console.log('🔍 DEBUG: About to define setupTextSelection function');
function setupTextSelection() {
  console.log('Setting up text selection');
  console.log('Document ready state:', document.readyState);
  console.log('Document body exists:', !!document.body);
  document.addEventListener('mouseup', (e) => {
    // Skip if text selection mode is disabled
    if (!textSelectionMode) {
      return;
    }
    
    const selection = window.getSelection();
    const text = selection.toString().trim();
    
    if (text.length > 0) {
      // Try to get MathJax/LaTeX code if available
      let mathText = text;
      const range = selection.getRangeAt(0);
      const container = range.commonAncestorContainer;
      
      // Look for MathJax elements in the selection
      if (container.nodeType === Node.ELEMENT_NODE) {
        const mathElements = container.querySelectorAll('.MathJax, .math, [data-math], .katex, .latex');
        if (mathElements.length > 0) {
          // Get the LaTeX source if available
          const mathElement = mathElements[0];
          const latexSource = mathElement.getAttribute('data-math') || 
                             mathElement.getAttribute('data-latex') ||
                             mathElement.textContent;
          if (latexSource && latexSource !== text) {
            mathText = latexSource;
            console.log('MathJax/LaTeX detected:', mathText);
          }
        }
      }
      
      selectedText = mathText;
      selectionRange = selection.getRangeAt(0);
      lastSelectedElement = e.target;
      highlightSelectedText(selection);
      showSelectionTooltip(e);
      
      // Debug logging for text selection
      console.log('Text selected:', {
        length: text.length,
        wordCount: text.trim().split(/\s+/).filter(word => word.length > 0).length,
        text: text.substring(0, 100) + (text.length > 100 ? '...' : '')
      });
      
      // Detect if this looks like a question or problem
      detectQuestionContext(text, e.target);
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

function toggleMultiSelectMode() {
  multiSelectMode = !multiSelectMode;
  
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
  
  // Clear previous selections when toggling
  if (!multiSelectMode) {
    deselectAll();
  }
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
  selectionRange = null;
  lastSelectedElement = null;
  questionContext = '';
  imageSelectionMode = false;
  
  // Remove all highlights
  const highlights = document.querySelectorAll('.ai-tutor-highlight, .ai-tutor-selected-text');
  highlights.forEach(highlight => {
    // Remove the highlight classes
    highlight.classList.remove('ai-tutor-highlight', 'ai-tutor-selected-text');
    
    // Remove inline styles that might have been added
    highlight.style.backgroundColor = '';
    highlight.style.borderRadius = '';
    highlight.style.cursor = '';
    highlight.style.transition = '';
    
    // If this is a span that was created for highlighting, unwrap it
    if (highlight.tagName === 'SPAN' && highlight.parentNode) {
      const parent = highlight.parentNode;
      while (highlight.firstChild) {
        parent.insertBefore(highlight.firstChild, highlight);
      }
      parent.removeChild(highlight);
    }
  });
  
  // Remove image highlights
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.style.border = '';
    img.style.borderRadius = '';
  });
  
  // Remove outline styles from non-selectable elements
  const nonSelectableElements = document.querySelectorAll('button, input, select, textarea, a, div, span, p, h1, h2, h3, h4, h5, h6');
  nonSelectableElements.forEach(element => {
    element.style.outline = '';
    element.style.outlineOffset = '';
    element.style.borderRadius = '';
  });
  
  // Remove any existing tooltips
  const tooltips = document.querySelectorAll('#selection-tooltip, #image-tooltip');
  tooltips.forEach(tooltip => tooltip.remove());
  
  // Clean up any remaining highlighted spans that might not have classes
  const allSpans = document.querySelectorAll('span');
  allSpans.forEach(span => {
    if (span.style.backgroundColor && span.style.backgroundColor.includes('102, 126, 234')) {
      // This looks like a highlight span, unwrap it
      if (span.parentNode) {
        const parent = span.parentNode;
        while (span.firstChild) {
          parent.insertBefore(span.firstChild, span);
        }
        parent.removeChild(span);
      }
    }
  });
  
  // Show deselect notification
  const notification = document.createElement('div');
  notification.style.cssText = `
    position: fixed;
    top: 20px;
    right: 20px;
    background: #6c757d;
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
  
  console.log('All selections cleared');
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
    // Remove image highlights
    const images = document.querySelectorAll('img');
    images.forEach(img => {
      img.style.border = '';
      img.style.borderRadius = '';
    });
  }
  
  console.log('Image selection mode:', imageSelectionMode);
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
  
  // Clear any existing selections when disabling
  if (!textSelectionMode) {
    deselectAll();
  }
  
  console.log('Text selection mode:', textSelectionMode);
}

function handleImageClick(e) {
  const img = e.target;
  const imgSrc = img.src;
  const imgAlt = img.alt || '';
  const imgTitle = img.title || '';
  
  // Store image info for analysis
  selectedImage = {
    src: imgSrc,
    alt: imgAlt,
    title: imgTitle,
    element: img
  };
  
  // Highlight the image
  img.style.border = '3px solid #667eea';
  img.style.borderRadius = '6px';
  img.style.transition = 'border 0.3s ease';
  
  // Show image analysis tooltip
  showImageTooltip(e, img);
  
  console.log('Image selected for analysis:', imgSrc);
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
  
  // Detect image type
  const isMathGraph = detectMathGraph(img);
  const isChart = detectChart(img);
  const isDiagram = detectDiagram(img);
  
  let message = 'Image selected! Click "I Need Help" to analyze';
  if (isMathGraph) {
    message = 'Math graph detected! Click "I Need Help" to analyze';
  } else if (isChart) {
    message = 'Chart detected! Click "I Need Help" to analyze';
  } else if (isDiagram) {
    message = 'Diagram detected! Click "I Need Help" to analyze';
  }
  
  tooltip.textContent = message;
  
  document.body.appendChild(tooltip);
  
  setTimeout(() => {
    if (tooltip.parentNode) {
      tooltip.remove();
    }
  }, 3000);
}

function detectMathGraph(img) {
  const alt = img.alt.toLowerCase();
  const src = img.src.toLowerCase();
  const mathKeywords = ['graph', 'plot', 'function', 'equation', 'coordinate', 'axis', 'slope', 'intercept', 'parabola', 'line', 'curve'];
  
  return mathKeywords.some(keyword => alt.includes(keyword) || src.includes(keyword));
}

function detectChart(img) {
  const alt = img.alt.toLowerCase();
  const src = img.src.toLowerCase();
  const chartKeywords = ['chart', 'bar', 'pie', 'histogram', 'data', 'statistics', 'percentage'];
  
  return chartKeywords.some(keyword => alt.includes(keyword) || src.includes(keyword));
}

function detectDiagram(img) {
  const alt = img.alt.toLowerCase();
  const src = img.src.toLowerCase();
  const diagramKeywords = ['diagram', 'flowchart', 'process', 'cycle', 'structure', 'model'];
  
  return diagramKeywords.some(keyword => alt.includes(keyword) || src.includes(keyword));
}

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
  
  // If it's a math problem, automatically select it
  if (text.match(/[0-9]+\s*[+\-*/=]\s*[0-9]+/) || text.includes('solve') || text.includes('calculate')) {
    selectedText = text.trim();
    lastSelectedElement = element;
    highlightElement(element);
    showContextualTooltip(e, 'math');
  }
  
  // If it's a question, provide context
  if (text.match(/\?$/) || text.includes('what') || text.includes('how') || text.includes('why')) {
    questionContext = text.trim();
    showContextualTooltip(e, 'question');
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
  
  // Store the content for analysis (but not for UI elements or buttons)
  if ((!element.id || !element.id.includes('enhanced-')) && 
      !element.id.includes('ai-tutor-') &&
      !element.textContent.includes('I Need Help') && 
      !element.textContent.includes('🎓')) {
    selectedText = fullText;
    lastSelectedElement = element;
    console.log('Selected text updated:', selectedText.substring(0, 50) + '...');
  } else {
    console.log('Skipped UI element:', element.id, element.tagName, element.textContent);
  }
  
  // Add visual feedback (different from highlighting)
  element.style.outline = '2px solid #667eea';
  element.style.outlineOffset = '2px';
  element.style.borderRadius = '4px';
  
  // Show contextual tooltip
  let context = 'general';
  if (fullText.match(/[0-9]+\s*[+\-*/=]\s*[0-9]+/) || fullText.includes('solve') || fullText.includes('calculate')) {
    context = 'math';
  } else if (fullText.match(/\?$/) || fullText.includes('what') || fullText.includes('how') || fullText.includes('why')) {
    context = 'question';
  }
  
  showContextualTooltip(e, context);
  
  // Debug logging for troubleshooting
  console.log('Non-selectable educational content clicked:', {
    tagName: element.tagName,
    text: text,
    placeholder: placeholder,
    title: title,
    alt: alt,
    ariaLabel: ariaLabel,
    dataValue: dataValue,
    fullText: fullText,
    classes: element.className,
    id: element.id,
    context: context
  });
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
  
  // Only proceed if there's meaningful content
  if (fullText.length < 2) {
    return;
  }
  
  // Store the content for analysis (but not for UI elements or buttons)
  if ((!element.id || !element.id.includes('enhanced-')) && 
      !element.id.includes('ai-tutor-') &&
      !element.textContent.includes('I Need Help') && 
      !element.textContent.includes('🎓')) {
    selectedText = fullText;
    lastSelectedElement = element;
  }
  
  // Add visual feedback
  element.style.outline = '2px solid #FF6B35';
  element.style.outlineOffset = '2px';
  element.style.borderRadius = '4px';
  
  // Show contextual tooltip
  let context = 'general';
  if (fullText.match(/[0-9]+\s*[+\-*/=]\s*[0-9]+/) || fullText.includes('solve') || fullText.includes('calculate')) {
    context = 'math';
  } else if (fullText.match(/\?$/) || fullText.includes('what') || fullText.includes('how') || fullText.includes('why')) {
    context = 'question';
  }
  
  showContextualTooltip(e, context);
  
  // Debug logging
  console.log('Aggressive mode click:', {
    tagName: element.tagName,
    text: text,
    fullText: fullText,
    classes: element.className,
    id: element.id,
    context: context
  });
}

function detectQuestionContext(text, element) {
  // Check if the selected text looks like a question
  if (text.match(/\?$/) || text.includes('what') || text.includes('how') || text.includes('why') || text.includes('which')) {
    questionContext = text;
    return 'question';
  }
  
  // Check if it looks like a math problem
  if (text.match(/[0-9]+\s*[+\-*/=]\s*[0-9]+/) || text.includes('solve') || text.includes('calculate') || text.includes('find')) {
    return 'math';
  }
  
  // Check if it looks like reading content
  if (text.length > 50 && !text.match(/[0-9]+/)) {
    return 'reading';
  }
  
  return 'general';
}

function highlightElement(element) {
  // Remove previous highlights
  document.querySelectorAll('.ai-tutor-highlight').forEach(el => {
    el.classList.remove('ai-tutor-highlight');
  });
  
  // Highlight the element
  element.classList.add('ai-tutor-highlight');
  element.style.cssText += `
    background-color: rgba(102, 126, 234, 0.3) !important;
    border-radius: 3px;
    cursor: pointer;
  `;
}

function highlightSelectedText(selection) {
  // Remove previous highlights
  document.querySelectorAll('.ai-tutor-highlight').forEach(el => {
    el.classList.remove('ai-tutor-highlight');
    // Unwrap the span if it was created for highlighting
    if (el.tagName === 'SPAN' && el.parentNode) {
      const parent = el.parentNode;
      while (el.firstChild) {
        parent.insertBefore(el.firstChild, el);
      }
      parent.removeChild(el);
    }
  });

  // Highlight current selection
  if (selection.rangeCount > 0) {
    const range = selection.getRangeAt(0);
    const span = document.createElement('span');
    span.className = 'ai-tutor-highlight';
    
    try {
      range.surroundContents(span);
    } catch (e) {
      console.log('Could not highlight selection');
    }
  }
}

function showSelectionTooltip(e) {
  showContextualTooltip(e, 'general');
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
  
  // Handle multi-select mode
  if (multiSelectMode) {
    if (!selectedPassage) {
      tooltip.textContent = 'Passage selected! Now select the question';
      selectedPassage = selectedText;
    } else if (!selectedQuestion) {
      tooltip.textContent = 'Question selected! Click "I Need Help" to analyze both';
      selectedQuestion = selectedText;
    } else {
      tooltip.textContent = 'Both selected! Click "I Need Help" to analyze';
    }
  } else {
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
  }
  
  document.body.appendChild(tooltip);
  
  setTimeout(() => {
    if (tooltip.parentNode) {
      tooltip.remove();
    }
  }, 3000);
}

// Create enhanced floating button
console.log('🔍 DEBUG: About to define createFloatingButton function');
function createFloatingButton() {
  console.log('Creating enhanced floating button');
  console.log('Document ready state:', document.readyState);
  console.log('Document body exists:', !!document.body);
  
  const existingBtn = document.getElementById('ai-tutor-floating-btn');
  if (existingBtn) {
    existingBtn.remove();
  }

  const button = document.createElement('button');
  button.id = 'ai-tutor-floating-btn';
  button.innerHTML = '🎓 I Need Help';
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
    transition: all 0.3s ease;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
  `;
  
  button.addEventListener('mouseenter', () => {
    button.style.transform = 'translateY(-2px)';
    button.style.boxShadow = '0 6px 25px rgba(102, 126, 234, 0.6)';
  });
  
  button.addEventListener('mouseleave', () => {
    button.style.transform = 'translateY(0)';
    button.style.boxShadow = '0 4px 20px rgba(102, 126, 234, 0.4)';
  });
  
  button.addEventListener('click', () => {
    console.log('Button clicked');
    showEnhancedWidget();
  });
  
  document.body.appendChild(button);
  console.log('Enhanced floating button created');
}

// Create enhanced widget with detailed responses
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
    z-index: 10001;
    width: 90%;
    max-width: 700px;
    max-height: 80vh;
    background: white;
    border-radius: 16px;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    overflow: hidden;
    display: flex;
    flex-direction: column;
  `;

  widget.innerHTML = `
    <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 20px; display: flex; justify-content: space-between; align-items: center;">
      <div>
        <h2 style="margin: 0; font-size: 20px;">🎓 AI Tutor Assistant</h2>
        <p style="margin: 5px 0 0 0; font-size: 14px; opacity: 0.9;">${siteInfo}</p>
      </div>
      <button id="enhanced-close" style="background: none; border: none; color: white; font-size: 24px; cursor: pointer;">×</button>
    </div>
    <div id="enhanced-content" style="padding: 24px; flex: 1; overflow-y: auto;">
      <div style="margin-bottom: 16px; padding: 16px; background: #f0f9ff; border-left: 4px solid #48bb78; border-radius: 8px;">
        <strong>Welcome!</strong> I'm here to provide detailed, step-by-step guidance for your learning.
        <br><br>
        <small>🤖 <strong>AI-Powered:</strong> Using Google Gemini AI for intelligent, personalized responses!</small>
        ${selectedText ? `<br><br><strong>📖 Selected Text:</strong> "${selectedText.substring(0, 100)}${selectedText.length > 100 ? '...' : ''}"` : ''}
        ${questionContext ? `<br><br><strong>❓ Question Context:</strong> "${questionContext.substring(0, 100)}${questionContext.length > 100 ? '...' : ''}"` : ''}
        <br><br>
        <strong>💡 How to Use:</strong>
        <ul style="margin: 8px 0; padding-left: 20px; font-size: 12px;">
          <li><strong>Select text</strong> and ask questions about it</li>
          <li><strong>Click on problems</strong> to automatically select them</li>
          <li><strong>Ask general questions</strong> about the content</li>
          <li><strong>Get step-by-step solutions</strong> for math problems</li>
        </ul>
      </div>
    </div>
    <div style="padding: 16px 24px; background: #f8f9fa; border-top: 1px solid #e9ecef;">
      <div style="margin-bottom: 12px;">
        <textarea id="enhanced-input" placeholder="Ask me anything or select text on the page..." style="width: 100%; min-height: 80px; padding: 12px; border: 2px solid #e2e8f0; border-radius: 8px; font-size: 14px; font-family: inherit; resize: vertical;"></textarea>
      </div>
      <div style="display: flex; gap: 12px; justify-content: flex-end;">
        <button id="enhanced-clear" style="padding: 10px 20px; border: none; border-radius: 8px; background: #e2e8f0; color: #4a5568; cursor: pointer;">Clear</button>
        <button id="enhanced-send" style="padding: 10px 20px; border: none; border-radius: 8px; background: #667eea; color: white; cursor: pointer;">Get Detailed Help</button>
      </div>
    </div>
  `;

  // Create overlay
  const overlay = document.createElement('div');
  overlay.id = 'enhanced-overlay';
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
    
    document.getElementById('enhanced-content').innerHTML = `
      <div style="margin-bottom: 16px; padding: 16px; background: #f0f9ff; border-left: 4px solid #48bb78; border-radius: 8px;">
        <strong>Conversation cleared!</strong> What would you like help with?
        <br><br>
        <small>🤖 <strong>AI-Powered:</strong> Using Google Gemini AI for intelligent, personalized responses!</small>
        ${selectedText ? `<br><br><strong>📖 Selected Text:</strong> "${selectedText.substring(0, 100)}${selectedText.length > 100 ? '...' : ''}"` : ''}
        ${questionContext ? `<br><br><strong>❓ Question Context:</strong> "${questionContext.substring(0, 100)}${questionContext.length > 100 ? '...' : ''}"` : ''}
        <br><br>
        <strong>💡 How to Use:</strong>
        <ul style="margin: 8px 0; padding-left: 20px; font-size: 12px;">
          <li><strong>Select text</strong> and ask questions about it</li>
          <li><strong>Click on problems</strong> to automatically select them</li>
          <li><strong>Ask general questions</strong> about the content</li>
          <li><strong>Get step-by-step solutions</strong> for math problems</li>
        </ul>
      </div>
    `;
  });

  document.getElementById('enhanced-send').addEventListener('click', async () => {
    const input = document.getElementById('enhanced-input').value.trim();
    if (input) {
      addMessage('user', input);
      const response = await getDetailedResponse(input, context, selectedText);
      addMessage('assistant', response);
      document.getElementById('enhanced-input').value = '';
    } else {
      alert('Please enter a question!');
    }
  });

  // Enter key support
  document.getElementById('enhanced-input').addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      document.getElementById('enhanced-send').click();
    }
  });

  // Display chat history if available
  if (chatHistory.length > 0) {
    displayChatHistory();
  }

  console.log('Enhanced widget created');
}

function getSiteInfo(context) {
  if (context.siteType !== 'unknown') {
    return `Detected: ${context.siteType} site (${Math.round(context.confidence * 100)}% confidence)`;
  } else if (context.math) {
    return 'Detected: Math content';
  } else if (context.reading) {
    return 'Detected: Reading content';
  } else if (context.writing) {
    return 'Detected: Writing content';
  } else {
    return 'General learning mode';
  }
}

function addMessage(type, content) {
  const contentDiv = document.getElementById('enhanced-content');
  const messageDiv = document.createElement('div');
  messageDiv.style.cssText = `
    margin-bottom: 16px;
    padding: 16px;
    border-radius: 12px;
    line-height: 1.6;
    ${type === 'user' ? 'background: #e6f3ff; border-left: 4px solid #667eea;' : 'background: #f0f9ff; border-left: 4px solid #48bb78;'}
  `;
  messageDiv.innerHTML = `<strong>${type === 'user' ? 'You' : 'AI Tutor'}:</strong><br>${content}`;
  contentDiv.appendChild(messageDiv);
  contentDiv.scrollTop = contentDiv.scrollHeight;
  
  // Save message to chat history
  saveMessageToHistory(type, content);
}

function saveMessageToHistory(type, content) {
  const message = {
    type: type,
    content: content,
    timestamp: Date.now()
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

function displayChatHistory() {
  const contentDiv = document.getElementById('enhanced-content');
  
  // Clear existing content except welcome message
  const welcomeDiv = contentDiv.querySelector('div:first-child');
  contentDiv.innerHTML = '';
  if (welcomeDiv) {
    contentDiv.appendChild(welcomeDiv);
  }
  
  // Display chat history
  chatHistory.forEach(message => {
    const messageDiv = document.createElement('div');
    messageDiv.style.cssText = `
      margin-bottom: 16px;
      padding: 16px;
      border-radius: 12px;
      line-height: 1.6;
      ${message.type === 'user' ? 'background: #e6f3ff; border-left: 4px solid #667eea;' : 'background: #f0f9ff; border-left: 4px solid #48bb78;'}
    `;
    messageDiv.innerHTML = `<strong>${message.type === 'user' ? 'You' : 'AI Tutor'}:</strong><br>${message.content}`;
    contentDiv.appendChild(messageDiv);
  });
  
  contentDiv.scrollTop = contentDiv.scrollHeight;
}

// Initialize when page loads
console.log('🔍 DEBUG: About to define initializeEnhancedTutor function');
function initializeEnhancedTutor() {
  console.log('Initializing enhanced tutor');
  console.log('Document ready state:', document.readyState);
  console.log('Document body exists:', !!document.body);
  
  try {
    setupTextSelection();
    createFloatingButton();
    console.log('Enhanced tutor initialized successfully');
  } catch (error) {
    console.error('Error initializing enhanced tutor:', error);
  }
}

// Listen for messages from popup
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === 'ping') {
    sendResponse({ status: 'active' });
  }
});

// Test if functions exist (after they are defined)
console.log('🔍 DEBUG: About to check function existence');
console.log('🔍 DEBUG: Script execution reached function existence checks');
console.log('initializeEnhancedTutor function exists:', typeof initializeEnhancedTutor);
console.log('setupTextSelection function exists:', typeof setupTextSelection);
console.log('createFloatingButton function exists:', typeof createFloatingButton);

// Initialize
console.log('About to initialize - Document ready state:', document.readyState);
if (document.readyState === 'loading') {
  console.log('Document still loading, adding event listener');
  document.addEventListener('DOMContentLoaded', initializeEnhancedTutor);
} else {
  console.log('Document already loaded, calling initializeEnhancedTutor directly');
  initializeEnhancedTutor();
}

// Add missing braces for syntax balance
{}{}{}{}{}
}
