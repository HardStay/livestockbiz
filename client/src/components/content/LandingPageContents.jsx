import React from 'react'
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";
import EmblaCarouselComponent from '../Carousel/EmblaCarouselComponent';

export const LandingPageContents = () => {
    return (
        <>
            <div className="grid grid-cols-2 w-full px-16 mt-24 z-50">
                <div>
                    <div className='p-6 text-5xl font-semibold text-white'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</div>
                    <div className='px-6 text-sm text-gray-300'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quo placeat consequuntur obcaecati.</div>
                    <button className='bg-white text-gray-900 hover:bg-green-500 transition duration-200 hover:text-white py-3 px-4 rounded-md mt-4 ms-6'>Get Started</button>

                </div>
                {/* <div>
                    <VideoBox />
                </div> */}
            </div>
            <section>
                <div className="items bg-gray-200" style={{ marginTop: '900px' }}>
                    <div className="text-white text-4xl mt-[-500px] pt-[150px] block w-full" id='contentDesc'>
                        <div className='mx-auto font-semibold text-gray-900 text-center'>Lorem ipsum dolor sit amet consectetur.</div>
                        <div className='mx-auto text-gray-600 text-lg mt-2 text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consequatur, nobis libero quibusdam sapiente dolor repellendus.</div>
                    </div>
                </div>
            </section>

            <section>
                <div className="grid grid-cols-2 w-full px-16 bg-gray-200 pt-20">
                    <div className="bg-gray-200 p-4">
                        <div className="text-4xl font-semibold text-gray-900">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-lg text-gray-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consequatur, nobis libero quibusdam sapiente dolor repellendus.</div>
                        <button className='px-3 py-2 bg-green-500 text-white rounded-md  hover:bg-green-600 transition duration-200'>
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 15 15"
                                width="16"
                                height="16"
                                className="inline-block w-4 h-4 ml-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.29375 3.70796L11.5866 7.00085L2.00085 7.00085C1.44857 7.00085 1.00085 7.44857 1.00085 8.00085C1.00085 8.55314 1.44857 9.00085 2.00085 9.00085H11.5866L8.29375 12.2937C7.90322 12.6843 7.90322 13.3174 8.29375 13.708C8.68427 14.0985 9.31744 14.0985 9.70796 13.708L14.708 8.70796C15.0985 8.31744 15.0985 7.68427 14.708 7.29375L9.70796 2.29375C9.31744 1.90322 8.68427 1.90322 8.29375 2.29375C7.90322 2.68427 7.90322 3.31744 8.29375 3.70796Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>

                    </div>
                    <div className="bg-gray-200 p-4">
                        <VideoBox />
                    </div>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-2 w-full px-16 bg-gray-200 pt-16">
                    <div className="bg-gray-200 p-4">
                        <VideoBox />
                    </div>
                    <div className="bg-gray-200 p-4">
                        <div className="text-4xl font-semibold text-gray-900">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-lg text-gray-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consequatur, nobis libero quibusdam sapiente dolor repellendus.</div>
                        <button className='px-3 py-2 bg-green-500 text-white rounded-md mt-6 hover:bg-green-600 transition duration-200'>
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 15 15"
                                width="16"
                                height="16"
                                className="inline-block w-4 h-4 ml-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.29375 3.70796L11.5866 7.00085L2.00085 7.00085C1.44857 7.00085 1.00085 7.44857 1.00085 8.00085C1.00085 8.55314 1.44857 9.00085 2.00085 9.00085H11.5866L8.29375 12.2937C7.90322 12.6843 7.90322 13.3174 8.29375 13.708C8.68427 14.0985 9.31744 14.0985 9.70796 13.708L14.708 8.70796C15.0985 8.31744 15.0985 7.68427 14.708 7.29375L9.70796 2.29375C9.31744 1.90322 8.68427 1.90322 8.29375 2.29375C7.90322 2.68427 7.90322 3.31744 8.29375 3.70796Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>

                    </div>
                </div>
            </section>
            <section>
                <div className="grid grid-cols-2 w-full px-16 bg-gray-200 pt-16">
                    <div className="bg-gray-200 p-4">
                        <div className="text-4xl font-semibold text-gray-900">Lorem ipsum dolor sit amet consectetur.</div>
                        <div className="text-lg text-gray-600 mt-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eos consequatur, nobis libero quibusdam sapiente dolor repellendus.</div>
                        <button className='px-3 py-2 bg-green-500 text-white rounded-md mt-6 hover:bg-green-600 transition duration-200'>
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 15 15"
                                width="16"
                                height="16"
                                className="inline-block w-4 h-4 ml-1"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M8.29375 3.70796L11.5866 7.00085L2.00085 7.00085C1.44857 7.00085 1.00085 7.44857 1.00085 8.00085C1.00085 8.55314 1.44857 9.00085 2.00085 9.00085H11.5866L8.29375 12.2937C7.90322 12.6843 7.90322 13.3174 8.29375 13.708C8.68427 14.0985 9.31744 14.0985 9.70796 13.708L14.708 8.70796C15.0985 8.31744 15.0985 7.68427 14.708 7.29375L9.70796 2.29375C9.31744 1.90322 8.68427 1.90322 8.29375 2.29375C7.90322 2.68427 7.90322 3.31744 8.29375 3.70796Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </button>


                    </div>
                    <div className="bg-gray-200 p-4">
                        <VideoBox />
                    </div>
                </div>
            </section>
            <section>

                <div className="flex w-full px-16 bg-gray-200">
                    <EmblaCarouselComponent />
                </div>
            </section>
        </>
    )
}



export default function VideoBox() {
    return (
        <div className="w-full h-full">
            <iframe
                src="https://www.youtube.com/embed/vJrkwEv2dys"
                title="YouTube video player"
                allowFullScreen
                className="rounded-lg"
                width="100%"
                height="300px"

            ></iframe>
        </div>
    );
}



function Icon({ id, open }) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
        >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
    );
}

export function Accordion1() {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)}><div className='text-3xl font-semibold text-gray-900'>Lorem ipsum dolor sit amet consectetur.</div></AccordionHeader>
                <AccordionBody>
                    We&apos;re not always in the position that we want to be at. We&apos;re constantly
                    growing. We&apos;re constantly making mistakes. We&apos;re constantly trying to express
                    ourselves and actualize our dreams.
                </AccordionBody>
            </Accordion>

        </>
    );
}