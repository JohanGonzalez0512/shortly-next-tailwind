'use client';

import { useAnimate, useInView } from "framer-motion";
import { useEffect } from "react";

interface LinkProps {
    original: string;
    shortened: string;
}
const Link = ({ original, shortened }: LinkProps) => {

    const [scope, animate] = useAnimate();

    const isInView = useInView(scope);

    useEffect(() => {
        animate("div,p", { scale: [0, 1] })
    }, [isInView]);

    return (
        <div ref={scope} className="flex flex-col items-center justify-between w-full bg-white p-6 rounded-lg 
        md:flex-row">
            <p className="font-bold text-center text-veryDarkViolet md:text-left">
                {original}
            </p>

            <div className="flex flex-col items-center justify-end flex-1 space-x-4 space-y-2 
            md:flex-row md:space-y-0">
                <div className="font-bold text-cyan">
                    {shortened}
                </div>
                <button className="p-2 px-8 text-white bg-cyan rounded-lg hover:opacity-70 focus:outline-none">
                    Copy
                </button>

            </div>
        </div>
    )
}

export default Link