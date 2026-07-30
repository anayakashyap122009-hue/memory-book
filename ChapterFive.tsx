"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

const photos = [
  "/images/01.jpg",
  "/images/02.jpg",
  "/images/03.jpg",
  "/images/04.jpg",
  "/images/05.jpg",
  "/images/06.jpg",
  "/images/07.jpg",
  "/images/08.jpg",
  "/images/09.jpg",
  "/images/10.jpg",
  "/images/11.jpg",
  "/images/12.jpg",
  "/images/13.jpg",
  "/images/14.jpg",
  "/images/15.jpg",
  "/images/16.jpg",
  "/images/17.jpg",
  "/images/18.jpg",
  "/images/19.jpg",
  "/images/20.jpg",
];

const positions = [
  { x: 0, y: -170 },
  { x: -80, y: -120 },
  { x: 80, y: -120 },
  { x: -140, y: -40 },
  { x: -60, y: -40 },
  { x: 20, y: -40 },
  { x: 100, y: -40 },
  { x: 160, y: -40 },
  { x: -160, y: 50 },
  { x: -90, y: 50 },
  { x: -20, y: 50 },
  { x: 50, y: 50 },
  { x: 120, y: 50 },
  { x: -120, y: 140 },
  { x: -50, y: 140 },
  { x: 20, y: 140 },
  { x: 90, y: 140 },
  { x: -60, y: 230 },
  { x: 20, y: 230 },
  { x: -20, y: 320 },
];

export default function ChapterFive() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-rose-50 via-pink-50 to-white px-5 py-24">

      <motion.h2
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-bold text-pink-700"
      >
        Chapter Five
      </motion.h2>

      <p className="mt-4 text-center text-gray-600">
        Every picture is one heartbeat of our story.
      </p>

      <div className="relative mx-auto mt-24 h-[700px] w-[360px]">

        {photos.map((photo, index) => (
          <motion.img
            key={index}
            src={photo}
            alt={`Memory ${index + 1}`}
            initial={{
              opacity: 0,
              scale: 0,
              rotate: Math.random() * 360,
              x: (Math.random() - 0.5) * 700,
              y: (Math.random() - 0.5) * 700,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
              rotate: 0,
              x: positions[index].x,
              y: positions[index].y,
            }}
            viewport={{ once: true }}
            transition={{
              duration: 1,
              delay: index * 0.08,
            }}
            className="absolute left-1/2 top-1/2 h-20 w-20 rounded-2xl border-4 border-white object-cover shadow-2xl"
          />
        ))}

      </div>

      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: .8 }}
        className="mx-auto mt-20 max-w-md rounded-[35px] bg-white/80 p-7 shadow-2xl"
      >
        <Typewriter
          speed={26}
          className="text-lg leading-9 text-gray-700"
          text={`Twenty photographs...

Twenty little pieces of time.

Each one holding a smile.

A laugh.

A memory.

A feeling.

Individually they're beautiful.

Together...

they create something even more special.`}
        />
      </motion.div>
            </motion.div>

      {/* ============================
          Glowing Heart Background
      ============================ */}

      <motion.div
        className="absolute left-1/2 top-[42%] -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-pink-300/20 blur-[120px]"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.35, 0.6, 0.35],
        }}
        transition={{
          repeat: Infinity,
          duration: 2.8,
        }}
      />

      {/* Floating Sparkles */}

      {[...Array(30)].map((_, i) => (

        <motion.div

          key={i}

          className="absolute text-yellow-300"

          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            fontSize: `${12 + Math.random() * 16}px`,
          }}

          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.5, 0.8],
            rotate: [0, 180],
          }}

          transition={{
            repeat: Infinity,
            duration: 2 + Math.random() * 3,
            delay: Math.random() * 2,
          }}

        >

          ✨

        </motion.div>

      ))}

      {/* Floating Hearts */}

      {[...Array(18)].map((_, i) => (

        <motion.div

          key={`heart-${i}`}

          className="absolute text-pink-400"

          style={{
            left: `${Math.random() * 100}%`,
            bottom: `-${Math.random() * 120}px`,
            fontSize: `${18 + Math.random() * 18}px`,
          }}

          animate={{
            y: ["0vh", "-130vh"],
            x: [0, -15, 15, 0],
            opacity: [0, 1, 0],
            rotate: [0, 20, -20, 0],
          }}

          transition={{
            repeat: Infinity,
            duration: 8 + Math.random() * 4,
            delay: Math.random() * 5,
          }}

        >

          ❤️

        </motion.div>

      ))}

      {/* Final Quote */}

      <motion.div

        initial={{
          opacity: 0,
          scale: 0.9,
        }}

        whileInView={{
          opacity: 1,
          scale: 1,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
        }}

        className="mx-auto mt-24 max-w-md rounded-[35px] bg-gradient-to-r from-pink-100 to-rose-100 p-8 shadow-2xl"

      >

        <h2 className="text-center text-3xl font-bold text-pink-700">

          ❤️ Our Heart ❤️

        </h2>

        <p className="mt-6 text-center leading-9 text-gray-700">

          Every photo here carries a memory.

          Every memory carries a feeling.

          Every feeling carries a piece of us.

          And together...

          they create one beautiful heart.

        </p>

      </motion.div>

      {/* Ending */}

      <motion.div

        initial={{
          opacity: 0,
          y: 50,
        }}

        whileInView={{
          opacity: 1,
          y: 0,
        }}

        viewport={{
          once: true,
        }}

        transition={{
          duration: 0.8,
        }}

        className="mt-24 text-center"

      >

        <h2 className="text-5xl font-bold text-pink-700">

          Forever Begins Here...

        </h2>

        <p className="mx-auto mt-6 max-w-md leading-8 text-gray-600">

          Our journey isn't measured in days.

          It's measured in memories.

          And I can't wait to create thousands more with you.

        </p>

      </motion.div>

    </section>

  );

}
