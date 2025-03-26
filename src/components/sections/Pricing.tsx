import React from 'react'
import { plans } from '@/constants';
import { CheckCircle2 } from 'lucide-react';
import { Button } from '../ui-custom/Button';

const Pricing = () => {
  return (
      <section id="pricing" className="py-24 bg-white">
          <div className="section-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Simple, Transparent Pricing
                  </h2>
                  <p className="text-lg text-foreground/70">
                      Choose the perfect plan for your background removal needs
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {plans.map((plan, index) => (
                      <div
                          key={index}
                          className={`rounded-2xl p-8 transition-all duration-300 ${plan.popular
                                  ? "border-2 border-primary shadow-elevated scale-105 md:scale-110"
                                  : "border border-gray-200 shadow-subtle hover:shadow-elevated hover:scale-105"
                              }`}
                      >
                          {plan.popular && (
                              <div className="inline-block bg-blue-100 text-primary px-3 py-1 rounded-full text-sm font-medium mb-4">
                                  Most Popular
                              </div>
                          )}

                          <h3 className="text-2xl font-bold">{plan.name}</h3>

                          <div className="mt-4 mb-6">
                              <span className="text-4xl font-bold">${plan.price}</span>
                              <span className="text-foreground/70">/month</span>
                          </div>

                          <ul className="space-y-3 mb-8">
                              {plan.features.map((feature, i) => (
                                  <li key={i} className="flex items-start">
                                      <CheckCircle2 className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-0.5" />
                                      <span>{feature}</span>
                                  </li>
                              ))}
                          </ul>

                          <Button
                              variant={plan.popular ? "primary" : "outline"}
                              className={`w-full ${!plan.popular && "hover:bg-primary/5"}`}
                          >
                              {plan.cta}
                          </Button>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Pricing