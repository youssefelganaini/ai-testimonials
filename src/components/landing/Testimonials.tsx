import React from "react";
import { Star } from "lucide-react";

const testimonials = [
  {
    content:
      "This tool has revolutionized how we handle customer testimonials. What used to take hours now takes minutes.",
    author: "Sarah Chen",
    role: "Marketing Director",
    company: "TechFlow Inc.",
  },
  {
    content:
      "The AI-generated content is so natural and engaging. It's like having a content team working 24/7.",
    author: "Michael Rodriguez",
    role: "Growth Manager",
    company: "Scale Solutions",
  },
  {
    content:
      "We've seen a 3x increase in social media engagement since using this platform for our testimonial content.",
    author: "Emily Watson",
    role: "Social Media Lead",
    company: "Innovate Labs",
  },
];

export function Testimonials() {
  return (
    <div id="testimonials" className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Trusted by Marketing Teams Everywhere
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            See what our customers are saying about their experience
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex space-x-1 text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">{testimonial.content}</p>
              <div>
                <h4 className="font-semibold text-gray-900">
                  {testimonial.author}
                </h4>
                <p className="text-gray-500">{testimonial.role}</p>
                <p className="text-indigo-600">{testimonial.company}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
