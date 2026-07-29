"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import ScrapbookCard from "./ScrapbookCard";

export default function ChapterOne() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#FFF7FB] px-6 py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          className="absolute -top-32 -left-24 h-72 w-72 rounded-full bg-pink-200/40 blur-3xl"
          animate={{
            x: [0, 40, 0],
            y: [0, 50, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 12,
          }}
        />

        <motion.div
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-200/30 blur-3xl"
          animate={{
            x: [0, -40, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 14,
          }}
        />

      </div>

      <div className="relative z-10 mx-auto max-w-md">

        {/* Floating Decorations */}

        <motion.div
          className="absolute left-2 top-16 text-3xl"
          animate={{
            y: [-8, 8, -8],
            rotate: [-6, 6, -6],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
        >
          🌸
        </motion.div>

        <motion.div
          className="absolute right-4 top-56 text-2xl"
          animate={{
            y: [8, -8, 8],
          }}
          transition={{
            repeat: Infinity,
            duration: 5,
          }}
        >
          ✨
        </motion.div>

        <motion.div
          className="absolute left-6 bottom-28 text-3xl"
          animate={{
            rotate: [-8, 8, -8],
          }}
          transition={{
            repeat: Infinity,
            duration: 6,
          }}
        >
          💖
        </motion.div>

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-center text-4xl font-bold text-pink-700"
        >
          Chapter One
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="mt-3 text-center text-gray-500"
        >
          Every journey has a beginning.
        </motion.p>

        {/* First Scrapbook Card */}

        <div className="mt-14">

          <ScrapbookCard
            image="/images/02.jpg"
            caption="A little moment worth keeping forever."
            rotate={-5}
          />

        </div>

        {/* Letter */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .4 }}
          className="mt-14 rounded-3xl bg-white/70 p-6 shadow-xl backdrop-blur-sm"
        >

          <Typewriter
            speed={35}
            className="text-lg leading-9 text-gray-700"
            text={`Every memory begins with a moment that seems ordinary at first.

But years later, it becomes priceless.

Looking back at these pictures reminds me that time never truly disappears.

It quietly transforms into memories we carry forever.

And maybe...
that's the most beautiful part of life.`}
          />

        </motion.div>

        {/* Quote */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: .3 }}
          className="my-14"
        >

          <p
            style={{
              fontFamily: "cursive",
            }}
            className="text-center text-2xl text-pink-600"
          >
            "Some memories never fade."
          </p>

        </motion.div>

        {/* Second Scrapbook Card */}

        <ScrapbookCard
          image="/images/03.jpg"
          caption="Some smiles never grow old."
          rotate={4}
        />

        {/* Bottom Text */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="mt-20 text-center"
        >

          <h3 className="text-3xl font-semibold text-pink-700">
            More Memories Ahead...
          </h3>

          <p className="mt-4 text-gray-500 leading-7">
            Keep scrolling and let every picture tell
            another beautiful chapter.
          </p>

        </motion.div>

      </div>

    </section>
  );
}
