import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Store, ArrowRight } from "lucide-react"
import Image from "next/image"

const categories = [
  {
    id: 1,
    title: "Free Minecraft",
    image: "/placeholder.svg?height=200&width=300",
    startingPrice: 3,
    description: "Minecraft hosting services",
  },
  {
    id: 2,
    title: "Premium Minecraft",
    image: "/placeholder.svg?height=200&width=300",
    startingPrice: 25,
    description: "Premium Minecraft hosting",
  },
  {
    id: 3,
    title: "Free Discord Bot",
    image: "/placeholder.svg?height=200&width=300",
    startingPrice: 3,
    description: "Discord bot hosting",
  },
  {
    id: 4,
    title: "Premium Discord Bot",
    image: "/placeholder.svg?height=200&width=300",
    startingPrice: 25,
    description: "Premium Discord bot hosting",
  },
  {
    id: 5,
    title: "Free Eggactyl",
    image: "/placeholder.svg?height=200&width=300",
    startingPrice: 3,
    description: "Eggactyl panel hosting",
  },
]

export default function StorePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#141414" }}>
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        {/* Header */}
        <div className="flex items-center space-x-4 fade-in">
          <div
            className="w-12 h-12 rounded-lg flex items-center justify-center card-hover"
            style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
          >
            <Store className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-white">Marketplace</h1>
            <p className="text-gray-400">Browse categories and services</p>
          </div>
        </div>

        {/* Categories Section */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2 fade-in stagger-1">
            <div
              className="w-6 h-6 rounded flex items-center justify-center"
              style={{ backgroundColor: "rgba(20, 20, 20, 0.8)" }}
            >
              <div className="w-3 h-3 border border-gray-400 rounded-sm"></div>
            </div>
            <h2 className="text-xl font-semibold text-white">Categories (5)</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <Card
                key={category.id}
                className={`border-0 backdrop-blur-sm card-hover fade-in stagger-${index + 1} overflow-hidden`}
                style={{ backgroundColor: "rgba(20, 20, 20, 0.85)" }}
              >
                <div className="relative">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover"
                  />
                  <Badge className="absolute top-3 right-3 text-white" style={{ backgroundColor: "#04946c" }}>
                    Starting at {category.startingPrice} credits
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-white">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button className="w-full text-white btn-animate" style={{ backgroundColor: "#04946c" }}>
                    Browse Products
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
