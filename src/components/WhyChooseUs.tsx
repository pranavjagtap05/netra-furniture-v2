import { motion } from "framer-motion";
import { ShieldCheck, IndianRupee, Truck, Hammer, LayoutGrid, HeadphonesIcon } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Quality Materials",
    description: "We use only premium woods, fabrics, and metals. Every piece is built to withstand the test of time."
  },
  {
    icon: IndianRupee,
    title: "Affordable Pricing",
    description: "Direct from manufacturers to our showroom, ensuring you get luxury furniture without the premium markup."
  },
  {
    icon: Truck,
    title: "Home Delivery",
    description: "Safe, swift, and professional delivery directly to your doorstep across Pune and surrounding areas."
  },
  {
    icon: Hammer,
    title: "Custom Furniture",
    description: "Have a specific design in mind? Our master craftsmen can bring your custom furniture ideas to life."
  },
  {
    icon: LayoutGrid,
    title: "Large Collection",
    description: "Explore thousands of designs across multiple categories in our spacious Uruli Kanchan showroom."
  },
  {
    icon: HeadphonesIcon,
    title: "Customer Support",
    description: "From selection to after-sales service, our friendly team is always here to assist you."
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">The Netra Advantage</span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Why Choose Us?</h2>
            <p className="text-muted-foreground text-lg">
              We go beyond just selling furniture. We deliver peace of mind, comfort, and enduring value.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card border border-border p-8 rounded-2xl hover:shadow-md transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  <Icon className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}
