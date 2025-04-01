"use client"

import { cn } from "@/lib/utils"

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
}

export function CodeBlock({ children, className }: CodeBlockProps) {
  return (
    <pre className={cn(
      "bg-gray-900 dark:bg-background dark:border dark:border-border text-gray-100 dark:text-foreground p-3 rounded text-sm overflow-x-auto",
      className
    )}>
      {children}
    </pre>
  )
}

export function ContentBox({ children, className }: CodeBlockProps) {
  return (
    <div className={cn(
      "bg-gray-50 dark:bg-muted p-4 rounded-lg",
      className
    )}>
      {children}
    </div>
  )
} 