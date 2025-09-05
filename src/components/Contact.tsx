import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Send,
  Building,
  Globe
} from "lucide-react";

export const Contact = () => {
  const contactInfo = [
    {
      icon: Building,
      title: "Head Office",
      details: ["Ministero Steel Engineering Pvt. Ltd.", "Industrial Area, Sector 62", "Noida, Uttar Pradesh 201309", "India"]
    },
    {
      icon: Phone,
      title: "Phone Numbers",
      details: ["+91 98765 43210", "+91 11 4567 8900", "+91 98765 43211 (Sales)", "+91 98765 43212 (Support)"]
    },
    {
      icon: Mail,
      title: "Email Addresses",
      details: ["info@ministerosteel.com", "sales@ministerosteel.com", "support@ministerosteel.com", "export@ministerosteel.com"]
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Monday - Friday: 9:00 AM - 6:00 PM", "Saturday: 9:00 AM - 2:00 PM", "Sunday: Closed", "24/7 Emergency Support"]
    }
  ];

  const offices = [
    {
      city: "Mumbai",
      address: "Office 205, Business Hub, Andheri East, Mumbai - 400069",
      phone: "+91 22 2674 5123",
      email: "mumbai@ministerosteel.com"
    },
    {
      city: "Chennai",
      address: "3rd Floor, Steel Plaza, T. Nagar, Chennai - 600017",
      phone: "+91 44 2815 6789",
      email: "chennai@ministerosteel.com"
    },
    {
      city: "Bangalore",
      address: "Unit 12, Industrial Estate, Peenya, Bangalore - 560058",
      phone: "+91 80 2839 4567",
      email: "bangalore@ministerosteel.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-steel">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Contact Us
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Get in Touch with Our Experts
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Ready to discuss your steel engineering requirements? Our experienced team is here 
            to provide expert consultation and competitive solutions for your projects.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 shadow-steel">
              <CardContent className="p-0">
                <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Full Name *
                      </label>
                      <Input id="name" placeholder="Enter your full name" required />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Email Address *
                      </label>
                      <Input id="email" type="email" placeholder="Enter your email" required />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        Phone Number
                      </label>
                      <Input id="phone" type="tel" placeholder="Enter your phone number" />
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input id="company" placeholder="Enter your company name" />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Subject *
                    </label>
                    <Input id="subject" placeholder="Enter message subject" required />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us about your requirements, project details, or any questions you have..."
                      className="min-h-[150px]"
                      required 
                    />
                  </div>

                  <Button variant="steel" size="lg" className="w-full group">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-6">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6 hover:shadow-steel transition-all duration-300">
                <CardContent className="p-0">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{info.title}</h4>
                  </div>
                  <div className="space-y-1">
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-sm text-muted-foreground">
                        {detail}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Regional Offices */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground text-center mb-8">Our Regional Offices</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {offices.map((office, index) => (
              <Card key={index} className="p-6 hover:shadow-steel transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h4 className="text-lg font-bold text-foreground">{office.city}</h4>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3 leading-relaxed">{office.address}</p>
                  <div className="space-y-1">
                    <p className="text-sm font-medium text-foreground">{office.phone}</p>
                    <p className="text-sm text-primary">{office.email}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Map & CTA */}
        <div className="bg-background rounded-2xl p-8 text-center shadow-steel">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="w-6 h-6 text-primary" />
            <h3 className="text-2xl font-bold text-foreground">Global Reach, Local Support</h3>
          </div>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            With our network of regional offices and international partnerships, we provide 
            comprehensive steel engineering solutions across 25+ countries worldwide.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="steel" size="lg">
              Schedule Consultation
            </Button>
            <Button variant="outline" size="lg">
              Request Site Visit
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};