import type { Metadata } from "next"
import { CodeBlock } from "@/components/ui/code-block"

export const metadata: Metadata = {
  title: "Project Structure | CFS UI Documentation",
  description: "Overview of the CFS UI project structure and organization",
}

export default function ProjectStructure() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">Project Structure</h1>
      
      <p className="mb-4">
        The application follows a feature-based organization with a clear separation of concerns. This structure optimizes for code discoverability, maintainability, and scalability.
      </p>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Top-Level Directory Organization</h2>
      <div className="mb-6 bg-muted p-4 rounded-md overflow-auto dark:bg-muted">
        <CodeBlock>
          {`/
├── app/                    # Next.js App Router structure
├── assets/                 # Static assets (images, fonts, etc.)
├── components/             # Reusable React components
├── contexts/               # React Context providers
├── helpers/                # Utility functions and API helpers
├── hooks/                  # Custom React hooks
├── lib/                    # Library code and utilities
├── public/                 # Static public assets (favicon, robots.txt)
├── store/                  # Zustand store definitions
├── types.ts                # TypeScript type definitions
├── config.ts               # Application configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── next.config.js/mjs      # Next.js configuration
└── package.json            # Dependencies and scripts`}
        </CodeBlock>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Detailed Structure Breakdown</h2>
      
      <h3 className="mb-3 mt-6 text-xl font-semibold">App Directory (<code>/app/</code>)</h3>
      <p className="mb-2">The core of the Next.js App Router structure:</p>
      <div className="mb-6 bg-muted p-4 rounded-md overflow-auto dark:bg-muted">
        <CodeBlock>
          {`app/
├── (login)/                # Login-related routes (grouped)
│   └── page.tsx            # Login page component
├── (template)/             # Main application routes with shared layout
│   ├── dashboard/          # Dashboard pages
│   │   └── page.tsx        # Main dashboard view
│   ├── clients/            # Client management
│   │   └── page.tsx        # Clients list view
│   ├── invoices/           # Invoice management
│   │   └── page.tsx        # Invoices list view
│   ├── statements/         # Statement management
│   │   └── page.tsx        # Statements list view
│   ├── businessintelligencedashboard/ # BI reporting
│   │   └── page.tsx        # Business intelligence dashboard
│   ├── accountsettings/    # User settings
│   │   └── page.tsx        # Account settings page
│   ├── (reports)/          # Reports route group
│   │   ├── performance/    # Performance reports
│   │   ├── business/       # Business reports
│   │   └── premium/        # Premium reports
│   ├── downloads/          # In-app downloads
│   ├── ebquoterequest/     # EB quote request
│   ├── todos/              # Todo management
│   └── layout.tsx          # Shared layout for app routes
├── downloads/              # Direct file downloads
├── commissionstructure/    # Commission structure management
├── layout.tsx              # Root layout component
├── globals.css             # Global styles
└── favicon.ico             # Application favicon`}
        </CodeBlock>
      </div>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Components Directory (<code>/components/</code>)</h3>
      <p className="mb-2">Organized by feature and component type:</p>
      <div className="mb-6 bg-muted p-4 rounded-md overflow-auto dark:bg-muted">
        <CodeBlock>
          {`components/
├── ui/                     # Primitive UI components
│   ├── button.tsx          # Button component
│   ├── dialog.tsx          # Dialog/modal component
│   ├── table.tsx           # Table component
│   ├── select.tsx          # Select dropdown component
│   ├── input.tsx           # Input component
│   ├── checkbox.tsx        # Checkbox component
│   ├── tooltip.tsx         # Tooltip component
│   ├── carousel.tsx        # Carousel/slider component
│   ├── tabs.tsx            # Tabs component
│   ├── card.tsx            # Card component
│   └── ...                 # Other UI primitives
├── Dashboard/              # Dashboard-specific components
│   ├── Comps/              # Dashboard sub-components
│   │   ├── upcoming-birthdays.tsx
│   │   ├── upcoming-anniversary.tsx
│   │   ├── invite-members.tsx
│   │   └── cross-sell-upsell2.tsx
├── ClientsUI/              # Client management components
├── chatbot/                # Chatbot functionality
│   └── chatbot2.tsx        # Main chatbot component
├── filebot/                # File management functionality
│   └── filebot.tsx         # File management UI
└── Misc/                   # Miscellaneous components
    ├── login-page.tsx      # Login page component
    └── ClientToastContainer.tsx # Toast notification container`}
        </CodeBlock>
      </div>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Contexts Directory (<code>/contexts/</code>)</h3>
      <p className="mb-2">Global state providers:</p>
      <div className="mb-6 bg-muted p-4 rounded-md overflow-auto dark:bg-muted">
        <CodeBlock>
          {`contexts/
├── UserContext.tsx         # User authentication and profile context
└── fileStructureContext.tsx # File structure and hierarchy context`}
        </CodeBlock>
      </div>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Hooks Directory (<code>/hooks/</code>)</h3>
      <p className="mb-2">Custom React hooks for data fetching and reusable logic:</p>
      <div className="mb-6 bg-muted p-4 rounded-md overflow-auto dark:bg-muted">
        <CodeBlock>
          {`hooks/
├── useAPI.tsx              # Primary GET request hook
├── useAPIFetch.tsx         # Flexible API fetching hook
├── useAPIPost.tsx          # POST request hook
├── useAPIUpdate.tsx        # PUT/UPDATE request hook
├── useAPIDelete.tsx        # DELETE request hook
├── useAPIPost2.tsx         # Alternative POST hook
├── useAPIPostFunc.tsx      # Function-based POST hook
├── useDashboardData.tsx    # Dashboard data hook with React Query
├── useDashboardDataExtended.tsx # Enhanced dashboard data hook
├── useFileStructure.tsx    # File structure hook with React Query
├── useGetFilters.tsx       # Filter options hook
├── useDownloadsAPI.tsx     # File download hook
├── usePolicyChatAPI.tsx    # Policy chat hook
├── useInvoiceChatAPI.tsx   # Invoice chat hook
├── useProductChatAPI.tsx   # Product chat hook
├── useDebounce.ts          # Debounce utility hook
└── ...                     # Other specialized hooks`}
        </CodeBlock>
      </div>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Store Directory (<code>/store/</code>)</h3>
      <p className="mb-2">Zustand stores for state management:</p>
      <div className="mb-6 bg-muted p-4 rounded-md overflow-auto dark:bg-muted">
        <CodeBlock>
          {`store/
├── userStore.ts            # User preferences and settings
├── menuStore.ts            # Navigation menu state
└── fileStore.ts            # File management state`}
        </CodeBlock>
      </div>

      <h3 className="mb-3 mt-6 text-xl font-semibold">Helpers Directory (<code>/helpers/</code>)</h3>
      <p className="mb-2">Utility functions and API helpers:</p>
      <div className="mb-6 bg-muted p-4 rounded-md overflow-auto dark:bg-muted">
        <CodeBlock>
          {`helpers/
├── helpers.ts              # General utility functions
├── commission-structure.ts # Commission structure utilities
└── CheckClientLogin.ts     # Authentication verification utility`}
        </CodeBlock>
      </div>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">File Naming Conventions</h2>
      <p className="mb-2">The project follows consistent naming conventions:</p>
      <ul className="mb-4 list-disc pl-6 space-y-1">
        <li>React components use PascalCase (e.g., <code>Button.tsx</code>)</li>
        <li>Hooks use camelCase with "use" prefix (e.g., <code>useAPI.tsx</code>)</li>
        <li>Utility functions use camelCase (e.g., <code>helpers.ts</code>)</li>
        <li>Page components are named <code>page.tsx</code> per Next.js convention</li>
        <li>Layout components are named <code>layout.tsx</code> per Next.js convention</li>
      </ul>

      <h2 className="mb-4 mt-8 text-2xl font-semibold">Module Organization</h2>
      <p className="mb-2">Within individual files, the project follows a consistent organization pattern:</p>
      <ol className="mb-4 list-decimal pl-6 space-y-1">
        <li>Imports (external libraries first, then internal modules)</li>
        <li>Type definitions and interfaces</li>
        <li>Constants and configuration</li>
        <li>Helper functions</li>
        <li>Component/hook definition</li>
        <li>Exports</li>
      </ol>
      <p>This structure ensures consistency across the codebase and makes files easier to navigate and understand.</p>
    </main>
  )
} 