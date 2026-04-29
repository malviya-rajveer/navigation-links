"use client";
import { IconExternalLink } from "@tabler/icons-react";
import { useState } from "react";
import { motion } from "motion/react";
export const Hoverlink = ({ title }: { title: string }) => {
  const [hover, setHover] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() =>
        setTimeout(() => {
          setHover(false);
        }, 170)
      }
      initial={{
        backgroundColor: "",
      }}
      animate={
        hover
          ? {
              backgroundColor: "var(--color-hover)",
            }
          : {}
      }
      transition={{
        duration: 0.05,
        ease: "easeOut",
      }}
      className="relative z-50 mx-auto flex w-full cursor-pointer justify-between overflow-hidden py-1 transition-colors duration-300 ease-in-out md:w-2xl"
    >
      <div className="flex flex-wrap px-2 text-xl whitespace-pre">{title}</div>
      <IconExternalLink size={25} strokeWidth={1} className="" />
      {/* <motion.div
        initial={{ translateX: "-100%" }}
        animate={
          hover
            ? {
                translateX: "0%",
              }
            : {}
        }
        transition={{
          duration: 0.4,
          ease: [0.754, -0.008, 0.129, 1.002],
        }}
        className="absolute bottom-0 h-px w-full bg-cyan-100/70"
      ></motion.div> */}
    </motion.div>
  );
};
