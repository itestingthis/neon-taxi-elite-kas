import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServicesSection from '@/components/ServicesSection';
import LocationSection from '@/components/LocationSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import FloatingActions from '@/components/FloatingActions';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Floating Action Buttons */}
      <FloatingActions />
      
      {/* Main Content */}
      <main className="pt-0 md:pt-12">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <LocationSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
