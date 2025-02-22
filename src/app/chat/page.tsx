import Chatbox from "../../components/Chatbot"


export default function ChatPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">AI Mental Health Chatbot</h1>
            <Chatbox />
        </main>
    );
}
