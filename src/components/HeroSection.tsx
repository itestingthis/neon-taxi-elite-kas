import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export const HeroSection = () => {
  const phoneNumber = "+905462558064";
  const whatsappNumber = "905462558064";

  const makeCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const sendWhatsAppMessage = (message = "Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.") => {
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
        style={{ backgroundImage: "url('/src/assets/kalkan-kas-hero.jpg')" }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/80 via-blue-600/70 to-slate-900/90" />
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
          Kaş & Kalkan
          <span className="block text-primary-foreground">Güvenilir Taksi Hizmeti</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          7/24 profesyonel transfer hizmeti ile güvenle seyahat edin
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <Button 
            onClick={makeCall}
            size="lg"
            className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Phone className="w-6 h-6 mr-2" />
            Hemen Ara
          </Button>
          
          <Button 
            onClick={() => sendWhatsAppMessage()}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white hover:text-slate-900 px-8 py-6 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            WhatsApp
          </Button>
        </div>
      </div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>
    </section>
  );
};