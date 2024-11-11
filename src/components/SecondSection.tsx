import React from 'react'
import { categoriesList } from './DataLists'
import { ReactComponent as MobileLogo } from '../assets/mobiles2.svg'

function SecondSection() {
    return (
        <div className='w-full h-full pt-14 bg-darkerBlue flex flex-col md:flex-row px-14'>
        <div className='w-full md:w-1/2 flex flex-col justify-between'>  
          <p className='text-2xl text-primaryBlack font-semibold w-1/2'>
            <span className='text-primaryOrange'>All you need</span> to know for moving to Switzerland <span className='text-primaryOrange'>in one place</span>
          </p>
  
          <div>
            <MobileLogo />
          </div>
        </div>
  
        <div className='flex flex-col w-full md:w-1/2 space-y-24'>
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 w-full md:w-[700px]'>
            {categoriesList.map((category, index) => (
              <div className='bg-primaryBlue border border-primaryGrey/55 h-[80px] flex items-center justify-between p-4 rounded-2xl' key={index}>
                <div>
                  <p className='text-primaryBlack text-base font-semibold'>{category.title}</p>
                  <p className='text-primaryGrey text-sm'>{category.description}</p>
                </div>
                <div>
                  <img src={category.icon} alt={category.title} className='w-5 h-5 object-contain' />
                </div>
              </div>
            ))}
          </div>
  
          <div className='space-y-2'>
            <p className='text-xl font-semibold text-primaryBlack'>Save time.</p>
            <p className='text-3xl font-semibold text-primaryBlack'>Get an <span className='text-primaryOrange'>Expert</span>'s advice.</p>
            <p className='text-md font-semibold text-primaryBlack'>Get access to a variety of professionals that speak your native language, including consultants, doctors, lawyers, and more, who are ready to provide updated information and comprehensive services to meet your needs.</p>
          </div>
        </div>
      </div>
    )
  }
  

export default SecondSection