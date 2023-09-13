import CodeEditor from "@/components/CodeEditor";
import ThreeCanvas from "@/components/ThreeCanvas";

export default function Home() {
  return (
    <div className="flex flex-col h-screen">
      <div className="p-2">CadQuery Studio</div>
      <div className="flex-1 flex flex-row">
        <div className="w-1/2 bg-gray-800">
          <CodeEditor />
        </div>
        <div className="w-1/2 p-2 bg-gray-600">
          <ThreeCanvas />
        </div>
      </div>
      <div className="p-2 h-24 bg-gray-900">Console</div>
    </div>
  );
}
