import React from "react";
import { MessageSquare, FileText, Presentation } from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Social Media Content",
    description:
      "Transform testimonials into engaging social posts that drive engagement.",
  },
  {
    icon: FileText,
    title: "Case Studies",
    description:
      "Generate compelling case studies that showcase your success stories.",
  },
  {
    icon: Presentation,
    title: "Sales Decks",
    description:
      "Create persuasive sales presentation slides backed by real experiences.",
  },
];

export function Features() {
  return (
    <div id="features" className="pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            One Input, Multiple Outputs
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            Save time and maintain consistency across all your marketing
            channels
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div key={index} className="text-center">
                <div className="flex justify-center">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-indigo-600 text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <h3 className="mt-4 text-lg font-medium text-gray-900">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-gray-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
