import { Card, CardContent } from "@/components/ui/card";
import {
  Wrench,
  Factory,
  Shield,
  Truck,
  Settings,
  Award,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export const Services = () => {
  const services = [
    {
      icon: Factory,
      title: "Steel Fabrication",
      description:
        "Custom steel fabrication services for structural, industrial, and architectural applications with precision engineering.",
      features: [
        "Structural Steel",
        "Custom Designs",
        "Precision Cutting",
        "Welding Services",
      ],
    },
    {
      icon: Wrench,
      title: "Engineering Solutions",
      description:
        "Complete engineering solutions from design to installation, ensuring optimal performance and safety standards.",
      features: [
        "Design Engineering",
        "Project Management",
        "Installation",
        "Commissioning",
      ],
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Rigorous quality control processes and testing to ensure all products meet international standards and specifications.",
      features: [
        "Material Testing",
        "NDT Services",
        "Certification",
        "Quality Control",
      ],
    },
    {
      icon: Settings,
      title: "Manufacturing",
      description:
        "State-of-the-art manufacturing facilities equipped with modern machinery for efficient production processes.",
      features: ["CNC Machining", "Plasma Cutting", "Rolling", "Forging"],
    },
    {
      icon: Truck,
      title: "Supply Chain",
      description:
        "Reliable supply chain management ensuring timely delivery of materials and finished products worldwide.",
      features: [
        "Logistics",
        "Warehousing",
        "Global Shipping",
        "Inventory Management",
      ],
    },
    {
      icon: Award,
      title: "Maintenance Support",
      description:
        "Comprehensive maintenance and support services to ensure long-term performance and reliability of steel structures.",
      features: [
        "Preventive Maintenance",
        "Repairs",
        "Upgrades",
        "Technical Support",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gradient-steel">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Services
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Comprehensive Steel Engineering Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            From design and fabrication to installation and maintenance, we
            provide end-to-end steel engineering services tailored to meet your
            specific requirements.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-steel transition-all duration-300 hover:-translate-y-2 bg-background border-border"
            >
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center gap-2 text-sm"
                    >
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  variant="ghost"
                  className="group/btn px-2 py-2 h-auto font-medium text-primary hover:text-white"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4  group-hover/btn:translate-x-1 transition-transform" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-background rounded-2xl p-8 shadow-steel">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Need Custom Steel Engineering Solutions?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our expert team is ready to discuss your specific requirements and
            provide tailored solutions that meet your project needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="steel" size="lg">
              Request Consultation
            </Button>
            <Button variant="outline" size="lg">
              Download Brochure
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
