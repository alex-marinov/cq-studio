"use client";

import { Editor } from "@monaco-editor/react";
import { MdPlayCircleOutline, MdClear } from "react-icons/md";

export default function CodeEditor() {
  return (
    <div className="h-full flex flex-col">
      <div className="flex-1">
        <Editor
          defaultLanguage="python"
          theme="vs-dark"
          options={{
            minimap: {
              enabled: false,
            },
          }}
        />
      </div>
      <div className="flex flex-row bg-gray-800 p-2 w-full">
        <button className="text-2xl space-x-3 mr-2 font-semibold rounded-sm ring-1 ring-gray-600 px-6 py-2 hover:bg-gray-600  hover:text-white hover:ring-slate-300">
          <MdPlayCircleOutline />
        </button>
        <button className="text-2xl space-x-3 mr-2 font-semibold rounded-sm ring-1 ring-gray-600 px-6 py-2 hover:bg-gray-600  hover:text-white hover:ring-slate-300">
          <MdClear />
        </button>
      </div>
    </div>
  );
}
