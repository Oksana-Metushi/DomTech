import React from 'react'
import { SlHome } from "react-icons/sl";
import { BsSend } from "react-icons/bs";
import { SlShield } from "react-icons/sl";
import { SlRocket } from "react-icons/sl";

const servicelist = [
    { id: 1, title: "Home Shipping", des: "Free for all oder", icon: <SlHome size={40} /> },
    { id: 2, title: "100% Refund", des: "Cash Back", icon: <BsSend size={40} /> },
    { id: 3, title: "Clients Support", des: "Fast Service ", icon: <SlShield size={40} /> },
    { id: 4, title: "Fast Delivery", des: "Best Service", icon: <SlRocket size={40}/> },
]

const Services = () => {
    return (
        <div className='grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 section-container my-[5%]'>
            {
                servicelist.map((service) => (
                    <div className="border-2">
                        <div className="card-body flex flex-row items-center justify-evenly font-serif">
                            <div className='text-blue'>{service.icon}</div>
                            <div>
                                <h2 className="font-semibold">{service.title}</h2>
                                <p className=' tracking-widest'>{service.des}</p>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default Services