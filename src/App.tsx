import React, { useState } from 'react';
import { LandingPage } from './components/LandingPage';
import { TestimonialForm } from './components/TestimonialForm';
import { TransformedOutput } from './components/TransformedContent';
import type { Testimonial, TransformedContent } from './types';

function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);
  const [transformedContent, setTransformedContent] = useState<TransformedContent | null>(null);

  // Mock transformation function (replace with actual AI implementation)
  const transformTestimonial = (testimonial: Testimonial): TransformedContent => {
    return {
      socialPost: `"${testimonial.rawTestimonial.slice(0, 100)}..." - ${testimonial.customerName}, ${testimonial.position} at ${testimonial.companyName}`,
      caseStudy: `<h2>Customer Success Story: ${testimonial.companyName}</h2>
                  <p><strong>Challenge:</strong> Lorem ipsum dolor sit amet...</p>
                  <p><strong>Solution:</strong> Consectetur adipiscing elit...</p>
                  <blockquote>${testimonial.rawTestimonial}</blockquote>
                  <p><em>- ${testimonial.customerName}, ${testimonial.position}</em></p>`,
      salesDeck: `<div class="slide">
                    <h3>Customer Success: ${testimonial.companyName}</h3>
                    <blockquote>${testimonial.rawTestimonial.slice(0, 150)}...</blockquote>
                    <p class="attribution">${testimonial.customerName} - ${testimonial.position}</p>
                  </div>`,
    };
  };

  const handleTestimonialSubmit = (testimonial: Testimonial) => {
    const transformed = transformTestimonial(testimonial);
    setTransformedContent(transformed);
  };

  // Simple client-side routing
  React.useEffect(() => {
    const handleNavigation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('popstate', handleNavigation);
    return () => window.removeEventListener('popstate', handleNavigation);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {currentPath === '/' ? (
        <LandingPage />
      ) : (
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Input Testimonial</h2>
                <TestimonialForm onSubmit={handleTestimonialSubmit} />
              </div>
              {transformedContent && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Transformed Content</h2>
                  <TransformedOutput content={transformedContent} />
                </div>
              )}
            </div>
          </div>
        </main>
      )}
    </div>
  );
}

export default App;