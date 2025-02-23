// "use client";
// import React, { useState } from "react";

// const Messages = () => {
//   const [messages] = useState([
//     {
//       id: 1,
//       sender: "John Doe",
//       message: "Hello, I need to reschedule our session.",
//       time: "10:30 AM",
//     },
//     {
//       id: 2,
//       sender: "Jane Smith",
//       message: "Thank you for today's session, it was very helpful!",
//       time: "Yesterday",
//     },
//   ]);

//   return (
//     <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-[#34e89e] to-[#0f3443] p-8">
//       <div className="w-full max-w-2xl bg-white p-6 shadow-2xl rounded-2xl border border-gray-200">
//         <h1 className="text-2xl font-bold mb-6 text-gray-900 text-center">Messages</h1>
//         <div className="space-y-4">
//           {messages.length > 0 ? (
//             messages.map((msg) => (
//               <div key={msg.id} className="border-b py-4">
//                 <h2 className="text-lg font-semibold text-gray-900">{msg.sender}</h2>
//                 <p className="text-gray-700">{msg.message}</p>
//                 <span className="text-sm text-gray-500">{msg.time}</span>
//               </div>
//             ))
//           ) : (
//             <p className="text-gray-600 text-center">No messages yet.</p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Messages;