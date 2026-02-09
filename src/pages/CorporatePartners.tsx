import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Handshake, Building2, Users, Award } from "lucide-react";
import parter1 from "@/assets/partner1.png";
import parter2 from "@/assets/partner2.png";
import parter3 from "@/assets/partner3.png";
import parter4 from "@/assets/partner4.png";
import parter5 from "@/assets/partner5.png";
import parter6 from "@/assets/partner6.png";
import parter7 from "@/assets/partner7.png";
import parter8 from "@/assets/partner8.png";
import partner from "@/assets/partners.png";

const partners = [
  {
    id: 1,
    name: "Real Estate Developers",
    logo: parter1,
    description: "Real estate developers collaborating on water infrastructure projects.",
    category: "CENQ",
  },
  {
    id: 2,
    name: "Business Corporations",
    logo: parter2,
    description: "Land Development and Corporate Social Responsibility initiatives.",
    category: "LYNVILLE",
  },
  {
    id: 3,
    name: "PARK HOMES INC.",
    logo: parter3,
    description: "A first that lasts in the Philippines.",
    category: "PH FIRST",
  },
  {
    id: 4,
    name: "LAND INC.",
    logo: parter4,
    description: "Sustainable urban development and housing projects.",
    category: "MICARA LAND INC.",
  },
  {
    id: 5,
    name: "PROPERTY COMPANY OF FRIENDS, INC.",
    logo: parter5,
    description: "Creating communities with care and excellence.",
    category: "PRO FRIENDS",
  },
  {
    id: 6,
    name: "Private Sector Partners",
    logo: parter6,
    description: "Technology and innovation in water services.",
    category: "KA8NOS",
  },
  {
    id: 7,
    name: "KA8NOS ENVIRONMENTAL, INC.",
    logo: parter7,
    description: "KA8NOS Environmental, Inc. is a leading provider of environmental solutions.",
    category: "ENDURALAND",
  },
  {
    id: 8,
    name: "DEVELOPMENT CORPORATION",
    logo: parter8,
    description: "Development Corporation is committed to sustainable growth and community development.",
    category: "CIUDADES",
  },
];

const stats = [
  { icon: Handshake, value: "50+", label: "Active Partnerships" },
  { icon: Building2, value: "25", label: "Government Partners" },
  { icon: Users, value: "100K+", label: "Communities Served" },
  { icon: Award, value: "15", label: "Years of Collaboration" },
];

const CorporatePartners = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section  
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(5,150,105,0.95),rgba(6,78,59,0.9)),url(${partner})`
        }}
        className="
            relative 
            py-20 
            bg-cover bg-center from-primary to-primary/80
        ">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center text-primary-foreground">
            <span className="text-sm font-heading font-semibold tracking-widest opacity-80">PARTNERSHIPS</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
              Corporate Partners
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Building strong partnerships to deliver sustainable water solutions for every Filipino community.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">OUR PARTNERS</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Working Together for Water Security
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {partners.map((partner) => (
              <div
                key={partner.id}
                className="bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-shadow duration-300 group"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={partner.logo}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold text-primary tracking-wider uppercase">
                    {partner.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl text-foreground mt-2 mb-3">
                    {partner.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
            Interested in Partnering With Us?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join us in our mission to provide clean, safe, and sustainable water services to communities across the Philippines.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:bg-primary/90 transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CorporatePartners;
