"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const products = [
  {
    title: "Materio",
    description: "Material Design Admin Template",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2070&auto=format&fit=crop",
    price: "$59",
    badge: "Popular",
    features: ["React", "Material UI", "TypeScript", "Redux"],
  },
  {
    title: "Vuexy",
    description: "Vue.js Admin Dashboard",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2070&auto=format&fit=crop",
    price: "$69",
    badge: "Featured",
    features: ["Vue.js", "Vuetify", "Vuex", "TypeScript"],
  },
  {
    title: "Sneat",
    description: "Bootstrap 5 Admin Template",
    image: "https://images.unsplash.com/photo-1618788372246-79faff0c3742?q=80&w=2070&auto=format&fit=crop",
    price: "$49",
    badge: "New",
    features: ["Bootstrap 5", "SCSS", "jQuery", "Chart.js"],
  },
];

export function Products() {
  return (
    <section className="bg-muted/50 py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Popular Templates
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Choose from our collection of premium admin templates and UI kits
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {products.map((product) => (
            <Card key={product.title} className="overflow-hidden">
              <CardHeader className="p-0">
                <div className="relative">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-[16/9] w-full object-cover"
                  />
                  {product.badge && (
                    <Badge
                      className="absolute right-4 top-4"
                      variant="secondary"
                    >
                      {product.badge}
                    </Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <CardTitle>{product.title}</CardTitle>
                <CardDescription className="mt-2">
                  {product.description}
                </CardDescription>
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.features.map((feature) => (
                    <Badge key={feature} variant="outline">
                      {feature}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex items-center justify-between border-t p-6">
                <span className="text-2xl font-bold">{product.price}</span>
                <Button>View Details</Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
        <div className="mt-16 text-center">
          <Button size="lg" variant="outline">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  );
}