import React, { Component } from "react";
import ReactDOM from "react-dom";
import Editor from "./components/editor.js";
import "./index.css";
import Preview from "./components/preview.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: PLACEHOLDER
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }
  render() {
    return (
      <div id="mainBox">
        <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        <Preview markdown={this.state.markdown} />
      </div>
    );
  }
}

const PLACEHOLDER = `# Welcome to React Markdown Previewer!

## This is a sub-heading
### sub-sub-heading:
  
Code between 2backticks, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:
function hello(){
  console.log('hello world');
}
\`\`\`
  
Bold -> **bold**
Italid -> _italic_
Both -> **_Italic and Bold_**
strikethrough -> ~~Striked off~~.

A link -> [links](https://www.freecodecamp.com), and
blockquotes ->  
  >random quote!



1. Ordered
1. List
1. Tree
- Unordered lists.
* Ipsum Lorem

Embedded images:

![React Logo w/ Text](https://goo.gl/Umyytc)
`;
ReactDOM.render(<App />, document.getElementById("root"));
