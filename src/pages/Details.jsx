import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import Layout from '../components/Layout'
import MyAccordion from '../components/MyAccordion'
import { fetchDetailsByIDAsync, selectopportunities } from '../features/opportunities/opportunitiesSlice'

const Details = () => {
    const dispatch = useDispatch();
    const { id } = useParams();
    useEffect(() => {
        dispatch(fetchDetailsByIDAsync(id));
    }, [id])
    const { details, errMssg, isLoading } = useSelector(selectopportunities)
    if (isLoading) {
        return <h1>Loading...</h1>
    }
    return (
        <Layout>
            <section className='flex flex-col items-center  md:items-stretch gap-4 p-2 shadow-lg overflow-auto no-scrollbar  '>
                {/* error showing */}
                {
                    errMssg && <p className='text-red-600 font-extrabold text-xl'>{errMssg || "Something went wrong"}</p>

                }

                <p className='text-primary-text font-semibold text-lg md:text-2xl bg-secondary-bg rounded-lg p-2'>{details?.title}</p>
                <div className="md:p-2 w-full md:h-[25rem] overflow-hidden">
                    <img className='h-full w-full object-contain rounded-lg' src={details?.img} alt="img" />
                </div>
                <p className='text-primary-hover-text bg-slate-500 p-2 rounded-md shadow-lg w-full text-xl font-extrabold'><span className='font-medium mr-2 p-2'>Amount:</span>
                    <span className='text-secondary-text font-semibold mr-2'>
                        $</span >{details?.amount}</p>

                <p className='text-primary-text bg-secondary-bg w-fit mx-auto px-4 py-2 rounded-lg font-semibold text-xl'>Description</p>
                <p className='text-secondary-text text-lg  shadow-lg border-t text-start p-2 font-light'>{details?.description}</p>

                {
                    details && details.info.map((item, index) => (
                        <MyAccordion
                            key={index}
                            title={item?.heading}
                            details={item?.detail}
                        />))
                }



            </section>
        </Layout>
    )
}

export default Details