import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Ticket, Plus } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Tickets() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141414" }}>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between fade-in">
          <div className="flex items-center space-x-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center card-hover"
              style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
            >
              <Ticket className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Manage Tickets</h1>
              <p className="text-gray-400">View and manage your support tickets</p>
            </div>
          </div>
          <Button className="text-white btn-animate" style={{ backgroundColor: "#04946c" }}>
            <Plus className="w-4 h-4 mr-2" />
            Create Ticket
          </Button>
        </div>

        {/* Filters */}
        <div className="flex items-center space-x-4 fade-in stagger-1">
          <Select defaultValue="all-statuses">
            <SelectTrigger
              className="w-48 text-white"
              style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-statuses">All Statuses</SelectItem>
              <SelectItem value="open">Open</SelectItem>
              <SelectItem value="closed">Closed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
            </SelectContent>
          </Select>

          <Select defaultValue="all-priorities">
            <SelectTrigger
              className="w-48 text-white"
              style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
            >
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all-priorities">All Priorities</SelectItem>
              <SelectItem value="high">High</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="low">Low</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Tickets Table Header */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
        >
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="border-b border-gray-700">
                  <tr>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Title</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Priority</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Created</th>
                    <th className="text-left p-4 text-sm font-medium text-gray-400">Updated</th>
                  </tr>
                </thead>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Empty State */}
        <div className="text-center py-16 fade-in stagger-3">
          <div className="w-32 h-32 mx-auto mb-6 opacity-50">
            <svg viewBox="0 0 200 200" className="w-full h-full text-gray-600">
              <circle cx="100" cy="100" r="80" fill="none" stroke="currentColor" strokeWidth="2" />
              <path d="M70 70 L130 130 M130 70 L70 130" stroke="currentColor" strokeWidth="2" />
              <circle cx="60" cy="60" r="8" fill="currentColor" />
              <circle cx="140" cy="60" r="8" fill="currentColor" />
              <circle cx="100" cy="140" r="8" fill="currentColor" />
            </svg>
          </div>
          <p className="text-gray-400 text-lg">No tickets found</p>
        </div>
      </div>
    </div>
  )
}
