import { Play, ArrowRight, FileText, Download } from 'lucide-react';
import Image from 'next/image';
import demoMockup from '@/assets/demo-mockup.jpg';

const DemoSection = () => {
  return (
    <section className="py-24 bg-background-secondary dotted-bg-fade relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mb-6">
            See LearnTube in Action
          </h2>
          <p className="text-xl text-foreground-muted max-w-2xl mx-auto">
            Watch how any YouTube video transforms into structured learning content in seconds
          </p>
        </div>

        {/* Demo Mockup */}
        <div className="max-w-6xl mx-auto mb-16">
          <div className="glass-demo rounded-2xl p-8 animate-fade-in">
            <Image 
              src={demoMockup} 
              alt="LearnTube Demo - YouTube video transformation into structured course"
              className="w-full rounded-xl shadow-2xl"
              priority
            />
          </div>
        </div>

        {/* Before/After Comparison */}
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Before */}
          <div className="text-center">
            <div className="w-16 h-16 bg-red-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <Play className="w-8 h-8 text-red-600" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy mb-4">Before: Raw Video</h3>
            <ul className="text-foreground-muted space-y-3 text-left">
              <li>• Passive watching experience</li>
              <li>• No structure or organization</li>
              <li>• Difficult to take effective notes</li>
              <li>• Hard to review key concepts</li>
              <li>• No progress tracking</li>
            </ul>
          </div>

          {/* Arrow */}
          <div className="hidden md:flex items-center justify-center">
            <ArrowRight className="w-8 h-8 text-primary" />
          </div>

          {/* After */}
          <div className="text-center md:col-start-2">
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-6">
              <FileText className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="font-display font-bold text-2xl text-navy mb-4">After: Structured Course</h3>
            <ul className="text-foreground-muted space-y-3 text-left">
              <li>• Organized learning sections</li>
              <li>• AI-generated summaries</li>
              <li>• Downloadable study notes</li>
              <li>• Key concept highlights</li>
              <li>• Progress tracking</li>
            </ul>
          </div>
        </div>

        {/* Interactive Demo CTA */}
        <div className="text-center mt-16">
          <button className="group inline-flex items-center px-8 py-4 glass-card hover:glass-card text-foreground font-semibold text-lg rounded-xl transition-all duration-200 transform hover:scale-105">
            <Download className="mr-3 w-5 h-5 text-primary group-hover:animate-bounce" />
            Try Interactive Demo
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;