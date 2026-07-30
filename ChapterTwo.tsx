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
                {/* ===============================
                    Quote Card
                =============================== */}

                <motion.div

                    initial={{
                        opacity: 0,
                        scale: .9
                    }}

                    whileInView={{
                        opacity: 1,
                        scale: 1
                    }}

                    viewport={{
                        once: true
                    }}

                    transition={{
                        duration: .8
                    }}

                    className="mt-14 rounded-[30px] bg-gradient-to-r from-pink-100 to-rose-100 p-7 shadow-xl"

                >

                    <p
                        style={{
                            fontFamily: "cursive"
                        }}
                        className="text-center text-2xl text-pink-700 leading-10"
                    >
                        "Every picture is a little piece of forever."
                    </p>

                </motion.div>

                {/* ===============================
                    Second Scrapbook Card
                =============================== */}

                <div className="mt-16">

                    <ScrapbookCard

                        image="/images/05.jpg"

                        caption="A memory that still makes my heart smile."

                        rotate={5}

                    />

                </div>

                {/* ===============================
                    Mini Film Strip
                =============================== */}

                <motion.div

                    initial={{
                        opacity:0,
                        y:80
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.8
                    }}

                    className="mt-20"

                >

                    <div className="rounded-[30px] bg-black p-4 shadow-2xl">

                        <div className="grid grid-cols-3 gap-3">

                            <img
                                src="/images/06.jpg"
                                className="aspect-[3/4] rounded-xl object-cover"
                            />

                            <img
                                src="/images/07.jpg"
                                className="aspect-[3/4] rounded-xl object-cover"
                            />

                            <img
                                src="/images/08.jpg"
                                className="aspect-[3/4] rounded-xl object-cover"
                            />

                        </div>

                    </div>

                </motion.div>

                {/* ===============================
                    Ending Letter
                =============================== */}

                <motion.div

                    initial={{
                        opacity:0,
                        y:80
                    }}

                    whileInView={{
                        opacity:1,
                        y:0
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.8
                    }}

                    className="mt-20"

                >

                    <Typewriter

                        speed={30}

                        className="text-lg leading-9 text-gray-700"

                        text={`Some memories don't become old.

They become precious.

Sometimes all it takes is one photograph...

to relive an entire day.

To hear the laughter again.

To remember the tiny details.

And to smile without even realizing it.

Maybe that's the magic of memories.

They never really leave us.

They simply wait...

until we look back again.`}

                    />

                </motion.div>

                {/* ===============================
                    Continue
                =============================== */}

                <motion.div

                    initial={{
                        opacity:0
                    }}

                    whileInView={{
                        opacity:1
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        delay:.3
                    }}

                    className="mt-24 text-center"

                >

                    <h3 className="text-4xl font-bold text-pink-700">

                        Our Story Continues...

                    </h3>

                    <p className="mt-5 text-gray-500 leading-8">

                        Every scroll uncovers another
                        beautiful page of our journey.

                    </p>

                </motion.div>

            </div>

        </section>

    );

}
