import React from 'react'
import img from "../../assets/about.png"

const Aboutus = () => {
    return (
        <div className='section-container flex md:flex-row flex-col gap-2 justify-between items-center'>
            <div>
                <div className='font-primary text-5xl text-slate-400 mb-6'>
                    Lorem ipsum
                </div>
                <div className='text-blue font-primary'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quo veritatis ipsam, vero iste a fugiat doloremque. Modi, alias debitis aspernatur labore obcaecati fuga explicabo mollitia consequatur amet, id iusto!
                </div>
            </div>
            <div className='w-full'>
                <img src={img} alt="" className='w-full' />
            </div>

        </div>
    )
}

export default Aboutus