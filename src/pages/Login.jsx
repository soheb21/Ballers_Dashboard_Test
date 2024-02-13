import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/Input'

const Login = () => {
    const loginControls = [
        {
            name: "email",
            placeholder: "Enter your email",
            type: "text",
            label: "Email"
        },
        {
            name: "password",
            placeholder: "Enter your password",
            type: "text",
            label: "Password"
        },
    ]
    const initialLoginFormData = {
        email: "",
        password: ""
    }


    const [loginformData, setLoginformData] = useState(initialLoginFormData);
    const handleSubmit = () => {
        console.log(loginformData)
    }
    return (
        <>
            {/* left */}
            <div className="flex flex-col-reverse md:flex-row  h-screen justify-center items-center" >
                <div className="h-3/4 shadow-lg m-2 rounded-md w-full md:w-2/4 object-fill  overflow-hidden">
                    <img className='h-full w-full' src="login.svg" alt="Register-Image" />
                </div>

                {/* right */}
                <div className="flex flex-col  justify-center h-full w-full py-4 md:w-2/4 items-center bg-primary-bg ">
                    <h1 className='col-span-full text-center p-2 rounded-lg text-primary-btn shadow-md font-thin text-2xl mb-5'>Login</h1>
                    <Input controls={loginControls} formData={loginformData} setFormData={setLoginformData} />
                    <button className='bg-primary-btn p-2 rounded-lg hover:bg-primary-hover-btn font-light transition-all text-white' onClick={handleSubmit} >Login</button>
                    <p className='mt-2 text-lg md:text-xl font-light'>create an account? <span className='text-primary-btn font-semibold'>{<Link to={"/register"}>Register</Link>}</span></p>

                </div>
            </div >
        </>


    )
}

export default Login