import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Award, Globe, Shield, Users, Target, Heart, Droplets, Building } from "lucide-react";
import AboutImg from "@/assets/aboutImg.png";
import about from "@/assets/happyWellBg.png";

const values = [
  { icon: Award, title: "Excellence", description: "We strive for the highest standards in water service delivery, continuously improving our operations and customer experience." },
  { icon: Globe, title: "Sustainability", description: "Environmental stewardship is at the core of our operations, ensuring clean water for generations to come." },
  { icon: Shield, title: "Reliability", description: "Our 24/7 commitment ensures uninterrupted water supply to all our communities." },
  { icon: Heart, title: "Community Care", description: "We believe in building strong relationships with the communities we serve." },
];

const milestones = [
  { year: "2006", title: "Foundation", description: "Happy Well Inc. was founded by a group of families with 40+ years in real estate development." },
  { year: "2010", title: "First Major Expansion", description: "Expanded operations to serve multiple municipalities in Cavite." },
  { year: "2015", title: "Infrastructure Upgrade", description: "Major investment in water treatment facilities and pipeline infrastructure." },
  { year: "2020", title: "Digital Transformation", description: "Launched online customer portal and mobile app for better service." },
  { year: "2024", title: "Sustainability Initiative", description: "Committed to 100% renewable energy for all operations by 2030." },
];

const leadership = [
  { name: "Juan Dela Cruz", position: "Chief Executive Officer", description: "25+ years in utilities management" },
  { name: "Maria Santos", position: "Chief Operations Officer", description: "Expert in water infrastructure" },
  { name: "Pedro Reyes", position: "Chief Financial Officer", description: "Former banking executive" },
  { name: "Ana Garcia", position: "Chief Technology Officer", description: "Digital transformation leader" },
];

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Header />

      {/* Hero Section */}
      <section  
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(5,150,105,0.95),rgba(6,78,59,0.9)),url(${about})`
        }}
        className="
            relative 
            py-20 
            bg-cover bg-center from-primary to-primary/80
        ">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-secondary rounded-full blur-3xl" />
        </div>
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="text-sm font-heading font-semibold text-secondary tracking-widest">ABOUT US</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mt-2 mb-6">
              Building Strong Communities and Happy Homes
            </h1>
            <p className="text-lg text-primary-foreground/90">
              For over 18 years, Happy Well Inc. has been dedicated to providing clean, safe, and reliable water services to communities across Cavite.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-heading font-semibold text-primary tracking-widest">OUR STORY</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                From Real Estate to Water Services
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Happy Well Inc. was founded in 2006 by a group of families who had been in real estate development for over 40 years. As developers, they were well aware of the problems typically encountered with deploying water systems in new communities.
                </p>
                <p>
                  Understanding these challenges firsthand, they decided to diversify into the water utility business to better serve their many thriving communities. What started as a solution for their own developments has grown into a trusted water service provider for multiple municipalities.
                </p>
                <p>
                  Today, Happy Well Inc. serves thousands of households across Cavite, maintaining our founding commitment to care in every drop we deliver.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl blur-xl" />
              <img
                src={AboutImg}
                alt="Happy Well Operations"
                className="relative rounded-2xl shadow-medium w-full h-[400px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To provide safe, reliable, and affordable water services to our communities while promoting environmental sustainability and social responsibility. We are committed to continuous improvement in our operations and customer service.
              </p>
            </div>
            <div className="bg-card p-8 rounded-2xl shadow-soft">
              <div className="p-3 bg-secondary/10 rounded-lg w-fit mb-4">
                <Droplets className="w-8 h-8 text-secondary" />
              </div>
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-muted-foreground">
                To be the most trusted and innovative water utility company in the Philippines, recognized for our commitment to excellence, environmental stewardship, and community development.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">CORE VALUES</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              What Drives Us Every Day
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-soft hover:shadow-medium transition-shadow">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4">
                  <value.icon className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-heading font-bold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-sm text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">OUR JOURNEY</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Milestones Through the Years
            </h2>
          </div>
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-primary/20 hidden md:block" />
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex flex-col md:flex-row items-center gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                    <div className="bg-card p-6 rounded-xl shadow-soft">
                      <span className="text-2xl font-heading font-bold text-primary">{milestone.year}</span>
                      <h4 className="font-heading font-bold text-foreground mt-2">{milestone.title}</h4>
                      <p className="text-sm text-muted-foreground mt-1">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 bg-primary rounded-full border-4 border-background z-10" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">LEADERSHIP</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Meet Our Team
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-card p-6 rounded-xl shadow-soft text-center group hover:shadow-medium transition-shadow">
                <div className="w-24 h-24 bg-gradient-to-br from-primary to-primary/60 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <h4 className="font-heading font-bold text-foreground">{leader.name}</h4>
                <p className="text-sm text-primary font-medium">{leader.position}</p>
                <p className="text-xs text-muted-foreground mt-2">{leader.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">18+</div>
              <p className="text-primary-foreground/80 text-sm mt-2">Years of Service</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">50K+</div>
              <p className="text-primary-foreground/80 text-sm mt-2">Households Served</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">15</div>
              <p className="text-primary-foreground/80 text-sm mt-2">Municipalities</p>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-heading font-bold text-primary-foreground">500+</div>
              <p className="text-primary-foreground/80 text-sm mt-2">Dedicated Employees</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AboutPage;
