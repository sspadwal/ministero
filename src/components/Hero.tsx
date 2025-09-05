import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

export const Hero = () => {
  const features = [
    "30+ Years of Excellence",
    "ISO 9001:2015 Certified",
    "Advanced Manufacturing",
    "Quality Assurance",
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-hero relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] repeat"></div>
      </div>

      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-block bg-primary text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              Leading Steel Engineering Solutions
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Engineering Excellence in
              <span className="text-primary-glow"> Steel Solutions</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              With over three decades of expertise, Ministero Steel Engineering
              delivers world-class steel products and engineering solutions for
              industrial applications worldwide.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map(feature => (
                <div
                  key={feature}
                  className="flex items-center gap-2 text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-primary-glow flex-shrink-0" />
                  <span className="text-sm font-medium">{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="steel" size="lg" className="group">
                Explore Our Products
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="text-primary  hover:bg-primary hover:text-white"
              >
                Contact Us Today
              </Button>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative">
            <div className="relative z-10 bg-gradient-steel rounded-2xl p-8 shadow-deep">
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-6 bg-background rounded-xl shadow-steel">
                  <div className="text-3xl font-bold text-primary mb-2">
                    500+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Projects Completed
                  </div>
                </div>
                <div className="text-center p-6 bg-background rounded-xl shadow-steel">
                  <div className="text-3xl font-bold text-primary mb-2">
                    30+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Years Experience
                  </div>
                </div>
                <div className="text-center p-6 bg-background rounded-xl shadow-steel">
                  <div className="text-3xl font-bold text-primary mb-2">
                    100+
                  </div>
                  <div className="text-sm text-muted-foreground">
                    Happy Clients
                  </div>
                </div>
                <div className="text-center p-6 bg-background rounded-xl shadow-steel">
                  <div className="text-3xl font-bold text-primary mb-2">
                    24/7
                  </div>
                  <div className="text-sm text-muted-foreground">Support</div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-2xl"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary-glow/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
