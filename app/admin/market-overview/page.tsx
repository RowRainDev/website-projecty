import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Store, Package, DollarSign, TrendingUp, Users, ShoppingCart } from "lucide-react"

const marketStats = [
  {
    title: "Total Revenue",
    value: "$12,450",
    change: "+15.2%",
    icon: DollarSign,
    color: "#10b981",
  },
  {
    title: "Total Products",
    value: "24",
    change: "+3",
    icon: Package,
    color: "#3b82f6",
  },
  {
    title: "Active Orders",
    value: "156",
    change: "+12%",
    icon: ShoppingCart,
    color: "#f59e0b",
  },
  {
    title: "Customers",
    value: "1,234",
    change: "+8.5%",
    icon: Users,
    color: "#8b5cf6",
  },
]

const topProducts = [
  {
    id: 1,
    name: "Free Minecraft Server",
    category: "Minecraft",
    price: 3,
    sales: 45,
    revenue: 135,
    status: "Active",
  },
  {
    id: 2,
    name: "Premium Discord Bot",
    category: "Discord",
    price: 25,
    sales: 23,
    revenue: 575,
    status: "Active",
  },
  {
    id: 3,
    name: "VPS Basic",
    category: "VPS",
    price: 15,
    sales: 18,
    revenue: 270,
    status: "Active",
  },
]

const recentOrders = [
  {
    id: "#ORD-001",
    customer: "anthonyjs",
    product: "Premium Minecraft",
    amount: 25,
    status: "Completed",
    date: "2025-01-07 14:30",
  },
  {
    id: "#ORD-002",
    customer: "chedix",
    product: "Free Discord Bot",
    amount: 3,
    status: "Processing",
    date: "2025-01-07 13:15",
  },
  {
    id: "#ORD-003",
    customer: "testuser",
    product: "VPS Basic",
    amount: 15,
    status: "Pending",
    date: "2025-01-07 12:45",
  },
]

export default function AdminMarketOverview() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 fade-in">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
        >
          <Store className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Market Overview</h1>
          <p className="text-gray-400">Monitor your marketplace performance</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {marketStats.map((stat, index) => {
          const Icon = stat.icon
          return (
            <Card
              key={stat.title}
              className={`border-0 backdrop-blur-sm card-hover fade-in stagger-${index + 1}`}
              style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
            >
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <Icon className="h-5 w-5" style={{ color: stat.color }} />
                  <div
                    className="w-8 h-8 rounded flex items-center justify-center"
                    style={{ backgroundColor: `${stat.color}20` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: stat.color }} />
                  </div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-green-400">{stat.change}</div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Top Products */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <TrendingUp className="w-5 h-5 text-blue-400" />
                <CardTitle className="text-white">Top Products</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {topProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.5)" }}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                        <Package className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{product.name}</h3>
                        <p className="text-sm text-gray-400">{product.category}</p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">${product.revenue}</div>
                    <div className="text-sm text-gray-400">{product.sales} sales</div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Recent Orders */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardHeader>
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <ShoppingCart className="w-5 h-5 text-blue-400" />
                <CardTitle className="text-white">Recent Orders</CardTitle>
              </div>
              <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
                View All
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div
                  key={order.id}
                  className="flex items-center justify-between p-3 rounded-lg"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.5)" }}
                >
                  <div className="flex-1">
                    <div className="flex items-center space-x-3">
                      <div className="w-8 h-8 bg-purple-600 rounded-full flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{order.customer[0].toUpperCase()}</span>
                      </div>
                      <div>
                        <h3 className="text-white font-medium">{order.id}</h3>
                        <p className="text-sm text-gray-400">
                          {order.customer} • {order.product}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-white font-medium">${order.amount}</div>
                    <Badge
                      className={`text-xs ${
                        order.status === "Completed"
                          ? "bg-green-600"
                          : order.status === "Processing"
                            ? "bg-blue-600"
                            : "bg-yellow-600"
                      } text-white`}
                    >
                      {order.status}
                    </Badge>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
