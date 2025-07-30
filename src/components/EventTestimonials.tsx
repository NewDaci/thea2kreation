import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const EventTestimonials = () => {
  const testimonials = [
    {
      name: "Rajib Kumar",
      text: "Done excellent work we greatest thanks to Me Sanjay he was very nice person and staff are to good we work again and again with silver sand event management company pan India 😁👍",
      rating: 5
    },
    {
      name: "Sumilita Seal",
      text: "As an Artist I have had the pleasure of working with Mr. Sanjay Kr. Chowdhury's event team, & I had such a wonderful time.",
      rating: 5
    },
    {
      name: "Tapabrata Chakraborty",
      text: "Silver sand event management company is a very good event management company I totally satisfied. 5 star given their behavior & management everything is so perfect.",
      rating: 5
    },
    {
      name: "Probir Bagdi",
      text: "We look forward for giving more event to Silver Sand Event Management in near future for organising any kind of event. Last but not the least they done great job to manage the event.",
      rating: 5
    },
    {
      name: "Mahesh Prasad",
      text: "It was very good to work with silver sand management team and I hope we will work together as well",
      rating: 5
    },
    {
      name: "Ananta Munda",
      text: "Gorgeous work of art, amazing professionalism, very respectful to surroundings. Our team feels privileged to work with you, thank you. May we work again soon.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8">
            Testimonials!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover:shadow-medium transition-all duration-300 hover:-translate-y-1 bg-white/70 backdrop-blur-sm border-0">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-event-orange text-event-orange" />
                  ))}
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventTestimonials;