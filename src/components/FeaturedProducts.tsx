import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const products = [
  { id: 1, name: "Aarav Teak Wood Sofa", category: "Sofas", price: "₹24,999", image: "/images/sofa.png" },
  { id: 2, name: "Meera King Size Bed", category: "Beds", price: "₹32,500", image: "/images/bed.png" },
  { id: 3, name: "Classic Walnut Dining Set", category: "Dining Sets", price: "₹45,999", image: "/images/dining.png" },
  { id: 4, name: "Modern Tall Wardrobe", category: "Wardrobes", price: "₹18,500", image: "/images/wardrobe.png" },
  { id: 5, name: "Executive Office Desk", category: "Office", price: "₹12,999", image: "/images/office.png" },
  { id: 6, name: "Minimalist TV Unit", category: "TV Units", price: "₹15,499", image: "/images/gallery2.png" },
  { id: 7, name: "L-Shape Premium Lounger", category: "Sofas", price: "₹38,000", image: "/images/sofa.png" },
  { id: 8, name: "Sheesham Wood Chair", category: "Chairs", price: "₹4,500", image: "/images/gallery1.png" },
  { id: 9, name: "Storage Queen Bed", category: "Beds", price: "₹28,999", image: "/images/bed.png" },
  { id: 10, name: "Contemporary Display Unit", category: "Storage", price: "₹21,000", image: "/images/gallery3.png" },
  { id: 11, name: "Ergonomic Office Chair", category: "Office", price: "₹8,999", image: "/images/office.png" },
  { id: 12, name: "Glass Top Coffee Table", category: "Tables", price: "₹6,500", image: "/images/gallery2.png" },
];

export function FeaturedProducts() {
  return (
    <section id="featured" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">Handpicked for you</span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Featured Collections</h2>
            <p className="text-muted-foreground text-lg">
              Explore our most loved pieces, crafted with attention to detail and designed for everyday luxury.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="group flex flex-col bg-card rounded-xl overflow-hidden border border-border/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600';
                  }}
                />
              </div>
              <div className="p-5 flex flex-col flex-grow">
                <span className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">{product.category}</span>
                <h3 className="text-lg font-medium text-foreground mb-2 line-clamp-1">{product.name}</h3>
                <div className="flex items-center justify-between mt-auto pt-4">
                  <span className="text-lg font-serif font-bold text-foreground">{product.price}</span>
                  <Button variant="ghost" size="sm" className="rounded-full hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                    <a href={`https://wa.me/919876543210?text=Hi, I want to enquire about the ${product.name} priced at ${product.price}`} target="_blank" rel="noreferrer">
                      Enquire <ArrowRight className="w-4 h-4 ml-1" />
                    </a>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline" className="rounded-full px-8" asChild>
            <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer">
              View Complete Catalog on WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
