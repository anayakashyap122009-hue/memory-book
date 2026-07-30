"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Typewriter from "./Typewriter";

export default function ChapterThree() {

    const [selected, setSelected] = useState<string | null>(null);

    const photos = [
        "/images/09.jpg",
        "/images/10.jpg",
        "/images/11.jpg",
        "/images/12.jpg",
        "/images/13.jpg",
        "/images/14.jpg",
    ];

    return (

        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#F9F4FF] via-[#FFF7FD] to-white px-6 py-24">

            {/* Dreamy Background */}

            <motion.div
                className="absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-pink-300/20 blur-[120px]"
                animate={{
                    scale: [1, 1.15, 1],
                }}
                transition={{
                    repeat: Infinity,
                    duration: 8,
                }}
            />

            {/* Floating Stars */}

            {[...Array(18)].map((_, i) => (

                <motion.div

                    key={i}

                    className="absolute text-yellow-300"

                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        fontSize: `${12 + Math.random() * 14}px`,
                    }}

                    animate={{
                        opacity: [.2, 1, .2],
                        scale: [.8, 1.4, .8],
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 2 + Math.random() * 3,
                    }}

                >

                    ✦

                </motion.div>

            ))}

            <div className="relative z-20 mx-auto max-w-md">

                <motion.h2

                    initial={{ opacity: 0, y: 50 }}

                    whileInView={{ opacity: 1, y: 0 }}

                    viewport={{ once: true }}

                    transition={{ duration: .8 }}

                    className="text-center text-5xl font-bold text-purple-700"

                >

                    Chapter Three

                </motion.h2>

                <motion.p

                    initial={{ opacity: 0 }}

                    whileInView={{ opacity: 1 }}

                    viewport={{ once: true }}

                    transition={{ delay: .3 }}

                    className="mt-5 text-center leading-8 text-gray-600"

                >

                    Some memories shine brighter
                    than the stars.

                </motion.p>

                {/* Hanging Memory Wall */}

                <div className="mt-16 space-y-10">

                    {photos.map((photo, index) => (

                        <motion.div

                            key={photo}

                            initial={{
                                opacity: 0,
                                y: 80,
                                rotate: index % 2 === 0 ? -4 : 4,
                            }}

                            whileInView={{
                                opacity: 1,
                                y: 0,
                            }}

                            viewport={{ once: true }}

                            transition={{
                                duration: .8,
                                delay: index * .15,
                            }}

                            className="relative"

                        >

                            {/* Hanging String */}

                            <div className="absolute left-1/2 -top-10 h-10 w-[2px] -translate-x-1/2 bg-gray-400" />

                            {/* Pin */}

                            <div className="absolute left-1/2 -top-3 h-4 w-4 -translate-x-1/2 rounded-full bg-pink-500 shadow-lg" />

                            <motion.div

                                whileTap={{
                                    scale: .96,
                                }}

                                onClick={() => setSelected(photo)}

                                className="overflow-hidden rounded-[28px] bg-white p-3 shadow-2xl"

                            >

                                <img

                                    src={photo}

                                    className="aspect-[3/4] w-full rounded-2xl object-cover"

                                    alt="Memory"

                                />

                            </motion.div>

                        </motion.div>

                    ))}

                </div>

                {/* Letter */}

                <motion.div

                    initial={{
                        opacity: 0,
                        y: 80,
                    }}

                    whileInView={{
                        opacity: 1,
                        y: 0,
                    }}

                    viewport={{
                        once: true,
                    }}

                    transition={{
                        duration: .8,
                    }}

                    className="mt-20 rounded-[35px] bg-white/70 p-7 shadow-2xl backdrop-blur-xl"

                >

                    <Typewriter

                        speed={30}

                        className="text-lg leading-9 text-gray-700"

                        text={`Sometimes...

I wonder if photographs have feelings.

Because every time I see them,

they somehow make my heart feel exactly

what it felt in that moment.

And maybe...

that's why memories are so powerful.`}

                    />

                </motion.div>
