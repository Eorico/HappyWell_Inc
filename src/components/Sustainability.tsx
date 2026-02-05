import { ArrowRight, Check, Clock10, Power, AlertCircle, Droplets } from "lucide-react";
import { Button } from "@/components/ui/button";

const initiatives = [
  { icon: Droplets, label: "Ensured 24-hour water supply." },
  { icon: Check, label: "Safe, clean, and potable water,\n monitored daily for chlorine residual." },
  { icon: Power, label: "Fully powered with own generators\n incase at power failur." },
  { icon: Clock10, label: "Quick response time to customer concerns" },
  { icon: AlertCircle, label: "No add-on charges" },
];

const Sustainability = () => {
  return (
    <section id="sustainability" className="py-20 bg-forest relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-96 h-96 bg-[#19a55a] rounded-full blur-3xl" />
        <div className="absolute bottom--8 left-0 w-64 h-64 bg-[#19a55a] rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-sm font-heading font-semibold text-secondary tracking-widest">SUSTAINABILITY</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-foreground mt-2 mb-6">
            We deliver clean potable uninterrupted water supply to every home
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-10">
            Manila Water is driven to become a global leader in providing quality water and environmental services supportive of sustainable development for the benefit of generations—today and tomorrow.
          </p>

          {/* Initiatives */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-10 ">
            {initiatives.map((item, index) => (
              <div key={index} className="p-6 bg-primary-foreground/10 backdrop-blur-sm rounded-xl border border-primary-foreground/20 hover:bg-primary-foreground/20 transition-colors">
                <item.icon className="w-10 h-10 text-secondary mx-auto mb-3" />
                <span className="text-sm font-semibold text-primary-foreground">{item.label}</span>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-bold"
          >
            Explore Sustainability
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
