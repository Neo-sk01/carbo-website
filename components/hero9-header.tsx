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
    { name: 'Contact', href: 'https://calendly.com/neosk-carbosoftware', external: true },
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

    const closeMenu = () => {
        setMenuState(false)
    }

    return (
        <header>
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className="fixed z-20 w-full pt-2">
                <div className={cn(
                    'mx-auto max-w-7xl rounded-3xl px-6 transition-all duration-300 lg:px-12', 
                    scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm dark:bg-zinc-900/80 border border-zinc-200/20 dark:border-zinc-800/20' : ''
                )}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-6 py-3 duration-200 lg:gap-0 lg:py-6', scrolled && 'lg:py-4')}>
                        <div className="flex w-full items-center justify-between gap-12 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 relative group">
                                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-primary/5 blur-md transition-opacity duration-300"></div>
                                <Logo className="relative" />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2.5 -mr-4 block cursor-pointer p-2.5 lg:hidden">
                                <Menu className={cn("m-auto size-6 transition-all duration-300", menuState ? "rotate-180 scale-0 opacity-0" : "")} />
                                <X className={cn("absolute inset-0 m-auto size-6 transition-all duration-300", menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0")} />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-8 text-sm">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                target={item.external ? "_blank" : undefined}
                                                rel={item.external ? "noopener noreferrer" : undefined}
                                                onClick={closeMenu}
                                                className="text-muted-foreground hover:text-foreground relative group flex items-center gap-1 duration-150">
                                                <span className="relative">
                                                    {item.name}
                                                    <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                                                </span>
                                                {item.external && <ChevronDown className="h-3 w-3 opacity-70" />}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className={cn(
                            "bg-background lg:bg-transparent transition-all duration-300 ease-in-out",
                            menuState ? "block" : "hidden",
                            "mb-6 w-full rounded-xl border shadow-lg shadow-zinc-300/20 p-6 lg:m-0 lg:flex lg:w-fit lg:gap-6 lg:space-y-0 lg:border-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent"
                        )}>
                            <div className="lg:hidden">
                                <ul className="space-y-6 text-base">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                target={item.external ? "_blank" : undefined}
                                                rel={item.external ? "noopener noreferrer" : undefined}
                                                onClick={closeMenu}
                                                className="text-muted-foreground hover:text-foreground flex items-center gap-1 duration-150">
                                                <span>{item.name}</span>
                                                {item.external && <ChevronDown className="h-3 w-3 opacity-70" />}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit mt-6 lg:mt-0">
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-full px-5 transition-all duration-300 hover:shadow-md hover:shadow-primary/20">
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
