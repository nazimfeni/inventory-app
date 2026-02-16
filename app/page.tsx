import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function Home() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <PageHeader
        title="Inventory App - Home"
        subtitle="Welcome! Choose a section to start working with your inventory."
        actions={
          <>
            <Link href="/dashboard">
              <Button variant="primary" size="sm">
                Go to Dashboard
              </Button>
            </Link>
          </>
        }
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Dashboard
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Overview of stock levels, low inventory alerts, and quick stats.
          </p>
          <Link href="/dashboard">
            <Button variant="secondary" size="sm">
              View Dashboard
            </Button>
          </Link>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">Products</h2>
          <p className="text-sm text-gray-600 mb-3">
            Manage your products, quantities, and pricing.
          </p>
          <Link href="/products">
            <Button variant="secondary" size="sm">
              Manage Products
            </Button>
          </Link>
        </Card>

        <Card>
          <h2 className="text-lg font-semibold text-gray-800 mb-2">
            Suppliers
          </h2>
          <p className="text-sm text-gray-600 mb-3">
            Keep track of supplier contacts and relationships.
          </p>
          <Link href="/suppliers">
            <Button variant="secondary" size="sm">
              View Suppliers
            </Button>
          </Link>
        </Card>

      </div>
    </main>
  );
}
