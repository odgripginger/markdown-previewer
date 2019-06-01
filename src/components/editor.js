import React from "react";
const Editor = props => {
  return (
    <div id="editBox">
      <div className="toolbar">
        <h3>Editor</h3>
      </div>
      <textarea
        id="editor"
        rows="20"
        cols="50"
        value={props.markdown}
        onChange={props.onChange}
      />
    </div>
  );
};

export default Editor;
