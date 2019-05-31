import React, { Component } from "react";
import ReactDOM from "react-dom";
import Editor from "./components/editor.js";
import "./index.css";
import Preview from "./components/preview.js";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: ""
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    this.setState({ markdown: e.target.value });
  }
  render() {
    return (
      <div>
        <Editor markdown={this.state.markdown} onChange={this.handleChange} />
        <Preview id="previewBox" markdown={this.state.markdown} />
      </div>
    );
  }
}
ReactDOM.render(<App />, document.getElementById("root"));
