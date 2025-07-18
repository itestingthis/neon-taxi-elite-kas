import { Plane, MapPin, Car, Route, Phone, MessageCircle } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: 'Havalimanı Transferi',
      description: 'Antalya Havalimanı\'ndan Kaş ve Kalkan\'a güvenli transfer hizmeti. 7/24 hizmet.',
      features: ['Antalya Havalimanı pickup', 'Kaş & Kalkan drop-off', 'Bagaj yardımı', 'Klimalı araç'],
      price: 'Fiyat: ₺XXX'
    },
    {
      icon: MapPin,
      title: 'Kaş & Kalkan İçi Ulaşım',
      description: 'Şehir içi ve bölge içi tüm ulaşım ihtiyaçlarınız için hızlı ve konforlu hizmet.',
      features: ['Şehir içi transfer', 'Otel-restoran ulaşımı', 'Günlük geziler', 'Alışveriş merkezleri'],
      price: 'Fiyat: ₺XX/km'
    },
    {
      icon: Car,
      title: 'VIP Araç Hizmeti',
      description: 'Özel günleriniz ve iş toplantılarınız için lüks araç kiralama hizmeti.',
      features: ['Lüks araç seçenekleri', 'Profesyonel sürücü', 'Özel etkinlikler', 'Corporate hizmet'],
      price: 'Fiyat: ₺XXX/gün'
    },
    {
      icon: Route,
      title: 'Özel Tur & Transfer',
      description: 'Kaş ve Kalkan çevresindeki turistik yerleri gezmek için özel tur hizmeti.',
      features: ['Turistik yer gezileri', 'Fotoğraf molları', 'Rehberlik hizmeti', 'Esnek program'],
      price: 'Fiyat: ₺XXX/tur'
    }
  ];

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Hizmetlerimiz</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kaş ve Kalkan bölgesinde ihtiyacınız olan tüm ulaşım hizmetleri için 
            tek durağınız. Profesyonel, güvenilir ve uygun fiyatlı.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="card-premium group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Service Icon */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:animate-pulse-glow">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-primary font-semibold">{service.price}</p>
                </div>
              </div>

              {/* Service Description */}
              <p className="text-muted-foreground mb-6 text-lg leading-relaxed">
                {service.description}
              </p>

              {/* Service Features */}
              <ul className="space-y-3">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <div className="mt-6 pt-6 border-t border-border/50">
                <button 
                  onClick={() => {
                    const message = encodeURIComponent(`Merhaba Gökhan Bey, ${service.title} hizmeti hakkında bilgi almak istiyorum.`);
                    window.open(`https://wa.me/905462558064?text=${message}`, '_blank');
                  }}
                  className="w-full btn-neon-outline text-center py-3 group"
                >
                  <span className="group-hover:text-primary-foreground transition-colors">
                    Bu Hizmet İçin Mesaj Gönder
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="card-premium max-w-2xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <Phone className="w-7 h-7 text-red-500" />
              Acil Durum? Hemen Arayın!
            </h3>
            <p className="text-muted-foreground mb-6">
              7/24 acil durum transferi için her zaman ulaşabilirsiniz
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.location.href = 'tel:+905462558064'}
                className="btn-neon flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                +90 546 255 80 64
              </button>
              <button 
                onClick={() => {
                  const message = encodeURIComponent('🚨 ACİL DURUM! Taksi ihtiyacım var.');
                  window.open(`https://wa.me/905462558064?text=${message}`, '_blank');
                }}
                className="btn-neon-outline flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Acil WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;