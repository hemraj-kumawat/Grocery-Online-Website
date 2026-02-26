import React from 'react'
import CategoryHeading from "../Hero/CategoryHeading";
import { GiHeartWings } from "react-icons/gi";
import { PiBasketFill } from "react-icons/pi";
import { FaHome } from "react-icons/fa";
import { GrStatusGood } from "react-icons/gr";

function OurAchievements() {
  return (
    <section>
        <CategoryHeading highlight={"Our"} heading={"Achievements"} />
        <div className='grid md:grid-cols-4 grid-cols-1 gap-8 px-10 py-10 text-center'>
            <div className=' shadow shadow-zinc-300 rounded-2xl p-5  flex flex-col items-center group hover:scale-105 hover:shadow-xl transition-all duration-300'>
                <h1 className="text-orange-500 font-bold text-2xl mb-3">30K+</h1>
                <p className='text-zinc-600 font-semibold text-xl mb-2'>Happy Customers</p>
                <GiHeartWings className='text-orange-500 text-6xl ' />
            </div>
            <div className=' shadow shadow-zinc-300 rounded-2xl p-5 flex flex-col items-center group hover:scale-105 hover:shadow-xl transition-all duration-300'>
                <h1 className="text-orange-500 font-bold text-2xl mb-3">1K+</h1>
                <p className='text-zinc-600 font-semibold text-xl mb-2'>Organic Products</p>
                <PiBasketFill className='text-orange-500 text-5xl ' />
            </div>
            <div className=' shadow shadow-zinc-300 rounded-2xl p-5 flex flex-col items-center group hover:scale-105 hover:shadow-xl transition-all duration-300'>
                <h1 className="text-orange-500 font-bold text-2xl mb-3">200+</h1>
                <p className='text-zinc-600 font-semibold text-xl mb-2'>Partnered Farms</p>
                <FaHome className='text-orange-500 text-5xl ' />
            </div>
            <div className=' shadow shadow-zinc-300 rounded-2xl p-5 flex flex-col items-center group hover:scale-105 hover:shadow-xl transition-all duration-300'>
                <h1 className="text-orange-500 font-bold text-2xl mb-3">99%</h1>
                <p className='text-zinc-600 font-semibold text-xl mb-2'>Customer Satisfaction</p>
                <GrStatusGood className='text-orange-500 text-5xl ' />
            </div>
        </div>
    </section>
  )
}

export default OurAchievements