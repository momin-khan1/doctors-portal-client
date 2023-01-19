import React from 'react'
import appointment from '../../../assets/images/appointment.png'

export default function Contact() {
    return (
        <section
            style={{
                background: `url(${appointment})`,
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed'
            }}
            className='mt-20 pt-16 text-center'>
            <p className='text-primary font-bold'>Contact Us</p>
            <h3 className='text-white text-2xl mt-3 mb-4'>Stay Connected With Us</h3>
            <form>
                <input type="text" placeholder="Name" className="input input-bordered input-md w-full max-w-xs block mx-auto mb-4" />
                <input type="email" placeholder="Email Address" className="input input-bordered input-md w-full max-w-xs block mx-auto mb-4" />
                <textarea placeholder="Your Message" className="textarea w-full max-w-xs block mx-auto mb-5" />
                <button className='btn btn-primary mb-20'>Submit</button>
            </form>
        </section>
    )
}
