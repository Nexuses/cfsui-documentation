import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Project Architecture | CFS UI Documentation",
  description: "Overview of the CFS UI application architecture",
}

export default function ProjectArchitecture() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Project Architecture</h1>
      
      <p className="mb-4">
        The project follows a modern React application architecture using Next.js 15 with the App Router pattern. It employs a combination of client and server components, with careful separation of concerns between UI components, state management, and business logic.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Architecture Overview</h2>
      <div className="mb-6 bg-muted p-4 rounded-md overflow-auto">
        <pre className="whitespace-pre text-sm">
          {`┌─────────────────────────────────────────────────────────────┐
│                         UI Layer                            │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐  │
│  │   Layouts   │  │  Components │  │ Pages/Route Handlers│  │
│  └─────────────┘  └─────────────┘  └─────────────────────┘  │
└───────────────────────────│───────────────────────────────┘
                            │
┌───────────────────────────▼───────────────────────────────┐
│                      State Layer                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  Contexts   │  │   Stores    │  │     Custom Hooks    │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└───────────────────────────│───────────────────────────────┘
                            │
┌───────────────────────────▼───────────────────────────────┐
│                    Service Layer                           │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────────────┐ │
│  │  API Hooks  │  │   Helpers   │  │     Utilities       │ │
│  └─────────────┘  └─────────────┘  └─────────────────────┘ │
└───────────────────────────────────────────────────────────┘`}
        </pre>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Key Architectural Features</h2>
      
      <h3 className="mb-3 mt-6 text-xl font-semibold">Next.js App Router</h3>
      <p className="mb-2">The application utilizes Next.js App Router for file-based routing, providing:</p>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li><strong>Route Groups</strong>: Logical organization of routes with shared layouts</li>
        <li><strong>Nested Layouts</strong>: Hierarchical UI structures that maintain state across page navigation</li>
        <li><strong>Server Components</strong>: Where appropriate, to reduce client-side JavaScript</li>
        <li><strong>Client Components</strong>: For interactive elements requiring client-side state</li>
        <li><strong>Parallel Routes</strong>: For complex page layouts with multiple independent sections</li>
      </ul>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Client/Server Components Separation</h3>
      <p className="mb-2">The application strategically uses both client and server components:</p>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li><strong>Server Components</strong>: Used for static content, data fetching operations, and SEO requirements</li>
        <li><strong>Client Components</strong>: Used for interactive elements, real-time updates, and form handling</li>
        <li><strong>Boundary Management</strong>: Clear "use client" directives to separate client and server rendering concerns</li>
      </ul>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Contexts and Stores</h3>
      <p className="mb-2">Global state management is implemented through a hybrid approach:</p>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li><strong>React Context API</strong>: For widely-used application state (user info, file structures)</li>
        <li><strong>Zustand Stores</strong>: For more focused feature-specific state with simpler API</li>
        <li><strong>Component-Level State</strong>: For UI state that doesn't need global persistence</li>
      </ul>

      <h3 className="mb-3 mt-6 text-xl font-semibold">API Integration Architecture</h3>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li><strong>Centralized Configuration</strong>: API base URLs and global settings managed in config files</li>
        <li><strong>Custom Hook Layer</strong>: Abstraction over Axios for API communication</li>
        <li><strong>React Query Integration</strong>: For automatic caching, refetching, and loading states</li>
        <li><strong>Error Handling Strategy</strong>: Consistent patterns for API error management across the application</li>
      </ul>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Component Modularity</h3>
      <p className="mb-2">The application follows strict component modularity principles:</p>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li><strong>Atomic Design</strong>: UI built from small, reusable components that combine into larger features</li>
        <li><strong>Component Composition</strong>: Complex UI assembled from simpler building blocks</li>
        <li><strong>Container/Presentational Pattern</strong>: Separation of data handling from UI rendering</li>
        <li><strong>Prop Drilling Minimization</strong>: State management tools used to avoid excessive prop passing</li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Data Flow</h2>
      <p className="mb-2">The application follows a unidirectional data flow pattern:</p>
      <ol className="mb-4 list-decimal pl-6 space-y-1">
        <li><strong>User Interaction</strong>: Triggers events in UI components</li>
        <li><strong>State Updates</strong>: Events modify local state or global state through hooks/stores/contexts</li>
        <li><strong>API Calls</strong>: State changes may trigger API calls via custom hooks</li>
        <li><strong>UI Updates</strong>: New data from API or state changes is reflected in the UI</li>
      </ol>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Performance Optimizations</h2>
      <p className="mb-2">The architecture incorporates several performance optimization strategies:</p>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li><strong>Code Splitting</strong>: Automatic code splitting through Next.js page and component system</li>
        <li><strong>React.memo and useMemo</strong>: For expensive component rendering optimizations</li>
        <li><strong>Data Caching</strong>: Via React Query for minimizing redundant API calls</li>
        <li><strong>Image Optimization</strong>: Using Next.js Image component for responsive, optimized images</li>
        <li><strong>Prefetching</strong>: Strategic data prefetching for anticipated user navigation paths</li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Security Architecture</h2>
      <p className="mb-2">Security is integrated throughout the architecture:</p>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li><strong>Authentication</strong>: Token-based authentication with secure storage</li>
        <li><strong>Route Protection</strong>: Route-level access control based on user permissions</li>
        <li><strong>API Security</strong>: Secure API communication with automatic token refresh</li>
        <li><strong>Input Validation</strong>: Client and server-side validation for all user inputs</li>
        <li><strong>Data Encryption</strong>: Sensitive data encryption where appropriate</li>
      </ul>
    </main>
  )
} 