"use client";

import { motion } from "framer-motion";
import { Download, Users, Star, Code2 } from "lucide-react";

const stats = [
  {
    name: "Downloads",
    value: "100K+",
    icon: Download,
    description: "Total downloads across all products",
  },
  {
    name: "Active Users",
    value: "50K+",
    icon: Users,
    description: "Developers using our templates",
  },
  {
    name: "5-Star Reviews",
    value: "10K+",
    icon: Star,
    description: "From satisfied customers",
  },
  {
    name: "Updates",
    value: "500+",
    icon: Code2,
    description: "Regular feature updates and fixes",
  },
];

export function Stats() {
  return (
    <section className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {stats.map((stat) => (
            <div
              key={stat.name}
              className="relative overflow-hidden rounded-lg border bg-card p-8"
            >
              <div className="flex items-center gap-4">
                <div className="rounded-lg bg-primary/10 p-2 w-12 h-12 flex items-center justify-center">
                  <stat.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">
                    {stat.name}
                  </div>
                </div>
              </div>
              <p className="mt-4 text-sm text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}