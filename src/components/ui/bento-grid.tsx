import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  backgroundImage, // Background image prop remains
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  backgroundImage?: string; // New prop for background image
}) => {
  return (
    <motion.div
      className={cn(
        "row-span-1 rounded-xl brightness-75 hover:shadow-xl transition duration-200 p-4 dark:bg-black bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundImage: `url(${backgroundImage})`, // Set background image
        backgroundSize: "cover", // Adjust to cover the entire card
        backgroundPosition: "center", // Center the image
        color: "#fff", // Make sure text is visible on dark images
        padding: "1.5rem",
      }}
      whileHover={{ scale: 1.2 }} // Scale up on hover
      transition={{ type: "spring", stiffness: 300 }} // Smooth transition
    >
      <div className="font-sans font-bold text-lg mb-2">{title}</div>
      <div className="font-sans font-normal text-sm">{description}</div>
    </motion.div>
  );
};
