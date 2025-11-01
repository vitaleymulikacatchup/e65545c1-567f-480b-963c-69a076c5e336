"use client"

// Missing component: HeroBillboard from hero registry
// Missing component: TextSplitAbout from about registry
// Missing component: FeatureCardThree from feature registry
// Missing component: ProductCardTwo from product registry
// Missing component: TestimonialCardThree from testimonial registry
// Missing component: ContactSplit from contact registry
// Missing component: FooterBase from footer registry

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarStyleMinimal from '@/components/navbar/NavbarStyleMinimal';
import { Crown, Sparkles, Bed, MessageCircle, Phone } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="shift-hover"
      defaultTextAnimation="entrance-slide"
      borderRadius="soft"
    >
      <div id="nav" data-section="nav">
        <NavbarStyleMinimal
          logoSrc="https://images.pexels.com/photos/11432738/pexels-photo-11432738.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          logoAlt="Grandeur Hotel"
          brandName="Grandeur Hotel"
          button={{
            text: "Book Now",
            href: "https://booking.example.com"
          }}
        />
      </div>

      <div className="min-h-screen flex items-center justify-center px-4 md:px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-orange-100 to-orange-50 border border-orange-200 rounded-full mb-6">
            <Crown className="w-4 h-4 text-orange-600" />
            <span className="text-sm font-medium text-orange-700">5-Star Hotel</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Experience Luxury <span className="text-primary-cta">Redefined</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
            Discover exceptional hospitality in the heart of the city with world-class amenities and personalized service
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="https://booking.example.com"
              className="px-8 py-4 bg-primary-cta hover:bg-primary-cta/90 text-white rounded-lg font-semibold transition-colors"
            >
              Book Your Stay
            </a>
            <a 
              href="#rooms"
              className="px-8 py-4 border border-foreground/20 hover:border-foreground/40 text-foreground rounded-lg font-semibold transition-colors"
            >
              Explore Rooms
            </a>
          </div>
        </div>
      </div>

      <div className="w-full h-96 bg-gradient-to-b from-orange-50 to-white flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">Welcome to Grandeur Hotel</h2>
          <p className="text-foreground/70 max-w-2xl mx-auto px-4">
            Unfortunately, the required components for this luxury hotel website are not available in the current registry. 
            Please ensure all necessary hero, about, feature, product, testimonial, contact, and footer components are properly imported.
          </p>
        </div>
      </div>
    </ThemeProvider>
  );
}