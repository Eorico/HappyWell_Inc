import { ArrowRight, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import news1 from '@/assets/news1.jpeg'
import news2 from '@/assets/news2.jpeg'
import news3 from '@/assets/news3.jpeg'
import news4 from '@/assets/news4.jpeg'

const newsItems = [
  {
    id: 1,
    title: "Happy Well Management and Collection Services Inc. Present the Walk the Line Program",
    date: "February 4, 2026",
    excerpt: "Happy Well Management and Collection Services Inc. (Happy Well) recently launched its Walk the Line Program, an initiative aimed at enhancing customer experience and service delivery.",
    image: news1,
  },
  {
    id: 2,
    title: "Happy Well blessed the company's launch opening of its new office in Imus Cavite",
    date: "February 3, 2026",
    excerpt: "Happy Well Management and Collection Services Inc. (Happy Well) was blessed with the opening of its new office in Imus Cavite.",
    image: news2,
  },
  {
    id: 3,
    title: "Happy Well go to schools to donate bags and school supplies to students",
    date: "January 30, 2026",
    excerpt: "Happy Well Management and Collection Services Inc. (Happy Well) visited several schools in the area to donate bags and school supplies to students.",
    image: news3,
  },
  {
    id: 4,
    title: "Happy Well prepares the student school supplies donation for 2026",
    date: "January 29, 2026",
    excerpt: "Happy Well Management and Collection Services Inc. (Happy Well) is preparing to distribute school supplies and bags to students in the community.",
    image: news4,
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
