import React from 'react'

function CategoryBanner({ title, BannerImg }) {
  return (
    <div className='h-[50vh] mt-16 flex justify-center text-center bg-cover bg-center relative'
    style={{ backgroundImage: `url(${BannerImg})`}}>
        <h2 className="text-4xl self-center font-bold rounded-xl px-5 py-3 bg-orange-500 text-white z-10">{title}</h2>
        <div className='bg-black absolute opacity-50 inset-0'></div>
    </div>
    
  )
}

export default CategoryBanner