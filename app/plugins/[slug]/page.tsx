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
  "revit-data-exporter": {
    name: "Revit Data Exporter",
    description:
      "A robust plugin for exporting comprehensive data from your Revit models. Extract schedules, parameters, material quantities, and more into formats like Excel, CSV, or JSON for advanced analysis, reporting, and integration with other software.",
    features: [
      "Customizable data export options",
      "Supports multiple output formats (Excel, CSV, JSON)",
      "Batch export capabilities",
      "Automated data refresh",
      "Integrates with external databases and BI tools",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
  "family-manager": {
    name: "Family Manager Pro",
    description:
      "Take control of your Revit family library with Family Manager Pro. This plugin provides advanced tools for organizing, searching, and deploying Revit families, ensuring consistency and efficiency across all your projects.",
    features: [
      "Centralized family library management",
      "Advanced search and filtering",
      "Batch family loading and updating",
      "Version control for families",
      "Preview and categorize families",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
  "clash-detection-assistant": {
    name: "Clash Detection Assistant",
    description:
      "Streamline your clash detection workflows in Revit. This assistant helps identify and manage clashes between different building elements, providing clear reports and visualization tools to resolve conflicts efficiently.",
    features: [
      "Automated clash detection rules",
      "Visual clash reporting",
      "Integration with Navisworks (optional)",
      "Clash grouping and filtering",
      "Export clash reports",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
  "sheet-generator": {
    name: "Automated Sheet Generator",
    description:
      "Quickly generate and organize drawing sheets from your Revit models. This plugin automates the creation of sheets, placement of views, and population of title block information, saving significant time on documentation.",
    features: [
      "Batch sheet creation",
      "Automated view placement",
      "Customizable title block population",
      "Sheet numbering and naming conventions",
      "Revision management",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
  "parameter-sync": {
    name: "Parameter Sync Tool",
    description:
      "Ensure consistency across your Revit projects by synchronizing parameters. This tool allows you to manage and update shared parameters, project parameters, and family parameters across multiple files and elements.",
    features: [
      "Synchronize shared and project parameters",
      "Batch parameter updates",
      "Parameter mapping and conversion",
      "Error reporting for inconsistencies",
      "Supports various parameter types",
    ],
    image: "/placeholder.svg?height=600&width=900",
  },
}

export default function PluginDetailPage({ params }: { params: { slug: string } }) {
  const plugin = pluginsData[params.slug]

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
