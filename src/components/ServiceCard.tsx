import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  Paintbrush,
  Palette,
  Layers,
  Image,
  FileType,
  Lightbulb,
} from "lucide-react";

interface ServiceCardProps {
  icon?: React.ElementType;
  iconName?: "logo" | "brand" | "uiux" | "social" | "print" | "custom";
  title?: string;
  description?: string;
}

const ServiceCard = ({
  icon: Icon,
  iconName = "logo",
  title = "Logo Design",
  description = "Professional logo design that captures your brand essence and makes a lasting impression.",
}: ServiceCardProps) => {
  // Map icon names to Lucide icons
  const getIcon = () => {
    if (Icon) return Icon;

    const iconMap = {
      logo: Paintbrush,
      brand: Palette,
      uiux: Layers,
      social: Image,
      print: FileType,
      custom: Lightbulb,
    };

    return iconMap[iconName];
  };

  const IconComponent = getIcon();

  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="h-full"
    >
      <Card className="h-full bg-white border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
        <CardContent className="flex flex-col items-center text-center p-6 h-full">
          <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center mb-4 mt-4">
            <IconComponent className="w-8 h-8 text-orange-500" />
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-gray-600 text-sm">{description}</p>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ServiceCard;
