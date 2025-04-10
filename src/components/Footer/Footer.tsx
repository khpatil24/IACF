import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-12 pb-6">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          
          {/* About Section */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-bold mb-4">Indian Avian Conservation Fund</h3>
            <p className="mb-4">
              Dedicated to protecting and conserving India's endangered bird species through research, 
              education, and community engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="hover:text-accent transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="hover:text-accent transition-colors">Home</a></li>
              <li><a href="/species" className="hover:text-accent transition-colors">Endangered Species</a></li>
              <li><a href="/conservation" className="hover:text-accent transition-colors">Conservation Efforts</a></li>
              <li><a href="/blog" className="hover:text-accent transition-colors">Blog & News</a></li>
              <li><a href="/donate" className="hover:text-accent transition-colors">Donate</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 flex-shrink-0" />
                <span>123 Conservation Lane, Bengaluru, Karnataka 560001, India</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-3" />
                <span>+91 80 1234 5678</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3" />
                <a href="mailto:info@indianavianfund.org" className="hover:text-accent transition-colors">
                  info@indianavianfund.org
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter Subscription */}
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4">Stay Updated</h3>
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="flex-grow px-4 py-2 rounded text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <button className="bg-accent hover:bg-accent-dark text-white font-semibold px-6 py-2 rounded transition-colors">
              Subscribe
            </button>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} Indian Avian Conservation Fund. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="/privacy-policy" className="hover:text-accent transition-colors">Privacy Policy</a>
            <a href="/terms" className="hover:text-accent transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}