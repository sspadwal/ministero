import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Target, 
  Eye, 
  Users, 
  Globe, 
  Award, 
  Zap,
  ArrowRight,
  Shield
} from "lucide-react";

export const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "Committed to delivering superior quality and precision in every project we undertake."
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Building trust through consistent performance and dependable service delivery."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Embracing cutting-edge technology and modern engineering solutions."
    },
    {
      icon: Users,
      title: "Partnership",
      description: "Working collaboratively with clients to achieve their vision and goals."
    }
  ];

  const achievements = [
    { number: "30+", label: "Years of Experience", icon: Award },
    { number: "500+", label: "Projects Completed", icon: Target },
    { number: "100+", label: "Satisfied Clients", icon: Users },
    { number: "25+", label: "Countries Served", icon: Globe }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
            About Ministero Steel
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Three Decades of Steel Engineering Excellence
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Leading the Steel Industry with Innovation and Quality
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Established in 1994, Ministero Steel Engineering Pvt. Ltd. has grown to become 
              one of the leading steel engineering companies in the industry. With over three 
              decades of experience, we specialize in providing comprehensive steel solutions 
              for diverse industrial applications.
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Our expertise spans across steel fabrication, structural engineering, manufacturing, 
              and supply chain management. We pride ourselves on delivering high-quality products 
              that meet international standards while maintaining competitive pricing and timely delivery.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              As an ISO 9001:2015 certified company, we ensure that every project we undertake 
              meets the highest quality standards. Our commitment to excellence has earned us 
              the trust of clients across 25+ countries worldwide.
            </p>
            <Button variant="steel" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-steel transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <achievement.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{achievement.number}</div>
                  <div className="text-sm text-muted-foreground font-medium">{achievement.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="p-8 bg-gradient-steel border-0">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Vision</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To be the global leader in steel engineering solutions, recognized for our 
                innovation, quality, and commitment to sustainable development. We strive to 
                shape the future of steel engineering through cutting-edge technology and 
                exceptional service delivery.
              </p>
            </CardContent>
          </Card>

          <Card className="p-8 bg-gradient-steel border-0">
            <CardContent className="p-0">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground">Our Mission</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                To deliver world-class steel engineering solutions that exceed client expectations 
                through innovative design, superior quality, and reliable service. We are committed 
                to building long-term partnerships and contributing to our clients' success.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Core Values */}
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8">Our Core Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="p-6 text-center hover:shadow-steel transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-0">
                  <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h4 className="text-lg font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};