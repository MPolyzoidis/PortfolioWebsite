import memojiImage from "../images/memoji.png"
import arrowDown from "../images/downArrow.svg"
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
            </div>

            <h1>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h1>

            <p> 
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p> 

            <div>
                <button>
                    <span>Explore My Work</span>
                    <Image src={arrowDown} alt="A down-facing arrow" />
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