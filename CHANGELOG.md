# Changelog

## [0.2.0] - 2024-03-19

### Added
- Notion database integration with smart query routing
- Automatic source detection between Claude and Notion
- Rich Notion results display with clickable links
- Loading states and improved error handling
- Source attribution for responses
- Comprehensive documentation and comments

### Changed
- Removed Web Speech API integration (simplified for core functionality)
- Updated UI for better response visualization
- Improved error handling and feedback
- Enhanced TypeScript type definitions

### Technical Updates
- Added @anthropic-ai/sdk for Claude integration
- Configured Notion API integration
- Updated environment variable handling
- Optimized Vercel deployment settings

## [0.1.0] - 2024-03-12

### Added
- Initial project setup with Next.js 14, TypeScript, and Tailwind CSS
- Voice interface implementation using Web Speech API
- ChatGPT integration with OpenAI API
- Notion integration with database support
- Global type definitions for Web Speech API
- Vercel deployment configuration

### Technical Setup
- Configured TypeScript with proper type definitions
- Added core dependencies:
  - @notionhq/client: ^2.2.14
  - openai: ^4.28.0
  - next-auth: ^4.24.6
  - zod: ^3.22.4
- Set up environment variables for API keys
- Configured Vercel deployment settings

### Features
- One-click voice activation
- Real-time speech-to-text transcription
- Automatic text-to-speech responses
- Notion database integration
- Chat history display
- Dark mode UI

### Development Notes
- No local build requirements
- Direct Vercel deployment
- TypeScript strict mode enabled
- Web Speech API types defined globally

### Environment Variables Required
- OPENAI_API_KEY
- NOTION_API_KEY
- NOTION_DATABASE_ID

### Known Issues
- TypeScript warnings for Web Speech API (handled by skipLibCheck)
- React type definitions need to be properly imported 