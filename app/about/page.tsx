
import Link from "next/link"
import Image from "next/image"
import './about.css'
import aboutimage from '../../images/about-1.png'
import grafiti from '../../images/grafiti.svg'
import gallery16 from '../../images/gallery16.jpg'
import fitness from '../../images/fitness.jpg'
import boxing from '../../images/boxing.jpg'
import body from '../../images/body.jpg'
import running from '../../images/running.jpg'
import crossfit from '../../images/crossfit.jpg'
import yoga from '../../images/yoga.jpg'



function about() {
  return (
    <div className='about-main'>
      <div className="header-section py-[15rem] text-white">
        <div className="container mx-auto px-4">
          <div className="header-content">
            <h1 className="text-5xl font-bold">Our <span className="text-yellow-300">Story</span> in Gymnastic</h1>
            <p className="text-3xl mt-4 font-semibold text-yellow-300">About Us/</p>
          </div>
        </div>
      </div>
      <div className="about-section py-[3rem] bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="about-content grid md:grid-cols-2 gap-10 place-items-center">
            <div className="about-description">
              <div className="relative mb-12 w-full text-center">
                <p className="relative w-[200px] z-10 text-[16px] uppercase font-bold text-white">About Us</p>
                <Image src={grafiti} alt='picture' className="w-[200px] absolute -top-[6px] " />
              </div>
              <h1 className="text-[40px] leading-tight font-bold">We Will Give You Strength and Health</h1>
              <p className="text-xl py-8">Gymat an unknown printer took a galley type and scraey aretea bled make a type specimen book. May has survived not onlyive centuries but also the leap electronic.Gymatn unknown printer took a galley of type and scraey aretea.</p>
              <div className="detail">
                <h1 className="text-4xl font-semibold  mb-2">Our Vision</h1>
                <hr />
                <p className="py-3">Gyms play a vital role in promoting an active and healthy lifestyle. They provide a supportive and motivating environment for individuals to engage in regular physical activity.</p>
              </div>
              <Link href="/contact" className="block w-auto max-w-[250px] font-bold rounded-full text-white bg-red-600 transition duration-500 ease-in-out  hover:bg-slate-500 hover:text-white text-center py-3 px-4 mt-3">JOIN WITH US</Link>
            </div>
            <Image src={aboutimage} alt='about picture' />
          </div>
        </div>
      </div>
      <div className="class-section py-[6rem]">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <h1 className="class-title ps-6 py-4 font-bold">OUR FEATURED CLASS</h1>
            <h2 className="text-3xl mt-4 font-bold">We Are Offering Best Flexible Classes</h2>
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
          </div>
        </div>
      </div>
      <div className="note-section py-[4rem]">
        <div className="note-content">
          <div className="container mx-auto px-4">
            <h2 className="block w-auto max-w-[250px] font-bold bg-white text-red-500 rounded-full border-2 border-white text-center py-3 mb-5">Make an Appoitment</h2>
            <h1 className="font-extrabold text-[40px] leading-tight">Get a Free Consultancy Right Now Here!<br /> <span className="text-red-600">Fitness  Service For You</span></h1>
            <p className="text-xl py-4">Dedicated to Delivering Exceptional Fitness Services Just for You</p>
            <Link href="/program" className="block w-auto max-w-[250px] font-bold  rounded-full bg-slate-700 transition duration-500 ease-in-out  hover:bg-red-600 text-white text-center py-3 px-4 mt-7">Learn More</Link>
          </div>
        </div>
      </div>
    </div>

  )
}

export default about