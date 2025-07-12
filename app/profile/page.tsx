import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { User, Calendar, Globe, Edit, Shield, Settings, BarChart3 } from "lucide-react"

export default function Profile() {
  return (
    <div className="min-h-screen p-6 fade-in" style={{ backgroundColor: "#141414" }}>
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Profile</h1>
            <p className="text-gray-400">Manage your account settings</p>
          </div>
        </div>

        {/* Profile Banner */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-1"
          style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
        >
          <div className="h-32 bg-gradient-to-r from-blue-600 to-purple-600 relative">
            <Button variant="ghost" size="sm" className="absolute top-4 right-4 text-white hover:bg-white/20">
              <Edit className="w-4 h-4" />
            </Button>
          </div>
          <CardContent className="relative pt-0 pb-6">
            <div className="flex items-end space-x-4 -mt-8">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center border-4 border-gray-800">
                <span className="text-2xl font-bold text-white">C</span>
              </div>
              <div className="pb-2">
                <div className="flex items-center space-x-2">
                  <h2 className="text-xl font-bold text-white">chedix</h2>
                  <Badge className="bg-green-600 text-white" style={{ backgroundColor: "#04946c" }}>
                    Enable 2FA
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-gray-400 mt-1">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined June 2025</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Globe className="w-4 h-4" />
                    <span>IP: 185.213.155.197</span>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation Tabs */}
        <div className="flex space-x-1 bg-gray-800 rounded-lg p-1">
          <Button variant="default" className="text-white btn-animate" style={{ backgroundColor: "#04946c" }}>
            <User className="w-4 h-4 mr-2" />
            Profile
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-700">
            <Shield className="w-4 h-4 mr-2" />
            Security
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-700">
            <BarChart3 className="w-4 h-4 mr-2" />
            Sessions
          </Button>
          <Button variant="ghost" className="text-gray-400 hover:text-white hover:bg-gray-700">
            <Settings className="w-4 h-4 mr-2" />
            API
          </Button>
        </div>

        {/* Profile Information */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
        >
          <CardHeader>
            <CardTitle className="text-white">Profile Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-gray-300">
                Name
              </Label>
              <Input
                id="name"
                defaultValue="chedix"
                className="text-white"
                style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
              />
            </div>
            <Button className="w-full text-white btn-animate" style={{ backgroundColor: "#04946c" }}>
              SAVE CHANGES
            </Button>
          </CardContent>
        </Card>

        {/* Contact Info */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
          style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
        >
          <CardHeader>
            <div className="flex items-center space-x-3">
              <div
                className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center"
                style={{ backgroundColor: "#04946c" }}
              >
                <User className="w-5 h-5 text-white" />
              </div>
              <div>
                <CardTitle className="text-white">Contact Info</CardTitle>
                <p className="text-sm text-gray-400">Add your contact details</p>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <p className="text-gray-300 mb-4">Add your contact information to help us reach you better.</p>
            <Button className="w-full text-white btn-animate" style={{ backgroundColor: "#04946c" }}>
              Add Contact Info
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
