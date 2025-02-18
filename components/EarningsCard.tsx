"use client";
import { useState } from "react";

export function EarningsCard() {
  const [earnings, setEarnings] = useState(2.5); // Example earnings in ETH

  return (
    <div className="bg-white p-4 shadow-md rounded-xl">
      <h2 className="text-xl font-semibold">💰 Earnings</h2>
      <p className="text-2xl font-bold mt-2">{earnings} ETH</p>
      <button className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg">
        Withdraw
      </button>
    </div>
  );
}
