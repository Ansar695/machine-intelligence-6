import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Layout from "@/components/Layout";
import Home from "@/pages/home/Home";
import Services from "@/pages/our-services/Services";
import About from "@/pages/about/About";
import Portfolio from "@/pages/portfolio/Portfolio";
import Contact from "@/pages/contact/Contact";
import ClientsPartners from "@/pages/clients-partners/ClientsPartners";
import Industries from "@/pages/industries/Industries";
import Careers from "@/pages/careers/Careers";
import NotFound from "@/pages/not-found/not-found";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

function Router() {
  return (
    <Layout>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/clients-partners" element={<ClientsPartners />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/careers" element={<Careers />} />
        {/* Fallback to 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>);

}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="ui-theme">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </QueryClientProvider>);

}

export default App;