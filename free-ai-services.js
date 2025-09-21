// Free AI Services Module - No API Key Required
class FreeAIServices {
  constructor() {
    this.services = {
      huggingface: 'https://api-inference.huggingface.co/models/microsoft/DialoGPT-medium',
      cohere: 'https://api.cohere.ai/v1/generate',
      replicate: 'https://api.replicate.com/v1/predictions'
    };
    this.fallbackResponses = this.initializeFallbackResponses();
  }

  // Fallback responses for offline use
  initializeFallbackResponses() {
    return {
      math: {
        algebra: [
          "Let's break this algebra problem down step by step. First, I need to understand what we're solving for. Can you tell me what variable you're trying to find?",
          "Great! Now let's look at the equation. What operations do you see? Addition, subtraction, multiplication, or division?",
          "To solve for the variable, we need to isolate it on one side. What would be the first step to do that?",
          "Remember: whatever you do to one side of the equation, you must do to the other side to keep it balanced.",
          "Let's check our work by substituting our answer back into the original equation. Does it make sense?"
        ],
        geometry: [
          "Let's tackle this geometry problem together! First, what shape are we working with?",
          "What information do we already know about this shape?",
          "What formula might help us solve this problem?",
          "Let's plug in the values we know into the formula.",
          "Don't forget to include the correct units in your final answer!"
        ]
      },
      reading: {
        comprehension: [
          "Let's analyze this text together. What is the main topic or subject?",
          "Can you identify the key points or arguments being made?",
          "What evidence or examples does the author provide?",
          "How do the different paragraphs connect to each other?",
          "What questions do you have about this text?"
        ],
        vocabulary: [
          "Let's figure out this word together. Look at the context around it.",
          "What part of speech does this word appear to be?",
          "Are there any familiar word parts (prefixes, suffixes, or roots)?",
          "What do you think this word might mean based on the sentence?",
          "Let's check if your guess makes sense in the context."
        ]
      },
      writing: {
        structure: [
          "Let's organize your ideas! What is your main point or thesis?",
          "What are the key supporting points you want to make?",
          "How can you arrange these points in a logical order?",
          "What evidence or examples will support each point?",
          "How will you connect your ideas with transition words?"
        ],
        brainstorming: [
          "Let's brainstorm some ideas together. What comes to mind first?",
          "Can you think of any personal experiences related to this topic?",
          "What questions do you have about this subject?",
          "How might different people view this topic?",
          "What examples or stories could illustrate your point?"
        ]
      },
      grammar: {
        tenses: [
          "Let's look at the verb tense here. When does this action take place?",
          "Is it happening now, in the past, or in the future?",
          "What tense marker words do you see in the sentence?",
          "How does the tense affect the meaning of the sentence?",
          "Can you rewrite this sentence in a different tense?"
        ],
        partsOfSpeech: [
          "Let's identify the parts of speech in this sentence.",
          "What is the subject doing? That's your verb.",
          "What or who is the subject? That's your noun.",
          "What words describe the noun? Those are adjectives.",
          "How are the words connected? Look for prepositions and conjunctions."
        ]
      }
    };
  }

  // Generate contextual responses without API calls
  generateResponse(userInput, context) {
    const input = userInput.toLowerCase();
    
    // Math responses
    if (context.math || this.detectMathKeywords(input)) {
      return this.generateMathResponse(input, context);
    }
    
    // Reading responses
    if (context.reading || this.detectReadingKeywords(input)) {
      return this.generateReadingResponse(input, context);
    }
    
    // Writing responses
    if (context.writing || this.detectWritingKeywords(input)) {
      return this.generateWritingResponse(input, context);
    }
    
    // Grammar responses
    if (this.detectGrammarKeywords(input)) {
      return this.generateGrammarResponse(input, context);
    }
    
    // Vocabulary responses
    if (this.detectVocabularyKeywords(input)) {
      return this.generateVocabularyResponse(input, context);
    }
    
    // General learning response
    return this.generateGeneralResponse(input, context);
  }

  generateMathResponse(input, context) {
    const responses = this.fallbackResponses.math;
    
    if (input.includes('algebra') || input.includes('equation') || input.includes('solve')) {
      return this.getRandomResponse(responses.algebra);
    } else if (input.includes('geometry') || input.includes('area') || input.includes('perimeter')) {
      return this.getRandomResponse(responses.geometry);
    } else {
      return this.getRandomResponse(responses.algebra);
    }
  }

  generateReadingResponse(input, context) {
    const responses = this.fallbackResponses.reading;
    
    if (input.includes('word') || input.includes('meaning') || input.includes('vocabulary')) {
      return this.getRandomResponse(responses.vocabulary);
    } else {
      return this.getRandomResponse(responses.comprehension);
    }
  }

  generateWritingResponse(input, context) {
    const responses = this.fallbackResponses.writing;
    
    if (input.includes('structure') || input.includes('organize') || input.includes('paragraph')) {
      return this.getRandomResponse(responses.structure);
    } else {
      return this.getRandomResponse(responses.brainstorming);
    }
  }

  generateGrammarResponse(input, context) {
    const responses = this.fallbackResponses.grammar;
    
    if (input.includes('tense') || input.includes('verb') || input.includes('past') || input.includes('present')) {
      return this.getRandomResponse(responses.tenses);
    } else {
      return this.getRandomResponse(responses.partsOfSpeech);
    }
  }

