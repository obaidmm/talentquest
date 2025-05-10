import React from "react";

import { Typography, Card, CardBody, Avatar, Rating } from "@material-tailwind/react";

interface FeedbackCardProps {
  img: string;
  feedback: string;
  client: string;
  title: string;
}

export function FeedbackCard({ img, feedback, client, title }: FeedbackCardProps) {
  return (
    <Card shadow={false} className="items-start text-left hover:shadow-lg transition-shadow duration-300">
      <CardBody>
        <Avatar src={img} className="mb-2" alt={client} size="xl" />
        <Typography variant="h6" color="blue-gray" className="font-heading">
          {client}
        </Typography>
        <Typography
          variant="small"
          color="blue-gray"
          className="mt-1 mb-5 block font-body font-medium"
        >
          {title}
        </Typography>
        <Typography
          variant="paragraph"
          className="mb-6 font-body text-gray-600 leading-relaxed"
        >
          &quot;{feedback}&quot;
        </Typography>
        <Rating value={5} readonly className="text-[#1a237e]" />
      </CardBody>
    </Card>
  );
}
export default FeedbackCard;