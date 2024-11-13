import { ReactComponent as MobileLogo } from '../assets/mobiles3.svg'

function ThirdSection() {
    return (
      <div className='w-full h-full pt-14 bg-darkerBlue flex flex-col md:flex-row px-14'>
        <div className='w-full md:w-1/2'>
        <div className='space-y-6'>
            <p className='text-xl font-semibold text-primaryBlack'>Save time and simplify your search.</p>
            <p className='text-3xl font-semibold text-primaryBlack'>
                Get an <span className='text-primaryOrange'>Expert</span>'s advice at your fingertips.
            </p>
            <p className='text-md font-semibold text-primaryBlack'>
                Connect instantly with a diverse network of professionals who speak your native language. From consultants and doctors to lawyers and more, our experts are ready to provide up-to-date information and comprehensive services tailored to your needs.
            </p>
            <p className='text-md font-semibold text-primaryBlack'>
                Avoid the hassle of endless searching—let us link you directly to the help you require, saving you valuable time and ensuring peace of mind.
            </p>
        </div>
        </div>
        <div className='w-full md:w-1/2 flex justify-center items-center'>
          <MobileLogo />
        </div>
      </div>
    );
  }
  
  

export default ThirdSection;