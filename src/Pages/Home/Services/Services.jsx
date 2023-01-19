import React from 'react'
import fluoride from '../../../assets/images/fluoride.png'
import cavity from '../../../assets/images/cavity.png'
import whitening from '../../../assets/images/whitening.png'
import Service from './Service'

const serviceData = [
    {
        id: 1,
        image: fluoride,
        name: "Fluoride Treatment",
        des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
    {
        id: 2,
        image: cavity,
        name: "Cavity Filling",
        des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
    {
        id: 3,
        image: whitening,
        name: "Teeth Whitening",
        des: "Lorem Ipsum is simply dummy printing and typesetting indust Ipsum has been the"
    },
]

export default function Services() {
    return (
        <div className='mt-20'>
            <h3 className='text-secondary font-weight: 700; text-lg text-center'>OUR SERVICES</h3>
            <h1 className='text-lg text-center'>Services We Provide</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7'>
                {
                    serviceData.map(service => <Service
                        key={service.id}
                        service={service}
                    />)
                }
            </div>
        </div>
    )
}
