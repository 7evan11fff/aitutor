# AI Tutor Assistant - Browser Extension

A comprehensive browser extension that provides intelligent, step-by-step tutoring for math, reading, writing, grammar, and vocabulary. The extension never gives direct answers but instead guides students to discover solutions themselves.

## Features

### 🎯 Core Learning Support
- **Math Support**: Generates similar example problems with different numbers and walks through step-by-step solutions
- **Reading Support**: Analyzes selected text and provides comprehension guidance without giving direct answers
- **Writing Support**: Offers structural advice and brainstorming prompts without correcting grammar/spelling
- **Grammar Support**: Explains grammar rules and concepts without rewriting student text
- **Vocabulary Support**: Provides hints, synonyms, and context clues to help students infer meanings

### 🚀 Key Features
- **Floating "I Need Help" Button**: Always accessible on any webpage
- **Smart Context Detection**: Automatically detects math, reading, or writing content
- **Text Selection Support**: Click and drag to select text for analysis
- **Step-by-Step Guidance**: Never gives direct answers, always teaches the process
- **Clean, Modern UI**: Minimal, draggable widget with responsive design
- **Free AI Integration**: Uses built-in intelligent responses - no API keys needed!

## Installation

### Prerequisites
- Google Chrome browser
- **No API key required!** This extension works completely offline with built-in intelligent responses.

### Setup Instructions

1. **Download the Extension**
   ```bash
   git clone <repository-url>
   cd Alpha-tutor
   ```

2. **Load in Chrome**
   - Open Chrome and go to `chrome://extensions/`
   - Enable "Developer mode" (toggle in top right)
   - Click "Load unpacked"
   - Select the `Alpha-tutor` folder

3. **Start Learning Immediately**
   - No configuration needed!
   - The extension works completely offline
   - Built-in intelligent responses guide you step by step

4. **Start Learning!**
   - Navigate to any educational website
   - Click the "I Need Help" floating button
   - Select text or ask questions to get step-by-step guidance

## Usage Examples

### Math Problems
1. Visit a math website (e.g., Khan Academy, Mathway)
2. Click "I Need Help" when you see a problem
3. Ask: "I need help with this algebra problem"
4. The AI will create a similar example and walk you through it step by step

### Reading Comprehension
1. Select text from an article or passage
2. Click "I Need Help"
3. Ask: "Can you help me understand this passage?"
4. Get guided questions and reading strategies

### Writing Assistance
1. Click "I Need Help" while writing
2. Ask: "How can I improve my essay structure?"
3. Receive brainstorming prompts and organizational advice

### Grammar Help
1. Select a sentence or paragraph
2. Ask: "What grammar rules apply here?"
3. Get explanations of tenses, parts of speech, etc.

### Vocabulary Building
1. Select a word you don't know
2. Ask: "What does this word mean?"
3. Receive hints and context clues instead of direct definitions

## File Structure

```
Alpha-tutor/
├── manifest.json          # Extension configuration
├── background.js          # Service worker for extension management
├── popup.html            # Extension popup interface
├── popup.css             # Popup styling
├── popup.js              # Popup functionality
├── content.js            # Main content script
├── content.css           # Content script styling
├── ai-modules.js         # AI integration and subject-specific modules
├── icons/                # Extension icons (16px, 48px, 128px)
└── README.md             # This file
```

## Technical Details

### Architecture
- **Manifest V3**: Uses the latest Chrome extension standard
- **Content Scripts**: Inject into all web pages for universal access
- **Modular Design**: Separate modules for different subjects
- **AI Integration**: OpenAI GPT-3.5-turbo for intelligent responses

### Key Components

#### Content Script (`content.js`)
- Detects page context (math, reading, writing)
- Manages floating button and widget
- Handles text selection
- Routes requests to appropriate AI modules

#### AI Modules (`ai-modules.js`)
- Subject-specific response generation
- Context-aware prompting
- Learning-focused responses (never direct answers)

#### Popup Interface (`popup.html/js/css`)
- API key management
- Extension status monitoring
- Feature overview and instructions

### Security & Privacy
- API key stored locally in Chrome storage
- No data collection or tracking
- All AI requests go directly to OpenAI
- No intermediate servers

## Customization

### Adding New Subjects
1. Add detection logic in `detectPageContext()`
2. Create new handler in `ai-modules.js`
3. Add routing logic in `processUserRequest()`

### Styling
- Modify `content.css` for widget appearance
- Update `popup.css` for popup styling
- All styles use CSS custom properties for easy theming

### AI Behavior
- Edit prompts in `ai-modules.js` to change AI behavior
- Modify `buildPrompt()` in `content.js` for general responses

## Troubleshooting

### Common Issues

**Extension not working:**
- Check if API key is set correctly
- Verify internet connection
- Try refreshing the page

**AI not responding:**
- Verify API key is valid and has credits
- Check browser console for errors
- Ensure OpenAI API is accessible

**Widget not appearing:**
- Check if content script is loaded
- Try refreshing the page
- Verify extension is enabled

### Debug Mode
1. Open Chrome DevTools (F12)
2. Go to Console tab
3. Look for AI Tutor messages
4. Check for any error messages

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
1. Check the troubleshooting section
2. Open an issue on GitHub
3. Contact the development team

---

**Remember**: This extension is designed to teach, not to give answers. It will guide you step by step to help you learn and understand concepts on your own!
