import React from 'react'

const Navbar = ({ isOpen, setIsOpen }) => {
    return (
        <section className='h-full bg-gradient-to-l from-red-200 to-amber-100   shadow-lg rounded-md flex justify-end gap-2 md:justify-between items-center my-auto relative px-2'>
            <p className='text-2xl text-primary-hover-text'><span className='text-primary-text'>W</span>elcome</p>
            <div className="flex gap-2 items-center">
                <p className='bg-orange-50 rounded-full text-xl px-4 shadow-md'>S</p>
                <p className='text-secondary-bg text-lg'><span className='font-semibold text-primary-text'>@</span> Shoeb</p>
            </div>

            <button className='md:hidden absolute left-2' onClick={() => setIsOpen(!isOpen)} > <i className="fa-solid fa-bars" /></button>
        </section>
    )
}

export default Navbar