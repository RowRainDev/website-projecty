import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { DollarSign, FileText, Receipt, Filter, Search } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Invoices() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141414" }}>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4 fade-in">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center card-hover"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
          >
            <FileText className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Invoices</h1>
            <p className="text-gray-400">Manage your invoices</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-1"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$0</div>
              <p className="text-xs text-gray-500">Your current account balance</p>
            </CardContent>
          </Card>

          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Unpaid Items</CardTitle>
              <FileText className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0</div>
              <p className="text-xs text-gray-500">Total number of unpaid invoices and services</p>
            </CardContent>
          </Card>

          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Unpaid Services</CardTitle>
              <Receipt className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0</div>
              <p className="text-xs text-gray-500">Number of unpaid services</p>
            </CardContent>
          </Card>

          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-4"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Unpaid Invoices</CardTitle>
              <FileText className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0</div>
              <p className="text-xs text-gray-500">Number of unpaid invoices</p>
            </CardContent>
          </Card>
        </div>

        {/* Filters */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
        >
          <CardContent className="pt-6">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center space-x-2">
                <Filter className="w-4 h-4 text-gray-400" />
                <span className="text-sm text-gray-400">Filters:</span>
              </div>

              <Select defaultValue="status">
                <SelectTrigger
                  className="w-32"
                  style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
                >
                  <SelectValue placeholder="Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="status">Status</SelectItem>
                  <SelectItem value="paid">Paid</SelectItem>
                  <SelectItem value="unpaid">Unpaid</SelectItem>
                  <SelectItem value="overdue">Overdue</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center space-x-2">
                <Input
                  type="date"
                  defaultValue="2024-01-01"
                  className="text-white"
                  style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
                />
                <span className="text-gray-400">-</span>
                <Input
                  type="date"
                  defaultValue="2024-12-31"
                  className="text-white"
                  style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
                />
              </div>

              <div className="flex-1 max-w-md">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    placeholder="Search invoice"
                    className="pl-10 text-white"
                    style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Invoice Table */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
          style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
        >
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-700">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Invoice #</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Date</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Due Date</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Amount</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Recurring</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Notes</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={8} className="text-center py-12 text-gray-400">
                      No invoices found
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
