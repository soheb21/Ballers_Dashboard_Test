import React from 'react'
import Layout from '../components/Layout'

import equity from "../assets/quity.svg"



// -left-52
const Home = () => {


    return (

        <Layout>
            <section className=' bg-orange-50  flex flex-col  overflow-hidden r h-full p-4'>
                <div className=' grid grid-cols-1 gap-3 md:grid-cols-3  place-items-center h-full no-scrollba overflow-auto  '>
                    {/* card */}
                    <div className="h-[12rem] w-[15rem] flex flex-col justify-center bg-gradient-to-b from-red-100 to-amber-100 hover:from-amber-100 hover:to-blue-200 cursor-pointer transition-all shadow-custom_Shadow border py-2 rounded-lg">
                        <div className="  h-48 w-full p-2  overflow-hidden">
                            <img className='h-full w-full object-fill rounded-md ' src={equity} alt="image" />
                        </div>
                        <span className='text-md text-secondary-bg' >Direct equity</span>
                        <p className='text-primary-text'>Amount: <span className='font-semibold'>$10,000</span></p>
                        
                    </div>

                    <div className="h-[12rem] w-[15rem] flex flex-col justify-center bg-gradient-to-b from-red-100 to-amber-100 hover:from-amber-100 hover:to-blue-200 cursor-pointer transition-all shadow-custom_Shadow border py-2 rounded-lg">
                        <div className="  h-48 w-full p-2  overflow-hidden">
                            <img className='h-full w-full object-fill rounded-md ' src="login.svg" alt="image" />
                        </div>
                        <span className='text-md text-secondary-bg' >Direct equity</span>
                        <p className='text-primary-text'>Amount: <span className='font-semibold'>$10,000</span></p>
                        
                    </div>
                    <div className="h-[12rem] w-[15rem] flex flex-col justify-center bg-gradient-to-b from-red-100 to-amber-100 hover:from-amber-100 hover:to-blue-200 cursor-pointer transition-all shadow-custom_Shadow border py-2 rounded-lg">
                        <div className="  h-48 w-full p-2  overflow-hidden">
                            <img className='h-full w-full object-fill rounded-md ' src={equity} alt="image" />
                        </div>
                        <span className='text-md text-secondary-bg' >Direct equity</span>
                        <p className='text-primary-text'>Amount: <span className='font-semibold'>$10,000</span></p>
                        
                    </div>
                    <div className="h-[12rem] w-[15rem] flex flex-col justify-center bg-gradient-to-b from-red-100 to-amber-100 hover:from-amber-100 hover:to-blue-200 cursor-pointer transition-all shadow-custom_Shadow border py-2 rounded-lg">
                        <div className="  h-48 w-full p-2  overflow-hidden">
                            <img className='h-full w-full object-fill rounded-md ' src="register.svg" alt="image" />
                        </div>
                        <span className='text-md text-secondary-bg' >Direct equity</span>
                        <p className='text-primary-text'>Amount: <span className='font-semibold'>$10,000</span></p>
                        
                    </div>
                    <div className="h-[12rem] w-[15rem] flex flex-col justify-center bg-gradient-to-b from-red-100 to-amber-100 hover:from-amber-100 hover:to-blue-200 cursor-pointer transition-all shadow-custom_Shadow border py-2 rounded-lg">
                        <div className="  h-48 w-full p-2  overflow-hidden">
                            <img className='h-full w-full object-fill rounded-md ' src="login.svg" alt="image" />
                        </div>
                        <span className='text-md text-secondary-bg' >Direct equity</span>
                        <p className='text-primary-text'>Amount: <span className='font-semibold'>$10,000</span></p>
                        
                    </div>

                  




                </div>

                {/* pagination */}
                <div className=" flex items-center justify-end gap-2 ">
                    <span className='text-primary-btn hover:text-primary-text cursor-pointer'><i className="fa-solid fa-circle-left"></i></span>
                    <p className='text-secondary-text'>1</p>
                    <span className='text-primary-btn text-lg cursor-pointer hover:text-primary-text'><i className="fa-solid fa-circle-right"></i></span>
                </div>
            </section>


        </Layout>

    )
}

export default Home