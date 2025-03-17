'use client'

import { useState, useEffect } from 'react'

/**
 * Custom hook for responsive design that checks if a media query matches
 * @param query The media query to check (e.g. '(min-width: 768px)')
 * @returns Boolean indicating if the media query matches
 */
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false)
  
  useEffect(() => {
    // Default to false on the server
    if (typeof window === 'undefined') {
      return
    }
    
    const media = window.matchMedia(query)
    
    // Set initial value
    setMatches(media.matches)
    
    // Update matches when the media query changes
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }
    
    // Add event listener
    media.addEventListener('change', listener)
    
    // Clean up
    return () => {
      media.removeEventListener('change', listener)
    }
  }, [query])
  
  return matches
}

export default useMediaQuery 