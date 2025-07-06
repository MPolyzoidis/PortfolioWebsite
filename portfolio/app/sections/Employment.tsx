"use client"
import { Element } from "react-scroll"
import SectionHeader from "../components/SectionHeader"

const Employment = () => {
    return (
        <Element name="Employment">
            <section className="pb-20 lg:py-24 z-0">
                <div className="container">
                    <SectionHeader
                        eyebrow="Professional Experience"
                        title="Where I've Been Employed"
                    />

                    <div className="flex flex-col pt-12">
                        <div className="flex flex-col md:flex-row gap-14">
                            <div className="flex flex-col w-full md:w-1/2 items-center justify-center">
                                <div className="flex flex-row font-semibold text-nowrap gap-2 text-xl">
                                    <div>Front-End Developer,</div>
                                    <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-center bg-clip-text text-transparent">
                                        Deloitte
                                    </div>
                                </div>
                                <div className="flex flex-row">
                                    <div className="font-light text-md text-gray-400">
                                        March 2025 - Now / Thessaloniki, Greece
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 text-lg text-gray-300 text-left md:text-justify">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry&apos;s standard dummy text ever
                                since the 1500s, when an unknown printer took a
                                galley of type and scrambled it to make a type
                                specimen book. It has survived not only five
                                centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It
                                was popularised in
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Element>
    )
}

export default Employment
