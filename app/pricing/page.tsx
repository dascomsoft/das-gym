

import Link from 'next/link'
import './pricing.css'
import Image from 'next/image'
import grafiti from '../../images/grafiti.svg'


function pricing() {
  return (
    <div className='pricing-main'>
      <div className="header-section py-[10rem]">
        <div className="container mx-auto px-4">
          <div className="header-content">
            <h1 className="text-5xl font-bold ">Flexible <span className='text-yellow-300'>Menbership</span> Plans</h1>
            <p className="text-xl mt-7">Choose the perfect plan to elevate your gymnastics journey, <br /> tailored to fit your goals and budget.</p>
            <p className='mt-7 text-3xl font-semibold text-yellow-300'>Our Pricing/</p>
          </div>
        </div>
      </div> 
      <div className="pricing-section py-[6rem]">
        <div className="container mx-auto px-4">
          <div className="relative mb-[5rem] w-full text-center flex flex-col items-center">
            <p className="relative w-[200px] z-10 text-[16px] uppercase font-bold text-white ">PRICING CHART</p>
            <Image src={grafiti} alt='picture' className="w-[200px] absolute -top-[6px]" />
            <h1 className="text-3xl font-bold mt-7">Exclusive Membership Plan</h1>
            <p>Gymat an unknown printer took a galley of type and scrambled <br /> make a type specimen book.</p>
          </div>
          <div className="pricing-container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mt-3">
              <div className="pricing-bg shadow-lg  border-transparent rounded-xl cursor-pointer transition duration-700 ease-in-out hover:scale-105">
                <div className=' text-white p-7'>
                  <h3 className='py-2 text-2xl font-bold'>Beginners</h3>
                  <p className="py-4">Financa dummy text of the printing and typesetting industry.</p>
                  <h6><span className='font-bold text-5xl text-red-600'>$130</span>/For 3 months</h6>
                </div>
                <div className='p-7 leading-10 pricing-text'>
                  <p>Free Hand</p>
                  <p>Gym Fitness</p>
                  <p>Weight Lost</p>
                  <p>Personal trainer</p>
                  <p>Cycling</p>
                  <br />
                  <Link href="/book" className='rounded-full w-full block text-center py-1  border-2 border-transparent text-black bg-white hover:bg-green-700 hover:border-transparent hover:text-white'>Book Now</Link>
                </div>
              </div>
              <div className="pricing-bg-1 shadow-lg border-transparent rounded-xl cursor-pointer transition duration-700 ease-in-out hover:scale-105">
                <div className='text-white p-7'>
                  <h3 className='py-2 text-2xl font-bold'>Professionals</h3>
                  <p className="py-4">Financa dummy text of the printing and typesetting industry.</p>
                  <h6><span className='font-bold text-5xl text-red-600'>$150</span>/For 6months</h6>
                </div>
                <div className='p-7 leading-10 rounded-lg pricing-text'>
                  <p>Free Hand</p>
                  <p>Gym Fitness</p>
                  <p>Weight Lost</p>
                  <p>Personal trainer</p>
                  <p>Cycling</p>
                  <br />
                  <Link href="/book" className='rounded-full w-full block text-center  py-1 border-transparant bg-white text-black hover:bg-green-700 hover:border-transparent hover:text-white'>Book Now</Link>
                </div>
              </div>

              <div className="pricing-bg-2 shadow-lg  border-transparent rounded-xl cursor-pointer transition duration-700 ease-in-out hover:scale-105">
                <div className='text-white p-7'>
                  <h3 className='py-2 text-2xl font-bold'>Advances</h3>
                  <p className="py-4">Financa dummy text of the printing and typesetting industry.</p>
                  <h6><span className='font-bold text-5xl text-red-500'>$200</span>/For 9 months</h6>
                </div>
                <div className='p-7 leading-10 pricing-text'>
                  <p>Free Hand</p>
                  <p>Gym Fitness</p>
                  <p>Weight Lost</p>
                  <p>Personal trainer</p>
                  <p>Cycling</p>
                  <br />
                  <Link href="/book" className='rounded-full w-full block text-center py-1 border-transparent bg-white text-black hover:bg-green-700 hover:border-transparent hover:text-white'>Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div className="notice-section py-[8rem]">
        <div className="container mx-auto px-4">
          <div className="notice-content text-center flex flex-col items-center ">
            <h1 className="text-5xl font-bold">FITNESS CLASSES THIS SUMMER</h1>
            <p className="text-3xl font-semibold py-4">Get <span className='text-red-600'>35% </span> Discount</p>
            <Link href="/program" className="block w-auto max-w-[350px] font-bold  text-white text-xl bg-red-700 transition duration-500 ease-in-out  hover:bg-white hover:text-black text-center py-3 px-4 mt-7">READ MORE</Link>
          </div>
        </div>
      </div>
    </div>
  


  )
}

export default pricing