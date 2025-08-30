'use client'

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-20">
        <div className="container mx-auto px-6 py-12">
          {/* Back Button */}
          <Link 
            href="/" 
            className="inline-flex items-center text-primary hover:text-primary-hover font-medium mb-8 transition-colors duration-200"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          {/* Header */}
          <div className="max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-4xl md:text-5xl text-navy mb-6">
              Terms of Service
            </h1>
            <p className="text-lg text-foreground-muted mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">1. Acceptance of Terms</h2>
                <p className="text-foreground-muted leading-relaxed">
                  By accessing and using LearnTube, you accept and agree to be bound by the terms and 
                  provision of this agreement. If you do not agree to abide by the above, please do not 
                  use this service.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">2. Description of Service</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  LearnTube is an AI-powered platform that transforms YouTube videos into structured 
                  learning materials. Our services include:
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>Video content analysis and processing</li>
                  <li>AI-generated summaries and course outlines</li>
                  <li>Structured learning materials creation</li>
                  <li>Export functionality for various formats</li>
                  <li>Progress tracking and analytics</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">3. User Responsibilities</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  As a user of LearnTube, you agree to:
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>Provide accurate and complete information when creating an account</li>
                  <li>Use the service only for lawful purposes</li>
                  <li>Respect intellectual property rights of content creators</li>
                  <li>Not attempt to reverse engineer or compromise our systems</li>
                  <li>Not use the service to process inappropriate or harmful content</li>
                  <li>Maintain the confidentiality of your account credentials</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">4. Content and Intellectual Property</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  Regarding content and intellectual property:
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>You retain ownership of any content you submit to our service</li>
                  <li>We respect the intellectual property rights of YouTube content creators</li>
                  <li>Our AI-generated summaries are provided for educational purposes</li>
                  <li>You may not redistribute or resell our generated content without permission</li>
                  <li>We reserve the right to remove content that violates these terms</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">5. Service Availability</h2>
                <p className="text-foreground-muted leading-relaxed">
                  While we strive to maintain high service availability, we do not guarantee uninterrupted 
                  access to LearnTube. We may perform maintenance, updates, or experience technical 
                  difficulties that temporarily affect service availability.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">6. Privacy and Data Protection</h2>
                <p className="text-foreground-muted leading-relaxed">
                  Your privacy is important to us. Please review our Privacy Policy to understand how 
                  we collect, use, and protect your information. By using our service, you consent to 
                  the collection and use of information as described in our Privacy Policy.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">7. Limitation of Liability</h2>
                <p className="text-foreground-muted leading-relaxed">
                  LearnTube is provided "as is" without warranties of any kind. We shall not be liable 
                  for any direct, indirect, incidental, special, or consequential damages resulting from 
                  the use or inability to use our service, including but not limited to loss of data, 
                  profits, or business opportunities.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">8. Account Termination</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  We reserve the right to terminate or suspend your account at any time for:
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>Violation of these Terms of Service</li>
                  <li>Fraudulent or illegal activity</li>
                  <li>Abuse of our systems or services</li>
                  <li>Extended periods of inactivity</li>
                </ul>
                <p className="text-foreground-muted leading-relaxed mt-4">
                  You may also terminate your account at any time by contacting us.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">9. Changes to Terms</h2>
                <p className="text-foreground-muted leading-relaxed">
                  We reserve the right to modify these Terms of Service at any time. We will notify 
                  users of significant changes via email or through our service. Your continued use 
                  of LearnTube after changes are posted constitutes acceptance of the modified terms.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">10. Governing Law</h2>
                <p className="text-foreground-muted leading-relaxed">
                  These Terms of Service shall be governed by and construed in accordance with applicable 
                  laws. Any disputes arising from these terms or your use of our service shall be resolved 
                  through appropriate legal channels.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">11. Contact Information</h2>
                <p className="text-foreground-muted leading-relaxed">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="mt-4">
                  <p className="text-foreground-muted">
                    Email: <a href="mailto:sankar.chaitanya2025@gmail.com" className="text-primary hover:text-primary-hover">sankar.chaitanya2025@gmail.com</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}
