'use client'

import Link from 'next/link'

const quickActions = [
  { label: 'Book a Session', href: '/user/therapists', icon: '📅', color: 'bg-blue-500' },
  { label: 'View Resources', href: '/user/resources', icon: '📚', color: 'bg-green-500' },
  { label: 'Chat with Support', href: '/user/messages', icon: '💬', color: 'bg-purple-500' },
  { label: 'Feedback & Reports', href: '/user/feedback', icon: '📝', color: 'bg-yellow-500' },
]

export default function UserQuickActions() {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-bold mb-4">Quick Actions</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickActions.map((action, index) => (
          <Link key={index} href={action.href} className="group">
            <div 
              className={`p-4 rounded-lg text-white flex items-center gap-3 cursor-pointer hover:opacity-90 transition ${action.color}`}
            >
              <span className="text-2xl">{action.icon}</span>
              <p className="text-lg font-medium">{action.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
