import React from 'react'
import { Metadata } from 'next'
import { DemosHeader } from '@/components/demos-header'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Zap, ArrowLeft, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Implementation | AI Automation Process | Carbo Software',
  description: 'Learn how we develop and deploy custom AI automations tailored to your specific business processes, saving you time and resources.',
}

export default function ImplementationPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <DemosHeader />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-emerald-50 to-white py-20 dark:from-emerald-950/20 dark:to-background">
          <div className="container mx-auto max-w-4xl px-6">
            <Link href="/#process" className="inline-flex items-center text-emerald-600 hover:text-emerald-700 mb-8">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Process
            </Link>
            
            <div className="flex items-center mb-6">
              <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30">
                <Zap className="h-8 w-8 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight">Implementation</h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-12">
              The final step in our AI automation journey is developing and deploying custom solutions tailored to your business needs.
            </p>
            
            <Card className="mb-12 border-emerald-200 dark:border-emerald-800/50">
              <CardHeader>
                <h2 className="text-2xl font-semibold">Our Implementation Approach</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>
                  Implementation is where our AI expertise truly shines. We develop custom automation solutions using cutting-edge AI technologies, tailored specifically to your business processes. Our agile development methodology ensures rapid deployment with continuous refinement.
                </p>
                
                <div className="space-y-8">
                  <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-emerald-200 dark:before:bg-emerald-800/50">
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                      <span className="text-sm font-medium">1</span>
                    </div>
                    <h3 className="font-medium">Solution Design</h3>
                    <p className="text-muted-foreground">We architect a custom AI solution based on the process mapping insights, selecting the optimal AI models and integration approaches.</p>
                  </div>
                  
                  <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-emerald-200 dark:before:bg-emerald-800/50">
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                      <span className="text-sm font-medium">2</span>
                    </div>
                    <h3 className="font-medium">Prototype Development</h3>
                    <p className="text-muted-foreground">We build a working prototype to demonstrate core functionality and gather early feedback from your team.</p>
                  </div>
                  
                  <div className="relative pl-8 before:absolute before:left-3 before:top-0 before:h-full before:w-px before:bg-emerald-200 dark:before:bg-emerald-800/50">
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                      <span className="text-sm font-medium">3</span>
                    </div>
                    <h3 className="font-medium">Iterative Refinement</h3>
                    <p className="text-muted-foreground">We continuously improve the solution based on user feedback and performance metrics, ensuring it meets your specific needs.</p>
                  </div>
                  
                  <div className="relative pl-8">
                    <div className="absolute left-0 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                      <span className="text-sm font-medium">4</span>
                    </div>
                    <h3 className="font-medium">Full Deployment</h3>
                    <p className="text-muted-foreground">We roll out the complete solution, integrate it with your existing systems, and provide comprehensive training for your team.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">Technologies We Leverage</h2>
              <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                <div className="rounded-lg border border-emerald-200 bg-white p-4 shadow-sm dark:border-emerald-800/30 dark:bg-zinc-800/50">
                  <h3 className="font-medium mb-2">Large Language Models</h3>
                  <p className="text-sm text-muted-foreground">Powering intelligent document processing and natural language understanding.</p>
                </div>
                
                <div className="rounded-lg border border-emerald-200 bg-white p-4 shadow-sm dark:border-emerald-800/30 dark:bg-zinc-800/50">
                  <h3 className="font-medium mb-2">Computer Vision</h3>
                  <p className="text-sm text-muted-foreground">Enabling visual data processing and automated quality control.</p>
                </div>
                
                <div className="rounded-lg border border-emerald-200 bg-white p-4 shadow-sm dark:border-emerald-800/30 dark:bg-zinc-800/50">
                  <h3 className="font-medium mb-2">Robotic Process Automation</h3>
                  <p className="text-sm text-muted-foreground">Automating repetitive tasks across multiple applications and systems.</p>
                </div>
                
                <div className="rounded-lg border border-emerald-200 bg-white p-4 shadow-sm dark:border-emerald-800/30 dark:bg-zinc-800/50">
                  <h3 className="font-medium mb-2">Machine Learning</h3>
                  <p className="text-sm text-muted-foreground">Creating predictive models that improve over time with more data.</p>
                </div>
                
                <div className="rounded-lg border border-emerald-200 bg-white p-4 shadow-sm dark:border-emerald-800/30 dark:bg-zinc-800/50">
                  <h3 className="font-medium mb-2">API Integrations</h3>
                  <p className="text-sm text-muted-foreground">Connecting your existing systems with our AI automation platform.</p>
                </div>
                
                <div className="rounded-lg border border-emerald-200 bg-white p-4 shadow-sm dark:border-emerald-800/30 dark:bg-zinc-800/50">
                  <h3 className="font-medium mb-2">Custom AI Solutions</h3>
                  <p className="text-sm text-muted-foreground">Building proprietary AI models tailored to your specific industry needs.</p>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700">
                View Our Case Studies
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                See how our implementation process has transformed businesses across various industries.
              </p>
            </div>
            
            <div className="mt-16 flex justify-between items-center border-t border-emerald-200 pt-8 dark:border-emerald-800/30">
              <Link href="/process/mapping" className="inline-flex items-center text-purple-600 hover:text-purple-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Process Mapping
              </Link>
              <Link href="/demos" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                View Demos
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  )
} 