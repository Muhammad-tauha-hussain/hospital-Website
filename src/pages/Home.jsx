import React from 'react'
import Hero from '../components/Hero/Hero'
import SpecialityMenu from '../components/specialityMenu/SpecialityMenu'
import TopDoctors from '../components/TopDoctors/TopDoctors'
import Banner from '../components/Banner/Banner'
const Home = () => {
  return (
    <div>
      <Hero/>
      <SpecialityMenu />
      <TopDoctors/>
      <Banner />
      
    </div>
  )
}

export default Home