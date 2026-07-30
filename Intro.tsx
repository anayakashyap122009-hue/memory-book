"use client";

import { motion } from "framer-motion";

interface IntroProps {
  onContinue: () => void;
}

export default function Intro({ onContinue }: IntroProps) {
  return (
    <section className="relative h-screen w-full overflow-hidden bg-gradient-to-b from-[#ffe8f4] via-[#fff5fa] to-white flex items-center justify-center px-6">

      {/* Background Glow */}
      <motion.div
        className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-pink-300/30 blur-3xl"
        animate={{
          x: [0, 40, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
      />

      <motion.div
        className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-purple-300/20 blur-3xl"
        animate={{
          x: [0, -30, 0],
          y: [0, -20, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
        }}
      />

      {/* Floating Sparkles */}

      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-xl"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [-10, 10, -10],
            opacity: [0.5, 1, 0.5],
            rotate: [0, 180],
          }}
          transition={{
            duration: 3 + Math.random() * 3,
            repeat: Infinity,
          }}
        >
          ✨
        </motion.div>
      ))}

      {/* Main Card */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        transition={{
          duration: 1,
        }}
        className="relative z-20 w-full max-w-sm rounded-[35px] bg-white/75 backdrop-blur-xl shadow-2xl p-8"
      >

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            repeat: Infinity,
            duration: 18,
            ease: "linear",
          }}
          className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-pink-100 text-5xl"
        >
          🌸
        </motion.div>

        <h1 className="mt-8 text-center text-4xl font-bold text-pink-700">
          Welcome
        </h1>

        <p className="mt-6 text-center leading-8 text-gray-600">
          This isn't just a website.
          <br />
          It's a collection of beautiful memories,
          little smiles,
          and moments worth keeping forever.
        </p>

        <div className="mt-10 rounded-2xl bg-pink-50 p-4 text-center text-pink-700">
          🎧 Put on your earphones for the best experience.
        </div>

        <motion.button
          whileTap={{
            scale: 0.96,
          }}
          whileHover={{
            scale: 1.03,
          }}
          onClick={onContinue}
          className="mt-10 w-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 py-4 text-lg font-semibold text-white shadow-xl"
        >
          Begin The Journey ❤️
        </motion.button>

      </motion.div>

      {/* Bottom Text */}

      <motion.p
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          delay: 1.5,
        }}
        className="absolute bottom-8 text-sm text-gray-400"
      >
        Made with love ✨
      </motion.p>

    </section>
  );
}
