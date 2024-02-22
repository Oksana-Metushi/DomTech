import React from 'react'

const Banner = () => {
  return (
    <div class="relative flex items-center  h-screen mb-12 overflow-hidden">
            <div className='section-container h-screen flex flex-col justify-center text-white space-y-5 z-20'>
                <span className='font-primary text-5xl text-slate-400'>
                Lorem ipsum
                </span>
                <span className='text-blue md:w-1/2 font-primary'>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae quo veritatis ipsam, vero iste a fugiat doloremque. Modi, alias debitis aspernatur labore obcaecati fuga explicabo mollitia consequatur amet, id iusto!
                </span>
            </div>
            <video src='https://assets.mixkit.co/videos/preview/mixkit-black-phone-on-laptop-247-large.mp4' autoPlay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none"/>
            
        </div>
  )
}

export default Banner