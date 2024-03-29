import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, Navigate } from 'react-router-dom'
import Input from '../components/Input'
import { loginAsync, selectAuthUser } from '../features/auth/authSlice'

const Login = () => {
    const dispatch = useDispatch();
    const { errMssg } = useSelector(selectAuthUser);

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
        const { email, password } = loginformData;
        if (!email || !password) {
            return alert("please fill the login form");
        }
        dispatch(loginAsync(loginformData));
    }
    if (localStorage.getItem("user")) {
        return <Navigate to={"/"} />
    }

    return (
        <>
            <section className="flex flex-col-reverse md:flex-row  h-screen justify-center items-center" >
                {/* left */}
                <div className="h-3/4 shadow-lg m-2 rounded-md w-full md:w-2/4 object-fill  overflow-hidden">
                    <img className='h-full w-full' src="login.svg" alt="Register-Image" />
                </div>

                {/* right */}
                <div className="flex flex-col  justify-center h-full w-full py-4 md:w-2/4 items-center  bg-gradient-to-t from-red-200 to-amber-100 ">
                    <h1 className='col-span-full text-center p-2 rounded-lg text-primary-text shadow-md font-thin text-2xl mb-5'>Login</h1>
                    <Input controls={loginControls} formData={loginformData} setFormData={setLoginformData} />
                    <button className='bg-primary-text p-2 rounded-lg hover:bg-primary-hover-text font-light transition-all text-white' onClick={handleSubmit} >Login</button>
                    <p className='mt-2 text-lg md:text-xl font-light'>create an account? <span className='text-primary-text font-semibold'>{<Link to={"/register"}>Register</Link>}</span></p>
                    {/* error */}
                    <p className='text-red-900 font-semibold md:text-lg'>{errMssg && errMssg}</p>
                </div>


            </section >
        </>


    )
}

export default Login