"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Bell, Plus, Send, Users, Mail, MessageSquare, AlertTriangle } from "lucide-react"

const initialNotifications = [
  {
    id: 1,
    title: "Server Maintenance Scheduled",
    message: "Scheduled maintenance will occur on January 10th from 2:00 AM to 4:00 AM UTC.",
    type: "maintenance",
    recipients: "all",
    status: "sent",
    sentDate: "2025-01-07 10:30",
    readCount: 1156,
    totalRecipients: 1234,
  },
  {
    id: 2,
    title: "New Features Available",
    message: "Check out our new Discord bot hosting features with enhanced performance.",
    type: "announcement",
    recipients: "active",
    status: "sent",
    sentDate: "2025-01-06 14:15",
    readCount: 892,
    totalRecipients: 1156,
  },
  {
    id: 3,
    title: "Payment Reminder",
    message: "Your invoice #INV-001 is due in 3 days. Please make payment to avoid service interruption.",
    type: "billing",
    recipients: "specific",
    status: "draft",
    sentDate: null,
    readCount: 0,
    totalRecipients: 1,
  },
]

export default function AdminNotificationCenter() {
  const [notifications, setNotifications] = useState(initialNotifications)
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [newNotification, setNewNotification] = useState({
    title: "",
    message: "",
    type: "announcement",
    recipients: "all",
  })

  const handleCreateNotification = () => {
    if (newNotification.title.trim() && newNotification.message.trim()) {
      const notification = {
        id: Math.max(...notifications.map((n) => n.id)) + 1,
        title: newNotification.title,
        message: newNotification.message,
        type: newNotification.type,
        recipients: newNotification.recipients,
        status: "draft" as const,
        sentDate: null,
        readCount: 0,
        totalRecipients:
          newNotification.recipients === "all" ? 1234 : newNotification.recipients === "active" ? 1156 : 1,
      }
      setNotifications([notification, ...notifications])
      setNewNotification({ title: "", message: "", type: "announcement", recipients: "all" })
      setShowCreateForm(false)
    }
  }

  const handleSendNotification = (id: number) => {
    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              status: "sent" as const,
              sentDate: new Date().toISOString().slice(0, 16).replace("T", " "),
            }
          : notification,
      ),
    )
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "maintenance":
        return <AlertTriangle className="w-4 h-4 text-yellow-400" />
      case "billing":
        return <Mail className="w-4 h-4 text-red-400" />
      default:
        return <MessageSquare className="w-4 h-4 text-blue-400" />
    }
  }

  const getTypeColor = (type: string) => {
    switch (type) {
      case "maintenance":
        return "bg-yellow-600"
      case "billing":
        return "bg-red-600"
      default:
        return "bg-blue-600"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
          >
            <Bell className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Notification Center</h1>
            <p className="text-gray-400">Send notifications to your users</p>
          </div>
        </div>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white btn-animate"
          onClick={() => setShowCreateForm(!showCreateForm)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Notification
        </Button>
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
                <div className="text-2xl font-bold text-white">{notifications.length}</div>
                <p className="text-sm text-gray-400">Total Notifications</p>
              </div>
              <Bell className="w-8 h-8 text-blue-400" />
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
                  {notifications.filter((n) => n.status === "sent").length}
                </div>
                <p className="text-sm text-gray-400">Sent</p>
              </div>
              <Send className="w-8 h-8 text-green-400" />
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
                  {notifications.filter((n) => n.status === "draft").length}
                </div>
                <p className="text-sm text-gray-400">Drafts</p>
              </div>
              <MessageSquare className="w-8 h-8 text-yellow-400" />
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
                  {Math.round(
                    (notifications.reduce((sum, n) => sum + n.readCount, 0) /
                      notifications.reduce((sum, n) => sum + n.totalRecipients, 0)) *
                      100,
                  ) || 0}
                  %
                </div>
                <p className="text-sm text-gray-400">Read Rate</p>
              </div>
              <Users className="w-8 h-8 text-purple-400" />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Create Notification Form */}
      {showCreateForm && (
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardHeader>
            <CardTitle className="text-white">Create New Notification</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Title</Label>
                <Input
                  value={newNotification.title}
                  onChange={(e) => setNewNotification({ ...newNotification, title: e.target.value })}
                  placeholder="Enter notification title"
                  className="text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Type</Label>
                <select
                  value={newNotification.type}
                  onChange={(e) => setNewNotification({ ...newNotification, type: e.target.value })}
                  className="w-full p-2 rounded border text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                >
                  <option value="announcement">Announcement</option>
                  <option value="maintenance">Maintenance</option>
                  <option value="billing">Billing</option>
                  <option value="security">Security</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Recipients</Label>
              <select
                value={newNotification.recipients}
                onChange={(e) => setNewNotification({ ...newNotification, recipients: e.target.value })}
                className="w-full p-2 rounded border text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              >
                <option value="all">All Users (1,234)</option>
                <option value="active">Active Users (1,156)</option>
                <option value="specific">Specific Users</option>
              </select>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Message</Label>
              <Textarea
                value={newNotification.message}
                onChange={(e) => setNewNotification({ ...newNotification, message: e.target.value })}
                placeholder="Enter notification message"
                className="text-white min-h-[120px]"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              />
            </div>
            <div className="flex space-x-3">
              <Button onClick={handleCreateNotification} className="bg-blue-600 hover:bg-blue-700 text-white">
                Create Notification
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowCreateForm(false)}
                className="border-gray-600 text-gray-300 hover:text-white bg-transparent"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Notifications List */}
      <div className="space-y-4">
        {notifications.map((notification, index) => (
          <Card
            key={notification.id}
            className={`border-0 backdrop-blur-sm card-hover fade-in stagger-${index + 1}`}
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    {getTypeIcon(notification.type)}
                    <h3 className="text-xl font-semibold text-white">{notification.title}</h3>
                    <Badge className={`${getTypeColor(notification.type)} text-white`}>{notification.type}</Badge>
                    <Badge
                      className={`${notification.status === "sent" ? "bg-green-600" : "bg-yellow-600"} text-white`}
                    >
                      {notification.status}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-4">{notification.message}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <Users className="w-4 h-4" />
                      <span>
                        {notification.recipients === "all"
                          ? "All Users"
                          : notification.recipients === "active"
                            ? "Active Users"
                            : "Specific Users"}
                      </span>
                    </div>
                    {notification.sentDate && (
                      <div className="flex items-center space-x-1">
                        <Send className="w-4 h-4" />
                        <span>Sent {notification.sentDate}</span>
                      </div>
                    )}
                    {notification.status === "sent" && (
                      <div className="flex items-center space-x-1">
                        <span>
                          {notification.readCount}/{notification.totalRecipients} read (
                          {Math.round((notification.readCount / notification.totalRecipients) * 100)}%)
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  {notification.status === "draft" && (
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700 text-white"
                      onClick={() => handleSendNotification(notification.id)}
                    >
                      <Send className="w-4 h-4 mr-1" />
                      Send
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
