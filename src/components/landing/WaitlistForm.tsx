import React, { useState } from "react";
import { Send } from "lucide-react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Integrate with actual waitlist system
    setSubmitted(true);
  };

  return (
    <div className="max-w-md mx-auto">
      {!submitted ? (
        <form
          onSubmit={handleSubmit}
          className="mt-3 sm:flex"
          action="https://formspree.io/f/xkggpjvb"
          method="POST"
        >
          <input
            type="email"
            name="email"
            required
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            type="submit"
            className="mt-3 sm:mt-0 sm:ml-3 inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          >
            Join Waitlist
            {/* <Send className="ml-2 h-4 w-4" /> */}
          </button>
        </form>
      ) : (
        <div className="text-center py-4 text-green-600">
          Thanks for joining! We'll notify you when we launch.
        </div>
      )}
    </div>
  );
}
