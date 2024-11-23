"use client";

import { motion } from "framer-motion";
import { 
  Layers, 
  Zap, 
  Shield, 
  Code2, 
  Palette, 
  LayoutGrid 
} from "lucide-react";

const features = [
  {
    name: "Modern Design",
    description: "Clean and modern UI that follows the latest design trends and best practices.",
    icon: Palette,
  },
  {
    name: "Fully Responsive",
    description: "Layouts that work perfectly across all devices and screen sizes.",
    icon: LayoutGrid,
  },
  {
    name: "Developer Friendly",
    description: "Well-structured code that's easy to customize and maintain.",
    icon: Code2,
  },
  {
    name: "Regular Updates",
    description: "Constant updates with new features and security patches.",
    icon: Zap,
  },
  {
    name: "Premium Support",
    description: "Dedicated support team to help you with any questions.",
    icon: Shield,
  },
  {
    name: "Multiple Frameworks",
    description: "Templates available for React, Vue, Angular, and more.",
    icon: Layers,
  },
];

export function Features() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything you need to build modern applications
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our templates and UI kits come packed with features that make
            development faster and easier.
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 max-w-7xl px-6 lg:px-8"
        >
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col rounded-lg border bg-card p-8 shadow-sm transition-all hover:shadow-md"
              >
                <div className="mb-6">
                  <div className="rounded-lg bg-primary/10 p-2 w-10 h-10 flex items-center justify-center">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold">{feature.name}</h3>
                <p className="mt-2 text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}