import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    location: "Magarpatta, Pune",
    text: "Bought a teak wood dining set and it exceeded my expectations. The finish is flawless and the delivery was prompt. Highly recommend Netra Furniture Mall for anyone in the area.",
    rating: 5,
  },
  {
    id: 2,
    name: "Rahul Deshmukh",
    location: "Hadapsar",
    text: "We were looking for a comfortable L-shaped sofa for our new apartment. The team here helped us choose the perfect fabric and color. Great quality at a very reasonable price.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sneha Patil",
    location: "Uruli Kanchan",
    text: "Best furniture showroom in Uruli Kanchan! Got a custom-made wardrobe that fits our space perfectly. The craftsmanship is top-notch and the staff is very polite.",
    rating: 5,
  },
  {
    id: 4,
    name: "Amit Joshi",
    location: "Loni Kalbhor",
    text: "Furnished my entire office from Netra. The ergonomic chairs are really comfortable and the executive desk looks premium. A very seamless shopping experience.",
    rating: 5,
  },
];

export function Testimonials() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">Customer Reviews</span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Loved by Pune Residents</h2>
            <p className="text-muted-foreground text-lg">
              Don't just take our word for it. Here's what our customers have to say about their experience with us.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card border border-border p-8 rounded-2xl flex flex-col h-full"
            >
              <div className="flex gap-1 mb-6 text-accent">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-foreground text-lg font-light leading-relaxed mb-8 flex-grow">
                "{testimonial.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-serif text-xl font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-medium text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
