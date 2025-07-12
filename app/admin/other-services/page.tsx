"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Grid3X3, Plus, Settings, Activity, Globe, Database, Shield, Zap } from "lucide-react"

const services = [
  {
    id: 1,
    name: "Web Hosting",
    description: "Traditional web hosting with cPanel",
    status: "Active",
    users: 45,
    uptime: "99.9%",
    icon: Globe,
    color: "#10b981",
    features: ["cPanel", "SSL Certificates", "Email Hosting", "MySQL Databases"],
  },
  {
    id: 2,
    name: "VPS Hosting",
    description: "Virtual Private Server hosting",
    status: "Active",
    users: 23,
    uptime: "99.8%",
    icon: Database,
    color: "#3b82f6",
    features: ["Root Access", "Custom OS", "SSD Storage", "DDoS Protection"],
  },
  {
    id: 3,
    name: "CDN Service",
    description: "Content Delivery Network",
    status: "Beta",
    users: 12,
    uptime: "99.5%",
    icon: Zap,
    color: "#f59e0b",
    features: ["Global Edge Locations", "SSL/TLS", "Real-time Analytics", "API Access"],
  },
  {
    id: 4,
    name: "Backup Service",
    description: "Automated backup solutions",
    status: "Planned",
    users: 0,
    uptime: "N/A",
    icon: Shield,
    color: "#8b5cf6",
    features: ["Automated Backups", "Point-in-time Recovery", "Encryption", "Multi-region"],
  },
]

const serviceStats = [
  { title: "Total Services", value: "4", icon: Grid3X3 },
  { title: "Active Services", value: "2", icon: Activity },
  { title: "Total Users", value: "80", icon: Globe },
  { title: "Avg Uptime", value: "99.7%", icon: Shield },
]

export default function AdminOtherServices() {
  const [selectedService, setSelectedService] = useState<number | null>(null)

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-600"
      case "Beta":
        return "bg-yellow-600"
      case "Planned":
        return "bg-blue-600"
      default:
        return "bg-gray-600"
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
            <Grid3X3 className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Other Services</h1>
            <p className="text-gray-400">Manage additional hosting services</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white btn-animate">
          <Plus className="w-4 h-4 mr-2" />
          Add Service
        </Button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {serviceStats.map((stat, index) => {
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
                    <div className="text-2xl font-bold text-white">{stat.value}</div>
                    <p className="text-sm text-gray-400">{stat.title}</p>
                  </div>
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service, index) => {
          const Icon = service.icon
          return (
            <Card
              key={service.id}
              className={`border-0 backdrop-blur-sm card-hover fade-in stagger-${index + 1} cursor-pointer transition-all duration-300 ${
                selectedService === service.id ? "ring-2 ring-blue-500" : ""
              }`}
              style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
              onClick={() => setSelectedService(selectedService === service.id ? null : service.id)}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <div>
                      <CardTitle className="text-white">{service.name}</CardTitle>
                      <p className="text-sm text-gray-400">{service.description}</p>
                    </div>
                  </div>
                  <Badge className={`${getStatusColor(service.status)} text-white`}>{service.status}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-sm text-gray-400">Users</div>
                      <div className="text-white font-medium">{service.users}</div>
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">Uptime</div>
                      <div className="text-white font-medium">{service.uptime}</div>
                    </div>
                  </div>

                  {selectedService === service.id && (
                    <div className="space-y-3 pt-4 border-t border-gray-700">
                      <h4 className="text-white font-medium">Features:</h4>
                      <div className="grid grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                            <span className="text-sm text-gray-300">{feature}</span>
                          </div>
                        ))}
                      </div>
                      <div className="flex space-x-2 pt-3">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                          <Settings className="w-4 h-4 mr-1" />
                          Configure
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:text-white bg-transparent"
                        >
                          <Activity className="w-4 h-4 mr-1" />
                          Monitor
                        </Button>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Service Management */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardHeader>
          <CardTitle className="text-white">Service Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white justify-start">
              <Plus className="w-4 h-4 mr-2" />
              Deploy New Service
            </Button>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white justify-start">
              <Settings className="w-4 h-4 mr-2" />
              Global Settings
            </Button>
            <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white justify-start">
              <Activity className="w-4 h-4 mr-2" />
              Performance Monitor
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
