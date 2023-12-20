import { useState } from "react";

const Editor = require("@monaco-editor/react").default;

export default function CodeEditorComponent() {

  const [code , setCode] = useState("// Type your code here");
  function handleEditorChange(value, event) {
    setCode(value)
  }

  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco);
  }

  function handleEditorWillMount(monaco) {
    // monaco.languages.
  }

  function handleEditorValidation(markers) {}

  return (
    <div className="rounded-lg flex flex-col">
      <div className="flex h-fit justify-between px-2 py-2 text-sky-400 bg-slate-800 rounded-tl-lg rounded-tr-lg">
        <div className="flex gap-2 items-center">
          <div>Java</div>
          <div>Auto</div>
        </div>
        <div className="flex gap-2 items-center">
          <div>Bookmark</div>
          <div>Reset</div>
        </div>
      </div>
      <div className="">
        <Editor
          height="40vh"
          defaultLanguage="java"
          defaultValue="some comment"
          value={code}
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          onValidate={handleEditorValidation}
        />
      </div>
      <div className="flex h-fit justify-between px-2 py-2 text-sky-400 bg-slate-800 rounded-bl-lg rounded-br-lg">
      </div>
    </div>
  );
}
