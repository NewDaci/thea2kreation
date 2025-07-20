import { Building2, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-hotel-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <Building2 className="h-8 w-8 text-hotel-gold" />
              <span className="text-2xl font-bold">HotelFlow</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transform your hotel operations with our comprehensive management platform. 
              Trusted by hotels worldwide to increase revenue and enhance guest satisfaction.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-hotel-gold" />
                <span className="text-gray-300">contact@hotelflow.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-hotel-gold" />
                <span className="text-gray-300">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-hotel-gold" />
                <span className="text-gray-300">San Francisco, CA</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">Integrations</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">API</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">Security</a></li>
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Support</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">Help Center</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">Contact Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">Training</a></li>
              <li><a href="#" className="text-gray-300 hover:text-hotel-gold transition-colors">Status</a></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 HotelFlow. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-hotel-gold transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-hotel-gold transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-hotel-gold transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;