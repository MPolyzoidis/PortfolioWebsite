import memojiImage from "../images/memoji.png"
import ArrowDown from "../images/downArrow.svg"
import Image from 'next/image'
import Background from "../components/Background"

const Hero = () => {
  return (
    <div className="py-32 md:py-48 lg:py-60 relative z-0">

        <Background />

        <div className='container'>

            <div className="flex flex-col items-center">
                <Image 
                    src={memojiImage} 
                    alt="Person peeking from behind laptop" 
                    className="h-28 w-auto"
                />

                <div className="bg-gray-950 border border-gray-800 rounded-lg px-4 py-1.5">
                    <div className="text-sm font-medium">Marios Polyzoidis</div>
                </div>
            </div>
            
            <div className="max-w-lg mx-auto">
                <h1 className="text-3xl md:text-5xl text-center mt-8 font-bold tracking-wide">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>

                <p className="mt-4 text-center text-white/60 md:text-lg"> 
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p> 
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center mt-8 gap-4">
                <button className="inline-flex items-center gap-2 border border-white/15 px-6 h-12 rounded-xl">
                    <span className="font-semibold">Explore My Work</span>
                    <ArrowDown className="fill-white size-4"/>
                </button>

                <button className="inline-flex items-center gap-2 border border-white bg-white text-gray-800 px-6 h-12 rounded-xl">
                    <span>👋</span>
                    <span className="font-semibold">Contact Me</span>
                </button>
            </div>   

        </div>
    </div>
  )
}

export default Hero