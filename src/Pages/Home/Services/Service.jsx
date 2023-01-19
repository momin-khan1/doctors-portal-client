import React from 'react'
import './Service.css'

export default function Service({ service }) {
    const { image, name, des } = service
    return (
        <div className="card bg-base-100 shadow-lg mt-8 mb-10 mx-auto service">
            <figure className="px-10 pt-10">
                <img src={image} alt="Shoes" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title"> {name} </h2>
                <p> {des} </p>
            </div>
        </div>
    )
}
