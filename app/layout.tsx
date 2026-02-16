import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Inventory App",
  description: "Inventory Management System with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        {/* Simple top navigation */}
        <header className="bg-white shadow">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
            <div className="text-xl font-bold text-gray-800">
              Inventory App
            </div>

            <div className="flex gap-4 text-sm font-medium text-gray-700">
              <Link href="/">
                Home
              </Link>
              <Link href="/dashboard">
                Dashboard
              </Link>
              <Link href="/products">
                Products
              </Link>
              <Link href="/suppliers" >
                Suppliers
              </Link>
              <Link href="/settings" className="text-gray-700 hover:text-blue-600">
                Settings
              </Link>
            </div>
          </nav>
        </header>

        {/* Page content */}
        <main className="max-w-6xl mx-auto mt-6">
          {children}
        </main>
      </body>
    </html>
  );
}
