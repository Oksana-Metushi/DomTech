import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import img from "../../assets/brands.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-cards';


// import required modules
import { EffectCards } from 'swiper/modules';


const blog = [
    { id: 1, title: "Apple", des: "Delight your guests with our flavors and  presentation", img: img },
    { id: 2, title: "Samsung", des: "We deliver your order promptly to your door", img: img },
    { id: 3, title: "Xiaomi", des: "Explore menu & order with ease using our Online Ordering n", img: img },
    { id: 3, title: "asdasdas", des: "Explore menu & order with ease using our Online Ordering n", img: img },
    { id: 3, title: "gjghjghi", des: "Explore menu & order with ease using our Online Ordering n", img: img },

]
const Blog = () => {
    return (
        <div className='section-container my-[10%] grid md:grid-cols-2 grid-cols-1 items-center'>
            <div>
                <h1 className='font-tek text-3xl text-slate-400 mb-6'>Blog</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam expedita veritatis qui excepturi
                    aut sequi cum labore fugiat quia? Culpa voluptas, numquam maiores voluptates recusandae inventore id ipsum at libero.</p>
            </div>
            <div>
                <Swiper
                    effect={'cards'}
                    grabCursor={true}
                    modules={[EffectCards]}
                    className="mySwiper w-[55%] md:h-[60%] md:mt-0 mt-[10%]"
                >
                    {
                        blog.map((brand) => (
                            <SwiperSlide>

                                <div className="card  bg-base-100 shadow-xl">
                                    <figure><img src={brand.img} alt="Shoes" /></figure>
                                    <div className="card-body">
                                        <h2 className="card-title">{brand.title}</h2>
                                        <p>{brand.des}</p>
                                        <div className="card-actions justify-end">
                                            <button className="btn btn-primary">Read more</button>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </div>
    );
}

export default Blog