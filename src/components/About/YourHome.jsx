import React from 'react'
import CategoryHeading from "../Hero/CategoryHeading";
import About02 from "../../assets/About-02.png"

function YourHome() {
  return (
    <section>
      <CategoryHeading highlight={"Your"} heading={"Home"} />
      <div className='grid md:grid-cols-2 gap-12 items-center grid-cols-1 px-10 py-10'>
        <div>
          <h1 className="text-zinc-700 font-bold text-4xl">From <span className='text-orange-500 '>Farm</span> to Your Home</h1>
          <div className='mt-10 mb-5 shadow shadow-zinc-400 rounded-2xl p-5'>
            <h3 className="text-zinc-700 font-bold text-2xl">Local Farms</h3>
            <p className='text-zinc-600 font-semibold text-xl'>Sourced directly from verified and trusted local farmers.</p>
          </div>
          <div className='mt-10 mb-5 shadow shadow-zinc-400 rounded-2xl p-5'>
            <h3 className="text-zinc-700 font-bold text-2xl">Always Fresh</h3>
            <p className='text-zinc-600 font-semibold text-xl'>Guaranteed fresh and organic products delivered daily.</p>
          </div>
          <div className='mt-10 mb-5 shadow shadow-zinc-400 rounded-2xl p-5'>
            <h3 className="text-zinc-700 font-bold text-2xl">Fast Delivery</h3>
            <p className='text-zinc-600 font-semibold text-xl'>Quick, safe, and on-time delivery right to your doorstep.</p>
          </div>
        </div>
        <div>
          <img src={About02} alt="About-02-img"
          className="w-full max-w-[480px] h-auto rounded-2xl shadow-2xl shadow-zinc-400" />
        </div>
      </div>
    </section>
  )
}

export default YourHome