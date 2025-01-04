"use client";
import { MaskContainer } from "../components/ui/svg-mask-effect";
import { Cover } from "@/components/ui/cover";
import React from "react";

const Approach = () => {
  return (
    <div className="h-[80vh] w-full flex items-center justify-center">
      <div className="h-full w-full flex items-center justify-center overflow-hidden">
        <MaskContainer
          revealSize={1000}
          revealText={
            <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              A strategic approach to designing, planning, and deploying dynamic masking effects for impactful
              <br />
              at <Cover>visual engagement</Cover>
            </h1>
          }
          className="h-[90%] w-[80%] rounded-md mx-auto"
        />
      </div>
    </div>
  );
};

export default Approach;
