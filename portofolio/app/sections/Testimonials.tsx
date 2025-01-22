import Background from "../components/Background"
import SectionHeader from "../components/SectionHeader"
import avatar from "../images/memoji.png"
import Image from 'next/image'
import Card from "../components/Card"

const testimonials = [
    {
        name:"Lorem Ipsum 1",
        position:"Lorem Ipsum",
        text:"Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing",
        avatar: avatar,
    },
    {
        name:"Lorem Ipsum 2",
        position:"Lorem Ipsum",
        text:"Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing,Lorem Ipsum is simply dummy text of the printing",
        avatar: avatar,
    },
]

const TestimonialsSection = () => {
  return (
    <div className="py-20 lg:py-24 relative z-0">

        <Background />

        <div className="container">

            <SectionHeader 
                eyebrow="Happy Clients" 
                title="What Clients Say About Me" 
                description="Don't just take my word for it. See what clients have to say about my work"
            />

            <div className="mt-16 lg:mt-24 flex overflow-x-clip [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

                <div className="flex flex-none gap-8">

                    {testimonials.map(testimonial => (

                        <Card key={testimonial.name} className="max-w-xs md:p-8 md:max-w-md">

                            <div className="flex gap-4 items-center">

                                <div className="size-14 p-3 bg-gray-700 inline-flex items-center justify-center rounded-full">
                                    <Image src={testimonial.avatar} alt={testimonial.name}/>
                                </div>

                                <div>
                                    <div className="font-semibold">{testimonial.name}</div>
                                    <div className="text-sm text-white/40">{testimonial.position}</div>
                                </div>

                            </div>

                            <p className="mt-4 md:mt-6 text-sm md:text-base">{testimonial.text}</p>

                        </Card>

                    ))}

                </div>

            </div>

        </div>

    </div>
  )
}

export default TestimonialsSection