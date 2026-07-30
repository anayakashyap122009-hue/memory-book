"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import ScrapbookCard from "./ScrapbookCard";

export default function ChapterTwo() {

    return (

        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#FFF8FC] via-[#FFF5FA] to-[#FFFDFD] py-24 px-5">

            {/* ===============================
                    Animated Background
            =============================== */}

            <motion.div
                className="absolute -top-32 -left-24 w-72 h-72 rounded-full bg-pink-300/20 blur-3xl"
                animate={{
                    x: [0, 40, 0],
                    y: [0, 60, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 12
                }}
            />

            <motion.div
                className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-300/20 blur-3xl"
                animate={{
                    x: [0, -30, 0],
                    y: [0, -40, 0]
                }}
                transition={{
                    repeat: Infinity,
                    duration: 14
                }}
            />

            {/* Floating Flowers */}

            {[...Array(10)].map((_, index) => (

                <motion.div

                    key={index}

                    className="absolute text-2xl"

                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`
                    }}

                    animate={{
                        y: [-10, 15, -10],
                        rotate: [-10, 10, -10],
                        opacity: [0.5, 1, 0.5]
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 4 + index
                    }}

                >

                    🌸

                </motion.div>

            ))}

            <div className="relative z-20 max-w-md mx-auto">

                {/* ===============================
                        Heading
                =============================== */}

                <motion.h2

                    initial={{
                        opacity: 0,
                        y: 60
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: 1
                    }}

                    className="text-center text-5xl font-bold text-pink-700"

                >

                    Chapter Two

                </motion.h2>

                <motion.p

                    initial={{
                        opacity: 0
                    }}

                    whileInView={{
                        opacity: 1
                    }}

                    transition={{
                        delay: .3
                    }}

                    className="mt-4 text-center text-gray-500 leading-8"

                >

                    Some memories become more beautiful
                    every single time we revisit them.

                </motion.p>

                {/* ===============================
                    First Scrapbook Photo
                =============================== */}

                <div className="mt-16">

                    <ScrapbookCard

                        image="/images/04.jpg"

                        caption="A smile worth remembering forever."

                        rotate={-5}

                    />

                </div>

                {/* ===============================
                    Love Letter
                =============================== */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 80
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: .8
                    }}

                    className="mt-16 rounded-[35px] bg-white/70 backdrop-blur-xl shadow-2xl p-7"

                >

                    <Typewriter

                        speed={32}

                        className="text-[18px] leading-9 text-gray-700"

                        text={`There are photographs...

that don't simply capture faces.

They capture feelings.

The kind of happiness

that can never be recreated.

Only remembered.

Everyyy timee I look backkk,

it feels like life quietly whispers,

"Don't forgettt this momenttt."

And honestlyyyy...

I never want tooo.`}

                    />

                </motion.div>
