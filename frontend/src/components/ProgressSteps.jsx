const steps = [
  "Analyzing Website",
  "Extracting Components",
  "Understanding Workflows",
  "Generating React Native Screens",
  "Building Preview",
];

export default function ProgressSteps() {
  return (
    <div className="bg-slate-900 rounded-2xl p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Conversion Progress
      </h2>

      <div className="space-y-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className="flex items-center gap-3"
          >
            <div className="w-4 h-4 rounded-full bg-green-500" />
            <p>{step}</p>
          </div>
        ))}
      </div>
    </div>
  );
}