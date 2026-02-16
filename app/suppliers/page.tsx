import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";
import Button from "@/components/Button";

export default function SuppliersPage() {
  return (
    <div className="space-y-4">
      <main className="min-h-screen p-8 bg-gray-50">
        <PageHeader
          title="Suppliers"
          subtitle="Manage suppliers and their contact details."
          actions={
            <Button variant="primary" size="sm">
              + Add Supplier
            </Button>
          }
        />

        <Card>
          <p className="text-sm text-gray-600">
            Suppliers list will go here (we will connect it later to real data).
          </p>
        </Card>
      </main>
    </div>
  );
}
