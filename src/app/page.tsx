"use client";

import CodeEditor from "@/components/CodeEditor";
import ThreeCanvas from "@/components/ThreeCanvas";
import { useState } from "react";

export default function Home() {
  const [consoleText, setConsoleText] = useState<string>("Console");

  const updateConsoleText = (e: string) => {
    setConsoleText(`${consoleText}\n${e}`);
  };

  return (
    <div className="flex flex-col h-screen">
      <div className="p-2">CadQuery Studio</div>
      <div className="flex-1 flex flex-row">
        <div className="w-1/2 bg-gray-800">
          <CodeEditor updateConsoleText={updateConsoleText} />
        </div>
        <div className="w-1/2 p-2 bg-gray-600">
          <ThreeCanvas />
        </div>
      </div>
      <div className="p-2 h-24 bg-gray-900">
        <pre>{consoleText}</pre>
      </div>
    </div>
  );
}
