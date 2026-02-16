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
        {/* ===== HEADER ===== */}
        <header className="bg-indigo-600 text-white shadow">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
            <div className="text-lg font-semibold">
              Nazim Inventory System
            </div>

            <div className="text-xs sm:text-sm text-indigo-100">
              Built with Next.js • 30-Day Challenge
            </div>
          </div>
        </header>

        {/* ===== MAIN LAYOUT (SIDEBAR + CONTENT) ===== */}
        <div className="max-w-7xl mx-auto px-4 py-4 flex gap-4">
          {/* SIDEBAR */}
          <aside className="w-56 shrink-0 bg-white border border-gray-200 rounded-lg shadow-sm p-4 h-[calc(100vh-7rem)] sticky top-4 hidden sm:flex flex-col justify-between">
            <div>
              <p className="text-xs font-semibold text-gray-500 uppercase mb-3">
                Navigation
              </p>
              <nav className="space-y-1 text-sm">
                <Link
                  href="/"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Home
                </Link>
                <Link
                  href="/dashboard"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Dashboard
                </Link>
                <Link
                  href="/products"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Products
                </Link>
                <Link
                  href="/suppliers"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Suppliers
                </Link>
                <Link
                  href="/settings"
                  className="block px-3 py-2 rounded-md text-gray-700 hover:bg-indigo-50 hover:text-indigo-700"
                >
                  Settings
                </Link>
              </nav>
            </div>

            <div className="mt-6 border-t pt-3">
              <p className="text-xs text-gray-400">
                v0.1 • Development Mode
              </p>
            </div>
          </aside>

          {/* MAIN CONTENT AREA */}
          <div className="flex-1 min-h-[calc(100vh-7rem)] flex flex-col">
            <main className="flex-1">
              {children}
            </main>

            {/* ===== FOOTER ===== */}
            <footer className="mt-6 border-t pt-3 text-xs text-gray-500">
              <div className="flex flex-col sm:flex-row justify-between gap-2">
                <span>© {new Date().getFullYear()} Nazim Inventory System</span>
                <span>Next.js • Tailwind CSS • Learning Challenge</span>
              </div>
            </footer>
          </div>
        </div>
      </body>
    </html>
  );
}