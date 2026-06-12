import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function Contact() {
  return (
    <section id="contact" className="py-24 bg-secondary/30 relative">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary font-medium tracking-wider uppercase text-sm mb-3 block">Visit Us</span>
            <h2 className="font-serif text-3xl md:text-5xl text-foreground mb-6">Get in Touch</h2>
            <p className="text-muted-foreground text-lg">
              We're here to help you find the perfect furniture. Visit our showroom or drop us a message.
            </p>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-10"
          >
            <div className="bg-card border border-border rounded-2xl p-8 space-y-8">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Showroom Location</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    Netra Furniture Mall<br />
                    Pune - Solapur Highway,<br />
                    Uruli Kanchan, Pune,<br />
                    Maharashtra 412202
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Contact Numbers</h4>
                  <p className="text-muted-foreground">
                    <a href="tel:+919876543210" className="hover:text-primary transition-colors">+91 98765 43210</a><br />
                    <a href="tel:+919876543211" className="hover:text-primary transition-colors">+91 98765 43211</a>
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Sunday<br />
                    10:00 AM - 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden h-[300px] border border-border bg-muted">
              {/* Google Maps Embed Placeholder - using Uruli Kanchan coordinates */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.560706240217!2d74.1332822!3d18.4989676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2e0d3cb1dc5e5%3A0x6b4f738c823ea4a0!2sUruli%20Kanchan%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Netra Furniture Mall Location"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-card border border-border rounded-2xl p-8 lg:p-10 shadow-sm">
              <h3 className="font-serif text-2xl md:text-3xl text-foreground mb-2">Send an Enquiry</h3>
              <p className="text-muted-foreground mb-8">Fill out the form below and our team will get back to you shortly.</p>
              
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name</label>
                    <Input id="name" placeholder="John Doe" className="bg-background" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone Number</label>
                    <Input id="phone" type="tel" placeholder="+91 XXXXX XXXXX" className="bg-background" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="interest" className="text-sm font-medium text-foreground">Interested In</label>
                  <select id="interest" className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
                    <option value="">Select a category</option>
                    <option value="sofas">Sofas & Loungers</option>
                    <option value="beds">Beds & Mattresses</option>
                    <option value="dining">Dining Sets</option>
                    <option value="wardrobes">Wardrobes</option>
                    <option value="office">Office Furniture</option>
                    <option value="custom">Custom Furniture</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-foreground">Your Message</label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell us what you're looking for..." 
                    className="min-h-[120px] bg-background resize-none" 
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2 text-base h-14">
                  <Send className="w-4 h-4" /> Send Message
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
