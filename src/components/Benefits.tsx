import { Button } from "@/components/ui/button";
import { TrendingUp, Clock, Heart, DollarSign } from "lucide-react";

const Benefits = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "35%",
      label: "Revenue Increase",
      description: "Average revenue boost within 6 months"
    },
    {
      icon: Clock,
      value: "4hrs",
      label: "Time Saved Daily",
      description: "Reduce manual tasks and paperwork"
    },
    {
      icon: Heart,
      value: "96%",
      label: "Guest Satisfaction",
      description: "Improved guest experience ratings"
    },
    {
      icon: DollarSign,
      value: "$50K",
      label: "Cost Savings",
      description: "Annual operational cost reduction"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/20 text-accent font-medium text-sm mb-6">
              ⚡ Proven Results
            </div>
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hotel-navy mb-6 leading-tight">
              Why Hotels Choose 
              <span className="text-transparent bg-gradient-hero bg-clip-text"> HotelFlow</span>
            </h2>
            
            <p className="text-lg text-hotel-gray mb-8">
              Join hundreds of successful hotels that have transformed their operations, increased revenue, and delivered exceptional guest experiences with our platform.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-hotel-navy mb-1">Streamlined Operations</h4>
                  <p className="text-hotel-gray">Automate routine tasks and focus on what matters most - your guests.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-hotel-navy mb-1">Data-Driven Decisions</h4>
                  <p className="text-hotel-gray">Make informed choices with real-time analytics and actionable insights.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-hotel-navy mb-1">Scalable Growth</h4>
                  <p className="text-hotel-gray">Grow your business without operational bottlenecks or system limitations.</p>
                </div>
              </div>
            </div>

            <Button variant="hero" size="lg" className="group">
              Schedule a Demo
              <TrendingUp className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </Button>
          </div>

          {/* Right Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="p-6 bg-gradient-card rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 text-center"
              >
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-hotel-navy mb-2">{stat.value}</div>
                <div className="text-sm font-semibold text-hotel-navy mb-1">{stat.label}</div>
                <div className="text-xs text-hotel-gray">{stat.description}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Benefits;