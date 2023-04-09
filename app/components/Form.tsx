'use client';

import { useState } from "react";

const Form = () => {

    const [input, setInput] = useState<string>("");
    const [error, setError] = useState<string>();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        input ? setError("") : setError("Please add a link");

        if (!/^(http(s):\/\/.)[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)$/g.test(input))
            setError("Please add a valid link");
    }
    return (
        <form onSubmit={handleSubmit} className="relative flex flex-col w-full p-10 -mt-20 space-y-4
         bg-darkViolet rounded-lg md:flex-row md:space-y-0 md:space-x-3">
            <input
                onChange={handleChange}
                value={input}
                type="text"
                className={`flex-1 p-3 flex items-center justify-center border-2 rounded-lg 
            placeholder-yellow-500 focus:outline-none ${error && "border-red"}`}
                placeholder="Shorten a link here..."
            />
            <button className="px-10 py-3 text-white bg-cyan rounded-lg hover:bg-cyanLight 
          focus:outline-none md:py-2">
                Shorten it!
            </button>

            <div className="absolute left-7 bottom-3 text-red text-sm italic">
                {error}
            </div>
        </form>
    )
}

export default Form