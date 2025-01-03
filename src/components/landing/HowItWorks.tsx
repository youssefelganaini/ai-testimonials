import React from "react";
import { Upload, Wand2, Share2 } from "lucide-react";

const steps = [
  {
    icon: Upload,
    title: "Upload Your Testimonials",
    description: "Simply paste your customer testimonials into our platform.",
  },
  {
    icon: Wand2,
    title: "AI Transformation",
    description:
      "Our AI generates multiple versions optimized for different channels.",
  },
  {
    icon: Share2,
    title: "Share Everywhere",
    description:
      "Download or copy your transformed content, ready to be shared.",
  },
];

export function HowItWorks() {
  return (
    <div id="how-it-works" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            How It Works
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Transform your testimonials in three simple steps
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
