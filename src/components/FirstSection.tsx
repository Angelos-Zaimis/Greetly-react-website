import React from 'react'
import { imageList } from './Languages'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { ReactComponent as MobileLogo } from '../assets/mobiles.svg'

function FirstSection() {
  return (
    <div className='w-full h-full flex'>
      <div className='bg-primaryOrange w-1/2 h-full flex flex-col p-20 gap-10'>
        <div>
          <h1 className='text-7xl text-primaryWhite font-bold'>Greetly.ch</h1>
        </div>

        <div className='space-y-5'>
          <p className='text-lighterOrange text-xl w-full'>
            Your immigration consultant in <span className='text-2xl text-primaryYellow font-semibold'>Switzerland</span>       
          </p>

          <p className='text-lighterOrange text-xl w-full'>
            Find solutions for all aspects of relocation based on your origin and occupation. Get consultation from experts.
          </p>

          <div className='flex items-center space-x-2 bg-darkOrange p-2 rounded-2xl'>
              {imageList.map((url, index) => (
                <div key={index}>
                  <img src={url}  className='w-[20px] h-[20px] object-contain' alt={`Image ${index + 1}`}/>
                </div>
              ))}
              <p className='text-lighterOrange text-xl'>Translated</p>
          </div>
        </div>

        <div className='space-y-3'>
          <p className='text-lighterOrange text-lg uppercase'>Comming soon on</p>
          <div className='flex items-center space-x-3'>
            <div className='bg-primaryWhite w-[155px] h-[44px] rounded-md flex justify-center items-center shadow-lg text-primaryOrange font-bold text-xl space-x-1'>
              <FaApple size={25}/> 
              <p>App store</p>
            </div>
            <div className='bg-primaryWhite w-[155px] h-[44px] rounded-md flex justify-center items-center shadow-lg text-primaryOrange font-bold text-xl space-x-1'>
              <FaGooglePlay />
              <p>Google play</p>
            </div>
          </div>
        </div>
      
        <div className='w-full'>
           <img className='object-cover w-full h-[285px]' src={require('../assets/logo_wide.png')}/>
        </div>
      </div>
      
      <div className='w-1/2 flex items-center justify-center'>
        <MobileLogo/>
      </div>
    </div>
  )
}

export default FirstSection