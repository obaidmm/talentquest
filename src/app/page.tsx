// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import ServiceCategories from "./courses-categories";
import OurSolutions from "./explore-courses";
import Testimonial from "./testimonial";
import Events from "./events";
import ClientTestimonials from "./students-feedback";
import TrustedCompany from "./trusted-companies";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <OutImpressiveStats />
      <ServiceCategories />
      <OurSolutions />
      {/* <Testimonial /> */}
      {/* <Events /> */}
      <ClientTestimonials />
      <TrustedCompany />
      <Footer />
    </>
  );
}
