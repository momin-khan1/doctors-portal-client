import React from 'react'
import clock from '../../../assets/icons/clock.svg'
import marker from '../../../assets/icons/marker.svg'
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard'

const cardData = [
    {
        id: 1,
        name: "Opening Hours",
        des: "Open Sun to Fri at 10.00am to 4.00pm",
        icon: clock,
        color: "bg-gradient-to-r from-secondary to-primary"
    },
    {
        id: 2,
        name: "Visit our location",
        des: "Brooklyn, NY 10036, United States",
        icon: marker,
        color: "bg-accent"
    },
    {
        id: 3,
        name: "Contact us now",
        des: "+000 123 456789",
        icon: phone,
        color: "bg-gradient-to-r from-secondary to-primary"
    },
]

export default function InfoCards() {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                cardData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                />)
            }
        </div>
    )
}
