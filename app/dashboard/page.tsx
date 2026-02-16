import PageHeader from "@/components/PageHeader";
import Card from "@/components/Card";

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <PageHeader
        title="Dashboard"
        subtitle="High-level overview of your inventory performance."
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <p className="text-sm text-gray-500">Total Products</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">128</p>
        </Card>

        <Card>
          <p className="text-sm text-gray-500">Low Stock Items</p>
          <p className="text-2xl font-semibold text-red-600 mt-1">7</p>
        </Card>

        <Card>
          <p className="text-sm text-gray-500">Total Suppliers</p>
          <p className="text-2xl font-semibold text-gray-800 mt-1">19</p>
        </Card>
      </div>
    </div>
  );
}
