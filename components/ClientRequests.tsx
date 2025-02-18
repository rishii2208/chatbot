export function ClientRequests() {
    const requests = [
      { name: "Anonymous User #3", requestTime: "10 min ago" },
      { name: "Anonymous User #4", requestTime: "30 min ago" },
    ];
  
    return (
      <div className="bg-white p-4 shadow-md rounded-xl mt-4">
        <h2 className="text-xl font-semibold">🛎 Incoming Requests</h2>
        <ul className="mt-3">
          {requests.map((req, index) => (
            <li key={index} className="border-b py-2 flex justify-between">
              {req.name} <span className="text-gray-500">{req.requestTime}</span>
              <button className="bg-green-500 text-white px-3 py-1 rounded-lg">
                Accept
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  