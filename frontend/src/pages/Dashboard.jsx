import UrlInput from "../components/UrlInput";
import ProgressSteps from "../components/ProgressSteps";
import AnalysisPanel from "../components/AnalysisPanel";
import PreviewPanel from "../components/PreviewPanel";

// src/pages/Dashboard.jsx

import { useState } from "react";
import {
  Globe,
  WandSparkles,
  Smartphone,
  Code2,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

const steps = [
  "Analyzing Website",
  "Detecting Components",
  "Understanding Workflows",
  "Generating React Native Screens",
  "Building Expo Preview",
];

export default function Dashboard() {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(-1);
  const [completed, setCompleted] = useState(false);

  const startConversion = async () => {
    setLoading(true);
    setCompleted(false);
    setCurrentStep(0);

    for (let i = 0; i < steps.length; i++) {
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setCurrentStep(i);
    }

    setLoading(false);
    setCompleted(true);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">
              AI Mobile App Generator
            </h1>

            <p className="text-slate-400 mt-1">
              Convert websites into native mobile apps using AI
            </p>
          </div>

          <div className="bg-purple-500/10 border border-purple-500/30 px-4 py-2 rounded-xl text-purple-300">
            Hackathon MVP
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        {/* URL INPUT */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 shadow-2xl">
          <div className="flex items-center gap-3 mb-5">
            <Globe className="text-purple-400" />
            <h2 className="text-xl font-semibold">
              Website URL
            </h2>
          </div>

          <div className="flex flex-col lg:flex-row gap-4">
            <input
              type="text"
              placeholder="https://shop-demo.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 bg-slate-950 border border-slate-700 rounded-2xl px-5 py-4 outline-none focus:border-purple-500"
            />

            <button
              onClick={startConversion}
              disabled={loading}
              className="bg-purple-600 hover:bg-purple-500 transition-all px-8 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <LoaderCircle className="animate-spin" />
                  Converting...
                </>
              ) : (
                <>
                  <WandSparkles size={18} />
                  Convert Website
                </>
              )}
            </button>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          {/* LEFT SIDE */}
          <div className="space-y-6">
            {/* Progress */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold mb-6">
                AI Conversion Progress
              </h2>

              <div className="space-y-5">
                {steps.map((step, index) => {
                  const active = currentStep === index;
                  const done = currentStep > index || completed;

                  return (
                    <div
                      key={index}
                      className="flex items-center gap-4"
                    >
                      {done ? (
                        <CheckCircle2 className="text-green-400" />
                      ) : active ? (
                        <LoaderCircle className="animate-spin text-purple-400" />
                      ) : (
                        <div className="w-5 h-5 rounded-full border border-slate-600" />
                      )}

                      <p
                        className={`${
                          done
                            ? "text-green-300"
                            : active
                            ? "text-white"
                            : "text-slate-500"
                        }`}
                      >
                        {step}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Extracted Components */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <h2 className="text-2xl font-semibold mb-6">
                Extracted Components
              </h2>

              <div className="grid grid-cols-2 gap-4">
                {[
                  "Navbar",
                  "Hero Banner",
                  "Product Grid",
                  "Product Cards",
                  "Cart System",
                  "Checkout Flow",
                  "Authentication",
                  "Footer",
                ].map((item, index) => (
                  <div
                    key={index}
                    className="bg-slate-950 border border-slate-800 rounded-2xl p-4 text-slate-300"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* Generated Code */}
            <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
              <div className="flex items-center gap-3 mb-5">
                <Code2 className="text-purple-400" />
                <h2 className="text-2xl font-semibold">
                  Generated React Native Code
                </h2>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-5 font-mono text-sm text-green-400 overflow-auto">
                <pre>{`<BottomTabs />

<HomeScreen />

<ProductCard />

<CartScreen />

<CheckoutScreen />

<LoginScreen />`}</pre>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6">
            <div className="flex items-center gap-3 mb-6">
              <Smartphone className="text-purple-400" />

              <h2 className="text-2xl font-semibold">
                Mobile Preview
              </h2>
            </div>

            <div className="flex justify-center">
              <div className="w-[300px] h-[620px] bg-black rounded-[45px] border-[10px] border-slate-700 overflow-hidden shadow-2xl">
                <div className="bg-white h-full text-black">
                  {/* App Header */}
                  <div className="bg-purple-600 text-white px-5 py-4">
                    <h1 className="text-xl font-bold">
                      Demo Shop
                    </h1>

                    <p className="text-sm opacity-80">
                      AI Generated App
                    </p>
                  </div>

                  {/* Search */}
                  <div className="p-4">
                    <div className="bg-gray-100 rounded-xl px-4 py-3 text-gray-400">
                      Search products...
                    </div>
                  </div>

                  {/* Product Cards */}
                  <div className="px-4 space-y-4">
                    {[1, 2, 3].map((item) => (
                      <div
                        key={item}
                        className="bg-gray-100 rounded-2xl p-3"
                      >
                        <div className="bg-gray-300 h-32 rounded-xl mb-3" />

                        <div className="h-4 bg-gray-300 rounded w-3/4 mb-2" />

                        <div className="h-4 bg-gray-200 rounded w-1/2 mb-3" />

                        <div className="bg-purple-600 text-white text-center py-2 rounded-xl">
                          Add to Cart
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Info */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <p className="text-slate-400 text-sm">
                  Screens Generated
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  12
                </h3>
              </div>

              <div className="bg-slate-950 border border-slate-800 rounded-2xl p-4">
                <p className="text-slate-400 text-sm">
                  Components Detected
                </p>

                <h3 className="text-3xl font-bold mt-2">
                  28
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}