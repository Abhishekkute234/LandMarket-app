"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const docs = [
  {
    title: "Getting Started",
    description: "Learn how to install and set up our templates",
    link: "#",
  },
  {
    title: "Components",
    description: "Explore our collection of pre-built components",
    link: "#",
  },
  {
    title: "Customization",
    description: "Learn how to customize themes and components",
    link: "#",
  },
  {
    title: "Authentication",
    description: "Implement user authentication in your app",
    link: "#",
  },
  {
    title: "API Integration",
    description: "Connect your app with external services",
    link: "#",
  },
  {
    title: "Deployment",
    description: "Deploy your application to production",
    link: "#",
  },
];

export default function DocsPage() {
  return (
    <div className="py-24">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Documentation
          </h1>
          <p className="mt-6 text-lg text-muted-foreground">
            Everything you need to know about our templates and components
          </p>
          <div className="mt-8 flex items-center gap-2">
            <Input
              placeholder="Search documentation..."
              className="max-w-md mx-auto"
            />
            <Button size="icon">
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mx-auto mt-16 grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {docs.map((doc) => (
            <Card key={doc.title} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <CardTitle>{doc.title}</CardTitle>
                <CardDescription>{doc.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="link" className="px-0">
                  Learn more →
                </Button>
              </CardContent>
            </Card>
          ))}
        </motion.div>
      </div>
    </div>
  );
}