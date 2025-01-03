import React from 'react';
import { Menu, Home, FileText } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Menu className="h-6 w-6 text-gray-500" />
            <span className="ml-2 text-xl font-semibold text-gray-900">TestiTransform AI</span>
          </div>
          <nav className="flex space-x-4">
            <a href="/" className="flex items-center text-gray-600 hover:text-gray-900">
              <Home className="h-5 w-5 mr-1" />
              <span>Home</span>
            </a>
            <a href="/app" className="flex items-center text-gray-600 hover:text-gray-900">
              <FileText className="h-5 w-5 mr-1" />
              <span>App</span>
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}