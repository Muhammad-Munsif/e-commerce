// components/FAQ.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const FAQ = () => {
  const navigate = useNavigate();

  const faqs = [
    {
      question: "How can I track my order?",
      answer:
        "You can track your order using the tracking number provided in your confirmation email or in your order details page.",
    },
    {
      question: "What is your return policy?",
      answer:
        "We accept returns within 30 days of delivery. Items must be in original condition with tags attached.",
    },
    {
      question: "How long does shipping take?",
      answer:
        "Standard shipping takes 3-5 business days. Express shipping takes 1-2 business days.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Frequently Asked Questions
        </h1>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <p className="text-gray-600 mb-4">
            Didn't find what you're looking for?
          </p>
          <button
            onClick={() => navigate("/contact-support")}
            className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-lg"
          >
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
