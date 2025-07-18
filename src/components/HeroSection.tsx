import { Phone, MessageCircle, Star, Car, Shield, Clock, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBackground from '@/assets/kalkan-kas-hero.jpg';

const HeroSection = () => {
  const handleCall = () => {
    window.location.href = 'tel:+905462558064';
  };

  const handleWhatsApp = () => {
    const message = encodeURIComponent('Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.');
    window.open(`https://wa.me/905462558064?text=${message}`, '_blank');
  };

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(13, 18, 30, 0.8), rgba(13, 18, 30, 0.6)), url(${heroBackground})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90"></div>
      
      {/* Floating particles effect */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Trust indicators */}
        <div className="flex items-center justify-center gap-2 mb-6 fade-in-up">
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-primary text-primary" />
            ))}
          </div>
          <span className="text-primary font-semibold">15+ Yıl Deneyim</span>
        </div>

        {/* Main headline */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-tight fade-in-up">
          <span className="text-gradient">Kaş & Kalkan</span>
          <br />
          <span className="text-foreground">Bölgesinde</span>
          <br />
          <span className="text-primary">7/24 VIP Taksi</span>
          <br />
          <span className="text-foreground">Hizmeti</span>
        </h1>

        {/* Driver name */}
        <div className="mb-8 fade-in-up">
          <p className="text-2xl md:text-3xl font-bold text-primary mb-2">Gökhan Taxi</p>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Hemen arayın veya WhatsApp'tan yazın, hızlıca yanınızdayım!
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 fade-in-up">
          <Button 
            onClick={handleCall}
            className="btn-neon group min-w-[200px] text-lg"
          >
            <Phone className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            Hemen Ara
          </Button>
          
          <Button 
            onClick={handleWhatsApp}
            className="btn-neon-outline group min-w-[200px] text-lg"
          >
            <MessageCircle className="w-6 h-6 mr-3 group-hover:animate-bounce" />
            WhatsApp Chat
          </Button>
        </div>

        {/* Key features */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto fade-in-up">
          {[
            { label: 'Profesyonel', icon: Car },
            { label: 'Güvenilir', icon: Shield },
            { label: 'Hızlı', icon: Users },
            { label: '7/24', icon: Clock }
          ].map((feature, index) => (
            <div 
              key={index} 
              className="card-premium text-center py-4"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <feature.icon className="w-8 h-8 text-primary mx-auto mb-2" />
              <p className="font-semibold text-primary">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full animate-pulse mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;