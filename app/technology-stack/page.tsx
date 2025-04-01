import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Technology Stack | CFS UI Documentation",
  description: "Overview of the technology stack used in the CFS UI application",
}

export default function TechnologyStack() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Technology Stack</h1>
      
      <p className="mb-4">
        The CFS UI application leverages a modern technology stack focused on performance, developer experience, and maintainability.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Frontend Framework</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-medium">Next.js 15</h3>
        <p className="mb-2">Full-featured React framework with App Router, providing:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Server-side rendering (SSR) for improved SEO and initial load performance</li>
          <li>Static site generation (SSG) capabilities for static content</li>
          <li>API routes for backend functionality without separate server</li>
          <li>Image optimization for performance</li>
          <li>Font optimization with next/font</li>
          <li>Automatic code splitting for optimized bundles</li>
        </ul>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Core Languages</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-medium">TypeScript</h3>
        <p className="mb-2">Strongly-typed superset of JavaScript that improves:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Code quality through static type checking</li>
          <li>Developer experience with enhanced IDE support</li>
          <li>Maintainability through clear interfaces and type definitions</li>
          <li>Self-documenting code with explicit type annotations</li>
          <li>Reduced runtime errors through compile-time checks</li>
        </ul>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">UI Framework & Rendering</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-medium">React 19</h3>
        <p className="mb-2">Latest version with improvements in:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Concurrent rendering</li>
          <li>Server components</li>
          <li>Suspense and streaming SSR</li>
          <li>Optimized re-rendering with automatic batching</li>
          <li>React Strict Mode for identifying potential problems</li>
        </ul>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">State Management</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-medium">React Context API</h3>
        <p className="mb-2">For global state management with:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Reducer patterns for complex state logic</li>
          <li>Provider components for state distribution</li>
          <li>Consumer hooks for state consumption</li>
        </ul>

        <h3 className="mb-2 font-medium">Zustand</h3>
        <p className="mb-2">Lightweight state management library offering:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Simple API with minimal boilerplate</li>
          <li>Selective state subscriptions</li>
          <li>Middleware support for advanced features</li>
          <li>DevTools integration for debugging</li>
        </ul>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Styling Solution</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-medium">TailwindCSS</h3>
        <p className="mb-2">Utility-first CSS framework providing:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Consistent design system through configuration</li>
          <li>Responsive design utilities</li>
          <li>Component-level styling without context switching</li>
          <li>Small production CSS bundles through PurgeCSS</li>
        </ul>

        <h3 className="mb-2 font-medium">class-variance-authority (CVA)</h3>
        <p className="mb-2">For component variants that:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Create type-safe UI component variants</li>
          <li>Integrate seamlessly with Tailwind</li>
          <li>Enable conditional styling with TypeScript support</li>
        </ul>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">UI Component Libraries</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-medium">Radix UI Primitives</h3>
        <p className="mb-2">Unstyled, accessible components that:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Provide robust accessibility features</li>
          <li>Offer keyboard navigation support</li>
          <li>Handle complex component behaviors (focus management, etc.)</li>
          <li>Provide consistent cross-browser functionality</li>
        </ul>

        <h3 className="mb-2 font-medium">Shadcn/UI</h3>
        <p className="mb-2">Component collection built on Radix UI that:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Provides pre-styled, customizable components</li>
          <li>Maintains accessibility compliance</li>
          <li>Integrates with TailwindCSS</li>
          <li>Offers consistent theming capabilities</li>
        </ul>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Data Fetching & API Communication</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-medium">TanStack React Query</h3>
        <p className="mb-2">Advanced data fetching library with:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Automatic caching and stale-while-revalidate patterns</li>
          <li>Background refetching</li>
          <li>Pagination and infinite scrolling support</li>
          <li>Optimistic updates</li>
          <li>Mutation capabilities with rollback</li>
        </ul>

        <h3 className="mb-2 font-medium">Axios</h3>
        <p className="mb-2">HTTP client for API communication featuring:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Promise-based API</li>
          <li>Request and response interceptors</li>
          <li>Automatic transforms for JSON data</li>
          <li>Client-side protection against XSRF</li>
          <li>Progress indicators for long-running requests</li>
        </ul>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Data Visualization</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-medium">Chart.js with React Chart.js 2</h3>
        <p className="mb-2">Charting library offering:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Responsive charts</li>
          <li>Multiple chart types (bar, line, pie, radar, etc.)</li>
          <li>Animation capabilities</li>
          <li>Extensive customization options</li>
        </ul>

        <h3 className="mb-2 font-medium">Recharts</h3>
        <p className="mb-2">React-based charting library providing:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Declarative chart components</li>
          <li>Responsive container components</li>
          <li>Customizable chart elements</li>
          <li>Composable chart design</li>
        </ul>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Animation & UI Effects</h2>
      <div className="mb-6">
        <h3 className="mb-2 font-medium">Framer Motion</h3>
        <p className="mb-2">Animation library offering:</p>
        <ul className="mb-4 list-disc pl-6 space-y-1">
          <li>Declarative animations</li>
          <li>Gesture recognition</li>
          <li>Layout animations</li>
          <li>Exit animations</li>
          <li>Animation orchestration</li>
        </ul>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Development & Build Tools</h2>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li><strong>ESLint</strong>: For code quality enforcement</li>
        <li><strong>TypeScript Compiler</strong>: For type checking</li>
        <li><strong>PostCSS</strong>: For CSS processing</li>
        <li><strong>Turbopack</strong>: For faster development builds</li>
        <li><strong>Babel</strong>: For JavaScript transpilation</li>
      </ul>
    </main>
  )
} 