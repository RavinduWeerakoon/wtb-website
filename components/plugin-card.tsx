import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

interface PluginCardProps {
  slug: string
  name: string
  description: string
  image: string
}

export function PluginCard({ slug, name, description, image }: PluginCardProps) {
  return (
    <Card className="flex flex-col bg-card border-border hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="relative w-full h-48 mb-4 rounded-md overflow-hidden">
          <Image src={image || "/placeholder.svg"} alt={name} layout="fill" objectFit="cover" className="rounded-md" />
        </div>
        <CardTitle className="text-primary">{name}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">{/* Additional content if needed */}</CardContent>
      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/plugins/${slug}`}>Learn More</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
