import { Clipboard, Brain, Download } from 'lucide-react';

const steps = [
  {
    icon: Clipboard,
    title: 'Paste YouTube URL',
    description: 'Simply copy any YouTube video link and paste it into LearnTube. No registration required.',
    delay: '0s'
  },
  {
    icon: Brain,
    title: 'AI Analyzes Content',
    description: 'Our advanced AI processes the video content, extracting key concepts and learning objectives.',
    delay: '0.2s'
  },
  {
    icon: Download,
    title: 'Download Smart Notes',
    description: 'Get structured course outlines, summaries, and downloadable study materials instantly.',
    delay: '0.4s'
  }
];

const HowItWorksSection = () => {
  return (
    <section className="py-24 bg-background-secondary dotted-bg-secondary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mb-6">
            How It Works
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Transform any YouTube video into structured learning content in three simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl text-center group animate-slide-up"
              style={{ animationDelay: step.delay }}
            >
              {/* Step Number */}
              <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-6 text-white font-bold text-lg">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 bg-background-muted rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200">
                <step.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {step.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {step.description}
              </p>

              {/* Connector Arrow (except last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary to-transparent transform -translate-y-1/2"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;