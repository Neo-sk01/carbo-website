'use client'
import Link from 'next/link'
import { Logo } from './logo'
import { ChevronDown, Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import React from 'react'
import { useScroll, motion } from 'motion/react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Services', href: '#features' },
    { name: 'Process', href: '#process' },
    { name: 'Demos', href: '/demos' },
    { name: 'FAQ', href: '#faq' },
]

export const HeroHeader = () => {
    const [menuState, setMenuState] = React.useState(false)
    const [scrolled, setScrolled] = React.useState(false)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    // Close menu when clicking outside
    React.useEffect(() => {
        if (!menuState) return
        
        const handleClickOutside = (e: MouseEvent) => {
            const target = e.target as HTMLElement
            if (!target.closest('nav')) {
                setMenuState(false)
            }
        }
        
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [menuState])

    // Close menu on route change
    React.useEffect(() => {
        const handleRouteChange = () => setMenuState(false)
        window.addEventListener('popstate', handleRouteChange)
        return () => window.removeEventListener('popstate', handleRouteChange)
    }, [])

    const closeMenu = () => {
        setMenuState(false)
    }

    return (
        <header className="h-[40px] sm:h-[45px] md:h-[50px]">
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className="fixed z-20 w-full pt-0 sm:pt-0.5">
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

                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setMenuState(!menuState);
                                }}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-1 block cursor-pointer p-1 lg:hidden">
                                <Menu className={cn("m-auto size-4 transition-all duration-300", menuState ? "rotate-180 scale-0 opacity-0" : "")} />
                                <X className={cn("absolute inset-0 m-auto size-4 transition-all duration-300", menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0")} />
                            </button>

                            <div className="hidden lg:block lg:ml-6 xl:ml-10">
                                <ul className="flex gap-4 xl:gap-6 text-xs">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className="text-muted-foreground hover:text-foreground relative group flex items-center gap-1 duration-150">
                                                <span className="relative">
                                                    {item.name}
                                                    <span className="absolute -bottom-0.5 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                                </span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={cn(
                            "fixed inset-x-0 top-[40px] sm:top-[45px] z-10 bg-background/95 backdrop-blur-sm lg:static lg:bg-transparent lg:backdrop-blur-none transition-all duration-300 ease-in-out",
                            menuState ? "translate-y-0 opacity-100 shadow-lg" : "translate-y-[-10px] opacity-0 pointer-events-none",
                            "p-2 sm:p-3 mx-2 sm:mx-3 rounded-lg border lg:m-0 lg:flex lg:w-fit lg:gap-3 lg:space-y-0 lg:border-transparent lg:p-0 lg:shadow-none lg:translate-y-0 lg:opacity-100 lg:pointer-events-auto dark:shadow-none dark:lg:bg-transparent"
                        )}>
                            <div className="lg:hidden">
                                <ul className="space-y-2 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                onClick={closeMenu}
                                                className="text-muted-foreground hover:text-foreground flex items-center gap-1 duration-150">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-2 sm:flex-row sm:gap-2 sm:space-y-0 md:w-fit mt-3 lg:mt-0">
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-full px-2.5 py-0 h-6 text-xs transition-all duration-300 hover:shadow-sm hover:shadow-primary/20">
                                    <Link href="https://calendly.com/neosk-carbosoftware" target="_blank" rel="noopener noreferrer">
                                        <span>Contact Us</span>
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </nav>
        </header>
    )
}
