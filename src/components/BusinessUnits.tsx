import { ArrowUpRight } from "lucide-react";

const businessUnits = [
  {
    id: 1,
    name: "Happy Well Philippine Ventures",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=60",
    description: "Expanding water services across the Philippines",
  },
  {
    id: 2,
    name: "Happy Well Asia Pacific",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60",
    description: "Regional operations and partnerships",
  },
  {
    id: 3,
    name: "Happy Well Infratech Solutions",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=60",
    description: "Engineering and infrastructure development",
  },
];

const BusinessUnits = () => {
  return (
    <section id="business" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-heading font-semibold text-primary tracking-widest">OUR BUSINESS UNITS</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">Growing Beyond Borders</h2>
        </div>

        {/* Business Units Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {businessUnits.map((unit) => (
            <a
              key={unit.id}
              href="#"
              className="group relative h-80 rounded-2xl overflow-hidden shadow-medium"
            >
              {/* Background Image */}
              <img
                src={unit.image}
                alt={unit.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="font-heading font-bold text-xl text-primary-foreground mb-2 group-hover:text-secondary transition-colors">
                  {unit.name}
                </h3>
                <p className="text-sm text-primary-foreground/80 mb-4">{unit.description}</p>
                <div className="flex items-center gap-2 text-sm font-semibold text-secondary">
                  Learn More
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessUnits;
