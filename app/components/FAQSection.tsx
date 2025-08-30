import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'How does the AI processing work?',
    answer: 'Our advanced AI analyzes video transcripts, identifies key concepts, and creates structured learning materials using natural language processing and machine learning algorithms.'
  },
  {
    question: 'What types of videos are supported?',
    answer: 'LearnTube works with educational videos, tutorials, lectures, documentaries, and any content-rich YouTube videos. We support videos in multiple languages with clear audio.'
  },
  {
    question: 'What export formats are available?',
    answer: 'You can download your learning materials in PDF format, Markdown files, or view them in our interactive web format. More formats are coming soon.'
  },
  {
    question: 'Is there a limit on video length?',
    answer: 'Currently, we support videos up to 3 hours long. For longer content, we recommend breaking it into smaller segments for optimal learning outcomes.'
  },
  {
    question: 'How accurate are the AI summaries?',
    answer: 'Our AI achieves high accuracy by combining multiple analysis techniques. While summaries are highly reliable, we always recommend reviewing the original content for complete understanding.'
  },
  {
    question: 'Can I process private or unlisted videos?',
    answer: 'Yes, as long as you have access to the video URL, LearnTube can process private and unlisted YouTube videos while respecting all privacy settings.'
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-background dotted-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mb-6">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Everything you need to know about transforming videos into structured learning
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="glass-card mb-4 rounded-xl overflow-hidden animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-background-muted/30 transition-colors duration-200"
              >
                <h3 className="font-semibold text-lg text-navy pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openIndex === index ? (
                    <Minus className="w-5 h-5 text-primary" />
                  ) : (
                    <Plus className="w-5 h-5 text-primary" />
                  )}
                </div>
              </button>
              
              {openIndex === index && (
                <div className="px-8 pb-6 border-t border-border/50">
                  <p className="text-foreground-muted leading-relaxed pt-4">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Additional Help */}
        <div className="text-center mt-12">
          <p className="text-foreground-light mb-4">Still have questions?</p>
          <a 
            href="mailto:sankar.chaitanya2025@gmail.com"
            className="text-primary hover:text-primary-hover font-semibold underline underline-offset-4 transition-colors duration-200"
          >
            Contact our team
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;