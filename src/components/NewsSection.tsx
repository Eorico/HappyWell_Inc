import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const newsItems = [
  {
    id: 1,
    title: "Manila Water switches to 100% Renewable Energy Retail Supply, marks first in the Philippine water sector",
    date: "February 4, 2026",
    excerpt: "Manila Water Company has taken a major step toward environmental sustainability while ensuring affordable water services for its East Zone operations.",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 2,
    title: "Manila Water's sewer line relocation in Quezon City nears completion",
    date: "February 3, 2026",
    excerpt: "Manila Water is nearing the completion of the relocation of its existing sewer pipelines in Quezon City to support the Metro Manila Subway Project.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 3,
    title: "La Mesa Ecopark celebrates landmark environmental achievements in 2025",
    date: "January 30, 2026",
    excerpt: "Under the stewardship of the Manila Water Foundation, the La Mesa Ecopark proudly marks 2025 as an impactful year for the environment.",
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&auto=format&fit=crop&q=60",
  },
  {
    id: 4,
    title: "Manila Water schedules more barangays for desludging in February",
    date: "January 29, 2026",
    excerpt: "Manila Water is urging customers across the East Zone to prepare their homes and communities as it releases its desludging schedule for February 2026.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&auto=format&fit=crop&q=60",
  },
];

const NewsSection = () => {
  return (
    <section id="news" className="py-20 bg-muted">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="text-sm font-heading font-semibold text-primary tracking-widest">LATEST UPDATES</span>
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mt-2">News & Updates</h2>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {newsItems.map((item, index) => (
            <article
              key={item.id}
              className="group bg-card rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
                <span className="absolute bottom-3 left-3 text-xs font-medium text-primary-foreground bg-primary/90 px-3 py-1 rounded-full">
                  News & Updates
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-center gap-2 text-muted-foreground mb-3">
                  <Calendar className="w-4 h-4" />
                  <time className="text-sm">{item.date}</time>
                </div>
                <h3 className="font-heading font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                  {item.excerpt}
                </p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
                >
                  Read More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="font-heading font-semibold border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            View All News
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
