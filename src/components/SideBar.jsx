import React, { useState } from 'react'
import { Link, useResolvedPath } from 'react-router-dom'

const SideBar = ({ isOpen, setIsOpen }) => {
    const [isActive, setIsActive] = useState(true)

    const sideBarControls = [
        {
            id: 1,
            name: "opportunities",
            icon: "fa-solid fa-arrow-up-right-dots",
            link: "/"

        },
        {
            id: 2,
            name: "My Portfolio",
            icon: "fa-solid fa-briefcase",
            link: "/portfolio"


        },
        {
            id: 3,
            name: "setting",
            icon: "fa-solid fa-gear",
            link: "/setting"

        },


    ]
    const { pathname } = useResolvedPath();
    console.log(pathname)
    return (
        <section className=' bg-gradient-to-t from-red-500 to-amber-100 border-r rounded-lg h-full overflow-auto no-scrollbar relative p-2'>
            <div className='h-[10%] w-16 mx-auto overflow-hidden rounded-lg'>
                <img className='h-full w-full ' src="logo.svg" alt="logo" />
            </div>

            <div className="grid grid-rows-[auto_50px]  h-[85%] w-full mt-3 md:mt-4 gap-4">

                <div className="row-span-1 flex flex-col gap-4 p-2">
                    {
                        sideBarControls && sideBarControls.map((item) => (
                            <Link to={item.link} key={item.id} className={`flex justify-start p-2.5 shadow-xl gap-4 md:text-md font-semibold  text-primary-bg ${pathname === item.link && 'bg-primary-bg text-primary-text'} rounded-lg transition-all cursor-pointer p-2.5=`}>
                                <span className='text-primary-text'><i className={item.icon} /></span>
                                <span>{item.name.toUpperCase()}</span>
                            </Link>
                        ))
                    }
                </div>
                <div className="row-span-2 flex flex-col gap-3 ">
                    <button className='mt-8 w-full hover:bg-secondary-btn p-2 hover:text-primary-bg bg-primary-bg text-primary-text rounded-lg transition-all'><span><i className="fa-solid fa-user" /></span> Profile</button>
                    <button className='w-full hover:bg-secondary-btn p-2 hover:text-primary-bg bg-primary-bg text-primary-text rounded-lg transition-all'><span><i className="fa-solid fa-right-from-bracket" /></span> Logout</button>

                </div>
            </div>


            <button className='md:hidden absolute top-5 right-4' onClick={() => setIsOpen(!isOpen)} >
                <i className="fa-solid fa-xmark" />
            </button>
        </section>

    )
}

export default SideBar