// import Link from "next/link";

// export default function Home() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
//       <h1 className="text-4xl font-bold mb-4">Welcome to Mental Health DApp</h1>
//       <p className="text-lg text-gray-600 mb-6">Connecting users with therapists anonymously.</p>

//       <div className="flex space-x-4">
//         {/* Button to Therapist Dashboard */}
//         <Link href="/dashboard/therapist">
//           <button className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600">
//             Go to Therapist Dashboard
//           </button>
//         </Link>

//         {/* Placeholder for User Dashboard (if needed) */}
//         <Link href="/dashboard/user">
//           <button className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600">
//             Go to User Dashboard
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// }

import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <header className="text-center py-20 bg-blue-600 text-white">
        <h1 className="text-5xl font-bold">Mental Health & Sex Education Platform, Anonymously</h1>
        <p className="mt-4 text-lg max-w-2xl mx-auto">
          A decentralized platform that connects users with therapists securely and anonymously using Web3.
        </p>
        <div className="mt-6 flex justify-center space-x-4">
          <Link href="/dashboard/therapist">
            <button className="px-6 py-3 bg-white text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-200">
              Therapist Dashboard
            </button>
          </Link>
          <Link href="/dashboard/user">
            <button className="px-6 py-3 bg-gray-800 text-white font-semibold rounded-lg shadow-md hover:bg-gray-700">
              User Dashboard
            </button>
          </Link>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-16 px-6 max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">🔒 100% Anonymity</h3>
            <p className="text-gray-600 mt-2">Stay anonymous while connecting with verified therapists.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">💰 Crypto Payments</h3>
            <p className="text-gray-600 mt-2">Pay securely with cryptocurrency, no third-party tracking.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">💬 Live Support</h3>
            <p className="text-gray-600 mt-2">Get instant help with secure, end-to-end encrypted chat.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-6 bg-gray-200">
        <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">📝 Step 1</h3>
            <p className="text-gray-600 mt-2">Sign up with your crypto wallet and choose your role.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">🩺 Step 2</h3>
            <p className="text-gray-600 mt-2">Users connect with therapists for anonymous sessions.</p>
          </div>
          <div className="p-6 bg-white shadow-lg rounded-lg text-center">
            <h3 className="text-xl font-semibold">💳 Step 3</h3>
            <p className="text-gray-600 mt-2">Secure payments are processed via blockchain.</p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-6 bg-gray-800 text-white">
        <p>&copy; 2025 Mental Health DApp. All rights reserved.</p>
      </footer>
    </div>
  );
}
