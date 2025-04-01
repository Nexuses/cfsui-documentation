/**
 * This script helps convert hardcoded background colors in pages to theme-aware components.
 * It's meant to be used as a reference for manual updates.
 * 
 * Usage:
 * 1. Run: node scripts/update-theme-components.js
 * 2. Check output and apply changes to files manually
 */

// Steps to properly implement dark mode in existing pages:

// 1. First, import the CodeBlock and ContentBox components at the top of each page:
//    import { CodeBlock, ContentBox } from "@/components/ui/code-block"

// 2. Replace hardcoded background color divs with ContentBox:
//    Change: <div className="bg-gray-50 p-4 rounded-lg">...</div>
//    To:     <ContentBox>...</ContentBox>

// 3. Replace hardcoded pre blocks with CodeBlock:
//    Change: <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">...</pre>
//    To:     <CodeBlock>...</CodeBlock>

// 4. For special classes on these elements, use the className prop:
//    <ContentBox className="mb-6">...</ContentBox>
//    <CodeBlock className="my-3">...</CodeBlock>

// Files to update:
// - app/core-components/page.tsx (already updated as an example)
// - app/extending-the-application/page.tsx
// - app/state-management/page.tsx
// - app/routing-structure/page.tsx
// - app/environment-configuration/page.tsx
// - app/custom-hooks/page.tsx
// - app/project-structure/page.tsx
// - app/api-integration/page.tsx
// - app/authentication-authorization/page.tsx
// - app/technology-stack/page.tsx
// - app/project-architecture/page.tsx

console.log('Use this script as a reference for manually updating files.');
console.log('Search for bg-gray-50 and bg-gray-900 in these files and replace with the appropriate components.'); 