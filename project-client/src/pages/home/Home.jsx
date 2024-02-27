import React from 'react'
import Banner from './Banner'
import Aboutus from './Aboutus'
import Brands from './Brands'
import Services from './Services'
import Blog from './Blog'
import Newsletter from '../../components/Newsletter'

const Home = () => {
    return (
        <>
            <Banner />
            <Services />
            <Aboutus />
            <Brands />
            <Blog />
            <Newsletter />
        </>
    )
}

export default Home