"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Search, Filter, User, Clock, AlertCircle, CheckCircle, XCircle } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const initialTickets = [
  {
    id: 1,
    title: "Server not starting after payment",
    description: "I paid for my Minecraft server but it's not starting. Please help.",
    user: "chedix",
    priority: "High",
    status: "Open",
    category: "Technical",
    created: "2025-01-07 14:30",
    lastReply: "2025-01-07 15:45",
    replies: 3,
  },
  {
    id: 2,
    title: "Billing question about invoice",
    description: "I have a question about my latest invoice charges.",
    user: "anthonyjs",
    priority: "Medium",
    status: "In Progress",
    category: "Billing",
    created: "2025-01-06 10:15",
    lastReply: "2025-01-07 09:30",
    replies: 5,
  },
  {
    id: 3,
    title: "Discord bot hosting setup help",
    description: "Need help setting up my Discord bot on your hosting platform.",
    user: "testuser",
    priority: "Low",
    status: "Waiting for Customer",
    category: "Support",
    created: "2025-01-05 16:20",
    lastReply: "2025-01-06 11:00",
    replies: 2,
  },
  {
    id: 4,
    title: "Refund request for unused service",
    description: "I would like to request a refund for my unused hosting service.",
    user: "newuser",
    priority: "Medium",
    status: "Closed",
    category: "Billing",
    created: "2025-01-04 13:45",
    lastReply: "2025-01-05 14:20",
    replies: 8,
  },
]

export default function AdminTickets() {
  const [tickets, setTickets] = useState(initialTickets)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [priorityFilter, setPriorityFilter] = useState("all")

  const filteredTickets = tickets.filter((ticket) => {
    const matchesSearch =
      ticket.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
      ticket.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || ticket.status.toLowerCase().replace(" ", "-") === statusFilter
    const matchesPriority = priorityFilter === "all" || ticket.priority.toLowerCase() === priorityFilter
    return matchesSearch && matchesStatus && matchesPriority
  })

  const handleStatusChange = (id: number, newStatus: string) => {
    setTickets(tickets.map((ticket) => (ticket.id === id ? { ...ticket, status: newStatus } : ticket)))
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Open":
        return <AlertCircle className="w-4 h-4 text-red-400" />
      case "In Progress":
        return <Clock className="w-4 h-4 text-yellow-400" />
      case "Waiting for Customer":
        return <User className="w-4 h-4 text-blue-400" />
      case "Closed":
        return <CheckCircle className="w-4 h-4 text-green-400" />
      default:
        return <XCircle className="w-4 h-4 text-gray-400" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "bg-red-600"
      case "In Progress":
        return "bg-yellow-600"
      case "Waiting for Customer":
        return "bg-blue-600"
      case "Closed":
        return "bg-green-600"
      default:
        return "bg-gray-600"
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "bg-red-600"
      case "Medium":
        return "bg-yellow-600"
      case "Low":
        return "bg-green-600"
      default:
        return "bg-gray-600"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 fade-in">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
        >
          <MessageSquare className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Support Tickets</h1>
          <p className="text-gray-400">Manage customer support tickets</p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-1"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">{tickets.length}</div>
                <p className="text-sm text-gray-400">Total Tickets</p>
              </div>
              <MessageSquare className="w-8 h-8 text-blue-400" />
            </div>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">
                  {tickets.filter((t) => t.status === "Open" || t.status === "In Progress").length}
                </div>
                <p className="text-sm text-gray-400">Active Tickets</p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">
                  {tickets.filter((t) => t.priority === "High").length}
                </div>
                <p className="text-sm text-gray-400">High Priority</p>
              </div>
              <XCircle className="w-8 h-8 text-red-400" />
            </div>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-4"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-2xl font-bold text-white">
                  {Math.round((tickets.filter((t) => t.status === "Closed").length / tickets.length) * 100)}%
                </div>
                <p className="text-sm text-gray-400">Resolution Rate</p>
              </div>
              <CheckCircle className="w-8 h-8 text-green-400" />
            </div>
          </CardContent>
        </Card>
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

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger
                className="w-48 text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in-progress">In Progress</SelectItem>
                <SelectItem value="waiting-for-customer">Waiting for Customer</SelectItem>
                <SelectItem value="closed">Closed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priorityFilter} onValueChange={setPriorityFilter}>
              <SelectTrigger
                className="w-32 text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Priority</SelectItem>
                <SelectItem value="high">High</SelectItem>
                <SelectItem value="medium">Medium</SelectItem>
                <SelectItem value="low">Low</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Tickets Table */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Ticket</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">User</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Priority</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Category</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Last Reply</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.map((ticket) => (
                  <tr key={ticket.id} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                    <td className="p-4">
                      <div>
                        <div className="text-white font-medium">
                          #{ticket.id} - {ticket.title}
                        </div>
                        <div className="text-sm text-gray-400 mt-1 max-w-md truncate">{ticket.description}</div>
                        <div className="text-xs text-gray-500 mt-1">{ticket.replies} replies</div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{ticket.user[0].toUpperCase()}</span>
                        </div>
                        <span className="text-white">{ticket.user}</span>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={`${getPriorityColor(ticket.priority)} text-white`}>{ticket.priority}</Badge>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {getStatusIcon(ticket.status)}
                        <select
                          value={ticket.status}
                          onChange={(e) => handleStatusChange(ticket.id, e.target.value)}
                          className={`text-xs px-2 py-1 rounded text-white border-0 ${getStatusColor(ticket.status)}`}
                        >
                          <option value="Open">Open</option>
                          <option value="In Progress">In Progress</option>
                          <option value="Waiting for Customer">Waiting for Customer</option>
                          <option value="Closed">Closed</option>
                        </select>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {ticket.category}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-sm text-gray-300">{ticket.lastReply}</div>
                    </td>
                    <td className="p-4">
                      <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                        View
                      </Button>
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
