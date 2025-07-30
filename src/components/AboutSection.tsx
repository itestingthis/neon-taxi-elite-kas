import { Clock, ShieldCheck, MapPin, Star } from "lucide-react";
import { motion } from "framer-motion";

export const AboutSection = () => {
  const features = [
    {
      icon: Clock,
      title: "7/24 Hizmet",
      description: "Gece gündüz demeden her an hizmetinizdeyiz"
    },
    {
      icon: ShieldCheck,
      title: "Güvenilir",
      description: "Lisanslı ve sigortalı araçlarımızla güvenle seyahat edin"
    },
    {
      icon: MapPin,
      title: "Yerel Bilgi",
      description: "Bölgeyi çok iyi biliyoruz, en kısa yolu gösteririz"
    },
    {
      icon: Star,
      title: "Kaliteli Hizmet",
      description: "Müşteri memnuniyeti bizim önceliğimizdir"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-taxi-orange/20 rounded-full blur-3xl" />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4 text-shimmer">
            Neden Bizi Seçmelisiniz?
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-taxi-orange mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className="text-center p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 card-hover group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <motion.div 
                className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary/20 to-taxi-orange/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-all duration-300"
              >
                <feature.icon className="w-8 h-8 text-primary group-hover:text-taxi-orange transition-colors duration-300" />
              </motion.div>
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};