import WelcomeCard from "@/components/WelcomeCard";

export default function Home() {
return (
  
<main className="min-h-screen flex flex-col items-center justify-center bg-blue-50 p-8">
<h1 className="text-4xl font-bold text-amber-900 mb-4">
Inventory App - Day 1 By Nazim Uddin
</h1>
<WelcomeCard />


<p className="text-lg text-gray-600">
Next.js 30-Day Challenge Started Successfully!
</p>

<div className="mt-6 p-4 bg-white shadow rounded">
<p className="text-gray-700">
Today we set up the project and understood the app folder structure.
</p>
</div>
</main>
);
}

