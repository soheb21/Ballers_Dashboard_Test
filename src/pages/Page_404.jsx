import React from 'react'
import { Link } from 'react-router-dom'
import Layout from '../components/Layout'

const Page_404 = () => {
    return (

        <Layout>
            <div className="w-full  bg-orange-100 flex items-center lg:p-12 overflow-hidden relative">
                <div className="flex-1 h-full w-full rounded-3xl bg-white shadow-xl p-10 text-gray-800 relative md:flex items-center text-center md:text-left">
                    <div className="w-full md:w-1/2">
                        <div className="h-16 w-16 md:mx-0 mx-auto overflow-hidden">
                            <img className='h-full w-full' src="logo.svg" alt="logo" />
                        </div>
                        <div className=" text-gray-600 font-light">
                            <h1 className="font-black uppercase text-3xl lg:text-5xl text-primary-text mb-5">You seem to be lost!</h1>
                            <p>The page you're looking for isn't available.</p>
                            <p>Try searching again or use the Go Back button below.</p>
                        </div>
                        <>
                            <Link to={"/"} className="text-lg font-light outline-none focus:outline-none transform transition-all hover:scale-110 text-yellow-500 hover:text-yellow-600"><i className="mdi mdi-arrow-left mr-2" />Go Back</Link>
                        </>
                    </div>
                    <div className="h-1/2 w-1/2 mx-auto overflow-hidden">
                        <img src="register.svg" alt="login" />
                    </div>

                </div>
             
            </div>

        </Layout>

    )
}

export default Page_404