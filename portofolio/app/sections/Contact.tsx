import Background from "../components/Background"
import ArrowUpRight from "../images/arrow-up-right-from-square-solid.svg"

const ContactSection = () => {
    return (

        <div className="py-16 pt-12 lg:py-24 lg:pt-20 relative">

            <div className="container">

                <Background />

                <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left">

                    <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">

                        <div>

                            <h2 className="font-serif text-2xl md:text-3xl">Lorem Ipsum Lorem Ipsum</h2>

                            <p className="text-sm md:text-base mt-2">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                            </p>

                        </div>

                        <div>

                            <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900">
                                <span className="font-semibold">Contact Me</span>
                                <ArrowUpRight className="size-4 fill-white"/>
                            </button>

                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default ContactSection