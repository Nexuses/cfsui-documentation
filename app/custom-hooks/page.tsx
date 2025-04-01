import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Custom Hooks",
  description: "Documentation for the custom hooks used in the CFS UI application",
}

export default function CustomHooksPage() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Custom Hooks</h1>
      
      <p className="mb-6">
        The application implements a comprehensive set of custom hooks for data fetching, API communication, and reusable functionality. These hooks encapsulate common patterns and provide a consistent interface for components to interact with external services.
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">API Data Fetching Hooks</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3">Core API Hooks</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium mb-2"><code>useAPI</code>: Primary hook for GET requests</h4>
            <p className="mb-3">Built-in authentication, error handling, and loading states</p>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`const { apiData, loading, errors, fetchData, totalRecords } = useAPI({
  url: '/api/endpoint',
  params: { key: 'value' }
});`}
            </pre>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium mb-2"><code>useAPIFetch</code>: Flexible API fetching hook</h4>
            <p className="mb-3">Accepts URL and parameters at call time rather than initialization</p>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`const { loadingFetch, errorsFetch, fetchDataFetch } = useAPIFetch();
// Later in code:
const response = await fetchDataFetch('/api/endpoint', { param: 'value' });`}
            </pre>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium mb-2"><code>useAPIPost</code>: Hook for POST requests</h4>
            <p className="mb-3">State management for loading and errors</p>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`const { postLoading, postErrors, postFetchData } = useAPIPost({
  url: '/api/endpoint',
  body: { key: 'value' }
});`}
            </pre>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Additional Core API Hooks</h4>
            <ul className="list-disc pl-6">
              <li><code>useAPIUpdate</code>: Hook for PUT/UPDATE requests with response handling</li>
              <li><code>useAPIDelete</code>: Hook for DELETE requests with success/error state management</li>
              <li><code>useAPIPost2</code>: Alternative POST hook with different response handling</li>
              <li><code>useAPIPostFunc</code>: Function-based POST hook that returns a posting function for flexible usage</li>
            </ul>
          </div>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-3">Feature-Specific API Hooks</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <h4 className="text-lg font-medium mb-2"><code>useDashboardData</code>: Dashboard data fetching</h4>
            <p className="mb-3">Uses React Query for caching and automatic refetching</p>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`const { data, isLoading, error } = useDashboardData();`}
            </pre>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Other Feature-Specific Hooks</h4>
            <ul className="list-disc pl-6">
              <li><code>useDashboardDataExtended</code>: Enhanced dashboard data fetching with additional parameters</li>
              <li><code>useFileStructure</code>: Fetches file structure hierarchy with React Query integration</li>
              <li><code>useGetFilters</code>: Retrieves filter options for various components</li>
              <li><code>useDownloadsAPI</code>: Specialized hook for handling file downloads</li>
            </ul>
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-medium mb-3">Chat/Bot API Hooks</h3>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h4 className="text-lg font-medium mb-2">Specialized Chat Functionality</h4>
            <ul className="list-disc pl-6">
              <li><code>usePolicyChatAPI</code>: Handles policy-related chat functionality</li>
              <li><code>useInvoiceChatAPI</code>: Manages invoice-related chat queries</li>
              <li><code>useProductChatAPI</code>: Facilitates product information chat functionality</li>
              <li><code>useDownloadZipChatAPI</code>: Handles ZIP file downloads via chatbot</li>
              <li><code>useDownloadInvoiceChatAPI</code>: Manages invoice downloads via chatbot</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Utility Hooks</h2>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium mb-2"><code>useDebounce</code>: Debouncing for input values</h3>
          <p className="mb-3">Implements debouncing for search inputs and other rapidly changing values</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`const debouncedValue = useDebounce(searchTerm, 500); // 500ms delay`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Features of Custom Hooks</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Consistent Error Handling</h3>
            <p>All API hooks implement standardized error handling with 401 authentication redirection</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Loading State Management</h3>
            <p>Loading states are tracked automatically for UI feedback</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Automatic Token Management</h3>
            <p>Authentication tokens are included in requests</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Response Normalization</h3>
            <p>API responses are processed into consistent formats</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Caching Integration</h3>
            <p>Many hooks leverage React Query for efficient data caching</p>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Type Safety</h3>
            <p>TypeScript interfaces for request and response data</p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Hook Usage Patterns</h2>
        
        <ul className="list-disc pl-6 space-y-2">
          <li>Component-level API calls use appropriate hooks based on operation type</li>
          <li>Dashboard and data visualization components use Query-based hooks for automatic refreshing</li>
          <li>Form submissions use POST hooks with appropriate error handling</li>
          <li>File operations use specialized file handling hooks</li>
        </ul>
      </section>
    </div>
  )
} 