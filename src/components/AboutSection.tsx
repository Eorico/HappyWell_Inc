import { ArrowRight, Award, Globe, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import waterDrop from "@/assets/water-drop.jpg";

const values = [
  { icon: Award, title: "Excellence", description: "Industry leader in water services" },
  { icon: Globe, title: "Sustainability", description: "Environmental stewardship" },
  { icon: Shield, title: "Reliability", description: "24/7 service commitment" },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative order-2 lg:order-1">
            <div className="absolute -inset-4 bg-gradient-teal rounded-2xl opacity-10 blur-xl" />
            <img
              src={waterDrop}
              alt="Clean Water"
              className="relative rounded-2xl shadow-medium w-full"
            />
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">ABOUT MANILA WATER</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              We are committed to make a difference.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Manila Water Company, Inc. is a publicly listed company that provides clean, safe water and sanitation services to our customers. Our extensive experience in the Philippine Water Sector ranges from water treatment and distribution to wastewater management and sanitation services.
            </p>

            {/* Values */}
            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-4 p-4 bg-card rounded-lg shadow-soft">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-heading font-bold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
              Read More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
