# Gorn - AI Voice Assistant

A voice chat interface for Claude AI, built with Next.js and Web Speech API.

## Current Status

Version 1 is in active development. The application is being optimized for deployment on Vercel.

### Core Features Implemented
- Browser-based speech recognition using Web Speech API
- Text-to-speech using Web Speech Synthesis API
- Direct integration with Claude AI (claude-3-opus-20240229)
- Clean, responsive UI with Tailwind CSS

### Todo List
1. Fix deployment issues:
   - Resolve regeneratorRuntime errors
   - Optimize build configuration
2. Add error handling:
   - Browser compatibility checks
   - Graceful fallbacks for speech recognition
3. Implement features:
   - Message history persistence
   - Voice settings configuration
   - Loading states and feedback
4. Future enhancements:
   - Notion integration
   - Context management
   - Voice customization

## Technical Stack

- Frontend: Next.js 14
- Styling: Tailwind CSS
- Voice: Web Speech API (native browser APIs)
- AI: Anthropic Claude API
- Deployment: Vercel

## Dependencies

- @anthropic-ai/sdk: ^0.39.0
- next: ^14.1.0
- react: ^18.2.0
- react-dom: ^18.2.0
- tailwindcss: ^3.3.0

## Environment Variables Required

```env
CLAUDE_API_KEY=your-api-key
```

## Quick Start

1. Fork or clone the repository
2. Connect your repository to Vercel
3. Add your environment variables
4. Deploy

## Development

This project is designed for direct Vercel deployment. Local development requires:

```bash
npm install
npm run dev
```

## Known Issues

1. Build optimization in progress for Vercel deployment
2. TypeScript definitions being resolved
3. Client-side only features need proper SSR handling
