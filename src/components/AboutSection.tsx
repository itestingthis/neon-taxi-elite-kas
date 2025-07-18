import { Award, Shield, Clock, Users } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { icon: Award, value: '15+', label: 'Yıl Deneyim' },
    { icon: Users, value: '1000+', label: 'Mutlu Müşteri' },
    { icon: Shield, value: '100%', label: 'Güvenilir' },
    { icon: Clock, value: '7/24', label: 'Hizmet' }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">Gökhan Taxi</span> Hakkında
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Antalya - Kaş - Kalkan bölgesinde 15 yıldır profesyonel taksi hizmeti veriyorum.
            Güvenilir, hızlı ve konforlu ulaşım için her zaman yanınızdayım.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          {/* About Content */}
          <div className="space-y-6">
            <div className="card-premium p-8">
              <h3 className="text-2xl font-bold text-primary mb-4">
                Neden Gökhan Taxi?
              </h3>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>15+ yıllık profesyonel sürücülük deneyimi</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Temiz, klimali ve konforlu araçlar</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Kaş ve Kalkan bölgesini çok iyi biliyorum</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>7/24 hizmet, güvenilir ve punctual</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-3 flex-shrink-0"></div>
                  <span>Uygun fiyatlı ve şeffaf ücretlendirme</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Driver Image Placeholder */}
          <div className="relative">
            <div className="card-premium p-8 text-center">
              <div className="w-32 h-32 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                <div className="text-6xl">🚗</div>
              </div>
              <h4 className="text-2xl font-bold text-primary mb-2">Gökhan</h4>
              <p className="text-muted-foreground mb-4">Profesyonel Sürücü</p>
              <div className="flex justify-center items-center gap-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-primary text-xl">⭐</span>
                  ))}
                </div>
                <span className="text-sm text-muted-foreground ml-2">4.9/5 (200+ değerlendirme)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index}
              className="card-premium text-center p-6 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <stat.icon className="w-12 h-12 text-primary mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
              <div className="text-3xl font-black text-primary mb-2">{stat.value}</div>
              <p className="text-muted-foreground font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;