
import Image from "next/image"
import Link from "next/link"
import timi7 from '../../images/timi7.png'
import './contact.css'

function contact() {
  return (
    <div className='contact-main'>
        <div className="header-section py-[12rem] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Get In<span className=' text-yellow-300'> Touch</span></h1>
          <p className="text-xl mt-7">We are here to support your gymnastics journey—reach out to us with <br /> any questions, and let us connect today!..</p>
          <p className='mt-7 text-3xl font-semibold text-yellow-300'>Contact Us/</p>
        </div>
      </div>
      <div className="py-[6rem] bg-stone-200 text-black">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-10">
            <div className="">
              <h1 className="text-5xl font-semibold mb-6">We are here for help you! To Shape Your Body.</h1>
              <p className="py-[2rem]">At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.</p>
              <div className="grid md:grid-cols-2 gap-10 mt-7">
                <div className="shadow-lg p-4">
                  <h2 className="text-xl font-semibold">New York City, USA</h2>
                  <p>85 Briston Mint Street, London, E1 8LG, USA</p>
                </div>
                <div className="shadow-lg p-4">
                  <h2 className="text-xl font-semibold">Opening Hours</h2>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                  <p>Mon to Fri: 7:30 am — 1:00 am</p>
                </div>
                <div className="shadow-lg p-4">
                  <h2 className="text-xl font-semibold">Information</h2>
                  <p>+800-123-4567</p>
                  <p>  gymat@gymail.com</p>
                </div>
                <div className="shadow-lg p-4">
                  <h2 className="text-xl font-semibold">Follow Us On</h2>
                  <div className="flex items-center mt-3">
                    <span>
                      <svg fill="black" width="20px" height="20px" viewBox="-7 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin" className="jam jam-facebook icon">
                        <path
                          d='M2.046 3.865v2.748H.032v3.36h2.014v9.986H6.18V9.974h2.775s.26-1.611.386-3.373H6.197V4.303c0-.343.45-.805.896-.805h2.254V0H6.283c-4.34 0-4.237 3.363-4.237 3.865z' />
                      </svg>
                    </span>
                    <span>
                      <svg fill="black" width="20px" height="20px" viewBox="-2 -2 24 24" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="xMinYMin" className="jam jam-instagram ms-3 icon">
                        <path
                          d='M14.017 0h-8.07A5.954 5.954 0 0 0 0 5.948v8.07a5.954 5.954 0 0 0 5.948 5.947h8.07a5.954 5.954 0 0 0 5.947-5.948v-8.07A5.954 5.954 0 0 0 14.017 0zm3.94 14.017a3.94 3.94 0 0 1-3.94 3.94h-8.07a3.94 3.94 0 0 1-3.939-3.94v-8.07a3.94 3.94 0 0 1 3.94-3.939h8.07a3.94 3.94 0 0 1 3.939 3.94v8.07z' />
                        <path
                          d='M9.982 4.819A5.17 5.17 0 0 0 4.82 9.982a5.17 5.17 0 0 0 5.163 5.164 5.17 5.17 0 0 0 5.164-5.164A5.17 5.17 0 0 0 9.982 4.82zm0 8.319a3.155 3.155 0 1 1 0-6.31 3.155 3.155 0 0 1 0 6.31z' />
                        <circle cx='15.156' cy='4.858' r='1.237' />
                      </svg>
                    </span>
                    <span>
                      <svg className='ms-3 icon' fill="black" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"
                        data-name="Layer 1">
                        <path
                          d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
                      </svg>
                    </span>
                    <span>
                      <svg className="ms-3 icon" width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="white">
                        <path fill="black" fill-rule="evenodd"
                          d="M13.478 3.399c.6.161 1.072.634 1.234 1.234C15 5.728 15 8 15 8s0 2.272-.288 3.367a1.754 1.754 0 01-1.234 1.234C12.382 12.89 8 12.89 8 12.89s-4.382 0-5.478-.289a1.754 1.754 0 01-1.234-1.234C1 10.283 1 8 1 8s0-2.272.288-3.367c.162-.6.635-1.073 1.234-1.234C3.618 3.11 8 3.11 8 3.11s4.382 0 5.478.289zm-3.24 4.612l-3.645 2.1V5.9l3.644 2.11z"
                          clip-rule="evenodd" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="">
              <form className="w-full h-full  bg-stone-100 border-2 border-stone-200 p-8  shadow-lg">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <input
                  type="text"
                  id="surname"
                  name="surname"
                  placeholder="Enter your surname "
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                />
                <select
                  id="service"
                  name="service"
                  className="w-full p-4 mb-4 border text-black  rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                >
                  <option value="" selected disabled>
                    Select your service
                  </option>
                  <option value="hair">Boxing</option>
                  <option value="massage">Body Building</option>
                  <option value="mani">Yoga</option>
                  <option value="spa">Crossfit</option>
                </select>
                <textarea
                  name="message"
                  id="message"
                  cols={30} rows={10}
                  placeholder="Your message"
                  className="w-full p-4 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-stone-500"
                ></textarea>
                <input
                  type="button"
                  value="SUBMIT"
                  className="w-full p-4 bg-slate-600 text-white rounded-lg cursor-pointer hover:bg-stone-600"
                  id="submit-btn"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
      </div>

      )
}

      export default contact