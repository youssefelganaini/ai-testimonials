import React from "react";
import { Sparkles } from "lucide-react";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Sparkles className="h-8 w-8 text-indigo-600" />
            <span className="ml-2 text-xl font-semibold text-gray-900">
              Proof Genie
            </span>
          </div>

          <div className="hidden sm:flex sm:space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium"
            >
              How It Works
            </button>
            {/* <button onClick={() => scrollToSection('testimonials')} className="text-gray-500 hover:text-gray-900 px-3 py-2 text-sm font-medium">
              Testimonials
            </button> */}
          </div>

          <div className="flex items-center">
            <button
              onClick={() => scrollToSection("waitlist")}
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Join Waitlist
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
