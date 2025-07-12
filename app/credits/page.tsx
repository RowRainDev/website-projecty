import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { CreditCard, Wallet } from "lucide-react"

export default function Credits() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141414" }}>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4 fade-in">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center card-hover"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
          >
            <CreditCard className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Credits</h1>
            <p className="text-gray-400">Purchase credits for resources!</p>
          </div>
        </div>

        {/* TRY Balance Card */}
        <Card
          className="border-0 card-hover fade-in stagger-1"
          style={{ background: "linear-gradient(135deg, #04946c, #059669)" }}
        >
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Your TRY: 0</h2>
                <p className="text-green-100">Earn and purchase try to power your servers</p>
              </div>
              <div className="w-16 h-16 bg-white/20 rounded-lg flex items-center justify-center">
                <Wallet className="w-8 h-8 text-white" />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Purchase Credits Form */}
        <Card
          className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
          style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
        >
          <CardHeader>
            <CardTitle className="text-white text-xl">Purchase Credits</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="coin-amount" className="text-gray-300">
                Coin Amount:
              </Label>
              <Input
                id="coin-amount"
                type="number"
                defaultValue="1"
                min="1"
                className="text-white"
                style={{ backgroundColor: "rgba(20, 20, 20, 0.8)", borderColor: "#374151" }}
              />
            </div>

            <div className="flex items-center space-x-2">
              <div
                className="w-4 h-4 rounded border border-gray-500"
                style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
              ></div>
              <span className="text-gray-400 text-sm">Payment method selection</span>
            </div>

            <Button className="w-full text-white py-3 btn-animate" style={{ backgroundColor: "#04946c" }}>
              Purchase with Selected Method
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
