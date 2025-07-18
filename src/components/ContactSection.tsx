import { Phone, MessageCircle, MapPin, Clock, Mail, Send, Plane, AlertTriangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
    service: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = encodeURIComponent(
      `Merhaba Gökhan Bey,\n\nAdım: ${formData.name}\nTelefonum: ${formData.phone}\nHizmet: ${formData.service}\n\nMesajım: ${formData.message}`
    );
    window.open(`https://wa.me/905555555555?text=${whatsappMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Telefon',
      value: '+90 555 555 55 55',
      action: () => window.location.href = 'tel:+905555555555',
      description: '7/24 arayabilirsiniz'
    },
    {
      icon: MessageCircle,
      title: 'WhatsApp',
      value: '+90 555 555 55 55',
      action: () => {
        const message = encodeURIComponent('Merhaba Gökhan Bey, taksi hizmeti almak istiyorum.');
        window.open(`https://wa.me/905555555555?text=${message}`, '_blank');
      },
      description: 'Anlık mesajlaşma'
    },
    {
      icon: MapPin,
      title: 'Hizmet Bölgesi',
      value: 'Kaş - Kalkan - Antalya',
      action: () => {},
      description: 'Ana çalışma alanımız'
    },
    {
      icon: Clock,
      title: 'Çalışma Saatleri',
      value: '7/24 Hizmet',
      action: () => {},
      description: 'Her zaman yanınızdayız'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-background to-secondary/20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">
            <span className="text-gradient">İletişim</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Rezervasyon yapmak veya sorularınızı sormak için bize ulaşın. 
            7/24 hizmetinizdeyiz!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary mb-8 flex items-center gap-3">
              <Phone className="w-7 h-7" />
              Hemen Ulaşın
            </h3>
            
            {contactInfo.map((info, index) => (
              <div 
                key={index}
                className="card-premium group cursor-pointer hover:scale-105 transition-all duration-300"
                onClick={info.action}
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center group-hover:animate-pulse-glow">
                    <info.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-foreground group-hover:text-primary transition-colors">
                      {info.title}
                    </h4>
                    <p className="text-primary font-semibold">{info.value}</p>
                    <p className="text-sm text-muted-foreground">{info.description}</p>
                  </div>
                  {(info.title === 'Telefon' || info.title === 'WhatsApp') && (
                    <div className="text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      →
                    </div>
                  )}
                </div>
              </div>
            ))}

            {/* Quick Actions */}
            <div className="mt-8 space-y-4">
              <h4 className="text-lg font-bold text-primary flex items-center gap-3">
                <Send className="w-5 h-5" />
                Hızlı İşlemler
              </h4>
              
              <div className="flex flex-col gap-3">
                <Button 
                  onClick={() => window.location.href = 'tel:+905555555555'}
                  className="btn-neon w-full text-lg py-6 flex items-center justify-center gap-3"
                >
                  <Phone className="w-5 h-5" />
                  Hemen Ara - Acil Durum
                </Button>
                
                <Button 
                  onClick={() => {
                    const message = encodeURIComponent('Merhaba Gökhan Bey, havalimanı transferi rezervasyonu yapmak istiyorum.');
                    window.open(`https://wa.me/905555555555?text=${message}`, '_blank');
                  }}
                  className="btn-neon-outline w-full text-lg py-6 flex items-center justify-center gap-3"
                >
                  <Plane className="w-5 h-5" />
                  Havalimanı Transfer Rezervasyon
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-premium">
            <h3 className="text-2xl font-bold text-primary mb-6 flex items-center gap-3">
              <MessageCircle className="w-7 h-7" />
              Mesaj Gönderin
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Adınız *
                  </label>
                  <Input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="Adınız ve soyadınız"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                
                <div>
                  <label className="text-sm font-semibold text-foreground mb-2 block">
                    Telefonunuz *
                  </label>
                  <Input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    placeholder="+90 5XX XXX XX XX"
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Hizmet Türü
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({...formData, service: e.target.value})}
                  className="w-full p-3 bg-secondary/50 border border-border/50 rounded-lg focus:border-primary focus:outline-none text-foreground"
                >
                  <option value="">Hizmet seçin</option>
                  <option value="Havalimanı Transferi">Havalimanı Transferi</option>
                  <option value="Şehir İçi Ulaşım">Şehir İçi Ulaşım</option>
                  <option value="VIP Araç Hizmeti">VIP Araç Hizmeti</option>
                  <option value="Özel Tur">Özel Tur</option>
                  <option value="Diğer">Diğer</option>
                </select>
              </div>

              <div>
                <label className="text-sm font-semibold text-foreground mb-2 block">
                  Mesajınız *
                </label>
                <Textarea
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  placeholder="Nereden nereye gitmek istiyorsunuz? Tarih ve saat bilgisi varsa belirtin..."
                  rows={4}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <Button type="submit" className="btn-neon w-full text-lg py-6 group">
                <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                WhatsApp ile Gönder
              </Button>
            </form>

            <div className="mt-6 p-4 bg-primary/10 rounded-xl border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-primary">Not:</strong> Form gönderildiğinde WhatsApp uygulamanız açılacak ve 
                mesajınız otomatik olarak hazırlanacak. Sadece gönder tuşuna basmanız yeterli!
              </p>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 text-center">
          <div className="card-premium max-w-2xl mx-auto p-8 border-primary/30">
            <h3 className="text-2xl font-bold text-primary mb-4 flex items-center justify-center gap-3">
              <AlertTriangle className="w-7 h-7 text-red-500" />
              Acil Durum İletişim
            </h3>
            <p className="text-muted-foreground mb-6">
              Acil durumda, gece geç saatlerde, havalimanı transferi veya 
              beklenmedik ulaşım ihtiyaçlarınız için 7/24 arayabilirsiniz.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6">
              <div className="text-3xl font-bold text-primary mb-2 flex items-center justify-center gap-3">
                <Phone className="w-8 h-8" />
                +90 555 555 55 55
              </div>
              <p className="text-muted-foreground">
                Her zaman açık hat - Hemen cevap veriyorum
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;