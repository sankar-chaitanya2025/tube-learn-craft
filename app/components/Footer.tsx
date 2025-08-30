import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 bg-navy dotted-bg-fade relative">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Logo & Copyright */}
          <div className="flex items-center space-x-4 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">LT</span>
            </div>
            <div>
              <span className="font-display font-bold text-xl text-white">LearnTube</span>
              <p className="text-sm text-gray-400">© 2024 LearnTube. All rights reserved.</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a 
              href="https://twitter.com/SankarAmas61083" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 group"
            >
              <Twitter className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
            </a>
            <a 
              href="https://github.com/sankar-chaitanya2025" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 group"
            >
              <Github className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
            </a>
            <a 
              href="https://www.linkedin.com/in/amasa-sankar-chaitanya-925ba5352" 
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors duration-200 group"
            >
              <Linkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors duration-200" />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-gray-400">
            <div className="flex space-x-6 mb-4 md:mb-0">
              <a href="/privacy-policy" className="hover:text-white transition-colors duration-200">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-white transition-colors duration-200">Terms of Service</a>
              <a href="/contact" className="hover:text-white transition-colors duration-200">Contact</a>
            </div>
            <p>Made with ❤️ for learners everywhere</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;