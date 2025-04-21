import React from "react";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

interface ProjectCardProps {
  image?: string;
  onClick?: () => void;
}

const ProjectCard = ({
  image = "https://i.imgur.com/Q6BY95F.jpg",
  onClick = () => console.log("Project card clicked"),
}: ProjectCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="cursor-pointer"
      onClick={onClick}
    >
      <Card className="overflow-hidden bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <div className="w-full overflow-hidden">
          <img
            src={image}
            alt="Portfolio image"
            className="w-full h-auto transition-transform duration-300 hover:scale-105"
          />
        </div>
      </Card>
    </motion.div>
  );
};

export default ProjectCard;
