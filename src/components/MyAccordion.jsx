import React, { useState } from 'react'

const MyAccordion = ({ title, details }) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button className='bg-secondary-bg rounded-lg  w-full p-2 transition-all flex items-center justify-between' onClick={() => setShow(!show)}>
                <span className='font-semibold text-xl   p-2 text-primary-text'>{title}</span>
                <span className='ml-5 bg-primary-hover-text w-fit px-2 rounded-md shadow-lg text-secondary-bg font-extrabold transition-all '>{show ? "-" : "+"}</span>
            </button>
            {
                show && <p className='text-secondary-text font-light text-start p-2 w-full text-lg shadow-lg '>{details}</p>
            }
        </div>
    )
}

export default MyAccordion