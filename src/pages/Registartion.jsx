import React, { useEffect, useReducer, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Input from '../components/Input';
import { regiserAsync } from '../features/auth/authSlice';

const Registration = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const registerControls = [
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
        const { name, email, password } = registerformData;
        if (!name || !email || !password) {
            return alert("please fill the Registration form");
        }
        dispatch(regiserAsync(registerformData));
        setTimeout(() => {
            navigate("/")
        }, 500)
    }



    return (
        <>
            {/* left */}
            <section className="flex flex-col-reverse md:flex-row  h-screen justify-center items-center" >
                <div className="h-3/4 shadow-lg rounded-md m-2 w-full md:w-2/4 object-fill  overflow-hidden">
                    <img className='h-full w-full' src="register.svg" alt="Register-Image" />
                </div>

                {/* right */}
                <div className="flex flex-col justify-center h-full w-full py-4 md:w-2/4 items-center  bg-gradient-to-l from-red-200 to-amber-100 ">
                    <h1 className='col-span-full text-center p-2 rounded-lg text-primary-text shadow-md  font-thin text-2xl mb-5'>Register</h1>
                    <Input controls={registerControls} formData={registerformData} setFormData={setRegisterformData} />
                    <button className='bg-primary-text p-2 rounded-lg hover:bg-primary-hover-text font-light transition-all text-white' onClick={handleSubmit} >Register</button>
                    <p className='mt-2 text-lg md:text-xl font-light'>Already Have an Account? <span className='text-primary-text font-semibold'>{<Link to={"/login"}>Login</Link>}</span></p>

                </div>
            </section>
        </>

    )
}

export default Registration