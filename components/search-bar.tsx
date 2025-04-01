"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { Search, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"
import { Keymap } from "@/components/ui/keymap"
import { NavItem } from "@/hooks/use-search"

interface SearchBarProps {
  navItems: NavItem[]
  className?: string
  placeholder?: string
  inputClassName?: string
}

export function SearchBar({
  navItems,
  className,
  placeholder = "Search docs...",
  inputClassName,
}: SearchBarProps) {
  const [query, setQuery] = React.useState('')
  const [isOpen, setIsOpen] = React.useState(false)
  const [activeIndex, setActiveIndex] = React.useState(-1)
  const inputRef = React.useRef<HTMLInputElement>(null)
  const router = useRouter()
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value)
    setIsOpen(e.target.value.length > 0)
    setActiveIndex(-1)
  }
  
  const clearSearch = () => {
    setQuery('')
    setIsOpen(false)
    inputRef.current?.focus()
  }
  
  const handleNavigate = (url: string) => {
    router.push(url)
    setQuery('')
    setIsOpen(false)
  }

  // Filter results based on query
  const results = React.useMemo(() => {
    if (!query) return []
    
    return navItems.filter(item => 
      item.title.toLowerCase().includes(query.toLowerCase())
    ).slice(0, 5) // Limit to 5 results
  }, [query, navItems])

  // Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent) => {
    // Down arrow
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex(prev => (prev < results.length - 1 ? prev + 1 : prev))
    }
    // Up arrow
    else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex(prev => (prev > 0 ? prev - 1 : 0))
    }
    // Enter
    else if (e.key === 'Enter' && activeIndex >= 0) {
      e.preventDefault()
      const selectedItem = results[activeIndex]
      if (selectedItem) {
        handleNavigate(selectedItem.url)
      }
    }
    // Escape
    else if (e.key === 'Escape') {
      setIsOpen(false)
      inputRef.current?.blur()
    }
  }

  // Add keyboard shortcut
  React.useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault()
        inputRef.current?.focus()
      }
    }

    document.addEventListener("keydown", handleGlobalKeyDown)
    return () => document.removeEventListener("keydown", handleGlobalKeyDown)
  }, [])

  return (
    <div className={cn("relative w-full", className)}>
      <div className="flex items-center gap-2 px-3 py-2 border rounded-md">
        <Search className="h-4 w-4 opacity-50" />
        <Input
          ref={inputRef}
          value={query}
          onChange={handleChange}
          onFocus={() => setIsOpen(query.length > 0)}
          onBlur={() => setTimeout(() => setIsOpen(false), 200)}
          onKeyDown={handleKeyDown}
          className={cn("flex-1 h-8 border-0 p-0 focus-visible:ring-0 focus-visible:ring-offset-0", inputClassName)}
          placeholder={placeholder}
          type="text"
        />
        {query.length > 0 && (
          <button 
            onClick={clearSearch}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
        <Keymap keymap="ctrl+k" size="sm" className="opacity-50 hidden sm:flex" />
      </div>
      
      {isOpen && results.length > 0 && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1 py-1 bg-popover border rounded-md shadow-md">
          <ul>
            {results.map((item, index) => (
              <li key={item.url}>
                <button
                  className={cn(
                    "w-full text-left px-4 py-2 text-sm hover:bg-accent hover:text-accent-foreground",
                    activeIndex === index && "bg-accent text-accent-foreground"
                  )}
                  onClick={() => handleNavigate(item.url)}
                >
                  {item.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isOpen && query.length > 0 && results.length === 0 && (
        <div className="absolute top-full left-0 right-0 z-10 mt-1 py-4 px-4 bg-popover border rounded-md shadow-md text-center text-sm text-muted-foreground">
          No results found
        </div>
      )}
    </div>
  )
} 