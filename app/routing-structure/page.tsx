import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Routing Structure",
  description: "Documentation for the routing structure in the CFS UI application",
}

export default function RoutingStructurePage() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Routing Structure</h1>
      
      <p className="mb-6">
        The CFS UI application leverages Next.js App Router for a file-system based routing approach that provides a clean, hierarchical structure for navigation and layouts.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">App Router Architecture</h2>
        <p className="mb-4">
          Next.js App Router uses directories to define routes and special files to define UI for each route segment. The CFS application organizes routes using route groups and shared layouts.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`app/
├── (login)/                # Authentication route group
│   └── page.tsx            # Login page
├── (template)/             # Main application route group with shared layout
│   ├── dashboard/          
│   │   └── page.tsx        # Dashboard page
│   ├── clients/            
│   │   └── page.tsx        # Clients page
│   ├── ...                 # Other feature routes
│   └── layout.tsx          # Shared layout for all template routes
├── downloads/              # Direct download routes
│   └── [...slug]/          # Catch-all route for downloads
├── commissionstructure/    # Commission structure routes
│   └── page.tsx            # Commission structure page
└── layout.tsx              # Root layout`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Route Groups</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">1. <code>(login)</code></h3>
            <ul className="list-disc pl-6">
              <li>Groups authentication-related routes</li>
              <li>Isolated from main application layout</li>
              <li>Simplified UI for authentication</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">2. <code>(template)</code></h3>
            <ul className="list-disc pl-6">
              <li>Groups all main application routes with a shared layout</li>
              <li>Contains sidebar, header, and main content area</li>
              <li>Applies consistent navigation across features</li>
              <li>Implements authentication protection</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">3. <code>(reports)</code></h3>
            <ul className="list-disc pl-6">
              <li>Nested group for various report types</li>
              <li>Business reports</li>
              <li>Performance reports</li>
              <li>Premium reports</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Layout Structure</h2>
        <div className="space-y-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Root Layout (<code>app/layout.tsx</code>)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Sets up HTML document structure</li>
              <li>Applies global styles and fonts</li>
              <li>Provides global context providers</li>
              <li>Present on all routes</li>
            </ul>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}`}
            </pre>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Template Layout (<code>app/(template)/layout.tsx</code>)</h3>
            <ul className="list-disc pl-6 mb-4">
              <li>Implements authenticated layout with navigation</li>
              <li>Contains sidebar and header</li>
              <li>Provides main content container</li>
              <li>Present on all routes in the (template) group</li>
            </ul>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`export default function TemplateLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Feature Routes</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Core Features</h3>
            <ul className="list-disc pl-6">
              <li><code>/dashboard</code> - Main landing page</li>
              <li><code>/clients</code> - Client management</li>
              <li><code>/invoices</code> - Invoice management</li>
              <li><code>/statements</code> - Statement management</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Business Intelligence</h3>
            <ul className="list-disc pl-6">
              <li><code>/businessintelligencedashboard</code></li>
              <li><code>/(reports)/business</code></li>
              <li><code>/(reports)/performance</code></li>
              <li><code>/(reports)/premium</code></li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">User Settings</h3>
            <ul className="list-disc pl-6">
              <li><code>/accountsettings</code></li>
              <li>Profile management</li>
              <li>Security settings</li>
              <li>Preferences</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Specialized Features</h3>
            <ul className="list-disc pl-6">
              <li><code>/downloads</code> - File downloads</li>
              <li><code>/ebquoterequest</code> - Quote management</li>
              <li><code>/todos</code> - Task management</li>
              <li><code>/commissionstructure</code> - Commission management</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Routing Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">URL Structure</h3>
            <ul className="list-disc pl-6">
              <li>Semantic URLs</li>
              <li>Clean URL structure</li>
              <li>Consistent patterns</li>
              <li>SEO optimization</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">State Management</h3>
            <ul className="list-disc pl-6">
              <li>State preservation</li>
              <li>Deep linking support</li>
              <li>Navigation state tracking</li>
              <li>Route protection</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 