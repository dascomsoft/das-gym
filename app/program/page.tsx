
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


function program() {
  return (
    <div className='program-main'>
      <div className="header-section py-[10rem]">
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
    </div>
  )
}

export default program