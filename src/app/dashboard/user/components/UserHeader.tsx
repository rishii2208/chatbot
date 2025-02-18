'use client'

export default function UserHeader() {
  return (
    <div className="flex justify-between items-center mb-8">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome, User</h1>
        <p className="text-gray-500">Your mental health journey starts here.</p>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search therapists, resources..." 
            className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="absolute left-3 top-2.5 text-gray-400">🔍</span>
        </div>
        <span className="text-2xl cursor-pointer">🔔</span>
        <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-white">
          U
        </div>
      </div>
    </div>
  )
}
