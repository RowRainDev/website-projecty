"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Plus, Edit, Trash2, Eye, Calendar, User } from "lucide-react"

const initialNews = [
  {
    id: 1,
    title: "New Minecraft Server Packages Available",
    content: "We've added new premium Minecraft server packages with enhanced performance and features.",
    author: "Admin",
    status: "Published",
    publishDate: "2025-01-07",
    views: 1234,
    category: "Announcement",
  },
  {
    id: 2,
    title: "Scheduled Maintenance - January 10th",
    content: "We will be performing scheduled maintenance on our servers. Expected downtime: 2 hours.",
    author: "Admin",
    status: "Published",
    publishDate: "2025-01-05",
    views: 856,
    category: "Maintenance",
  },
  {
    id: 3,
    title: "Discord Bot Hosting Updates",
    content: "Enhanced Discord bot hosting with better uptime and new features coming soon.",
    author: "Admin",
    status: "Draft",
    publishDate: "2025-01-08",
    views: 0,
    category: "Update",
  },
]

export default function AdminNews() {
  const [news, setNews] = useState(initialNews)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newArticle, setNewArticle] = useState({
    title: "",
    content: "",
    category: "Announcement",
  })

  const handleAddNews = () => {
    if (newArticle.title.trim() && newArticle.content.trim()) {
      const article = {
        id: Math.max(...news.map((n) => n.id)) + 1,
        title: newArticle.title,
        content: newArticle.content,
        author: "Admin",
        status: "Draft" as const,
        publishDate: new Date().toISOString().split("T")[0],
        views: 0,
        category: newArticle.category,
      }
      setNews([article, ...news])
      setNewArticle({ title: "", content: "", category: "Announcement" })
      setShowAddForm(false)
    }
  }

  const handleDeleteNews = (id: number) => {
    setNews(news.filter((article) => article.id !== id))
  }

  const handleToggleStatus = (id: number) => {
    setNews(
      news.map((article) =>
        article.id === id ? { ...article, status: article.status === "Published" ? "Draft" : "Published" } : article,
      ),
    )
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
            <MessageSquare className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">News & Announcements</h1>
            <p className="text-gray-400">Manage news articles and announcements</p>
          </div>
        </div>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white btn-animate"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add News
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-1"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">{news.length}</div>
            <p className="text-sm text-gray-400">Total Articles</p>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">{news.filter((n) => n.status === "Published").length}</div>
            <p className="text-sm text-gray-400">Published</p>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">{news.filter((n) => n.status === "Draft").length}</div>
            <p className="text-sm text-gray-400">Drafts</p>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-4"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">{news.reduce((sum, n) => sum + n.views, 0)}</div>
            <p className="text-sm text-gray-400">Total Views</p>
          </CardContent>
        </Card>
      </div>

      {/* Add News Form */}
      {showAddForm && (
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardHeader>
            <CardTitle className="text-white">Add New Article</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Title</Label>
                <Input
                  value={newArticle.title}
                  onChange={(e) => setNewArticle({ ...newArticle, title: e.target.value })}
                  placeholder="Enter article title"
                  className="text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Category</Label>
                <select
                  value={newArticle.category}
                  onChange={(e) => setNewArticle({ ...newArticle, category: e.target.value })}
                  className="w-full p-2 rounded border text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                >
                  <option value="Announcement">Announcement</option>
                  <option value="Maintenance">Maintenance</option>
                  <option value="Update">Update</option>
                  <option value="News">News</option>
                </select>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Content</Label>
              <Textarea
                value={newArticle.content}
                onChange={(e) => setNewArticle({ ...newArticle, content: e.target.value })}
                placeholder="Enter article content"
                className="text-white min-h-[120px]"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              />
            </div>
            <div className="flex space-x-3">
              <Button onClick={handleAddNews} className="bg-blue-600 hover:bg-blue-700 text-white">
                Add Article
              </Button>
              <Button
                variant="outline"
                onClick={() => setShowAddForm(false)}
                className="border-gray-600 text-gray-300 hover:text-white bg-transparent"
              >
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* News List */}
      <div className="space-y-4">
        {news.map((article, index) => (
          <Card
            key={article.id}
            className={`border-0 backdrop-blur-sm card-hover fade-in stagger-${index + 1}`}
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardContent className="p-6">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <h3 className="text-xl font-semibold text-white">{article.title}</h3>
                    <Badge
                      className={`${article.status === "Published" ? "bg-green-600" : "bg-yellow-600"} text-white cursor-pointer`}
                      onClick={() => handleToggleStatus(article.id)}
                    >
                      {article.status}
                    </Badge>
                    <Badge variant="outline" className="border-gray-600 text-gray-300">
                      {article.category}
                    </Badge>
                  </div>
                  <p className="text-gray-300 mb-4">{article.content}</p>
                  <div className="flex items-center space-x-6 text-sm text-gray-400">
                    <div className="flex items-center space-x-1">
                      <User className="w-4 h-4" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{article.publishDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{article.views} views</span>
                    </div>
                  </div>
                </div>
                <div className="flex space-x-2 ml-4">
                  <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                    <Eye className="w-4 h-4" />
                  </Button>
                  <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-red-400 hover:text-red-300"
                    onClick={() => handleDeleteNews(article.id)}
                  >
                    <Trash2 className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
