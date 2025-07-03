import React, { useState } from 'react';
import { marked } from 'marked';
import './App.css';

function App() {
  const defaultMarkdown = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here's some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And ~~feel free to go crazy~~ crossing the text.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

  const [markdown, setMarkdown] = useState(defaultMarkdown);

  const handleChange = (e) => {
    setMarkdown(e.target.value);
  };

  // Configure marked to handle line breaks
  marked.setOptions({
    breaks: true,
    gfm: true
  });

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <div className="editor-container">
              <h3 className="section-title">Editor</h3>
              <textarea
                id="editor"
                value={markdown}
                onChange={handleChange}
                className="form-control"
                rows="20"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="preview-container">
              <h3 className="section-title">Preview</h3>
              <div
                id="preview"
                className="preview-content"
                dangerouslySetInnerHTML={{ __html: marked(markdown) }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App; 