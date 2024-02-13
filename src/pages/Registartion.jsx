import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Input from '../components/Input';

const Registration = () => {

    const registerControls = [

        // {
        //     name: "photo",
        //     type: "file",
        //     label: "user"
        // },

        {
            name: "name",
            placeholder: "Enter your name",
            type: "text",
            label: "Name"
        },
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
    const initialRegisterFormData = {
        name: "",
        email: "",
        password: ""
    }

    const [registerformData, setRegisterformData] = useState(initialRegisterFormData);
    const handleSubmit = () => {
        console.log(registerformData)
    }
    return (

        <>
            {/* left */}
            <div className="flex flex-col-reverse md:flex-row  h-screen justify-center items-center" >
                <div className="h-3/4 shadow-lg rounded-md m-2 w-full md:w-2/4 object-fill  overflow-hidden">
                    <img className='h-full w-full' src="register.svg" alt="Register-Image" />
                </div>

                {/* right */}
                <div className="flex flex-col justify-center h-full w-full py-4 md:w-2/4 items-center bg-primary-bg ">
                    <h1 className='col-span-full text-center p-2 rounded-lg text-primary-btn shadow-md  font-thin text-2xl mb-5'>Register</h1>
                    <Input controls={registerControls} formData={registerformData} setFormData={setRegisterformData} />
                    <button className='bg-primary-btn p-2 rounded-lg hover:bg-primary-hover-btn font-light transition-all text-white' onClick={handleSubmit} >Register</button>
                    <p className='mt-2 text-lg md:text-xl font-light'>Already Have an Account? <span className='text-primary-btn font-semibold'>{<Link to={"/login"}>Login</Link>}</span></p>

                </div>
            </div >
        </>

    )
}

export default Registration