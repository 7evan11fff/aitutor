// Enhanced AI Tutor Content Script - Detailed Responses & Better Functionality
console.log('🔥🔥🔥 CONTENT-FIXED.JS LOADED - VERSION 3.0 - WORD COUNT DEFINITELY FIXED 🔥🔥🔥');
console.log('This is the UPDATED version with proper word counting!');
console.log('Timestamp:', new Date().toISOString());
console.log('Word counting function test:', (() => {
  const testText = "This is a test with exactly ten words to verify counting works correctly";
  const words = testText.trim().split(/\s+/).filter(word => word.length > 0);
  return words.length;
})());

// Detailed AI responses with step-by-step guidance
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
    ],
    wordProblems: [
      "Let's solve this word problem step by step! First, let me understand what's happening. Can you tell me what the problem is asking? What information are we given, and what do we need to find?",
      "Great! Now let's identify the key information. What numbers are given in the problem? What do they represent? Are there any keywords that tell us what operation to use? Words like 'total', 'sum', 'altogether' often mean addition, while 'difference', 'less than', 'fewer' often mean subtraction.",
      "Perfect! Now let's set up our equation or calculation. What variable will represent what we're trying to find? How can we express the relationship between the given information and what we need to find?",
      "Now let's work through the actual calculation. Let me show you how to solve this specific problem step by step, then you can try similar problems on your own."
    ]
  },
  reading: {
    comprehension: [
      "Let's analyze this text together! First, let's read through it once to get a general understanding. What do you think the main topic or subject is? Don't worry about details yet - just try to get the big picture.",
      "Great! Now let's look for the main idea. The main idea is usually stated in one or two sentences and tells us what the entire passage is about. Look for a sentence that seems to summarize the whole passage. It's often found at the beginning or end of a paragraph.",
      "Excellent! Now let's identify the supporting details. These are the facts, examples, or explanations that help prove or explain the main idea. Can you find at least three supporting details in the text? Write them down as you find them.",
      "Perfect! Now let's think about the author's purpose. Why do you think the author wrote this? To inform, persuade, entertain, or explain? Look for clues like the tone of the writing, the type of information presented, and any opinions expressed.",
      "Great work! Now let's make some inferences. An inference is something we can figure out from the text even though it's not directly stated. What can you infer about the author's opinion on this topic? What can you infer about the intended audience?"
    ],
    vocabulary: [
      "Let's figure out this word together! First, let's look at the context - the words and sentences around the unknown word. What clues can you find? Does the sentence give you any hints about what the word might mean?",
      "Great! Now let's look for word parts. Many words are made up of smaller parts called roots, prefixes, and suffixes. For example, 'unhappy' has the prefix 'un-' (meaning 'not') and the root 'happy'. Can you identify any familiar parts in this word?",
      "Excellent! Now let's try to use context clues. Look at the other words in the sentence. Do any of them give you hints about what this word might mean? Sometimes the sentence will define the word, give an example, or provide a contrast.",
      "Perfect! Now let's make an educated guess. Based on the context and word parts, what do you think this word means? Don't worry if you're not sure - just make your best guess. Then, let's check if your guess makes sense when you substitute it back into the sentence.",
      "Great work! Now let's verify our understanding. Does your definition make sense in the context of the sentence? Does it fit with the overall meaning of the paragraph? If not, let's try a different approach or look for more context clues."
    ]
  },
  writing: {
    structure: [
      "Let's organize your writing! First, let's identify your main point or thesis. What is the one main idea you want to communicate? This should be a clear, specific statement that tells your reader exactly what you're going to discuss.",
      "Great! Now let's plan your supporting points. What are the 2-3 main reasons or pieces of evidence that support your thesis? Each supporting point should be distinct and directly related to your main idea. Write them down in order of importance.",
      "Excellent! Now let's think about your introduction. How will you grab your reader's attention? You might start with a question, a surprising fact, or a brief story. Then, how will you introduce your thesis? The introduction should be like a roadmap for your essay.",
      "Perfect! Now let's plan your body paragraphs. Each paragraph should focus on one supporting point. Start with a topic sentence that introduces the point, then provide evidence or examples, and end with a sentence that connects back to your thesis.",
      "Great work! Now let's think about your conclusion. How will you wrap up your essay? You might summarize your main points, restate your thesis in different words, or end with a call to action or a thought-provoking question."
    ],
    brainstorming: [
      "Let's brainstorm some ideas! First, let's think about your topic broadly. What comes to mind when you think about this subject? Don't worry about organization yet - just write down everything that pops into your head.",
      "Great! Now let's think about different angles or perspectives. How might different people view this topic? What are the pros and cons? What are the different aspects or parts of this topic that you could explore?",
      "Excellent! Now let's think about personal connections. Have you had any personal experiences related to this topic? What stories or examples could you use to illustrate your points? Personal examples often make writing more engaging and convincing.",
      "Perfect! Now let's think about questions. What questions do you have about this topic? What would you like to know more about? Sometimes the best writing comes from exploring questions that genuinely interest you.",
      "Great work! Now let's organize these ideas. Which ideas seem most important or interesting? Which ones could you develop into full paragraphs? Start grouping related ideas together and see what patterns emerge."
    ]
  },
  grammar: {
    tenses: [
      "Let's look at verb tenses! First, let's identify the verb in the sentence. What action is being described? Then, let's determine when this action takes place - is it happening now (present), did it happen in the past, or will it happen in the future?",
      "Great! Now let's look at the tense markers. Words like 'yesterday', 'last week', 'tomorrow', 'next year' can help us identify the time frame. What time markers do you see in this sentence?",
      "Excellent! Now let's think about the specific tense. Is it simple present (I walk), present continuous (I am walking), simple past (I walked), past continuous (I was walking), or future (I will walk)? Each tense has a specific form and use.",
      "Perfect! Now let's check if the tense is consistent throughout the sentence or paragraph. All verbs in the same time frame should use the same tense. Are there any tense shifts that don't make sense?",
      "Great work! Now let's practice. Can you rewrite this sentence using a different tense? How does changing the tense affect the meaning? This will help you understand when and why we use different tenses."
    ],
    partsOfSpeech: [
      "Let's identify parts of speech! First, let's find the subject - who or what is doing the action? The subject is usually a noun or pronoun. Can you identify the subject in this sentence?",
      "Great! Now let's find the verb - what action is being performed? The verb tells us what the subject is doing. Look for action words like 'run', 'think', 'write', or being words like 'is', 'are', 'was'.",
      "Excellent! Now let's look for adjectives - words that describe nouns. They often answer questions like 'what kind?', 'which one?', or 'how many?'. Can you find any adjectives in this sentence?",
      "Perfect! Now let's look for adverbs - words that describe verbs, adjectives, or other adverbs. They often answer questions like 'how?', 'when?', 'where?', or 'to what extent?'. What adverbs can you find?",
      "Great work! Now let's look for prepositions - words that show relationships between other words. Common prepositions include 'in', 'on', 'at', 'by', 'for', 'with'. What prepositions do you see?",
      "Excellent! Now let's look for conjunctions - words that connect other words, phrases, or clauses. Common conjunctions include 'and', 'but', 'or', 'so', 'because'. What conjunctions can you find?"
    ]
  },
  vocabulary: [
    "Let's explore this word together! First, let's look at the context - the words and sentences around it. What clues can you find about what this word might mean? Sometimes the sentence will give you hints through examples, definitions, or contrasts.",
    "Great! Now let's look for word parts. Many words are built from smaller pieces. Can you identify any prefixes (like 'un-', 're-', 'pre-'), suffixes (like '-tion', '-ly', '-able'), or roots that you recognize? These can give us clues about the word's meaning.",
    "Excellent! Now let's think about the word's function in the sentence. What part of speech is it? Is it a noun, verb, adjective, or adverb? This can help us understand how the word is being used and what it might mean.",
    "Perfect! Now let's make an educated guess. Based on the context and word parts, what do you think this word means? Don't worry if you're not sure - just make your best guess. Then, let's test it by substituting your definition back into the sentence.",
    "Great work! Now let's think about synonyms and antonyms. Can you think of any words that mean the same thing as this word? What about words that mean the opposite? This can help deepen your understanding of the word's meaning and usage."
  ]
};

