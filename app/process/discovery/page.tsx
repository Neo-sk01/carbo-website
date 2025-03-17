import React from 'react'
import { Metadata } from 'next'
import { ProcessHeader } from '@/components/process-header'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PhoneCall, CheckCircle2, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Discovery Call | AI Automation Process | Carbo Software',
  description: 'Learn about our in-depth consultation process to understand your business needs, pain points, and automation goals.',
}

export default function DiscoveryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ProcessHeader currentStep="discovery" />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-blue-50 to-white py-20 dark:from-blue-950/20 dark:to-background">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="flex items-center mb-6 pt-16">
              <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30">
                <PhoneCall className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">Discovery Call</h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-12">
              The first step in our AI automation journey is understanding your unique business challenges and goals.
            </p>
            
            <Card className="mb-12 border-blue-200 dark:border-blue-800/50">
              <CardHeader>
                <h2 className="text-2xl font-semibold">What to Expect</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>
                  Our discovery call is a comprehensive consultation designed to uncover your business's specific needs and identify the most impactful automation opportunities. This collaborative session typically lasts 45-60 minutes and sets the foundation for our entire automation strategy.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Business Process Analysis</h3>
                      <p className="text-muted-foreground">We'll discuss your current workflows and identify bottlenecks.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Pain Point Identification</h3>
                      <p className="text-muted-foreground">We'll uncover specific challenges that AI can help solve.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Goal Setting</h3>
                      <p className="text-muted-foreground">We'll establish clear objectives and KPIs for your automation project.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Technology Assessment</h3>
                      <p className="text-muted-foreground">We'll evaluate your current tech stack and integration requirements.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mb-12">
              <h2 className="text-2xl font-semibold mb-6">After the Discovery Call</h2>
              <p className="mb-4">
                Following our initial consultation, our team will compile a detailed summary of our findings and recommendations. This document will outline:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Identified automation opportunities</li>
                <li>Preliminary scope of work</li>
                <li>Estimated timeline and resource requirements</li>
                <li>Expected ROI and business impact</li>
              </ul>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Schedule Your Discovery Call
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                No commitment required. Let's explore how AI automation can transform your business.
              </p>
            </div>
            
            <div className="mt-16 flex justify-between items-center border-t border-blue-200 pt-8 dark:border-blue-800/30">
              <div></div>
              <Link href="/process/mapping" className="inline-flex items-center text-purple-600 hover:text-purple-700">
                Next: Process Mapping
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