// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { Button } from "@/components/ui/button";

// interface SidebarProps {
//   setActiveSection: (section: "appointments" | "messages" | "profile" | "payments") => void;
// }

// const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
//   return (
//     <motion.div
//       initial={{ opacity: 0, x: -30 }}
//       animate={{ opacity: 1, x: 0 }}
//       transition={{ duration: 0.8, ease: "easeOut" }}
//       className="w-64 h-full bg-gradient-to-br from-green-400 to-teal-500 text-white p-6 shadow-xl rounded-xl"
//     >
//       <h2 className="text-xl font-bold mb-6 drop-shadow-lg text-white">Therapist Dashboard</h2>
//       <ul className="space-y-4">
//         {[ 
//           { section: "appointments", label: "📅 Appointments" },
//           { section: "messages", label: "💬 Messages" },
//           { section: "profile", label: "👤 Profile" },
//           { section: "payments", label: "💰 Payments" }
//         ].map((item, index) => (
//           <motion.li 
//             key={index}
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 200 }}
//           >
//             <Button
//               variant="outline"
//               className="w-full justify-start text-black border-white hover:bg-white hover:text-green-500 transition duration-300 shadow-md"
//               onClick={() => setActiveSection(item.section as any)}
//             >
//               {item.label}
//             </Button>
//           </motion.li>
//         ))}
//       </ul>
//     </motion.div>
//   );
// };

// export default Sidebar;
