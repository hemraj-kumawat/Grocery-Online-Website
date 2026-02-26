import React from 'react'
import Button from '../Button/Button'
import About03 from '../../assets/About-03.jpg'

function GetStarted() {
  return (
    <section>
        <div className='bg-zinc-100 my-20 bg-cover bg-no-repeat grid md:grid-cols-2 '
        style={{ backgroundImage: `url(${About03})`}}>
            <div className='px-10 py-10'>
            <h1 className='text-zinc-800 font-bold text-4xl'>Ready to <span className='text-orange-500'>Get Started?</span></h1>
            <p className='mt-4 text-lg font-semibold text-zinc-600'>Explore our wide range of fresh and organic grocery products and experience hassle-free online shopping with fast delivery and trusted quality.</p>
            <div className='flex gap-4'>
            <Button content={"Start Shopping"} />
            <button className='bg-white  text-orange-500 tracking-wide mt-6 px-5 py-3 rounded-lg font-semibold hover:scale-105 hover:bg-amber-50 transition duration-300 cursor-pointer'>Contact Us</button>
            </div>
           </div>
        </div>
    </section>
  )
}

export default GetStarted