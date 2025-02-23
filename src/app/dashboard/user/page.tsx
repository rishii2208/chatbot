// // import React from 'react';
// // import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
// // import { Calendar, MessageCircle, Video, Users, Clock, Bell, Search, BookOpen, User, Settings, BarChart } from 'lucide-react';

// // const ModernDashboard = () => {
// //   const upcomingSessions = [
// //     { id: 1, expert: "Dr. Sarah Wilson", time: "2:00 PM Today", type: "Video Call", specialty: "Mental Health" },
// //     { id: 2, expert: "Dr. Michael Chen", time: "10:30 AM Tomorrow", type: "Chat Session", specialty: "Sex Education" }
// //   ];

// //   return (
// //     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
// //       {/* Sidebar */}
// //       <div className="fixed left-0 top-0 h-full w-64 bg-white shadow-lg p-6">
// //         <div className="mb-8">
// //           <h1 className="text-2xl font-bold text-blue-600">HealthConnect</h1>
// //         </div>
        
// //         <nav className="space-y-2">
// //           <div className="flex items-center gap-3 p-3 bg-blue-50 text-blue-600 rounded-lg cursor-pointer">
// //             <BarChart className="w-5 h-5" />
// //             <span className="font-medium">Dashboard</span>
// //           </div>
// //           <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
// //             <Calendar className="w-5 h-5" />
// //             <span>Schedule</span>
// //           </div>
// //           <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
// //             <MessageCircle className="w-5 h-5" />
// //             <span>Messages</span>
// //           </div>
// //           <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
// //             <Users className="w-5 h-5" />
// //             <span>Experts</span>
// //           </div>
// //           <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
// //             <BookOpen className="w-5 h-5" />
// //             <span>Resources</span>
// //           </div>
// //           <div className="flex items-center gap-3 p-3 text-gray-600 hover:bg-gray-50 rounded-lg cursor-pointer">
// //             <Settings className="w-5 h-5" />
// //             <span>Settings</span>
// //           </div>
// //         </nav>
// //       </div>

// //       {/* Main Content */}
// //       <div className="ml-64 p-8">
// //         {/* Header */}
// //         <div className="flex justify-between items-center mb-8">
// //           <div>
// //             <h1 className="text-2xl font-bold text-gray-900">Welcome back, Alex</h1>
// //             <p className="text-gray-500">Let's take care of your wellbeing today</p>
// //           </div>
          
// //           <div className="flex items-center gap-6">
// //             <div className="relative">
// //               <input 
// //                 type="text" 
// //                 placeholder="Search experts, resources..." 
// //                 className="pl-10 pr-4 py-2 border rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
// //               />
// //               <Search className="w-5 h-5 text-gray-400 absolute left-3 top-2.5" />
// //             </div>
// //             <Bell className="w-6 h-6 text-gray-500 cursor-pointer hover:text-gray-700" />
// //             <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
// //               <User className="w-6 h-6 text-white" />
// //             </div>
// //           </div>
// //         </div>

// //         {/* Quick Stats */}
// //         <div className="grid grid-cols-4 gap-6 mb-8">
// //           <Card className="bg-gradient-to-br from-blue-500 to-blue-600 text-white">
// //             <CardContent className="p-6">
// //               <div className="flex justify-between items-start">
// //                 <div>
// //                   <p className="text-blue-100">Total Sessions</p>
// //                   <h3 className="text-3xl font-bold mt-1">24</h3>
// //                 </div>
// //                 <Video className="w-6 h-6" />
// //               </div>
// //               <p className="text-blue-100 text-sm mt-4">+3 from last month</p>
// //             </CardContent>
// //           </Card>
          
// //           <Card className="bg-gradient-to-br from-purple-500 to-purple-600 text-white">
// //             <CardContent className="p-6">
// //               <div className="flex justify-between items-start">
// //                 <div>
// //                   <p className="text-purple-100">Hours Spent</p>
// //                   <h3 className="text-3xl font-bold mt-1">18.5</h3>
// //                 </div>
// //                 <Clock className="w-6 h-6" />
// //               </div>
// //               <p className="text-purple-100 text-sm mt-4">2.5 hours this week</p>
// //             </CardContent>
// //           </Card>
          
