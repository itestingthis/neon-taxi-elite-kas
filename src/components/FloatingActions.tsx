import { Phone, MessageCircle, Car } from 'lucide-react';
import { useState, useEffect } from 'react';

const FloatingActions = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const handleCall = () => {
    window.location.href = 'tel:+905555555555';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.');
    window.open(`https://wa.me/905555555555?text=${message}`, '_blank');
  };

  return (
    <>
      {/* Mobile floating buttons */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 md:hidden">
        <button
          onClick={handleCall}
          className="w-14 h-14 bg-gradient-to-r from-primary to-accent rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 animate-pulse-glow"
          aria-label="Call Now"
        >
          <Phone className="w-6 h-6 text-primary-foreground" />
        </button>
        
        <button
          onClick={handleWhatsApp}
          className="w-14 h-14 bg-green-500 hover:bg-green-600 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="WhatsApp"
        >
          <MessageCircle className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Desktop floating WhatsApp button */}
      <div className="hidden md:block">
        {isVisible && (
          <div className="fixed bottom-8 right-8 z-50">
            <button
              onClick={handleWhatsApp}
              className="group bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:scale-110 transition-all duration-300 flex items-center gap-3"
            >
              <MessageCircle className="w-6 h-6" />
              <span className="hidden group-hover:block animate-slide-in-left whitespace-nowrap">
                WhatsApp ile Yazın
              </span>
            </button>
          </div>
        )}
      </div>

      {/* Floating phone number banner for desktop */}
      <div className="hidden md:block">
        <div className="fixed top-0 left-0 right-0 z-40 bg-gradient-to-r from-primary to-accent text-primary-foreground py-2 text-center">
          <div className="flex items-center justify-center gap-4">
            <span className="font-semibold flex items-center gap-2">
              <Car className="w-5 h-5" />
              Gökhan Taxi - 7/24 Hizmet
            </span>
            <button
              onClick={handleCall}
              className="bg-white/20 hover:bg-white/30 px-4 py-1 rounded-full font-bold transition-colors duration-300 flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              +90 555 555 55 55
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingActions;