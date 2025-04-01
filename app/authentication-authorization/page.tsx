import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Authentication & Authorization",
  description: "Documentation for the authentication and authorization system in the CFS UI application",
}

export default function AuthenticationPage() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Authentication & Authorization</h1>
      
      <p className="mb-6">
        The CFS UI application implements a comprehensive authentication and authorization system to ensure secure access to sensitive financial data and functionality.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Authentication Architecture</h2>
        <p className="mb-4">
          The application uses a token-based authentication system with the following components:
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`┌───────────────┐     ┌────────────────┐     ┌───────────────┐
│  Login Form   │     │  Auth API       │     │ User Store    │
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
       ▼                   ▼                   ▼`}
          </pre>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Key Components</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Login Form</h3>
            <ul className="list-disc pl-6">
              <li>User credential collection</li>
              <li>Form validation</li>
              <li>Error message display</li>
              <li>Remember me functionality</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Auth API</h3>
            <ul className="list-disc pl-6">
              <li>Credential validation</li>
              <li>Token generation</li>
              <li>Token refresh handling</li>
              <li>Session management</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">User Store</h3>
            <ul className="list-disc pl-6">
              <li>User data storage</li>
              <li>Token management</li>
              <li>Session persistence</li>
              <li>Authentication state</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Protected Routes</h3>
            <ul className="list-disc pl-6">
              <li>Route protection</li>
              <li>Authentication checks</li>
              <li>Redirect handling</li>
              <li>Permission validation</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Authentication Flow</h2>
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <ol className="list-decimal pl-6 space-y-2">
            <li>User submits credentials through the login form</li>
            <li>Credentials are validated by the Auth API</li>
            <li>Upon successful validation, tokens are generated and returned</li>
            <li>Tokens and user data are stored in the User Store</li>
            <li>User is redirected to the dashboard</li>
            <li>Subsequent API requests include the authentication token</li>
            <li>Token refresh is handled automatically when needed</li>
          </ol>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Authorization Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Role-Based Access</h3>
            <ul className="list-disc pl-6">
              <li>User role management</li>
              <li>Permission-based access</li>
              <li>Feature visibility control</li>
              <li>Action restrictions</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Security Features</h3>
            <ul className="list-disc pl-6">
              <li>Token encryption</li>
              <li>Secure storage</li>
              <li>Session timeouts</li>
              <li>Activity monitoring</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Security</h3>
            <ul className="list-disc pl-6">
              <li>Secure token storage</li>
              <li>HTTPS-only communication</li>
              <li>XSS protection</li>
              <li>CSRF prevention</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">User Experience</h3>
            <ul className="list-disc pl-6">
              <li>Seamless authentication</li>
              <li>Clear error messages</li>
              <li>Persistent sessions</li>
              <li>Smooth transitions</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 