"use client";

import { Editor } from "@monaco-editor/react";
import { useState } from "react";
import { MdPlayCircleOutline, MdClear } from "react-icons/md";

export default function CodeEditor({
  updateConsoleText,
}: {
  updateConsoleText: (updateConsoleText: string) => void;
}) {
  // const [consoleText, setConsoleText] = useState<string>("Console");

  const initialCode =
    'import cadquery as cq\n\nresult = cq.Workplane("XY").box(2, 2, 2)';

  const [code, setCode] = useState(initialCode);

  const runCode = () => {
    console.log("inside the runCode");
    updateConsoleText("inside the runCode");
  };

  const clearCode = () => {
    console.log("inside the clearCode");
    updateConsoleText("inside the clearCode");
    setCode("");
  };
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <Editor
          defaultLanguage="python"
          value={code}
          theme="vs-dark"
          options={{
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
      <div className="flex flex-row bg-gray-800 p-2 w-full">
        <button
          className="text-2xl space-x-3 mr-2 font-semibold rounded-sm ring-1 ring-gray-600 px-6 py-2 hover:bg-gray-600  hover:text-white hover:ring-slate-300"
          type="button"
          onClick={() => {
            runCode();
          }}
        >
          <MdPlayCircleOutline />
        </button>
        <button
          className="text-2xl space-x-3 mr-2 font-semibold rounded-sm ring-1 ring-gray-600 px-6 py-2 hover:bg-gray-600  hover:text-white hover:ring-slate-300"
          type="button"
          onClick={() => {
            clearCode();
          }}
        >
          <MdClear />
        </button>
      </div>
    </div>
  );
}
