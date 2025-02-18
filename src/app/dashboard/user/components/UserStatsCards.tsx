'use client'

const stats = [
  { label: 'Total Sessions', value: '12', trend: '+2 this month', emoji: '📅' },
  { label: 'Hours Spent', value: '8.5', trend: '1.5 this week', emoji: '⏰' },
  { label: 'Therapists Consulted', value: '3', trend: 'Across 2 specialties', emoji: '🧑‍⚕️' },
  { label: 'Resources Accessed', value: '7', trend: '2 new this week', emoji: '📚' },
]

export default function UserStatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <div 
          key={index} 
          className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow"
        >
          <div className="flex justify-between items-start">
            <div>
              <p className="text-gray-600">{stat.label}</p>
              <h3 className="text-3xl font-bold mt-1">{stat.value}</h3>
            </div>
            <span className="text-2xl">{stat.emoji}</span>
          </div>
          <p className="text-gray-500 text-sm mt-4">{stat.trend}</p>
        </div>
      ))}
    </div>
  )
}
