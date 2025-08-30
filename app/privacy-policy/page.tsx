'use client'

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function PrivacyPolicy() {
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
              Privacy Policy
            </h1>
            <p className="text-lg text-foreground-muted mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">1. Information We Collect</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  We collect information you provide directly to us, such as when you create an account, 
                  use our services, or contact us for support.
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>YouTube URLs you submit for processing</li>
                  <li>Email addresses for account creation and communication</li>
                  <li>Usage data and analytics to improve our services</li>
                  <li>Device information and browser type</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">2. How We Use Your Information</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  We use the information we collect to provide, maintain, and improve our services:
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>Process YouTube videos and generate learning materials</li>
                  <li>Send you important updates about our services</li>
                  <li>Respond to your questions and provide customer support</li>
                  <li>Analyze usage patterns to improve our AI algorithms</li>
                  <li>Ensure the security and integrity of our platform</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">3. Information Sharing</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  We do not sell, trade, or otherwise transfer your personal information to third parties, except:
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>With your explicit consent</li>
                  <li>To comply with legal obligations</li>
                  <li>To protect our rights and prevent fraud</li>
                  <li>With service providers who assist in our operations (under strict confidentiality agreements)</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">4. Data Security</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  We implement appropriate security measures to protect your personal information:
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>Encryption of data in transit and at rest</li>
                  <li>Regular security audits and updates</li>
                  <li>Access controls and authentication systems</li>
                  <li>Secure data centers with physical security measures</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">5. Your Rights</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  You have the right to:
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>Access and update your personal information</li>
                  <li>Delete your account and associated data</li>
                  <li>Opt-out of marketing communications</li>
                  <li>Request a copy of your data</li>
                  <li>Withdraw consent for data processing</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">6. Cookies and Tracking</h2>
                <p className="text-foreground-muted leading-relaxed mb-4">
                  We use cookies and similar technologies to enhance your experience:
                </p>
                <ul className="list-disc list-inside text-foreground-muted space-y-2">
                  <li>Essential cookies for basic functionality</li>
                  <li>Analytics cookies to understand usage patterns</li>
                  <li>Preference cookies to remember your settings</li>
                  <li>You can control cookie settings through your browser</li>
                </ul>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">7. Children's Privacy</h2>
                <p className="text-foreground-muted leading-relaxed">
                  Our services are not intended for children under 13. We do not knowingly collect 
                  personal information from children under 13. If we become aware that we have 
                  collected such information, we will take steps to delete it promptly.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl mb-8">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">8. Changes to This Policy</h2>
                <p className="text-foreground-muted leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any 
                  changes by posting the new Privacy Policy on this page and updating the "Last updated" 
                  date. Your continued use of our services after any modifications constitutes 
                  acceptance of the updated policy.
                </p>
              </div>

              <div className="glass-card p-8 rounded-xl">
                <h2 className="font-display font-bold text-2xl text-navy mb-4">9. Contact Us</h2>
                <p className="text-foreground-muted leading-relaxed">
                  If you have any questions about this Privacy Policy, please contact us at:
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
