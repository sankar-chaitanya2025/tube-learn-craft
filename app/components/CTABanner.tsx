import { ArrowRight, Sparkles } from 'lucide-react';

const CTABanner = () => {
  return (
    <section className="py-24 bg-background-secondary dotted-bg-dense relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-secondary/10 rounded-full blur-xl"></div>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-banner rounded-2xl p-12 text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center mx-auto mb-8">
            <Sparkles className="w-8 h-8 text-white" />
          </div>

          {/* Headline */}
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Learning Experience?
            </span>
          </h2>

          {/* Description */}
          <p className="text-xl text-foreground-muted mb-8 max-w-2xl mx-auto">
            Join thousands of learners who are already transforming YouTube videos into structured, actionable knowledge.
          </p>

          {/* Risk Reduction */}
          <div className="inline-flex items-center px-4 py-2 bg-green-50 rounded-full mb-8">
            <span className="text-sm font-medium text-green-700">
              Try it instantly - No signup required for first use
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="group px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl">
              Start Free - No Credit Card Required
              <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
            </button>
            
            <button className="px-8 py-4 glass-card hover:glass-card text-foreground font-semibold text-lg rounded-xl transition-all duration-200 transform hover:scale-105">
              Book a Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="flex items-center justify-center gap-8 mt-12 text-sm text-foreground-light">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span>Instant Processing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span>AI-Powered</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span>Free Forever Plan</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTABanner;