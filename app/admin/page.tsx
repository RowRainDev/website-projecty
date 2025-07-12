import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Monitor, Server, HardDrive, Activity, Cpu, MemoryStick, Database, Eye, Trash2 } from "lucide-react"

const statsCards = [
  {
    title: "Total CPU Cores",
    value: "100",
    subtitle: "Available processing power",
    icon: Cpu,
    color: "#3b82f6",
  },
  {
    title: "Total Memory",
    value: "375.8 GB",
    subtitle: "Available RAM capacity",
    icon: MemoryStick,
    color: "#8b5cf6",
  },
  {
    title: "Total Storage",
    value: "2730 GB",
    subtitle: "Available disk space",
    icon: HardDrive,
    color: "#06b6d4",
  },
  {
    title: "Online Hypervisors",
    value: "1/1",
    subtitle: "Active server nodes",
    icon: Server,
    color: "#10b981",
  },
]

const hypervisors = [
  {
    name: "Toronto #1",
    hostname: "No hostname",
    connection: "SSH: 22",
    cores: "100 cores",
    memory: "375.8 GB",
    storage: "2730 GB",
    volumes: "3 volumes",
    status: "Online",
  },
]

const servicePackages = [
  { name: "budget 1", status: "Active" },
  { name: "budget 2", status: "Active" },
  { name: "budget 3", status: "Active" },
]

export default function AdminOverview() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center space-x-4 fade-in">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
        >
          <Monitor className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-white">VirtFusion Overview</h1>
          <p className="text-gray-400">Monitor Hypervisor Activity & Resource Management</p>
        </div>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {statsCards.map((stat, index) => {
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
                  <div className="text-sm text-gray-400">{stat.subtitle}</div>
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Hypervisors Section */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Server className="w-5 h-5 text-blue-400" />
              <div>
                <CardTitle className="text-white">Hypervisors</CardTitle>
                <p className="text-sm text-gray-400">Manage your server infrastructure</p>
              </div>
            </div>
            <Badge variant="outline" className="border-blue-500 text-blue-400">
              1 total
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="text-left py-3 text-sm font-medium text-gray-400">SERVER</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">CONNECTION</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">RESOURCES</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">STORAGE</th>
                  <th className="text-left py-3 text-sm font-medium text-gray-400">STATUS</th>
                </tr>
              </thead>
              <tbody>
                {hypervisors.map((hypervisor, index) => (
                  <tr key={index} className="border-b border-gray-700/50">
                    <td className="py-4">
                      <div>
                        <div className="text-white font-medium">{hypervisor.name}</div>
                        <div className="text-sm text-gray-400">{hypervisor.hostname}</div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="flex items-center space-x-2">
                        <Activity className="w-4 h-4 text-green-400" />
                        <span className="text-gray-300">{hypervisor.connection}</span>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Cpu className="w-3 h-3 text-blue-400" />
                          <span className="text-sm text-gray-300">{hypervisor.cores}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <MemoryStick className="w-3 h-3 text-purple-400" />
                          <span className="text-sm text-gray-300">{hypervisor.memory}</span>
                        </div>
                      </div>
                    </td>
                    <td className="py-4">
                      <div className="space-y-1">
                        <div className="text-sm text-gray-300">{hypervisor.storage}</div>
                        <div className="text-xs text-gray-400">{hypervisor.volumes}</div>
                      </div>
                    </td>
                    <td className="py-4">
                      <Badge className="bg-green-600 text-white">{hypervisor.status}</Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>

      {/* Service Packages Section */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardHeader>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Database className="w-5 h-5 text-blue-400" />
              <div>
                <CardTitle className="text-white">Service Packages</CardTitle>
                <p className="text-sm text-gray-400">Available hosting configurations</p>
              </div>
            </div>
            <Badge variant="outline" className="border-blue-500 text-blue-400">
              10 packages
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="flex space-x-4 mb-6">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
              All Packages
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Active
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              Disabled
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {servicePackages.map((pkg, index) => (
              <Card key={index} className="border-0 card-hover" style={{ backgroundColor: "rgba(15, 20, 25, 0.8)" }}>
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-white font-medium">{pkg.name}</h3>
                    <Badge className="bg-green-600 text-white text-xs">{pkg.status}</Badge>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <Cpu className="w-3 h-3 text-blue-400" />
                        <span className="text-xs text-gray-400">CPU Cores</span>
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center space-x-1 mb-1">
                        <MemoryStick className="w-3 h-3 text-purple-400" />
                        <span className="text-xs text-gray-400">Memory</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button size="sm" variant="ghost" className="flex-1 text-blue-400 hover:text-blue-300">
                      <Eye className="w-3 h-3 mr-1" />
                      View
                    </Button>
                    <Button size="sm" variant="ghost" className="flex-1 text-red-400 hover:text-red-300">
                      <Trash2 className="w-3 h-3 mr-1" />
                      Delete
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
