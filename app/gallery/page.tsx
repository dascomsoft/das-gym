
import './gallery.css'
import Image from 'next/image'
import grafiti from '../../images/grafiti.svg'

import gall1 from '../../images/gall1.png'
import gall2 from '../../images/gall2.png'
import gall3 from '../../images/gall3.png'
import gall4 from '../../images/gall4.png'
import gall5 from '../../images/gall5.png'
import gall12 from '../../images/gall12.png'
import gall13 from '../../images/gall13.png'
import gall14 from '../../images/gall14.png'

function gallery() {
  return (
    <div className='gallery-main'>
      <div className="header-section py-[12rem]">
        <div className="container mx-auto px-4">
          <div className="header-content">
            <h1 className="text-5xl font-bold "><span className='text-yellow-300'>Gymnastics</span> in Motion</h1>
            <p className="text-xl mt-7">Discover the artistry and power of gymnastics through our  <br />captivating gallery, where every move tells a story</p>
            <p className='mt-7 text-3xl font-semibold text-yellow-300'>Our Gallery/</p>
          </div>
        </div>
      </div>
      <div className="gallery-section py-[6rem] text-black">
        <div className="container mx-auto px-4">
          <div className="relative mb-[5rem] w-full text-center flex flex-col items-center">
            <p className="relative w-[200px] z-10 text-[16px] uppercase font-bold text-white ">OUR GALLERY</p>
            <Image src={grafiti} alt='picture' className="w-[200px] absolute -top-[6px]" />
            <h1 className="text-3xl font-bold mt-7">Our Workplace Gallery</h1>
            <p>Our Workplace Gallery features modern office, team collaboration. <br /> Attracts talents and showcases companies work atmosphere.</p>
          </div>
          <div className="gallery-content">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
              <div className='icon-content'>
                <Image src={gall1} alt='pixa picture' className='w-full' />
                <div className="icon-detail">
                  <h1 className='text-3xl'>Body Building</h1>
                  <p className='text-xl'>Lifting</p>
                </div>
              </div>
              <div className='icon-content'>
                <Image src={gall2} alt='pixa picture' className='w-full' />
                <div className="icon-detail">
                  <h1 className='text-3xl'>Training Exercice</h1>
                  <p className='text-xl'>Body Building</p>
                </div>
              </div>
              <div className='icon-content'>
                <Image src={gall3} alt='pixa picture' className='w-full' />
                <div className="icon-detail">
                  <h1 className='text-3xl'>Body Exercice</h1>
                  <p className='text-xl'>Musculation</p>
                </div>
              </div>
              <div className='icon-content'>
                <Image src={gall4} alt='pixa picture' className='w-full' />
                <div className="icon-detail">
                  <h1 className='text-3xl'>Boxing Figth</h1>
                  <p className='text-xl'>Thai Figthing</p>
                </div>
              </div>
              <div className='icon-content'>
                <Image src={gall5} alt='pixa picture' className='w-full' />
                <div className="icon-detail">
                  <h1 className='text-3xl'>Fitness Trainning</h1>
                  <p className='text-xl'>Body Fitness</p>
                </div>
              </div>
              <div className='icon-content'>
                <Image src={gall12} alt='pixa picture' className='w-full' />
                <div className="icon-detail">
                  <h1 className='text-3xl'>Boxe Trainning</h1>
                  <p className='text-xl'>Boxing</p>
                </div>
              </div>
              <div className='icon-content'>
                <Image src={gall13} alt='pixa picture' className='w-full' />
                <div className="icon-detail">
                  <h1 className='text-3xl'>Boxe Training</h1>
                  <p className='text-xl'>Fitness</p>
                </div>
              </div>
              <div className='icon-content'>
                <Image src={gall14} alt='pixa picture' className='w-full' />
                <div className="icon-detail">
                  <h1 className='text-3xl'>Push Up Training</h1>
                  <p className='text-xl'>Body Building</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default gallery