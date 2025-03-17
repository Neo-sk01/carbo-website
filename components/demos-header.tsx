'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'

export const DemosHeader = () => {
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    return (
        <header>
            <nav className="fixed z-20 w-full pt-1">
                <div className={cn(
                    'mx-auto max-w-7xl rounded-2xl px-4 transition-all duration-300 lg:px-8', 
                    scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm dark:bg-zinc-900/80 border border-zinc-200/20 dark:border-zinc-800/20' : ''
                )}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-4 py-2 duration-200 lg:gap-0 lg:py-3', scrolled && 'lg:py-2')}>
                        <div className="flex w-full items-center justify-between gap-8 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 relative group">
                                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-primary/5 blur-md transition-opacity duration-300"></div>
                                <Logo className="relative" />
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="rounded-full px-4 py-1 h-8 text-sm transition-all duration-300">
                                <Link href="/">
                                    <ArrowLeft className="mr-2 h-3.5 w-3.5" />
                                    <span>Back to Home</span>
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
} 