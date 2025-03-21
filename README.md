# Gorn - AI Chat Assistant

A streamlined chat interface powered by Claude AI.

## Features

- Clean, minimal chat interface
- Real-time responses from Claude AI
- Modern UI with Tailwind CSS
- TypeScript for type safety
- Built with Next.js 14

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- A Claude API key from Anthropic

### Installation

1. Clone the repository:
```bash
git clone https://github.com/DevCabin/gorn.git
cd gorn
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file in the root directory and add your API key:
```env
CLAUDE_API_KEY=your-claude-api-key
```

### Development

Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Building for Production

```bash
npm run build
```

## Deployment

The application is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Import the repository in Vercel
3. Add your `CLAUDE_API_KEY` in the environment variables
4. Deploy

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [Claude AI](https://anthropic.com/) - AI model
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## License

This project is licensed under the MIT License.
