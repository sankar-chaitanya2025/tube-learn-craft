import { Play } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center dotted-bg-hero overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background/95 to-background-secondary"></div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-coral rounded-full animate-float"></div>
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute bottom-40 left-20 w-1.5 h-1.5 bg-secondary rounded-full animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          {/* Trust Indicator */}
          <div className="inline-flex items-center px-4 py-2 glass-card rounded-full mb-8">
            <span className="text-sm font-medium text-foreground-muted">
              Experience the future of learning
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl text-navy leading-tight mb-6">
            Transform YouTube Videos Into{' '}
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Structured Learning Courses
            </span>
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-foreground-muted font-medium mb-12 max-w-3xl mx-auto leading-relaxed">
            Paste any YouTube link. Get instant course outlines, smart summaries, and study notes in 30 seconds.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="group px-8 py-4 bg-primary hover:bg-primary-hover text-primary-foreground font-bold text-lg rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl animate-scale-in">
              Start Learning Smarter - Free Forever
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-200 -z-10"></div>
            </button>
            
            <button className="group flex items-center px-8 py-4 glass-card hover:glass-card text-foreground font-semibold text-lg rounded-xl transition-all duration-200 transform hover:scale-105">
              <Play className="mr-3 w-5 h-5 text-primary" />
              Watch 60-Second Demo
            </button>
          </div>

          {/* Demo Preview Hint */}
          <div className="animate-slide-up" style={{ animationDelay: '0.5s' }}>
            <p className="text-foreground-light font-medium">
              See how LearnTube transforms any video into structured learning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;