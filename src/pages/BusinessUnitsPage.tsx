import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, Users, Droplets, Calendar } from "lucide-react";
import business from '@/assets/business.png'

const barangayProjects = [
  {
    id: 1,
    barangay: "Barangay San Antonio",
    municipality: "Cavite City",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=60",
    description: "Complete water distribution network serving over 5,000 households with 24/7 water supply.",
    households: "5,200",
    status: "Operational",
    completedDate: "2024",
  },
  {
    id: 2,
    barangay: "Barangay Poblacion",
    municipality: "Bacoor City",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=600&auto=format&fit=crop&q=60",
    description: "Infrastructure upgrade project improving water pressure and quality for the urban center.",
    households: "8,500",
    status: "Operational",
    completedDate: "2023",
  },
  {
    id: 3,
    barangay: "Barangay Molino",
    municipality: "Bacoor City",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&auto=format&fit=crop&q=60",
    description: "New pipeline installation connecting remote areas to the main distribution system.",
    households: "12,000",
    status: "Operational",
    completedDate: "2024",
  },
  {
    id: 4,
    barangay: "Barangay Salinas",
    municipality: "Rosario",
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&auto=format&fit=crop&q=60",
    description: "Rural water supply project providing first-time access to clean water.",
    households: "2,800",
    status: "In Progress",
    completedDate: "2025",
  },
  {
    id: 5,
    barangay: "Barangay Bancal",
    municipality: "Carmona",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&auto=format&fit=crop&q=60",
    description: "Water treatment facility upgrade ensuring potable water standards.",
    households: "4,100",
    status: "Operational",
    completedDate: "2023",
  },
  {
    id: 6,
    barangay: "Barangay Alapan",
    municipality: "Imus City",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&auto=format&fit=crop&q=60",
    description: "Expansion project extending coverage to newly developed residential areas.",
    households: "6,700",
    status: "In Progress",
    completedDate: "2025",
  },
];

const projectStats = [
  { icon: MapPin, value: "45+", label: "Barangays Covered" },
  { icon: Users, value: "250K+", label: "Households Served" },
  { icon: Droplets, value: "99.5%", label: "Service Reliability" },
  { icon: Calendar, value: "24/7", label: "Water Availability" },
];

const BusinessUnitsPage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section 
        style={{
          backgroundImage: `linear-gradient(135deg,rgba(5,150,105,0.95),rgba(6,78,59,0.9)),url(${business})`
        }}
        className="
            relative 
            py-20 
            bg-cover bg-center from-primary to-primary/80
        ">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center text-primary-foreground">
            <span className="text-sm font-heading font-semibold tracking-widest opacity-80">PROJECTS</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
              Business Units
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Bringing clean, safe water to every barangay through sustainable infrastructure projects.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                <div className="font-heading text-3xl md:text-4xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">BARANGAY PROJECTS</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Water Infrastructure Per Barangay
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {barangayProjects.map((project) => (
              <div
                key={project.id}
                className="bg-card rounded-2xl overflow-hidden shadow-medium hover:shadow-strong transition-all duration-300 group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.barangay}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === "Operational" 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {project.status}
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-primary mb-2">
                    <MapPin className="w-4 h-4" />
                    <span className="text-xs font-semibold tracking-wider uppercase">
                      {project.municipality}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-3">
                    {project.barangay}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between text-sm border-t border-border pt-4">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{project.households} households</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-muted-foreground" />
                      <span className="text-muted-foreground">{project.completedDate}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section Placeholder */}
      <section className="py-16 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-8">
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground">
              Coverage Area Map
            </h2>
            <p className="text-muted-foreground mt-2">
              Explore our service coverage across Cavite province
            </p>
          </div>
          <div className="bg-card rounded-2xl h-96 flex items-center justify-center shadow-medium">
            <div className="text-center text-muted-foreground">
              <MapPin className="w-16 h-16 mx-auto mb-4 opacity-50" />
              <p className="font-heading font-semibold">Interactive Map Coming Soon</p>
              <p className="text-sm">View all barangay projects in your area</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BusinessUnitsPage;
