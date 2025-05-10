"use client";
import { Button } from "@material-tailwind/react";
import { EnvelopeIcon } from "@heroicons/react/24/solid";

export function FixedPlugin() {
  return (
    <Button
      color="blue"
      size="sm"
      className="!fixed bottom-4 right-4 flex gap-2 pl-2 items-center bg-[#1a237e] hover:bg-[#283593]"
    >
      <EnvelopeIcon className="w-5 h-5" />
      Contact Us
    </Button>
  );
}