// Site detection patterns
const sitePatterns = {
  math: [
    'khanacademy.org', 'mathway.com', 'symbolab.com', 'desmos.com', 'wolframalpha.com',
    'math.com', 'purplemath.com', 'mathisfun.com', 'brilliant.org', 'coursera.org',
    'edx.org', 'udemy.com', 'mathplanet.com', 'mathbits.com', 'coolmath.com'
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
    .replace(/\\dfrac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)') // \dfrac{a}{b} -> (a)/(b)
    .replace(/\\frac\{([^}]+)\}\{([^}]+)\}/g, '($1)/($2)')  // \frac{a}{b} -> (a)/(b)
    .replace(/\\[a-zA-Z]+\{[^}]*\}/g, '') // Remove other LaTeX commands
    .replace(/\{[^}]*\}/g, '') // Remove remaining braces
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
  
  // Check if this looks like a multiple choice question
  const isMultipleChoice = /[a-e]\d+/.test(problemText) || 
                          /[a-e]\s*[+\-*/=]/.test(problemText) ||
                          /submit|question\s*\d+\?/i.test(problemText);
  
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
  
  // Coordinate geometry problems
  const hasMidpoint = cleanText.toLowerCase().includes('midpoint');
  const hasEndpoint = cleanText.toLowerCase().includes('endpoint');
  const hasParentheses = cleanText.match(/\([^)]*\)/);
  const hasCoordinate = cleanText.toLowerCase().includes('coordinate');
  
  console.log('Coordinate geometry check:', {
    hasMidpoint,
    hasEndpoint,
    hasParentheses: !!hasParentheses,
    hasCoordinate,
    cleanText: cleanText.substring(0, 100) + '...'
  });
  
  if (hasMidpoint || hasEndpoint || hasParentheses || hasCoordinate) {
    console.log('Routing to coordinate geometry solver');
    return solveCoordinateGeometryProblem(cleanText);
  }
  
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
  
  // Calculate midpoint
  const midpointX = (point1.x + point2.x) / 2;
  const midpointY = (point1.y + point2.y) / 2;
  
  return `**Problem:** ${problemText}\n\n**Step 1:** Identify the endpoints\nI can see the endpoints are (${point1.x}, ${point1.y}) and (${point2.x}, ${point2.y}).\n\n**Step 2:** Use the midpoint formula\nThe midpoint formula is: M = ((x₁ + x₂)/2, (y₁ + y₂)/2)\n\n**Step 3:** Plug in the coordinates\nM = ((${point1.x} + ${point2.x})/2, (${point1.y} + ${point2.y})/2)\nM = (${point1.x + point2.x}/2, ${point1.y + point2.y}/2)\nM = (${midpointX}, ${midpointY})\n\n**Answer:** The midpoint is (${midpointX}, ${midpointY})`;
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
function getDetailedResponse(userInput, context, selectedText = '') {
  const input = userInput.toLowerCase();
  
  // Handle image analysis
  if (selectedImage) {
    return getImageAnalysis(selectedImage, userInput);
  }
  
  // Handle multi-select mode for reading comprehension
  if (multiSelectMode && selectedPassage && selectedQuestion) {
    return getReadingComprehensionAnalysis(selectedPassage, selectedQuestion);
  }
  
  // Check for writing content FIRST - before reading detection
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
  
  // Writing responses - check this FIRST
  if ((context.writing || input.includes('write') || input.includes('essay') || input.includes('paragraph') || isWritingContent)) {
    console.log('Routing to writing analysis (PRIORITY)');
    if (selectedText) {
      return getWritingAnalysis(selectedText);
    } else if (input.includes('grammar') || input.includes('spelling')) {
      return getRandomResponse(detailedResponses.grammar);
    } else {
      return getRandomResponse(detailedResponses.writing.structure);
    }
  }
  
  // Check if this looks like reading content (long text, articles, passages)
  const isReadingContent = selectedText && selectedText.length > 100 && 
                          (selectedText.includes('article') || selectedText.includes('passage') || 
                           selectedText.includes('author') || selectedText.includes('writes') ||
                           selectedText.includes('according to') || selectedText.includes('the text') ||
                           selectedText.includes('play') || selectedText.includes('character') ||
                           selectedText.includes('story') || selectedText.includes('novel') ||
                           selectedText.match(/[A-Z][a-z]+ [A-Z][a-z]+/) || // Proper names
                           selectedText.split(' ').length > 20); // Long text
  
  console.log('Reading content check:', {
    selectedTextLength: selectedText ? selectedText.length : 0,
    isReadingContent,
    contextReading: context.reading,
    inputRead: input.includes('read'),
    inputText: input.includes('text'),
    inputPassage: input.includes('passage'),
    selectedTextPreview: selectedText ? selectedText.substring(0, 100) + '...' : 'none'
  });
  
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
                         (problemText.includes('midpoint') && (problemText.includes('find') || problemText.includes('calculate'))) ||
                         (problemText.includes('endpoint') && (problemText.includes('find') || problemText.includes('calculate'))) ||
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
                         problemText.includes('Submit');
  
  console.log('Math detection check:', {
    contextMath: context.math,
    hasMathPatterns: hasMathPatterns,
    problemText: problemText,
    input: input
  });
  
  // Math responses - try to solve specific problems
  if (context.math || hasMathPatterns || input.includes('math') || input.includes('solve') || input.includes('equation') || input.includes('problem') || input.includes('answer')) {
    // Try to solve the specific problem
    console.log('Attempting to solve math problem:', problemText);
    console.log('Selected text:', selectedText);
    console.log('User input:', userInput);
    
    const mathSolution = solveMathProblem(problemText);
    console.log('Math solution result:', mathSolution);
    
    // Always return the math solution, even if it's a fallback
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
  
  // Final fallback - if we have any text that might be math, try to solve it
  if (problemText && (problemText.match(/\d/) || problemText.match(/[+\-*/=]/) || problemText.match(/[a-zA-Z]\s*[+\-*/=]/))) {
    console.log('Final fallback: treating as math problem:', problemText);
    return solveMathProblem(problemText);
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
  
  console.log('Final word count for display:', wordCount);
  console.log('Final sentence count for display:', sentences);
  
  return `📖 **Reading Analysis** (${wordCount} words, ${sentences} sentences)

**Main Topic:** ${identifyMainTopic(uniqueWords)}

**Key Points:**
- **First sentence:** "${firstSentence.substring(0, 80)}${firstSentence.length > 80 ? '...' : ''}"
- **Important words:** ${uniqueWords.join(', ')}

**Questions to think about:**
- What is the main idea?
- What evidence supports the author's points?
- What is the author's purpose?

**💡 Tip:** Look for the main argument and supporting details. What do you think the author wants you to understand?`;
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
  
  // Look for writing-specific keywords
  const writingKeywords = ['topic sentence', 'paragraph', 'essay', 'write', 'composition', 'grammar', 'sentence', 'example', 'prompt', 'instruction', 'assignment', 'exercise'];
  const foundKeywords = writingKeywords.filter(keyword => text.toLowerCase().includes(keyword));
  
  return `✍️ **Writing Analysis** (${wordCount} words, ${sentences} sentences)

**Writing Focus:** ${foundKeywords.length > 0 ? foundKeywords.join(', ') : 'General writing'}

**Key Points:**
- **First instruction:** "${firstSentence.substring(0, 80)}${firstSentence.length > 80 ? '...' : ''}"
- **Word count:** ${wordCount} words

**Questions to think about:**
- What is the main writing task?
- What specific skills are being practiced?
- What examples or guidance are provided?

**💡 Tip:** Focus on the specific writing skill being taught. What do you need to practice?`;
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

function setupTextSelection() {
  document.addEventListener('mouseup', (e) => {
    // Skip if text selection mode is disabled
    if (!textSelectionMode) {
      return;
    }
    
    const selection = window.getSelection();
    const text = selection.toString().trim();
    
    if (text.length > 0) {
      selectedText = text;
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
function createFloatingButton() {
  console.log('Creating enhanced floating button');
  
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
        <small>💡 <strong>Free Mode:</strong> No API key required! I'll give you comprehensive, detailed responses.</small>
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
        <small>💡 <strong>Free Mode:</strong> No API key required! I'll give you comprehensive, detailed responses.</small>
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

  document.getElementById('enhanced-send').addEventListener('click', () => {
    const input = document.getElementById('enhanced-input').value.trim();
    if (input) {
      addMessage('user', input);
      const response = getDetailedResponse(input, context, selectedText);
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
function initializeEnhancedTutor() {
  console.log('Initializing enhanced tutor');
  
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

// Initialize
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeEnhancedTutor);
} else {
  initializeEnhancedTutor();
}
