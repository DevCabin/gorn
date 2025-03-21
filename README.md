# Gorn - AI Voice Assistant with Notion Integration

A powerful AI assistant that combines Claude's capabilities with Notion database integration, built with Next.js.

## Features

### Dual-Source Intelligence
- **Claude AI Integration**: Handles general queries and conversations using Claude's advanced capabilities
- **Notion Database Integration**: Searches and retrieves information from your Notion workspace
- **Smart Routing**: Automatically determines whether to query Notion or Claude based on the question type

### User Interface
- **Clean, Modern Design**: Built with Tailwind CSS for a responsive and beautiful interface
- **Real-time Feedback**: Loading states and clear source attribution for responses
- **Rich Notion Results**: Clickable links to Notion pages with preview content
- **Message History**: Maintains conversation context with clear visual distinction between sources

## Technical Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **AI**: Anthropic Claude API (claude-3-opus-20240229)
- **Database**: Notion API
- **Deployment**: Vercel

## Quick Start

1. **Clone the Repository**
   ```bash
   git clone https://github.com/yourusername/gorn.git
   cd gorn
   ```

2. **Set Up Environment Variables**
   Create a `.env.local` file with:
   ```env
   CLAUDE_API_KEY=your-claude-api-key
   NOTION_API_KEY=your-notion-api-key
   NOTION_DATABASE_ID=your-database-id
   ```

3. **Deploy to Vercel**
   - Connect your GitHub repository to Vercel
   - Add the environment variables in Vercel's project settings
   - Deploy!

## Usage

### Querying Notion
Use keywords like:
- "find"
- "search"
- "look up"
- "document"
- "page"

Example: "find documents about project planning"

### General Questions
Simply ask your question normally, and Claude will respond.
Example: "What are the best practices for TypeScript?"

## Development

### Prerequisites
- Node.js 18+
- npm or yarn
- Notion API access
- Claude API access

### Environment Setup
1. Get your API keys:
   - Claude API key from [Anthropic](https://console.anthropic.com/)
   - Notion API key from [Notion Developers](https://developers.notion.com/)
   - Notion database ID from your Notion workspace

2. Configure your Notion database with these properties:
   - `title`: Title of the page
   - `content`: Main content field

### Deployment
The project is optimized for Vercel deployment:
- Zero configuration needed
- Automatic environment variable handling
- Edge function support

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Powered by [Claude](https://www.anthropic.com/claude)
- Integrated with [Notion](https://developers.notion.com/)
