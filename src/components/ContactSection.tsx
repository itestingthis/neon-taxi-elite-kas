import { Phone, MessageCircle, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { motion } from "framer-motion";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    message: ""
  });

  const phoneNumber = "+905462558064";
  const whatsappNumber = "905462558064";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const serviceNames = {
      airport: "Havalimanı Transfer",
      city: "Şehir İçi Ulaşım",
      vip: "VIP Transfer",
      other: "Diğer"
    };

    let whatsappMessage = `Merhaba Gökhan Bey,\n\n`;
    whatsappMessage += `Ad: ${formData.name}\n`;
    whatsappMessage += `Telefon: ${formData.phone}\n`;
    whatsappMessage += `Hizmet: ${serviceNames[formData.service as keyof typeof serviceNames] || formData.service}\n`;
    if (formData.message) {
      whatsappMessage += `Mesaj: ${formData.message}\n`;
    }
    whatsappMessage += `\nTaksi hizmeti almak istiyorum.`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Telefon",
      value: phoneNumber,
      subtitle: "7/24 Hizmet"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      value: phoneNumber,
      subtitle: "Anında İletişim"
    },
    {
      icon: MapPin,
      title: "Bölge",
      value: "Kaş & Kalkan",
      subtitle: "Antalya"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/20 via-background to-secondary/30 relative overflow-hidden">
      {/* Background Effects */}
      <motion.div 
        className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-shimmer">
            İletişim
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-taxi-orange mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {contactInfo.map((info, index) => (
              <motion.div 
                key={index}
                className="p-6 glass-effect rounded-xl border border-border/50 card-hover group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center">
                  <motion.div 
                    className="w-12 h-12 bg-gradient-to-br from-primary/20 to-taxi-orange/20 rounded-lg flex items-center justify-center mr-4"
                    whileHover={{ scale: 1.1, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <info.icon className="w-6 h-6 text-primary group-hover:text-taxi-orange transition-colors duration-300" />
                  </motion.div>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                      {info.title}
                    </h3>
                    <p className="text-foreground font-medium">
                      {info.value}
                    </p>
                    <p className="text-muted-foreground text-sm">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
          <motion.div 
            className="glass-effect rounded-xl p-8 border border-border/50 glow-border"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-2xl font-semibold text-foreground mb-6 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
            >
              Rezervasyon Talebi
            </motion.h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="name">Adınız</Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  required
                  className="glass-effect"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="phone">Telefon</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  required
                  className="glass-effect"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="service">Hizmet Türü</Label>
                <Select onValueChange={(value) => setFormData({...formData, service: value})}>
                  <SelectTrigger className="glass-effect">
                    <SelectValue placeholder="Seçiniz" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="airport">Havalimanı Transfer</SelectItem>
                    <SelectItem value="city">Şehir İçi Ulaşım</SelectItem>
                    <SelectItem value="vip">VIP Transfer</SelectItem>
                    <SelectItem value="other">Diğer</SelectItem>
                  </SelectContent>
                </Select>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8 }}
                viewport={{ once: true }}
              >
                <Label htmlFor="message">Mesajınız (Opsiyonel)</Label>
                <Textarea
                  id="message"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="glass-effect"
                />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button type="submit" className="w-full gradient-glow text-white border-0" size="lg">
                  <Send className="w-5 h-5 mr-2" />
                  WhatsApp ile Gönder
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};