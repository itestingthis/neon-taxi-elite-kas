import { MapPin, Navigation, Clock, Phone, MessageCircle, Shield, Zap, DollarSign } from 'lucide-react';

// Force refresh for MessageCircle import
const LocationSection = () => {
  const locations = [
    { name: 'Kaş Merkez', time: '5 dk', popular: true },
    { name: 'Kalkan', time: '15 dk', popular: true },
    { name: 'Antalya Kaş Kalkan', time: '10 dk', popular: true },
    { name: 'Antalya Havalimanı', time: '45 dk', popular: true },
    { name: 'Demre', time: '20 dk', popular: false },
    { name: 'Myra Antik Kenti', time: '25 dk', popular: false },
    { name: 'Saklıkent Kanyonu', time: '30 dk', popular: false }
  ];

  return (
    <section id="location" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Hizmet Bölgemiz</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Kaş, Kalkan ve çevre bölgelerde her noktaya ulaşım hizmeti veriyoruz.
            Bölgeyi çok iyi bildiğim için en hızlı rotayı kullanırım.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Map Section */}
          <div className="card-premium p-0 overflow-hidden">
            <div className="relative h-96 bg-gradient-to-br from-secondary/20 to-primary/10 flex items-center justify-center">
              {/* Map placeholder - Replace with real Google Maps embed */}
              <div className="text-center">
                <MapPin className="w-16 h-16 text-primary mx-auto mb-4 animate-bounce" />
                <h3 className="text-xl font-bold text-primary mb-2">Interaktif Harita</h3>
                <p className="text-muted-foreground">Google Maps entegrasyonu</p>
              </div>
              
              {/* You can replace this with actual Google Maps embed */}
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Antalya+Kaş+Kalkan&zoom=12"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Navigation className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold">Ana Çalışma Bölgem</h3>
              </div>
              <p className="text-muted-foreground">
                Kaş ve Kalkan merkezli olarak, Antalya'nın bu güzel bölgesinde 
                tüm ulaşım ihtiyaçlarınıza hizmet veriyorum.
              </p>
            </div>
          </div>

          {/* Popular Destinations */}
          <div className="space-y-6">
            <div className="card-premium">
              <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
                <Clock className="w-7 h-7" />
                Popüler Destinasyonlar
              </h3>
              
              <div className="space-y-4">
                {locations.map((location, index) => (
                  <div 
                    key={index}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all duration-300 hover:scale-105 ${
                      location.popular 
                        ? 'border-primary/30 bg-primary/5' 
                        : 'border-border/50 bg-secondary/30'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <MapPin className={`w-5 h-5 ${location.popular ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className="font-semibold">{location.name}</span>
                      {location.popular && (
                        <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">
                          Popüler
                        </span>
                      )}
                    </div>
                    <span className="text-primary font-bold">{location.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact for Route Info */}
            <div className="card-premium">
              <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6" />
                Gitme İstediğiniz Yer Listede Yok mu?
              </h3>
              <p className="text-muted-foreground mb-6">
                Kaş ve Kalkan çevresindeki tüm noktalara gidebilirim. 
                Rotanız için mesaj atın, hemen fiyat ve süre bilgisi vereyim.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={() => {
                    const message = encodeURIComponent('Merhaba Gökhan Bey, gitmek istediğim adres için fiyat öğrenmek istiyorum: [ADRES YAZIN]');
                    window.open(`https://wa.me/905462558064?text=${message}`, '_blank');
                  }}
                  className="btn-neon-outline flex-1 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Rota Sorgula
                </button>
                <button 
                  onClick={() => window.location.href = 'tel:+905462558064'}
                  className="btn-neon flex-1"
                >
                  <Phone className="w-4 h-4 mr-2" />
                  Ara
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Service Promise */}
        <div className="mt-16 text-center">
          <div className="card-premium max-w-4xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <Shield className="w-7 h-7" />
              Hizmet Sözümüz
            </h3>
            <div className="grid md:grid-cols-3 gap-6 mt-8">
              <div className="text-center">
                <Zap className="w-12 h-12 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Hızlı Ulaşım</h4>
                <p className="text-sm text-muted-foreground">En kısa rotaları kullanırım</p>
              </div>
              <div className="text-center">
                <Shield className="w-12 h-12 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Güvenli Yolculuk</h4>
                <p className="text-sm text-muted-foreground">Sigortlı araç ve deneyimli sürücü</p>
              </div>
              <div className="text-center">
                <DollarSign className="w-12 h-12 text-primary mx-auto mb-3" />
                <h4 className="font-bold text-primary mb-2">Şeffaf Fiyat</h4>
                <p className="text-sm text-muted-foreground">Başta anlaştığımız fiyat</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;