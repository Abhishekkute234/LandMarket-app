"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
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

const plans = [
  {
    name: "Starter",
    description: "Perfect for small projects",
    price: "$49",
    features: [
      "1 Admin Template",
      "Basic Support",
      "6 Months Updates",
      "Community Access",
    ],
  },
  {
    name: "Pro",
    description: "Best for professional developers",
    price: "$99",
    badge: "Popular",
    features: [
      "3 Admin Templates",
      "Priority Support",
      "12 Months Updates",
      "Community Access",
      "Premium Components",
      "Design Files",
    ],
  },
  {
    name: "Enterprise",
    description: "For large scale applications",
    price: "$199",
    features: [
      "All Admin Templates",
      "24/7 Support",
      "Lifetime Updates",
      "Community Access",
      "Premium Components",
      "Design Files",
      "Custom Development",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="py-24">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Simple, transparent pricing
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Choose the perfect plan for your needs. All plans include access to
              our community and basic support.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-7xl gap-8 lg:grid-cols-3"
        >
          {plans.map((plan) => (
            <Card
              key={plan.name}
              className={plan.badge ? "border-primary shadow-lg" : ""}
            >
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-2xl">{plan.name}</CardTitle>
                  {plan.badge && (
                    <Badge variant="secondary">{plan.badge}</Badge>
                  )}
                </div>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="mb-6">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  <span className="text-muted-foreground">/lifetime</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-primary" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full" variant={plan.badge ? "default" : "outline"}>
                  Get Started
                </Button>
              </CardFooter>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}