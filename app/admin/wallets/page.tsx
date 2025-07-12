import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Wallet, Search, Plus, Edit, Trash2, TrendingUp, TrendingDown, DollarSign } from "lucide-react"

const wallets = [
  {
    id: 1,
    user: "anthonyjs",
    balance: 2138.5,
    currency: "USD",
    status: "Active",
    lastTransaction: "2025-01-07 14:30:25",
    transactionType: "Credit",
    transactionAmount: 100.0,
  },
  {
    id: 2,
    user: "chedix",
    balance: 0.0,
    currency: "USD",
    status: "Active",
    lastTransaction: "2024-12-20 10:15:30",
    transactionType: "Debit",
    transactionAmount: 25.0,
  },
  {
    id: 3,
    user: "testuser",
    balance: 50.0,
    currency: "USD",
    status: "Suspended",
    lastTransaction: "2024-12-15 16:45:12",
    transactionType: "Credit",
    transactionAmount: 50.0,
  },
]

const walletStats = [
  { title: "Total Balance", value: "$2,188.50", change: "+12.5%", icon: DollarSign, trend: "up" },
  { title: "Active Wallets", value: "2", change: "0%", icon: Wallet, trend: "neutral" },
  { title: "Transactions Today", value: "15", change: "+25%", icon: TrendingUp, trend: "up" },
  { title: "Average Balance", value: "$729.50", change: "-5.2%", icon: TrendingDown, trend: "down" },
]

export default function AdminWallets() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
          >
            <Wallet className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Wallets</h1>
            <p className="text-gray-400">Manage user wallets and balances</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white btn-animate">
          <Plus className="w-4 h-4 mr-2" />
          Add Credits
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {walletStats.map((stat, index) => {
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
                    <p
                      className={`text-sm ${
                        stat.trend === "up"
                          ? "text-green-400"
                          : stat.trend === "down"
                            ? "text-red-400"
                            : "text-gray-400"
                      }`}
                    >
                      {stat.change}
                    </p>
                  </div>
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Search and Filters */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardContent className="pt-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search wallets..."
                  className="pl-10 text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                />
              </div>
            </div>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white bg-transparent">
              All Status
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white bg-transparent">
              Active
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white bg-transparent">
              Suspended
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Wallets Table */}
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
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Balance</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Last Transaction</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Type</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Amount</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {wallets.map((wallet) => (
                  <tr key={wallet.id} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                          <span className="text-white font-medium">{wallet.user[0].toUpperCase()}</span>
                        </div>
                        <div>
                          <div className="text-white font-medium">{wallet.user}</div>
                          <div className="text-sm text-gray-400">ID: {wallet.id}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <div className="text-white font-medium">
                        ${wallet.balance.toFixed(2)} {wallet.currency}
                      </div>
                    </td>
                    <td className="p-4">
                      <Badge className={`${wallet.status === "Active" ? "bg-green-600" : "bg-red-600"} text-white`}>
                        {wallet.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300 font-mono text-sm">{wallet.lastTransaction}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex items-center space-x-2">
                        {wallet.transactionType === "Credit" ? (
                          <TrendingUp className="w-4 h-4 text-green-400" />
                        ) : (
                          <TrendingDown className="w-4 h-4 text-red-400" />
                        )}
                        <span
                          className={`text-sm ${
                            wallet.transactionType === "Credit" ? "text-green-400" : "text-red-400"
                          }`}
                        >
                          {wallet.transactionType}
                        </span>
                      </div>
                    </td>
                    <td className="p-4">
                      <span
                        className={`font-medium ${
                          wallet.transactionType === "Credit" ? "text-green-400" : "text-red-400"
                        }`}
                      >
                        {wallet.transactionType === "Credit" ? "+" : "-"}${wallet.transactionAmount.toFixed(2)}
                      </span>
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
