"use client";
import React, { useState } from "react";

const Profile = () => {
  const [name, setName] = useState("Dr. Alex Smith");
  const [specialization, setSpecialization] = useState(
    "Licensed Therapist | 10+ years of experience"
  );
  const [bio, setBio] = useState(
    "Specializing in cognitive behavioral therapy, stress management, and mental wellness."
  );
  const [walletAddress, setWalletAddress] = useState("0x1234...abcd");

  // Handle form submissions (e.g., update profile)
  const handleUpdateProfile = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, you would send the updated data to the backend or update it on the blockchain.
    console.log("Profile updated:", { name, specialization, bio, walletAddress });
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Profile</h1>
      <div className="bg-white p-6 shadow-md rounded-lg">
        <h2 className="text-lg font-semibold text-gray-900">Dr. Alex Smith</h2>
        <p className="text-gray-600">Licensed Therapist | 10+ years of experience</p>
        <p className="text-gray-700 mt-4">
          Specializing in cognitive behavioral therapy, stress management, and mental wellness.
        </p>
      </div>

      {/* Update Profile Form */}
      <div className="mt-6 bg-white p-6 shadow-md rounded-lg">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Update Profile</h3>
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your full name"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Specialization</label>
            <input
              type="text"
              value={specialization}
              onChange={(e) => setSpecialization(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your specialization"
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Bio</label>
            <textarea
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter a brief bio"
              rows={4}
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold mb-2">Wallet Address</label>
            <input
              type="text"
              value={walletAddress}
              onChange={(e) => setWalletAddress(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
              placeholder="Enter your wallet address"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600"
          >
            Update Profile
          </button>
        </form>
      </div>
    </div>
  );
};

export default Profile;
