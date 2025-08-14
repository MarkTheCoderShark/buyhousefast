"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Play, Star, Quote, MapPin } from "lucide-react";
import { motion } from "framer-motion";

interface VideoTestimonial {
  id: string;
  name: string;
  location: string;
  thumbnail: string;
  videoUrl: string;
  preview: string;
  saleAmount: string;
  timeframe: string;
  situation: string;
  rating: number;
}

const videoTestimonials: VideoTestimonial[] = [
  {
    id: "1",
    name: "Jennifer Martinez",
    location: "Los Angeles, CA",
    thumbnail: "https://images.unsplash.com/photo-1494790108755-2616b612b601?w=400&h=300&fit=crop&crop=face",
    videoUrl: "#",
    preview: "I was facing foreclosure and thought I'd lose everything. SellHouseFast gave me a fair offer and saved my credit. The process was so smooth and professional.",
    saleAmount: "$625,000",
    timeframe: "11 days",
    situation: "Foreclosure",
    rating: 5
  },
  {
    id: "2", 
    name: "Robert Chen",
    location: "Seattle, WA",
    thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=300&fit=crop&crop=face",
    videoUrl: "#",
    preview: "After my father passed, I inherited his house but lived out of state. SellHouseFast handled everything remotely. I never had to visit the property.",
    saleAmount: "$485,000",
    timeframe: "8 days",
    situation: "Inherited Property",
    rating: 5
  },
  {
    id: "3",
    name: "Lisa Thompson", 
    location: "San Diego, CA",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=300&fit=crop&crop=face",
    videoUrl: "#",
    preview: "We got a new job across the country and needed to sell fast. Traditional listing would have taken months. They closed in 2 weeks exactly as promised.",
    saleAmount: "$775,000",
    timeframe: "14 days", 
    situation: "Job Relocation",
    rating: 5
  }
];

export default function VideoTestimonialsSection() {
  const playVideo = (videoId: string) => {
    // In a real implementation, this would open a video modal or player
    console.log(`Playing video: ${videoId}`);
  };

  return (
    <section className="py-16 md:py-24 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Hear From Real Homeowners
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch these heartfelt stories from homeowners who sold their properties to us. 
            Real people, real situations, real results.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {videoTestimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden hover:shadow-lg transition-shadow group">
                {/* Video Thumbnail */}
                <div className="relative">
                  <div 
                    className="aspect-video bg-cover bg-center relative cursor-pointer"
                    style={{ backgroundImage: `url(${testimonial.thumbnail})` }}
                    onClick={() => playVideo(testimonial.id)}
                  >
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center group-hover:bg-black/50 transition-colors">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-white/90 rounded-full p-4 shadow-lg"
                      >
                        <Play className="h-8 w-8 text-primary ml-1" fill="currentColor" />
                      </motion.div>
                    </div>
                  </div>
                  
                  {/* Video Duration Badge */}
                  <Badge className="absolute top-3 right-3 bg-black/70 text-white">
                    2:30
                  </Badge>
                </div>

                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.thumbnail} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                  
                  {/* Star Rating */}
                  <div className="flex items-center gap-2 mt-2">
                    <div className="flex">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {testimonial.situation}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Quote Preview */}
                  <div className="relative">
                    <Quote className="absolute -top-1 -left-1 h-5 w-5 text-primary/20" />
                    <p className="text-sm text-muted-foreground leading-relaxed pl-4">
                      {testimonial.preview}
                    </p>
                  </div>

                  {/* Sale Details */}
                  <div className="grid grid-cols-2 gap-4 pt-3 border-t border-border/50">
                    <div className="text-center">
                      <div className="text-lg font-bold text-primary">{testimonial.saleAmount}</div>
                      <div className="text-xs text-muted-foreground">Sale Price</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-bold text-green-600">{testimonial.timeframe}</div>
                      <div className="text-xs text-muted-foreground">Time to Close</div>
                    </div>
                  </div>

                  {/* Watch Button */}
                  <Button 
                    variant="outline" 
                    className="w-full" 
                    onClick={() => playVideo(testimonial.id)}
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Watch Full Story
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Share Your Success Story?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Join hundreds of satisfied homeowners who got fair cash offers and closed quickly.
            Your situation could be our next success story.
          </p>
          <a href="#lead-form">
            <Button size="lg" className="h-12 px-8 rounded-full">
              Get Your Cash Offer Today
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
} 