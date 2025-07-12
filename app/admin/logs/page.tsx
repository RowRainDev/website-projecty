import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Search, Download, Filter, AlertTriangle, Info, CheckCircle, XCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const logs = [
  {
    id: 1,
    timestamp: "2025-01-07 14:30:25",
    level: "INFO",
    category: "AUTH",
    message: "User 'chedix' logged in successfully",
    ip: "185.213.155.197",
    userAgent: "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36",
  },
  {
    id: 2,
    timestamp: "2025-01-07 14:28:15",
    level: "WARNING",
    category: "PAYMENT",
    message: "Payment attempt failed for user 'testuser' - insufficient credits",
    ip: "192.168.1.100",
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36",
  },
  {
    id: 3,
    timestamp: "2025-01-07 14:25:10",
    level: "ERROR",
    category: "API",
    message: "API rate limit exceeded for token 'Read And Write - DezerX'",
    ip: "10.0.0.1",
    userAgent: "curl/7.68.0",
  },
  {
    id: 4,
    timestamp: "2025-01-07 14:20:05",
    level: "INFO",
    category: "SYSTEM",
    message: "Server maintenance completed successfully",
    ip: "127.0.0.1",
    userAgent: "System",
  },
  {
    id: 5,
    timestamp: "2025-01-07 14:15:30",
    level: "SUCCESS",
    category: "ORDER",
    message: "New server order created by user 'anthonyjs' - Package: budget 1",
    ip: "203.0.113.1",
    userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15",
  },
]

const logStats = [
  { title: "Total Logs", value: "12,456", icon: FileText, color: "text-blue-400" },
  { title: "Errors Today", value: "23", icon: XCircle, color: "text-red-400" },
  { title: "Warnings", value: "156", icon: AlertTriangle, color: "text-yellow-400" },
  { title: "Success Rate", value: "98.2%", icon: CheckCircle, color: "text-green-400" },
]

const getLevelIcon = (level: string) => {
  switch (level) {
    case "ERROR":
      return <XCircle className="w-4 h-4 text-red-400" />
    case "WARNING":
      return <AlertTriangle className="w-4 h-4 text-yellow-400" />
    case "SUCCESS":
      return <CheckCircle className="w-4 h-4 text-green-400" />
    default:
      return <Info className="w-4 h-4 text-blue-400" />
  }
}

const getLevelColor = (level: string) => {
  switch (level) {
    case "ERROR":
      return "bg-red-600"
    case "WARNING":
      return "bg-yellow-600"
    case "SUCCESS":
      return "bg-green-600"
    default:
      return "bg-blue-600"
  }
}

export default function AdminLogs() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
          >
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">System Logs</h1>
            <p className="text-gray-400">Monitor system activity and events</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white btn-animate">
          <Download className="w-4 h-4 mr-2" />
          Export Logs
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {logStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card
              key={stat.title}
              className={`border-0 backdrop-blur-sm card-hover fade-in stagger-${index + 1}`}
              style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Filters */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardContent className="pt-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center space-x-2">
              <Filter className="w-4 h-4 text-gray-400" />
              <span className="text-sm text-gray-400">Filters:</span>
            </div>

            <Select defaultValue="all-levels">
              <SelectTrigger
                className="w-32 text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-levels">All Levels</SelectItem>
                <SelectItem value="error">Error</SelectItem>
                <SelectItem value="warning">Warning</SelectItem>
                <SelectItem value="info">Info</SelectItem>
                <SelectItem value="success">Success</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-categories">
              <SelectTrigger
                className="w-40 text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-categories">All Categories</SelectItem>
                <SelectItem value="auth">Authentication</SelectItem>
                <SelectItem value="payment">Payment</SelectItem>
                <SelectItem value="api">API</SelectItem>
                <SelectItem value="system">System</SelectItem>
                <SelectItem value="order">Orders</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center space-x-2">
              <Input
                type="datetime-local"
                className="text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              />
              <span className="text-gray-400">to</span>
              <Input
                type="datetime-local"
                className="text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              />
            </div>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search logs..."
                  className="pl-10 text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Logs Table */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Timestamp</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Level</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Category</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Message</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">IP Address</th>
                </tr>
              </thead>
              <tbody>
                {logs.map((log) => (
                  <tr key={log.id} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                    <td className="p-4">
                      <span className="text-gray-300 font-mono text-sm">{log.timestamp}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {getLevelIcon(log.level)}
                        <Badge className={`${getLevelColor(log.level)} text-white text-xs`}>{log.level}</Badge>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {log.category}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="max-w-md">
                        <p className="text-white text-sm">{log.message}</p>
                        <p className="text-gray-400 text-xs mt-1 truncate">{log.userAgent}</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300 font-mono text-sm">{log.ip}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
