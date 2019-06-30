import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import marked from 'marked';

const MarkdownPreviewer = () => {
  const [input, setInput] = React.useState(`
# Heading One
## This is heading number two!
### Link
[freeCodeCamp](https://freecodecamp.org)
### Inline Code
\`console.log('Nice')\`
### Code Block
\`\`\`
  npm install
\`\`\`
### List
1. Item 1
1. Item 2
### Quote
>This is a block quote.
### Image
![Markdown Logo](https://markdown-here.com/img/icon32.png)
### Bold Text
**Bolded**`);

  const handleChange = event => setInput(event.target.value);

  return (
    <>
      <h1 id="title">Markdown Previewer</h1>

      <div id="container">
        <div id="input">
          <h2 className="centeroo">Input</h2>
          <hr /> <br />
          <textarea id="editor" onChange={handleChange}>
            {input}
          </textarea>
        </div>

        <div id="output">
          <h2 className="centeroo">Output</h2>
          <hr /> <br />
          <div
            id="preview"
            dangerouslySetInnerHTML={{ __html: marked(input) }}
          />
        </div>
      </div>
    </>
  );
};

marked.setOptions({ breaks: true });
ReactDOM.render(<MarkdownPreviewer />, document.getElementById('root'));
