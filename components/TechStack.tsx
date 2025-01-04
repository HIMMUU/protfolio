"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { TextHoverEffect } from "./ui/text-hover-effect";

const techStacks = [
  { name: "JavaScript", logo: "/js.svg" },
  { name: "TypeScript", logo: "/typescript.svg" },
  { name: "Node.js", logo: "/nodejs.svg" },
  { name: "React", logo: "/react.svg" },
  { name: "Next.js", logo: "/nextjs.svg" },
  { name: "C", logo: "/cc.svg" },
  { name: "C++", logo: "/cpp.svg" },
  { name: "Python", logo: "/py.svg" },
  { name: "PostgresSQL", logo: "/postgresSQL.svg" },
  { name: "Docker", logo: "/Dock.svg" },
];

const TechStack = () => {
  return (
    <div>
      <div className="h-[30rem] flex items-center justify-center mb-0"> {/* Reduced margin-bottom to 1 */}
        <TextHoverEffect text="TECHNOLOGIES" />
      </div>

      <div className="relative w-full overflow-hidden bg-black-100 dark:bg-black-100 py-2"> {/* Reduced padding */}
        {/* Double Border at Top */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#313345]"></div>
        <div className="absolute top-[2px] left-0 w-full h-[2px] bg-[#313345]"></div>

        {/* Scrolling Content */}
        <div className="flex items-center w-[200%]">
          <motion.div
            className="flex space-x-6 items-center w-full"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 30, // Adjust speed here
            }}
          >
            {[...techStacks, ...techStacks].map((stack, idx) => (
              <div key={idx} className="flex-shrink-0 flex items-center w-[10%] min-w-[150px]">
                <Image
                  src={stack.logo}
                  alt={`${stack.name} Logo`}
                  width={80}
                  height={80}
                  className="h-16 w-16 object-contain mx-4"
                />
                <span className="hidden sm:block text-neutral-700 dark:text-neutral-300 font-medium text-lg">
                  {stack.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Double Border at Bottom */}
        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#313345]"></div>
        <div className="absolute bottom-[2px] left-0 w-full h-[2px] bg-[#313345]"></div>
      </div>
    </div>
  );
};

export default TechStack;
