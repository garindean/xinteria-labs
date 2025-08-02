import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"

export default function XinteriaPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur">
        <div className="container flex h-16 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/images/xinteria-gradient-logo.png"
                alt="Xinteria Market Maker"
                width={140}
                height={32}
                className="h-8 w-auto"
              />
              <span className="text-lg font-semibold text-gray-600">Market Maker</span>
            </Link>
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="ghost" asChild>
              <Link href="#features">Features</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#benefits">Benefits</Link>
            </Button>
            <Button variant="ghost" asChild>
              <Link href="#contact">Contact</Link>
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <Button
                  variant="outline"
                  className="w-fit bg-transparent border-xinteria-blue text-xinteria-blue hover:bg-xinteria-blue hover:text-white"
                  asChild
                >
                  <Link href="/">
                    <ArrowLeft className="mr-2 h-4 w-4" /> Back to Xinteria Labs
                  </Link>
                </Button>
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Xinteria Market Maker
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Advanced market making solution for digital assets, providing liquidity and efficiency to markets.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button
                    asChild
                    className="bg-gradient-to-r from-lime-500 to-teal-500 hover:from-lime-600 hover:to-teal-600 text-white"
                  >
                    <Link href="#contact">Get Started</Link>
                  </Button>
                  <Button
                    variant="outline"
                    asChild
                    className="border-2 border-transparent bg-gradient-to-r from-lime-500 to-teal-500 bg-clip-border text-transparent bg-clip-text hover:bg-white hover:text-gray-900"
                  >
                    <Link href="#features">Learn More</Link>
                  </Button>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <div className="relative h-[300px] w-[300px] md:h-[400px] md:w-[400px]">
                  <div className="absolute inset-0 bg-gradient-to-r from-lime-400 via-green-500 to-teal-500 rounded-full blur-3xl opacity-20"></div>
                  <div className="relative flex h-full w-full items-center justify-center rounded-full bg-muted/50 border">
                    <Image
                      src="/images/xinteria-icon.png"
                      alt="Xinteria Market Maker"
                      width={150}
                      height={150}
                      className="h-24 w-24 md:h-32 md:w-32"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Key Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Our market making solution offers advanced capabilities for digital asset markets
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-gradient-to-r from-lime-500/10 to-teal-500/10 p-4">
                  <svg
                    className="h-6 w-6 text-teal-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2v20" />
                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Algorithmic Trading</h3>
                <p className="text-center text-muted-foreground">
                  Advanced algorithms designed to optimize market making strategies
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-gradient-to-r from-lime-500/10 to-teal-500/10 p-4">
                  <svg
                    className="h-6 w-6 text-teal-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Risk Management</h3>
                <p className="text-center text-muted-foreground">
                  Comprehensive risk controls to protect assets and optimize performance
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6">
                <div className="rounded-full bg-gradient-to-r from-lime-500/10 to-teal-500/10 p-4">
                  <svg
                    className="h-6 w-6 text-teal-600"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
                    <line x1="12" x2="12" y1="9" y2="13" />
                    <line x1="12" x2="12.01" y1="17" y2="17" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Real-time Analytics</h3>
                <p className="text-center text-muted-foreground">
                  Comprehensive dashboards with real-time market data and performance metrics
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="benefits" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Benefits</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Why choose Xinteria Market Maker for your digital asset needs
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-2 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Enhanced Liquidity</h3>
                <p className="text-muted-foreground">
                  Improve market depth and reduce spreads with our advanced market making strategies
                </p>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Reduced Slippage</h3>
                <p className="text-muted-foreground">
                  Minimize price impact for traders with consistent and reliable liquidity provision
                </p>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Market Stability</h3>
                <p className="text-muted-foreground">
                  Create more stable and efficient markets with continuous two-sided liquidity
                </p>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6">
                <h3 className="text-xl font-bold">Customizable Solutions</h3>
                <p className="text-muted-foreground">
                  Tailor our market making strategies to meet your specific market requirements
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Get Started</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Ready to enhance your market's liquidity? Contact us today to learn more about our market making
                  solutions.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <Button
                  className="w-full bg-gradient-to-r from-lime-500 to-teal-500 hover:from-lime-600 hover:to-teal-600 text-white"
                  size="lg"
                >
                  <Link href="mailto:hello@xinterialabs.io" className="flex items-center">
                    Contact Our Team <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 Xinteria Labs. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="text-sm text-muted-foreground underline-offset-4 hover:underline">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
