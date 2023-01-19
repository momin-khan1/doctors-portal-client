import React from 'react'
import Banner from '../Banner/Banner'
import Contact from '../Contact/Contact'
import DentalCare from '../DentalCare/DentalCare'
import InfoCards from '../InfoCards/InfoCards'
import MakeAppoinment from '../MakeAppoinment/MakeAppoinment'
import Services from '../Services/Services'
import Testimonial from '../Testimonial/Testimonial'

export default function Home() {
    return (
        <div className='mx-5'>
            <Banner />
            <InfoCards />
            <Services />
            <DentalCare />
            <MakeAppoinment />
            <Testimonial />
            <Contact />
        </div>
    )
}
