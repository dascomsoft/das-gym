
import './program.css'
import Image from 'next/image'
import Link from 'next/link'
import fitness from '../../images/fitness.jpg'
import boxing from '../../images/boxing.jpg'
import body from '../../images/body.jpg'
import running from '../../images/running.jpg'
import crossfit from '../../images/crossfit.jpg'
import yoga from '../../images/yoga.jpg'
import grafiti from '../../images/grafiti.svg'
import timi6 from '../../images/timi6.png'
import timi7 from '../../images/timi7.png'
import timi8 from '../../images/timi8.png'


function program() {
  return (
    <div className='program-main'>
      <div className="header-section py-[12rem]">
        <div className="container mx-auto px-4">
          <div className="header-content">
            <h1 className="text-5xl font-bold">Explore Our <span className=' text-yellow-300'>Gymnastics </span> Classes</h1>
            <p className="text-xl mt-7">Discover a variety of classes designed to inspire and challenge every <br /> gymnast, from beginners to advanced athletes..</p>
            <p className='mt-7 text-3xl font-semibold text-yellow-300'>Our Classes/</p>
          </div>
        </div>
      </div>
      <div className="class-section py-[6rem]">
        <div className="container mx-auto px-4">
        <div className="relative mb-[5rem] w-full text-center flex flex-col items-center">
            <p className="relative w-[200px] z-10 text-[16px] uppercase font-bold text-white ">OUR FEATURED CLASS</p>
            <Image src={grafiti} alt='picture' className="w-[200px] absolute -top-[6px]" />
            <h1 className="text-3xl font-bold mt-7">We Are Offering Best Flexible Classes
            </h1>
            <p className='pt-3'>Expert team of coaches helps you succeed in any goal,personalized <br /> guidance and motivation provided!</p>
          </div>
          <div className="class-container grid md:grid-cols-2 lg:grid-cols-3 gap-7">
            <div className="class-content">
              <Image src={fitness} alt="pictue" className="image-class" />
              <div className="class-text ">
                <h1 className="font-bold text-3xl">FITNESS</h1>
                <p className="py-2">Elevate Your Wellness with Premier <br /> Fitness Solutions</p>
                <p className="bg-red-600 p-4 block w-auto max-w-[300px] mt-2">Wednesday: 9:00am-10:00am</p>
              </div>
              <h2 className="text-white ps-20 font-extrabold mt-10 class-title">FITNESS</h2>
            </div>
            <div className="class-content">
              <Image src={boxing} alt="pictue" className="image-class" />
              <div className="class-text ">
                <h1 className="font-bold text-3xl">BOXING</h1>
                <p className="py-2">Unleash Your Inner Strength with  Expert <br /> Boxing Training</p>
                <p className="bg-red-600 p-4 block w-auto max-w-[300px] mt-2">Tuesday: 11:00am-12:00am</p>
              </div>
              <h2 className="text-white ps-20 font-extrabold mt-10 class-title">BOXING</h2>
            </div>
            <div className="class-content">
              <Image src={body} alt="pictue" className="image-class" />
              <div className="class-text ">
                <h1 className="font-bold text-3xl">WORKOUT</h1>
                <p className="py-2">Ignite Your Fitness Journey with Dynamic <br /> Workouts</p>
                <p className="bg-red-600 p-4 block w-auto max-w-[300px] mt-2">THursday: 7:00am-8:00am</p>
              </div>
              <h2 className="text-white ps-14 font-extrabold mt-10 class-title">WORKOUT</h2>
            </div>
            <div className="class-content">
              <Image src={running} alt="pictue" className="image-class" />
              <div className="class-text ">
                <h1 className="font-bold text-3xl">RUNNING</h1>
                <p className="py-2">Unleash Your Potential with Every <br /> Stride on You</p>
                <p className="bg-red-600 p-4 block w-auto max-w-[300px] mt-2">Monday: 6:00am-7:00am</p>
              </div>
              <h2 className="text-white ps-14 font-extrabold mt-10 class-title">RUNNING</h2>
            </div>
            <div className="class-content">
              <Image src={crossfit} alt="pictue" className="image-class" />
              <div className="class-text ">
                <h1 className="font-bold text-3xl">CROOSFIT</h1>
                <p className="py-2">Unleash Your Potential with CrossFit</p>
                <p className="bg-red-600 p-4 block w-auto max-w-[300px] mt-2">Saturday: 9:00am-10:00am</p>
              </div>
              <h2 className="text-white ps-16 font-extrabold mt-10 class-title">CROSSFIT</h2>
            </div>
            <div className="class-content">
              <Image src={yoga} alt="pictue" className="image-class" />
              <div className="class-text ">
                <h1 className="font-bold text-3xl">YOGA</h1>
                <p>Find Balance and Inner Peace <br /> Through Yoga</p>
                <p className="bg-red-600 p-4 block w-auto max-w-[300px] mt-2">Sunday:8:00am-10:00am</p>
              </div>
              <h2 className="text-white ps-20 font-extrabold mt-10 class-title">YOGA</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="team-section py-[10rem] bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="relative mb-[5rem] w-full text-center flex flex-col items-center">
            <p className="relative w-[200px] z-10 text-[16px] uppercase font-bold text-white ">GYM TRAINERS</p>
            <Image src={grafiti} alt='picture' className="w-[200px] absolute -top-[6px]" />
            <h1 className="text-3xl font-bold mt-7">Team of Expert Coaches</h1>
            <p>Expert team of coaches helps you succeed in any goal,personalized <br /> guidance and motivation provided!</p>
          </div>
          <div className="team-content grid md:grid-cols-2 lg:grid-cols-3 gap-7 ">
            <div className="team-container flex flex-col items-center text-center">
              <Image src={timi7} alt='picture' className="relative" />
              <div className="text w-full p-7  bg-slate-600  text-white ">
                <h2 className="text-2xl font-bold">Tiffany Samantha</h2>
                <p>Yoga Coach</p>
              </div>
              <div className="team-icons text-black">
                <h2>Follow the coach on</h2>
                <div className="icons">
                  <div className="flex flex-initial mt-3">
                    <span>
                      <svg fill="white" width="25px" height="25px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin" className="jam jam-facebook icon">
                        <path
                          d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' />
                      </svg>
                    </span>
                    <span>
                      <svg className='ms-2 icon' fill="white" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1">
                        <path
                          d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                      </svg>
                    </span>
                    <span>
                      <svg fill="white" width="25px" height="25px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z" /><ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-container flex flex-col items-center text-center">
              <Image src={timi6} alt='picture' className="relative" />
              <div className="text p-7 bg-slate-600 w-full text-white">
                <h2 className="text-2xl font-bold">Anderson Lee</h2>
                <p>Body Builder Coach</p>
              </div>
              <div className="team-icons text-black">
                <h2>Follow the coach on</h2>
                <div className="icons">
                  <div className="flex flex-initial mt-3">
                    <span>
                      <svg fill="white" width="25px" height="25px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin" className="jam jam-facebook icon">
                        <path
                          d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' />
                      </svg>
                    </span>
                    <span>
                      <svg className='ms-2 icon' fill="white" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1">
                        <path
                          d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                      </svg>
                    </span>
                    <span>
                      <svg fill="white" width="25px" height="25px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z" /><ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="team-container flex flex-col items-center text-center">
              <Image src={timi8} alt='picture' className="relative" />
              <div className="text p-7  bg-slate-600 w-full text-white">
                <h2 className="text-2xl font-bold">Denilson Markson</h2>
                <p>Fitness Coach</p>
              </div>
              <div className="team-icons text-black">
                <h2>Follow the coach on</h2>
                <div className="icons">
                  <div className="flex flex-initial mt-3">
                    <span>
                      <svg fill="white" width="25px" height="25px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin" className="jam jam-facebook icon">
                        <path
                          d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' />
                      </svg>
                    </span>
                    <span>
                      <svg className='ms-2 icon' fill="white" width="25px" height="25px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1">
                        <path
                          d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                      </svg>
                    </span>
                    <span>
                      <svg fill="white" width="25px" height="25px" viewBox="0 0 24 24" version="1.2" baseProfile="tiny" xmlns="http://www.w3.org/2000/svg"><path d="M8 19h-3v-10h3v10zm11 0h-3v-5.342c0-1.392-.496-2.085-1.479-2.085-.779 0-1.273.388-1.521 1.165v6.262h-3s.04-9 0-10h2.368l.183 2h.062c.615-1 1.598-1.678 2.946-1.678 1.025 0 1.854.285 2.487 1.001.637.717.954 1.679.954 3.03v5.647z" /><ellipse cx="6.5" cy="6.5" rx="1.55" ry="1.5" /></svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default program