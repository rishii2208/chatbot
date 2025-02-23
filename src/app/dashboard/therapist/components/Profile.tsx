// "use client";
// import React, { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

// const Profile = () => {
//   const [name, setName] = useState("Dr. Alex Smith");
//   const [specialization, setSpecialization] = useState(
//     "Licensed Therapist | 10+ years of experience"
//   );
//   const [bio, setBio] = useState(
//     "Specializing in cognitive behavioral therapy, stress management, and mental wellness."
//   );
//   const [walletAddress, setWalletAddress] = useState("0x1234...abcd");

//   // Handle form submissions (e.g., update profile)
//   const handleUpdateProfile = (e: React.FormEvent) => {
//     e.preventDefault();
//     console.log("Profile updated:", { name, specialization, bio, walletAddress });
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#34e89e] to-[#0f3443] p-8 text-white">
//       <h1 className="text-3xl font-bold mb-6 text-center drop-shadow-lg">Profile</h1>
//       <Card className="bg-white text-gray-800 shadow-lg rounded-xl mx-auto max-w-2xl">
//         <CardContent className="p-6 text-center">
//           <h2 className="text-xl font-semibold">{name}</h2>
//           <p className="text-gray-600">{specialization}</p>
//           <p className="text-gray-700 mt-4">{bio}</p>
//         </CardContent>
//       </Card>

//       {/* Update Profile Form */}
//       <Card className="mt-6 bg-white text-gray-800 shadow-lg rounded-xl mx-auto max-w-2xl">
//         <CardContent className="p-6">
//           <h3 className="text-xl font-semibold text-gray-900 mb-4">Update Profile</h3>
//           <form onSubmit={handleUpdateProfile}>
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Name</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your full name"
//               />
//             </div>
            
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Specialization</label>
//               <input
//                 type="text"
//                 value={specialization}
//                 onChange={(e) => setSpecialization(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your specialization"
//               />
//             </div>
            
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Bio</label>
//               <textarea
//                 value={bio}
//                 onChange={(e) => setBio(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Enter a brief bio"
//                 rows={4}
//               />
//             </div>
            
//             <div className="mb-4">
//               <label className="block text-gray-700 font-semibold mb-2">Wallet Address</label>
//               <input
//                 type="text"
//                 value={walletAddress}
//                 onChange={(e) => setWalletAddress(e.target.value)}
//                 className="w-full p-2 border border-gray-300 rounded-md"
//                 placeholder="Enter your wallet address"
//               />
//             </div>

//             <Button className="w-full bg-gradient-to-r from-blue-500 to-teal-400 text-white shadow-lg hover:scale-105 transition-all">
//               Update Profile
//             </Button>
//           </form>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

// export default Profile;
