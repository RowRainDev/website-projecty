import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Users, User, Building, ChevronDown } from "lucide-react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function Contacts() {
  return (
    <div className="min-h-screen bg-gray-900 p-6">
      <div className="max-w-4xl mx-auto space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4">
          <div className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center">
            <Users className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Contacts</h1>
            <p className="text-gray-400">Manage your contacts and connections</p>
          </div>
        </div>

        {/* Contact Information Form */}
        <Card className="bg-gray-800 border-gray-700">
          <CardHeader>
            <CardTitle className="text-white">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Basic Information Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-400" />
                <h3 className="text-white font-medium">Basic Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name" className="text-gray-300">
                    First Name *
                  </Label>
                  <Input id="first-name" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name" className="text-gray-300">
                    Last Name *
                  </Label>
                  <Input id="last-name" className="bg-gray-700 border-gray-600 text-white" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="contact-type" className="text-gray-300">
                  Contact Type
                </Label>
                <Select defaultValue="personal">
                  <SelectTrigger className="bg-gray-700 border-gray-600 text-white">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="personal">Personal</SelectItem>
                    <SelectItem value="business">Business</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-center space-x-2">
                <Checkbox id="favorite" className="border-gray-600" />
                <Label htmlFor="favorite" className="text-gray-300">
                  Mark as Favorite
                </Label>
              </div>
            </div>

            {/* Contact Information Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-600 rounded border border-gray-500"></div>
                <h3 className="text-white font-medium">Contact Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
                  <Input id="email" type="email" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-gray-300">
                    Phone
                  </Label>
                  <Input id="phone" type="tel" className="bg-gray-700 border-gray-600 text-white" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="mobile" className="text-gray-300">
                    Mobile
                  </Label>
                  <Input id="mobile" type="tel" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="website" className="text-gray-300">
                    Website
                  </Label>
                  <Input id="website" type="url" className="bg-gray-700 border-gray-600 text-white" />
                </div>
              </div>
            </div>

            {/* Company Information Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-gray-400" />
                <h3 className="text-white font-medium">Company Information</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="company" className="text-gray-300">
                    Company
                  </Label>
                  <Input id="company" className="bg-gray-700 border-gray-600 text-white" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="job-title" className="text-gray-300">
                    Job Title
                  </Label>
                  <Input id="job-title" className="bg-gray-700 border-gray-600 text-white" />
                </div>
              </div>
            </div>

            {/* Notes Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 bg-gray-600 rounded border border-gray-500"></div>
                <h3 className="text-white font-medium">Notes</h3>
              </div>

              <div className="space-y-2">
                <Textarea
                  placeholder="Add notes about this contact..."
                  className="bg-gray-700 border-gray-600 text-white min-h-[100px]"
                />
              </div>
            </div>

            {/* Advanced Fields Toggle */}
            <div className="flex items-center space-x-2 text-gray-400 cursor-pointer">
              <ChevronDown className="w-4 h-4" />
              <span className="text-sm">Show Advanced Fields</span>
            </div>

            {/* Create Contact Button */}
            <div className="pt-4">
              <Button className="bg-green-600 hover:bg-green-700 text-white px-8">CREATE CONTACT</Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
