export default function AnalysisPanel() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">
        Extracted Components
      </h2>

      <div className="space-y-3">
        <div className="bg-slate-800 p-4 rounded-xl">
          Navbar
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          Product Cards
        </div>

        <div className="bg-slate-800 p-4 rounded-xl">
          Checkout Flow
        </div>
      </div>
    </div>
  );
}