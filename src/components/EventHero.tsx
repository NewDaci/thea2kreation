import { Button } from "@/components/ui/button";
import eventHero from "@/assets/event-hero.jpg";

const EventHero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${eventHero})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-event-purple/80 via-event-pink/70 to-event-orange/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Jhantu Ankit's Event Management Company in <span className="text-event-cream">Delhi</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed">
            Offers a full spectrum of integrated Event management services that consistently deliver highly targeted effective solutions tailored to the needs of our client.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button variant="outline-white" size="xl">
              Our Services
            </Button>
            <Button variant="premium" size="xl">
              Get Started
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap justify-center items-center gap-8 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-event-cream rounded-full"></div>
              <span>Since 1998</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-event-cream rounded-full"></div>
              <span>1000+ Events</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-event-cream rounded-full"></div>
              <span>Pan India Service</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-event-cream rounded-full"></div>
              <span>20+ Years Experience</span>
            </div>
          </div>
        </div>
      </div>

      {/* Sliding Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        <div className="w-3 h-3 bg-white rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
        <div className="w-3 h-3 bg-white/50 rounded-full"></div>
      </div>
    </section>
  );
};

export default EventHero;
