import { Star } from "lucide-react";
import { motion } from "framer-motion";

export const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Ayşe H.",
      text: "Havalimanından Kaş'a kadar çok rahat bir yolculuk oldu. Gökhan Bey çok kibar ve güvenilir.",
      rating: 5
    },
    {
      name: "Mehmet K.",
      text: "Gece yarısı acil bir durumda aradık, hemen geldi. Çok teşekkür ederiz!",
      rating: 5
    },
    {
      name: "Fatma S.",
      text: "Kalkan'da tatildeyken her gün kullandık. Hem güvenilir hem de uygun fiyatlı.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background via-secondary/5 to-background relative overflow-hidden">
      {/* Floating Elements */}
      <motion.div 
        className="absolute top-20 right-20 w-32 h-32 bg-taxi-orange/10 rounded-full blur-2xl"
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
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
            Müşteri Yorumları
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-taxi-orange mx-auto rounded-full" />
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="glass-effect rounded-xl p-8 border border-border/50 card-hover group relative overflow-hidden"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15 
              }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              {/* Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-taxi-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <motion.div 
                className="flex justify-center mb-4 relative z-10"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ delay: index * 0.2 + 0.3, type: "spring" }}
                viewport={{ once: true }}
              >
                {[...Array(testimonial.rating)].map((_, starIndex) => (
                  <motion.div
                    key={starIndex}
                    initial={{ rotate: 0 }}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Star 
                      className="w-5 h-5 text-primary fill-current mx-1" 
                    />
                  </motion.div>
                ))}
              </motion.div>
              
              <motion.p 
                className="text-muted-foreground mb-6 text-center italic relative z-10 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: index * 0.2 + 0.5 }}
                viewport={{ once: true }}
              >
                "{testimonial.text}"
              </motion.p>
              
              <motion.div 
                className="text-center relative z-10"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.7 }}
                viewport={{ once: true }}
              >
                <p className="font-semibold text-foreground text-lg group-hover:text-primary transition-colors duration-300">
                  - {testimonial.name}
                </p>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};