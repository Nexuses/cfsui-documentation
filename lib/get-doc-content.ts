import fs from 'fs';
import path from 'path';
import { NavItem } from '@/hooks/use-search';

// Function to read document content for search
export async function getDocumentContent(): Promise<NavItem[]> {
  try {
    // Read the DOCS.md file which contains all documentation
    const docsPath = path.join(process.cwd(), 'DOCS.md');
    const docsContent = fs.readFileSync(docsPath, 'utf8');
    
    // Base navigation items
    const navItems = [
      { title: "Introduction", url: "/" },
      { title: "Project Architecture", url: "/project-architecture" },
      { title: "Technology Stack", url: "/technology-stack" },
      { title: "Project Structure", url: "/project-structure" },
      { title: "Core Components", url: "/core-components" },
      { title: "State Management", url: "/state-management" },
      { title: "Custom Hooks", url: "/custom-hooks" },
      { title: "API Integration", url: "/api-integration" },
      { title: "Authentication & Authorization", url: "/authentication-authorization" },
      { title: "Routing Structure", url: "/routing-structure" },
      { title: "Environment Configuration", url: "/environment-configuration" },
      { title: "Extending the Application", url: "/extending-the-application" },
    ];
    
    // Extract sections from the markdown file
    const sections = docsContent.split(/^# /m).filter(Boolean);
    
    // Match sections to nav items
    return navItems.map(item => {
      // Find section that matches this nav item
      const sectionTitle = item.title.toLowerCase();
      const section = sections.find(s => 
        s.toLowerCase().startsWith(sectionTitle) || 
        s.toLowerCase().includes(`\n## ${sectionTitle}`)
      );
      
      return {
        ...item,
        content: section || ''
      };
    });
  } catch (error) {
    console.error('Error reading documentation:', error);
    return [];
  }
} 