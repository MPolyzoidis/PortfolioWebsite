import SectionHeader from "../components/SectionHeader"
import avatar from "../images/memoji.png"
import Image from 'next/image'

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
    <div>

        <SectionHeader 
            eyebrow="Happy Clients" 
            title="What Clients Say About Me" 
            description="Don't just take my word for it. See what clients have to say about my work"
        />

        <div>

            {testimonials.map(testimonial => (

                <div key={testimonial.name}>

                    <Image src={testimonial.avatar} alt={testimonial.name} />

                    <div>{testimonial.name}</div>
                    <div>{testimonial.position}</div>
                    <p>{testimonial.text}</p>

                </div>

            ))}

        </div>

    </div>
  )
}

export default TestimonialsSection