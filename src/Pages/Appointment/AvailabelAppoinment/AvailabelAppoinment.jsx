import { format } from 'date-fns'
import React, { useEffect, useState } from 'react'
import BookinModal from '../BookinModal/BookinModal'
import AppoinmentOption from './AppoinmentOption'

export default function AvailabelAppoinment({ selectedDate }) {

    const [appointmentOption, setAppointmentOption] = useState([])
    const [treatment, setTreatment] = useState(null)

    useEffect(() => {
        fetch('appointmentOptions.json')
            .then(res => res.json())
            .then(data => setAppointmentOption(data))
    }, [])

    return (
        <section className='mt-20'>
            <div>
                <p className='text-primary font-bold text-center'>Available Appointments on: <span className='text-secondary'>{format(selectedDate, 'PPP')}</span> </p>
            </div>
            <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-6'>
                {
                    appointmentOption.map(option => <AppoinmentOption
                        key={option._id}
                        option={option}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                treatment &&
                < BookinModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}

                />}
        </section>
    )
}
