import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Users, Search, Plus, Edit, Trash2, Shield, Mail, Calendar, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const users = [
  {
    id: 1,
    name: "anthonyjs",
    email: "anthony@example.com",
    role: "Admin",
    status: "Active",
    credits: 2138,
    joinDate: "2024-01-15",
    lastLogin: "2 hours ago",
    avatar: "A",
  },
  {
    id: 2,
    name: "chedix",
    email: "chedix@example.com",
    role: "User",
    status: "Active",
    credits: 0,
    joinDate: "2024-06-20",
    lastLogin: "1 day ago",
    avatar: "C",
  },
  {
    id: 3,
    name: "testuser",
    email: "test@example.com",
    role: "User",
    status: "Suspended",
    credits: 50,
    joinDate: "2024-03-10",
    lastLogin: "1 week ago",
    avatar: "T",
  },
]

const stats = [
  { title: "Total Users", value: "1,234", change: "+12%", icon: Users },
  { title: "Active Users", value: "1,156", change: "+8%", icon: Shield },
  { title: "New This Month", value: "89", change: "+23%", icon: Calendar },
  { title: "Total Credits", value: "$12,450", change: "+15%", icon: Mail },
]

export default function AdminUsers() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
          >
            <Users className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">User Management</h1>
            <p className="text-gray-400">Manage user accounts and permissions</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white btn-animate">
          <Plus className="w-4 h-4 mr-2" />
          Add User
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => {
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
                    <p className="text-sm text-green-400">{stat.change}</p>
                  </div>
                  <Icon className="w-8 h-8 text-blue-400" />
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

            <Select defaultValue="all-roles">
              <SelectTrigger
                className="w-32 text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-roles">All Roles</SelectItem>
                <SelectItem value="admin">Admin</SelectItem>
                <SelectItem value="user">User</SelectItem>
                <SelectItem value="moderator">Moderator</SelectItem>
              </SelectContent>
            </Select>

            <Select defaultValue="all-status">
              <SelectTrigger
                className="w-32 text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all-status">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
                <SelectItem value="banned">Banned</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search users..."
                  className="pl-10 text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Users Table */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">User</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Role</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Credits</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Join Date</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Last Login</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">{user.avatar}</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{user.name}</div>
                          <div className="text-sm text-gray-400">{user.email}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={`${user.role === "Admin" ? "bg-red-600" : "bg-gray-600"} text-white`}>
                        {user.role}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={`${
                          user.status === "Active"
                            ? "bg-green-600"
                            : user.status === "Suspended"
                              ? "bg-yellow-600"
                              : "bg-red-600"
                        } text-white`}
                      >
                        {user.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-white">{user.credits} credits</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300">{user.joinDate}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300">{user.lastLogin}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
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
