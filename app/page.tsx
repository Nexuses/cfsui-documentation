import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "CFS UI - Project Documentation",
  description: "Documentation for the Continental Financial Services User Interface",
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <h1 className="mb-6 text-4xl font-bold">CFS UI - Project Documentation</h1>
      
      <div id="introduction">
        <h2 className="mb-4 mt-8 text-3xl font-semibold">Introduction</h2>
        <p className="mb-4">
          The CFS UI (Continental Financial Services User Interface) is a comprehensive Next.js-based web application designed to provide enterprise-grade financial services functionality with a modern, responsive user interface. The application serves as a centralized dashboard for financial data, invoices, statements, business intelligence reporting, and client management.
        </p>

        <h3 className="mb-3 mt-6 text-2xl font-semibold">Purpose and Goals</h3>
        <ul className="mb-4 list-disc pl-6 space-y-2">
          <li><strong>Centralized Platform</strong>: Provide a unified interface for financial advisors and managers to access client information, financial documents, and performance metrics</li>
          <li><strong>Data Visualization</strong>: Transform complex financial data into intuitive visual representations for better decision-making</li>
          <li><strong>Process Automation</strong>: Streamline common financial workflows through integrated tools and services</li>
          <li><strong>Client Management</strong>: Offer comprehensive client relationship management features</li>
          <li><strong>Secure Access</strong>: Implement robust authentication and authorization mechanisms to protect sensitive financial data</li>
        </ul>

        <h3 className="mb-3 mt-6 text-2xl font-semibold">Key Features</h3>
        <ul className="mb-4 list-disc pl-6 space-y-2">
          <li><strong>Dashboard</strong>: Interactive overview of KPIs, business metrics, and performance indicators</li>
          <li><strong>Client Management</strong>: Comprehensive client information management and reporting</li>
          <li><strong>Document Management</strong>: Invoice and statement generation, viewing, and distribution</li>
          <li><strong>Business Intelligence</strong>: Advanced data analysis and visualization tools</li>
          <li><strong>Task Management</strong>: Todo functionality for tracking action items</li>
          <li><strong>Chatbot Integration</strong>: AI-powered assistance for information retrieval</li>
          <li><strong>File Management</strong>: Structured file system for document organization</li>
          <li><strong>Commission Structure Management</strong>: Tools for managing and analyzing commission structures</li>
        </ul>

        <p className="mb-4">
          The application is designed for financial advisors, managers, and administrative staff who need access to client financial information, performance data, and business metrics in a secure, efficient manner.
        </p>
      </div>
    </main>
  )
}

