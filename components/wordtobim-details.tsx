import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"
import { MessageSquareText, Brain, Zap } from "lucide-react"

export function WordToBIMDetails() {
  return (
    <section className="container py-12 md:py-24 lg:py-32 bg-card rounded-lg shadow-lg">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
            WordToBIM Chatbot: Work with Revit in Natural Language
          </h2>
          <p className="text-muted-foreground md:text-lg">
            The WordToBIM chatbot is our flagship product, designed to revolutionize how you interact with Autodesk
            Revit. Say goodbye to complex menus and commands – simply tell the chatbot what you want to do, and it will
            execute the actions in Revit.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <Card className="bg-background border-border">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <MessageSquareText className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg font-semibold">Intuitive Interaction</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Communicate with Revit using everyday language, making complex tasks simple and accessible.
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Brain className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg font-semibold">AI-Powered Efficiency</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Leverage advanced AI to understand your commands and automate repetitive Revit operations.
              </CardContent>
            </Card>
            <Card className="bg-background border-border">
              <CardHeader className="flex flex-row items-center space-x-4 pb-2">
                <Zap className="h-6 w-6 text-primary" />
                <CardTitle className="text-lg font-semibold">Boost Productivity</CardTitle>
              </CardHeader>
              <CardContent className="text-sm text-muted-foreground">
                Save time and reduce errors by letting the chatbot handle the intricate details of Revit commands.
              </CardContent>
            </Card>
          </div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden">
          <Image
            src="/placeholder.svg?height=500&width=700"
            alt="WordToBIM Chatbot Interface"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
