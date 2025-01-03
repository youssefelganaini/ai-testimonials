import React from 'react';
import { Copy } from 'lucide-react';
import type { TransformedContent } from '../types';

export function TransformedOutput({ content }: { content: TransformedContent }) {
  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Social Media Post</h3>
          <button
            onClick={() => copyToClipboard(content.socialPost)}
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </button>
        </div>
        <p className="text-gray-600">{content.socialPost}</p>
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Case Study</h3>
          <button
            onClick={() => copyToClipboard(content.caseStudy)}
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </button>
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.caseStudy }} />
      </div>

      <div className="bg-white shadow rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Sales Deck Slide</h3>
          <button
            onClick={() => copyToClipboard(content.salesDeck)}
            className="inline-flex items-center text-sm text-gray-500 hover:text-gray-700"
          >
            <Copy className="h-4 w-4 mr-1" />
            Copy
          </button>
        </div>
        <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: content.salesDeck }} />
      </div>
    </div>
  );
}