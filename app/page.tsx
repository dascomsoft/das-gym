import Link from "next/link";
import Image from "next/image";
import './page.css'
import about from '../images/about.png'
import run from '../images/run.png'
import fitness from '../images/fitness.jpg'
import boxing from '../images/boxing.jpg'
import body from '../images/body.jpg'
import running from '../images/running.jpg'
import crossfit from '../images/crossfit.jpg'
import yoga from '../images/yoga.jpg'
import work from '../images/work.png'
import aboutimage from '../images/about-1.png'
import grafiti from '../images/grafiti.svg'
import backgrafiti from '../images/bg-grafiti.png'
import timi6 from '../images/timi6.png'
import timi7 from '../images/timi7.png'
import timi8 from '../images/timi8.png'
import client1 from '../images/client1.jpg'
import client2 from '../images/client2.jpg'
import client3 from '../images/client3.jpg'
import client4 from '../images/client4.jpg'
import gall1 from '../images/gall1.png'
import gall2 from '../images/gall2.png'
import gall3 from '../images/gall3.png'
import gall4 from '../images/gall4.png'
import gall5 from '../images/gall5.png'
import gall12 from '../images/gall12.png'
import gall13 from '../images/gall13.png'
import gall14 from '../images/gall14.png'

export default function Home() {
  return (
    <div className="main text-white">
      <div className="home-header flex flex-col h-screen items-center justify-center">
        <div className="container mx-auto px-4">
          <div className="home-detail flex  flex-col items-end text-white">
            <div className="flex">
              <div>
                <h2 className="title-section font-extrabold mb-7 ps-7 py-4">FIND YOUR ENERGY</h2>
                <h1 className="text-5xl font-bold mb-2">MAKE YOUR BODY </h1>
                <h2 className="text-5xl mt-3 text-red-500">FIT & PERFECT</h2>
                <p className="mt-4">Gymhen an unknown printer took a galley of type and <br />
                  It has survived unknown printercenturies.</p>
                <br />
                <Link href="/program" className="block w-auto max-w-[250px] text-black font-bold rounded-full bg-white transition duration-500 ease-in-out  hover:bg-red-600 hover:text-white text-center py-3 px-4 mt-7">JOIN WITH US</Link>

              </div>
              <div>
              </div>
              <div className="rotate-section rotate-90  text-white">
                <div className="flex-section flex items-center">
                  <h2 className="font-extrabold text-xl">SHARE</h2>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="red" width="50px" height="100px" viewBox="0 0 24 24"><path d="M23 13H2v-2h21v2z" /></svg>
                  <div className="flex flex-initial">
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

      <div className="home-section">
        <div className="home-container">
          <div className="container mx-auto px-4">
            <div className="home-content text-black flex flex-col">
              <div className="home-cards grid md:grid-cols-2 lg:grid-cols-3 gap-7 relative top-[-170px]">
                <div className="card-description flex flex-col items-center justify-center text-center bg-white shadow-lg text-black p-10 rounded-tl-[60px] rounded-br-[60px]">
                  <svg fill="red" width="70px" height="70px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><g><path d="M9.72,1.22V2.67A5.6,5.6,0,0,1,13.54,7.3H12V8.7h1.55A5.6,5.6,0,0,1,8.7,13.55V12H7.3v1.55A5.6,5.6,0,0,1,2.45,8.7H4V7.3H2.45A5.6,5.6,0,0,1,7.32,2.45V8h1.4V0H1V1.4H5.68a7,7,0,1,0,4-.18Z" /></g>
                  </svg>
                  <div className="card-detail">
                    <h1 className="text-[30px] font-bold py-4">PROGRESSION</h1>
                    <p>Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time.</p>
                  </div>
                </div>
                <div className="card-description flex flex-col items-center justify-center text-center  bg-white shadow-lg text-black p-10 rounded-tl-[60px] rounded-br-[60px]">
                  <svg fill="red" width="70px" height="70px" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg"><path d="M957.442 547.84h56.32c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48h-56.32c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm-630.79 0h389.13c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48h-389.13c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48zm-295.932 0h56.32c11.311 0 20.48-9.169 20.48-20.48s-9.169-20.48-20.48-20.48H30.72c-11.311 0-20.48 9.169-20.48 20.48s9.169 20.48 20.48 20.48z" /><path d="M788.48 788.48c-39.471 0-71.68-32.209-71.68-71.68V337.92c0-39.471 32.209-71.68 71.68-71.68s71.68 32.209 71.68 71.68V716.8c0 39.471-32.209 71.68-71.68 71.68zm0-40.96c16.849 0 30.72-13.871 30.72-30.72V337.92c0-16.849-13.871-30.72-30.72-30.72s-30.72 13.871-30.72 30.72V716.8c0 16.849 13.871 30.72 30.72 30.72z" /><path d="M890.88 650.24c-39.471 0-71.68-32.209-71.68-71.68v-102.4c0-39.471 32.209-71.68 71.68-71.68s71.68 32.209 71.68 71.68v102.4c0 39.471-32.209 71.68-71.68 71.68zm0-40.96c16.849 0 30.72-13.871 30.72-30.72v-102.4c0-16.849-13.871-30.72-30.72-30.72s-30.72 13.871-30.72 30.72v102.4c0 16.849 13.871 30.72 30.72 30.72zM256 747.52c16.849 0 30.72-13.871 30.72-30.72V337.92c0-16.849-13.871-30.72-30.72-30.72s-30.72 13.871-30.72 30.72V716.8c0 16.849 13.871 30.72 30.72 30.72zm0 40.96c-39.471 0-71.68-32.209-71.68-71.68V337.92c0-39.471 32.209-71.68 71.68-71.68s71.68 32.209 71.68 71.68V716.8c0 39.471-32.209 71.68-71.68 71.68z" /><path d="M153.6 609.28c16.849 0 30.72-13.871 30.72-30.72v-102.4c0-16.849-13.871-30.72-30.72-30.72s-30.72 13.871-30.72 30.72v102.4c0 16.849 13.871 30.72 30.72 30.72zm0 40.96c-39.471 0-71.68-32.209-71.68-71.68v-102.4c0-39.471 32.209-71.68 71.68-71.68s71.68 32.209 71.68 71.68v102.4c0 39.471-32.209 71.68-71.68 71.68z" /></svg>
                  <div className="card-detail">
                    <h1 className="text-[30px] font-bold py-4">WORKOUT</h1>
                    <p>With a variety of workouts to choose from, you will have everything you need to get into the best shape of your life.</p>
                  </div>
                </div>
                <div className="card-description flex flex-col items-center justify-center text-center  bg-white shadow-lg text-black p-10 rounded-tl-[60px] rounded-br-[60px]">
                  <svg width="70px" height="70px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <g fill="none" fill-rule="evenodd">
                      <path fill="red" fill-rule="nonzero" d="M10,4.5 C10,4.77614237 9.77614237,5 9.5,5 C9.22385763,5 9,4.77614237 9,4.5 C9,3.67157288 9.67157288,3 10.5,3 L13.5,3 C14.3284271,3 15,3.67157288 15,4.5 C15,4.77614237 14.7761424,5 14.5,5 C14.2238576,5 14,4.77614237 14,4.5 C14,4.22385763 13.7761424,4 13.5,4 L10.5,4 C10.2238576,4 10,4.22385763 10,4.5 Z M6.5,4 C6.77614237,4 7,4.22385763 7,4.5 C7,4.77614237 6.77614237,5 6.5,5 C5.67157288,5 5,5.67157288 5,6.5 L5,18.5 C5,19.3284271 5.67157288,20 6.5,20 L17.5,20 C18.3284271,20 19,19.3284271 19,18.5 L19,6.5 C19,5.67157288 18.3284271,5 17.5,5 C17.2238576,5 17,4.77614237 17,4.5 C17,4.22385763 17.2238576,4 17.5,4 C18.8807119,4 20,5.11928813 20,6.5 L20,18.5 C20,19.8807119 18.8807119,21 17.5,21 L6.5,21 C5.11928813,21 4,19.8807119 4,18.5 L4,6.5 C4,5.11928813 5.11928813,4 6.5,4 Z" />
                      <path fill="red" fill-rule="nonzero" d="M15.1464466,9.14644661 C15.3417088,8.95118446 15.6582912,8.95118446 15.8535534,9.14644661 C16.0488155,9.34170876 16.0488155,9.65829124 15.8535534,9.85355339 L10.8535534,14.8535534 C10.6582912,15.0488155 10.3417088,15.0488155 10.1464466,14.8535534 L8.14644661,12.8535534 C7.95118446,12.6582912 7.95118446,12.3417088 8.14644661,12.1464466 C8.34170876,11.9511845 8.65829124,11.9511845 8.85355339,12.1464466 L10.5,13.7928932 L15.1464466,9.14644661 Z" />
                    </g>
                  </svg>
                  <div className="card-detail">
                    <h1 className="text-[30px] font-bold py-4">NUTRITIONS</h1>
                    <p>Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</p>
                  </div>
                </div>
              </div>
              <div className="home-description ">
                <div className="container mx-auto px-4">
                  <div className="home-wrapper">
                    <div className="flex flex-col home-container">

                      <div className="relative mb-[1rem] w-full">
                        <p className="relative w-[200px] z-10 text-[16px] uppercase font-bold text-white text-center mb-4">Who We Are</p>
                        <Image src={grafiti} alt='picture' className="w-[200px] absolute -top-[6px]" />
                        <h1 className="text-3xl font-bold mt-7">Take Your Health And Body To Next Level</h1>
                        <p>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</p>
                      </div>

                      <div className="home-detail grid  md:grid-cols-2 lg:grid-cols-3  gap-4 my-5">
                        <div className="detail flex flex-col items-center justify-center">
                          <svg width="70px" height="70px" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path fill="red" d="M77.492 18.457l-17.726 3.127L69.09 74.47a1630.67 1630.67 0 0 0-15.8 2.54l-6.503-36.89-17.726 3.124 6.49 36.795a1877.847 1877.847 0 0 0-17.196 3.112l3.292 17.696c5.728-1.066 11.397-2.09 17.028-3.084l7.056 40.02 17.727-3.124-7.04-39.93c5.304-.88 10.57-1.725 15.798-2.54l9.777 55.45 17.727-3.126-9.697-54.99c8.483-1.218 16.866-2.338 25.18-3.38 15.54 46.39 34.697 99.995 66.936 134.448C190.86 250.992 192 268 214.56 310 192 348 176 412 167.21 471l-48 6v15H192c16-48 64-144 64-144s48 96 64 144h72.79v-15l-48-6C336 412 320 348 294 310c26-42 24.175-59.585 35.83-89.377 32.25-34.452 51.42-88.075 66.967-134.478 8.314 1.04 16.697 2.16 25.18 3.38l-9.696 54.99 17.728 3.124 9.777-55.45c5.23.815 10.494 1.66 15.8 2.54l-7.042 39.93 17.727 3.125 7.056-40.02c5.63.993 11.3 2.017 17.028 3.083l3.292-17.696c-5.78-1.075-11.507-2.11-17.195-3.113l6.49-36.796-17.727-3.125-6.504 36.89c-5.303-.88-10.57-1.727-15.8-2.54l9.324-52.886-17.726-3.127-9.406 53.35C365.982 63.31 310.982 59.04 256 59.04c-54.98 0-109.983 4.27-169.102 12.767l-9.406-53.35zM256 76.98c35.53 0 71.07 1.83 107.822 5.463-14.082 34.858-38.454 73.504-63.203 101.967C290.293 199.27 274.35 209 256 209c-18.35 0-34.294-9.73-44.62-24.59-24.748-28.463-49.12-67.11-63.202-101.967 36.75-3.633 72.29-5.463 107.822-5.463zM256 97c-20.835 0-39 20.24-39 47s18.165 47 39 47 39-20.24 39-47-18.165-47-39-47z" /></svg>
                          <h1 className="font-bold text-[20px] py-2">TRAINERS</h1>
                          <p className="text-center">Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</p>

                        </div>
                        <div className="detail  flex flex-col items-center justify-center">
                          <svg fill="red" width="70px" height="70px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"> <title /><g data-name="Layer 2" id="Layer_2"><path d="M19,7H14v4H10V7H5V8H2v8H5v1h5V13h4v4h5V16h3V8H19ZM4,14V10H5v4Zm4,1H7V9H8Zm8-6h1v6H16Zm4,1v4H19V10Z" /></g></svg>
                          <h1 className="font-bold text-[20px] py-2">EQUIPMENTS</h1>
                          <p className="text-center">Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</p>

                        </div>
                        <div className="detail  flex flex-col items-center justify-center">
                          <svg fill="red" width="70px" height="70px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <title />
                            <g data-name="Layer 2" id="Layer_2">
                              <path d="M16,8.08V2H14V8.08a6.93,6.93,0,0,0-2,.61,6.93,6.93,0,0,0-2-.61V2H8V8.08a7,7,0,1,0,4,13.23A7,7,0,1,0,16,8.08ZM14,15a5,5,0,0,1-2,4A4.95,4.95,0,0,1,12,11,5,5,0,0,1,14,15ZM4,15a5,5,0,0,1,6-4.9,7,7,0,0,0,0,9.8A5,5,0,0,1,4,15Zm11,5a5,5,0,0,1-1-.1,7,7,0,0,0,0-9.8A5,5,0,1,1,15,20Z" />
                            </g>

                          </svg>
                          <h1 className="font-bold text-[20px] py-2">GYM MACHINES</h1>
                          <p className="text-center">Our team will work with you to create a personalized meal plan that helps you reach your specific health goals.</p>

                        </div>
                      </div>
                      <br />
                      <Link href="/program" className="block w-auto max-w-[250px]  bg-red-600  transition duration-500 ease-in-out hover:bg-slate-600 text-white text-center py-3 px-4 mt-5  rounded-full">OUR PROGRAM</Link>
                    </div>

                    <div className="flex gap-10 p-14 home-image">
                      <Image src={run} alt='picture' className="" />
                      <Image src={about} alt="picture" className="max-w-[full] overflow-hidden" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-section py-[3rem] bg-black">
        <div className="container mx-auto px-4">
          <div className="about-content grid md:grid-cols-2 gap-10 place-items-center">
            <div className="about-description">
              <div className="relative mb-12 w-full text-center">
                <p className="relative w-[200px] z-10 text-[16px] uppercase font-bold ">About Us</p>
                <Image src={grafiti} alt='picture' className="w-[200px] absolute -top-[6px] " />
              </div>
              <h1 className="text-[40px] leading-tight font-bold text-white">We Will Give You Strength and Health</h1>
              <p className="text-xl py-8 text-white">Gymat an unknown printer took a galley type and scraey aretea bled make a type specimen book. May has survived not onlyive centuries but also the leap electronic.Gymatn unknown printer took a galley of type and scraey aretea.</p>
              <Link href="/program" className="block w-auto max-w-[250px] font-bold rounded-full text-white bg-red-600 transition duration-500 ease-in-out  hover:bg-white hover:text-black text-center py-3 px-4 mt-3">JOIN WITH US</Link>
            </div>
            <Image src={aboutimage} alt='about picture' />
          </div>
        </div>
      </div>
      <div className="class-section py-[6rem]">
        <div className="container mx-auto px-4">
          <div className="py-4">
            <h1 className="class-title ps-6 py-4 font-bold text-white">OUR FEATURED CLASS</h1>
            <h2 className="text-3xl mt-4 font-bold text-white">We Are Offering Best Flexible Classes</h2>
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
      <div className="note-section py-[4rem]">
        <div className="note-content">
          <div className="container mx-auto px-4">
            <h1 className="font-extrabold text-[40px] leading-tight">We Are Always Providing Best <br /> <span className="text-yellow-300">Fitness  Service For You</span></h1>
            <p className="text-xl py-4">Dedicated to Delivering Exceptional Fitness Services Just for You</p>
            <Link href="/program" className="block w-auto max-w-[250px] font-bold  rounded-full bg-slate-700 transition duration-500 ease-in-out  hover:bg-red-600 text-white text-center py-3 px-4 mt-7">JOIN WITH US</Link>
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
                  <Link href="/contact" className='rounded-full w-full block text-center py-1  border-2 border-transparent text-black bg-white hover:bg-green-700 hover:border-transparent hover:text-white'>Book Now</Link>
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
                  <Link href="/contact" className='rounded-full w-full block text-center  py-1 border-transparant bg-white text-black hover:bg-green-700 hover:border-transparent hover:text-white'>Book Now</Link>
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
                  <Link href="/contact" className='rounded-full w-full block text-center py-1 border-transparent bg-white text-black hover:bg-green-700 hover:border-transparent hover:text-white'>Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="testimony-section py-[6rem] text-black bg-stone-50">
        <div className="container mx-auto px-4">
          <div className="relative mb-[5rem] w-full text-center flex flex-col items-center">
            <p className="relative w-[200px] z-10 text-[16px] uppercase font-bold text-white ">TESTIMONIES</p>
            <Image src={grafiti} alt='picture' className="w-[200px] absolute -top-[6px]" />
            <h1 className="text-3xl font-bold mt-7">What Our Clients Says</h1>
            <p>Expert team of coaches helps you succeed in any goal,personalized <br /> guidance and motivation provided!</p>
          </div>
          <div className="testiomony-content">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-10">
              <div className="testimony-review shadow-lg p-8 bg-slate-50 cursor-pointer transition duration-700 ease-in-out hover:scale-105 ">
                <Image src={client1} className='rounded-full' width={70} height={70} alt='pic author' />
                <div className="testimony-text">
                  <h2 className='font-bold text-xl'>Tommy Lee</h2>
                  <div className='flex'>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                </div>
              </div>
              <div className="testimony-review shadow-lg p-8 bg-slate-50 cursor-pointer transition duration-700 ease-in-out hover:scale-105">
                <Image src={client2} className='rounded-full' width={70} height={70} alt='pic author' />
                <div className="testimony-text">
                  <h2 className='font-bold text-xl'>Angelo Parker</h2>
                  <div className='flex'>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                </div>
              </div>
              <div className="testimony-review shadow-lg p-8 bg-slate-50 cursor-pointer transition duration-700 ease-in-out hover:scale-105">
                <Image src={client3} className='rounded-full' width={70} height={70} alt='pic author' />
                <div className="testimony-text">
                  <h2 className='font-bold text-xl'>Anderson Nick</h2>
                  <div className='flex'>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                </div>
              </div>
              <div className="testimony-review shadow-lg p-8 bg-slate-50 cursor-pointer transition duration-700 ease-in-out hover:scale-105">
                <Image src={client4} className='rounded-full' width={70} height={70} alt='pic author' />
                <div className="testimony-text">
                  <h2 className='font-bold text-xl'>Kim Nilson</h2>
                  <div className='flex'>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                    <svg fill="orange" width="20px" height="20px" viewBox="0 -19 550 550" xmlns="http://www.w3.org/2000/svg">
                      <title>star</title>
                      <path d="M181 286L64 188 218 176 275 30 333 176 486 188 369 286 407 436 275 354 144 440 181 286Z" />
                    </svg>
                  </div>
                  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae cupiditate, veniam enim quis rerum laboriosam repudiandae ipsam optio tenetur sint deserunt at itaque est. Reiciendis aspernatur debitis soluta inventore ex?</p>
                </div>
              </div>
            </div>
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
      <div className="blog-section py-[6rem] bg-stone-100 text-black">
        <div className="container mx-auto px-4">
          <div className="relative mb-[5rem] w-full text-center flex flex-col items-center">
            <p className="relative w-[200px] z-10 text-[16px] uppercase font-bold text-white ">LATEST BLOG</p>
            <Image src={grafiti} alt='picture' className="w-[200px] absolute -top-[6px]" />
            <h1 className="text-3xl font-bold mt-7">Our recent News</h1>
            <p>DasGym an unknown printer took a galley of type and scrambled <br />make a type specimen book..</p>
          </div>
          <div className="blog-content grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="shadow-lg border-2 border-white p-8">
              <h3 className="px-2 py-2 text-center rounded-full border-2 border-whiteblock w-auto max-w-[200px] ">22.03.2022</h3>
              <h2 className="text-3xl font-semibold mt-4">Yoga For Everyone in 2023</h2>
              <p className="py-[15px]">This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds.</p>
              <Link href="/blog" className="block w-auto max-w-[200px] font-bold   bg-slate-700 transition duration-500 ease-in-out  hover:bg-red-600 text-white text-center py-3 px-4 mt-7">READ MORE</Link>
            </div>
            <div className="shadow-lg border-2 border-white p-8">
              <h3 className="px-2 py-2 text-center rounded-full border-2 border-whiteblock w-auto max-w-[200px] ">22.03.2022</h3>
              <h2 className="text-3xl font-semibold mt-4">Getting Back Into CrossFit After Vacation</h2>
              <p className="py-[15px]">Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success.</p>
              <Link href="/blog" className="block w-auto max-w-[200px] font-bold   bg-slate-700 transition duration-500 ease-in-out  hover:bg-red-600 text-white text-center py-3 px-4 mt-7">READ MORE</Link>
            </div>
            <div className="shadow-lg border-2 border-white p-8">
              <h3 className="px-2 py-2 text-center rounded-full border-2 border-whiteblock w-auto max-w-[200px] ">22.03.2022</h3>
              <h2 className="text-3xl font-semibold mt-4">Meet Fitness Ambassador Grace</h2>
              <p className="py-[15px]">Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals..</p>
              <Link href="/blog" className="block w-auto max-w-[200px] font-bold   bg-slate-700 transition duration-500 ease-in-out  hover:bg-red-600 text-white text-center py-3 px-4 mt-7">READ MORE</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="notice-section py-[4rem]">
        <div className="container mx-auto px-4">
          <div className="notice-content">
            <h1 className="text-5xl font-bold">Need a Fitness Trainer?</h1>
            <p className="text-2xl font-semibold py-3"><span className="text-red-600">Call</span>: +123-456789</p>
            <Link href="/program" className="block w-auto max-w-[200px] font-bold  text-white  bg-red-700 transition duration-500 ease-in-out  hover:bg-white hover:text-black text-center py-3 px-4 mt-7">READ MORE</Link>

          </div>
        </div>
      </div>
    </div>
  )
}
