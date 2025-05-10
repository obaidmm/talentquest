"use client";

import { Typography } from "@material-tailwind/react";
import CourseCard from "@/components/course-card";

const SOLUTIONS = [
  {
    img: "/image/blogs/blog4.svg",
    tag: "Enterprise • Security • Compliance",
    title: "Cybersecurity Assessment",
    label: "Learn More",
    desc: "Comprehensive security evaluation and risk management for your enterprise infrastructure.",
  },
  {
    img: "/image/blogs/blog3.svg",
    tag: "Cloud • Migration • AWS/Azure",
    title: "Cloud Migration",
    label: "Learn More",
    desc: "Seamless transition to cloud platforms with minimal disruption to your business operations.",
  },
  {
    img: "/image/blogs/blog2.svg",
    tag: "Infrastructure • Modernization",
    title: "IT Infrastructure",
    label: "Learn More",
    desc: "Upgrade your legacy systems with cutting-edge technology solutions.",
  },
  {
    img: "/image/blogs/blog5.svg",
    tag: "Strategy • Implementation",
    title: "Digital Transformation",
    label: "Learn More",
    desc: "Strategic planning and implementation of digital initiatives to drive business growth.",
  },
  {
    img: "/image/blogs/blog6.svg",
    tag: "Support • Maintenance",
    title: "IT Operations",
    label: "Learn More",
    desc: "24/7 monitoring, maintenance, and support for your critical IT infrastructure.",
  },
  {
    img: "/image/blogs/blog4.svg",
    tag: "Data • Analytics • BI",
    title: "Data Analytics",
    label: "Learn More",
    desc: "Transform your business data into actionable insights with advanced analytics solutions.",
  },
];

export function OurSolutions() {
  return (
    <section className="px-8">
      <div className="container mx-auto mb-24 text-center">
        <Typography variant="h2" color="blue-gray">
          Our Solutions
        </Typography>
        <Typography
          variant="lead"
          className="mt-2 mx-auto w-full px-4 !text-gray-500 lg:w-6/12 lg:px-8"
        >
          Comprehensive IT consulting solutions designed to transform your business operations
          and drive innovation in the digital age.
        </Typography>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-x-10 gap-y-24 md:grid-cols-2 lg:grid-cols-3 lg:gap-x-14">
        {SOLUTIONS.map((props, idx) => (
          <CourseCard key={idx} {...props} />
        ))}
      </div>
    </section>
  );
}

export default OurSolutions;
