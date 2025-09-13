const EventAbout = () => {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-wider text-primary font-semibold">Our Story</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-8">
            Welcome to The A2 Kreations
          </h2>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="text-lg leading-relaxed text-muted-foreground text-center space-y-6">
            <p>
              Founded with a passion for perfection and a love for storytelling, The A2 Kreations is your one-stop destination for bespoke event management. From grand weddings to impactful corporate conferences, exhibitions, and seminars, we specialize in curating moments that are as seamless as they are spectacular.
            </p>
            
            <p>
              Whether it's the magic of a wedding celebration or the precision of a corporate event, we bring your vision to life with creativity, flair, and flawless execution. We transform your dreams into reality with elegant themes, breathtaking décor, and personalized details.
            </p>
            
            <p>
              At The A2 Kreations, we understand the nuances of professional event planning — timing, branding, logistics, and guest experience. With meticulous planning and tech-enabled execution, we ensure that your event not only runs smoothly but also leaves a lasting impression.
            </p>
            
            <p className="text-xl font-semibold text-primary">
              Let's Create Something Unforgettable.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Creative Visioning</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">50+</div>
              <div className="text-sm text-muted-foreground">Events Crafted</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary mb-2">∞</div>
              <div className="text-sm text-muted-foreground">Memories Created</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventAbout;