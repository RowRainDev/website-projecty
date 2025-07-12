import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, ArrowLeft, Eye, Save, Code, FileText } from "lucide-react"

const templateVariables = [
  { name: "$userName", description: "User's display name", line: 53 },
  { name: "$packageName", description: "Selected package name", line: 61 },
  { name: "$price", description: "Package price", line: 63 },
  { name: "$packageDetails", description: "Package specifications", line: 66 },
]

export default function AdminEmails() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
            <ArrowLeft className="w-4 h-4" />
          </Button>
          <div className="flex items-center space-x-4">
            <div
              className="w-12 h-12 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
            >
              <Mail className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Edit Email Template</h1>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <p className="text-gray-400">purchase-confirmation</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
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

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Template Variables */}
        <div className="space-y-6">
          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-1"
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardHeader>
              <div className="flex items-center space-x-3">
                <Code className="w-5 h-5 text-blue-400" />
                <CardTitle className="text-white">Template Variables</CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {templateVariables.map((variable, index) => (
                <div key={index} className="p-3 rounded-lg" style={{ backgroundColor: "rgba(15, 20, 25, 0.8)" }}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-blue-400 font-mono text-sm">{variable.name}</span>
                    <Button variant="ghost" size="sm" className="h-6 w-6 p-0 text-gray-400">
                      <FileText className="w-3 h-3" />
                    </Button>
                  </div>
                  <p className="text-xs text-gray-400 mb-1">{variable.description}</p>
                  <p className="text-xs text-gray-500">Line {variable.line}</p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Email Editor */}
        <div className="lg:col-span-3 space-y-6">
          <div className="flex space-x-4">
            <Button variant="default" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Code className="w-4 h-4 mr-2" />
              Edit
            </Button>
            <Button variant="ghost" className="text-gray-400 hover:text-white">
              <Eye className="w-4 h-4 mr-2" />
              Preview
            </Button>
          </div>

          <Card
            className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
            style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
          >
            <CardContent className="p-0">
              <div className="flex">
                {/* Line Numbers */}
                <div
                  className="w-12 py-4 text-center text-xs text-gray-500 border-r border-gray-700"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.5)" }}
                >
                  {Array.from({ length: 30 }, (_, i) => (
                    <div key={i + 1} className="leading-6">
                      {i + 1}
                    </div>
                  ))}
                </div>

                {/* Code Editor */}
                <div className="flex-1 p-4 font-mono text-sm overflow-x-auto">
                  <div className="space-y-1">
                    <div className="text-gray-500">{"<h1>"}</div>
                    <div className="text-orange-400 ml-4">Server Purchase Confirmation</div>
                    <div className="text-gray-500">{"</h1>"}</div>
                    <div className="text-gray-500 mt-4">{"<p>"}</div>
                    <div className="text-white ml-4">
                      Hi{" "}
                      <span className="text-blue-400">
                        {"{{"} $userName {"}}"}
                      </span>
                      ,
                    </div>
                    <div className="text-gray-500">{"</p>"}</div>
                    <div className="text-gray-500 mt-4">{"<p>"}</div>
                    <div className="text-white ml-4">
                      Thank you for your purchase! Your server is now being provisioned.
                    </div>
                    <div className="text-gray-500">{"</p>"}</div>
                    <div className="text-gray-500 mt-4">{"<h2>"}</div>
                    <div className="text-orange-400 ml-4">Purchase Details:</div>
                    <div className="text-gray-500">{"</h2>"}</div>
                    <div className="text-gray-500 mt-4">{"<ul>"}</div>
                    <div className="text-gray-500 ml-4">{"<li>"}</div>
                    <div className="text-white ml-8">
                      <span className="text-orange-400">Package:</span>{" "}
                      <span className="text-blue-400">
                        {"{{"} $packageName {"}}"}
                      </span>
                    </div>
                    <div className="text-gray-500 ml-4">{"</li>"}</div>
                    <div className="text-gray-500 ml-4">{"<li>"}</div>
                    <div className="text-white ml-8">
                      <span className="text-orange-400">Plan Duration:</span>{" "}
                      <span className="text-blue-400">
                        {"{{"} ucfirst $duration {"}}"}
                      </span>
                    </div>
                    <div className="text-gray-500 ml-4">{"</li>"}</div>
                    <div className="text-gray-500 ml-4">{"<li>"}</div>
                    <div className="text-white ml-8">
                      <span className="text-orange-400">Price:</span>{" "}
                      <span className="text-blue-400">
                        {"{{"} $price {"}}"}
                      </span>{" "}
                      credits
                    </div>
                    <div className="text-gray-500 ml-4">{"</li>"}</div>
                    <div className="text-gray-500">{"</ul>"}</div>
                    <div className="text-gray-500 mt-4">{"<h3>"}</div>
                    <div className="text-orange-400 ml-4">Server Specifications:</div>
                    <div className="text-gray-500">{"</h3>"}</div>
                    <div className="text-gray-500 mt-4">{"<ul>"}</div>
                    <div className="text-gray-500 ml-4">{"<li>"}</div>
                    <div className="text-white ml-8">
                      <span className="text-orange-400">CPU:</span>{" "}
                      <span className="text-blue-400">
                        {"{{"} $packageDetails['cpu'] {"}}"}
                      </span>
                    </div>
                    <div className="text-gray-500 ml-4">{"</li>"}</div>
                    <div className="text-gray-500">{"</ul>"}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white bg-transparent">
              Cancel
            </Button>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white btn-animate">
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
