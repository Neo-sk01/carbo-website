import React from 'react'
import { Metadata } from 'next'
import { ProcessHeader } from '@/components/process-header'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { GitBranch, CheckCircle2, ArrowRight, ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import Footer from '@/components/footer'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Process Mapping | AI Automation Process | Carbo Software',
  description: 'Learn how our experts analyze and document your existing workflows to identify the best opportunities for AI-powered automation.',
}

export default function ProcessMappingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <ProcessHeader currentStep="mapping" />
      
      <main className="flex-1">
        <section className="bg-gradient-to-b from-purple-50 to-white py-20 dark:from-purple-950/20 dark:to-background">
          <div className="container mx-auto max-w-4xl px-6">
            <div className="flex items-center mb-6 pt-16">
              <div className="mr-4 flex h-16 w-16 items-center justify-center rounded-full bg-purple-100 dark:bg-purple-900/30">
                <GitBranch className="h-8 w-8 text-purple-600 dark:text-purple-400" />
              </div>
              <h1 className="text-3xl font-bold tracking-tight">Process Mapping</h1>
            </div>
            
            <p className="text-xl text-muted-foreground mb-12">
              The second step in our AI automation journey is documenting and analyzing your workflows to identify automation opportunities.
            </p>
            
            <Card className="mb-12 border-purple-200 dark:border-purple-800/50">
              <CardHeader>
                <h2 className="text-2xl font-semibold">Our Process Mapping Methodology</h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <p>
                  Process mapping is a critical phase where we create detailed visualizations of your current workflows. This helps us identify inefficiencies, bottlenecks, and opportunities for AI-powered automation. Our approach combines traditional business process analysis with advanced AI opportunity assessment.
                </p>
                
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Workflow Documentation</h3>
                      <p className="text-muted-foreground">We create detailed diagrams of your current processes and information flows.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Efficiency Analysis</h3>
                      <p className="text-muted-foreground">We identify redundancies, bottlenecks, and manual tasks that slow your operations.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">AI Opportunity Scoring</h3>
                      <p className="text-muted-foreground">We evaluate each process component for automation potential and ROI.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <CheckCircle2 className="mr-2 h-5 w-5 text-purple-600 mt-0.5" />
                    <div>
                      <h3 className="font-medium">Stakeholder Interviews</h3>
                      <p className="text-muted-foreground">We gather insights from your team members who work with these processes daily.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="mb-12 grid gap-8 md:grid-cols-2">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Process Mapping Deliverables</h2>
                <p className="mb-4">
                  At the conclusion of the process mapping phase, you'll receive a comprehensive set of documents that outline:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Visual process maps of current workflows</li>
                  <li>Detailed analysis of inefficiencies and bottlenecks</li>
                  <li>Prioritized list of automation opportunities</li>
                  <li>Estimated time and cost savings for each opportunity</li>
                  <li>Recommended implementation roadmap</li>
                </ul>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm dark:bg-zinc-800/50">
                <div className="aspect-video relative bg-purple-100 rounded-md overflow-hidden dark:bg-purple-900/20">
                  <div className="absolute inset-0 flex items-center justify-center text-purple-500">
                    {/* Placeholder for a process mapping diagram */}
                    <div className="w-full h-full flex items-center justify-center">
                      <p className="text-center px-4">Process Mapping Visualization</p>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-center mt-2 text-muted-foreground">Sample process map visualization</p>
              </div>
            </div>
            
            <div className="text-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Learn About Our Process Mapping Tools
              </Button>
              <p className="mt-4 text-sm text-muted-foreground">
                Our proprietary mapping methodology combines business process expertise with AI opportunity analysis.
              </p>
            </div>
            
            <div className="mt-16 flex justify-between items-center border-t border-purple-200 pt-8 dark:border-purple-800/30">
              <Link href="/process/discovery" className="inline-flex items-center text-blue-600 hover:text-blue-700">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Previous: Discovery Call
              </Link>
              <Link href="/process/implementation" className="inline-flex items-center text-emerald-600 hover:text-emerald-700">
                Next: Implementation
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