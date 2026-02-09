import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const contactInfo = [
  {
    icon: Phone,
    title: "Hotlines",
    details: [
      "Cavite: (046) 402-6759 / (046) 546-9175",
      "Manila: (02) 8519-4490",
    ],
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@happywell.com.ph", "support@happywell.com.ph"],
  },
  {
    icon: MapPin,
    title: "Main Office",
    details: [
      "Happy Well Inc. Corporate Center",
      "Cavite, Philippines",
    ],
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Monday - Friday: 8:00 AM - 5:00 PM"],
  },
];

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary to-primary/80">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center text-primary-foreground">
            <span className="text-sm font-heading font-semibold tracking-widest opacity-80">GET IN TOUCH</span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mt-2 mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl max-w-2xl mx-auto opacity-90">
              We're here to help. Reach out to us for inquiries, support, or partnership opportunities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-6 shadow-medium hover:shadow-strong transition-shadow"
              >
                <info.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="font-heading font-bold text-lg text-foreground mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-sm text-muted-foreground">
                      {detail}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <span className="text-sm font-heading font-semibold text-primary tracking-widest">SEND A MESSAGE</span>
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                We'd Love to Hear From You
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Juan"
                      className="bg-muted"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Dela Cruz"
                      className="bg-muted"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="juan@example.com"
                    className="bg-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+63 912 345 6789"
                    className="bg-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="How can we help you?"
                    className="bg-muted"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us more about your inquiry..."
                    rows={5}
                    className="bg-muted resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full md:w-auto px-8 py-3 bg-primary text-primary-foreground font-heading font-semibold rounded-full hover:bg-primary/90 transition-colors"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Map Placeholder */}
            <div className="space-y-6">
              <div>
                <span className="text-sm font-heading font-semibold text-primary tracking-widest">FIND US</span>
                <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mt-2 mb-6">
                  Visit Our Office
                </h2>
              </div>
              <div className="bg-muted rounded-2xl h-80 lg:h-96 flex items-center justify-center overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3864.538166822916!2d120.96858557597305!3d14.396111786066355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397d3cf6aaaaaab%3A0xf5c7f88b1eb7a8c6!2sHappy%20Well%20Management%20%26%20Collection%20Services%2C%20Inc.!5e0!3m2!1sen!2sph!4v1770596706653!5m2!1sen!2sph"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-2xl"
                />
              </div>
              
              {/* Quick Links */}
              <div className="bg-card rounded-xl p-6 shadow-medium">
                <h3 className="font-heading font-bold text-lg text-foreground mb-4">
                  Quick Links
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  <a href="/business-units" className="text-sm text-primary hover:underline">Service Areas</a>
                  <a href="/corporate-partners" className="text-sm text-primary hover:underline">Partnerships</a>
                  <a href="/#careers" className="text-sm text-primary hover:underline">Careers</a>
                  <a href="/#news" className="text-sm text-primary hover:underline">Latest News</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Section */}
      <section className="py-12 bg-primary">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-primary-foreground">
            <div>
              <h3 className="font-heading text-2xl font-bold mb-2">Emergency Water Service?</h3>
              <p className="opacity-90">For urgent water supply issues, call our 24/7 emergency hotline.</p>
            </div>
            <a
              href="tel:046-402-6759"
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary-foreground text-primary font-heading font-bold rounded-full hover:bg-secondary transition-colors"
            >
              <Phone className="w-5 h-5" />
              (046) 402-6759
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
