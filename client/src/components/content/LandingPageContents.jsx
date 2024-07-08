import React from "react";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";

export const LandingPageContents = () => {
  const contentData = [
    {
      title: "AI Biz",
      desc: " There is AI Biz to ask for daily price and sales prediction.",
      img: "/assets/tanyabiz.png",
    },
    {
      title: "Add Mob",
      desc: "You can add stock data for your animals.",
      img: "/assets/addmob.png",
    },
    {
      title: "Farm Management",
      desc: "You can add your farms in your profile.",
      img: "/assets/farmmanagement.png",
    },
  ];

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-8 md:px-16 mt-12 md:mt-24 z-50">
        <div>
          <div className="p-6 text-3xl md:text-5xl font-normal text-white">
            Smart Farmers
            <span className="font-semibold"> Digitally Managing Livestock</span>
          </div>
          <div className="px-6 text-xs md:text-sm text-gray-300">
            Empowering Farmers with Advanced Digital Tools to Enhance Livestock
            Health and Productivity
          </div>
          <button className="bg-white text-gray-900 hover:bg-green-500 transition duration-200 hover:text-white py-2 md:py-3 px-4 rounded-md mt-4 ms-6">
            <a href="#contentGallery">Get Started</a>
          </button>
        </div>
      </div>
      <section>
        <div className="bg-gray-200 rounded-tl-2xl rounded-tr-2xl">
          <div
            className="text-white text-2xl md:text-4xl pt-4 md:pt-8 md:mt-80 block w-full"
            id="contentDesc"
          >
            <div className="mx-auto font-normal text-gray-900 text-center">
              Features
            </div>
          </div>
        </div>
      </section>
      <section>
        <div
          className="flex flex-col w-full px-8 md:px-16 bg-gray-200 pt-10 md:pt-20"
          id="contentGallery"
        >
          {contentData.map((item, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8"
            >
              <div>
                <h2 className="text-xl md:text-2xl font-normal text-gray-900">
                  {item.title}
                </h2>
                <p className="text-gray-600 mt-2">{item.desc}</p>
              </div>
              <div>
                <img src={item.img} alt="" />
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
}

export function Accordion1() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
        <AccordionHeader onClick={() => handleOpen(1)}>
          <div className="text-xl md:text-3xl font-semibold text-gray-900">
            Lorem ipsum dolor sit amet consectetur.
          </div>
        </AccordionHeader>
        <AccordionBody>
          We&apos;re not always in the position that we want to be at.
          We&apos;re constantly growing. We&apos;re constantly making mistakes.
          We&apos;re constantly trying to express ourselves and actualize our
          dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}
