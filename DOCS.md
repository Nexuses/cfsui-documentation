# CFS UI - Project Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Project Architecture](#project-architecture)
3. [Technology Stack](#technology-stack)
4. [Project Structure](#project-structure)
5. [Core Components](#core-components)
6. [State Management](#state-management)
7. [Custom Hooks](#custom-hooks)
8. [API Integration](#api-integration)
9. [Authentication & Authorization](#authentication--authorization)
10. [Routing Structure](#routing-structure)
11. [Environment Configuration](#environment-configuration)
12. [Extending the Application](#extending-the-application)

## Introduction

The CFS UI (Continental Financial Services User Interface) is a comprehensive Next.js-based web application designed to provide enterprise-grade financial services functionality with a modern, responsive user interface. The application serves as a centralized dashboard for financial data, invoices, statements, business intelligence reporting, and client management.

### Purpose and Goals

- **Centralized Platform**: Provide a unified interface for financial advisors and managers to access client information, financial documents, and performance metrics
- **Data Visualization**: Transform complex financial data into intuitive visual representations for better decision-making
- **Process Automation**: Streamline common financial workflows through integrated tools and services
- **Client Management**: Offer comprehensive client relationship management features
- **Secure Access**: Implement robust authentication and authorization mechanisms to protect sensitive financial data

### Key Features

- **Dashboard**: Interactive overview of KPIs, business metrics, and performance indicators
- **Client Management**: Comprehensive client information management and reporting
- **Document Management**: Invoice and statement generation, viewing, and distribution
- **Business Intelligence**: Advanced data analysis and visualization tools
- **Task Management**: Todo functionality for tracking action items
- **Chatbot Integration**: AI-powered assistance for information retrieval
- **File Management**: Structured file system for document organization
- **Commission Structure Management**: Tools for managing and analyzing commission structures

The application is designed for financial advisors, managers, and administrative staff who need access to client financial information, performance data, and business metrics in a secure, efficient manner.

## Project Architecture

The project follows a modern React application architecture using Next.js 15 with the App Router pattern. It employs a combination of client and server components, with careful separation of concerns between UI components, state management, and business logic.

### Architecture Overview

```
┌─────────────────────────────────────────────────────────────┐
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
└───────────────────────────────────────────────────────────┘
```

### Key Architectural Features

#### Next.js App Router
The application utilizes Next.js App Router for file-based routing, providing:
- **Route Groups**: Logical organization of routes with shared layouts
- **Nested Layouts**: Hierarchical UI structures that maintain state across page navigation
- **Server Components**: Where appropriate, to reduce client-side JavaScript
- **Client Components**: For interactive elements requiring client-side state
- **Parallel Routes**: For complex page layouts with multiple independent sections

#### Client/Server Components Separation
The application strategically uses both client and server components:
- **Server Components**: Used for static content, data fetching operations, and SEO requirements
- **Client Components**: Used for interactive elements, real-time updates, and form handling
- **Boundary Management**: Clear "use client" directives to separate client and server rendering concerns

#### Contexts and Stores
Global state management is implemented through a hybrid approach:
- **React Context API**: For widely-used application state (user info, file structures)
- **Zustand Stores**: For more focused feature-specific state with simpler API
- **Component-Level State**: For UI state that doesn't need global persistence

#### API Integration Architecture
- **Centralized Configuration**: API base URLs and global settings managed in config files
- **Custom Hook Layer**: Abstraction over Axios for API communication
- **React Query Integration**: For automatic caching, refetching, and loading states
- **Error Handling Strategy**: Consistent patterns for API error management across the application

#### Component Modularity
The application follows strict component modularity principles:
- **Atomic Design**: UI built from small, reusable components that combine into larger features
- **Component Composition**: Complex UI assembled from simpler building blocks
- **Container/Presentational Pattern**: Separation of data handling from UI rendering
- **Prop Drilling Minimization**: State management tools used to avoid excessive prop passing

### Data Flow

The application follows a unidirectional data flow pattern:
1. **User Interaction**: Triggers events in UI components
2. **State Updates**: Events modify local state or global state through hooks/stores/contexts
3. **API Calls**: State changes may trigger API calls via custom hooks
4. **UI Updates**: New data from API or state changes is reflected in the UI

### Performance Optimizations

The architecture incorporates several performance optimization strategies:
- **Code Splitting**: Automatic code splitting through Next.js page and component system
- **React.memo and useMemo**: For expensive component rendering optimizations
- **Data Caching**: Via React Query for minimizing redundant API calls
- **Image Optimization**: Using Next.js Image component for responsive, optimized images
- **Prefetching**: Strategic data prefetching for anticipated user navigation paths

### Security Architecture

Security is integrated throughout the architecture:
- **Authentication**: Token-based authentication with secure storage
- **Route Protection**: Route-level access control based on user permissions
- **API Security**: Secure API communication with automatic token refresh
- **Input Validation**: Client and server-side validation for all user inputs
- **Data Encryption**: Sensitive data encryption where appropriate

## Technology Stack

The CFS UI application leverages a modern technology stack focused on performance, developer experience, and maintainability:

### Frontend Framework

- **Next.js 15**: Full-featured React framework with App Router, providing:
  - Server-side rendering (SSR) for improved SEO and initial load performance
  - Static site generation (SSG) capabilities for static content
  - API routes for backend functionality without separate server
  - Image optimization for performance
  - Font optimization with next/font
  - Automatic code splitting for optimized bundles

### Core Languages

- **TypeScript**: Strongly-typed superset of JavaScript that improves:
  - Code quality through static type checking
  - Developer experience with enhanced IDE support
  - Maintainability through clear interfaces and type definitions
  - Self-documenting code with explicit type annotations
  - Reduced runtime errors through compile-time checks

### UI Framework & Rendering

- **React 19**: Latest version with improvements in:
  - Concurrent rendering
  - Server components
  - Suspense and streaming SSR
  - Optimized re-rendering with automatic batching
  - React Strict Mode for identifying potential problems

### State Management

- **React Context API**: For global state management with:
  - Reducer patterns for complex state logic
  - Provider components for state distribution
  - Consumer hooks for state consumption

- **Zustand**: Lightweight state management library offering:
  - Simple API with minimal boilerplate
  - Selective state subscriptions
  - Middleware support for advanced features
  - DevTools integration for debugging

### Styling Solution

- **TailwindCSS**: Utility-first CSS framework providing:
  - Consistent design system through configuration
  - Responsive design utilities
  - Component-level styling without context switching
  - Small production CSS bundles through PurgeCSS

- **class-variance-authority (CVA)**: For component variants that:
  - Create type-safe UI component variants
  - Integrate seamlessly with Tailwind
  - Enable conditional styling with TypeScript support

### UI Component Libraries

- **Radix UI Primitives**: Unstyled, accessible components that:
  - Provide robust accessibility features
  - Offer keyboard navigation support
  - Handle complex component behaviors (focus management, etc.)
  - Provide consistent cross-browser functionality

- **Shadcn/UI**: Component collection built on Radix UI that:
  - Provides pre-styled, customizable components
  - Maintains accessibility compliance
  - Integrates with TailwindCSS
  - Offers consistent theming capabilities

### Data Fetching & API Communication

- **TanStack React Query**: Advanced data fetching library with:
  - Automatic caching and stale-while-revalidate patterns
  - Background refetching
  - Pagination and infinite scrolling support
  - Optimistic updates
  - Mutation capabilities with rollback

- **Axios**: HTTP client for API communication featuring:
  - Promise-based API
  - Request and response interceptors
  - Automatic transforms for JSON data
  - Client-side protection against XSRF
  - Progress indicators for long-running requests

### Data Visualization

- **Chart.js with React Chart.js 2**: Charting library offering:
  - Responsive charts
  - Multiple chart types (bar, line, pie, radar, etc.)
  - Animation capabilities
  - Extensive customization options

- **Recharts**: React-based charting library providing:
  - Declarative chart components
  - Responsive container components
  - Customizable chart elements
  - Composable chart design

### Animation & UI Effects

- **Framer Motion**: Animation library offering:
  - Declarative animations
  - Gesture recognition
  - Layout animations
  - Exit animations
  - Animation orchestration

### Development & Build Tools

- **ESLint**: For code quality enforcement
- **TypeScript Compiler**: For type checking
- **PostCSS**: For CSS processing
- **Turbopack**: For faster development builds
- **Babel**: For JavaScript transpilation

## Project Structure

The application follows a feature-based organization with a clear separation of concerns. This structure optimizes for code discoverability, maintainability, and scalability.

### Top-Level Directory Organization

```
/
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
└── package.json            # Dependencies and scripts
```

### Detailed Structure Breakdown

#### App Directory (`/app/`)

The core of the Next.js App Router structure:

```
app/
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
└── favicon.ico             # Application favicon
```

#### Components Directory (`/components/`)

Organized by feature and component type:

```
components/
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
    └── ClientToastContainer.tsx # Toast notification container
```

#### Contexts Directory (`/contexts/`)

Global state providers:

```
contexts/
├── UserContext.tsx         # User authentication and profile context
└── fileStructureContext.tsx # File structure and hierarchy context
```

#### Hooks Directory (`/hooks/`)

Custom React hooks for data fetching and reusable logic:

```
hooks/
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
└── ...                     # Other specialized hooks
```

#### Store Directory (`/store/`)

Zustand stores for state management:

```
store/
├── userStore.ts            # User preferences and settings
├── menuStore.ts            # Navigation menu state
└── fileStore.ts            # File management state
```

#### Helpers Directory (`/helpers/`)

Utility functions and API helpers:

```
helpers/
├── helpers.ts              # General utility functions
├── commission-structure.ts # Commission structure utilities
└── CheckClientLogin.ts     # Authentication verification utility
```

### File Naming Conventions

The project follows consistent naming conventions:
- React components use PascalCase (e.g., `Button.tsx`)
- Hooks use camelCase with "use" prefix (e.g., `useAPI.tsx`)
- Utility functions use camelCase (e.g., `helpers.ts`)
- Page components are named `page.tsx` per Next.js convention
- Layout components are named `layout.tsx` per Next.js convention

### Module Organization

Within individual files, the project follows a consistent organization pattern:
1. Imports (external libraries first, then internal modules)
2. Type definitions and interfaces
3. Constants and configuration
4. Helper functions
5. Component/hook definition
6. Exports

This structure ensures consistency across the codebase and makes files easier to navigate and understand.

## Core Components

The application is built around a set of core components that provide the foundation for the user interface and functionality. These components are organized by their purpose and reusability across the application.

### Layout Components

The application uses a nested layout structure to maintain consistent UI elements across routes while allowing for route-specific customization.

#### Root Layout (`app/layout.tsx`)

The root layout serves as the application shell and includes:

- **HTML Structure**: Basic HTML structure with language attributes
- **Global Font Configuration**: Custom font setup with `next/font`
- **Global Providers**: Context providers with application-wide scope
  - `FileStructureProvider`: For file hierarchy data
  - `UserProvider`: For user authentication state
- **Toast Container**: Global toast notification system
- **Metadata Configuration**: SEO-related metadata setup

```tsx
// Simplified example of root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontClassName} antialiased`}>
        <FileStructureProvider>
          <UserProvider>
            <ClientSideToastContainer />
            {children}
          </UserProvider>
        </FileStructureProvider>
      </body>
    </html>
  );
}
```

#### Template Layout (`app/(template)/layout.tsx`)

The template layout provides the main application structure and includes:

- **Navigation Components**:
  - Sidebar: Main application navigation menu
  - Header: Application header with user information, search, and actions
- **Main Content Area**: Flexible container for page content
- **Error Boundaries**: For graceful error handling
- **Authentication Check**: Verification of user session

```tsx
// Simplified example of template layout
export default function TemplateLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex flex-col flex-grow">
        <Header />
        <main className="flex-grow p-6 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
```

### Feature Components

The application contains several feature-specific component groups that implement the core functionality.

#### Dashboard Components

Dashboard components provide data visualization and KPI tracking:

- **DashboardStats**: Summary statistics for key performance indicators
- **BusinessSummary**: Overview of business performance metrics
- **CommissionCharts**: Visualizations of commission data
- **PolicyTracker**: Tracking of policy status and maturity
- **UpcomingBirthdays**: Client birthday notification component
- **UpcomingAnniversary**: Client anniversary notification component
- **CrossSellUpsell**: Opportunity identification component
- **InviteMembers**: Team collaboration component

These components typically follow a pattern of:
1. Data fetching using custom hooks
2. Loading state handling with skeletons
3. Error state handling with fallbacks
4. Data visualization with charts or formatted displays

```tsx
// Simplified example of a dashboard component
export function UpcomingBirthdays() {
  const { loading, errors, fetchData } = useAPI({
    url: "/api/dashboard/getclients",
    params: { type: "birthday" }
  });
  
  useEffect(() => { fetchData(); }, [fetchData]);
  
  if (loading) return <BirthdaySkeleton />;
  if (errors) return <ErrorDisplay message={errors} />;
  
  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Birthdays</CardTitle>
      </CardHeader>
      <CardContent>
        {/* Birthday client list rendering */}
      </CardContent>
    </Card>
  );
}
```

#### Client Management Components

Components for client information and management:

- **ClientList**: Tabular display of client information
- **ClientDetail**: Comprehensive client profile view
- **ClientModal**: Modal dialog for client creation/editing
- **ClientFilter**: Filtering interface for client lists
- **ClientSearch**: Search functionality for finding clients

#### Document Management Components

Components for handling invoices, statements, and other documents:

- **InvoiceList**: Tabular display of invoices
- **InvoiceDetail**: Detailed view of individual invoices
- **StatementList**: List of statements with filtering
- **StatementViewer**: Document viewer for statements
- **DocumentDownload**: Interface for document export/download

#### Interactive Assistant Components

AI-powered assistance components:

- **Chatbot**: Conversational interface for information retrieval
  - Query processing
  - Response generation
  - Conversation history
  - Context-aware suggestions
  
- **Filebot**: File management assistant
  - Directory navigation
  - File search functionality
  - File metadata display
  - Download capabilities

### UI Component Library

The CFS UI application implements a comprehensive UI component library that serves as the foundation for all user interface elements. The library combines Shadcn UI (built on Radix UI primitives) with custom components tailored to the application's specific needs.

Tailwind CSS - https://tailwindcss.com/docs/styling-with-utility-classes#overview

Shadcn UI - https://ui.shadcn.com/docs

### Component Architecture

The UI component library follows a layered architecture:

```
┌─────────────────────────────────────────────────────────┐
│                  Feature Components                      │
│  (Dashboard widgets, Client cards, Invoice tables, etc.) │
└───────────────────────────┬─────────────────────────────┘
                            │
                            │ Built with
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  Composite Components                    │
│    (DataTable, FilterPanel, SearchBar, etc.)            │
└───────────────────────────┬─────────────────────────────┘
                            │
                            │ Built with
                            ▼
┌─────────────────────────────────────────────────────────┐
│                  Primitive Components                    │
│  (Button, Input, Select, Checkbox, Card, etc.)          │
└─────────────────────────────────────────────────────────┘
```

### Design System Integration

All UI components are designed within a consistent design system that includes:

- **Typography**: Font families, sizes, weights, and line heights
- **Color Palette**: Primary, secondary, accent colors with various shades
- **Spacing**: Consistent spacing scale for margins and padding
- **Border Radius**: Standardized rounding for UI elements
- **Shadows**: Elevation system for depth and hierarchy
- **Transitions**: Standard animation timings and easing functions

### Core Primitive Components

#### Button Component (`button.tsx`)

The Button component is a versatile, accessible button primitive with multiple variants:

```tsx
// Example Button component usage
<Button variant="primary" size="md" disabled={isLoading}>
  {isLoading ? <Spinner className="mr-2" /> : null}
  Save Changes
</Button>
```

Features:
- Multiple variants: primary, secondary, outline, ghost, link
- Size options: sm, md, lg
- Loading state support
- Icon support (left and right)
- Full width option
- Keyboard accessibility
- Focus management

#### Input Component (`input.tsx`)

Text input component with validation states:

```tsx
// Example Input component usage
<Input
  label="Email Address"
  type="email"
  value={email}
  onChange={handleEmailChange}
  error={errors.email}
  placeholder="you@example.com"
  required
/>
```

#### Select Component (`select.tsx`)

Dropdown selection component with option management:

```tsx
// Example Select component usage
<Select
  label="Status"
  value={status}
  onChange={handleStatusChange}
  options={[
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending Approval' },
  ]}
/>
```

#### Dialog Component (`dialog.tsx`)

Modal dialog for focused interactions:

```tsx
// Example Dialog component usage
<Dialog
  open={isDialogOpen}
  onOpenChange={setIsDialogOpen}
  title="Confirm Deletion"
  description="Are you sure you want to delete this item? This action cannot be undone."
  footer={
    <div className="flex justify-end gap-2">
      <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
        Cancel
      </Button>
      <Button variant="destructive" onClick={handleDelete}>
        Delete
      </Button>
    </div>
  }
>
  {/* Dialog content */}
</Dialog>
```


### Composite Components

#### SearchBar

```tsx
// Example SearchBar component usage
<SearchBar
  placeholder="Search clients..."
  value={searchTerm}
  onChange={setSearchTerm}
  onSearch={handleSearch}
  suggestions={recentSearches}
/>
```

#### Pagination Component (`pagination.tsx`)

```tsx
// Example Pagination component usage
<Pagination
  totalItems={totalItems}
  pageSize={pageSize}
  currentPage={currentPage}
  onPageChange={handlePageChange}
/>
```

### Data Display Components

#### Card Component (`card.tsx`)

Container for grouping related content:

```tsx
// Example Card component usage
<Card>
  <CardHeader>
    <CardTitle>Revenue Overview</CardTitle>
    <CardDescription>Monthly revenue breakdown</CardDescription>
  </CardHeader>
  <CardContent>
    <RevenueChart data={revenueData} />
  </CardContent>
  <CardFooter>
    <Button variant="link">View detailed report</Button>
  </CardFooter>
</Card>
```

#### Badge Component (`badge.tsx`)

Status and category indicators:

```tsx
// Example Badge component usage
<Badge variant="success">Active</Badge>
<Badge variant="danger">Overdue</Badge>
<Badge variant="warning">Pending</Badge>
<Badge variant="info">In Progress</Badge>
```

### Specialized Components

#### Carousel Component (`carousel.tsx`)

Image and content slider:

```tsx
// Example Carousel component usage
<Carousel autoplay autoplayInterval={5000}>
  <CarouselSlide>
    <img src="/slide1.jpg" alt="Slide 1" />
  </CarouselSlide>
  <CarouselSlide>
    <img src="/slide2.jpg" alt="Slide 2" />
  </CarouselSlide>
  <CarouselSlide>
    <img src="/slide3.jpg" alt="Slide 3" />
  </CarouselSlide>
</Carousel>
```

#### Toast Component (via ClientSideToastContainer)

Temporary notification display:

```tsx
// Example Toast usage
import { toast } from 'react-toastify';

function handleSubmit() {
  try {
    // Submit data
    toast.success("Client information updated successfully");
  } catch (error) {
    toast.error("Failed to update client information");
  }
}
```

### Accessibility Features

The component library prioritizes accessibility with these features:

1. **Keyboard Navigation**: All interactive components are fully keyboard accessible
2. **ARIA Attributes**: Proper ARIA roles, states, and properties
3. **Focus Management**: Visible focus indicators and logical focus order
4. **Screen Reader Support**: Meaningful text alternatives and announcements
5. **Reduced Motion**: Respects user preferences for reduced motion
6. **Color Contrast**: Meets WCAG color contrast guidelines

## State Management

The application employs a strategic approach to state management, using different solutions based on the scope, complexity, and access patterns of the state being managed.

### React Context API

The Context API is used for application-wide state that needs to be accessed by many components across different parts of the application hierarchy.

#### UserContext (`contexts/UserContext.tsx`)

Manages user authentication and profile information:

```tsx
export interface User {
  id: string;
  name: string;
  email: string;
  actcod: string;
  lvl: number;
  role: string;
  // Additional user properties
}

interface UserContextType {
  user: User | null;
  loading: boolean;
  login: (credentials: LoginCredentials) => Promise<boolean>;
  logout: () => void;
  updateUserProfile: (data: Partial<User>) => void;
}

export const UserContext = createContext<UserContextType | undefined>(undefined);

export function UserProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  
  // Implementation of login, logout, and profile update logic
  
  useEffect(() => {
    // Check for existing session and load user data
  }, []);
  
  return (
    <UserContext.Provider value={{ user, loading, login, logout, updateUserProfile }}>
      {children}
    </UserContext.Provider>
  );
}

// Custom hook for consuming the context
export function useUser() {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
}
```

Key features:
- Authentication state persistence
- Login and logout functionality
- User profile data access
- Session management
- Role-based access control information

#### FileStructureContext (`contexts/fileStructureContext.tsx`)

Manages file structure hierarchy for the file management system:

```tsx
interface FileStructureContextType {
  fileStructure: FileStructure[] | null;
  loading: boolean;
  error: Error | null;
  refreshFileStructure: () => void;
  selectedFolder: string | null;
  setSelectedFolder: (folder: string | null) => void;
}

export const FileStructureContext = createContext<FileStructureContextType | undefined>(undefined);

export function FileStructureProvider({ children }: { children: React.ReactNode }) {
  // Implementation using useFileStructure hook
  
  return (
    <FileStructureContext.Provider value={{ 
      fileStructure, 
      loading, 
      error, 
      refreshFileStructure,
      selectedFolder,
      setSelectedFolder
    }}>
      {children}
    </FileStructureContext.Provider>
  );
}

export function useFileStructureContext() {
  const context = useContext(FileStructureContext);
  if (context === undefined) {
    throw new Error('useFileStructureContext must be used within a FileStructureProvider');
  }
  return context;
}
```

Key features:
- File and folder hierarchy
- Selection state management
- Refresh capability
- Loading and error state handling

### Zustand Stores

Zustand is used for more focused, feature-specific state management with a simpler API than Context.

#### userStore (`store/userStore.ts`)

Manages user's object returned from the API at the login time:

Key features:
- UI preferences management
- Persistent settings using localStorage
- Simple API for updates
- Selective component subscription

#### menuStore (`store/menuStore.ts`)

Manages navigation menu state:

Key features:
- Stores the Menu API results
- Makes it available to use to build the sidebar

#### fileStore (`store/fileStore.ts`)

Manages file structure state:


Key features:
- Multi-file structure management
- Makes it available for the filebot to use

### Component-Level State

For UI state that doesn't need global persistence, React's built-in useState and useReducer hooks are used.

#### useState for Simple UI State

```tsx
function ClientTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Component implementation
}
```


### State Management Best Practices

The application follows these state management best practices:

1. **Appropriate Tool Selection**:
   - Context API for truly global state
   - Zustand for feature-specific state
   - Local state for UI-specific concerns

2. **State Normalization**:
   - Avoiding deeply nested state objects
   - Using normalized data structures for related data

3. **State Access Patterns**:
   - Custom hooks for accessing context
   - Selective subscriptions for Zustand stores
   - Component composition for prop passing

4. **Performance Considerations**:
   - Memoization of expensive computations
   - Selective re-rendering through careful state splitting
   - Optimized context providers with strategic placement

## Custom Hooks

The application implements a comprehensive set of custom hooks for data fetching, API communication, and reusable functionality. These hooks encapsulate common patterns and provide a consistent interface for components to interact with external services.

### API Data Fetching Hooks

#### Core API Hooks
- `useAPI`: Primary hook for GET requests with built-in authentication, error handling, and loading states
  ```tsx
  const { apiData, loading, errors, fetchData, totalRecords } = useAPI({
    url: '/api/endpoint',
    params: { key: 'value' }
  });
  ```

- `useAPIFetch`: Flexible API fetching hook that accepts URL and parameters at call time rather than initialization
  ```tsx
  const { loadingFetch, errorsFetch, fetchDataFetch } = useAPIFetch();
  // Later in code:
  const response = await fetchDataFetch('/api/endpoint', { param: 'value' });
  ```

- `useAPIPost`: Hook for POST requests with state management for loading and errors
  ```tsx
  const { postLoading, postErrors, postFetchData } = useAPIPost({
    url: '/api/endpoint',
    body: { key: 'value' }
  });
  ```

- `useAPIUpdate`: Hook for PUT/UPDATE requests with response handling
- `useAPIDelete`: Hook for DELETE requests with success/error state management
- `useAPIPost2`: Alternative POST hook with different response handling
- `useAPIPostFunc`: Function-based POST hook that returns a posting function for flexible usage

#### Feature-Specific API Hooks
- `useDashboardData`: Fetches dashboard data with React Query for caching and automatic refetching
  ```tsx
  const { data, isLoading, error } = useDashboardData();
  ```

- `useDashboardDataExtended`: Enhanced dashboard data fetching with additional parameters
- `useFileStructure`: Fetches file structure hierarchy with React Query integration
- `useGetFilters`: Retrieves filter options for various components
- `useDownloadsAPI`: Specialized hook for handling file downloads

#### Chat/Bot API Hooks
- `usePolicyChatAPI`: Handles policy-related chat functionality
- `useInvoiceChatAPI`: Manages invoice-related chat queries
- `useProductChatAPI`: Facilitates product information chat functionality
- `useDownloadZipChatAPI`: Handles ZIP file downloads via chatbot
- `useDownloadInvoiceChatAPI`: Manages invoice downloads via chatbot

### Utility Hooks
- `useDebounce`: Implements debouncing for search inputs and other rapidly changing values
  ```tsx
  const debouncedValue = useDebounce(searchTerm, 500); // 500ms delay
  ```

### Key Features of Custom Hooks
1. **Consistent Error Handling**: All API hooks implement standardized error handling with 401 authentication redirection
2. **Loading State Management**: Loading states are tracked automatically for UI feedback
3. **Automatic Token Management**: Authentication tokens are included in requests
4. **Response Normalization**: API responses are processed into consistent formats
5. **Caching Integration**: Many hooks leverage React Query for efficient data caching
6. **Type Safety**: TypeScript interfaces for request and response data

### Hook Usage Patterns
- Component-level API calls use appropriate hooks based on operation type
- Dashboard and data visualization components use Query-based hooks for automatic refreshing
- Form submissions use POST hooks with appropriate error handling
- File operations use specialized file handling hooks

## API Integration

The CFS UI application implements a robust API integration layer that provides consistent, type-safe communication with backend services. This integration is primarily managed through custom hooks that abstract the complexities of API calls and provide a consistent interface for components.

### API Architecture Overview

```
┌───────────────────┐
│   UI Components   │
└─────────┬─────────┘
          │ Uses
┌─────────▼─────────┐
│   Custom Hooks    │
└─────────┬─────────┘
          │ Uses
┌─────────▼─────────┐
│    Axios Client   │
└─────────┬─────────┘
          │ Communicates with
┌─────────▼─────────┐
│   Backend API     │
└───────────────────┘
```

### Core API Configuration

The base configuration for API communication is centralized in the `config.ts` file:

```typescript
// export const BASE_URL = "https://faitapiuat.cibaccess.com"        // for development
export const BASE_URL = "https://faitapiuat2.cibaccess.com"       //for uat (new)
// export const BASE_URL = "https://faitapidemouat.cibaccess.com"    //for uat (old)
```

This configuration allows for easy switching between different API environments by uncommenting the appropriate BASE_URL.

### API Response Structure

The application expects a consistent API response structure which is typed using TypeScript interfaces:

```typescript
// Simplified example of API response types
export interface APIResponse {
  status: string;
  data?: any;
  errormessage?: string;
  totalrecords?: number;
  advisor?: string;
  grandtotal?: number;
}
```

### Authentication for API Calls

All API calls automatically include authentication tokens retrieved from localStorage:

```typescript
const headers = {
  Authorization: `Bearer ${localStorage.getItem("access_token")}`,
  "Content-Type": "application/json",
};
```

If authentication fails (401 response), users are automatically redirected to the login page.

### API Integration Through Custom Hooks

The application uses a hierarchy of custom hooks for API communication:

#### Base API Hooks

1. **useAPI** - Core hook for GET requests
   - Handles authentication
   - Manages loading states
   - Handles error responses
   - Provides consistent response formatting
   
   ```typescript
   const { apiData, loading, errors, fetchData, totalRecords } = useAPI({
     url: '/api/clients',
     params: { page: 1, pageSize: 10 }
   });
   
   // Later in component:
   useEffect(() => {
     fetchData();
   }, [fetchData]);
   ```

2. **useAPIFetch** - Flexible API fetching with dynamic parameters
   - Similar to useAPI but accepts URL and parameters at call time
   - Useful for components that need to make multiple different API calls
   
   ```typescript
   const { loadingFetch, errorsFetch, fetchDataFetch } = useAPIFetch();
   
   // Later in component:
   const handleFetchDetails = async (id) => {
     const data = await fetchDataFetch(`/api/clients/${id}/details`);
     setClientDetails(data);
   };
   ```

3. **useAPIPost** - Specialized hook for POST operations
   - Handles form submissions
   - Manages loading states for buttons/forms
   - Provides error handling specific to data creation
   
   ```typescript
   const { postLoading, postErrors, postFetchData } = useAPIPost({
     url: '/api/clients/create',
     body: formData
   });
   
   // In form submit handler:
   const handleSubmit = async (e) => {
     e.preventDefault();
     const result = await postFetchData();
     if (result && result.status === "ok") {
       toast.success("Client created successfully");
       router.push('/clients');
     }
   };
   ```

4. **useAPIUpdate** - For PUT/UPDATE operations
   - Similar to useAPIPost but optimized for updates
   - Handles conditional updates and partial data

5. **useAPIDelete** - For DELETE operations
   - Confirmation handling
   - Success/error messaging
   - Optimistic UI updates

#### Feature-Specific API Hooks

These hooks build on the base hooks but add domain-specific functionality:

1. **useDashboardData** - Dashboard data fetching with React Query
   - Automatic refetching on interval
   - Stale-while-revalidate pattern
   - Cache invalidation logic
   
   ```typescript
   const { data, isLoading, error } = useDashboardData();
   
   // Data is automatically fetched and cached
   // Component can use refetch() to manually trigger a refresh
   ```

2. **useFileStructure** - File structure fetching with React Query
   - Tree data structure handling
   - Expansion state management
   - Selection tracking

3. **Chat API Hooks** - Specialized hooks for chat functionality
   - `usePolicyChatAPI`: Policy-specific chat operations
   - `useInvoiceChatAPI`: Invoice-specific chat operations
   - `useProductChatAPI`: Product-specific chat operations

### Error Handling Strategy

The API integration implements a consistent error handling strategy:

1. **Network Errors**: Handled globally with informative error messages
2. **Authentication Errors** (401): Automatic redirect to login
3. **Permission Errors** (403): User-friendly access denied messages
4. **Validation Errors** (400): Field-level error messages mapped to form fields
5. **Server Errors** (500): Generic error messages with error reporting

Example error handling pattern:

```typescript
try {
  // API call
} catch (error) {
  if (axios.isAxiosError(error)) {
    if (error.response?.status === 400) {
      // Handle validation errors
      if (error.response?.data?.data?.errormessage) {
        setErrors(error.response?.data?.data?.errormessage);
      } else if (error.response?.data?.errors) {
        setErrors(error.response?.data?.title);
      }
    } else if (error.response?.status === 401) {
      // Handle authentication errors
      router.push("/");
    } else {
      // Handle other errors
      console.log(error);
      setErrors("An error occurred. Please try again.");
    }
  } else {
    // Handle non-Axios errors
    console.log(error);
    setErrors("An unexpected error occurred.");
  }
}
```

### Loading State Management

API calls automatically manage loading states that can be used for UI feedback:

```tsx
// Example component using loading states
function ClientList() {
  const { loading, errors, apiData, fetchData } = useAPI({
    url: '/api/clients'
  });
  
  useEffect(() => {
    fetchData();
  }, [fetchData]);
  
  if (loading) return <TableSkeleton />;
  if (errors) return <ErrorAlert message={errors} />;
  
  return (
    <Table data={apiData?.clients || []} />
  );
}
```

### API Caching Strategy

The application uses React Query for API calls that benefit from caching:

```tsx
// Example of React Query caching
export function useDashboardData() {
  const { user } = useUser();
  
  return useQuery({
    queryKey: ['dashboard', user?.id],
    queryFn: () => fetchDashboardData(user?.id),
    enabled: !!user?.id,
    staleTime: 5 * 60 * 1000, // 5 minutes
    refetchOnWindowFocus: true,
  });
}
```

Key caching features:
- **staleTime**: Controls when data is considered stale and needs refetching
- **cacheTime**: How long inactive data remains in cache
- **refetchOnWindowFocus**: Whether to refresh data when the user returns to the app
- **refetchOnMount**: Whether to refresh when a component mounts
- **refetchInterval**: For polling at regular intervals


### API Integration Best Practices

The application follows these API integration best practices:

1. **Centralized Configuration**: All API configuration is centralized for easy changes
2. **Consistent Error Handling**: All API calls use a consistent error handling pattern
3. **Loading State Management**: All API calls track and expose loading states
4. **Type Safety**: All API responses and requests are typed with TypeScript
5. **Authentication Handling**: Authentication is automatically managed with token refreshing
6. **Cache Invalidation**: Related data is invalidated when mutations occur
7. **Request Deduplication**: Duplicate requests are automatically deduplicated
8. **Optimistic Updates**: UI is updated immediately for better user experience
9. **Retry Logic**: Failed requests are automatically retried with exponential backoff
10. **Cancellation**: Requests are canceled when components unmount

## Authentication & Authorization

The CFS UI application implements a comprehensive authentication and authorization system to ensure secure access to sensitive financial data and functionality.

### Authentication Architecture

The application uses a token-based authentication system with the following components:

```
┌───────────────┐     ┌────────────────┐     ┌───────────────┐
│  Login Form   │     │  Auth API   │     │ User Store  │
└──────┬──────┘     └──────┬──────┘     └──────┬──────┘
       │                   │                   │
       │ Submit Credentials│                   │
       │───────────────────►                   │
       │                   │                   │
       │                   │ Validate          │
       │                   │◄──────────────────►
       │                   │                   │
       │                   │                   │
       │ Return Tokens     │                   │
       │◄───────────────────                   │
       │                   │                   │
       │ Store Tokens      │                   │
       │ & User Data       │                   │
       │───────────────────────────────────────►
       │                   │                   │
       │                   │                   │
       │ Navigate to       │                   │
       │ Dashboard         │                   │
       │                   │                   │
       ▼                   ▼                   ▼
```

## Routing Structure

The CFS UI application leverages Next.js App Router for a file-system based routing approach that provides a clean, hierarchical structure for navigation and layouts.

### App Router Architecture

Next.js App Router uses directories to define routes and special files to define UI for each route segment. The CFS application organizes routes using route groups and shared layouts.

```
app/
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
└── layout.tsx              # Root layout
```

### Route Groups

The application uses parentheses to create route groups that don't affect the URL structure:

1. **`(login)`**: Groups authentication-related routes
   - Isolated from main application layout
   - Simplified UI for authentication

2. **`(template)`**: Groups all main application routes with a shared layout
   - Contains sidebar, header, and main content area
   - Applies consistent navigation across features
   - Implements authentication protection

3. **`(reports)`**: Nested group for various report types
   - Business reports
   - Performance reports
   - Premium reports

### Route Segments and Pages

Each route segment is implemented as a directory with a `page.tsx` file:

```tsx
// Example page.tsx file for a route
export default function InvoicesPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">Invoices</h1>
      <InvoiceFilters />
      <InvoiceTable />
    </div>
  );
}
```

### Layout Structure

The application uses nested layouts to share UI elements across routes:

1. **Root Layout (`app/layout.tsx`)**:
   - Sets up HTML document structure
   - Applies global styles and fonts
   - Provides global context providers
   - Present on all routes

2. **Template Layout (`app/(template)/layout.tsx`)**:
   - Implements authenticated layout with navigation
   - Contains sidebar and header
   - Provides main content container
   - Present on all routes in the (template) group

```tsx
// Example layout structure
// app/layout.tsx (Root layout)
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}

// app/(template)/layout.tsx (Template layout)
export default function TemplateLayout({ children }) {
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
}
```

### Feature Routes

The application includes the following main feature routes:

1. **Dashboard (`/dashboard`)**
   - Main landing page after authentication
   - Overview of business metrics and KPIs
   - Quick access to frequently used functions

2. **Clients (`/clients`)**
   - Client management and reporting
   - Client profile viewing and editing
   - Client-related financial data

3. **Invoices (`/invoices`)**
   - Invoice listing, filtering, and searching
   - Invoice generation and management
   - Invoice status tracking

4. **Statements (`/statements`)**
   - Financial statement management
   - Statement generation and viewing
   - Statement distribution control

5. **Business Intelligence (`/businessintelligencedashboard`)**
   - Advanced data analysis tools
   - Custom report generation
   - Data visualization dashboards

6. **Account Settings (`/accountsettings`)**
   - User profile management
   - Password and security settings
   - Notification preferences
   - UI customization options

7. **Reports**
   - Business Reports (`/(reports)/business`)
   - Performance Reports (`/(reports)/performance`)
   - Premium Reports (`/(reports)/premium`)

8. **Specialized Features**
   - Downloads (`/downloads`) - In-app file downloads
   - EB Quote Requests (`/ebquoterequest`) - Quote request management
   - Todos (`/todos`) - Task management
   - Commission Structure (`/commissionstructure`) - Commission management


### Download Routes

The application has separate routes for downloads:

1. **In-app Downloads (`/(template)/downloads`)**
   - Files viewed within the application interface
   - Integrated with the application navigation

2. **Direct Downloads (`/downloads`)**
   - Routes that trigger file downloads
   - Often opened in new tabs/windows
   - No application navigation

### Client-Side Navigation

The application uses Next.js client-side navigation to maintain state across page transitions:


### Navigation State Management

The application manages navigation state through several mechanisms:

1. **Active Route Tracking**: Highlights current route in navigation
2. **Breadcrumbs**: Provides hierarchical location context
3. **Navigation History**: Tracks navigation for back/forward functionality
4. **Route Parameters**: Extracted for dynamic content loading

### Route Protection Strategy

Route protection is implemented at multiple levels:

1. **Layout-Level Protection**: Template layout checks authentication
2. **Route-Level Guards**: Individual routes can check specific permissions
3. **Server-Side Redirection**: For direct URL access attempts

### Routing Best Practices

The application follows these routing best practices:

1. **Semantic URLs**: URLs reflect the content they represent
2. **Clean URL Structure**: Avoids unnecessary parameters and query strings
3. **Consistent Patterns**: Similar features use similar URL patterns
4. **SEO Optimization**: Where applicable, URLs are SEO-friendly
5. **State Preservation**: Navigation maintains important application state
6. **Deep Linking**: Direct linking to specific content is supported

## Environment Configuration

The application allows configuring the API base URL through `config.ts`:

```typescript
// export const BASE_URL = "https://faitapiuat.cibaccess.com"        // for development
export const BASE_URL = "https://faitapiuat2.cibaccess.com"       //for uat (new)
// export const BASE_URL = "https://faitapidemouat.cibaccess.com"    //for uat (old)
```

Simply uncomment the desired base URL and comment the others to switch environments.

## Extending the Application

This section provides comprehensive guidelines for extending and modifying the CFS UI application, ensuring that new features and changes maintain consistency with the existing codebase.

### Adding New Routes

To add a new route to the application:

1. **Create route directory**:
   - Determine the appropriate route group
   - Create a new directory in the App Router structure
   ```
   mkdir -p app/(template)/new-page
   ```

2. **Create page component**:
   - Create a `page.tsx` file in the new directory
   - Implement the page component following the application patterns
   ```tsx
   // app/(template)/new-feature/page.tsx
   export default function NewFeaturePage() {
     return (
       <div className="space-y-4">
         <h1 className="text-2xl font-bold">New Feature</h1>
         {/* Feature content */}
       </div>
     );
   }
   ```

3. **Add navigation**:
   - Update the sidebar navigation menu to include the new route
   - Add appropriate icon and label
   - Implement required permissions if needed

4. **Add nested routes** (if necessary):
   - For complex features, add nested routes under the main feature
   ```
   app/(template)/new-feature/[id]/page.tsx            # Dynamic detail page
   app/(template)/new-feature/create/page.tsx          # Creation page
   app/(template)/new-feature/settings/page.tsx        # Settings page
   ```

### Adding New Components

To create new UI components:

1. **Determine component location**:
   - Feature-specific components go in feature directories
   - Reusable UI components go in the UI components directory
   - Domain-specific reusable components go in appropriate domain directories

2. **Create component file**:
   - Use TypeScript for type definitions
   - Follow naming conventions (PascalCase for components)
   ```tsx
   // components/FeatureName/NewComponent.tsx
   import { useState } from 'react';
   
   interface NewComponentProps {
     title: string;
     data: any[];
     onAction: (item: any) => void;
   }
   
   export function NewComponent({ title, data, onAction }: NewComponentProps) {
     // Component implementation
     return (
       <div className="rounded-lg border p-4">
         <h2 className="text-lg font-semibold">{title}</h2>
         {/* Component content */}
       </div>
     );
   }
   ```

3. **Use existing UI components**:
   - Leverage the UI component library for consistency
   - Compose existing components rather than creating from scratch
   ```tsx
   import { Button } from "@/components/ui/button";
   import { Input } from "@/components/ui/input";
   import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
   
   export function FeatureForm() {
     return (
       <Card>
         <CardHeader>
           <CardTitle>New Feature Form</CardTitle>
         </CardHeader>
         <CardContent>
           <form className="space-y-4">
             <Input label="Name" placeholder="Enter name" />
             <Button type="submit">Save</Button>
           </form>
         </CardContent>
       </Card>
     );
   }
   ```

### Adding New API Integrations

To implement new API integrations:

1. **Create custom hooks**:
   - For GET requests, extend or use `useAPI` or `useAPIFetch`
   - For POST requests, extend or use `useAPIPost`
   - For domain-specific data, create specialized hooks
   
   ```tsx
   // hooks/useNewFeatureData.tsx
   import { useAPI } from "@/hooks/useAPI";
   
   export function useNewFeatureData(params: any) {
     const { apiData, loading, errors, fetchData, totalRecords } = useAPI({
       url: '/api/new-feature',
       params
     });
     
     return { 
       newFeatureData: apiData?.data || [], 
       loading, 
       errors, 
       fetchData, 
       totalRecords 
     };
   }
   ```

2. **Implement React Query hooks** for cached data:
   ```tsx
   // hooks/useNewFeatureQuery.tsx
   import { useQuery } from "@tanstack/react-query";
   import axios from "axios";
   import { BASE_URL } from "@/config";
   
   const fetchNewFeatureData = async (id: string) => {
     const token = localStorage.getItem("access_token");
     const response = await axios.get(`${BASE_URL}/api/new-feature/${id}`, {
       headers: { Authorization: `Bearer ${token}` }
     });
     return response.data;
   };
   
   export function useNewFeatureQuery(id: string) {
     return useQuery({
       queryKey: ['newFeature', id],
       queryFn: () => fetchNewFeatureData(id),
       enabled: !!id,
       staleTime: 5 * 60 * 1000 // 5 minutes
     });
   }
   ```

### Styling Guidelines

When styling new components or modifying existing ones:

1. **Use existing UI elements**:
   - Prefer components from the UI library (`components/ui/*`)
   - Follow established patterns from similar features
   
2. **Follow the design system**:
   - Use the color palette defined in `tailwind.config.ts`
   - Apply consistent spacing (margin, padding) values
   - Use standard border radius values

3. **Use Tailwind CSS utilities**:
   - Prefer utility classes over custom CSS
   - Group related utilities for readability
   ```tsx
   // Good organization of Tailwind classes
   <div className="
     /* Layout */
     flex flex-col gap-4
     /* Spacing */
     p-4 my-2
     /* Appearance */
     bg-white rounded-lg shadow
     /* State */
     hover:bg-gray-50 focus-within:ring-2
   ">
     {/* Content */}
   </div>
   ```

4. **Implement responsive design**:
   - Use mobile-first approach
   - Add responsive breakpoints as needed
   ```tsx
   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
     {/* Responsive grid */}
   </div>
   ```

### Making Specific Types of Changes

#### Making UI-Related Changes

1. **Check existing implementations**:
   - Review how similar UI elements are implemented elsewhere
   - Look for the appropriate components in the UI library
   - Use dev tools to inspect existing styles

2. **Find similar patterns**:
   - Search for similar tables, forms, or layouts
   - Adapt their structure for your needs

3. **Implement changes with consistency**:
   - Match existing UI patterns and styles
   - Use the same component structure
   - Maintain responsive behavior

#### Making API-Related Changes

1. **Modify API hook parameters**:
   - Locate the appropriate hook at the top of the file
   - Update the URL or parameters as needed
   ```tsx
   // Before
   const { apiData, loading, errors, fetchData } = useAPI({
     url: '/api/clients',
     params: { page: 1, limit: 10 }
   });
   
   // After
   const { apiData, loading, errors, fetchData } = useAPI({
     url: '/api/clients',
     params: { page: 1, limit: 10, status: 'active', sortBy: 'name' }
   });
   ```

2. **Modify data loading behavior**:
   - Adjust the `useEffect` dependencies to control when data loads
   - Remove automatic data loading by modifying effect dependencies
   ```tsx
   // Automatic loading on parameter change
   useEffect(() => {
     fetchData();
   }, [fetchData, searchTerm, status]);
   
   // Manual loading only
   useEffect(() => {
     if (shouldLoad) {
       fetchData();
     }
   }, [fetchData, shouldLoad]);
   ```

3. **Modify pagination**:
   - Update pagination parameters in API calls
   - Adjust pagination UI components

### Avoiding Common Pitfalls

1. **Build-time linting issues**:
   - Run `npm run lint` before committing changes
   - Fix all eslint errors and warnings
   - Use the recommended VS Code extensions for real-time linting

2. **Avoid modifying core hooks**:
   - The project relies heavily on its custom hooks
   - Changing core hooks may affect multiple features
   - Extend existing hooks instead of modifying them

3. **Handle useEffect dependencies carefully**:
   - The project has many interdependent `useEffect` hooks
   - Always include all dependencies in the dependency array
   - Use memoization to stabilize dependencies if needed

4. **Type safety violations**:
   - Ensure proper TypeScript typing for all new code
   - Use explicit types rather than `any` where possible
   - Address type errors immediately rather than using type assertions