"use client";

import { Editor } from "@monaco-editor/react";

export default function CodeEditor() {
  return (
    <Editor
      defaultLanguage="python"
      theme="vs-dark"
      options={{
        minimap: {
          enabled: false,
        },
      }}
    />
  );
}
