import { 
  Building2, 
  Users, 
  Heart, 
  UserCheck, 
  Stethoscope, 
  PartyPopper, 
  Store, 
  Music 
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const EventServices = () => {
  const services = [
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Corporate events in India bring people together to build businesses, celebrate achievements, and create meaningful connections.",
      gradient: "from-event-blue to-event-purple"
    },
    {
      icon: Users,
      title: "Government Events",
      description: "These events connect leaders, citizens, and institutions to move the nation forward.",
      gradient: "from-event-purple to-event-pink"
    },
    {
      icon: Heart,
      title: "Social Events",
      description: "Social events in India are all about emotions, traditions, and beautiful memories.",
      gradient: "from-event-pink to-event-orange"
    },
    {
      icon: UserCheck,
      title: "Team Building Events",
      description: "Team building events in India are designed to bring colleagues closer, spark creativity, and boost morale in a fun, engaging way.",
      gradient: "from-event-orange to-event-green"
    },
    {
      icon: Stethoscope,
      title: "Medical Conferences",
      description: "Medical conferences in India create platforms where experts, doctors, and healthcare professionals come together to learn, share, and grow.",
      gradient: "from-event-green to-event-blue"
    },
    {
      icon: PartyPopper,
      title: "Festival Events",
      description: "We bring communities together and make everyone feel the spirit of celebration.",
      gradient: "from-event-blue to-event-purple"
    },
    {
      icon: Store,
      title: "Exhibitions",
      description: "Exhibitions in India are where ideas, creativity, and industries meet the public.",
      gradient: "from-event-purple to-event-pink"
    },
    {
      icon: Music,
      title: "Live Performances",
      description: "These include Bollywood concerts, classical dance recitals like Bharatanatyam or Kathak, Sufi nights, ghazal mehfils and more",
      gradient: "from-event-pink to-event-orange"
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">the best for you</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-8">
            Our Event Management Services!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="group hover:shadow-medium transition-all duration-300 hover:-translate-y-2 border-0 bg-gradient-card">
              <CardContent className="p-6 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${service.gradient} flex items-center justify-center shadow-medium group-hover:scale-110 transition-transform duration-300`}>
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventServices;