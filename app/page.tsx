import Link from "next/link";

export default function Home() {
  return (
	<main className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-8">
  	<h1 className="text-4xl font-bold text-gray-800 mb-4">
    	Inventory App - Home
  	</h1>
  	<p className="text-lg text-gray-600 mb-6">
    	Welcome! Choose a section to start working with your inventory.
  	</p>

  	<div className="flex flex-wrap gap-4">
    	<Link
      	href="/dashboard"
      	className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700"
    	>
      	Go to Dashboard
    	</Link>
    	<Link
      	href="/products"
      	className="px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700"
    	>
      	Manage Products
    	</Link>
    	<Link
      	href="/suppliers"
      	className="px-4 py-2 rounded bg-purple-600 text-white hover:bg-purple-700"
    	>
      	Manage Suppliers
    	</Link>
  	</div>
	</main>
  );
}

