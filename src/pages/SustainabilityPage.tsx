import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Leaf, Droplets, Recycle, TreePine, Sun, Award } from "lucide-react";

const initiatives = [
  {
    icon: Droplets,
    title: "Water Conservation",
    description: "Implementing advanced leak detection and water-saving technologies across our network.",
    stats: "15% reduction in water loss",
  },
  {
    icon: Recycle,
    title: "Wastewater Treatment",
    description: "Modern treatment facilities ensuring clean water returns safely to the environment.",
    stats: "100% compliance rate",
  },
  {
    icon: TreePine,
    title: "Watershed Protection",
    description: "Protecting and rehabilitating watershed areas to ensure sustainable water sources.",
    stats: "500 hectares protected",
  },
  {
    icon: Sun,
    title: "Renewable Energy",
    description: "Transitioning to solar and other renewable energy sources for our operations.",
    stats: "30% renewable energy use",
  },
];

const sdgGoals = [
  { number: 6, title: "Clean Water & Sanitation", color: "bg-[#26BDE2]" },
  { number: 11, title: "Sustainable Cities", color: "bg-[#FD9D24]" },
  { number: 13, title: "Climate Action", color: "bg-[#3F7E44]" },
  { number: 17, title: "Partnerships", color: "bg-[#19486A]" },
];

const achievements = [
  {
    year: "2025",
    title: "Environmental Excellence Award",
    description: "Recognized for outstanding environmental stewardship practices.",
  },
  {
    year: "2024",
    title: "ISO 14001 Certification",
    description: "Achieved international environmental management standard.",
  },
  {
    year: "2023",
    title: "Carbon Neutral Operations",
    description: "Offset 100% of operational carbon emissions.",
  },
];

const SustainabilityPage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center text-primary-foreground">
            <span className="text-sm font-heading font-semibold tracking-widest opacity-80">OUR COMMITMENT</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
              Sustainability
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              Building a sustainable future through responsible water management and environmental stewardship.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Leaf className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-4">
              Our Environmental Promise
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At Happy Well, we believe that sustainable water management is essential for the well-being of our communities and the planet. We are committed to minimizing our environmental footprint while delivering reliable water services.
            </p>
          </div>
        </div>
      </section>

      {/* Initiatives Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">KEY PROGRAMS</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Sustainability Initiatives
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {initiatives.map((initiative, index) => (
              <div
                key={index}
                className="bg-card rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all duration-300 group"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <initiative.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                  {initiative.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4">{initiative.description}</p>
                <div className="text-primary font-semibold text-sm">{initiative.stats}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDG Goals */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">GLOBAL GOALS</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              UN Sustainable Development Goals
            </h2>
            <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
              We align our operations with the United Nations Sustainable Development Goals to contribute to global sustainability efforts.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {sdgGoals.map((goal) => (
              <div
                key={goal.number}
                className={`${goal.color} rounded-2xl p-6 text-white text-center shadow-medium`}
              >
                <div className="text-4xl font-bold mb-2">{goal.number}</div>
                <div className="text-sm font-medium">{goal.title}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">MILESTONES</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Our Achievements
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-6">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex gap-6 bg-card rounded-xl p-6 shadow-medium"
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
                    <Award className="w-8 h-8 text-primary-foreground" />
                  </div>
                </div>
                <div>
                  <div className="text-sm font-semibold text-primary mb-1">{achievement.year}</div>
                  <h3 className="font-heading font-bold text-xl text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 md:px-8 text-center text-primary-foreground">
          <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">
            Join Us in Building a Sustainable Future
          </h2>
          <p className="opacity-90 mb-8 max-w-xl mx-auto">
            Learn more about how you can participate in our sustainability programs and help protect our water resources.
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary-foreground text-primary font-heading font-semibold rounded-full hover:bg-secondary transition-colors"
          >
            Get Involved
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SustainabilityPage;
