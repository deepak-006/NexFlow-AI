import { useState } from "react";
import axios from "axios";

export default function UrlInput() {
  const [url, setUrl] = useState("");

  const handleConvert = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/analyze",
        { url }
      );

      console.log(response.data);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-slate-900 p-6 rounded-2xl shadow-xl">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter website URL..."
          className="flex-1 p-4 rounded-xl bg-slate-800 border border-slate-700"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />

        <button
          onClick={handleConvert}
          className="px-6 py-4 bg-blue-600 rounded-xl hover:bg-blue-500"
        >
          Convert
        </button>
      </div>
    </div>
  );
}