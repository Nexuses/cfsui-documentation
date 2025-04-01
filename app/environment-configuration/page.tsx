import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Environment Configuration",
  description: "Documentation for environment configuration in the CFS UI application",
}

export default function EnvironmentConfigPage() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Environment Configuration</h1>
      
      <p className="mb-6">
        The CFS UI application provides flexible environment configuration options to support different deployment scenarios and development stages.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">API Configuration</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <p className="mb-3">The application allows configuring the API base URL through <code>config.ts</code>:</p>
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// export const BASE_URL = "https://faitapiuat.cibaccess.com"          // for development
export const BASE_URL = "https://faitapiuat2.cibaccess.com"            // for uat (new)
// export const BASE_URL = "https://faitapidemouat.cibaccess.com"      // for uat (old)`}
          </pre>
          <p className="mt-3">
            Simply uncomment the desired base URL and comment the others to switch environments.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Available Environments</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Development</h3>
            <ul className="list-disc pl-6">
              <li><code>faitapiuat.cibaccess.com</code></li>
              <li>Used for local development</li>
              <li>Development-specific features enabled</li>
              <li>Debug logging enabled</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">UAT (New)</h3>
            <ul className="list-disc pl-6">
              <li><code>faitapiuat2.cibaccess.com</code></li>
              <li>Current UAT environment</li>
              <li>Testing and validation</li>
              <li>Pre-production configuration</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">UAT (Old)</h3>
            <ul className="list-disc pl-6">
              <li><code>faitapidemouat.cibaccess.com</code></li>
              <li>Legacy UAT environment</li>
              <li>Historical reference</li>
              <li>Maintained for compatibility</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Configuration Best Practices</h3>
            <ul className="list-disc pl-6">
              <li>Use comments to document changes</li>
              <li>Verify environment before deployment</li>
              <li>Update team when switching environments</li>
              <li>Test connectivity after changes</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Environment Management</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Switching Environments</h3>
            <ol className="list-decimal pl-6">
              <li>Open <code>config.ts</code> in your editor</li>
              <li>Comment out the current BASE_URL</li>
              <li>Uncomment the desired environment URL</li>
              <li>Save the file and rebuild the application</li>
              <li>Verify the connection to the new environment</li>
            </ol>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Environment-Specific Considerations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Development Environment</h3>
            <ul className="list-disc pl-6">
              <li>Enhanced logging</li>
              <li>Development tools enabled</li>
              <li>Debug features available</li>
              <li>Performance monitoring</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">UAT Environment</h3>
            <ul className="list-disc pl-6">
              <li>Production-like settings</li>
              <li>Security measures enabled</li>
              <li>Limited debug information</li>
              <li>Performance optimization</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 