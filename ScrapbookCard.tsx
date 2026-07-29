"use client";

import { motion } from "framer-motion";

interface ScrapbookCardProps {
  image: string;
  caption: string;
  rotate?: number;
}

export default function ScrapbookCard({
  image,
  caption,
  rotate = 0,
}: ScrapbookCardProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        rotate,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        rotate,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
      }}
      whileHover={{
        rotate: rotate + 2,
        scale: 1.03,
      }}
      className="relative mx-auto w-[310px]"
    >
      {/* Tape */}
      <div className="absolute left-1/2 top-0 z-20 h-8 w-20 -translate-x-1/2 -translate-y-1/2 rotate-[-5deg] rounded-sm bg-yellow-100 opacity-80 shadow" />

      {/* Card */}
      <div className="rounded-[30px] bg-white p-3 shadow-2xl">
        <img
          src={image}
          alt={caption}
          className="h-[390px] w-full rounded-2xl object-cover"
        />

        <p
          style={{
            fontFamily: "cursive",
          }}
          className="py-4 text-center text-lg text-pink-700"
        >
          {caption}
        </p>
      </div>
    </motion.div>
  );
}
