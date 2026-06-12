import { motion } from "framer-motion";

const categories = [
  { name: "Sofas & Loungers", image: "/images/sofa.png", count: "120+ Options" },
  { name: "Beds & Mattresses", image: "/images/bed.png", count: "80+ Options" },
  { name: "Dining Sets", image: "/images/dining.png", count: "45+ Options" },
  { name: "Wardrobes", image: "/images/wardrobe.png", count: "60+ Options" },
  { name: "TV Units", image: "/images/gallery2.png", count: "30+ Options" },
  { name: "Office Furniture", image: "/images/office.png", count: "50+ Options" },
  { name: "Chairs & Seating", image: "/images/gallery1.png", count: "150+ Options" },
  { name: "Custom Furniture", image: "/images/about.png", count: "Made to Order" },
];

export function Categories() {
  return (
    <section id="categories" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-4">Shop by Category</h2>
            <p className="text-muted-foreground text-lg">
              Explore our wide range of premium furniture pieces designed to elevate every corner of your home and workspace.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((category, index) => (
            <motion.a
              href="#featured"
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative block aspect-[4/5] rounded-xl overflow-hidden bg-muted"
            >
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600';
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <h3 className="text-white font-medium text-lg md:text-xl mb-1">{category.name}</h3>
                <p className="text-white/70 text-sm font-light">{category.count}</p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
