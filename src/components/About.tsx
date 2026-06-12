import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

export function About() {
  const highlights = [
    "Over 15 years of trust in Uruli Kanchan",
    "Premium quality materials & craftsmanship",
    "Personalized service & expert guidance",
    "Transparent pricing with no hidden costs"
  ];

  return (
    <section id="about" className="py-24 bg-background overflow-hidden">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="/images/about.png" 
                alt="Netra Furniture Mall Team" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            {/* Decorative element */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-accent/10 rounded-full blur-2xl -z-10" />
            
            <div className="absolute -bottom-6 -right-6 bg-card border border-border shadow-xl rounded-xl p-6 max-w-[200px] hidden md:block">
              <h4 className="font-serif text-3xl text-primary font-bold mb-1">15+</h4>
              <p className="text-sm font-medium text-muted-foreground leading-snug">Years of serving homes in Pune</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-1/2"
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">Our Story</span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-foreground mb-6 leading-tight">
              Crafting Comfort & Elegance for Your Space
            </h2>
            
            <div className="space-y-4 text-lg text-muted-foreground font-light mb-8">
              <p>
                Located in the heart of Uruli Kanchan, Netra Furniture Mall is more than just a store — it's a destination where houses are transformed into homes. We believe that furniture should be a perfect blend of aesthetics, comfort, and durability.
              </p>
              <p>
                As a trusted local family business, we personally curate every piece in our showroom. Whether you're looking for a cozy sofa to anchor your living room, a solid wood dining table for family meals, or ergonomic office furniture, we ensure uncompromising quality at accessible prices.
              </p>
            </div>

            <ul className="space-y-4 mb-10">
              {highlights.map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-12 h-12 rounded-full border-2 border-background bg-muted flex items-center justify-center overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i + 10}`} alt={`Customer ${i}`} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-foreground">5000+</span>
                <span className="text-sm text-muted-foreground">Happy Families</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
