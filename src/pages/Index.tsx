import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import NewsSection from "@/components/NewsSection";
import IntegratedReport from "@/components/IntegratedReport";
import CustomerService from "@/components/CustomerService";
import AboutSection from "@/components/AboutSection";
import BusinessUnits from "@/components/BusinessUnits";
import Sustainability from "@/components/Sustainability";
import Careers from "@/components/Careers";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <TopBar />
      <Header />
      <main>
        <Hero />
        <NewsSection />
        <IntegratedReport />
        <CustomerService />
        <AboutSection />
        <BusinessUnits />
        <Sustainability />
        <Careers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
