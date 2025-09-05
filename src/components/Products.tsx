import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";
import { title } from "process";

export const Products = () => {
  const products = [
    {
      id: "stainless-steel-pipes",
      title: "Stainless Steel Pipes & Tubes",
      description:
        "High-quality stainless steel pipes and tubes for various industrial applications",
      image: "./product-images/pipes-tubes.webp",
      specifications: [
        "304, 304L, 316, 316L grades",
        "Seamless & welded",
        "Various sizes available",
        "ASTM/ASME standards",
      ],
      applications: [
        "Chemical industry",
        "Oil & gas",
        "Food processing",
        "Pharmaceuticals",
      ],
    },
    {
      id: "stainless-steel-flanges",
      title: "Stainless Steel Flanges",
      description:
        "Precision-engineered flanges for secure pipe connections and fittings",
      image: "./product-images/flanges.webp",
      specifications: [
        "ANSI B16.5 standard",
        "150# to 2500# class",
        "Raised face & flat face",
        "Custom sizes available",
      ],
      applications: [
        "Piping systems",
        "Pressure vessels",
        "Heat exchangers",
        "Pumps & valves",
      ],
    },
    {
      id: "stainless-steel-sheet-plates",
      title: "Stainless Steel Sheets & Plates",
      description:
        "Premium quality sheets and plates for structural and fabrication applications",
      image: "./product-images/sheet-plates.webp",
      specifications: [
        "Hot rolled & cold rolled",
        "2B, BA, No.4 finish",
        "0.3mm to 100mm thickness",
        "Standard & custom sizes",
      ],
      applications: [
        "Construction",
        "Automotive",
        "Shipbuilding",
        "Architecture",
      ],
    },
    {
      id: "stainless-steel-round-bars",
      title: "Stainless Steel Round Bars & Rods",
      description:
        "High-grade round bars and rods for machining and fabrication purposes",
      image: "./product-images/round-bar.webp",
      specifications: [
        "Hot finished & cold drawn",
        "6mm to 500mm diameter",
        "Standard lengths",
        "Bright & black finish",
      ],
      applications: [
        "Fasteners",
        "Machined components",
        "Shafts",
        "Structural elements",
      ],
    },
    {
      id: "stainless-steel-buttweld-fittings",
      title: "Stainless Steel Butt Weld Fittings",
      description:
        "Heavy-duty structural steel products for construction and engineering projects",
      image: "./product-images/buttweld-fittings.webp",
      specifications: [
        "I-beams, H-beams",
        "Channels & angles",
        "Various grades",
        "Cut to length",
      ],
      applications: [
        "Building construction",
        "Bridges",
        "Industrial structures",
        "Infrastructure",
      ],
    },
    {
      id: "stainless-steel-fasteners",
      title: "Stainless Steel Fasteners",
      description:
        "Tailored steel fabrication services for specialized industrial requirements",
      image: "./product-images/fasteners.webp",
      specifications: [
        "CAD/CAM design",
        "CNC machining",
        "Welding services",
        "Surface treatment",
      ],
      applications: [
        "Equipment manufacturing",
        "Custom components",
        "Prototype development",
        "Special projects",
      ],
    },
  ];

  return (
    <section id="products" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            Our Products
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Premium Steel Products for Every Application
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Discover our comprehensive range of high-quality steel products,
            engineered to meet the demanding requirements of modern industry and
            construction projects.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {products.map((product, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-steel transition-all duration-300 hover:-translate-y-1"
            >
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>

              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-foreground mb-3">
                  {product.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {product.description}
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Specifications */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      Specifications
                    </h4>
                    <div className="space-y-2">
                      {product.specifications.map((spec, specIndex) => (
                        <div
                          key={specIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <CheckCircle className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{spec}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Applications */}
                  <div>
                    <h4 className="text-sm font-bold text-foreground mb-3 uppercase tracking-wide">
                      Applications
                    </h4>
                    <div className="space-y-2">
                      {product.applications.map((app, appIndex) => (
                        <div
                          key={appIndex}
                          className="flex items-start gap-2 text-sm"
                        >
                          <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground">{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <Link to={`/products/${product.id}`}>
                  <Button
                    variant="ghost"
                    className="group px-2 py-2 h-auto font-medium text-primary hover:text-white"
                  >
                    View Details
                    <ArrowRight className="w-4 h-4  group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Quality Assurance Section */}
        <div className="bg-gradient-steel rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Quality Assurance & Certifications
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
            All our products undergo rigorous quality testing and are certified
            to meet international standards including ASTM, ASME, DIN, and JIS
            specifications.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <div className="bg-background px-6 py-3 rounded-full shadow-steel">
              <span className="font-bold text-primary">ISO 9001:2015</span>
            </div>
            <div className="bg-background px-6 py-3 rounded-full shadow-steel">
              <span className="font-bold text-primary">ASTM Certified</span>
            </div>
            <div className="bg-background px-6 py-3 rounded-full shadow-steel">
              <span className="font-bold text-primary">ASME Standards</span>
            </div>
            <div className="bg-background px-6 py-3 rounded-full shadow-steel">
              <span className="font-bold text-primary">CE Marking</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="steel" size="lg">
              Request Product Catalog
            </Button>
            <Button variant="outline" size="lg">
              Get Custom Quote
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
