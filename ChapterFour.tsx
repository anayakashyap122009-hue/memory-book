"use client";

import { motion } from "framer-motion";
import Typewriter from "./Typewriter";
import ScrapbookCard from "./ScrapbookCard";

export default function ChapterFour() {

    const timeline = [

        {
            title: "The Beginning ❤️",
            text: "The day everything started... and my life quietly became happier."
        },

        {
            title: "Countless Smiles 😊",
            text: "Every little conversation slowly became my favourite part of the day."
        },

        {
            title: "Beautiful Memories 📸",
            text: "From tiny moments to unforgettable days... every memory became priceless."
        },

        {
            title: "Today 💕",
            text: "And here we are... still writing the most beautiful story together."
        }

    ];

    return (

        <section className="relative overflow-hidden bg-gradient-to-b from-pink-50 via-rose-50 to-white px-6 py-24">

            {/* Floating Petals */}

            {[...Array(30)].map((_, i) => (

                <motion.div

                    key={i}

                    className="absolute text-pink-300 text-xl"

                    style={{
                        left: `${Math.random() * 100}%`,
                        top: `-${Math.random() * 100}px`,
                    }}

                    animate={{
                        y: ["0vh", "120vh"],
                        rotate: [0, 360],
                        x: [-20, 20, -20],
                    }}

                    transition={{
                        repeat: Infinity,
                        duration: 8 + Math.random() * 6,
                        delay: Math.random() * 6,
                    }}

                >

                    🌸

                </motion.div>

            ))}

            <div className="relative z-20 mx-auto max-w-md">

                <motion.h2

                    initial={{ opacity:0, y:50 }}

                    whileInView={{ opacity:1, y:0 }}

                    viewport={{ once:true }}

                    transition={{ duration:.8 }}

                    className="text-center text-5xl font-bold text-pink-700"

                >

                    Chapter Four

                </motion.h2>

                <p className="mt-5 text-center leading-8 text-gray-600">

                    Every chapter of us became
                    another reason to smile.

                </p>

                {/* Timeline */}

                <div className="mt-16 space-y-10">

                    {timeline.map((item, index)=>(

                        <motion.div

                            key={index}

                            initial={{
                                opacity:0,
                                x:index%2===0?-60:60
                            }}

                            whileInView={{
                                opacity:1,
                                x:0
                            }}

                            viewport={{
                                once:true
                            }}

                            transition={{
                                duration:.8
                            }}

                            className="rounded-[30px] bg-white p-6 shadow-xl"

                        >

                            <h3 className="text-2xl font-bold text-pink-700">

                                {item.title}

                            </h3>

                            <p className="mt-4 leading-8 text-gray-600">

                                {item.text}

                            </p>

                        </motion.div>

                    ))}

                </div>

                <div className="mt-20">

                    <ScrapbookCard

                        image="/images/15.jpg"

                        caption="One smile. A thousand memories."

                        rotate={-4}

                    />

                </div>

                <div className="mt-14">

                    <ScrapbookCard

                        image="/images/16.jpg"

                        caption="Some moments deserve forever."

                        rotate={5}

                    />

                </div>

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

                    className="mt-20 rounded-[35px] bg-white/80 p-7 shadow-2xl"

                >

                    <Typewriter

                        speed={28}

                        className="text-lg leading-9 text-gray-700"

                        text={`Every day with you becomes another memory worth keeping.

The funny moments.

The random conversations.

The small smiles.

The late-night talks.

Everything slowly became my favourite part of life.

And if I could choose again...

I'd still choose you.`}

                    />
                                      />

                </motion.div>

                {/* Sparkle Quote */}

                <motion.div

                    initial={{ opacity: 0, scale: .9 }}

                    whileInView={{ opacity: 1, scale: 1 }}

                    viewport={{ once: true }}

                    transition={{ duration: .8 }}

                    className="mt-16 rounded-[30px] bg-gradient-to-r from-pink-100 to-rose-100 p-7 shadow-xl"

                >

                    <h3 className="text-center text-2xl font-bold text-pink-700">

                        ✨ Little Reminder ✨

                    </h3>

                    <p className="mt-5 text-center leading-8 text-gray-700">

                        Home isn't always a place.

                        Sometimes...

                        it's simply one person.

                    </p>

                </motion.div>

                {/* Mini Gallery */}

                <motion.div

                    initial={{ opacity:0, y:60 }}

                    whileInView={{ opacity:1, y:0 }}

                    viewport={{ once:true }}

                    transition={{ duration:.8 }}

                    className="mt-20"

                >

                    <div className="grid grid-cols-2 gap-4">

                        <img
                            src="/images/17.jpg"
                            className="rounded-3xl shadow-xl aspect-[3/4] object-cover"
                        />

                        <img
                            src="/images/18.jpg"
                            className="rounded-3xl shadow-xl aspect-[3/4] object-cover"
                        />

                    </div>

                </motion.div>

                {/* Ending Letter */}

                <motion.div

                    initial={{ opacity:0, y:80 }}

                    whileInView={{ opacity:1, y:0 }}

                    viewport={{ once:true }}

                    transition={{ duration:.8 }}

                    className="mt-20"

                >

                    <Typewriter

                        speed={26}

                        className="text-lg leading-9 text-gray-700"

                        text={`If someone ever asked me what happiness looks like...

I wouldn't show them money.

Or success.

I'd quietly show them you.

Because somewhere between all our conversations...

our laughs...

our memories...

you slowly became my safe place.

And no matter how many years pass...

I'll still look at you

with the same smile.`}

                    />

                </motion.div>

                {/* Continue */}

                <motion.div

                    initial={{ opacity:0 }}

                    whileInView={{ opacity:1 }}

                    viewport={{ once:true }}

                    transition={{ delay:.3 }}

                    className="mt-24 text-center"

                >

                    <h2 className="text-4xl font-bold text-pink-700">

                        The Best Is Yet To Come ❤️

                    </h2>

                    <p className="mt-5 leading-8 text-gray-600">

                        Scroll a little more...

                        because the next chapter is made
                        from every beautiful memory we've collected.

                    </p>

                </motion.div>

            </div>

            {/* Floating Hearts */}

            {[...Array(15)].map((_, i)=>(

                <motion.div

                    key={i}

                    className="absolute text-pink-400"

                    style={{
                        left:`${Math.random()*100}%`,
                        bottom:`-${Math.random()*120}px`,
                        fontSize:`${18+Math.random()*18}px`
                    }}

                    animate={{
                        y:["0vh","-120vh"],
                        opacity:[0,.9,0],
                        x:[0,-20,20,0],
                        rotate:[0,25,-25,0]
                    }}

                    transition={{
                        repeat:Infinity,
                        duration:8+Math.random()*5,
                        delay:Math.random()*6
                    }}

                >

                    ❤️

                </motion.div>

            ))}

        </section>

    );

}
