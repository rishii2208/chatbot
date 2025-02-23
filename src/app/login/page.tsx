// "use client";
// import { useState } from "react";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";

// export default function Login() {
//   const [role, setRole] = useState<"user" | "therapist" | null>(null);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#34e89e] to-[#0f3443]">
//       <Card className="w-full max-w-md shadow-2xl p-6 rounded-2xl border border-gray-200 bg-white">
//         <CardHeader>
//           <CardTitle className="text-center text-3xl font-bold text-gray-800">
//             Login
//           </CardTitle>
//         </CardHeader>
//         <CardContent className="space-y-6">
//           {!role ? (
//             <div className="space-y-4">
//               <Button
//                 onClick={() => setRole("user")}
//                 className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//               >
//                 Login as User
//               </Button>
//               <Button
//                 onClick={() => setRole("therapist")}
//                 className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//               >
//                 Login as Therapist
//               </Button>
//             </div>
//           ) : (
//             <div className="space-y-4">
//               <Label className="text-gray-700">Email</Label>
//               <Input
//                 type="email"
//                 placeholder="Enter your email"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <Label className="text-gray-700">Password</Label>
//               <Input
//                 type="password"
//                 placeholder="Enter your password"
//                 className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
//               />

//               <Button className="w-full bg-gradient-to-r from-teal-500 to-green-400 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
//                 Login
//               </Button>

//               <p className="text-gray-500 text-sm text-center">Or login using MetaMask</p>

//               <Button
//                 onClick={() => console.log("Connect with MetaMask")}
//                 className="w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//               >
//                 Connect with MetaMask
//               </Button>

//               <Button
//                 variant="ghost"
//                 className="w-full bg-gradient-to-r from-gray-400 to-gray-700 text-white py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105"
//                 onClick={() => setRole(null)}
//               >
//                 Back
//               </Button>
//             </div>
//           )}
//         </CardContent>
//       </Card>
//     </div>
//   );
// }
