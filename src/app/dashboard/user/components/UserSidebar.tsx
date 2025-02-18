'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { label: 'Dashboard', href: '/user' },
  { label: 'Therapists', href: '/user/therapists' },
  { label: 'Sessions', href: '/user/sessions' },
  { label: 'Messages', href: '/user/messages' },
  { label: 'Resources', href: '/user/resources' },
  { label: 'Settings', href: '/user/settings' },
]

export default function UserSidebar() {
  const pathname = usePathname()

  return (
    <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-blue-600">HealthConnect</h1>
      </div>
      
      <nav className="space-y-2">
        {navItems.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors ${
                isActive 
                  ? 'bg-blue-50 text-blue-600' 
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <span className={isActive ? 'font-medium' : ''}>
                {item.label}
              </span>
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
