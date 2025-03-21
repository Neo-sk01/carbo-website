import React from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { HeroHeader } from '@/components/hero9-header'
import { InfiniteSlider } from '@/components/motion-primitives/infinite-slider'
import { ProgressiveBlur } from '@/components/motion-primitives/progressive-blur'
import { ChevronRight } from 'lucide-react'
import Features from '@/components/features-1'
import { Features2 } from '@/components/features-2'
import { Bot, Brain, Cpu, Database, LineChart, Workflow } from 'lucide-react'
import ShadcnChatbotWidget from '@/components/shadcn-chatbot-widget'

export default function HeroSection() {
    return (
        <>
            <HeroHeader />
            <main className="overflow-x-hidden">
                <section className="relative">
                    {/* Video background with proper positioning */}
                    <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden">
                        <div className="absolute inset-0 -z-10 h-full w-full overflow-hidden rounded-b-3xl border border-black/10 lg:rounded-b-[3rem] dark:border-white/5">
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className="h-full w-full object-cover opacity-50 invert dark:opacity-35 dark:invert-0 dark:lg:opacity-75"
                                src="https://res.cloudinary.com/dg4jhba5c/video/upload/v1741605033/dna_ttplyu.mp4"></video>
                        </div>
                    </div>
                    
                    <div className="relative py-28 md:pb-32 lg:pb-36 lg:pt-80">
                        <div className="relative mx-auto flex max-w-7xl flex-col px-4 sm:px-6 lg:block lg:px-12">
                            <div className="mx-auto max-w-lg text-center lg:ml-0 lg:max-w-full lg:text-left">
                                <h1 className="mt-8 max-w-2xl text-balance text-4xl sm:text-5xl md:text-6xl lg:mt-16 xl:text-7xl">Carbo Software AI Automations Agency</h1>
                                <p className="mt-6 sm:mt-8 max-w-2xl text-balance text-base sm:text-lg">Transforming businesses with cutting-edge AI solutions and custom software automation.</p>

                                <div className="mt-8 sm:mt-12 flex flex-col items-center justify-center gap-2 sm:flex-row lg:justify-start">
                                    <Button
                                        asChild
                                        size="lg"
                                        className="w-full sm:w-auto h-12 rounded-full pl-5 pr-3 text-base">
                                        <Link href="https://calendly.com/neosk-carbosoftware" target="_blank" rel="noopener noreferrer">
                                            <span className="text-nowrap">Get Started</span>
                                            <ChevronRight className="ml-1" />
                                        </Link>
                                    </Button>
                                    <Button
                                        key={2}
                                        asChild
                                        size="lg"
                                        variant="ghost"
                                        className="w-full sm:w-auto h-12 rounded-full px-5 text-base hover:bg-zinc-950/5 dark:hover:bg-white/5">
                                        <Link href="#features">
                                            <span className="text-nowrap">Our Services</span>
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                
                <section className="bg-background pb-2">
                    <div className="group relative m-auto max-w-7xl px-4 sm:px-6">
                        <div className="flex flex-col items-center md:flex-row">
                            <div className="w-full text-center md:text-right md:max-w-44 md:border-r md:pr-6">
                                <p className="text-sm">Powered by the best models</p>
                            </div>
                            <div className="relative py-6 w-full md:w-[calc(100%-11rem)]">
                                <InfiniteSlider
                                    speedOnHover={20}
                                    speed={40}
                                    gap={112}>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 sm:h-6 w-fit dark:invert"
                                            src="/openai-svgrepo-com.svg"
                                            alt="OpenAI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>

                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 sm:h-6 w-fit dark:invert"
                                            src="/anthropic-text.svg"
                                            alt="Anthropic Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 sm:h-6 w-fit dark:invert"
                                            src="/gemini-brand-color.svg"
                                            alt="Google Gemini Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 sm:h-6 w-fit dark:invert"
                                            src="/perplexity-text (1).svg"
                                            alt="Perplexity AI Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-5 sm:h-6 w-fit dark:invert"
                                            src="/ollama.svg"
                                            alt="Ollama Logo"
                                            height="24"
                                            width="auto"
                                        />
                                    </div>
                                    <div className="flex">
                                        <img
                                            className="mx-auto h-6 sm:h-8 w-fit dark:invert"
                                            src="/DeepSeek_logo.svg.png"
                                            alt="DeepSeek Logo"
                                            height="32"
                                            width="auto"
                                        />
                                    </div>
                                </InfiniteSlider>

                                <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                                <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                                <ProgressiveBlur
                                    className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                    direction="left"
                                    blurIntensity={1}
                                />
                                <ProgressiveBlur
                                    className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                    direction="right"
                                    blurIntensity={1}
                                />
                            </div>
                        </div>
                    </div>
                </section>
                
                <Features2
                    subtitle="FEATURES"
                    title="AI-Powered Automation Solutions"
                    description="Streamline your business processes with our advanced AI automation tools designed to boost productivity and reduce manual workload."
                    alignment="center"
                    bordered
                    features={[
                        {
                            icon: Bot,
                            title: "Intelligent Chatbots",
                            description:
                                "Deploy AI-powered chatbots that understand context and provide personalized customer support 24/7.",
                        },
                        {
                            icon: Workflow,
                            title: "Workflow Automation",
                            description:
                                "Automate repetitive tasks and complex workflows with intelligent process automation that learns and improves over time.",
                        },
                        {
                            icon: Database,
                            title: "Data Processing",
                            description:
                                "Process and analyze large volumes of data automatically with our AI-powered data extraction and transformation tools.",
                        },
                        {
                            icon: Brain,
                            title: "Predictive Analytics",
                            description:
                                "Leverage machine learning algorithms to predict trends and make data-driven decisions for your business.",
                        },
                        {
                            icon: LineChart,
                            title: "Performance Monitoring",
                            description:
                                "Track and optimize your automation performance with real-time analytics and intelligent insights.",
                        },
                        {
                            icon: Cpu,
                            title: "Custom AI Solutions",
                            description:
                                "Develop tailored AI solutions specific to your industry needs with our flexible automation platform.",
                        },
                    ]}
                />
                
                <Features />

                {/* Add the chatbot widget */}
                <ShadcnChatbotWidget />
            </main>
        </>
    )
}
