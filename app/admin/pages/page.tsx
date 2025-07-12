import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { FileText, Search, Plus, Edit, Trash2, Eye, Globe } from "lucide-react"

const pages = [
  {
    id: 1,
    title: "Terms of Service",
    slug: "/terms",
    status: "Published",
    lastModified: "2024-12-15",
    author: "Admin",
    views: 1234,
  },
  {
    id: 2,
    title: "Privacy Policy",
    slug: "/privacy",
    status: "Published",
    lastModified: "2024-12-10",
    author: "Admin",
    views: 987,
  },
  {
    id: 3,
    title: "About Us",
    slug: "/about",
    status: "Draft",
    lastModified: "2024-12-20",
    author: "Admin",
    views: 0,
  },
  {
    id: 4,
    title: "Contact Information",
    slug: "/contact",
    status: "Published",
    lastModified: "2024-11-30",
    author: "Admin",
    views: 567,
  },
  {
    id: 5,
    title: "FAQ",
    slug: "/faq",
    status: "Published",
    lastModified: "2024-12-18",
    author: "Admin",
    views: 2341,
  },
]

const pageStats = [
  { title: "Total Pages", value: "12", icon: FileText },
  { title: "Published", value: "9", icon: Globe },
  { title: "Drafts", value: "3", icon: Edit },
  { title: "Total Views", value: "15.2K", icon: Eye },
]

export default function AdminPages() {
  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between fade-in">
        <div className="flex items-center space-x-4">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center"
            style={{ backgroundColor: "rgba(59, 130, 246, 0.2)" }}
          >
            <FileText className="w-6 h-6 text-blue-400" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Pages</h1>
            <p className="text-gray-400">Manage your website pages and content</p>
          </div>
        </div>
        <Button className="bg-blue-600 hover:bg-blue-700 text-white btn-animate">
          <Plus className="w-4 h-4 mr-2" />
          New Page
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {pageStats.map((stat, index) => {
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
                    <p className="text-sm text-gray-400">{stat.title}</p>
                    <p className="text-2xl font-bold text-white">{stat.value}</p>
                  </div>
                  <Icon className="w-8 h-8 text-blue-400" />
                </div>
              </CardContent>
            </Card>
          )
        })}
      </div>

      {/* Search and Filters */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-2"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardContent className="pt-6">
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex-1 max-w-md">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  placeholder="Search pages..."
                  className="pl-10 text-white"
                  style={{ backgroundColor: "rgba(15, 20, 25, 0.8)", borderColor: "#374151" }}
                />
              </div>
            </div>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white bg-transparent">
              All Status
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white bg-transparent">
              Published
            </Button>
            <Button variant="outline" className="border-gray-600 text-gray-300 hover:text-white bg-transparent">
              Drafts
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Pages Table */}
      <Card
        className="border-0 backdrop-blur-sm card-hover fade-in stagger-3"
        style={{ backgroundColor: "rgba(26, 31, 46, 0.8)" }}
      >
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-gray-700">
                <tr>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Title</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Slug</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Status</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Last Modified</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Views</th>
                  <th className="text-left p-4 text-sm font-medium text-gray-400">Actions</th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page.id} className="border-b border-gray-700/50 hover:bg-gray-700/20">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-4 h-4 text-blue-400" />
                        <div>
                          <div className="text-white font-medium">{page.title}</div>
                          <div className="text-sm text-gray-400">by {page.author}</div>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300 font-mono text-sm">{page.slug}</span>
                    </td>
                    <td className="p-4">
                      <Badge className={`${page.status === "Published" ? "bg-green-600" : "bg-yellow-600"} text-white`}>
                        {page.status}
                      </Badge>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300">{page.lastModified}</span>
                    </td>
                    <td className="p-4">
                      <span className="text-gray-300">{page.views.toLocaleString()}</span>
                    </td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" className="text-blue-400 hover:text-blue-300">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-green-400 hover:text-green-300">
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="ghost" className="text-red-400 hover:text-red-300">
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
