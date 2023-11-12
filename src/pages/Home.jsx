/* eslint-disable no-unused-vars */
import React from 'react'
import Banner from '../components/Banner'
import Companies from '../components/Companies'
import About from '../components/About'
import Category from '../components/Category'
import { Helmet } from 'react-helmet-async'

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>JobEarth | Home</title>
      </Helmet>
      <Banner/>
      <About/>
      <Category/>
      <Companies/>
    </div>
  )
}

export default Home
