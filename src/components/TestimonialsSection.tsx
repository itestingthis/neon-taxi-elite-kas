import { Star, Quote, Phone, Users, Trophy, Award } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: 'Mehmet Bey',
      location: 'İstanbul',
      rating: 5,
      text: 'Gökhan Bey\'le Antalya havalimanından Kalkan\'a çok rahat bir yolculuk yaptık. Hem güvenli hem de çok kibar. Kesinlikle tavsiye ederim!',
      service: 'Havalimanı Transferi'
    },
    {
      name: 'Ayşe Hanım',
      location: 'Ankara',
      rating: 5,
      text: 'Tatilimiz boyunca birkaç kez hizmet aldık. Her seferinde dakik, temiz araç ve güler yüzlü hizmet. Kaş\'ta taksi denince akla ilk o gelir.',
      service: 'Şehir İçi Transfer'
    },
    {
      name: 'German Tourist',
      location: 'Germany',
      rating: 5,
      text: 'Very professional driver! Gökhan helped us explore beautiful places around Kas and Kalkan. Highly recommended for tourists!',
      service: 'Tourist Tour'
    },
    {
      name: 'Fatma Hanım',
      location: 'Antalya',
      rating: 5,
      text: 'Gecenin bir vakti acil durumda aradığımızda hemen geldi. Bu kadar güvenilir hizmet görmemiştim. Çok teşekkür ederiz!',
      service: 'Acil Transfer'
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-secondary/10 to-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Müşteri Yorumları</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Yüzlerce mutlu müşterimizin deneyimlerinden bazıları. 
            Güvenilir hizmet anlayışımızı onların sözlerinden öğrenin.
          </p>
        </div>

        {/* Trust Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: '1000+', label: 'Mutlu Müşteri' },
            { number: '4.9/5', label: 'Ortalama Puan' },
            { number: '15+', label: 'Yıl Deneyim' },
            { number: '7/24', label: 'Hizmet Saati' }
          ].map((stat, index) => (
            <div key={index} className="card-premium text-center p-6">
              <div className="text-3xl font-black text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-premium group hover:scale-105 transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-primary/40 mb-4" />
              
              {/* Testimonial Text */}
              <p className="text-lg leading-relaxed text-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <span className="text-primary font-semibold">
                  {testimonial.rating}.0
                </span>
              </div>
              
              {/* Customer Info */}
              <div className="border-t border-border/50 pt-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-bold text-primary">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                  <div className="text-right">
                    <span className="text-xs bg-primary/20 text-primary px-3 py-1 rounded-full">
                      {testimonial.service}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="card-premium max-w-3xl mx-auto p-8">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <Star className="w-7 h-7" />
              Siz de Deneyimlerinizi Paylaşın!
            </h3>
            <p className="text-muted-foreground mb-6">
              Hizmet aldıktan sonra deneyimlerinizi bizimle paylaşmayı unutmayın. 
              Görüşleriniz bizim için çok değerli!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => {
                  const message = encodeURIComponent('Merhaba Gökhan Bey, hizmetiniz hakkında geri bildirim vermek istiyorum.');
                  window.open(`https://wa.me/905462558064?text=${message}`, '_blank');
                }}
                className="btn-neon-outline flex items-center justify-center gap-2"
              >
                <Quote className="w-4 h-4" />
                Yorumunuzu Gönderin
              </button>
              
              <button 
                onClick={() => window.location.href = 'tel:+905462558064'}
                className="btn-neon flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Hemen Rezervasyon Yapın
              </button>
            </div>
          </div>
        </div>

        {/* Social Proof */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Bizi takip edin ve güncel bilgiler alın:</p>
          <div className="flex justify-center gap-4">
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg">
              <Star className="w-4 h-4 text-primary" />
              <span className="text-sm">Google: 4.9/5</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm">1000+ Müşteri</span>
            </div>
            <div className="flex items-center gap-2 bg-secondary/50 px-4 py-2 rounded-lg">
              <Trophy className="w-4 h-4 text-primary" />
              <span className="text-sm">15 Yıl Deneyim</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;