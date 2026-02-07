import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, FileText, CreditCard, Droplets, HelpCircle, Clock, Users, CheckCircle } from "lucide-react";
import cusServe from "@/assets/cusServe.png";

const services = [
  {
    icon: FileText,
    title: "Apply for New Connection",
    description: "Start your water service application online with our simple process.",
    link: "#",
  },
  {
    icon: CreditCard,
    title: "Pay Your Bill",
    description: "Multiple payment options available for your convenience.",
    link: "#",
  },
  {
    icon: Droplets,
    title: "Report Water Issues",
    description: "Report leaks, low pressure, or water quality concerns.",
    link: "#",
  },
  {
    icon: HelpCircle,
    title: "FAQs & Support",
    description: "Find answers to common questions about our services.",
    link: "#",
  },
];

const stats = [
  { icon: Users, value: "250K+", label: "Happy Customers" },
  { icon: CheckCircle, value: "99.5%", label: "Service Reliability" },
  { icon: Clock, value: "24/7", label: "Customer Support" },
  { icon: Phone, value: "1627", label: "Hotline" },
];

const CustomersPage = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center text-primary-foreground">
            <span className="text-sm font-heading font-semibold tracking-widest opacity-80">CUSTOMER SERVICE</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
              How Can We Help You?
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              We're committed to providing excellent service to all our valued customers.
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

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-heading font-semibold text-primary tracking-widest">OUR SERVICES</span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2">
              Customer Services
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <a
                key={index}
                href={service.link}
                className="group bg-card rounded-2xl p-6 shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-1"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                  <service.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Service Image Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-heading font-semibold text-primary tracking-widest">DEDICATED SUPPORT</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                We're Here For You
              </h2>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Our customer service team is dedicated to providing prompt and efficient assistance for all your water service needs. Whether you have billing inquiries, service requests, or technical concerns, we're just a call away.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">24/7 Emergency Response Team</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Online Account Management</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Multiple Payment Channels</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">Bilingual Support Staff</span>
                </li>
              </ul>
            </div>
            <div className="relative">
              <img
                src={cusServe}
                alt="Customer Service Team"
                className="rounded-2xl shadow-strong w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">Need Immediate Assistance?</h3>
              <p className="opacity-90">Our customer service hotline is available to help you.</p>
            </div>
            <a
              href="/contact"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-heading font-bold rounded-full hover:bg-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CustomersPage;
