import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Server, Database, Users, Activity, Cpu, MemoryStick, HardDrive, Globe } from "lucide-react"

const pterodactylStats = [
  {
    title: "Total Servers",
    value: "156",
    change: "+12",
    icon: Server,
    color: "#10b981",
  },
  {
    title: "Active Users",
    value: "89",
    change: "+5",
    icon: Users,
    color: "#3b82f6",
  },
  {
    title: "CPU Usage",
    value: "67%",
    change: "+3%",
    icon: Cpu,
    color: "#f59e0b",
  },
  {
    title: "Memory Usage",
    value: "4.2GB",
    change: "+0.5GB",
    icon: MemoryStick,
    color: "#8b5cf6",
  },
]

const servers = [
  {
    id: 1,
    name: "Minecraft Server #1",
    user: "anthonyjs",
    status: "Running",
    cpu: "45%",
    memory: "2.1GB / 4GB",
    disk: "1.2GB / 10GB",
    uptime: "5d 12h",
    players: "12/20",
  },
  {
    id: 2,
    name: "Discord Bot Server",
    user: "chedix",
    status: "Running",
    cpu: "12%",
    memory: "512MB / 1GB",
    disk: "256MB / 2GB",
    uptime: "2d 8h",
    players: "N/A",
  },
  {
    id: 3,
    name: "Test Server",
    user: "testuser",
    status: "Stopped",
    cpu: "0%",
    memory: "0MB / 2GB",
    disk: "500MB / 5GB",
    uptime: "0h",
    players: "0/10",
  },
]

const nodes = [
  {
    id: 1,
    name: "Node-01 (Toronto)",
    status: "Online",
    servers: 45,
    cpu: "67%",
    memory: "12.4GB / 32GB",
    disk: "450GB / 1TB",
    load: "2.34",
  },
  {
    id: 2,
    name: "Node-02 (New York)",
    status: "Online",
    servers: 38,
    cpu: "52%",
    memory: "8.9GB / 32GB",
    disk: "320GB / 1TB",
    load: "1.87",
  },
]

export default function AdminPterodactyl() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 fade-in">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
        >
          <Server className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">Pterodactyl Panel</h1>
          <p className="text-gray-400">Manage game servers and hosting infrastructure</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pterodactylStats.map((stat, index) => {
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
        {/* Nodes Status */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardHeader>
            <div className="flex items-center space-x-3">
              <Database className="w-5 h-5 text-blue-400" />
              <CardTitle className="text-white">Nodes Status</CardTitle>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {nodes.map((node) => (
                <div key={node.id} className="p-4 rounded-lg" style={{ backgroundColor: "rgba(15, 20, 25, 0.5)" }}>
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      <Globe className="w-5 h-5 text-blue-400" />
                      <div>
                        <h3 className="text-white font-medium">{node.name}</h3>
                        <p className="text-sm text-gray-400">{node.servers} servers</p>
                      </div>
                    </div>
                    <Badge className="bg-green-600 text-white">{node.status}</Badge>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-400">CPU</div>
                      <div className="text-white">{node.cpu}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Memory</div>
                      <div className="text-white">{node.memory}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Disk</div>
                      <div className="text-white">{node.disk}</div>
                    </div>
                    <div>
                      <div className="text-gray-400">Load</div>
                      <div className="text-white">{node.load}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
          style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
        >
          <CardHeader>
            <CardTitle className="text-white">Quick Actions</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start">
              <Server className="w-4 h-4 mr-2" />
              Create New Server
            </Button>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
              <Users className="w-4 h-4 mr-2" />
              Manage Users
            </Button>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white justify-start">
              <Database className="w-4 h-4 mr-2" />
              Node Management
            </Button>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white justify-start">
              <Activity className="w-4 h-4 mr-2" />
              System Monitoring
            </Button>
          </CardContent>
        </Card>
      </div>

      {/* Servers List */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-4"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Server className="w-5 h-5 text-blue-400" />
              <CardTitle className="text-white">Recent Servers</CardTitle>
            </div>
            <Button variant="ghost" size="sm" className="text-blue-400 hover:text-blue-300">
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Server</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Resources</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Uptime</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">Players</th>
                </tr>
              </thead>
              <tbody>
                {servers.map((server) => (
                  <tr key={server.id} className="border-b border-gray-700/50">
                    <td className="py-4">
                      <div>
                        <div className="text-white font-medium">{server.name}</div>
                        <div className="text-sm text-gray-400">Owner: {server.user}</div>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge className={`${server.status === "Running" ? "bg-green-600" : "bg-red-600"} text-white`}>
                        {server.status}
                      </Badge>
                    </td>
                    <td className="py-4">
                      <div className="space-y-1 text-sm">
                        <div className="flex items-center space-x-2">
                          <Cpu className="w-3 h-3 text-blue-400" />
                          <span className="text-gray-300">{server.cpu}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MemoryStick className="w-3 h-3 text-purple-400" />
                          <span className="text-gray-300">{server.memory}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <HardDrive className="w-3 h-3 text-green-400" />
                          <span className="text-gray-300">{server.disk}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <span className="text-gray-300">{server.uptime}</span>
                    </td>
                    <td className="py-4">
                      <span className="text-gray-300">{server.players}</span>
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
