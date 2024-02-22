import React from 'react'

const Home = () => {
    return (
        <div class="relative flex items-center justify-center h-screen mb-12 overflow-hidden">
            <div class="relative z-30 p-5 text-2xl text-white bg-blue bg-opacity-50 rounded-xl">
                DomTech
            </div>
            <video src='https://assets.mixkit.co/videos/preview/mixkit-black-phone-on-laptop-247-large.mp4' autoPlay loop muted class="absolute z-10 w-auto min-w-full min-h-full max-w-none"/>
            
        </div>
    )
}

export default Home