import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do you offer home delivery in Pune?",
    answer: "Yes, we offer safe and professional home delivery across Pune and surrounding areas, including Hadapsar, Magarpatta, Wagholi, and Loni Kalbhor."
  },
  {
    question: "Can I customize the size or fabric of a sofa?",
    answer: "Absolutely! We specialize in custom furniture. You can choose from our wide range of fabrics, colors, and specify the exact dimensions to fit your space perfectly."
  },
  {
    question: "What kind of wood do you use for your furniture?",
    answer: "We primarily use premium quality solid woods like Teak (Sagwan), Sheesham (Rosewood), and engineered wood with high-quality veneers depending on the product and design requirements."
  },
  {
    question: "Do you provide a warranty on your products?",
    answer: "Yes, all our furniture comes with a standard manufacturing warranty covering structural defects. The duration varies by product category, which our staff will clearly explain during purchase."
  },
  {
    question: "Can I visit the showroom to see the products before buying?",
    answer: "We highly encourage it! Our expansive showroom in Uruli Kanchan has hundreds of products on display so you can experience the comfort and quality firsthand."
  },
  {
    question: "Do you take bulk orders for offices or hotels?",
    answer: "Yes, we handle commercial and bulk orders for offices, restaurants, and hotels. We offer special pricing and dedicated account management for large projects."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-8 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Frequently Asked Questions</h2>
            <p className="text-muted-foreground text-lg">
              Got questions? We've got answers. If you don't see your question here, feel free to contact us.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-card border border-border rounded-lg px-6">
                <AccordionTrigger className="text-left text-lg font-medium hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
