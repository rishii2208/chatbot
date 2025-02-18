"use client";
import React from "react";

interface SidebarProps {
  setActiveSection: (section: "appointments" | "messages" | "profile" | "payments") => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setActiveSection }) => {
  return (
    <div className="w-64 h-full bg-blue-500 text-white p-4">
      <h2 className="text-lg font-bold mb-4">Therapist Dashboard</h2>
      <ul className="space-y-2">
        <li>
          <button onClick={() => setActiveSection("appointments")} className="block w-full text-left p-2 hover:bg-blue-400">
            📅 Appointments
          </button>
        </li>
        <li>
          <button onClick={() => setActiveSection("messages")} className="block w-full text-left p-2 hover:bg-blue-400">
            💬 Messages
          </button>
        </li>
        <li>
          <button onClick={() => setActiveSection("profile")} className="block w-full text-left p-2 hover:bg-blue-400">
            👤 Profile
          </button>
        </li>
        <li>
          <button onClick={() => setActiveSection("payments")} className="block w-full text-left p-2 hover:bg-blue-400">
            💰 Payments
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
