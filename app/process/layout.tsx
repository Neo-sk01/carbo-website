import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'AI Automation Process | Carbo Software',
  description: 'Learn about our three-step AI automation process: Discovery Call, Process Mapping, and Implementation.',
}

export default function ProcessLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      {children}
    </>
  )
} 