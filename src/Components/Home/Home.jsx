import React from 'react'
import MainSlide from '../MainSlide/MainSlide'
import Products from '../Products/Producs'

export default function Home() {
  return (
    <>
     <MainSlide/>
      <h1 className='mt-5'>all products</h1>
      <Products/>
    </>
  )
}
