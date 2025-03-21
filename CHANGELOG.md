# Changelog

## [0.2.0] - 2024-03-21

### Changed
- Simplified application to basic chat functionality
- Removed custom Babel configuration
- Removed Notion integration for initial release
- Streamlined dependencies to essential packages
- Simplified UI to focus on core chat functionality

### Fixed
- Resolved build issues by removing complex configurations
- Fixed deployment issues with Babel dependencies

## [0.1.0] - 2024-03-19

### Added
- Initial project setup
- Basic chat interface
- Claude AI integration
- Notion integration (removed in 0.2.0)
- Tailwind CSS styling

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