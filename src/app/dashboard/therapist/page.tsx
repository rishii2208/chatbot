import { EarningsCard } from "./components/EarningsCard";
import { SessionList } from "./components/SessionList";
import { ClientRequests } from "./components/ClientRequests";
import { ChatAccess } from "./components/ChatAccess";
import { ProfileSettings } from "./components/ProfileSettings";

export default function TherapistDashboard() {
  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">👩‍⚕️ Therapist Dashboard</h1>
      
      {/* Earnings & Sessions Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <EarningsCard />
        <SessionList />
      </div>

      {/* Client Requests */}
      <ClientRequests />

      {/* Live Chat Access */}
      <ChatAccess />

      {/* Profile & Settings */}
      <ProfileSettings />
    </div>
  );
}
