import React from 'react'
import doctor from '../../../assets/images/doctor.png'
import appointment from '../../../assets/images/appointment.png'

export default function MakeAppoinment() {
    return (
        <section className='mt-28'
            style={{
                background: `url(${appointment})`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="lg:w-2/5 rounded-lg hidden md:block md:display-block -mt-32 -mb-4" alt='' />
                    <div>
                        <h5 className='text-secondary font-bold'>Appointment</h5>
                        <h1 className="text-3xl font-bold text-white mt-2">Make an appointment Today</h1>
                        <p className="py-3 text-white">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <button className="btn btn-primary bg-gradient-to-r from-secondary to-primary text-white">Get Started</button>
                    </div>
                </div>
            </div>
        </section>
    )
}
// 01916407178(Rahim)
// 01742406953