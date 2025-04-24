"use client";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import CustomButton from "../ui/CustomButton";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  id?: string;
  title: string;
  description?: string;
  faqs: FAQItem[];
  contactLink?: string;
  contactLabel: string;
}

const FAQSection = ({
  id = "faq",
  title,
  description,
  faqs,
  contactLink,
  contactLabel,
}: FAQSectionProps) => {
  const [expandedQuestion, setExpandedQuestion] = useState<string | null>(null);

  const toggleQuestion = (question: string) => {
    setExpandedQuestion(expandedQuestion === question ? null : question);
  };

  return (
    <section
      id={id}
      className="responsive-container py-16 scroll-my-32"
    >
      <div className="mb-12 text-center">
        <h2 className="text-3xl font-bold text-cyan-900 mb-4">{title}</h2>
        {description && <p className="text-gray-700">{description}</p>}
      </div>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100"
          >
            <div
              className="px-6 py-4 cursor-pointer flex justify-between items-center"
              onClick={() => toggleQuestion(item.question)}
            >
              <h3 className="text-lg font-semibold text-cyan-900">{item.question}</h3>
              <ChevronDown
                className={`w-5 h-5 text-cyan-500 transition-transform duration-300 ${
                  expandedQuestion === item.question ? "rotate-180" : ""
                }`}
              />
            </div>
            {expandedQuestion === item.question && (
              <div className="px-6 py-4 border-t border-gray-200 bg-gray-50">
                <p className="text-gray-700">{item.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>

      {contactLink && (
        <div className="text-center">
          <CustomButton
            className="inline-flex mt-8 bg-cyan-500 hover:bg-cyan-600 text-white font-medium shadow-lg hover:shadow-cyan-500/30 transition-all"
            title={contactLabel}
            type="link"
          />
        </div>
      )}
    </section>
  );
};

export default FAQSection;
