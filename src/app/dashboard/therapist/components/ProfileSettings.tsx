"use client";
import { useState } from "react";

export function ProfileSettings() {
  const [availability, setAvailability] = useState(true);

  return (
    <div className="bg-white p-4 shadow-md rounded-xl mt-4">
      <h2 className="text-xl font-semibold">⚙️ Profile & Settings</h2>
      <div className="mt-3 flex items-center justify-between">
        <span>🟢 Available for new sessions</span>
        <button
          onClick={() => setAvailability(!availability)}
          className={`px-3 py-1 rounded-lg ${
            availability ? "bg-green-500" : "bg-gray-500"
          } text-white`}
        >
          {availability ? "Yes" : "No"}
        </button>
      </div>
    </div>
  );
}
