import React from 'react'
import img from "../../assets/brands.jpg"

const brandlist = [
    { id: 1, title: "Apple", des: "Delight your guests with our flavors and  presentation", img: img },
    { id: 2, title: "Samsung", des: "We deliver your order promptly to your door", img: img },
    { id: 3, title: "Xiaomi", des: "Explore menu & order with ease using our Online Ordering n", img: img },
    { id: 4, title: "Motorrla", des: "Explore menu & order with ease using our Online Ordering n", img: img },
]

const Brands = () => {
    return (
        <div className='grid md:grid-cols-4 sm:grid-cols-2 gap-4 section-container md:justify-between'>
            {
                brandlist.map((brand) => (
                    <div className="card bg-base-100 shadow-xl image-full">
                    <figure><img src={brand.img} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{brand.title}</h2>
                        <p>{brand.des}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">See products</button>
                        </div>
                    </div>
                </div>
                ))
            }
           
        </div>

    )
}

export default Brands