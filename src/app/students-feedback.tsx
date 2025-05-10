"use client";
import React from "react";
import FeedbackCard from "@/components/feedback-card";
import { Typography } from "@material-tailwind/react";

const TESTIMONIALS = [
  {
    feedback:
      "Talent Quest Consulting transformed our IT infrastructure with their innovative solutions. Their team's expertise in cloud migration and security implementation exceeded our expectations.",
    client: "Sarah Chen",
    title: "CTO @ TechInnovate Solutions",
    img: "/image/avatar1.jpg",
  },
  {
    feedback:
      "The cybersecurity solutions provided by Talent Quest have significantly enhanced our data protection. Their proactive approach and 24/7 support give us complete peace of mind.",
    client: "Michael Rodriguez",
    title: "IT Director @ Global Finance Corp",
    img: "/image/avatar3.jpg",
  },
  {
    feedback:
      "Working with Talent Quest has been a game-changer for our digital transformation journey. Their custom software development and integration services have streamlined our operations.",
    client: "Emily Thompson",
    title: "Operations Manager @ Digital Dynamics",
    img: "/image/avatar2.jpg",
  },
];

export function ClientTestimonials() {
  return (
    <section className="px-8 py-36">
      <div className="container mx-auto">
        <div className="mb-16 flex flex-col items-center w-full">
          <Typography variant="h2" color="blue-gray" className="mb-2 font-heading">
            Client Success Stories
          </Typography>
          <Typography
            variant="lead"
            className="mb-10 max-w-3xl lg:text-center !text-gray-500 font-body"
          >
            Discover how our IT solutions have helped businesses transform their operations, 
            enhance security, and drive innovation. Here&apos;s what our clients have to say about 
            their experience with Talent Quest Consulting.
          </Typography>
        </div>
        <div className="grid gap-x-8 gap-y-12 lg:px-32 grid-cols-1 md:grid-cols-3">
          {TESTIMONIALS.map((props, key) => (
            <FeedbackCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default ClientTestimonials;
