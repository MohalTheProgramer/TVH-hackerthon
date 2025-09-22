import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Send } from "lucide-react";
import contactImage from "@assets/generated_images/Township_shop_owner_with_smartphone_15c51fbf.png";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    business: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    console.log(`${name} updated to: ${value}`);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', phone: '', business: '', message: '' });
  };

  return (
    <section id="contact" className="py-16 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Join the Movement?
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Take the first step towards transforming your business and strengthening your community. 
            Get in touch with us today.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Form */}
          <Card className="p-6">
            <CardHeader>
              <CardTitle className="text-2xl text-foreground">Get Started Today</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your full name"
                      data-testid="input-name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="your@email.com"
                      data-testid="input-email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      placeholder="+27 XX XXX XXXX"
                      data-testid="input-phone"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-foreground mb-2">
                      Business Type
                    </label>
                    <Input
                      id="business"
                      name="business"
                      type="text"
                      value={formData.business}
                      onChange={handleInputChange}
                      placeholder="e.g., Spaza shop, Supplier"
                      data-testid="input-business"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your business and how we can help..."
                    data-testid="textarea-message"
                  />
                </div>

                <Button type="submit" className="w-full" size="lg" data-testid="button-submit-form">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Info and Image */}
          <div className="space-y-8">
            {/* Hero Image */}
            <div className="rounded-lg overflow-hidden">
              <img 
                src={contactImage} 
                alt="Township shop owner with smartphone" 
                className="w-full h-64 object-cover"
                data-testid="img-contact-hero"
              />
            </div>

            {/* Contact Information */}
            <Card className="p-6">
              <CardHeader>
                <CardTitle className="text-xl text-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium text-foreground">Phone</div>
                    <div className="text-muted-foreground">+27 11 123 4567</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@ubuntumarketplace.co.za</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-5 h-5 text-primary mr-3" />
                  <div>
                    <div className="font-medium text-foreground">Address</div>
                    <div className="text-muted-foreground">Johannesburg, South Africa</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* WhatsApp CTA */}
            <Card className="p-6 bg-primary/5 border-primary/20">
              <CardContent className="pt-6 text-center">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  Prefer WhatsApp?
                </h3>
                <p className="text-muted-foreground mb-4">
                  Join our community WhatsApp group for updates and support
                </p>
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => console.log('WhatsApp clicked')}
                  data-testid="button-whatsapp"
                >
                  Join WhatsApp Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}