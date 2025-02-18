import Link from "next/link";

export function ChatAccess() {
  return (
    <div className="bg-white p-4 shadow-md rounded-xl mt-4">
      <h2 className="text-xl font-semibold">💬 Live Chat</h2>
      <p className="text-gray-500">Connect with your current clients.</p>
      <Link href="/dashboard/chat">
        <button className="mt-3 px-4 py-2 bg-purple-500 text-white rounded-lg">
          Open Chat
        </button>
      </Link>
    </div>
  );
}
