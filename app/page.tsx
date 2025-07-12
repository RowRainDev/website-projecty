import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Ticket, FileText, DollarSign, Receipt, User, Shield, CheckCircle, X, ShoppingBag, Plus } from "lucide-react"

export default function Dashboard() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141414" }}>
      {/* Success Alert */}
      <div className="px-6 pt-6 fade-in">
        <Alert
          className="relative card-hover"
          style={{
            backgroundColor: "rgba(4, 148, 108, 0.1)",
            borderColor: "rgba(4, 148, 108, 0.3)",
            color: "#04946c",
          }}
        >
          <CheckCircle className="h-4 w-4" />
          <AlertDescription className="pr-8">
            Ücretli bir şekilde sunucu almak için: shopier.com/mangoohost
          </AlertDescription>
          <Button
            variant="ghost"
            size="sm"
            className="absolute right-2 top-1/2 -translate-y-1/2 h-6 w-6 p-0 btn-animate"
            style={{ color: "#04946c" }}
          >
            <X className="h-4 w-4" />
          </Button>
        </Alert>
      </div>

      <div className="p-6 space-y-8">
        {/* Welcome Section */}
        <div className="flex items-center space-x-4 fade-in stagger-1">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center card-hover"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
          >
            <div className="w-6 h-6 bg-white rounded grid grid-cols-2 gap-0.5 p-1">
              <div className="rounded-sm" style={{ backgroundColor: "#141414" }}></div>
              <div className="rounded-sm" style={{ backgroundColor: "#141414" }}></div>
              <div className="rounded-sm" style={{ backgroundColor: "#141414" }}></div>
              <div className="rounded-sm" style={{ backgroundColor: "#141414" }}></div>
            </div>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Welcome chedix!</h1>
            <p style={{ color: "#9ca3af" }}>We hope you enjoy using our service!</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card
            className="border-0 relative overflow-hidden backdrop-blur-sm card-hover fade-in stagger-1"
            style={{
              backgroundColor: "rgba(20, 20, 20, 0.85)",
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Ticket className="h-5 w-5" style={{ color: "#ffffff" }} />
                <span className="text-sm font-medium text-white">Tickets</span>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-white mb-2">0</div>
                <p className="text-sm" style={{ color: "#888888" }}>
                  active tickets
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-0 relative overflow-hidden backdrop-blur-sm card-hover fade-in stagger-2"
            style={{
              backgroundColor: "rgba(20, 20, 20, 0.85)",
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <FileText className="h-5 w-5" style={{ color: "#ffffff" }} />
                <span className="text-sm font-medium text-white">Total Services</span>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-white mb-2">0</div>
                <p className="text-sm" style={{ color: "#888888" }}>
                  total services
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-0 relative overflow-hidden backdrop-blur-sm card-hover fade-in stagger-3"
            style={{
              backgroundColor: "rgba(20, 20, 20, 0.85)",
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <DollarSign className="h-5 w-5" style={{ color: "#ffffff" }} />
                <span className="text-sm font-medium text-white">Balance</span>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-white mb-2">$0</div>
                <p className="text-sm" style={{ color: "#888888" }}>
                  account balance
                </p>
              </div>
            </CardContent>
          </Card>

          <Card
            className="border-0 relative overflow-hidden backdrop-blur-sm card-hover fade-in stagger-4"
            style={{
              backgroundColor: "rgba(20, 20, 20, 0.85)",
            }}
          >
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <Receipt className="h-5 w-5" style={{ color: "#ffffff" }} />
                <span className="text-sm font-medium text-white">Invoices Due</span>
              </div>
              <div className="text-center">
                <div className="text-5xl font-light text-white mb-2">0</div>
                <p className="text-sm" style={{ color: "#888888" }}>
                  unpaid invoices
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Contact Info Card */}
            <Card
              className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.85)",
              }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#04946c" }}
                  >
                    <User className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <CardTitle className="text-white">Contact Info</CardTitle>
                    <p className="text-sm" style={{ color: "#888888" }}>
                      Add your contact details
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p style={{ color: "#d1d5db" }}>Add your contact information to help us reach you better.</p>
                <Button className="w-full text-white btn-animate" style={{ backgroundColor: "#04946c" }}>
                  Add Contact Info
                </Button>
              </CardContent>
            </Card>

            {/* Support Pin Card */}
            <Card
              className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
              style={{
                backgroundColor: "rgba(20, 20, 20, 0.85)",
              }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: "#374151" }}
                  >
                    <Shield className="w-5 h-5" style={{ color: "#888888" }} />
                  </div>
                  <div>
                    <CardTitle className="text-white">Support Pin</CardTitle>
                    <p className="text-sm" style={{ color: "#888888" }}>
                      Never rotated
                    </p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p style={{ color: "#d1d5db" }}>Use this pin when contacting support to verify your identity.</p>
                <p className="text-xs" style={{ color: "#6b7280" }}>
                  You can generate a new support pin once every 24 hours.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - No Services Section */}
          <div className="flex flex-col items-center justify-center text-center py-12 fade-in stagger-4">
            <div
              className="w-24 h-24 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm card-hover"
              style={{ backgroundColor: "rgba(20, 20, 20, 0.5)" }}
            >
              <ShoppingBag className="w-12 h-12" style={{ color: "#6b7280" }} />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No services yet</h3>
            <p className="mb-6" style={{ color: "#9ca3af" }}>
              You should definitely check one of our packages!
            </p>
            <Button className="text-white btn-animate" style={{ backgroundColor: "#04946c" }}>
              <Plus className="w-4 h-4 mr-2" />
              Go To Store
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
