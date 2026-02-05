import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const IntegratedReport = () => {
  return (
    <section className="py-20 bg-forest relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#19a55a] rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#19a55a] rounded-full blur-2xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground mb-6">
            Raising The Bar Even Higher
          </h2>
          <p className="text-xl text-primary-foreground/80 mb-8">
            Discover our commitment to sustainable development and corporate transparency in our 2024 Integrated Report.
          </p>
          <Button
            size="lg"
            className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-heading font-bold text-lg px-8 py-6 shadow-teal"
          >
            Visit the Integrated Report Website
            <ArrowUpRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegratedReport;
