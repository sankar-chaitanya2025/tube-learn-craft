import { 
  BookOpen, 
  Brain, 
  Clock, 
  TrendingUp, 
  Download, 
  Layers 
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: 'Structured Learning Paths',
    description: 'Automatically organize video content into logical learning sequences with clear progression.',
    gradient: 'from-primary to-blue-500'
  },
  {
    icon: Brain,
    title: 'AI-Powered Summaries',
    description: 'Get intelligent summaries that capture key concepts, definitions, and actionable insights.',
    gradient: 'from-secondary to-orange-500'
  },
  {
    icon: Clock,
    title: '30-Second Processing',
    description: 'Lightning-fast AI analysis transforms hours of video content into structured learning materials.',
    gradient: 'from-accent to-gray-600'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Monitor your learning journey with detailed analytics and completion tracking.',
    gradient: 'from-green-500 to-emerald-600'
  },
  {
    icon: Download,
    title: 'Multi-Format Export',
    description: 'Download your learning materials in PDF, Markdown, or interactive formats.',
    gradient: 'from-purple-500 to-violet-600'
  },
  {
    icon: Layers,
    title: 'Batch Processing',
    description: 'Process entire playlists and create comprehensive course collections effortlessly.',
    gradient: 'from-pink-500 to-rose-600'
  }
];

const FeaturesSection = () => {
  return (
    <section className="py-24 bg-background dotted-bg-primary relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display font-bold text-4xl md:text-5xl text-navy mb-6">
            Powerful Features for Modern Learning
          </h2>
          <p className="text-xl text-foreground-muted max-w-3xl mx-auto">
            Everything you need to transform passive video watching into active, structured learning experiences
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 rounded-xl group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-display font-bold text-xl text-navy mb-4">
                {feature.title}
              </h3>
              <p className="text-foreground-muted leading-relaxed">
                {feature.description}
              </p>

              {/* Hover Effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;