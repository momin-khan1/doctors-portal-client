import React from 'react'
import chair from "../../../assets/images/chair.png"
import './Banner.css'

export default function Banner() {
    return (
        <div className="hero banner">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={chair} className="lg:w-1/2 rounded-lg shadow-2xl" alt='' />
                <div>
                    <h1 className="text-4xl font-bold"> Your New Smile Starts Here</h1>
                    <p className="py-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel nesciunt nulla illum tempora quasi rem odio similique non pariatur illo.</p>
                    <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                </div>
            </div>

        </div>
    )
}
