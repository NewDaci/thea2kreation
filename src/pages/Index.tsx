import EventHeader from "@/components/EventHeader";
import EventHero from "@/components/EventHero";
import EventAbout from "@/components/EventAbout";
import EventServices from "@/components/EventServices";
import EventTestimonials from "@/components/EventTestimonials";
import EventContact from "@/components/EventContact";
import EventFooter from "@/components/EventFooter";

const Index = () => {
  return (
    <div className="min-h-screen">
      <EventHeader />
      <EventHero />
      <EventAbout />
      <EventServices />
      <EventTestimonials />
      <EventContact />
      <EventFooter />
    </div>
  );
};

export default Index;
