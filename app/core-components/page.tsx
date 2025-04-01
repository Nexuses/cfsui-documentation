import { Metadata } from "next"
import { CodeBlock, ContentBox } from "@/components/ui/code-block"

export const metadata: Metadata = {
  title: "Core Components",
  description: "Documentation for the core components of the CFS UI application",
}

export default function CoreComponentsPage() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Core Components</h1>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Layout Components</h2>
        <p className="mb-4">The application uses a nested layout structure to maintain consistent UI elements across routes while allowing for route-specific customization.</p>
        
        <ContentBox className="mb-6">
          <h3 className="text-xl font-medium mb-2">Root Layout (<code>app/layout.tsx</code>)</h3>
          <p className="mb-3">The root layout serves as the application shell and includes:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>HTML Structure: Basic HTML structure with language attributes</li>
            <li>Global Font Configuration: Custom font setup with <code>next/font</code></li>
            <li>Global Providers: Context providers with application-wide scope</li>
            <li>Toast Container: Global toast notification system</li>
            <li>Metadata Configuration: SEO-related metadata setup</li>
          </ul>
          <CodeBlock>
{`// Simplified example of root layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={\`\${fontClassName} antialiased\`}>
        <FileStructureProvider>
          <UserProvider>
            <ClientSideToastContainer />
            {children}
          </UserProvider>
        </FileStructureProvider>
      </body>
    </html>
  );
}`}
          </CodeBlock>
        </ContentBox>

        <ContentBox>
          <h3 className="text-xl font-medium mb-2">Template Layout (<code>app/(template)/layout.tsx</code>)</h3>
          <p className="mb-3">The template layout provides the main application structure and includes:</p>
          <ul className="list-disc pl-6 mb-3">
            <li>Navigation Components: Sidebar and Header</li>
            <li>Main Content Area: Flexible container for page content</li>
            <li>Error Boundaries: For graceful error handling</li>
            <li>Authentication Check: Verification of user session</li>
          </ul>
          <CodeBlock>
{`// Simplified example of template layout
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
}`}
          </CodeBlock>
        </ContentBox>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Feature Components</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Dashboard Components</h3>
          <p className="mb-3">Dashboard components provide data visualization and KPI tracking:</p>
          <ul className="list-disc pl-6">
            <li>DashboardStats: Summary statistics for key performance indicators</li>
            <li>BusinessSummary: Overview of business performance metrics</li>
            <li>CommissionCharts: Visualizations of commission data</li>
            <li>PolicyTracker: Tracking of policy status and maturity</li>
            <li>UpcomingBirthdays: Client birthday notification component</li>
            <li>UpcomingAnniversary: Client anniversary notification component</li>
            <li>CrossSellUpsell: Opportunity identification component</li>
            <li>InviteMembers: Team collaboration component</li>
          </ul>
          
          <CodeBlock className="my-3">
{`// Simplified example of a dashboard component
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
}`}
          </CodeBlock>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Client Management Components</h3>
          <p className="mb-3">Components for client information and management:</p>
          <ul className="list-disc pl-6">
            <li>ClientList: Tabular display of client information</li>
            <li>ClientDetail: Comprehensive client profile view</li>
            <li>ClientModal: Modal dialog for client creation/editing</li>
            <li>ClientFilter: Filtering interface for client lists</li>
            <li>ClientSearch: Search functionality for finding clients</li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Document Management Components</h3>
          <p className="mb-3">Components for handling invoices, statements, and other documents:</p>
          <ul className="list-disc pl-6">
            <li>InvoiceList: Tabular display of invoices</li>
            <li>InvoiceDetail: Detailed view of individual invoices</li>
            <li>StatementList: List of statements with filtering</li>
            <li>StatementViewer: Document viewer for statements</li>
            <li>DocumentDownload: Interface for document export/download</li>
          </ul>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-2">Interactive Assistant Components</h3>
          <p className="mb-3">AI-powered assistance components:</p>
          <ul className="list-disc pl-6">
            <li>Chatbot: Conversational interface for information retrieval</li>
            <li>Filebot: File management assistant</li>
          </ul>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">UI Component Library</h2>
        <p className="mb-4">The CFS UI application implements a comprehensive UI component library that serves as the foundation for all user interface elements. The library combines Shadcn UI (built on Radix UI primitives) with custom components tailored to the application's specific needs.</p>
        
        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Component Architecture</h3>
          <CodeBlock className="mb-3">
{`┌─────────────────────────────────────────────────────────┐
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
└─────────────────────────────────────────────────────────┘`}
          </CodeBlock>
        </div>

        <div className="mb-6">
          <h3 className="text-xl font-medium mb-2">Core Primitive Components</h3>
          
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-1">Button Component (<code>button.tsx</code>)</h4>
            <p className="mb-2">The Button component is a versatile, accessible button primitive with multiple variants:</p>
            <CodeBlock>
{`// Example Button component usage
<Button variant="primary" size="md" disabled={isLoading}>
  {isLoading ? <Spinner className="mr-2" /> : null}
  Save Changes
</Button>`}
            </CodeBlock>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-1">Input Component (<code>input.tsx</code>)</h4>
            <p className="mb-2">Text input component with validation states:</p>
            <CodeBlock>
{`// Example Input component usage
<Input
  label="Email Address"
  type="email"
  value={email}
  onChange={handleEmailChange}
  error={errors.email}
  placeholder="you@example.com"
  required
/>`}
            </CodeBlock>
          </div>
          
          <div className="mb-4">
            <h4 className="text-lg font-medium mb-1">Select Component (<code>select.tsx</code>)</h4>
            <p className="mb-2">Dropdown selection component with option management:</p>
            <CodeBlock>
{`// Example Select component usage
<Select
  label="Status"
  value={status}
  onChange={handleStatusChange}
  options={[
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending Approval' },
  ]}
/>`}
            </CodeBlock>
          </div>
          
          <div>
            <h4 className="text-lg font-medium mb-1">Dialog Component (<code>dialog.tsx</code>)</h4>
            <p className="mb-2">Modal dialog for focused interactions:</p>
            <CodeBlock>
{`// Example Dialog component usage
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
</Dialog>`}
            </CodeBlock>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Accessibility Features</h2>
        <p className="mb-3">The component library prioritizes accessibility with these features:</p>
        <ul className="list-disc pl-6">
          <li>Keyboard Navigation: All interactive components are fully keyboard accessible</li>
          <li>ARIA Attributes: Proper ARIA roles, states, and properties</li>
          <li>Focus Management: Visible focus indicators and logical focus order</li>
          <li>Screen Reader Support: Meaningful text alternatives and announcements</li>
          <li>Reduced Motion: Respects user preferences for reduced motion</li>
          <li>Color Contrast: Meets WCAG color contrast guidelines</li>
        </ul>
      </section>
    </div>
  )
}
