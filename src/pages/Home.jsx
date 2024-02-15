import React, { useEffect } from 'react'
import Layout from '../components/Layout'

import equity from "../assets/quity.svg"
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataAsync, selectopportunities } from '../features/opportunities/opportunitiesSlice';
import { Link } from 'react-router-dom';


// -left-52
const Home = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchDataAsync());
    }, [])
    const { data, errMssg, isLoading } = useSelector(selectopportunities)

    if (isLoading) {
        return <h1>Loading...</h1>
    }

    return (

        <Layout>
            <section className=' bg-primary-bg  flex flex-col md:h-full py-4 px-2'>

                {/* error showing */}
                {
                  errMssg &&  <p className='text-red-600 font-extrabold text-xl'>{errMssg || "Something went wrong"}</p>

                }


                <div className=' flex flex-wrap gap-4 items-center justify-center h-full  '>

                    {/* card */}
                    {
                        data && data.map((item) => (
                            <Link to={`/detail/${item.id}`} key={item.id} className="h-[12rem] w-[15rem] flex flex-col justify-center bg-gradient-to-b from-red-100 to-amber-100 hover:from-amber-100 hover:to-blue-200 cursor-pointer transition-all shadow-custom_Shadow border py-2 rounded-lg">
                                <div className="  h-48 w-full p-2  overflow-hidden">
                                    <img className='h-full w-full object-fill rounded-md ' src={item.img} alt="image" />
                                </div>
                                <span className='text-md text-secondary-bg' >{item.title}</span>
                                <p className='text-primary-text'>Amount: <span className='font-semibold'>$ {item.amount}</span></p>

                            </Link>
                        ))
                    }
                </div>


            </section>


        </Layout>

    )
}

export default Home