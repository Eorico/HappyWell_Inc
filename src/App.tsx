import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import CorporatePartners from "./pages/CorporatePartners";
import BusinessUnitsPage from "./pages/BusinessUnitsPage";
import Contact from "./pages/Contact";
import NewsPage from "./pages/NewsPage";
import CustomersPage from "./pages/CustomersPage";
import SustainabilityPage from "./pages/SustainabilityPage";
import CareersPage from "./pages/CareersPage";
import AboutPage from "./pages/AboutPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/corporate-partners" element={<CorporatePartners />} />
          <Route path="/business-units" element={<BusinessUnitsPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<NewsPage />} />
          <Route path="/customers" element={<CustomersPage />} />
          <Route path="/sustainability" element={<SustainabilityPage />} />
          <Route path="/careers" element={<CareersPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
