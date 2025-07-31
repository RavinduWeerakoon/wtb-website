import { PluginCard } from "@/components/plugin-card"

const plugins = [
  {
    slug: "wordtobim-chatbot",
    name: "WordToBIM Chatbot",
    description: "Interact with Revit using natural language commands, powered by AI.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "automated-door-window-schedules",
    name: "🔧Automated Door & Window Schedules ",
    description: "Generate door and window schedules within seconds",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "company-specific-takeoff-sheets",
    name: "🏢 Company-Specific Takeoff Sheets",
    description: "Create material and quantity takeoff sheets directly",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "rendering-layouts",
    name: "🎨 Rendering & Layouts",
    description: "Instantly produce professional 2D plans",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "compliance-checker",
    name: "✅ Compliance Checker",
    description: "Ensure every model aligns with local and national codes",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "parameter-sync",
    name: "📐 2D-to-3D Element Conversion",
    description: "Revolutionary 2D-to-3D conversion plugin",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function PluginsPage() {
  return (
    <div className="container py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="flex flex-col items-center gap-4 mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
          Our Innovative Revit Plugins
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Explore our suite of powerful plugins designed to enhance your Autodesk Revit workflow, boost productivity,
          and streamline your BIM processes.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {plugins.map((plugin) => (
          <PluginCard key={plugin.slug} {...plugin} />
        ))}
      </div>
    </div>
  )
}
