'use client'

const sessions = [
  { id: 1, therapist: "Dr. Emily Carter", time: "3:00 PM Today", type: "Video Call", specialty: "Mental Health" },
  { id: 2, therapist: "Dr. John Doe", time: "5:30 PM Tomorrow", type: "Chat Session", specialty: "Sex Education" }
]

export default function UserSessions() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8">
      <h2 className="text-xl font-bold mb-4">Upcoming Sessions</h2>
      <div className="space-y-4">
        {sessions.map(session => (
          <div 
            key={session.id} 
            className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
          >
            <div>
              <h4 className="font-medium text-gray-900">{session.therapist}</h4>
              <p className="text-sm text-gray-500">{session.specialty}</p>
              <p className="text-sm text-gray-500">{session.time}</p>
            </div>
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              Join {session.type}
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