  generateVocabularyResponse(input, context) {
    return this.getRandomResponse(this.fallbackResponses.reading.vocabulary);
  }

  generateGeneralResponse(input, context) {
    const generalResponses = [
      "That's a great question! Let's work through this together step by step.",
      "I'm here to help you learn! What specific part would you like to focus on?",
      "Let's break this down into smaller, manageable pieces.",
      "What do you already know about this topic?",
      "Can you tell me what you're trying to understand or accomplish?",
      "Let's start with the basics and build from there.",
      "What questions do you have about this?",
      "Let's approach this systematically. What's the first step?",
      "I'll guide you through this, but you'll do the thinking!",
      "What's your current understanding of this concept?"
    ];
    
    return this.getRandomResponse(generalResponses);
  }

  // Detection methods
  detectMathKeywords(input) {
    const keywords = ['solve', 'equation', 'calculate', 'math', 'algebra', 'geometry', 'problem', 'formula', 'number'];
    return keywords.some(keyword => input.includes(keyword));
  }

  detectReadingKeywords(input) {
    const keywords = ['read', 'text', 'passage', 'comprehension', 'understand', 'meaning', 'word'];
    return keywords.some(keyword => input.includes(keyword));
  }

  detectWritingKeywords(input) {
    const keywords = ['write', 'essay', 'paragraph', 'composition', 'draft', 'outline', 'structure'];
    return keywords.some(keyword => input.includes(keyword));
  }

  detectGrammarKeywords(input) {
    const keywords = ['grammar', 'sentence', 'tense', 'verb', 'noun', 'adjective', 'punctuation'];
    return keywords.some(keyword => input.includes(keyword));
  }

  detectVocabularyKeywords(input) {
    const keywords = ['word', 'meaning', 'definition', 'vocabulary', 'synonym', 'antonym'];
    return keywords.some(keyword => input.includes(keyword));
  }

  getRandomResponse(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
  }

  // Create similar math problems
  generateSimilarMathProblem(originalProblem) {
    const problemTypes = {
      algebra: [
        "Solve for x: 3x + 7 = 22",
        "Find the value of y: 2y - 5 = 11",
        "Solve: 4x + 12 = 28",
        "What is z if 5z - 8 = 17?"
      ],
      geometry: [
        "Find the area of a rectangle with length 8 cm and width 5 cm",
        "Calculate the perimeter of a square with side length 6 inches",
        "What is the area of a circle with radius 4 meters? (Use π ≈ 3.14)",
        "Find the volume of a cube with edge length 3 cm"
      ],
      arithmetic: [
        "What is 15% of 240?",
        "If a shirt costs $25 and is on sale for 20% off, what is the sale price?",
        "A recipe calls for 2.5 cups of flour. How much flour is needed for 3 batches?",
        "If you drive 60 miles per hour for 2.5 hours, how far do you travel?"
      ]
    };

    // Simple detection of problem type
    if (originalProblem.includes('x') || originalProblem.includes('y') || originalProblem.includes('=')) {
      return this.getRandomResponse(problemTypes.algebra);
    } else if (originalProblem.includes('area') || originalProblem.includes('perimeter') || originalProblem.includes('circle')) {
      return this.getRandomResponse(problemTypes.geometry);
    } else {
      return this.getRandomResponse(problemTypes.arithmetic);
    }
  }

  // Analyze text for learning opportunities
  analyzeText(text) {
    const analysis = {
      wordCount: text.split(' ').length,
      sentences: text.split(/[.!?]+/).length,
      paragraphs: text.split(/\n\s*\n/).length,
      difficultWords: this.findDifficultWords(text),
      mathContent: this.detectMathInText(text),
      readingLevel: this.estimateReadingLevel(text)
    };
    
    return analysis;
  }

  findDifficultWords(text) {
    const words = text.toLowerCase().match(/\b[a-z]{8,}\b/g) || [];
    const commonWords = new Set([
      'the', 'and', 'for', 'are', 'but', 'not', 'you', 'all', 'can', 'had', 'her', 'was', 'one', 'our', 'out', 'day', 'get', 'has', 'him', 'his', 'how', 'its', 'may', 'new', 'now', 'old', 'see', 'two', 'way', 'who', 'boy', 'did', 'man', 'men', 'put', 'say', 'she', 'too', 'use'
    ]);
    
    return words.filter(word => !commonWords.has(word)).slice(0, 5);
  }

  detectMathInText(text) {
    const mathPatterns = [
      /[0-9]+\s*[+\-*/=]\s*[0-9]+/,
      /\$[0-9]+/,
      /percent|%|fraction|decimal/,
      /solve|equation|calculate|formula/
    ];
    
    return mathPatterns.some(pattern => pattern.test(text.toLowerCase()));
  }

  estimateReadingLevel(text) {
    const words = text.split(' ');
    const sentences = text.split(/[.!?]+/);
    const avgWordsPerSentence = words.length / sentences.length;
    
    if (avgWordsPerSentence < 10) return 'Elementary';
    if (avgWordsPerSentence < 15) return 'Middle School';
    if (avgWordsPerSentence < 20) return 'High School';
    return 'Advanced';
  }
}

// Export for use in content script
if (typeof module !== 'undefined' && module.exports) {
  module.exports = FreeAIServices;
}
