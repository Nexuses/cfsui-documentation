import { NextResponse } from 'next/server'
import { getDocumentContent } from '@/lib/get-doc-content'

export async function GET() {
  try {
    const navItems = await getDocumentContent()
    
    return NextResponse.json({
      navItems,
      success: true
    })
  } catch (error) {
    console.error('Error in search-content API route:', error)
    return NextResponse.json(
      { error: 'Failed to load search content', success: false },
      { status: 500 }
    )
  }
} 