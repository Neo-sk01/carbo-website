import React from 'react'
import { Metadata } from 'next'
import { DemosHeader } from '@/components/demos-header'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Play, ChevronRight } from 'lucide-react'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'AI Automation Demos | Carbo Software',
  description: 'Watch demonstrations of our AI automation solutions in action. See how we transform business processes with cutting-edge AI technology.',
}

export default function DemosPage() {
  // Demo sections for navigation
  const demoSections = [
    { id: 'chatbot', title: 'Chatbot Automation' },
    { id: 'document', title: 'Document Analysis' },
    { id: 'workflow', title: 'Process Automation' }
  ];

  return (
    <>
      <DemosHeader />
      <main className="overflow-x-hidden">
        <section className="py-24 md:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <Badge className="px-3 py-1 text-sm" variant="outline">
                DEMONSTRATIONS
              </Badge>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                AI Automation in Action
              </h1>
              <p className="max-w-[700px] text-muted-foreground md:text-xl">
                Watch our AI solutions transform business processes in real-time. These demos showcase the power and flexibility of our automation platform.
              </p>
            </div>

            {/* Navigation */}
            <div className="flex justify-center mb-12">
              <div className="inline-flex items-center gap-2 p-1 rounded-lg bg-muted/50">
                {demoSections.map((section, index) => (
                  <a 
                    key={section.id} 
                    href={`#${section.id}`} 
                    className="px-4 py-2 rounded-md text-sm font-medium transition-colors hover:bg-background hover:text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                  >
                    {section.title}
                    {index < demoSections.length - 1 && <ChevronRight className="inline-block ml-1 h-3 w-3 opacity-50" />}
                  </a>
                ))}
              </div>
            </div>

            <div className="grid gap-8 md:gap-12 lg:gap-16 mt-8 md:mt-16">
              {/* Demo 1 */}
              <div id="chatbot" data-aos="fade-up" className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="relative aspect-video overflow-hidden rounded-l-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 group-hover:opacity-80 transition-opacity z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <Button size="icon" variant="secondary" className="h-16 w-16 rounded-full opacity-90 shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                    {/* Replace with your actual Loom embed */}
                    <iframe 
                      src="https://www.loom.com/embed/your-loom-id-1" 
                      frameBorder="0" 
                      allowFullScreen 
                      className="absolute inset-0 h-full w-full"
                    ></iframe>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="space-y-2">
                      <Badge className="mb-2">Customer Service</Badge>
                      <h2 className="text-2xl font-bold tracking-tight">Intelligent Chatbot Automation</h2>
                      <p className="text-muted-foreground">
                        Our AI-powered chatbot handles customer inquiries 24/7, reducing response time by 85% and increasing customer satisfaction scores by 42%. This demo shows how the system understands context, provides personalized responses, and seamlessly escalates to human agents when needed.
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Badge variant="outline">Natural Language Processing</Badge>
                      <Badge variant="outline">Context Awareness</Badge>
                      <Badge variant="outline">Multi-channel Support</Badge>
                    </div>
                    <Button className="mt-6 w-full sm:w-auto" asChild>
                      <a href="https://calendly.com/neosk-carbosoftware" target="_blank" rel="noopener noreferrer">
                        Schedule a Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Demo 2 */}
              <div id="document" data-aos="fade-up" data-aos-delay="100" className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="relative aspect-video overflow-hidden rounded-l-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 group-hover:opacity-80 transition-opacity z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <Button size="icon" variant="secondary" className="h-16 w-16 rounded-full opacity-90 shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                    {/* Replace with your actual Loom embed */}
                    <iframe 
                      src="https://www.loom.com/embed/your-loom-id-2" 
                      frameBorder="0" 
                      allowFullScreen 
                      className="absolute inset-0 h-full w-full"
                    ></iframe>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="space-y-2">
                      <Badge className="mb-2">Data Processing</Badge>
                      <h2 className="text-2xl font-bold tracking-tight">Document Analysis & Extraction</h2>
                      <p className="text-muted-foreground">
                        Watch our AI system process complex documents, extracting key information with 99.2% accuracy. This automation reduces manual data entry by 95%, allowing your team to focus on high-value tasks instead of tedious paperwork.
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Badge variant="outline">OCR Technology</Badge>
                      <Badge variant="outline">Machine Learning</Badge>
                      <Badge variant="outline">Data Validation</Badge>
                    </div>
                    <Button className="mt-6 w-full sm:w-auto" asChild>
                      <a href="https://calendly.com/neosk-carbosoftware" target="_blank" rel="noopener noreferrer">
                        Schedule a Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>

              {/* Demo 3 */}
              <div id="workflow" data-aos="fade-up" data-aos-delay="200" className="group relative overflow-hidden rounded-xl border bg-background shadow-md transition-all hover:shadow-xl">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  <div className="relative aspect-video overflow-hidden rounded-l-xl">
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 group-hover:opacity-80 transition-opacity z-10"></div>
                    <div className="absolute inset-0 flex items-center justify-center z-20">
                      <Button size="icon" variant="secondary" className="h-16 w-16 rounded-full opacity-90 shadow-lg transition-transform group-hover:scale-110">
                        <Play className="h-8 w-8" />
                      </Button>
                    </div>
                    {/* Loom video embed */}
                    <iframe 
                      src="https://www.loom.com/embed/31433b72f3674bb8bd2c1e362417a029" 
                      frameBorder="0" 
                      allowFullScreen 
                      className="absolute inset-0 h-full w-full"
                    ></iframe>
                  </div>
                  <div className="p-6 flex flex-col justify-center">
                    <div className="space-y-2">
                      <Badge className="mb-2">Workflow Automation</Badge>
                      <h2 className="text-2xl font-bold tracking-tight">End-to-End Process Automation</h2>
                      <p className="text-muted-foreground">
                        This demonstration shows how our platform automates complex business workflows from start to finish. By connecting multiple systems and applying intelligent decision-making, we've helped clients reduce process time by 73% and eliminate human error.
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap gap-3">
                      <Badge variant="outline">API Integration</Badge>
                      <Badge variant="outline">Decision Trees</Badge>
                      <Badge variant="outline">Process Optimization</Badge>
                    </div>
                    <Button className="mt-6 w-full sm:w-auto" asChild>
                      <a href="https://calendly.com/neosk-carbosoftware" target="_blank" rel="noopener noreferrer">
                        Schedule a Demo <ExternalLink className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Back to top navigation */}
            <div className="mt-12 text-center">
              <a 
                href="#" 
                className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors"
              >
                Back to Top
              </a>
            </div>

            <div className="mt-20 text-center">
              <h2 className="text-2xl font-bold tracking-tight mb-4">Ready to transform your business with AI?</h2>
              <p className="text-muted-foreground max-w-[600px] mx-auto mb-8">
                Our team of experts will work with you to identify the perfect automation solutions for your specific needs.
              </p>
              <Button size="lg" asChild>
                <a href="https://calendly.com/neosk-carbosoftware" target="_blank" rel="noopener noreferrer">
                  Book Your Free Consultation
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
} 