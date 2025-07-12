import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Wallet, Shield, Info } from "lucide-react"

export default function WalletPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141414" }}>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4 fade-in">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center card-hover"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
          >
            <Wallet className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Wallet</h1>
            <p className="text-gray-400">Manage your TRY and transactions</p>
          </div>
        </div>

        {/* Create Wallet Banner */}
        <Card
          className="border-0 card-hover fade-in stagger-1"
          style={{ background: "linear-gradient(135deg, #04946c, #059669)" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Create Your Wallet</h2>
                <p className="text-green-100">Set up your wallet to start managing your TRY</p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Security Info */}
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
          >
            <CardHeader>
              <div className="flex items-center space-x-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
                >
                  <Shield className="w-5 h-5 text-gray-400" />
                </div>
                <div>
                  <CardTitle className="text-white">Create Your Secure Wallet</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Set up your secure wallet to start sending and receiving TRY. Your wallet information is encrypted and
                secure.
              </p>
            </CardContent>
          </Card>

          {/* Wallet Creation Form */}
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
          >
            <CardContent className="pt-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="wallet-name" className="text-gray-300">
                  Wallet Name
                </Label>
                <div className="relative">
                  <Wallet className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="wallet-name"
                    placeholder="Enter a wallet name"
                    className="pl-10 text-white"
                    style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="security-question" className="text-gray-300">
                  Security Question: Favorite Animal
                </Label>
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-orange-500">🦊</div>
                  <Input
                    id="security-question"
                    placeholder="Enter your favorite animal"
                    className="pl-10 text-white"
                    style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="wallet-password" className="text-gray-300">
                  Wallet Password
                </Label>
                <div className="relative">
                  <Shield className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    id="wallet-password"
                    type="password"
                    placeholder="Enter your wallet password"
                    className="pl-10 text-white"
                    style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
                  />
                </div>
              </div>

              <div
                className="flex items-start space-x-2 p-3 rounded-lg"
                style={{ backgroundColor: "rgba(20, 20, 20, 0.5)" }}
              >
                <Info className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-sm text-gray-300">
                  Your wallet password is used to secure your transactions. Make sure to use a strong password and keep
                  it safe.
                </p>
              </div>

              <Button className="w-full text-white btn-animate" style={{ backgroundColor: "#04946c" }}>
                <Shield className="w-4 h-4 mr-2" />
                Create Secure Wallet
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
