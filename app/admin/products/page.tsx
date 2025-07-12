"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Package, Search, Plus, Edit, Trash2, Eye, Filter } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const initialProducts = [
  {
    id: 1,
    name: "Free Minecraft Server",
    category: "Minecraft",
    price: 3,
    credits: 3,
    status: "Active",
    stock: "Unlimited",
    sales: 45,
    created: "2024-12-01",
  },
  {
    id: 2,
    name: "Premium Minecraft Server",
    category: "Minecraft",
    price: 25,
    credits: 25,
    status: "Active",
    stock: "Unlimited",
    sales: 23,
    created: "2024-12-01",
  },
  {
    id: 3,
    name: "Free Discord Bot",
    category: "Discord",
    price: 3,
    credits: 3,
    status: "Active",
    stock: "Unlimited",
    sales: 18,
    created: "2024-12-05",
  },
  {
    id: 4,
    name: "Premium Discord Bot",
    category: "Discord",
    price: 25,
    credits: 25,
    status: "Active",
    stock: "Unlimited",
    sales: 12,
    created: "2024-12-05",
  },
  {
    id: 5,
    name: "Free Eggactyl Panel",
    category: "Panel",
    price: 3,
    credits: 3,
    status: "Draft",
    stock: "Unlimited",
    sales: 0,
    created: "2024-12-10",
  },
]

export default function AdminProducts() {
  const [products, setProducts] = useState(initialProducts)
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredProducts = products.filter((product) => {
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.category.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || product.status.toLowerCase() === statusFilter
    return matchesSearch && matchesStatus
  })

  const handleDeleteProduct = (id: number) => {
    setProducts(products.filter((product) => product.id !== id))
  }

  const handleToggleStatus = (id: number) => {
    setProducts(
      products.map((product) =>
        product.id === id ? { ...product, status: product.status === "Active" ? "Draft" : "Active" } : product,
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
            <Package className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Products</h1>
            <p className="text-gray-400">Manage your marketplace products</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white btn-animate">
          <Plus className="w-4 h-4 mr-2" />
          Add Product
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-1"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">{products.length}</div>
            <p className="text-sm text-gray-400">Total Products</p>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">{products.filter((p) => p.status === "Active").length}</div>
            <p className="text-sm text-gray-400">Active Products</p>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">{products.reduce((sum, p) => sum + p.sales, 0)}</div>
            <p className="text-sm text-gray-400">Total Sales</p>
          </CardContent>
        </Card>
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-4"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardContent className="p-6">
            <div className="text-2xl font-bold text-white">
              ${products.reduce((sum, p) => sum + p.price * p.sales, 0)}
            </div>
            <p className="text-sm text-gray-400">Total Revenue</p>
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
                className="w-32 text-white"
                style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
              >
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search products..."
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

      {/* Products Table */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Product</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Category</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Price</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Sales</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Revenue</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Package className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="text-white font-medium">{product.name}</div>
                          <div className="text-sm text-gray-400">ID: {product.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge variant="outline" className="border-gray-600 text-gray-300">
                        {product.category}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <div className="text-white font-medium">${product.price}</div>
                      <div className="text-sm text-gray-400">{product.credits} credits</div>
                    </td>
                    <td className="p-4">
                      <Badge
                        className={`${product.status === "Active" ? "bg-green-600" : "bg-yellow-600"} text-white cursor-pointer`}
                        onClick={() => handleToggleStatus(product.id)}
                      >
                        {product.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-white">{product.sales}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-white">${product.price * product.sales}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
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
                          onClick={() => handleDeleteProduct(product.id)}
                        >
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
