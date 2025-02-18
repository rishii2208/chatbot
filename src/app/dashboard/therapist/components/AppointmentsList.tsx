"use client";
import React, { useState } from "react";

interface Appointment {
  id: number;
  clientName: string;
  date: string;
  time: string;
  status: "Upcoming" | "Completed" | "Cancelled";
  paymentStatus?: "Pending" | "Completed";
}

const initialAppointments: Appointment[] = [
  { id: 1, clientName: "John Doe", date: "2025-02-20", time: "10:00 AM", status: "Upcoming" },
  { id: 2, clientName: "Jane Smith", date: "2025-02-21", time: "02:30 PM", status: "Upcoming" },
  { id: 3, clientName: "Alex Johnson", date: "2025-02-22", time: "04:00 PM", status: "Upcoming" },
];

export default function Appointments() {
  const [appointments, setAppointments] = useState(initialAppointments);

  // Function to update appointment status
  const updateStatus = (id: number, newStatus: "Completed" | "Cancelled") => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id ? { ...appt, status: newStatus } : appt
      )
    );
  };

  // Function to mark appointment as paid
  const markAsPaid = (id: number) => {
    setAppointments((prev) =>
      prev.map((appt) =>
        appt.id === id && appt.status === "Completed"
          ? { ...appt, paymentStatus: "Completed" }
          : appt
      )
    );
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Appointments</h1>

      {appointments.length === 0 ? (
        <p>No upcoming appointments.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border p-2">Client</th>
              <th className="border p-2">Date</th>
              <th className="border p-2">Time</th>
              <th className="border p-2">Status</th>
              <th className="border p-2">Payment Status</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id} className="border">
                <td className="border p-2">{appt.clientName}</td>
                <td className="border p-2">{appt.date}</td>
                <td className="border p-2">{appt.time}</td>
                <td
                  className={`border p-2 font-bold ${
                    appt.status === "Completed"
                      ? "text-green-600"
                      : appt.status === "Cancelled"
                      ? "text-red-600"
                      : "text-yellow-600"
                  }`}
                >
                  {appt.status}
                </td>
                <td
                  className={`border p-2 ${
                    appt.paymentStatus === "Completed"
                      ? "text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  {appt.paymentStatus || "Pending"}
                </td>
                <td className="border p-2 space-x-2">
                  {appt.status === "Upcoming" && (
                    <>
                      <button
                        onClick={() => updateStatus(appt.id, "Completed")}
                        className="bg-green-500 text-white px-3 py-1 rounded"
                      >
                        ✅ Complete
                      </button>
                      <button
                        onClick={() => updateStatus(appt.id, "Cancelled")}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                      >
                        ❌ Cancel
                      </button>
                    </>
                  )}
                  {appt.status === "Completed" && appt.paymentStatus !== "Completed" && (
                    <button
                      onClick={() => markAsPaid(appt.id)}
                      className="bg-blue-500 text-white px-3 py-1 rounded"
                    >
                      💰 Mark as Paid
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
