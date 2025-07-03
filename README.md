# Markdown Previewer

A React-based Markdown Previewer that allows you to write markdown in real-time and see the rendered HTML preview. This project was built as part of the FreeCodeCamp Front End Development Libraries certification.

## Features

- **Real-time Preview**: See your markdown rendered as HTML as you type
- **GitHub Flavored Markdown**: Supports extended markdown features like tables, strikethrough, and more
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, modern interface with gradient background and smooth animations
- **Default Content**: Comes with sample markdown content demonstrating various markdown features

## User Stories Implemented

✅ **User Story #1**: I can see a textarea element with a corresponding id="editor"

✅ **User Story #2**: I can see an element with a corresponding id="preview"

✅ **User Story #3**: When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea

✅ **User Story #4**: When I enter GitHub flavored markdown into the #editor element, the text is rendered as HTML in the #preview element as I type

✅ **User Story #5**: When my markdown previewer first loads, the default text in the #editor field contains valid markdown that represents at least one of each of the following elements:
- Heading element (H1 size)
- Sub heading element (H2 size)
- Link
- Inline code
- Code block
- List item
- Blockquote
- Image
- Bolded text

✅ **User Story #6**: When my markdown previewer first loads, the default markdown in the #editor field is rendered as HTML in the #preview element

✅ **Bonus**: My markdown previewer interprets carriage returns and renders them as br (line break) elements

## Technologies Used

- **React 17**: Frontend framework
- **Marked**: Markdown parser library
- **Bootstrap 5**: CSS framework for responsive design
- **CSS3**: Custom styling with modern features

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd markdown-previewer
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Available Scripts

- `npm start`: Runs the app in development mode
- `npm build`: Builds the app for production
- `npm test`: Launches the test runner
- `npm eject`: Ejects from Create React App (not recommended)

## Project Structure

```
markdown-previewer/
├── public/
│   └── index.html          # Main HTML file with test script
├── src/
│   ├── App.js              # Main React component
│   ├── App.css             # Component-specific styles
│   ├── index.js            # React entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies and scripts
└── README.md               # Project documentation
```

## Features in Detail

### Markdown Support

The app supports the following markdown features:
- **Headers**: `# H1`, `## H2`, `### H3`, etc.
- **Emphasis**: `**bold**`, `*italic*`, `~~strikethrough~~`
- **Links**: `[text](url)`
- **Images**: `![alt text](image-url)`
- **Code**: `` `inline code` `` and code blocks
- **Lists**: Ordered and unordered lists
- **Blockquotes**: `> quoted text`
- **Tables**: GitHub-flavored markdown tables
- **Line breaks**: Automatic conversion of carriage returns to `<br>` tags

### UI/UX Features

- **Split Layout**: Editor and preview side by side
- **Real-time Updates**: Changes reflect immediately
- **Responsive Design**: Adapts to different screen sizes
- **Modern Styling**: Gradient background, shadows, and smooth transitions
- **Syntax Highlighting**: Code blocks are styled for better readability
- **Custom Scrollbars**: Styled scrollbars for better visual appeal

## Testing

The project includes the FreeCodeCamp test suite. The test script is loaded from the CDN and will automatically run when you open the application in a browser.

## Deployment

To build the project for production:

```bash
npm run build
```

This creates a `build` folder with optimized production files that can be deployed to any static hosting service.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgments

- FreeCodeCamp for providing the project requirements
- The Marked library for markdown parsing
- Bootstrap for the responsive grid system 