import React, { useState } from 'react'
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner'
import AvailabelAppoinment from '../AvailabelAppoinment/AvailabelAppoinment'

export default function Appointment() {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <>
            <AppointmentBanner
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            />
            <AvailabelAppoinment
                selectedDate={selectedDate}
            />
        </>
    )
}
