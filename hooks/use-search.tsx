"use client"

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'

// Type for search results
export interface SearchResult {
  title: string
  url: string
  content?: string
  excerpt?: string
  score?: number
}

// Type for navigation items
export interface NavItem {
  title: string
  url: string
  content?: string
}

// A simple excerpt generator
function generateExcerpt(content: string, query: string, maxLength: number = 100): string {
  if (!content) return '';
  
  // Find the position of the query in the content
  const lowerContent = content.toLowerCase();
  const lowerQuery = query.toLowerCase();
  const position = lowerContent.indexOf(lowerQuery);
  
  if (position === -1) return content.slice(0, maxLength) + '...';
  
  // Calculate start and end positions for the excerpt
  const start = Math.max(0, position - 30);
  const end = Math.min(content.length, position + maxLength - 30);
  
  // Extract the excerpt
  let excerpt = content.slice(start, end);
  
  // Add ellipsis if needed
  if (start > 0) excerpt = '...' + excerpt;
  if (end < content.length) excerpt = excerpt + '...';
  
  return excerpt;
}

export function useSearch(navItems: NavItem[]) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const router = useRouter()
  
  // More advanced search function that can search in content too
  const performSearch = useCallback((searchQuery: string) => {
    if (!searchQuery.trim()) {
      setResults([])
      return
    }

    setIsSearching(true)
    
    const searchResults: SearchResult[] = [];
    const lowerQuery = searchQuery.toLowerCase();
    
    navItems.forEach(item => {
      let score = 0;
      let matched = false;
      let excerpt = '';
      
      // Check title match
      if (item.title.toLowerCase().includes(lowerQuery)) {
        score += 10; // Prioritize title matches
        matched = true;
      }
      
      // Check content match if available
      if (item.content) {
        const lowerContent = item.content.toLowerCase();
        if (lowerContent.includes(lowerQuery)) {
          score += 5;
          matched = true;
          excerpt = generateExcerpt(item.content, searchQuery);
        }
      }
      
      if (matched) {
        searchResults.push({
          title: item.title,
          url: item.url,
          excerpt: excerpt || `Navigate to ${item.title}`,
          score,
        });
      }
    });
    
    // Sort results by score
    searchResults.sort((a, b) => (b.score || 0) - (a.score || 0));
    
    setResults(searchResults);
    setIsSearching(false);
  }, [navItems]);

  // Handle search query changes
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (query) {
        performSearch(query)
      } else {
        setResults([])
      }
    }, 300)

    return () => clearTimeout(delayDebounceFn)
  }, [query, performSearch])

  // Navigate to a search result
  const handleSelectResult = useCallback((result: SearchResult) => {
    router.push(result.url)
    setQuery('')
    setResults([])
  }, [router])

  return {
    query,
    setQuery,
    results,
    isSearching,
    handleSelectResult,
  }
} 