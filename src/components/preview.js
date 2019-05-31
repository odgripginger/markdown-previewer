import React, { Component } from "react";
import marked from "marked";

const renderer = new marked.Renderer();
export default class Preview extends Component {
  render() {
    const output = this.props.markdown;
    return (
      <div dangerouslySetInnerHTML={{ __html: marked(output, { renderer }) }} />
    );
  }
}
