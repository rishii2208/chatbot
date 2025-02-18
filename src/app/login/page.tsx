"use client";
import React, { useState } from "react";
import Web3 from "web3";

export default function Login() {
  const [role, setRole] = useState<"User" | "Therapist" | null>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // MetaMask Login
  const handleMetaMaskLogin = async () => {
    if (window.ethereum) {
      try {
        const web3 = new Web3(window.ethereum);
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const accounts = await web3.eth.getAccounts();
        alert(`Logged in with MetaMask as ${accounts[0]}`);
      } catch (error) {
        console.error("MetaMask login failed", error);
      }
    } else {
      alert("Please install MetaMask.");
    }
  };

  // Standard Login
  const handleStandardLogin = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Logged in as ${role} with email: ${email}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-4">Login</h1>

      {/* Role Selection */}
      {!role ? (
        <div className="space-y-4">
          <button
            onClick={() => setRole("User")}
            className="bg-blue-500 text-white px-6 py-2 rounded-lg"
          >
            Login as User
          </button>
          <button
            onClick={() => setRole("Therapist")}
            className="bg-green-500 text-white px-6 py-2 rounded-lg"
          >
            Login as Therapist
          </button>
        </div>
      ) : (
        <div className="bg-white p-6 rounded-lg shadow-lg w-80">
          <h2 className="text-xl font-semibold mb-2">Login as {role}</h2>

          {/* MetaMask Login */}
          <button
            onClick={handleMetaMaskLogin}
            className="w-full bg-yellow-500 text-white py-2 rounded-lg mb-4"
          >
            Connect with MetaMask
          </button>

          {/* Standard Login */}
          <form onSubmit={handleStandardLogin} className="space-y-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-2 border border-gray-300 rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-2 border border-gray-300 rounded"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Login
            </button>
          </form>

          {/* Back Button */}
          <button
            onClick={() => setRole(null)}
            className="mt-4 text-gray-500 underline"
          >
            Go Back
          </button>
        </div>
      )}
    </div>
  );
}
