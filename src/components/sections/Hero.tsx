/* eslint-disable @next/next/no-img-element */
import { Button } from "../ui-custom/Button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-28 pb-12 md:pt-32 md:pb-24 bg-hero-pattern">
      <div className="section-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 max-w-2xl">
            <div className="space-y-6">
              <div className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium slide-up" style={{ animationDelay: "0.1s" }}>
                Professional-grade AI
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight slide-up" style={{ animationDelay: "0.2s" }}>
                Remove backgrounds from images <span className="heading-highlight">instantly</span>
              </h1>
              <p className="text-lg text-foreground/80 slide-up" style={{ animationDelay: "0.3s" }}>
                Perfect, pixel-perfect background removal in seconds. No more tedious manual editing. Just upload, remove, and download.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 slide-up" style={{ animationDelay: "0.4s" }}>
              <Button size="lg" className="group">
                Try for Free
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="outline" size="lg">
                See Examples
              </Button>
            </div>

            <div className="pt-4 text-sm text-foreground/60 slide-up" style={{ animationDelay: "0.5s" }}>
              No credit card required. 5 free images per month.
            </div>
          </div>

          <div className="relative slide-in-right">
            <div className="absolute inset-0 bg-gradient-radial from-primary/10 to-transparent rounded-3xl animate-pulse" style={{ animationDuration: "4s" }}></div>
            <div className="relative glass rounded-3xl p-1 shadow-elevated overflow-hidden">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/3]">
                <img
                  src="/hero-image.jpg"
                  alt="Image with background removed"
                  className="w-full h-full object-cover"
                />
                
                {/* Visual element overlay to simulate background removal process */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-white/20 animate-shimmer"></div>
              </div>
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 glass px-4 py-2 rounded-full text-sm font-medium shadow-subtle">
                Powered by ClipDrop AI
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle decorative elements */}
      <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-blue-100 rounded-full opacity-50 blur-3xl"></div>
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-100 rounded-full opacity-30 blur-3xl"></div>
    </section>
  );
};

export default Hero;