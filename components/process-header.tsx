'use client'
import Link from 'next/link'
import { Logo, LogoCompact } from './logo'
import React from 'react'
import { motion } from 'motion/react'
import { cn } from '@/lib/utils'
import { useHeaderScroll } from '../hooks/useHeaderScroll'
import { useMediaQuery } from '../hooks/useMediaQuery'
import { ArrowLeft, ArrowRight } from 'lucide-react'

type ProcessStep = 'discovery' | 'mapping' | 'implementation'

interface ProcessHeaderProps {
  currentStep: ProcessStep
}

export const ProcessHeader = ({ currentStep }: ProcessHeaderProps) => {
  const [menuOpen, setMenuOpen] = React.useState(false)
  const { scrolled, visible } = useHeaderScroll(menuOpen)
  const isSmallScreen = useMediaQuery('(max-width: 640px)')

  // Define the process steps and their navigation
  const steps: { id: ProcessStep; name: string; color: string }[] = [
    { id: 'discovery', name: 'Discovery Call', color: 'text-blue-600 hover:text-blue-700' },
    { id: 'mapping', name: 'Process Mapping', color: 'text-purple-600 hover:text-purple-700' },
    { id: 'implementation', name: 'Implementation', color: 'text-emerald-600 hover:text-emerald-700' },
  ]

  // Find current step index
  const currentIndex = steps.findIndex(step => step.id === currentStep)
  const prevStep = currentIndex > 0 ? steps[currentIndex - 1] : null
  const nextStep = currentIndex < steps.length - 1 ? steps[currentIndex + 1] : null

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
            <div className="flex w-full items-center justify-between gap-4 sm:gap-8">
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

              <div className="flex items-center gap-2 sm:gap-4">
                <Link href="/#process" className={cn("hidden sm:inline-flex items-center text-sm font-medium", steps[currentIndex].color)}>
                  <ArrowLeft className="mr-1 h-3 w-3" />
                  Back to Process
                </Link>
                
                {!isSmallScreen && (
                  <div className="hidden md:flex items-center gap-4">
                    {prevStep && (
                      <Link 
                        href={`/process/${prevStep.id}`}
                        className={cn("text-sm font-medium flex items-center", 
                          prevStep.id === 'discovery' ? 'text-blue-600 hover:text-blue-700' : 
                          prevStep.id === 'mapping' ? 'text-purple-600 hover:text-purple-700' : 
                          'text-emerald-600 hover:text-emerald-700'
                        )}
                      >
                        <ArrowLeft className="mr-1 h-3 w-3" />
                        {prevStep.name}
                      </Link>
                    )}
                    
                    {nextStep && (
                      <Link 
                        href={`/process/${nextStep.id}`}
                        className={cn("text-sm font-medium flex items-center", 
                          nextStep.id === 'discovery' ? 'text-blue-600 hover:text-blue-700' : 
                          nextStep.id === 'mapping' ? 'text-purple-600 hover:text-purple-700' : 
                          'text-emerald-600 hover:text-emerald-700'
                        )}
                      >
                        {nextStep.name}
                        <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    )}
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </nav>
    </header>
  )
} 