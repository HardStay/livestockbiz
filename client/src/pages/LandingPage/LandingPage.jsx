// import React from 'react'
// import { NavbarLandingPage } from '../../components/navbar/NavbarComponents'
// import { LandingPageContents } from '../../components/content/LandingPageContents'

import { LandingPageContents } from "../../components/content/LandingPageContents";
import { NavbarLandingPage } from "../../components/navbar/NavbarComponents";
import React, { useEffect, useState } from 'react'
import '../LandingPage/LandingPage.css'
import { FooterComponent } from "../../components/footer/FooterComponents";

const backgrounds = [
    "url(/assets/lp1.jpg)",
    "url(/assets/lp2.jpg)",

]

const LandingPage = () => {
    const [currentBackgroundIndex, setCurrentBackgroundIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(changeBackground, 5000);

        // Membersihkan interval saat komponen dibongkar
        return () => clearInterval(intervalId);
    }, [currentBackgroundIndex]); // Memastikan useEffect dipanggil saat currentBackgroundIndex berubah

    const changeBackground = () => {
        // Ganti latar belakang dengan gambar berikutnya
        setCurrentBackgroundIndex((prevIndex) => (prevIndex + 1) % backgrounds.length);
    };

    const backgroundStyle = {
        backgroundImage: backgrounds[currentBackgroundIndex],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        transition: 'background 1s ease-in-out',
        height: '100vh', // Sesuaikan dengan kebutuhan

    };



    return (
        <>
            <div className='lp' style={backgroundStyle}>
                <NavbarLandingPage />
                <LandingPageContents />
                <FooterComponent />
            </div>
        </>
    )
}

export default LandingPage



