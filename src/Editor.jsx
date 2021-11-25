import React, { useState, useEffect } from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "./Editor.css";
import { EditorState } from "draft-js";
import { convertToHTML, convertFromHTML } from "draft-convert";

function TextEditor(props) {
  const { value, setValue } = props;

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  useEffect(() => {
    setEditorState(EditorState.createWithContent(convertFromHTML(value || "")));
  }, [value]);

  const handleBlurEditor = () => {
    setValue(convertToHTML(editorState.getCurrentContent()));
  };

  return (
    <>
      <Editor
        editorState={editorState}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        onBlur={handleBlurEditor}
        onEditorStateChange={setEditorState}
        placeholder="Nhập mô tả nội dung..."
      />
    </>
  );
}

export default TextEditor;
