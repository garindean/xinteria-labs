import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProductCardProps {
  title: string
  description: string
  comingSoon: boolean
  href?: string
  imageUrl: string
}

export default function ProductCard({ title, description, comingSoon, href, imageUrl }: ProductCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="relative h-60">
        <Image
          src={title === "Xinteria Market Maker" ? "/images/xinteria-market-maker-hero.png" : imageUrl}
          alt={title}
          fill
          className="object-cover"
          priority
        />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-2xl">{title}</CardTitle>
          {comingSoon && (
            <Badge variant="outline" className="border-xinteria-blue text-xinteria-blue">
              Coming Soon
            </Badge>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter>
        {comingSoon ? (
          <Button disabled variant="outline" className="w-full bg-transparent">
            Coming Soon
          </Button>
        ) : (
          <Button
            asChild
            className="w-full bg-gradient-to-r from-lime-500 to-teal-500 hover:from-lime-600 hover:to-teal-600 text-white"
          >
            <Link href={href || "#"}>
              Learn More <ExternalLink className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}
