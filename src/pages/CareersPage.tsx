import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Briefcase, Users, Heart, TrendingUp, MapPin, Clock, ArrowRight } from "lucide-react";
import team from "@/assets/team.png";

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive medical, dental, and wellness programs for you and your family.",
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Training programs, mentorship, and clear paths for professional advancement.",
  },
  {
    icon: Users,
    title: "Great Team",
    description: "Work with passionate professionals committed to making a difference.",
  },
  {
    icon: Briefcase,
    title: "Work-Life Balance",
    description: "Flexible arrangements and generous leave policies.",
  },
];

const openPositions = [
  {
    id: 1,
    title: "Water Systems Engineer",
    department: "Engineering",
    location: "Cavite City",
    type: "Full-time",
    posted: "2 days ago",
  },
  {
    id: 2,
    title: "Customer Service Representative",
    department: "Operations",
    location: "Bacoor City",
    type: "Full-time",
    posted: "1 week ago",
  },
  {
    id: 3,
    title: "Environmental Specialist",
    department: "Sustainability",
    location: "Imus City",
    type: "Full-time",
    posted: "1 week ago",
  },
  {
    id: 4,
    title: "IT Support Technician",
    department: "Information Technology",
    location: "Cavite City",
    type: "Full-time",
    posted: "2 weeks ago",
  },
  {
    id: 5,
    title: "Financial Analyst",
    department: "Finance",
    location: "Cavite City",
    type: "Full-time",
    posted: "3 weeks ago",
  },
];

const CareersPage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="
          relative 
          py-20 
          bg-[linear-gradient(135deg,rgba(5,150,105,0.95),rgba(6,78,59,0.9)),url('src/assets/careers.png')]
          bg-cover bg-center from-primary to-primary/80
        ">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center text-primary-foreground">
            <span className="text-sm font-heading font-semibold tracking-widest opacity-80">JOIN OUR TEAM</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
              Careers at Happy Well
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Be part of a team that's making a difference in people's lives every day.
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-heading font-semibold text-primary tracking-widest">WHY HAPPY WELL</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                Build Your Career With Us
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                At Happy Well, we believe our employees are our greatest asset. We foster a culture of innovation, collaboration, and continuous learning. Join us and contribute to our mission of providing clean, safe water to every Filipino household.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-heading font-semibold text-foreground text-sm">{benefit.title}</h4>
                      <p className="text-muted-foreground text-xs mt-1">{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img
                src={team}
                alt="Happy Well Team"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">OPPORTUNITIES</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Open Positions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            {openPositions.map((position) => (
              <a
                key={position.id}
                href="#"
                className="group block bg-card rounded-xl p-6 shadow-medium hover:shadow-strong transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <h3 className="font-heading font-bold text-xl text-foreground group-hover:text-primary transition-colors">
                      {position.title}
                    </h3>
                    <p className="text-primary text-sm font-medium mt-1">{position.department}</p>
                    <div className="flex flex-wrap items-center gap-4 mt-3 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {position.posted}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-primary font-semibold">
                    Apply Now
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-4">Don't see a position that fits?</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:bg-primary/90 transition-colors"
            >
              Send Your Resume
            </a>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center text-primary-foreground">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Our Culture
          </h2>
          <p className="opacity-90 max-w-2xl mx-auto">
            We value integrity, innovation, and teamwork. At Happy Well, every employee plays a vital role in our mission to deliver clean water and excellent service to our communities.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CareersPage;
