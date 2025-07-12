"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Layers, Plus, Edit, Trash2, Package } from "lucide-react"

const initialCategories = [
  {
    id: 1,
    name: "Minecraft",
    description: "Minecraft server hosting services",
    productCount: 2,
    status: "Active",
    color: "#10b981",
    created: "2024-12-01",
  },
  {
    id: 2,
    name: "Discord",
    description: "Discord bot hosting services",
    productCount: 2,
    status: "Active",
    color: "#3b82f6",
    created: "2024-12-05",
  },
  {
    id: 3,
    name: "Panel",
    description: "Control panel hosting services",
    productCount: 1,
    status: "Active",
    color: "#8b5cf6",
    created: "2024-12-10",
  },
  {
    id: 4,
    name: "VPS",
    description: "Virtual private server hosting",
    productCount: 0,
    status: "Draft",
    color: "#f59e0b",
    created: "2024-12-15",
  },
]

export default function AdminCategories() {
  const [categories, setCategories] = useState(initialCategories)
  const [showAddForm, setShowAddForm] = useState(false)
  const [newCategory, setNewCategory] = useState({
    name: "",
    description: "",
    color: "#3b82f6",
  })

  const handleAddCategory = () => {
    if (newCategory.name.trim()) {
      const category = {
        id: Math.max(...categories.map((c) => c.id)) + 1,
        name: newCategory.name,
        description: newCategory.description,
        productCount: 0,
        status: "Active" as const,
        color: newCategory.color,
        created: new Date().toISOString().split("T")[0],
      }
      setCategories([...categories, category])
      setNewCategory({ name: "", description: "", color: "#3b82f6" })
      setShowAddForm(false)
    }
  }

  const handleDeleteCategory = (id: number) => {
    setCategories(categories.filter((category) => category.id !== id))
  }

  const handleToggleStatus = (id: number) => {
    setCategories(
      categories.map((category) =>
        category.id === id ? { ...category, status: category.status === "Active" ? "Draft" : "Active" } : category,
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
            <Layers className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Categories</h1>
            <p className="text-gray-400">Organize your products into categories</p>
          </div>
        </div>
        <Button
          className="bg-blue-600 hover:bg-blue-700 text-white btn-animate"
          onClick={() => setShowAddForm(!showAddForm)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Add Category
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-1"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">{categories.length}</div>
            <p className="text-sm text-gray-400">Total Categories</p>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {categories.filter((c) => c.status === "Active").length}
            </div>
            <p className="text-sm text-gray-400">Active Categories</p>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {categories.reduce((sum, c) => sum + c.productCount, 0)}
            </div>
            <p className="text-sm text-gray-400">Total Products</p>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-4"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              {Math.round(categories.reduce((sum, c) => sum + c.productCount, 0) / categories.length)}
            </div>
            <p className="text-sm text-gray-400">Avg Products/Category</p>
          </CardContent>
        </Card>
      </div>

      {/* Add Category Form */}
      {showAddForm && (
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardHeader>
            <CardTitle className="text-white">Add New Category</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label className="text-gray-300">Category Name</Label>
                <Input
                  value={newCategory.name}
                  onChange={(e) => setNewCategory({ ...newCategory, name: e.target.value })}
                  placeholder="Enter category name"
                  className="text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Color</Label>
                <div className="flex space-x-2">
                  <input
                    type="color"
                    value={newCategory.color}
                    onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
                    className="w-12 h-10 rounded border border-gray-600"
                  />
                  <Input
                    value={newCategory.color}
                    onChange={(e) => setNewCategory({ ...newCategory, color: e.target.value })}
                    className="text-white font-mono"
                    style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                  />
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <Label className="text-gray-300">Description</Label>
              <Input
                value={newCategory.description}
                onChange={(e) => setNewCategory({ ...newCategory, description: e.target.value })}
                placeholder="Enter category description"
                className="text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              />
            </div>
            <div className="flex space-x-3">
              <Button onClick={handleAddCategory} className="bg-blue-600 hover:bg-blue-700 text-white">
                Add Category
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

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category, index) => (
          <Card
            key={category.id}
            className={`border-0 backdrop-blur-sm card-hover fade-in stagger-${index + 1}`}
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}20` }}
                  >
                    <Layers className="w-6 h-6" style={{ color: category.color }} />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold">{category.name}</h3>
                    <p className="text-sm text-gray-400">{category.productCount} products</p>
                  </div>
                </div>
                <Badge
                  className={`${category.status === "Active" ? "bg-green-600" : "bg-yellow-600"} text-white cursor-pointer`}
                  onClick={() => handleToggleStatus(category.id)}
                >
                  {category.status}
                </Badge>
              </div>

              <p className="text-gray-300 text-sm mb-4">{category.description}</p>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <Package className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Created {category.created}</span>
                </div>
                <div className="flex space-x-2">
                  <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                    <Edit className="w-4 h-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="ghost"
                    className="text-red-400 hover:text-red-300"
                    onClick={() => handleDeleteCategory(category.id)}
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