// //           <Card className="bg-gradient-to-br from-green-500 to-green-600 text-white">
// //             <CardContent className="p-6">
// //               <div className="flex justify-between items-start">
// //                 <div>
// //                   <p className="text-green-100">Experts Consulted</p>
// //                   <h3 className="text-3xl font-bold mt-1">5</h3>
// //                 </div>
// //                 <Users className="w-6 h-6" />
// //               </div>
// //               <p className="text-green-100 text-sm mt-4">Across 3 specialties</p>
// //             </CardContent>
// //           </Card>
          
// //           <Card className="bg-gradient-to-br from-orange-500 to-orange-600 text-white">
// //             <CardContent className="p-6">
// //               <div className="flex justify-between items-start">
// //                 <div>
// //                   <p className="text-orange-100">Resources Accessed</p>
// //                   <h3 className="text-3xl font-bold mt-1">12</h3>
// //                 </div>
// //                 <BookOpen className="w-6 h-6" />
// //               </div>
// //               <p className="text-orange-100 text-sm mt-4">4 new this week</p>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* Upcoming Sessions */}
// //         <Card className="mb-8">
// //           <CardHeader>
// //             <CardTitle>Upcoming Sessions</CardTitle>
// //           </CardHeader>
// //           <CardContent>
// //             <div className="space-y-4">
// //               {upcomingSessions.map(session => (
// //                 <div key={session.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
// //                   <div className="flex items-center gap-4">
// //                     <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
// //                       {session.type === "Video Call" ? 
// //                         <Video className="w-6 h-6 text-blue-500" /> : 
// //                         <MessageCircle className="w-6 h-6 text-blue-500" />
// //                       }
// //                     </div>
// //                     <div>
// //                       <h4 className="font-medium text-gray-900">{session.expert}</h4>
// //                       <p className="text-sm text-gray-500">{session.specialty}</p>
// //                       <p className="text-sm text-gray-500">{session.time}</p>
// //                     </div>
// //                   </div>
// //                   <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
// //                     Join {session.type}
// //                   </button>
// //                 </div>
// //               ))}
// //             </div>
// //           </CardContent>
// //         </Card>

// //         {/* Quick Actions */}
// //         <div className="grid grid-cols-3 gap-6">
// //           <Card className="cursor-pointer hover:shadow-lg transition-shadow">
// //             <CardContent className="p-6 flex flex-col items-center text-center">
// //               <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
// //                 <Video className="w-6 h-6 text-blue-500" />
// //               </div>
// //               <h3 className="font-medium mb-2">Start Session</h3>
// //               <p className="text-sm text-gray-500">Connect with an expert instantly</p>
// //             </CardContent>
// //           </Card>

// //           <Card className="cursor-pointer hover:shadow-lg transition-shadow">
// //             <CardContent className="p-6 flex flex-col items-center text-center">
// //               <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4">
// //                 <Users className="w-6 h-6 text-purple-500" />
// //               </div>
// //               <h3 className="font-medium mb-2">Find Expert</h3>
// //               <p className="text-sm text-gray-500">Browse our verified specialists</p>
// //             </CardContent>
// //           </Card>

// //           <Card className="cursor-pointer hover:shadow-lg transition-shadow">
// //             <CardContent className="p-6 flex flex-col items-center text-center">
// //               <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
// //                 <BookOpen className="w-6 h-6 text-green-500" />
// //               </div>
// //               <h3 className="font-medium mb-2">Resources</h3>
// //               <p className="text-sm text-gray-500">Access helpful materials</p>
// //             </CardContent>
// //           </Card>
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default ModernDashboard;

// import UserDashboard from './components/UserDashboard'

// export default function UserPage() {
//   return <UserDashboard />
// }
