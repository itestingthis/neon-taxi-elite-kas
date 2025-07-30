import { Plane, Navigation, Crown } from "lucide-react";
import { motion } from "framer-motion";

export const ServicesSection = () => {
  const services = [
    {
      icon: Plane,
      title: "Havalimanı Transfer",
      description: "Antalya Havalimanı'ndan Kaş/Kalkan'a konforlu transfer hizmeti",
      features: [
        "Kapıdan kapıya hizmet",
        "Uçuş takibi",
        "Bavul yardımı"
      ]
    },
    {
      icon: Navigation,
      title: "Şehir İçi Ulaşım",
      description: "Kaş ve Kalkan içinde tüm destinasyonlara hızlı ulaşım",
      features: [
        "Hızlı servis",
        "Uygun fiyat",
        "Temiz araçlar"
      ]
    },
    {
      icon: Crown,
      title: "VIP Transfer",
      description: "Özel etkinlikler ve lüks seyahatler için VIP araç hizmeti",
      features: [
        "Lüks araçlar",
        "Özel şoför",
        "Premium konfor"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-secondary/30 via-background to-secondary/20 relative overflow-hidden">
      {/* Animated Background */}
      <motion.div 
        className="absolute top-0 left-1/4 w-64 h-64 bg-primary/10 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.2, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
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
            Hizmetlerimiz
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-taxi-orange mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-xl p-8 border border-border/50 card-hover group relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-taxi-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div 
                className="w-16 h-16 mx-auto mb-6 bg-gradient-to-br from-primary/20 to-taxi-orange/20 rounded-full flex items-center justify-center relative z-10"
                whileHover={{ scale: 1.1, rotate: 10 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <service.icon className="w-8 h-8 text-primary group-hover:text-taxi-orange transition-colors duration-300" />
              </motion.div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-4 text-center relative z-10 group-hover:text-primary transition-colors duration-300">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground mb-6 text-center relative z-10">
                {service.description}
              </p>
              
              <ul className="space-y-3 relative z-10">
                {service.features.map((feature, featureIndex) => (
                  <motion.li 
                    key={featureIndex} 
                    className="flex items-center text-sm text-muted-foreground"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: featureIndex * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <motion.div 
                      className="w-2 h-2 bg-primary rounded-full mr-3"
                      whileHover={{ scale: 1.5 }}
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};