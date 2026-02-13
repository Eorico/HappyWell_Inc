import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Calendar, ArrowRight } from "lucide-react";
import news1 from "@/assets/news1.jpeg";
import news2 from "@/assets/news2.jpeg";
import news3 from "@/assets/news3.jpeg";
import news4 from "@/assets/news4.jpeg";
import news from "@/assets/news.png";

const newsArticles = [
  {
    id: 1,
    title: "Happy Well Expands Water Services to 5 New Barangays",
    excerpt: "The company announces major infrastructure expansion reaching thousands of new households in Cavite province.",
    image: news1,
    date: "February 5, 2026",
    category: "Expansion",
  },
  {
    id: 2,
    title: "New Water Treatment Facility Opens in Bacoor",
    excerpt: "State-of-the-art treatment plant ensures cleaner, safer water for communities in the growing city.",
    image: news2,
    date: "January 28, 2026",
    category: "Infrastructure",
  },
  {
    id: 3,
    title: "Community Outreach Program Reaches 10,000 Students",
    excerpt: "Water conservation education initiative successfully engages schools across the service area.",
    image: news3,
    date: "January 15, 2026",
    category: "Community",
  },
  {
    id: 4,
    title: "Happy Well Recognized for Environmental Excellence",
    excerpt: "Company receives national award for sustainable water management practices and environmental stewardship.",
    image: news4,
    date: "January 8, 2026",
    category: "Awards",
  },
  {
    id: 5,
    title: "24/7 Customer Service Center Now Available",
    excerpt: "Enhanced customer support system provides round-the-clock assistance for all service inquiries.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&auto=format&fit=crop&q=60",
    date: "December 20, 2025",
    category: "Service",
  },
  {
    id: 6,
    title: "Partnership with Local Government Units Strengthened",
    excerpt: "New memorandum of agreement signed to accelerate water infrastructure development in rural areas.",
    image: "https://images.unsplash.com/photo-1556745757-8d76bdb6984b?w=600&auto=format&fit=crop&q=60",
    date: "December 12, 2025",
    category: "Partnership",
  },
];

const NewsPage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section  
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(5,150,105,0.95),rgba(6,78,59,0.9)),url(${news})`
        }}
        className="
            relative 
            py-20 
            bg-cover bg-center from-primary to-primary/80
        ">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center text-primary-foreground">
            <span className="text-sm font-heading font-semibold tracking-widest opacity-80">LATEST UPDATES</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
              News & Announcements
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Stay informed about our latest projects, initiatives, and community programs.
            </p>
          </div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Main Featured */}
            <a href="#" className="group relative h-96 rounded-2xl overflow-hidden shadow-strong">
              <img
                src={newsArticles[0].image}
                alt={newsArticles[0].title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <span className="inline-block px-3 py-1 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full mb-3">
                  {newsArticles[0].category}
                </span>
                <h2 className="font-heading font-bold text-2xl md:text-3xl text-primary-foreground mb-3 group-hover:text-secondary transition-colors">
                  {newsArticles[0].title}
                </h2>
                <p className="text-primary-foreground/80 mb-3">{newsArticles[0].excerpt}</p>
                <div className="flex items-center gap-2 text-primary-foreground/60 text-sm">
                  <Calendar className="w-4 h-4" />
                  {newsArticles[0].date}
                </div>
              </div>
            </a>

            {/* Secondary Featured */}
            <div className="space-y-4">
              {newsArticles.slice(1, 3).map((article) => (
                <a
                  key={article.id}
                  href="#"
                  className="group flex gap-4 bg-card rounded-xl overflow-hidden shadow-medium hover:shadow-strong transition-shadow"
                >
                  <div className="w-32 h-32 flex-shrink-0">
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 flex flex-col justify-center">
                    <span className="text-xs font-semibold text-primary">{article.category}</span>
                    <h3 className="font-heading font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <div className="flex items-center gap-2 text-muted-foreground text-xs mt-2">
                      <Calendar className="w-3 h-3" />
                      {article.date}
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

      {/* Facebook Feed Section */}
          <div className="mb-16">
            <div className="text-center mb-8">
              <span className="text-sm font-heading font-semibold text-primary tracking-widest">SOCIAL MEDIA</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
                Latest from Facebook
              </h2>
              <p className="text-muted-foreground mt-2">Follow us on <a href="https://www.facebook.com/happywellph" target="_blank" rel="noopener noreferrer" className="text-primary font-semibold hover:underline">Facebook</a> for real-time updates</p>
            </div>
            <div className="flex justify-center">
              <div className="w-full max-w-lg rounded-2xl overflow-hidden shadow-medium bg-card">
                <iframe
                  src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fhappywellph&tabs=timeline&width=500&height=600&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                  width="500"
                  height="600"
                  className="w-full border-none overflow-hidden"
                  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* All News Grid */}
          <div className="text-center mb-8">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">ALL NEWS</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              More Stories
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.slice(3).map((article) => (
              <a
                key={article.id}
                href="#"
                className="group bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                    {article.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg text-foreground mt-2 mb-3 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar className="w-4 h-4" />
                      {article.date}
                    </div>
                    <ArrowRight className="w-4 h-4 text-primary group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NewsPage;
