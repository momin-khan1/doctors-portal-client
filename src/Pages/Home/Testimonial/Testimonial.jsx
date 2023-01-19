import React from 'react'
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Reviews from './Reviews'

const reviewData = [
    {
        id: 1,
        img: people1,
        dec: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: "Winson Herry",
        title: "California"
    },
    {
        id: 2,
        img: people1,
        dec: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: "Winson Herry",
        title: "California"
    },
    {
        id: 3,
        img: people1,
        dec: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
        name: "Winson Herry",
        title: "California"
    },
]

export default function Testimonial() {
    return (
        <section className='mt-16'>
            <div className='flex justify-between'>
                <div>
                    <h3 className='text-secondary font-bold'>Testimonial</h3>
                    <h2 className='text-4xl'>What Our Patients Says</h2>
                </div>
                <figure>
                    <img className='w-24 lg:w-48' src={quote} alt="" />
                </figure>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    reviewData.map(reviews => <Reviews
                        key={reviews.id}
                        reviews={reviews}
                    />)
                }
            </div>
        </section>
    )
}
