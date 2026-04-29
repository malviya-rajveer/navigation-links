"use client";

import { useEffect, useState } from "react";
import { motion, stagger, useAnimate } from "motion/react";
import { IconExternalLink } from "@tabler/icons-react";

export function ShutterText({ title }: { title: string }) {
  const text = title;
  const chars = text.split("");

  const part1End = Math.floor(chars.length / 3);
  const part2End = Math.floor(chars.length / 3);

  const [scope, animate] = useAnimate();
  const [hover, setHover] = useState(false);
  useEffect(() => {
    // StartAnimation();

    if (!hover) return;
    const run = async () => {
      //   PART 1
      animate([
        [
          `[data-char]:nth-child(-n+${part1End})`,
          { opacity: [0, 1] },
          {
            duration: 0,
            ease: "easeOut",
            delay: stagger(0.16),
          },
        ],
      ]);
      // PART 2
      await animate([
        [
          `[data-char]:nth-child(n+${part2End + 1})`,
          { opacity: [0, 1] },
          {
            duration: 0.1,
            delay: stagger(0.05),
          },
        ],
      ]);
      animate([
        [
          `[data-char]:nth-child(-n+${part1End})`,
          { opacity: [0, 1] },
          {
            duration: 0,
            ease: "easeOut",
            delay: stagger(0.04),
          },
        ],
      ]);
      await animate([
        [
          `[data-char]:nth-child(n+${part2End + 1})`,
          { opacity: [0, 1] },
          {
            duration: 0.1,
            delay: stagger(0.04),
          },
        ],
      ]);
    };

    run();
  }, [hover]);

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() =>
        setTimeout(() => {
          setHover(false);
        }, 100)
      }
      className="relative z-50 mx-auto flex w-full cursor-pointer justify-between overflow-hidden py-2 md:w-2xl"
    >
      <div ref={scope} className="font- flex flex-wrap text-xl whitespace-pre">
        {chars.map((char, i) => (
          <span
            key={i}
            data-char
            className="data-char inline-block will-change-transform"
          >
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>
      <IconExternalLink size={25} strokeWidth={1} className="" />
      <motion.div
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
      ></motion.div>
    </div>
  );
}
