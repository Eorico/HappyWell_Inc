import { ArrowRight, Users, Droplets, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import waterInfrastructure from "@/assets/water-infrastructure.jpg";

const stats = [
  { icon: Users, value: "7.3M+", label: "Customers Served" },
  { icon: Building2, value: "23", label: "Cities & Municipalities" },
  { icon: Droplets, value: "24/7", label: "Water Service" },
];

const CustomerService = () => {
  return (
    <section id="customers" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">CUSTOMER SERVICE</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              We put customers at the heart of our business.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Manila Water provides water supply, wastewater, and sanitation services to over 7.3 million customers in 23 cities and municipalities of the East Zone of Metro Manila and Rizal Province.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <stat.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="font-heading font-bold text-2xl text-foreground">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>

            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 font-heading font-semibold">
              Learn More
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-teal rounded-2xl opacity-10 blur-xl" />
            <img
              src={waterInfrastructure}
              alt="Manila Water Infrastructure"
              className="relative rounded-2xl shadow-medium w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CustomerService;
