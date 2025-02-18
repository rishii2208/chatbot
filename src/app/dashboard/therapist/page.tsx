"use client";
import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Appointments from "./components/AppointmentsList";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import Payments from "./components/Payments";

export default function TherapistDashboard() {
  const [activeSection, setActiveSection] = useState<"appointments" | "messages" | "profile" | "payments">("appointments");

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar setActiveSection={setActiveSection} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        {activeSection === "appointments" && <Appointments />}
        {activeSection === "messages" && <Messages />}
        {activeSection === "profile" && <Profile />}
        {activeSection === "payments" && <Payments />}
      </div>
    </div>
  );
}
