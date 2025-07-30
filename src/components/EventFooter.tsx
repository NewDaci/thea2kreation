const EventFooter = () => {
  return (
    <footer className="bg-foreground text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 bg-gradient-hero rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">SE</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Silver Event</h3>
                <p className="text-sm text-gray-400">Management</p>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-4">
              Creating unforgettable experiences across India since 1998. We bring creativity, precision, and heart to every detail.
            </p>
            <div className="text-sm text-gray-400 space-y-1">
              <p>📧 info@silverevent.com</p>
              <p>📞 +919831177461</p>
              <p>📍 Kolkata, India</p>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Our Services</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Corporate Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Government Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Events</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Team Building</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Medical Conferences</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Festival Events</a></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Services</a></li>
              <li><a href="#gallery" className="hover:text-white transition-colors">Gallery</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Event Types */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Event Types</h4>
            <ul className="space-y-3 text-sm text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Exhibitions</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Live Performances</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Weddings</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Product Launches</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Award Ceremonies</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Trade Shows</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2024 Silver Event Management. All rights reserved. | 
            <a href="#" className="hover:text-white transition-colors"> Privacy Policy </a> | 
            <a href="#" className="hover:text-white transition-colors"> Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default EventFooter;