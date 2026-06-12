import { motion } from "framer-motion";

const images = [
  "/images/gallery1.png",
  "/images/sofa.png",
  "/images/gallery2.png",
  "/images/dining.png",
  "/images/gallery3.png",
  "/images/bed.png",
];

export function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">Showroom Gallery</span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">A Glimpse Inside</h2>
            <p className="text-muted-foreground text-lg">
              Take a virtual tour of our expansive showroom in Uruli Kanchan. Feel the textures, appreciate the craftsmanship.
            </p>
          </motion.div>
        </div>

        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 md:gap-6 space-y-4 md:space-y-6">
          {images.map((src, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="break-inside-avoid relative group rounded-xl overflow-hidden"
            >
              <img
                src={src}
                alt={`Gallery image ${index + 1}`}
                loading="lazy"
                className="w-full h-auto object-cover rounded-xl transition-transform duration-700 group-hover:scale-105"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600';
                }}
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
