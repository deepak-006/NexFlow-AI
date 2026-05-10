import UrlInput from "../components/UrlInput";
import ProgressSteps from "../components/ProgressSteps";
import AnalysisPanel from "../components/AnalysisPanel";
import PreviewPanel from "../components/PreviewPanel";

export default function Dashboard() {
  return (
    <div className="min-h-screen p-8 bg-slate-950 text-white">
      <h1 className="text-4xl font-bold mb-6">
        AI Website → Mobile App Generator
      </h1>

      <UrlInput />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
        <AnalysisPanel />
        <PreviewPanel />
      </div>

      <div className="mt-8">
        <ProgressSteps />
      </div>
    </div>
  );
}