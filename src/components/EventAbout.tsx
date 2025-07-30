const EventAbout = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">My Story</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-8">
            About Silver Sand Event Management
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-lg leading-relaxed text-muted-foreground text-center space-y-6">
            <p>
              We at Silversand Events are the best Event Management company in Kolkata or the best event planner in Kolkata where moments are made, and memories are crafted with care. Since 1998, we've been at the heart of unforgettable experiences — designing and delivering events that inspire, celebrate, and connect.
            </p>
            
            <p>
              From high-impact corporate events to vibrant social gatherings and prestigious government functions, we bring creativity, precision, and heart to every detail. Our foundation is built on over 20 years of marketing insight and a passion for storytelling through events.
            </p>
            
            <p>
              With more than 1,000 successful events across India, we don't just plan — we create experiences that live on long after the final applause.
            </p>
            
            <p className="text-xl font-semibold text-primary">
              Welcome to a place where your vision becomes our mission.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1998</div>
              <div className="text-sm text-muted-foreground">Year Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">90%</div>
              <div className="text-sm text-muted-foreground">Repeat Clients</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">1000+</div>
              <div className="text-sm text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <div className="text-sm text-muted-foreground">Trusted Clients</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAbout;