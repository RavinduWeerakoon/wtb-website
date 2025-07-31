import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft } from "lucide-react"

// Mock data for plugins
const pluginsData: { [key: string]: { name: string; description: string; features: string[]; image: string } } = {
  "wordtobim-chatbot": {
    name: "WordToBIM Chatbot",
    description: "Generate door and window schedules within seconds using our intelligent plugin. Fully customizable to match your company's formatting standards to deliver tender-ready schedules effortlessly.",
    features: [
      "Natural language processing for Revit commands",
      "Automated task execution",
      "Supports various Revit operations (e.g., creating elements, modifying properties)",
      "Reduces learning curve for new users",
      "Increases design efficiency",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
  "automated-door-window-schedules": {
    name: "🔧Automated Door & Window Schedules",
    description:
      "Generate door and window schedules within seconds using our intelligent plugin. Fully customizable to match your company's formatting standards to deliver tender-ready schedules effortlessly.",
    features: [
      "Customizable data export options",
      "Supports multiple output formats (Excel, CSV, JSON)",
      "Batch export capabilities",
      "Automated data refresh",
      "Integrates with external databases and BI tools",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
  "company-specific-takeoff-sheets": {
    name: "🏢 Company-Specific Takeoff Sheets",
    description:
      "Create material and quantity takeoff sheets directly from Revit using your company's unique templates. Ensure brand consistency across every project while eliminating hours of manual work.",
    features: [
      "Centralized family library management",
      "Advanced search and filtering",
      "Batch family loading and updating",
      "Version control for families",
      "Preview and categorize families",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
  "rendering-layouts": {
    name: "🎨 Rendering & Layouts",
    description:
      "Instantly produce professional 2D plans and rendering layouts from your Revit model. Let our AI engine take care of view setups, annotations, and polished presentation-ready sheets.",
    features: [
      "Automated clash detection rules",
      "Visual clash reporting",
      "Integration with Navisworks (optional)",
      "Clash grouping and filtering",
      "Export clash reports",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
  "compliance-checker": {
    name: "✅ Compliance Checker",
    description:
      "Ensure every model aligns with local and national codes using our smart compliance engine. Get real-time alerts, corrective suggestions, and correspondence tracking. Seamlessly integrate ASHRAE standards and jurisdiction-specific updates into your BIM environment.",
    features: [
      "Batch sheet creation",
      "Automated view placement",
      "Customizable title block population",
      "Sheet numbering and naming conventions",
      "Revision management",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
  "element-conversion": {
    name: "📐 2D-to-3D Element Conversion",
    description:
      "Elevate your 2D workflows with our revolutionary 2D-to-3D conversion plugin. Whether it's a floor plan, section drawing, or detail sketch, our AI interprets and transforms it into intelligent 3D Revit elements in seconds.",
    features: [
      "Convert lines, shapes, and symbols from DWG/DXF drawings into walls, windows, doors, and more.",
      "Automatically apply BIM intelligence (parameters, categories, constraints) during conversion.",
      "Perfect for rapid prototyping, legacy drawing upgrades, or accelerating early design phases.",
      "Save countless hours of modeling time and reduce human error.",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
}

export default function PluginDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = params
  const plugin = pluginsData[slug]

  if (!plugin) {
    return (
      <div className="container py-12 md:py-24 lg:py-32 text-center bg-background text-foreground">
        <h1 className="text-3xl font-bold text-destructive">Plugin Not Found</h1>
        <p className="mt-4 text-muted-foreground">The plugin you are looking for does not exist.</p>
        <Button asChild className="mt-8">
          <Link href="/plugins">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Plugins
          </Link>
        </Button>
      </div>
    )
  }


  return (
    <div className="container py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="mb-8">
        <Button variant="outline" asChild>
          <Link href="/plugins">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Plugins
          </Link>
        </Button>
      </div>

      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="relative h-[300px] md:h-[450px] lg:h-[550px] rounded-lg overflow-hidden shadow-lg">
          <Image
            src={plugin.image || "/placeholder.svg"}
            alt={plugin.name}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-primary">{plugin.name}</h1>
          <p className="text-lg text-muted-foreground">{plugin.description}</p>
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-foreground">Key Features:</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {plugin.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          <Button size="lg" asChild>
            <Link href="/contact">Inquire about {plugin.name}</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
