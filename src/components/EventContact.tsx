import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const EventContact = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">
            We'll plan your dream event!
          </h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            We respect your privacy. We store personal data securely and will not share your details with any 3rd party.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Your Name" 
                className="bg-white/10 border-white/20 text-white placeholder-white/70"
              />
              <Input 
                placeholder="Your Email" 
                type="email" 
                className="bg-white/10 border-white/20 text-white placeholder-white/70"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input 
                placeholder="Phone Number" 
                className="bg-white/10 border-white/20 text-white placeholder-white/70"
              />
              <Input 
                placeholder="Event Type" 
                className="bg-white/10 border-white/20 text-white placeholder-white/70"
              />
            </div>
            <Textarea 
              placeholder="Tell us about your event requirements..."
              rows={5}
              className="bg-white/10 border-white/20 text-white placeholder-white/70"
            />
            <Button variant="outline-white" size="lg" className="w-full">
              Send Message
            </Button>
          </form>
        </div>

        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Quick Contact</h3>
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 text-lg">
            <div>📞 +919831177461</div>
            <div>✉️ info@silverevent.com</div>
            <div>📍 Kolkata, India</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventContact;