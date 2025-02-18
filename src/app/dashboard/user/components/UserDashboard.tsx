'use client'

import UserSidebar from './UserSidebar'
import UserHeader from './UserHeader'
import UserStatsCards from './UserStatsCards'
import UserSessions from './UserSessions'
import UserQuickActions from './UserQuickActions'

export default function UserDashboard() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex">
      <UserSidebar />
      <main className="ml-64 w-full">
        <div className="p-8">
          <UserHeader />
          <UserStatsCards />
          <UserSessions />
          <UserQuickActions />
        </div>
      </main>
    </div>
  )
}
