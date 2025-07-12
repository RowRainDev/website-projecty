import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import { Sliders, Upload, Save, Eye, Palette, Globe, Settings } from "lucide-react"

const customizationSections = [
  {
    title: "Site Branding",
    icon: Globe,
    settings: [
      { name: "Site Name", type: "input", value: "MangooHost", description: "Your site's display name" },
      {
        name: "Site Description",
        type: "textarea",
        value: "Premium hosting services",
        description: "Brief description of your service",
      },
      { name: "Logo Upload", type: "file", description: "Upload your site logo (PNG, JPG)" },
      { name: "Favicon", type: "file", description: "Upload favicon (ICO, PNG)" },
    ],
  },
  {
    title: "Dashboard Settings",
    icon: Settings,
    settings: [
      {
        name: "Welcome Message",
        type: "input",
        value: "Welcome to our platform!",
        description: "Message shown on dashboard",
      },
      { name: "Show Statistics", type: "switch", value: true, description: "Display stats cards on dashboard" },
      { name: "Enable Animations", type: "switch", value: true, description: "Enable page animations" },
      { name: "Dark Mode Default", type: "switch", value: true, description: "Default to dark theme" },
    ],
  },
  {
    title: "Footer Customization",
    icon: Palette,
    settings: [
      {
        name: "Footer Text",
        type: "input",
        value: "©2025 MangooHost. All rights reserved.",
        description: "Copyright text",
      },
      { name: "Show Social Links", type: "switch", value: false, description: "Display social media links" },
      { name: "Custom CSS", type: "textarea", value: "", description: "Additional CSS styles" },
    ],
  },
]

export default function AdminCustomize() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
          >
            <Sliders className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Customize</h1>
            <p className="text-gray-400">Customize your site's appearance and settings</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white bg-transparent">
            <Eye className="w-4 h-4 mr-2" />
            Preview
          </Button>
          <Button className="bg-blue-600 hover:bg-blue-700 text-white btn-animate">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>

      {/* Customization Sections */}
      <div className="space-y-6">
        {customizationSections.map((section, sectionIndex) => {
          const Icon = section.icon
          return (
            <Card
              key={section.title}
              className={`border-0 backdrop-blur-sm card-hover fade-in stagger-${sectionIndex + 1}`}
              style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
            >
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <Icon className="w-5 h-5 text-blue-400" />
                  <CardTitle className="text-white">{section.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                {section.settings.map((setting, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label className="text-gray-300 font-medium">{setting.name}</Label>
                      {setting.type === "switch" && <Switch defaultChecked={setting.value as boolean} />}
                    </div>

                    {setting.type === "input" && (
                      <Input
                        defaultValue={setting.value as string}
                        className="text-white"
                        style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                      />
                    )}

                    {setting.type === "textarea" && (
                      <Textarea
                        defaultValue={setting.value as string}
                        className="text-white min-h-[100px]"
                        style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                      />
                    )}

                    {setting.type === "file" && (
                      <div className="border-2 border-dashed border-gray-600 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                        <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-300 mb-2">Click to upload or drag and drop</p>
                        <Button
                          variant="outline"
                          className="border-gray-600 text-gray-300 hover:text-white bg-transparent"
                        >
                          Choose File
                        </Button>
                      </div>
                    )}

                    <p className="text-sm text-gray-400">{setting.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Preview Section */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-4"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardHeader>
          <div className="flex items-center space-x-3">
            <Eye className="w-5 h-5 text-blue-400" />
            <CardTitle className="text-white">Live Preview</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="border border-gray-600 rounded-lg p-4" style={{ backgroundColor: "rgba(15, 20, 25, 0.5)" }}>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-white text-2xl">🥭</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">MangooHost</h3>
              <p className="text-gray-400 mb-4">Premium hosting services</p>
              <div className="text-sm text-gray-500">©2025 MangooHost. All rights reserved.</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
