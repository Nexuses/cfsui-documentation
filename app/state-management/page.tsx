import { Metadata } from "next"

export const metadata: Metadata = {
  title: "State Management",
  description: "Documentation for the state management approach in the CFS UI application",
}

export default function StateManagementPage() {
  return (
    <div className="container mx-auto py-10 max-w-4xl">
      <h1 className="text-3xl font-bold mb-6">State Management</h1>
      
      <p className="mb-6">
        The application employs a strategic approach to state management, using different solutions based on the scope, complexity, and access patterns of the state being managed.
      </p>
      
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">React Context API</h2>
        <p className="mb-4">The Context API is used for application-wide state that needs to be accessed by many components across different parts of the application hierarchy.</p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">UserContext (<code>contexts/UserContext.tsx</code>)</h3>
          <p className="mb-3">Manages user authentication and profile information:</p>
          
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`export interface User {
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
}`}
          </pre>
          
          <div className="mt-3">
            <p className="font-medium">Key features:</p>
            <ul className="list-disc pl-6">
              <li>Authentication state persistence</li>
              <li>Login and logout functionality</li>
              <li>User profile data access</li>
              <li>Session management</li>
              <li>Role-based access control information</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium mb-2">FileStructureContext (<code>contexts/fileStructureContext.tsx</code>)</h3>
          <p className="mb-3">Manages file structure hierarchy for the file management system:</p>
          
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`interface FileStructureContextType {
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
}`}
          </pre>
          
          <div className="mt-3">
            <p className="font-medium">Key features:</p>
            <ul className="list-disc pl-6">
              <li>File and folder hierarchy</li>
              <li>Selection state management</li>
              <li>Refresh capability</li>
              <li>Loading and error state handling</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Zustand Stores</h2>
        <p className="mb-4">
          Zustand is used for more focused, feature-specific state management with a simpler API than Context.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">userStore (<code>store/userStore.ts</code>)</h3>
          <p className="mb-3">Manages user's object returned from the API at the login time:</p>
          
          <div className="mt-3">
            <p className="font-medium">Key features:</p>
            <ul className="list-disc pl-6">
              <li>UI preferences management</li>
              <li>Persistent settings using localStorage</li>
              <li>Simple API for updates</li>
              <li>Selective component subscription</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg mb-6">
          <h3 className="text-xl font-medium mb-2">menuStore (<code>store/menuStore.ts</code>)</h3>
          <p className="mb-3">Manages navigation menu state:</p>
          
          <div className="mt-3">
            <p className="font-medium">Key features:</p>
            <ul className="list-disc pl-6">
              <li>Stores the Menu API results</li>
              <li>Makes it available to use to build the sidebar</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium mb-2">fileStore (<code>store/fileStore.ts</code>)</h3>
          <p className="mb-3">Manages file structure state:</p>
          
          <div className="mt-3">
            <p className="font-medium">Key features:</p>
            <ul className="list-disc pl-6">
              <li>Multi-file structure management</li>
              <li>Makes it available for the filebot to use</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Component-Level State</h2>
        <p className="mb-4">
          For UI state that doesn't need global persistence, React's built-in useState and useReducer hooks are used.
        </p>
        
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="text-xl font-medium mb-2">useState for Simple UI State</h3>
          
          <pre className="bg-gray-900 text-gray-100 p-3 rounded text-sm overflow-x-auto">
{`function ClientTable() {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  
  // Component implementation
}`}
          </pre>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">State Management Best Practices</h2>
        <p className="mb-4">The application follows these state management best practices:</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Appropriate Tool Selection</h3>
            <ul className="list-disc pl-6">
              <li>Context API for truly global state</li>
              <li>Zustand for feature-specific state</li>
              <li>Local state for UI-specific concerns</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">State Normalization</h3>
            <ul className="list-disc pl-6">
              <li>Avoiding deeply nested state objects</li>
              <li>Using normalized data structures for related data</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">State Access Patterns</h3>
            <ul className="list-disc pl-6">
              <li>Custom hooks for accessing context</li>
              <li>Selective subscriptions for Zustand stores</li>
              <li>Component composition for prop passing</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-xl font-medium mb-2">Performance Considerations</h3>
            <ul className="list-disc pl-6">
              <li>Memoization of expensive computations</li>
              <li>Selective re-rendering through careful state splitting</li>
              <li>Optimized context providers with strategic placement</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  )
} 