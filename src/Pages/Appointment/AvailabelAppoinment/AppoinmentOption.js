import React from 'react'

export default function AppoinmentOption({ option, setTreatment }) {
    const { name, slots } = option
    return (
        <div className="card shadow-md">
            <div className="card-body">
                <h2 className="card-title text-primary text-center text-2xl mx-auto"> {name}</h2>
                <p className='mx-auto'> {slots.length > 0 ? slots[0] : 'Try Find Appoinment Another Shedule'} </p>
                <p className='mx-auto'> {slots.length} {slots.length > 1 ? 'Spaces' : 'Space'}  </p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        onClick={() => setTreatment(option)}
                        htmlFor="booking-modal"
                        className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-3"
                    >Book Appoinment</label>
                </div>
            </div>
        </div >
    )
}
