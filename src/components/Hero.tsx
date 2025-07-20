import { Button } from "@/components/ui/button";
import { Play, ArrowRight, CheckCircle } from "lucide-react";
import heroImage from "@/assets/hotel-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-hotel-cream to-secondary">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-10"
          style={{ backgroundImage: `url(${heroImage})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/60 to-background/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 animate-fade-in">
              <CheckCircle className="w-4 h-4 mr-2" />
              Trusted by 500+ Hotels Worldwide
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-hotel-navy mb-6 leading-tight animate-slide-up">
              Transform Your Hotel 
              <span className="text-transparent bg-gradient-hero bg-clip-text">
                {" "}Management
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-hotel-gray mb-8 max-w-2xl mx-auto lg:mx-0 animate-slide-up">
              Streamline operations, boost revenue, and deliver exceptional guest experiences with our comprehensive hotel management platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8 animate-fade-in">
              <Button variant="hero" size="xl" className="group">
                Start Free Trial
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-white" size="xl" className="bg-white/10 backdrop-blur-sm">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6 text-sm text-hotel-gray animate-fade-in">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                No setup fees
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                30-day free trial
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-500" />
                Cancel anytime
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative lg:h-[600px] flex items-center justify-center animate-fade-in">
            <div className="relative w-full max-w-lg">
              <div className="absolute inset-0 bg-gradient-hero rounded-3xl transform rotate-6 opacity-20"></div>
              <div className="relative bg-white rounded-3xl shadow-strong p-8 transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <img 
                  src={heroImage}
                  alt="Hotel Management Dashboard"
                  className="w-full h-80 object-cover rounded-2xl"
                />
                <div className="absolute -top-4 -right-4 bg-accent text-hotel-navy px-4 py-2 rounded-full font-semibold shadow-medium animate-bounce-gentle">
                  ⭐ 4.9/5 Rating
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl animate-bounce-gentle"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-2xl animate-bounce-gentle delay-1000"></div>
    </section>
  );
};

export default Hero;