'use client'
import Link from 'next/link'
import { Logo, LogoCompact } from './logo'
import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { useHeaderScroll } from '../hooks/useHeaderScroll'
import { useMediaQuery } from '../hooks/useMediaQuery'

export const DemosHeader = () => {
    const [menuOpen, setMenuOpen] = React.useState(false)
    const { scrolled, visible } = useHeaderScroll(menuOpen)
    const isSmallScreen = useMediaQuery('(max-width: 640px)')

    return (
        <header>
            <nav
                data-state={menuOpen ? 'active' : 'inactive'}
                className={cn(
                    "fixed z-20 w-full pt-1 transition-transform duration-300",
                    !visible && !menuOpen ? "-translate-y-full" : "translate-y-0"
                )}>
                <div className={cn(
                    'mx-auto max-w-7xl rounded-2xl px-3 sm:px-4 transition-all duration-300 lg:px-8', 
                    scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm dark:bg-zinc-900/80 border border-zinc-200/20 dark:border-zinc-800/20' : ''
                )}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-2 sm:gap-4 py-2 sm:py-4 duration-200 lg:gap-0 lg:py-5', scrolled && 'lg:py-3')}>
                        <div className="flex w-full items-center justify-between gap-4 sm:gap-8 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 relative group">
                                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-primary/5 blur-md transition-opacity duration-300"></div>
                                {isSmallScreen ? (
                                    <LogoCompact className="relative" />
                                ) : (
                                    <Logo responsive className="relative" />
                                )}
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
} 