'use client'

import { useEffect } from 'react'
import Script from 'next/script'
import Head from 'next/head'

// Add TypeScript declaration for AOS global
declare global {
  interface Window {
    AOS: {
      init: (options: {
        duration?: number;
        easing?: string;
        once?: boolean;
      }) => void;
    };
  }
}

export default function DemosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  useEffect(() => {
    // Initialize AOS when the component mounts
    if (typeof window !== 'undefined') {
      // Use the global AOS object after the script has loaded
      document.addEventListener('aos:loaded', () => {
        if (window.AOS) {
          window.AOS.init({
            duration: 800,
            easing: 'ease-out-cubic',
            once: true
          });
        }
      });
    }
  }, []);

  return (
    <>
      {/* Add AOS CSS */}
      <link href="https://unpkg.com/aos@next/dist/aos.css" rel="stylesheet" />
      
      {/* Add AOS JS with onLoad handler */}
      <Script 
        src="https://unpkg.com/aos@next/dist/aos.js" 
        strategy="afterInteractive"
        onLoad={() => {
          // Dispatch a custom event when AOS is loaded
          const event = new Event('aos:loaded');
          document.dispatchEvent(event);
        }}
      />
      
      {children}
    </>
  );
} 