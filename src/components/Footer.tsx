import { Phone, MessageCircle, MapPin, Clock, Star, Car, AlertTriangle } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Hizmetlerimiz', href: '#services' },
    { name: 'Hakkımızda', href: '#about' },
    { name: 'Lokasyon', href: '#location' },
    { name: 'İletişim', href: '#contact' }
  ];

  const services = [
    'Havalimanı Transferi',
    'Şehir İçi Ulaşım', 
    'VIP Araç Hizmeti',
    'Özel Tur & Transfer'
  ];

  return (
    <footer className="bg-gradient-to-br from-secondary/20 to-background border-t border-border/50">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-black text-primary mb-4 flex items-center gap-3">
              <Car className="w-8 h-8" />
              Gökhan Taxi
            </h3>
            <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
              Kaş ve Kalkan bölgesinde 15+ yıldır profesyonel taksi hizmeti veriyoruz. 
              Güvenilir, hızlı ve 7/24 hizmet anlayışımızla yanınızdayız.
            </p>
            
            {/* Trust Indicators */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-primary">4.9/5</span>
              </div>
              <div className="text-sm text-muted-foreground">1000+ Mutlu Müşteri</div>
            </div>

            {/* Quick Contact */}
            <div className="space-y-3">
              <button
                onClick={() => window.location.href = 'tel:+905555555555'}
                className="flex items-center gap-3 text-primary hover:text-accent transition-colors group"
              >
                <Phone className="w-5 h-5 group-hover:animate-bounce" />
                <span className="font-bold">+90 555 555 55 55</span>
              </button>
              
              <button
                onClick={() => {
                  const message = encodeURIComponent('Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.');
                  window.open(`https://wa.me/905555555555?text=${message}`, '_blank');
                }}
                className="flex items-center gap-3 text-green-500 hover:text-green-400 transition-colors group"
              >
                <MessageCircle className="w-5 h-5 group-hover:animate-bounce" />
                <span className="font-bold">WhatsApp Chat</span>
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Hızlı Linkler</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors duration-300 hover:translate-x-1 transform inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold text-primary mb-6">Hizmetlerimiz</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-muted-foreground text-sm">
                  • {service}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Service Areas & Hours */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex items-center gap-3">
              <MapPin className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h5 className="font-bold text-primary">Hizmet Bölgemiz</h5>
                <p className="text-muted-foreground">Kaş, Kalkan, Antalya ve çevresi</p>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Clock className="w-6 h-6 text-primary flex-shrink-0" />
              <div>
                <h5 className="font-bold text-primary">Çalışma Saatleri</h5>
                <p className="text-muted-foreground">7/24 - Her zaman yanınızdayız</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-muted-foreground text-sm">
              © {currentYear} Gökhan Taxi. Tüm hakları saklıdır.
            </div>
            
            <div className="flex items-center gap-6 text-sm">
              <span className="bg-primary/20 text-primary px-3 py-1 rounded-full font-semibold">
                Profesyonel & Güvenilir Taksi Hizmeti
              </span>
            </div>
          </div>
        </div>

        {/* Emergency Contact Banner */}
        <div className="mt-8 bg-gradient-to-r from-primary/20 to-accent/20 border border-primary/30 rounded-xl p-6 text-center">
          <h5 className="text-lg font-bold text-primary mb-2 flex items-center justify-center gap-3">
            <AlertTriangle className="w-6 h-6 text-red-500" />
            Acil Durum? Hemen Arayın!
          </h5>
          <p className="text-muted-foreground mb-4">
            Gece geç saatlerde, havalimanı transferi veya acil ulaşım için
          </p>
          <button
            onClick={() => window.location.href = 'tel:+905555555555'}
            className="btn-neon text-lg px-8 py-3 flex items-center gap-3"
          >
            <Phone className="w-5 h-5" />
            +90 555 555 55 55
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;