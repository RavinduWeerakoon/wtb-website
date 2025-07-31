import { Button } from "@/components/ui/button"
import Link from "next/link"
import { WordToBIMDetails } from "@/components/wordtobim-details"
import { PluginCard } from "@/components/plugin-card"

const plugins = [
  {
    slug: "revit-data-exporter",
    name: "Revit Data Exporter",
    description: "Export Revit model data to various formats for analysis and reporting.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "family-manager",
    name: "Family Manager Pro",
    description: "Efficiently manage and organize your Revit families with ease.",
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    slug: "clash-detection-assistant",
    name: "Clash Detection Assistant",
    description: "Automate and streamline clash detection workflows in Revit.",
    image: "/placeholder.svg?height=200&width=300",
  },
]

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center py-12 md:py-24 lg:py-32 bg-background text-foreground">
      {/* Hero Section */}
      <section className="container grid items-center justify-center gap-6 pb-8 pt-6 md:py-12 lg:py-24 text-center">
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-primary">
            WordToBIM: Revolutionizing Revit with AI
          </h1>
          <p className="max-w-[700px] text-muted-foreground md:text-xl">
            Unlock the full potential of Autodesk Revit with our flagship AI-powered chatbot and essential BIM plugins.
          </p>
          <div className="flex gap-4">
            <Button asChild>
              <Link href="/plugins/wordtobim-chatbot">Learn More about WordToBIM</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/plugins">Explore All Plugins</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WordToBIM Chatbot Details */}
      <WordToBIMDetails />

      {/* Other Plugins Section */}
      <section className="container py-12 md:py-24 lg:py-32">
        <div className="flex flex-col items-center gap-4 mb-8 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            Discover Other Powerful BIM Plugins by Concolabs
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Beyond WordToBIM, we offer a suite of tools designed to enhance your Revit workflow.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {plugins.map((plugin) => (
            <PluginCard key={plugin.slug} {...plugin} />
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button asChild>
            <Link href="/plugins">View All Plugins</Link>
          </Button>
        </div>
      </section>

      {/* Call to Action for Contact */}
      <section className="container py-12 md:py-24 lg:py-32 text-center">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Transform Your Revit Experience with WordToBIM?
        </h2>
        <p className="max-w-[700px] text-muted-foreground md:text-xl mx-auto mt-4">
          Contact Concolabs today to discuss your needs or schedule a meeting to see our plugins in action.
        </p>
        <div className="mt-8">
          <Button asChild size="lg">
            <Link href="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
