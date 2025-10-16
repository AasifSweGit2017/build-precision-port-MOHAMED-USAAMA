import { useState } from "react";
import { Mail, Phone, Linkedin, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "yourmail@gmail.com",
      href: "mailto:yourmail@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+94 750 000 000",
      href: "https://wa.me/94750000000",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "mohamed-usaama",
      href: "https://linkedin.com/in/mohamed-usaama",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Dubai, UAE",
      href: "https://maps.google.com/?q=Dubai,UAE",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-32">
      <div className="container px-4 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl lg:text-5xl font-bold text-center mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-16 rounded-full" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6 animate-fade-in">
              <Card className="p-6 glass-effect shadow-card">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/50 transition-smooth group"
                    >
                      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:scale-110 transition-smooth">
                        <info.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-xs text-muted-foreground">
                          {info.label}
                        </p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              <Card className="p-6 glass-effect shadow-card">
                <h3 className="text-xl font-bold mb-4">Let's Connect</h3>
                <p className="text-muted-foreground">
                  I'm always interested in hearing about new projects and
                  opportunities. Whether you have a question or just want to say
                  hi, feel free to reach out!
                </p>
              </Card>
            </div>

            {/* Contact Form */}
            <Card className="p-6 glass-effect shadow-card animate-fade-in">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="text-sm font-medium mb-2 block">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="text-sm font-medium mb-2 block">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="text-sm font-medium mb-2 block"
                  >
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      setFormData({ ...formData, message: e.target.value })
                    }
                    required
                  />
                </div>

                <Button type="submit" className="w-full shadow-card" size="lg">
                  <Send className="mr-2 h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
