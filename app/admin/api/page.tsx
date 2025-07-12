import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Key, Plus, Trash2, Info, Shield, ArrowLeft } from "lucide-react"

const apiTokens = [
  {
    name: "Read And Write - DezerX",
    token: "••••••••••••••••••••••••••••••••••••••••",
    permission: "Read And Write",
    created: "May 3, 2025",
  },
  {
    name: "Read Only - DezerX",
    token: "••••••••••••••••••••••••••••••••••••••••",
    permission: "Read Only",
    created: "May 3, 2025",
  },
  {
    name: "None - DezerX",
    token: "••••••••••••••••••••••••••••••••••••••••",
    permission: "None",
    created: "May 3, 2025",
  },
]

const permissionLevels = [
  {
    name: "None",
    description: "No access to any API endpoints",
    badge: "No Access",
    badgeColor: "bg-gray-600",
  },
  {
    name: "Read Only",
    description: "Can only access GET endpoints",
    badge: "GET Only",
    badgeColor: "bg-blue-600",
  },
  {
    name: "Read And Write",
    description: "Full access to all API endpoints",
    badge: "Full Access",
    badgeColor: "bg-green-600",
  },
]

export default function AdminAPI() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 fade-in">
        <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
          <ArrowLeft className="w-4 h-4" />
        </Button>
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
          >
            <Key className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">API Management</h1>
            <p className="text-gray-400">Create and manage API tokens</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Create Token Form */}
        <div className="lg:col-span-2 space-y-6">
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-1"
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Plus className="w-5 h-5 text-green-400" />
                <CardTitle className="text-white">Create New API Token</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="token-name" className="text-gray-300">
                  Token Name
                </Label>
                <Input
                  id="token-name"
                  placeholder="Enter a name for your token"
                  className="text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                />
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Label className="text-gray-300">Permission Level</Label>
                  <Info className="w-4 h-4 text-gray-400" />
                </div>

                <div className="space-y-3">
                  {permissionLevels.map((level) => (
                    <div
                      key={level.name}
                      className="p-4 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors cursor-pointer"
                      style={{ backgroundColor: "rgba(15, 20, 25, 0.5)" }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3">
                            <h3 className="text-white font-medium">{level.name}</h3>
                            <Badge className={`${level.badgeColor} text-white text-xs`}>{level.badge}</Badge>
                          </div>
                          <p className="text-sm text-gray-400 mt-1">{level.description}</p>
                        </div>
                        <div className="w-4 h-4 border border-gray-400 rounded-full"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white btn-animate">
                <Key className="w-4 h-4 mr-2" />
                Create Token
              </Button>
            </CardContent>
          </Card>

          {/* API Tokens Table */}
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Key className="w-5 h-5 text-blue-400" />
                <CardTitle className="text-white">Your API Tokens</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-700">
                      <th className="text-left py-3 text-sm font-medium text-gray-400">NAME</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-400">TOKEN</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-400">PERMISSION</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-400">CREATED</th>
                      <th className="text-left py-3 text-sm font-medium text-gray-400">ACTIONS</th>
                    </tr>
                  </thead>
                  <tbody>
                    {apiTokens.map((token, index) => (
                      <tr key={index} className="border-b border-gray-700/50">
                        <td className="py-4">
                          <div className="flex items-center space-x-2">
                            <Key className="w-4 h-4 text-blue-400" />
                            <span className="text-white">{token.name}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <div
                            className="font-mono text-sm px-3 py-1 rounded"
                            style={{ backgroundColor: "rgba(15, 20, 25, 0.8)" }}
                          >
                            <span className="text-gray-300">{token.token}</span>
                          </div>
                        </td>
                        <td className="py-4">
                          <Badge
                            className={`${
                              token.permission === "Read And Write"
                                ? "bg-green-600"
                                : token.permission === "Read Only"
                                  ? "bg-blue-600"
                                  : "bg-gray-600"
                            } text-white`}
                          >
                            {token.permission}
                          </Badge>
                        </td>
                        <td className="py-4">
                          <span className="text-gray-300">{token.created}</span>
                        </td>
                        <td className="py-4">
                          <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                            <Trash2 className="w-4 h-4 mr-1" />
                            Delete
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

        {/* Token Security Info */}
        <div className="space-y-6">
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-blue-400" />
                <CardTitle className="text-white">Token Security</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-3">
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-300">Tokens expire automatically after 6 months</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-300">Store tokens securely and never share them</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-300">Tokens cannot be recovered once created</p>
                </div>
                <div className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
                  <p className="text-sm text-gray-300">Permission levels cannot be changed after creation</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
