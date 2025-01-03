import React from "react";
import { useForm, ValidationError } from "@formspree/react";

export function WaitlistForm() {
  const [state, handleSubmit] = useForm("xkggpjvb");

  if (state.succeeded) {
    return (
      <div className="text-center py-4 text-green-600">
        Thanks for joining! We'll notify you when we launch.
      </div>
    );
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="mt-3 sm:flex sm:items-center">
        <input
          id="email"
          type="email"
          name="email"
          required
          className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm px-4 py-2"
          placeholder="Enter your email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <button
          type="submit"
          className="ml-3 inline-flex items-center justify-center px-6 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
          disabled={state.submitting}
        >
          Join Waitlist
        </button>
      </form>
    </div>
  );
}
