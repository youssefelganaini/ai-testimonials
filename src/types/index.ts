export interface Testimonial {
  id: string;
  customerName: string;
  companyName: string;
  position: string;
  rawTestimonial: string;
  date: string;
}

export interface TransformedContent {
  socialPost: string;
  caseStudy: string;
  salesDeck: string;
}