import Image from "next/image"
import Img1 from "../../public/images/icon-brand-recognition.svg"
import Img2 from "../../public/images/icon-detailed-records.svg"
import Img3 from "../../public/images/icon-fully-customizable.svg"
const Stats = () => {
    return (
        <>
            <section className="py-24 bg-gray-100">
                <div className="container px-3 mx-auto ">
                    <h2 className="text-4xl mb-6 text-center font-bold">Advanced Statistics</h2>
                    <p className="max-w-xs mx-auto text-center text-gray-400 md:max-w-md">Track how your links are performing across the web with our advanced statistics dashboard.</p>
                </div>
            </section>
            <section className="pb-32 bg-gray-100">
                <div className="relative container flex flex-col items-start px-6 mx-auto md:flex-row md:space-x-7 ">
                    {/* Horizontal Line */}
                    <div className="hidden absolute top-24 w-10/12 left-16 h-3 bg-cyan md:block"></div>
                    {/* Vertical Line */}
                    <div className="absolute w-2 h-full left-1/2 -ml-1 bg-cyan md:hidden "></div>
                    {/* boxes */}
                    <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3">
                        {/* Image */}
                        <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>

                            <div className="flex items-center jusfify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                                <Image
                                    className="mx-auto "
                                    src={Img1}
                                    alt="Brand Recognition"
                                />
                            </div>
                        </div>
                        <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">Brand Recognition</h3>
                        <p className="text-center text-gray-400 md:text-left">Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.</p>
                    </div>

                    <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 mt-24 md:mt-8">
                        {/* Image */}
                        <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>

                            <div className="flex items-center jusfify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                                <Image
                                    className="mx-auto"
                                    src={Img2}
                                    alt="Brand Recognition"
                                />
                            </div>
                        </div>
                        <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                            Detailed Records
                        </h3>
                        <p className="text-center text-gray-400 md:text-left">Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.</p>
                    </div>



                    <div className="relative flex flex-col p-6 space-y-6 bg-white rounded-lg md:w-1/3 mt-24 md:mt-16">
                        {/* Image */}
                        <div className='absolute -ml-10 left-1/2 -top-10 md:left-16'>

                            <div className="flex items-center jusfify-center w-20 h-20 p-4 rounded-full bg-veryDarkViolet">
                                <Image
                                    className="mx-auto"
                                    src={Img3}
                                    alt="Brand Recognition"
                                />
                            </div>
                        </div>
                        <h3 className="pt-6 text-xl font-bold text-center capitalize md:text-left">
                            Fully Customizable
                        </h3>
                        <p className="text-center text-gray-400 md:text-left">Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
                    </div>

                </div>

            </section>
        </>

    )
}

export default Stats