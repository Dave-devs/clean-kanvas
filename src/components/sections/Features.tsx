import { features } from '@/constants'
import React from 'react'

const Features = () => {
  return (
      <section id="features" className="py-24 bg-white">
          <div className="section-container">
              <div className="text-center max-w-3xl mx-auto mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                      Effortless Background Removal
                  </h2>
                  <p className="text-lg text-foreground/70">
                      Our AI-powered technology makes removing backgrounds simple, fast, and precise. No technical skills required.
                  </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                      <div
                          key={index}
                          className="p-6 rounded-xl bg-white border border-gray-100 shadow-subtle hover:shadow-elevated transition-shadow duration-300"
                      >
                          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-50 mb-4">
                              {feature.icon}
                          </div>
                          <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                          <p className="text-foreground/70">{feature.description}</p>
                      </div>
                  ))}
              </div>
          </div>
      </section>
  )
}

export default Features