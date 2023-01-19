import React from 'react'

export default function Reviews({ reviews }) {
    const { img, dec, name, title } = reviews
    return (
        <div className="card shadow-xl">
            <div className="card-body">
                <p>{dec}</p>
                <div className="flex items-center">
                    <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-5 mt-3">
                        <img src={img} alt="" />
                    </div>
                    <div>
                        <h5 className='text-lg'>{name}</h5>
                        <p>{title}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
