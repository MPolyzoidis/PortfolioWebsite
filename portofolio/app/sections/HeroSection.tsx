import memojiImage from "../images/memoji.png"
import ArrowDown from "../images/downArrow.svg"
import Image from 'next/image'

const HeroSection = () => {
  return (
    <div className="py-32">
        <div className='container'>

            <div className="flex flex-col items-center">
                <Image 
                    src={memojiImage} 
                    alt="Person peeking from behind laptop" 
                    className="size-[100px]"
                />

                <div className="bg-gray-950 border border-gray-800 rounded-lg px-1.5 py-1.5">
                    <div className="text-sm">Marios Polyzoidis</div>
                </div>
            </div>

            <h1 className="text-3xl text-center mt-8 font-bold">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>

            <p> 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p> 

            <div>
                <button>
                    <span>Explore My Work</span>
                    <ArrowDown className="fill-white"/>
                </button>

                <button>
                    <span>👋</span>
                    <span>Contact Me</span>
                </button>
            </div>   

        </div>
    </div>
  )
}

export default HeroSection