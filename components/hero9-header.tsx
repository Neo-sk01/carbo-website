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
    const [visible, setVisible] = React.useState(true)
    const [lastScrollY, setLastScrollY] = React.useState(0)
    const { scrollYProgress } = useScroll()

    React.useEffect(() => {
        const unsubscribe = scrollYProgress.on('change', (latest) => {
            setScrolled(latest > 0.05)
        })
        return () => unsubscribe()
    }, [scrollYProgress])

    React.useEffect(() => {
        const controlNavbar = () => {
            const currentScrollY = window.scrollY
            
            // If menu is open, always show navbar
            if (menuState) {
                setVisible(true)
                setLastScrollY(currentScrollY)
                return
            }
            
            // Determine scroll direction and visibility
            if (currentScrollY > lastScrollY) {
                // Scrolling down
                if (currentScrollY > 100) { // Only hide after scrolling down a bit
                    setVisible(false)
                }
            } else {
                // Scrolling up
                setVisible(true)
            }
            
            setLastScrollY(currentScrollY)
        }

        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [lastScrollY, menuState])

    const closeMenu = () => {
        setMenuState(false)
    }

    return (
        <header>
            <nav
                data-state={menuState ? 'active' : 'inactive'}
                className={cn(
                    "fixed z-20 w-full pt-1 transition-transform duration-300",
                    !visible && !menuState ? "-translate-y-full" : "translate-y-0"
                )}>
                <div className={cn(
                    'mx-auto max-w-7xl rounded-2xl px-3 sm:px-4 transition-all duration-300 lg:px-8', 
                    scrolled ? 'bg-background/80 backdrop-blur-xl shadow-sm dark:bg-zinc-900/80 border border-zinc-200/20 dark:border-zinc-800/20' : ''
                )}>
                    <motion.div
                        key={1}
                        className={cn('relative flex flex-wrap items-center justify-between gap-2 sm:gap-4 py-3 sm:py-4 duration-200 lg:gap-0 lg:py-5', scrolled && 'lg:py-3')}>
                        <div className="flex w-full items-center justify-between gap-4 sm:gap-8 lg:w-auto">
                            <Link
                                href="/"
                                aria-label="home"
                                className="flex items-center space-x-2 relative group">
                                <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-100 bg-gradient-to-r from-primary/10 to-primary/5 blur-md transition-opacity duration-300"></div>
                                <Logo hideOnMobile={true} className="relative" />
                                <span className="font-bold text-xl sm:hidden">Carbo</span>
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Close Menu' : 'Open Menu'}
                                className="relative z-20 -m-2 -mr-3 block cursor-pointer p-2 lg:hidden">
                                <Menu className={cn("m-auto size-5 transition-all duration-300", menuState ? "rotate-180 scale-0 opacity-0" : "")} />
                                <X className={cn("absolute inset-0 m-auto size-5 transition-all duration-300", menuState ? "rotate-0 scale-100 opacity-100" : "-rotate-180 scale-0 opacity-0")} />
                            </button>

                            <div className="hidden lg:block">
                                <ul className="flex gap-4 xl:gap-6 text-sm">
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
                            "fixed sm:absolute left-0 right-0 top-[70px] sm:top-auto sm:mb-4 w-full rounded-b-xl sm:rounded-xl border shadow-lg shadow-zinc-300/20 p-4 lg:m-0 lg:static lg:flex lg:w-fit lg:gap-4 lg:space-y-0 lg:border-transparent lg:p-0 lg:shadow-none dark:shadow-none dark:lg:bg-transparent"
                        )}>
                            <div className="lg:hidden">
                                <ul className="space-y-4 text-base">
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
                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit mt-4 lg:mt-0">
                                <Button
                                    asChild
                                    size="sm"
                                    className="rounded-full px-4 py-1 h-8 text-sm transition-all duration-300 hover:shadow-md hover:shadow-primary/20">
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
