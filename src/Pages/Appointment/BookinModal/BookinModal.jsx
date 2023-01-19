import { format } from 'date-fns'
import React from 'react'

export default function BookinModal({ treatment, selectedDate, setTreatment }) {
    const { name, slots } = treatment

    const date = (format(selectedDate, 'PPP'))

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: name,
            slot,
            email,
            phone
        }
        setTreatment(null)
        console.log(booking)
    }
    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold"> {name} </h3>
                    <form onSubmit={handleBooking} className='grid gap-5 grid-cols-1 mt-5'>
                        <input type="text" value={date} disabled className="input w-full input-bordered" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, i) => <option
                                    value={slot}
                                    key={i}
                                >
                                    {slot}
                                </option>)
                            }
                        </select>
                        <input name='name' type="text" placeholder="Full Name" className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='email' type="email" placeholder="Email" className="input w-full input-bordered" />
                        <input className='btn btn-primary bg-gradient-to-r from-secondary to-primary text-white mt-3 w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </>
    )
}
