"use client";

import Image from "next/image";
import { Button, Typography, Card } from "@material-tailwind/react";

function Hero() {
  return (
    <div className="!flex h-[55vh] w-full items-center justify-between px-10">
      <Image
        width={1200}
        height={1200}
        src="/image/hero.png"
        alt="bg-img"
        className="absolute inset-0 ml-auto w-[920px] h-[780px] rounded-bl-[100px] object-cover object-center"
      />
      <div className="container mx-auto mt-28">
        <div className="grid grid-cols-12 text-center lg:text-left">
          <Card className="col-span-full rounded-xl border border-white bg-white/90 py-10 p-8 shadow-lg shadow-black/10 backdrop-blur-sm backdrop-saturate-200 xl:col-span-7">
            <Typography
              variant="h1"
              color="blue-gray"
              className="font-heading lg:text-5xl !leading-snug text-3xl lg:max-w-3xl font-bold tracking-tight"
            >
              Elevating Your Digital Future
            </Typography>
            <Typography variant="lead" className="font-body mb-10 mt-6 !text-gray-900 leading-relaxed">
              Harness the power of innovative IT solutions crafted by our passionate team of experts. 
              We deliver tailored tech strategies that drive growth, secure assets, and transform possibilities into reality.
            </Typography>
            <div className="mb-8 flex justify-center gap-4 lg:justify-start">
              <Button 
                color="blue" 
                className="bg-[#1a237e] hover:bg-[#283593] font-body font-bold"
              >
                Explore Solutions
              </Button>
              <Button 
                color="blue" 
                variant="outlined"
                className="border-[#1a237e] text-[#1a237e] hover:bg-[#1a237e] hover:text-white font-body font-bold"
              >
                Schedule Consultation
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
export default Hero;
