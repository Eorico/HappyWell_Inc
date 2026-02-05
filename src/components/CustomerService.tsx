import { ArrowRight, DollarSignIcon, Droplets, BuildingIcon, ListCheck, Settings, UserCheck2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import CusServ from "@/assets/cusServe.png";

const stats = [
  { icon: BuildingIcon, value: "19+", label: "Construction and water tanks compliant\n with the National Water Resources Board\n the water distribution industry's regulating body." },
  { icon: DollarSignIcon, value: "++", label: "Billing and Collections for water fees may\n be bundled with the Homeowner\n Associatio dues." },
  { icon: Droplets, value: "24/7", label: "Periodic improvements of water facilities" },
  { icon: ListCheck, value: "Licenses", label: "Application for permits, licenses, and\n electric power to expedite the operation \n of the water system." },
  { icon: Settings, value: "24/7", label: "Regular maintenance and rehabilitation\n of equipment and water facilities." },
  { icon: UserCheck2, value: "24/7", label: "Customer Service and water quality\n management." },  
];

const CustomerService = () => {
  return (
    <section id="customers" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">OUR SERVICE</span>
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2 mb-6">
              We put customers at the heart of our business.
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Providing efficient water systems for communities can be a challeng.
              Happy Well has the expertise and technical capabilities to be partner in
              deploying complete water channels system from planning, design, to construction.
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
              src={CusServ}
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
