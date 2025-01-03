import React from 'react';
import { WaitlistForm } from './WaitlistForm';

export function CTA() {
  return (
    <div id="waitlist" className="bg-indigo-700">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Be Among the First to Try
          </h2>
          <p className="mt-4 text-lg leading-6 text-indigo-100">
            Join our waitlist to get early access and special launch pricing.
          </p>
          <div className="mt-8">
            <WaitlistForm />
          </div>
        </div>
      </div>
    </div>
  );
}