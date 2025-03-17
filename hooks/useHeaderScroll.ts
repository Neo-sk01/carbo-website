'use client'

import { useState, useEffect } from 'react'
import { useScroll } from 'motion/react'

export function useHeaderScroll(menuState: boolean = false) {
  const [scrolled, setScrolled] = useState(false)
  const [visible, setVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const { scrollYProgress } = useScroll()

  // Handle background change on scroll
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      setScrolled(latest > 0.05)
    })
    return () => unsubscribe()
  }, [scrollYProgress])

  // Handle navbar visibility on scroll
  useEffect(() => {
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

  return { scrolled, visible }
} 