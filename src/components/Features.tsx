import { 
  Calendar, 
  Users, 
  BarChart3, 
  CreditCard, 
  Bed, 
  Shield,
  Clock,
  Smartphone,
  Zap
} from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Calendar,
      title: "Smart Reservations",
      description: "Advanced booking management with real-time availability, automated confirmations, and dynamic pricing."
    },
    {
      icon: Users,
      title: "Guest Management", 
      description: "Complete guest profiles, preferences tracking, and personalized service delivery for enhanced satisfaction."
    },
    {
      icon: BarChart3,
      title: "Analytics & Reports",
      description: "Comprehensive dashboards with revenue insights, occupancy trends, and performance metrics."
    },
    {
      icon: CreditCard,
      title: "Payment Processing",
      description: "Secure payment handling, automated billing, and integrated POS for seamless transactions."
    },
    {
      icon: Bed,
      title: "Room Management",
      description: "Real-time room status, housekeeping coordination, and maintenance scheduling automation."
    },
    {
      icon: Shield,
      title: "Security & Compliance",
      description: "Enterprise-grade security, data protection, and hospitality industry compliance standards."
    },
    {
      icon: Clock,
      title: "24/7 Operations",
      description: "Round-the-clock system availability with automated workflows and emergency protocols."
    },
    {
      icon: Smartphone,
      title: "Mobile Ready",
      description: "Full mobile compatibility for staff and management access from anywhere, anytime."
    },
    {
      icon: Zap,
      title: "Quick Setup",
      description: "Get started in minutes with our intuitive setup wizard and migration assistance."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-br from-background to-hotel-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-hotel-navy mb-6">
            Everything You Need to 
            <span className="text-transparent bg-gradient-hero bg-clip-text"> Succeed</span>
          </h2>
          <p className="text-lg md:text-xl text-hotel-gray max-w-3xl mx-auto">
            Our comprehensive platform provides all the tools and features you need to run your hotel efficiently and profitably.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 bg-white rounded-2xl shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-hero rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-hotel-navy mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              
              <p className="text-hotel-gray leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Zap className="w-4 h-4 mr-2" />
            Start using these features today
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;