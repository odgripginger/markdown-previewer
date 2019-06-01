import React, { Component } from "react";
import marked from "marked";

marked.setOptions({ breaks: true });

const renderer = new marked.Renderer();
renderer.link = function(href, title, text) {
  return `<a target="_blank" href="${href}">${text}` + "</a>";
};
export default class Preview extends Component {
  render() {
    const output = this.props.markdown;
    return (
      <div id="previewBox">
        <div className="toolbar">
          <h3>Preview</h3>
        </div>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: marked(output, { renderer }) }}
        />
      </div>
    );
  }
}
