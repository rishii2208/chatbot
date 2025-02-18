"use client";
import React, { useState } from "react";

const Messages = () => {
  const [messages] = useState([
    {
      id: 1,
      sender: "John Doe",
      message: "Hello, I need to reschedule our session.",
      time: "10:30 AM",
    },
    {
      id: 2,
      sender: "Jane Smith",
      message: "Thank you for today's session, it was very helpful!",
      time: "Yesterday",
    },
  ]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6 text-gray-800">Messages</h1>
      <div className="bg-white p-6 shadow-md rounded-lg">
        {messages.length > 0 ? (
          messages.map((msg) => (
            <div key={msg.id} className="border-b py-4">
              <h2 className="text-lg font-semibold text-gray-900">{msg.sender}</h2>
              <p className="text-gray-700">{msg.message}</p>
              <span className="text-sm text-gray-500">{msg.time}</span>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No messages yet.</p>
        )}
      </div>
    </div>
  );
};

export default Messages;
