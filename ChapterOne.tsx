"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

export default function ChapterOne() {
  return (
    <section className="relative min-h-screen bg-[#FFF7FB] overflow-hidden px-6 py-20">

      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">

        <motion.div
          className="absolute -top-32 -left-24 w-72 h-72 rounded-full bg-pink-200/40 blur-3xl"
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
          className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 15,
          }}
        />

      </div>

      <div className="relative z-10 max-w-md mx-auto">

        {/* Heading */}

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
          className="text-4xl font-bold text-pink-700 text-center"
        >
          Chapter One
        </motion.h2>

        <motion.p
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          viewport={{ once:true }}
          transition={{ delay:.3 }}
          className="text-center text-gray-500 mt-2"
        >
          Every journey has a beginning.
        </motion.p>

        {/* First Image */}

        <motion.div

          initial={{
            opacity:0,
            rotate:-8,
            y:100
          }}

          whileInView={{
            opacity:1,
            rotate:-5,
            y:0
          }}

          viewport={{once:true}}

          transition={{
            duration:1
          }}

          className="mt-12 bg-white p-3 rounded-3xl shadow-2xl"
        >

          <img

            src="/images/02.jpg"

            className="rounded-2xl w-full object-cover"

            alt=""

          />

        </motion.div>

        {/* Letter */}

        <div className="mt-12">

          <Typewriter

            className="leading-9 text-lg text-gray-700"

            speed={35}

            text={`Every memory begins with a moment that seems ordinary at first.

But years later, it becomes priceless.

Looking back at these pictures reminds me that time never truly disappears.

It quietly transforms into memories we carry forever.`}

          />

        </div>

        {/* Second Image */}

        <motion.div

          initial={{
            opacity:0,
            rotate:8,
            x:80
          }}

          whileInView={{
            opacity:1,
            rotate:4,
            x:0
          }}

          viewport={{once:true}}

          transition={{
            duration:1
          }}

          className="mt-14 bg-white p-3 rounded-3xl shadow-xl"
        >

          <img

            src="/images/03.jpg"

            className="rounded-2xl w-full"

            alt=""

          />

        </motion.div>

        {/* Quote */}

        <motion.div

          initial={{opacity:0}}

          whileInView={{opacity:1}}

          transition={{delay:.4}}

          viewport={{once:true}}

          className="mt-12"

        >

          <p className="italic text-center text-pink-600 text-xl">

            "Some memories never fade."

          </p>

        </motion.div>

      </div>

    </section>
  );
}
