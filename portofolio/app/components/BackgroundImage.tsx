import Image from 'next/image'
import background from '../images/background.png'

const BackgroundImage = () => {
  return (
    <Image 
        src={background} 
        alt="Background" 
        className="absolute inset-0 -z-30 opacity-5 h-screen max-w-[1920px] overflow-hidden">        
    </Image>
  )
}

export default BackgroundImage