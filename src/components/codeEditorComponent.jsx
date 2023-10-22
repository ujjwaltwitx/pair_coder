const Editor = require("@monaco-editor/react").default;
export default function CodeEditorComponent() {
  function handleEditorChange(value, event) {}

  function handleEditorDidMount(editor, monaco) {
    console.log("onMount: the editor instance:", editor);
    console.log("onMount: the monaco instance:", monaco);
  }

  function handleEditorWillMount(monaco) {
    console.log("beforeMount: the monaco instance:", monaco);
  }

  function handleEditorValidation(markers) {}

  return (
    <div className="h-full m-3 rounded-lg bg-slate-700 flex-col">
      <div className="header h-fit flex justify-between px-2 py-2 text-sky-400 bg-slate-800 rounded-tl-lg rounded-tr-lg">
        <div className="flex gap-2 items-center">
          <div>Java</div>
          <div>Auto</div>
        </div>
        <div className="flex gap-2 items-center">
          <div>Bookmark</div>
          <div>Reset</div>
        </div>
      </div>
      <div className="basis-1 grow">
        <Editor
          defaultLanguage="python"
          defaultValue="// some comment"
          onChange={handleEditorChange}
          onMount={handleEditorDidMount}
          beforeMount={handleEditorWillMount}
          onValidate={handleEditorValidation}
        />
      </div>
    </div>
  );
}
