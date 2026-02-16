import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function ProductsPage() {
  return (
    <main className="min-h-screen p-8 bg-gray-50">
      <PageHeader
        title="Products"
        subtitle="View and manage all products in your inventory."
        actions={
          <Button variant="primary" size="sm">
            + Add Product
          </Button>
        }
      />

      <Card>
        <p className="text-sm text-gray-600">
          Product table will go here (coming in later days: data fetching, CRUD,
          filters).
        </p>
      </Card>
    </main>
  );
}
