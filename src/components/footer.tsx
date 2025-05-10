import React from "react";
import { Typography } from "@material-tailwind/react";

const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-gray-200 py-6 md:justify-between">
          <Typography className="text-center font-body !font-bold text-gray-900">
            &copy; {CURRENT_YEAR} Talent Quest Consulting. All Rights Reserved.
          </Typography>
          <ul className="flex items-center gap-8">
            <li>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-body font-medium text-gray-900"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-body font-medium text-gray-900"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-body font-medium text-gray-900"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
                variant="small"
                className="font-body font-medium text-gray-900"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
