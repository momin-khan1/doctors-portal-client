import React from 'react'
import { Link } from 'react-router-dom'
import footer from '../../../assets/images/footer.png'

export default function Footer() {
    return (
        <footer
            style={{
                background: `url(${footer})`,
                backgroundPosition: 'center',
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}
            className=" pt-24 text-neutral-content mx-5">
            <div className='footer text-black justify-between'>
                <div>
                    <span className="footer-title text-secondary">Services</span>
                    <Link className="link link-hover">Branding</Link>
                    <Link className="link link-hover">Marketing</Link>
                    <Link className="link link-hover">Design</Link>
                    <Link className="link link-hover">Advertisement</Link>
                </div>
                <div>
                    <span className="footer-title text-secondary">Company</span>
                    <Link className="link link-hover">About us</Link>
                    <Link className="link link-hover">Contact</Link>
                    <Link className="link link-hover">Jobs</Link>
                    <Link className="link link-hover">Press kit</Link>
                </div>
                <div>
                    <span className="footer-title text-secondary">Legal</span>
                    <Link className="link link-hover">Terms of use</Link>
                    <Link className="link link-hover">Privacy policy</Link>
                    <Link className="link link-hover">Cookie policy</Link>
                </div>
            </div>
            <div className='mt-16 text-center pb-7 text-black'>
                <p>Copyright © 2023 - All Rights Reserved © Unipos system </p>
            </div>
        </footer>
    )
}
