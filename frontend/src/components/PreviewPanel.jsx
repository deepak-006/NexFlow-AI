export default function PreviewPanel() {
  return (
    <div className="bg-slate-900 p-6 rounded-2xl">
      <h2 className="text-2xl font-semibold mb-4">
        Mobile Preview
      </h2>

      <div className="w-[260px] h-[520px] bg-black rounded-[40px] border-8 border-slate-700 mx-auto overflow-hidden">
        <div className="bg-white text-black h-full p-4">
          <h1 className="text-xl font-bold">
            Demo Shop
          </h1>

          <div className="mt-4 space-y-3">
            <div className="bg-gray-200 h-24 rounded-xl" />
            <div className="bg-gray-200 h-24 rounded-xl" />
            <div className="bg-gray-200 h-24 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}