"use client";

import React from "react";
import {
  Button,
  Typography,
  Card,
  CardBody,
} from "@material-tailwind/react";

import {
  ShieldCheckIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  ChartBarIcon,
} from "@heroicons/react/24/solid";

import CategoryCard from "@/components/category-card";

const CATEGORIES = [
  {
    img: "/image/blogs/blog-3.png",
    icon: ShieldCheckIcon,
    title: "Cybersecurity Services",
    desc: "Threat Protection & Compliance",
  },
  {
    img: "/image/blogs/blog-12.jpeg",
    icon: CloudArrowUpIcon,
    title: "Cloud Solutions",
    desc: "AWS, Azure & Google Cloud",
  },
  {
    img: "/image/blogs/blog-10.jpeg",
    icon: CpuChipIcon,
    title: "IT Infrastructure",
    desc: "Network & Systems",
  },
  {
    img: "/image/blogs/blog-13.png",
    icon: ChartBarIcon,
    title: "Digital Transformation",
    desc: "Enterprise Solutions",
  },
];

export function ServiceCategories() {
  return (
    <section className="container mx-auto px-8 py-36">
      <div className="mb-20 grid place-items-center text-center">
        <Typography variant="h2" color="blue-gray" className="my-3 font-heading">
          Our Expertise
        </Typography>
        <Typography variant="lead" className="!text-gray-500 lg:w-6/12 font-body">
          Enterprise-grade IT consulting solutions to secure, modernize, and transform 
          your business for the digital future.
        </Typography>
      </div>
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
        <Card
          color="gray"
          className="relative grid h-full w-full place-items-center overflow-hidden text-center"
        >
          <div className="absolute inset-0 h-full w-full bg-[#1a237e]/75" />
          <CardBody className="relative w-full">
            <Typography color="white" className="text-xs font-bold opacity-50 font-body">
              Enterprise Solutions
            </Typography>
            <Typography variant="h4" className="mt-9 font-heading" color="white">
              IT Consulting Services
            </Typography>
            <Typography
              color="white"
              className="mt-4 mb-14 font-normal opacity-50 font-body"
            >
              Secure, scalable, and innovative IT solutions for your business
            </Typography>
            <Button 
              size="sm" 
              className="bg-white text-[#1a237e] hover:bg-gray-200 font-body font-bold"
            >
              Get Started
            </Button>
          </CardBody>
        </Card>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(0, 2).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
        <div className="col-span-1 flex flex-col gap-6">
          {CATEGORIES.slice(2, 4).map((props, key) => (
            <CategoryCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServiceCategories;