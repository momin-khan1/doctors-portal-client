import React from 'react'

export default function InfoCard({ card }) {
    const { name, des, icon, color } = card
    return (
        <div className={`card p-5 text-white mt-6 card-side shadow-xl ${color}`}>
            <figure>
                <img src={icon} alt="Movie" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p> {des} </p>
            </div>
        </div>
    )
}
