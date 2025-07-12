import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Palette, Save, RotateCcw, Eye, Copy } from "lucide-react"

const colorSchemes = [
  {
    name: "Default",
    primary: "#04946c",
    secondary: "#141414",
    accent: "#3b82f6",
    background: "#0f1419",
    text: "#ffffff",
  },
  {
    name: "Ocean Blue",
    primary: "#0ea5e9",
    secondary: "#1e293b",
    accent: "#06b6d4",
    background: "#0f172a",
    text: "#f8fafc",
  },
  {
    name: "Purple Dream",
    primary: "#8b5cf6",
    secondary: "#1e1b4b",
    accent: "#a855f7",
    background: "#0f0f23",
    text: "#f3f4f6",
  },
  {
    name: "Emerald",
    primary: "#10b981",
    secondary: "#064e3b",
    accent: "#34d399",
    background: "#022c22",
    text: "#ecfdf5",
  },
]

const colorSettings = [
  { name: "Primary Color", key: "primary", value: "#04946c", description: "Main brand color" },
  { name: "Secondary Color", key: "secondary", value: "#141414", description: "Secondary brand color" },
  { name: "Accent Color", key: "accent", value: "#3b82f6", description: "Accent and highlight color" },
  { name: "Background Color", key: "background", value: "#0f1419", description: "Main background color" },
  { name: "Text Color", key: "text", value: "#ffffff", description: "Primary text color" },
  { name: "Card Background", key: "cardBg", value: "#1a1f2e", description: "Card background color" },
  { name: "Border Color", key: "border", value: "#374151", description: "Border and divider color" },
  { name: "Success Color", key: "success", value: "#10b981", description: "Success state color" },
  { name: "Warning Color", key: "warning", value: "#f59e0b", description: "Warning state color" },
  { name: "Error Color", key: "error", value: "#ef4444", description: "Error state color" },
]

export default function AdminColors() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
          >
            <Palette className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Color Scheme</h1>
            <p className="text-gray-400">Customize your site's color palette</p>
          </div>
        </div>
        <div className="flex space-x-3">
          <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white bg-transparent">
            <RotateCcw className="w-4 h-4 mr-2" />
            Reset
          </Button>
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

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Color Presets */}
        <div className="space-y-6">
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-1"
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardHeader>
              <CardTitle className="text-white">Color Presets</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {colorSchemes.map((scheme, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors cursor-pointer"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.5)" }}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-white font-medium">{scheme.name}</h3>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                      <Copy className="w-3 h-3" />
                    </Button>
                  </div>
                  <div className="flex space-x-2">
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: scheme.primary }} title="Primary"></div>
                    <div
                      className="w-6 h-6 rounded"
                      style={{ backgroundColor: scheme.secondary }}
                      title="Secondary"
                    ></div>
                    <div className="w-6 h-6 rounded" style={{ backgroundColor: scheme.accent }} title="Accent"></div>
                    <div
                      className="w-6 h-6 rounded border border-gray-500"
                      style={{ backgroundColor: scheme.background }}
                      title="Background"
                    ></div>
                    <div
                      className="w-6 h-6 rounded border border-gray-500"
                      style={{ backgroundColor: scheme.text }}
                      title="Text"
                    ></div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Color Settings */}
        <div className="lg:col-span-2 space-y-6">
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardHeader>
              <CardTitle className="text-white">Custom Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {colorSettings.map((color, index) => (
                  <div key={index} className="space-y-2">
                    <Label className="text-gray-300 font-medium">{color.name}</Label>
                    <div className="flex space-x-3">
                      <div
                        className="w-12 h-10 rounded border border-gray-600 flex-shrink-0"
                        style={{ backgroundColor: color.value }}
                      ></div>
                      <div className="flex-1">
                        <Input
                          defaultValue={color.value}
                          className="text-white font-mono"
                          style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                        />
                      </div>
                    </div>
                    <p className="text-sm text-gray-400">{color.description}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Preview */}
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardHeader>
              <CardTitle className="text-white">Live Preview</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="border border-gray-600 rounded-lg p-6" style={{ backgroundColor: "#0f1419" }}>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div
                      className="w-12 h-12 rounded-lg flex items-center justify-center"
                      style={{ backgroundColor: "#04946c" }}
                    >
                      <span className="text-white">🥭</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">MangooHost</h3>
                      <p className="text-gray-400">Premium hosting services</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}>
                      <div className="text-white font-medium">Card Example</div>
                      <div className="text-gray-400 text-sm">Sample content</div>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}>
                      <div className="text-white font-medium">Another Card</div>
                      <div className="text-gray-400 text-sm">More content</div>
                    </div>
                    <div className="p-4 rounded-lg" style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}>
                      <div className="text-white font-medium">Third Card</div>
                      <div className="text-gray-400 text-sm">Even more content</div>
                    </div>
                  </div>

                  <div className="flex space-x-3">
                    <Button className="text-white" style={{ backgroundColor: "#04946c" }}>
                      Primary Button
                    </Button>
                    <Button className="text-white" style={{ backgroundColor: "#3b82f6" }}>
                      Secondary Button
                    </Button>
                    <Button variant="outline" className="border-gray-600 text-gray-300 bg-transparent">
                      Outline Button
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
