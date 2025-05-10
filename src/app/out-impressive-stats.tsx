"use client";

import React from "react";
import { Typography } from "@material-tailwind/react";
import {
  ShieldCheckIcon,
  CloudArrowUpIcon,
  CpuChipIcon,
  ClockIcon,
} from "@heroicons/react/24/solid";

import StatsCard from "@/components/stats-card";

const STATS = [
  {
    icon: ShieldCheckIcon,
    count: "500+",
    title: "Enterprise Clients",
  },
  {
    icon: CloudArrowUpIcon,
    count: "99.9%",
    title: "System Uptime",
  },
  {
    icon: CpuChipIcon,
    count: "24/7",
    title: "Support Coverage",
  },
  {
    icon: ClockIcon,
    count: "15+",
    title: "Years Experience",
  },
];

export function OutImpressiveStats() {
  return (
    <section className="px-8 pt-60">
      <div className="container mx-auto text-center lg:text-left">
        <div className="grid place-items-center text-center">
          <Typography variant="h2" color="blue-gray" className="mb-2 text-4xl">
            Our Enterprise Impact
          </Typography>
          <Typography
            variant="lead"
            className="mx-auto mb-24 w-full !text-gray-500 lg:w-5/12"
          >
            Delivering excellence in IT consulting and digital transformation for businesses worldwide.
          </Typography>
        </div>
        <div className="grid gap-y-16 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
          {STATS.map((props, key) => (
            <StatsCard key={key} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default OutImpressiveStats;