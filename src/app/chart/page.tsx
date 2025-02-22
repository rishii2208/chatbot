import ChartComponent from "../../components/ChartComponent";


export default function ChartPage() {
    return (
        <main className="flex flex-col items-center justify-center min-h-screen">
            <h1 className="text-2xl font-bold mb-4">Your Mental Health Analysis</h1>
            <ChartComponent />
        </main>
    );
}
