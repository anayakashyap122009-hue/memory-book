"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";

export default function ChapterSix() {

    const reasons = [

        "Your smile brightens even my darkest days.",
        "You make ordinary moments feel extraordinary.",
        "You're my biggest comfort and my safest place.",
        "Every conversation with you becomes my favourite memory.",
        "You inspire me to become a better person.",
        "You make my world complete."

    ];

    return (

        <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#fffaf5] via-[#fff5f7] to-[#fffdfd] px-6 py-24">

            {/* Candle Glow */}

            <motion.div

                className="absolute left-1/2 top-20 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-300/30 blur-[90px]"

                animate={{

                    scale:[1,1.15,1],

                    opacity:[0.4,0.8,0.4]

                }}

                transition={{

                    repeat:Infinity,

                    duration:3

                }}

            />

            {/* Floating Feathers */}

            {[...Array(18)].map((_,i)=>(

                <motion.div

                    key={i}

                    className="absolute text-2xl"

                    style={{

                        left:`${Math.random()*100}%`,

                        top:`-${Math.random()*200}px`

                    }}

                    animate={{

                        y:["0vh","120vh"],

                        rotate:[0,360],

                        x:[0,-30,30,0]

                    }}

                    transition={{

                        repeat:Infinity,

                        duration:10+Math.random()*6,

                        delay:Math.random()*5

                    }}

                >

                    🕊️

                </motion.div>

            ))}

            <div className="relative z-20 mx-auto max-w-md">

                <motion.h2

                    initial={{opacity:0,y:40}}

                    whileInView={{opacity:1,y:0}}

                    viewport={{once:true}}

                    className="text-center text-5xl font-bold text-rose-700"

                >

                    Chapter Six

                </motion.h2>

                <p className="mt-5 text-center text-gray-600 leading-8">

                    A page straight from my heart.

                </p>

                {/* Notebook */}

                <motion.div

                    initial={{opacity:0,y:80}}

                    whileInView={{opacity:1,y:0}}

                    viewport={{once:true}}

                    transition={{duration:.8}}

                    className="mt-16 rounded-[35px] bg-white p-8 shadow-2xl"

                >

                    <Typewriter

                        speed={24}

                        className="text-lg leading-9 text-gray-700"

                        text={`If I had one notebook to write about my life...

every page would somehow lead back to you.

You became the smile I search for,

the peace I never knew I needed,

and the reason ordinary days became beautiful.

Thank you for existing.

Thank you for choosing me.

Thank you for every tiny memory we've created together.

I promise to keep making new ones,

one day at a time.`}

                    />

                </motion.div>

                {/* Reasons */}

                <div className="mt-20 space-y-6">

                    {reasons.map((reason,index)=>(

                        <motion.div

                            key={index}

                            initial={{

                                opacity:0,

                                x:index%2===0?-40:40

                            }}

                            whileInView={{

                                opacity:1,

                                x:0

                            }}

                            viewport={{

                                once:true

                            }}

                            transition={{

                                duration:.7,

                                delay:index*.1

                            }}

                            className="rounded-3xl bg-white/80 p-5 shadow-xl backdrop-blur"

                        >

                            <h3 className="font-semibold text-pink-700">

                                ❤️ Reason {index+1}

                            </h3>

                            <p className="mt-2 text-gray-700 leading-7">

                                {reason}

                            </p>

                        </motion.div>

                    ))}
                {/* Final Promise */}

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

                    className="mt-20 rounded-[35px] bg-gradient-to-br from-rose-100 via-pink-50 to-white p-8 shadow-2xl"

                >

                    <Typewriter

                        speed={22}

                        className="text-lg leading-9 text-gray-700"

                        text={`No matter where life takes us...

I promise I'll always choose you.

On the easy days.

On the difficult days.

When we laugh.

When we cry.

When we're together.

Even when we're apart.

Because loving you isn't something I have to think about...

it's simply become a part of who I am.

And if I had another lifetime...

I'd still search for you all over again.`}

                    />

                </motion.div>

                {/* I Choose You Card */}

                <motion.div

                    initial={{
                        opacity:0,
                        scale:.9
                    }}

                    whileInView={{
                        opacity:1,
                        scale:1
                    }}

                    viewport={{
                        once:true
                    }}

                    transition={{
                        duration:.8
                    }}

                    className="mt-16 rounded-[35px] bg-white/80 p-8 shadow-2xl text-center"

                >

                    <h2 className="text-4xl font-bold text-pink-700">

                        ❤️ I Choose You ❤️

                    </h2>

                    <p className="mt-6 leading-9 text-gray-700">

                        Yesterday.

                        Today.

                        Tomorrow.

                        And every day after that.

                    </p>

                </motion.div>

                {/* Ending */}

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

                    <h2 className="text-5xl font-bold text-rose-700">

                        One Last Chapter...

                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">

                        There's still one more page left...

                        and it's my favourite one.

                    </p>

                </motion.div>

            </div>

            {/* Golden Sparkles */}

            {[...Array(25)].map((_,i)=>(

                <motion.div

                    key={i}

                    className="absolute text-yellow-300"

                    style={{
                        left:`${Math.random()*100}%`,
                        top:`${Math.random()*100}%`,
                        fontSize:`${12+Math.random()*18}px`
                    }}

                    animate={{
                        opacity:[0.2,1,0.2],
                        scale:[0.8,1.4,0.8],
                        rotate:[0,360]
                    }}

                    transition={{
                        repeat:Infinity,
                        duration:3+Math.random()*2,
                        delay:Math.random()*3
                    }}

                >

                    ✨

                </motion.div>

            ))}

        </section>

    );

}
                </div>
