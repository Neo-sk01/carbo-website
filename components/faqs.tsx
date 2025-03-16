'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp, PlusCircle, MinusCircle } from 'lucide-react'
import { motion, AnimatePresence } from 'motion/react'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'

interface FAQItem {
    question: string
    answer: React.ReactNode
}

const faqItems: FAQItem[] = [
    {
        question: "What types of processes can be automated with AI?",
        answer: (
            <>
                <p className="text-muted-foreground mb-4">Our AI automation solutions can handle a wide range of business processes, including:</p>
                <ol className="list-outside list-decimal space-y-2 pl-4">
                    <li className="text-muted-foreground">Data entry and processing tasks</li>
                    <li className="text-muted-foreground">Customer service interactions</li>
                    <li className="text-muted-foreground">Document analysis and information extraction</li>
                    <li className="text-muted-foreground">Scheduling and appointment management</li>
                    <li className="text-muted-foreground">Inventory management and forecasting</li>
                </ol>
            </>
        )
    },
    {
        question: "How long does it take to implement an AI automation solution?",
        answer: (
            <p className="text-muted-foreground">Implementation timelines vary based on the complexity of your processes. Simple automations can be deployed in as little as 2-4 weeks, while more complex enterprise solutions may take 2-3 months. During our discovery call, we'll provide a more accurate timeline for your specific needs.</p>
        )
    },
    {
        question: "Do I need technical expertise to use your AI automation tools?",
        answer: (
            <>
                <p className="text-muted-foreground mb-4">No, our solutions are designed with user-friendliness in mind. While we handle the technical implementation, we provide:</p>
                <ul className="list-outside list-disc space-y-2 pl-4">
                    <li className="text-muted-foreground">Intuitive dashboards for monitoring automation performance</li>
                    <li className="text-muted-foreground">Comprehensive training for your team</li>
                    <li className="text-muted-foreground">Ongoing support and maintenance</li>
                </ul>
            </>
        )
    },
    {
        question: "What ROI can I expect from implementing AI automation?",
        answer: (
            <p className="text-muted-foreground">Most clients see a positive ROI within 3-6 months of implementation. Our solutions typically deliver 40-60% reduction in process time, 70-90% reduction in errors, and 30-50% cost savings compared to manual processes. We'll work with you to establish clear metrics for measuring success.</p>
        )
    },
    {
        question: "How do you ensure data security and privacy?",
        answer: (
            <p className="text-muted-foreground">We implement industry-leading security measures including end-to-end encryption, secure cloud infrastructure, regular security audits, and compliance with regulations like GDPR and CCPA. All client data is handled according to strict confidentiality protocols.</p>
        )
    }
]

const FAQAccordionItem = ({ item, index, isOpen, toggleAccordion }: { 
    item: FAQItem, 
    index: number, 
    isOpen: boolean, 
    toggleAccordion: () => void 
}) => {
    return (
        <div className={cn(
            "border-b border-border overflow-hidden transition-all duration-300",
            isOpen ? "pb-6" : ""
        )}>
            <button
                onClick={toggleAccordion}
                className="flex w-full items-center justify-between py-6 text-left font-medium focus:outline-none group"
            >
                <span className="flex items-center">
                    <span className="inline-flex items-center justify-center size-8 rounded-full bg-primary/10 text-primary mr-4 text-sm font-semibold transition-colors duration-300 group-hover:bg-primary/20">
                        {index + 1}
                    </span>
                    <span className="text-lg transition-colors duration-300 group-hover:text-primary">{item.question}</span>
                </span>
                <span className="ml-6 flex-shrink-0">
                    {isOpen ? (
                        <MinusCircle className="h-5 w-5 text-primary" />
                    ) : (
                        <PlusCircle className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                    )}
                </span>
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="pl-12 pr-6"
                    >
                        <div className="pb-4">
                            {item.answer}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}

export default function FAQs() {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section id="faq" className="scroll-py-16 py-16 md:scroll-py-32 md:py-32 bg-zinc-50 dark:bg-zinc-900/30">
            <div className="mx-auto max-w-5xl px-6">
                <div className="grid gap-y-12 lg:grid-cols-[1fr_1.5fr] gap-x-12">
                    <div className="text-center lg:text-left">
                        <Badge variant="outline" className="mb-4 px-3.5 py-1.5">
                            FAQ
                        </Badge>
                        <h2 className="mb-4 text-3xl font-semibold md:text-4xl lg:text-5xl">
                            Frequently <br className="hidden lg:block" /> Asked <br className="hidden lg:block" />
                            Questions
                        </h2>
                        <p className="text-muted-foreground mt-4 max-w-md mx-auto lg:mx-0">
                            Common questions about our AI automation services. If you don't find what you're looking for, feel free to <a href="https://calendly.com/neosk-carbosoftware" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">contact us</a>.
                        </p>
                        
                        <div className="hidden lg:block mt-8">
                            <Card>
                                <CardHeader>
                                    <CardTitle>Still have questions?</CardTitle>
                                    <CardDescription>Our team is ready to help you find the perfect automation solution for your business.</CardDescription>
                                </CardHeader>
                                <CardFooter>
                                    <Button asChild>
                                        <a href="https://calendly.com/neosk-carbosoftware" target="_blank" rel="noopener noreferrer">
                                            Schedule a Call <ChevronDown className="ml-2 h-4 w-4" />
                                        </a>
                                    </Button>
                                </CardFooter>
                            </Card>
                        </div>
                    </div>

                    <Card className="border shadow-sm">
                        <CardContent className="pt-6">
                            <div className="divide-y divide-border">
                                {faqItems.map((item, index) => (
                                    <FAQAccordionItem
                                        key={index}
                                        item={item}
                                        index={index}
                                        isOpen={openIndex === index}
                                        toggleAccordion={() => toggleAccordion(index)}
                                    />
                                ))}
                            </div>
                        </CardContent>
                    </Card>
                    
                    <div className="lg:hidden mt-8 text-center">
                        <Card>
                            <CardHeader>
                                <CardTitle>Still have questions?</CardTitle>
                                <CardDescription>Our team is ready to help you find the perfect automation solution for your business.</CardDescription>
                            </CardHeader>
                            <CardFooter className="flex justify-center">
                                <Button asChild>
                                    <a href="https://calendly.com/neosk-carbosoftware" target="_blank" rel="noopener noreferrer">
                                        Schedule a Call <ChevronDown className="ml-2 h-4 w-4" />
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </section>
    )
}
