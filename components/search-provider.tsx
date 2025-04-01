"use client"

import React, { createContext, useContext, useEffect, useState } from 'react'
import { NavItem } from '@/hooks/use-search'

type SearchContextType = {
  navItems: NavItem[]
  isLoading: boolean
}

const SearchContext = createContext<SearchContextType>({
  navItems: [],
  isLoading: true
})

export const useSearchContext = () => useContext(SearchContext)

export function SearchProvider({ 
  children,
  initialNavItems = []
}: { 
  children: React.ReactNode
  initialNavItems?: NavItem[]
}) {
  const [navItems, setNavItems] = useState<NavItem[]>(initialNavItems)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Load enhanced nav items with content from API route
    const loadContent = async () => {
      try {
        const response = await fetch('/api/search-content')
        const data = await response.json()
        
        if (data.navItems) {
          setNavItems(data.navItems)
        }
      } catch (error) {
        console.error('Failed to load search content:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadContent()
  }, [])

  return (
    <SearchContext.Provider value={{ navItems, isLoading }}>
      {children}
    </SearchContext.Provider>
  )
} 