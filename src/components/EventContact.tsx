
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EventContact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            Let's Create Something Unforgettable
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Whether you're preparing to walk down the aisle or preparing a stage for your next big pitch — The A2 Kreations is here to turn your moments into milestones.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Your Name" 
                className="bg-card border-input text-card-foreground placeholder:text-muted-foreground shadow-soft focus:bg-card"
              />
              <Input 
                placeholder="Your Email" 
                type="email" 
                className="bg-card border-input text-card-foreground placeholder:text-muted-foreground shadow-soft focus:bg-card"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Phone Number" 
                className="bg-card border-input text-card-foreground placeholder:text-muted-foreground shadow-soft focus:bg-card"
              />
              <Input 
                placeholder="Event Type" 
                className="bg-card border-input text-card-foreground placeholder:text-muted-foreground shadow-soft focus:bg-card"
              />
            </div>
            <Textarea 
              placeholder="Tell us about your event requirements..."
              rows={5}
              className="bg-card border-input text-card-foreground placeholder:text-muted-foreground shadow-soft focus:bg-card"
            />
            <Button variant="outline-white" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Contact The A2 Kreations</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
            <div>📞 +91-9910566561 / 7088014106</div>
            <div>✉️ info@a2kreations.com</div>
            <div>📍 India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventContact;
