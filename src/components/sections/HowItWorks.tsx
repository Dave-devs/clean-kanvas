import { steps } from "@/constants";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-24 bg-secondary/50">
      <div className="section-container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
          <p className="text-lg text-foreground/70">
            Three simple steps to perfect background removal
          </p>
        </div>

        <div className="space-y-12 md:space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-8 md:gap-12`}
            >
              <div className="w-full md:w-1/2 space-y-4">
                <div className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium">
                  {step.number}
                </div>
                <h3 className="text-2xl md:text-3xl font-bold">{step.title}</h3>
                <p className="text-foreground/70 text-lg">{step.description}</p>

                {index === steps.length - 1 && (
                  <div className="pt-4">
                    <Link
                      href="#"
                      className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
                    >
                      Get started for free
                      <ArrowRight className="ml-2 size-4" />
                    </Link>
                  </div>
                )}
              </div>

              <div className="w-full md:w-1/2">
                <div
                  className={`glass rounded-2xl overflow-hidden shadow-elevated ${
                    index !== steps.length - 1
                      ? "bg-accent-foreground/90"
                      : "bg-[conic-gradient(#333333_90deg,#666666_90deg_180deg,#333333_180deg_270deg,#666666_270deg)] bg-[length:10px_10px]"
                  }`}
                >
                  <Image
                    src={step.image}
                    alt={step.title}
                    width={800}
                    height={450}
                    className="w-full h-auto aspect-video object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
