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
        <header className="h-[40px] sm:h-[45px] md:h-[50px]">
            <nav className="fixed z-20 w-full pt-0 sm:pt-0.5">
                <div className={cn(
                    'mx-auto max-w-7xl rounded-lg sm:rounded-xl px-2 sm:px-3 transition-all duration-300 lg:px-5', 
                    scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm dark:bg-zinc-900/80 border border-zinc-200/20 dark:border-zinc-800/20' : ''
                )}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-1 py-1 duration-200 sm:gap-2 sm:py-1.5 md:py-2', scrolled && 'py-0.5 sm:py-1 md:py-1.5')}>
                        <div className="flex w-full items-center justify-between lg:justify-start lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center relative group">
                                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-primary/5 blur-md transition-opacity duration-300"></div>
                                <Logo className="relative" />
                            </Link>
                        </div>

                        <div className="flex items-center">
                            <Button
                                asChild
                                variant="ghost"
                                size="sm"
                                className="rounded-full px-2 py-0 h-6 text-xs transition-all duration-300">
                                <Link href="/">
                                    <ArrowLeft className="mr-1 h-2.5 w-2.5" />
                                    <span className="text-xs">Back</span>
                                </Link>
                            </Button>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
} 