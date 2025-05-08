import Corousels from '@/components/Corousels'
import Fifith from '@/components/Fifith'
import First from '@/components/First'
import Footer from '@/components/Footer'
import Fourth from '@/components/Fourth'
import Header from '@/components/Header'
import HomePage from '@/components/HomePage'
import Doctors from '@/components/MeetDoctors'
import Second from '@/components/Second'
import Services from '@/components/Services'
import Third from '@/components/Third'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Header/>
      <HomePage/>
      <First/>
      <Second/>
      <Third/>
      <Fourth/>
      <Fifith/>
      <Services/>
      <Doctors/>
      <Corousels/>
      <Footer/>
    </div>
  )
}

export default Home
