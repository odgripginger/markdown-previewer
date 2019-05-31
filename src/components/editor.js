import React from "react";
const Editor = props => {
  return (
    <div>
      <textarea id="editor" rows="20" cols="50" onChange={props.onChange}>
        {props.markdown}
      </textarea>
    </div>
  );
};

export default Editor;
