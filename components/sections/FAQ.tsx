import { ChevronDown } from 'lucide-react';
import { Arrow } from '../icons/icons';
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  faqs?: FAQItem[];
}

export const FAQ: React.FC<FAQProps> = ({
  faqs = [
    {
      question: 'What is Socie-Pro AI, and how does it work?',
      answer:
        'Socie-Pro AI is an AI-powered social media management tool that helps you create, schedule, and publish posts across multiple platforms with just a few clicks.',
    },
    {
      question: 'What platforms does Socie-Pro AI support?',
      answer:
        'Socie-Pro AI supports platforms like Facebook, Instagram, Twitter, and more.',
    },
    {
      question: 'Can I schedule posts on multiple platforms at once?',
      answer:
        'Yes, Socie-Pro AI allows you to schedule posts for multiple platforms simultaneously, saving you time and effort.',
    },
    {
      question: 'Can I see performance analytics for my posts?',
      answer:
        "Yes, Socie-Pro AI provides detailed analytics on your posts' performance to help you fine-tune your strategy.",
    },
    {
      question: 'Can I collaborate with my team and approve posts?',
      answer:
        'Yes, Socie-Pro AI offers collaboration features that allow you and your team to approve and edit posts before publishing.',
    },
    {
      question: 'Is there a free trial available?',
      answer:
        'Yes, Socie-Pro AI offers a 7-day free trial to help you explore the features and see how it works.',
    },
  ],
}: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="font-poppins md: flex w-full justify-center">
      <div className="flex flex-col overflow-x-hidden py-6 text-black md:w-[1200px] md:gap-8">
        <h2 className="mb-6 px-16 text-center text-2xl font-bold md:text-5xl">
          Frequently Asked Questions
        </h2>
        <p className="text-socie-gray text-center text-sm md:text-xl">
          Quick answers to the most common questions about Socie-Pro AI.
        </p>
        <div className="mx-2 flex flex-col flex-wrap items-center gap-2 md:flex-row">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="w-full rounded-4xl border-[1px] bg-white md:w-[48%]"
            >
              <div
                className="flex cursor-pointer items-center justify-between p-4"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="flex items-center gap-2 text-base font-semibold md:text-lg">
                  <Arrow className="size-6" /> {faq.question}
                </span>
                <span
                  className={`transform transition-transform ${openIndex === index ? 'rotate-360' : 'rotate-180'}`}
                >
                  <ChevronDown className="h-5 w-5 text-gray-600" />
                </span>
              </div>
              {openIndex === index && (
                <div className="flex w-full cursor-pointer items-center justify-between p-2 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
