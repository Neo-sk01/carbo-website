import { Card, CardContent, CardHeader, CardFooter } from '@/components/ui/card'
import { PhoneCall, GitBranch, Zap, ArrowRight } from 'lucide-react'
import { ReactNode } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import Link from 'next/link'

export default function Features() {
    return (
        <section id="process" className="bg-zinc-50 py-20 md:py-32 dark:bg-zinc-900/30">
            <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <Badge variant="outline" className="mb-4 px-3.5 py-1.5 border-zinc-300 dark:border-zinc-700">
                        Our Process
                    </Badge>
                    <h2 className="text-balance text-4xl font-semibold tracking-tight lg:text-5xl mb-6">
                        Our Three-Step AI Automation Process
                    </h2>
                    <p className="text-zinc-600 dark:text-zinc-400 text-lg max-w-2xl mx-auto">
                        We transform your business operations through a structured approach to AI automation, 
                        delivering measurable results and significant time savings.
                    </p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
                    {/* Connecting line between cards (visible on sm screens and up) */}
                    <div className="absolute top-24 left-0 w-full h-0.5 bg-gradient-to-r from-zinc-200 via-zinc-300 to-zinc-200 hidden sm:block dark:from-zinc-800 dark:via-zinc-700 dark:to-zinc-800"></div>
                    
                    {/* Step 1 */}
                    <Card className="group border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-blue-600"></div>
                        <CardHeader className="pt-8 pb-4">
                            <div className="mb-4 flex justify-center">
                                <div className="rounded-full bg-blue-100 p-3 dark:bg-blue-900/30">
                                    <PhoneCall className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center">Discovery Call</h3>
                        </CardHeader>
                        
                        <CardContent>
                            <p className="text-zinc-600 dark:text-zinc-400 text-center">
                                We begin with an in-depth consultation to understand your business needs, pain points, and automation goals.
                            </p>
                        </CardContent>
                        
                        <CardFooter className="pt-0 pb-6 flex justify-center">
                            <Link href="/process/discovery">
                                <Button variant="ghost" size="sm" className="text-blue-600 dark:text-blue-500 group-hover:bg-blue-50 dark:group-hover:bg-blue-950/20">
                                    Learn more <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Step 2 */}
                    <Card className="group border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative sm:mt-12">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-purple-600"></div>
                        <CardHeader className="pt-8 pb-4">
                            <div className="mb-4 flex justify-center">
                                <div className="rounded-full bg-purple-100 p-3 dark:bg-purple-900/30">
                                    <GitBranch className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center">Process Mapping</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-zinc-600 dark:text-zinc-400 text-center">
                                Our experts analyze and document your existing workflows to identify the best opportunities for AI-powered automation.
                            </p>
                        </CardContent>
                        
                        <CardFooter className="pt-0 pb-6 flex justify-center">
                            <Link href="/process/mapping">
                                <Button variant="ghost" size="sm" className="text-purple-600 dark:text-purple-500 group-hover:bg-purple-50 dark:group-hover:bg-purple-950/20">
                                    Learn more <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>

                    {/* Step 3 */}
                    <Card className="group border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden relative">
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-emerald-600"></div>
                        <CardHeader className="pt-8 pb-4">
                            <div className="mb-4 flex justify-center">
                                <div className="rounded-full bg-emerald-100 p-3 dark:bg-emerald-900/30">
                                    <Zap className="h-6 w-6 text-emerald-600 dark:text-emerald-400" />
                                </div>
                            </div>
                            <h3 className="text-xl font-semibold text-center">Implementation</h3>
                        </CardHeader>

                        <CardContent>
                            <p className="text-zinc-600 dark:text-zinc-400 text-center">
                                We develop and deploy custom AI automations tailored to your specific business processes, saving you time and resources.
                            </p>
                        </CardContent>
                        
                        <CardFooter className="pt-0 pb-6 flex justify-center">
                            <Link href="/process/implementation">
                                <Button variant="ghost" size="sm" className="text-emerald-600 dark:text-emerald-500 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/20">
                                    Learn more <ArrowRight className="ml-2 size-4" />
                                </Button>
                            </Link>
                        </CardFooter>
                    </Card>
                </div>
            </div>
        </section>
    )
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
    <div className="relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-zinc-950)10%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-zinc-950)20%,transparent)] dark:[--color-border:color-mix(in_oklab,var(--color-white)15%,transparent)] dark:group-hover:bg-white/5 dark:group-hover:[--color-border:color-mix(in_oklab,var(--color-white)20%,transparent)]">
        <div aria-hidden className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px]" />
        <div aria-hidden className="bg-radial to-background absolute inset-0 from-transparent to-75%" />
        <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t">{children}</div>
    </div>
)
