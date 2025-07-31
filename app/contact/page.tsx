import { ContactForm } from "@/components/contact-form"
import { CalendarDays } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"


export default function ContactPage() {
  const calendlyLink = process.env.NEXT_PUBLIC_CALENDLY_LINK || "https://calendly.com/your-calendly-link"
  return (
    <div className="container py-12 md:py-24 lg:py-32 bg-background text-foreground">
      <div className="flex flex-col items-center gap-4 mb-8 text-center">
        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary">
          Get in Touch with Concolabs
        </h1>
        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Have questions about our plugins, need support, or want to discuss a custom solution? Fill out the form below
          or schedule a meeting with our team.
        </p>
      </div>

      <div className= "items-center">


        {/* Schedule Meeting Section */}
        <div className="space-y-6 mx-auto max-w-lg text-center mb-12">
          <h2 className="text-2xl font-semibold text-foreground">Schedule a Meeting</h2>
          <p className="text-muted-foreground">
            Book a convenient time to chat with our experts about your specific needs and how Concolabs plugins can
            benefit your workflow.
          </p>
          <Button asChild size="lg" className="w-full">
            <Link href={calendlyLink} target="_blank" rel="noopener noreferrer">
              <CalendarDays className="mr-2 h-5 w-5" />
              Schedule on Calendly
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
