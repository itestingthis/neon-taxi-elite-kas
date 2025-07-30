import { useState } from "react";
import { motion } from "framer-motion";
import { Car, Phone, MapPin, Star, Clock, Moon, Sun, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";

export const HeroSection = () => {
  const phoneNumber = "+905462558064";
  const { theme, setTheme } = useTheme();

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-secondary/20 to-background overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-taxi opacity-10" />
      
      {/* Animated Background Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-primary/30 rounded-full"
          initial={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          animate={{
            x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
            y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      ))}
      
      {/* Animated Background Elements */}
      <motion.div 
        className="absolute top-20 left-10 w-32 h-32 bg-primary/10 rounded-full blur-xl"
        animate={{ 
          x: [0, 100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div 
        className="absolute bottom-20 right-10 w-40 h-40 bg-taxi-orange/10 rounded-full blur-xl"
        animate={{ 
          x: [0, -80, 0],
          y: [0, 30, 0],
          scale: [1, 0.8, 1]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      {/* Theme Toggle */}
      <motion.div 
        className="absolute top-6 right-6 z-50"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1 }}
      >
        <Button
          variant="outline"
          size="icon"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="glass-effect hover:bg-primary/20 glow-border"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </Button>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen py-20">
          
          {/* Left Content */}
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                <span className="block text-foreground">Güvenilir</span>
                <span className="block text-shimmer">
                  Taksi Hizmeti
                </span>
              </h1>
            </motion.div>
            
            <motion.p 
              className="text-xl text-muted-foreground leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Kaş ve Kalkan bölgesinde 7/24 güvenilir taksi hizmeti. 
              Havalimanı transferi, şehir içi ulaşım ve VIP hizmetlerimizle her an yanınızdayız.
            </motion.p>
            
            {/* Quick Info Cards */}
            <motion.div 
              className="grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <motion.div 
                className="p-4 glass-effect rounded-lg card-hover floating"
                whileHover={{ scale: 1.05 }}
              >
                <Clock className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">7/24 Hizmet</p>
              </motion.div>
              <motion.div 
                className="p-4 glass-effect rounded-lg card-hover floating"
                whileHover={{ scale: 1.05 }}
                style={{ animationDelay: "1s" }}
              >
                <Star className="w-6 h-6 text-primary mb-2" />
                <p className="text-sm font-medium text-foreground">5 Yıldız</p>
              </motion.div>
            </motion.div>
            
            {/* Action Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  size="lg" 
                  className="group gradient-glow text-white border-0 relative overflow-hidden"
                  onClick={() => {
                    window.open(`tel:${phoneNumber}`, '_self');
                  }}
                >
                  <Phone className="w-5 h-5 mr-2 group-hover:animate-bounce-taxi" />
                  Hemen Ara
                </Button>
              </motion.div>
              
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="glass-effect hover:bg-primary/10 glow-border"
                  onClick={() => {
                    window.open(`https://wa.me/905462558064`, '_blank');
                  }}
                >
                  <MapPin className="w-5 h-5 mr-2" />
                  WhatsApp
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Animated Taxi */}
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div 
              className="relative floating"
            >
              <div className="relative p-8">
                <motion.div 
                  className="w-64 h-64 mx-auto bg-gradient-to-br from-primary/20 to-taxi-orange/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-primary/30 glow-border"
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Car className="w-32 h-32 text-primary animate-drive-in" />
                </motion.div>
                
                {/* Floating Icons */}
                <motion.div 
                  className="absolute top-0 right-0 p-3 glass-effect rounded-full card-hover"
                >
                  <Shield className="w-6 h-6 text-primary" />
                </motion.div>
                
                <motion.div 
                  className="absolute bottom-0 left-0 p-3 glass-effect rounded-full card-hover"
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Zap className="w-6 h-6 text-taxi-orange" />
                </motion.div>
                
                <motion.div 
                  className="absolute top-1/2 left-0 p-3 glass-effect rounded-full card-hover"
                  animate={{ x: [0, 10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  <Clock className="w-6 h-6 text-primary" />
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};