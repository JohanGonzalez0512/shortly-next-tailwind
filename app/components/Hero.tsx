'use client';
import { useAnimate, useInView } from "framer-motion"
import { useEffect, useRef } from "react"

const Hero = () => {

    const [scope, animate] = useAnimate()
    const isInView = useInView(scope)
    useEffect(() => {
        animate("div", { y: [-100, -1], scale: [0, 1] }, { type: "spring" },)
    }, [isInView])
    return (
        // Hero Section
        <section ref={scope} >

            {/* Hero Container */}
            <div className="container flex flex-col-reverse mx-auto p-6 lg:flex-row">

                <div className="flex flex-col space-y-10 mb-44 lg:mt-16 lg:w-1/2 xl:mb-52">
                    <h1 className="text-5xl font-bold text-center text-black lg:text-6xl lg:max-w-md lg:text-left">More than just shorter links</h1>
                    <p className="text-center text-2xl text-grayishViolet lg:max-w-md lg:text-left">Build your brand’s recognition and get detailed insights on how your links are performing.</p>
                </div>

            </div>
        </section>
    )
}


export default Hero