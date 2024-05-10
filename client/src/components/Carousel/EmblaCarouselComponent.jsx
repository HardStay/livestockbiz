import React from 'react'
import EmblaCarousel from './EmblaCarousel'
import '../Carousel/embla.css'
import '../Carousel/sandbox.css'


const EmblaCarouselComponent = () => {
    const OPTIONS = { loop: true }
    // const SLIDE_COUNT = 5
    const SLIDES = [
        {
            title: "Slide 1 Title",
            imgSrc: "/assets/logo.png",
            imgAlt: "Slide 1 Image",
            description: "Slide 1 Description"
        },
        {
            title: "Slide 1 Title",
            imgSrc: "/assets/logo.png",
            imgAlt: "Slide 1 Image",
            description: "Slide 1 Description"
        },
        {
            title: "Slide 1 Title",
            imgSrc: "/assets/logo.png",
            imgAlt: "Slide 1 Image",
            description: "Slide 1 Description"
        },
        {
            title: "Slide 1 Title",
            imgSrc: "/assets/logo.png",
            imgAlt: "Slide 1 Image",
            description: "Slide 1 Description"
        },


    ];



    return (
        <>
            <EmblaCarousel slides={SLIDES} options={OPTIONS} />

        </>
    )
}

export default EmblaCarouselComponent