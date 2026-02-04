import { ArrowRight, Briefcase, GraduationCap, Heart, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  { icon: TrendingUp, title: "Growth", description: "Career development" },
  { icon: Heart, title: "Purpose", description: "Community impact" },
  { icon: GraduationCap, title: "Learning", description: "Continuous training" },
  { icon: Briefcase, title: "Stability", description: "Secure employment" },
];

const Careers = () => {
  return (
    <section id="careers" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">CAREERS</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              Let's tap into your full potential.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join the Manila Water team and make waves in the water industry. Enjoy a rewarding career that uplifts communities and changes lives. Together, let's thrive with passion and purpose.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-muted rounded-lg">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <benefit.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground text-sm">{benefit.title}</h4>
                    <p className="text-xs text-muted-foreground">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
              Explore Careers
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Image/Visual */}
          <div className="relative">
            <div className="aspect-square bg-gradient-teal rounded-3xl flex items-center justify-center overflow-hidden">
              <div className="text-center p-8">
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary-foreground/20 backdrop-blur-sm flex items-center justify-center">
                  <Briefcase className="w-16 h-16 text-primary-foreground" />
                </div>
                <h3 className="font-heading text-3xl font-bold text-primary-foreground mb-2">Join Our Team</h3>
                <p className="text-primary-foreground/80">Be part of something meaningful</p>
              </div>
            </div>
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary rounded-2xl -z-10 opacity-50" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent rounded-2xl -z-10 opacity-30" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Careers;
