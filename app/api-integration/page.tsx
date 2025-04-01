import { Metadata } from "next"

export const metadata: Metadata = {
  title: "API Integration",
  description: "Documentation for the API integration approach in the CFS UI application",
}

export default function APIIntegrationPage() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">API Integration</h1>
      
      <p className="mb-6">
        The CFS UI application implements a robust API integration layer that provides consistent, type-safe communication with backend services. This integration is primarily managed through custom hooks that abstract the complexities of API calls and provide a consistent interface for components.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">API Architecture Overview</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`┌───────────────────┐
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
└───────────────────┘`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Core API Configuration</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="mb-3">The base configuration for API communication is centralized in the <code>config.ts</code> file:</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// export const BASE_URL = "https://faitapiuat.cibaccess.com"        // for development
export const BASE_URL = "https://faitapiuat2.cibaccess.com"       //for uat (new)
// export const BASE_URL = "https://faitapidemouat.cibaccess.com"    //for uat (old)`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">API Response Structure</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="mb-3">The application expects a consistent API response structure which is typed using TypeScript interfaces:</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`export interface APIResponse {
  status: string;
  data?: any;
  errormessage?: string;
  totalrecords?: number;
  advisor?: string;
  grandtotal?: number;
}`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Authentication for API Calls</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="mb-3">All API calls automatically include authentication tokens retrieved from localStorage:</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`const headers = {
  Authorization: \`Bearer \${localStorage.getItem("access_token")}\`,
  "Content-Type": "application/json",
};`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Error Handling Strategy</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="mb-3">The API integration implements a consistent error handling strategy:</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`try {
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
}`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">API Integration Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Configuration</h3>
            <ul className="list-disc pl-6">
              <li>Centralized configuration</li>
              <li>Environment-specific settings</li>
              <li>Consistent base URLs</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Error Handling</h3>
            <ul className="list-disc pl-6">
              <li>Consistent error patterns</li>
              <li>Automatic authentication handling</li>
              <li>User-friendly error messages</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Authentication</h3>
            <ul className="list-disc pl-6">
              <li>Automatic token inclusion</li>
              <li>Token refresh handling</li>
              <li>Secure token storage</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Performance</h3>
            <ul className="list-disc pl-6">
              <li>Request deduplication</li>
              <li>Caching strategies</li>
              <li>Optimistic updates</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
}
