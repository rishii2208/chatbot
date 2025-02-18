export function SessionList() {
    const activeSessions = [
      { name: "Anonymous User #1", date: "Feb 18, 2025" },
      { name: "Anonymous User #2", date: "Feb 17, 2025" },
    ];
  
    return (
      <div className="bg-white p-4 shadow-md rounded-xl">
        <h2 className="text-xl font-semibold">📅 Active Sessions</h2>
        <ul className="mt-3">
          {activeSessions.map((session, index) => (
            <li key={index} className="border-b py-2">
              {session.name} - <span className="text-gray-500">{session.date}</span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  