import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Extending the Application",
  description: "Guidelines for extending and modifying the CFS UI application",
}

export default function ExtendingPage() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">Extending the Application</h1>
      
      <p className="mb-6">
        This section provides comprehensive guidelines for extending and modifying the CFS UI application, ensuring that new features and changes maintain consistency with the existing codebase.
      </p>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Adding New Routes</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">1. Create route directory</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`mkdir -p app/(template)/new-page`}
            </pre>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">2. Create page component</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// app/(template)/new-feature/page.tsx
export default function NewFeaturePage() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-bold">New Feature</h1>
      {/* Feature content */}
    </div>
  );
}`}
            </pre>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">3. Add nested routes (if necessary)</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`app/(template)/new-feature/[id]/page.tsx            # Dynamic detail page
app/(template)/new-feature/create/page.tsx          # Creation page
app/(template)/new-feature/settings/page.tsx        # Settings page`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Adding New Components</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Component Structure</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// components/FeatureName/NewComponent.tsx
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
}`}
            </pre>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Using UI Components</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`import { Button } from "@/components/ui/button";
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
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Adding New API Integrations</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Custom Hooks</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// hooks/useNewFeatureData.tsx
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
}`}
            </pre>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">React Query Integration</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`// hooks/useNewFeatureQuery.tsx
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { BASE_URL } from "@/config";

const fetchNewFeatureData = async (id: string) => {
  const token = localStorage.getItem("access_token");
  const response = await axios.get(\`\${BASE_URL}/api/new-feature/\${id}\`, {
    headers: { Authorization: \`Bearer \${token}\` }
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
}`}
            </pre>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Styling Guidelines</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Tailwind Classes Organization</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<div className="
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
</div>`}
            </pre>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Responsive Design</h3>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
  {/* Responsive grid */}
</div>`}
            </pre>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Common Pitfalls to Avoid</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Build & Development</h3>
            <ul className="list-disc pl-6">
              <li>Run <code>npm run lint</code> before committing</li>
              <li>Fix all eslint errors and warnings</li>
              <li>Use recommended VS Code extensions</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Hook Usage</h3>
            <ul className="list-disc pl-6">
              <li>Avoid modifying core hooks</li>
              <li>Handle useEffect dependencies carefully</li>
              <li>Maintain type safety</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 