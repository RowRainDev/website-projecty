import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Users, DollarSign, TrendingUp, LinkIcon, Info, BarChart3 } from "lucide-react"

export default function Affiliates() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Affiliate Program</h1>
            <p className="text-gray-400">Earn credits by referring new users</p>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Current Earnings</CardTitle>
              <div className="flex items-center space-x-1">
                <DollarSign className="h-4 w-4 text-gray-400" />
                <Info className="h-3 w-3 text-gray-500" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">$0.00</div>
              <p className="text-xs text-gray-500">Total earnings: 0.00</p>
              <Button variant="outline" size="sm" className="mt-2 text-xs border-gray-600 text-gray-400 bg-transparent">
                Minimum $5.00 Required
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Commission Rate</CardTitle>
              <TrendingUp className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">10%</div>
              <p className="text-xs text-gray-500">Your earnings per referral</p>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Your rate</span>
                  <span className="text-white">10%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Total Sign-ups</CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0</div>
              <p className="text-xs text-gray-500">People who used your link</p>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Conversion rate</span>
                  <span className="text-white">0%</span>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-400">Link Clicks</CardTitle>
              <LinkIcon className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white">0</div>
              <p className="text-xs text-gray-500">Total link interactions</p>
              <div className="mt-2 space-y-1">
                <div className="flex justify-between text-xs">
                  <span className="text-gray-400">Recent activity</span>
                  <span className="text-white">0 clicks</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Affiliate Link Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <div className="flex items-center space-x-2">
              <LinkIcon className="w-5 h-5 text-gray-400" />
              <CardTitle className="text-white">Your Affiliate Link</CardTitle>
            </div>
            <p className="text-gray-400">Share this link to earn commission on referrals</p>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center space-x-2 text-gray-400">
              <LinkIcon className="w-4 h-4" />
              <span>Generate your affiliate code to get a link</span>
            </div>
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white">Generate Affiliate Code</Button>
          </CardContent>
        </Card>

        {/* Analytics Section */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-white">Analytics</CardTitle>
              <p className="text-gray-400">Jul 1 - Jul 8, 2025</p>
            </div>
            <div className="flex space-x-2">
              <Badge variant="outline" className="border-green-600 text-green-400">
                7 Days
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-400">
                30 Days
              </Badge>
              <Badge variant="outline" className="border-gray-600 text-gray-400">
                90 Days
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex space-x-2">
                <Badge className="bg-green-600 text-white">Area</Badge>
                <Badge variant="outline" className="border-gray-600 text-gray-400">
                  Bar
                </Badge>
              </div>

              {/* Chart Area */}
              <div className="h-64 bg-gray-700/30 rounded-lg flex items-center justify-center">
                <div className="text-center text-gray-500">
                  <BarChart3 className="w-12 h-12 mx-auto mb-2" />
                  <p>No data available</p>
                </div>
              </div>

              {/* Legend */}
              <div className="flex items-center justify-center space-x-6 text-sm">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                  <span className="text-gray-400">Deployments</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="text-gray-400">Purchases</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                  <span className="text-gray-400">Sign-ups</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tips Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <CardTitle className="text-white">Recent activity</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center space-x-2 text-gray-400">
                <Info className="w-4 h-4" />
                <span>No recent activity</span>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gray-800 border-gray-700">
            <CardHeader>
              <div className="flex items-center space-x-2">
                <LinkIcon className="w-5 h-5 text-gray-400" />
                <CardTitle className="text-white">How to Get More Clicks</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">•</span>
                  <span>Share your affiliate link on social media platforms like Twitter, LinkedIn, and Facebook</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500">•</span>
                  <span>Create content that demonstrates the value of the platform to your audience</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
