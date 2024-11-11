import React from 'react'
import { imageList } from './DataLists'
import { FaApple } from "react-icons/fa";
import { FaGooglePlay } from "react-icons/fa";
import { ReactComponent as MobileLogo } from '../assets/mobiles.svg'

function FirstSection() {
  return (
    <div className='w-full h-screen flex flex-col md:flex-row bg-darkerBlue'>
      <div className='bg-primaryOrange w-full md:w-1/2 h-full flex flex-col gap-10'>
        <div className='flex flex-col items-center md:items-start md:pl-14 pt-6  space-y-7'>
          <div>
            <h1 className='text-7xl text-primaryWhite font-bold'>Greetly.ch</h1>
          </div>

          <div className='flex flex-col items-center space-y-5 md:items-start '>
            <p className='text-lighterOrange text-xl flex flex-col items-center md:items-start'>
              Your immigration consultant in <span className='text-2xl text-primaryYellow font-semibold'>Switzerland</span>
            </p>

            <p className='text-lighterOrange text-xl w-[60%]'>
              Find solutions for all aspects of relocation based on your origin and occupation. Get consultation from experts.
            </p>

            <div className='flex w-[90%] md:w-[64%] items-center space-x-2 bg-darkOrange p-3 rounded-2xl'>
              {imageList.map((url, index) => (
                <div key={index}>
                  <img src={url} className='w-6 h-5' alt={`Image ${index + 1}`} />
                </div>
              ))}
              <p className='text-lighterOrange text-xl'>Translated</p>
            </div>
          </div>

          <div className='space-y-3'>
            <p className='text-lighterOrange text-lg uppercase'>Coming soon on</p>
            <div className='flex items-center space-x-3'>
              <div className='bg-primaryWhite w-[155px] h-[44px] rounded-md flex justify-center items-center shadow-lg text-primaryOrange font-bold text-xl space-x-1'>
                <FaApple size={25} />
                <p>App store</p>
              </div>
              <div className='bg-primaryWhite w-[155px] h-[44px] rounded-md flex justify-center items-center shadow-lg text-primaryOrange font-bold text-xl space-x-1'>
                <FaGooglePlay />
                <p>Google play</p>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full h-full justify-self-end'>
          <img className='object-cover w-full h-full' src={require('../assets/logo_wide.png')} alt="Logo" />
        </div>
      </div>

      <div className='w-full md:w-1/2 flex items-center justify-center'>
        <MobileLogo />
      </div>
    </div>
  )
}


export default FirstSection