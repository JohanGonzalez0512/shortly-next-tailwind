'use client';
import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Bg from "../../public/images/illustration-working.svg";
import { useAnimate, useInView } from "framer-motion";
const Hero = () => {

    const [scope, animate] = useAnimate();
    const isInView = useInView(scope);
    useEffect(() => {
        animate("div", { x: [-100, -1], opacity: [0, 1] }, { type: "spring" },)
    }, [isInView]);

    return (
        // Hero Section
        <section ref={scope} >

            {/* Hero Container */}
            <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">
                {/* Content Container */}
                <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
                    <h1 className="text-5xl font-bold text-center text-black lg:text-6xl lg:max-w-md lg:text-left">More than just shorter links</h1>
                    <p
                        className="text-center text-2xl text-gray-400 lg:max-w-md lg:text-left"
                    >
                        Build your brand’s recognition and get detailed insights on how your links are performing.
                    </p>
                    <div className="mx-auto lg:mx-0">
                        <Link
                            href="/"
                            className="py-5 px-10 text-2xl font-bold text-white bg-cyan rounded-full lg:py-4 hover:opacity-70"
                        >
                            Get Started
                        </Link>
                    </div>
                </div>
                {/* Image Container */}
                <div className="mb-24 mx-auto md:w-180 lg:mb-0 lg:w-1/2">
                    <Image src={Bg} alt="illustration" />
                </div>
            </div>
        </section>
    )
}


export default Hero