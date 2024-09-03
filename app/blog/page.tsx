import Image from "next/image"
import './blog.css'
import Link from "next/link"
import blog1 from '../../images/blog1.png'
import blog2 from '../../images/blog2.png'
import blog3 from '../../images/blog3.png'
import blog4 from '../../images/blog4.jpg'
import gall10 from '../../images/gallery10.jpg'
import gall1 from '../../images/gall1.png'
import gall2 from '../../images/gall2.png'
import gall3 from '../../images/gall3.png'
import gall4 from '../../images/gall4.png'
import gall5 from '../../images/gall5.png'
import gall12 from '../../images/gall12.png'
import gall13 from '../../images/gall13.png'
import gall14 from '../../images/gall14.png'



function blog() {
  return (
    <div className='blog-main'>
      <div className="header-section py-[10rem] text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold">Your Ultimate Guide to <span className="text-yellow-300">Fitness </span> <br />  and Well-being</h1>
          <p className="text-xl mt-7">Explore expert advice, workout routines, and nutrition tips to <br /> empower your health and transform your lifestyle...</p>
          <p className='mt-7 text-3xl font-semibold text-yellow-300'>Our Blog/</p>
        </div>
      </div>
      <div className="blog-section py-[6rem] bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="blog-content grid grid-cols-1 gap-5 ">
            <div className="blog-1 grid md:grid-cols-2 gap-20 ">
              <div className="blog-detail">
                <Image src={blog1} alt='blog picture' className="w-full" />
                <div className="blog-text bg-stone-100 p-10">
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center ms-3">
                      <span>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="blue">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12l-.5-.5zM14 14H2V5h12v9zm0-10H2V3h12v1zM4 8H3v1h1V8zm-1 2h1v1H3v-1zm1 2H3v1h1v-1zm2-4h1v1H6V8zm1 2H6v1h1v-1zm-1 2h1v1H6v-1zm1-6H6v1h1V6zm2 2h1v1H9V8zm1 2H9v1h1v-1zm-1 2h1v1H9v-1zm1-6H9v1h1V6zm2 2h1v1h-1V8zm1 2h-1v1h1v-1zm-1-4h1v1h-1V6z" />
                        </svg>
                      </span>
                      <span className="ms-2 mt-1">01 Jan 2045</span>
                    </div>
                    <div className="flex items-center ms-3">
                      <span>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="blue"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.29l1-1v1.42l-1.15 1.14L3 12.5V10H1.5L1 9.5v-8l.5-.5h12l.5.5V6h-1V2H2v7h1.5l.5.5v1.79zM10.29 13l1.86 1.85.85-.35V13h1.5l.5-.5v-5l-.5-.5h-8l-.5.5v5l.5.5h3.79zm.21-1H7V8h7v4h-1.5l-.5.5v.79l-1.15-1.14-.35-.15z" /></svg>
                      </span>
                      <span className="ms-2 mt-1">3 comments</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-semibold py-9">Most Traditional Gym Fitness Blog 2023</h2>
                  <p>Passion is the driving force behind our gym team members. They have a genuine love for fitness and a deep-rooted desire to inspire and motivate others. Their contagious enthusiasm creates a positive and energizing atmosphere within our gym</p>
                </div>
              </div>
              <div className="blog-post">
                <h1 className="text-xl font-semibold mb-6">Recents Post</h1>
                <div className="flex flex-col gap-4  bg-stone-100 p-4 max-w-[300px]">
                  <div className="flex gap-4">
                    <Image src={gall5} alt="picture" className="rounded-xl" width={80} height={80} />
                    <div className="text hover:text-red-600 cursor-pointer">
                      <h3>Essential Strategies</h3>
                      <h3>for Maximizing Your</h3>
                      <p className="text-red-500">25 JUN ,2045</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Image src={gall14} alt="picture" className="rounded-xl" width={80} height={80} />
                    <div className="hover:text-red-600 cursor-pointer text">
                      <h3>Functional training into </h3>
                      <h3>Your routine</h3>
                      <p className="text-red-500">25 JUN ,2045</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <Image src={gall10} alt="picture" className="rounded-xl" width={80} height={80} />
                    <div className="hover:text-red-600 cursor-pointer text">
                      <h3>Nutrition Tips Advice for </h3>
                      <h3>Gym Goers</h3>
                      <p className="text-red-500">25 JUN ,2045</p>
                    </div>
                  </div>
                </div>
                <div className="category mt-10  bg-stone-100 p-4 max-w-[300px]">
                  <h1 className="text-xl font-semibold mb-3">Categories</h1>
                  <div className="flex flex-col gap-10">
                    <p className="hover:text-red-600 cursor-pointer">Body Building</p>
                    <p className="hover:text-red-600 cursor-pointer">Boxing Training</p>
                    <p className="hover:text-red-600 cursor-pointer">Yoga Training</p>
                    <p className="hover:text-red-600 cursor-pointer">Crossfit Training</p>
                    <p className="hover:text-red-600 cursor-pointer">Crossfit Training</p>
                    <p className="hover:text-red-600 cursor-pointer">Crossfit Training</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="blog-2 grid md:grid-cols-2 gap-20">
              <div className="blog-detail">
                <Image src={blog2} alt='blog picture' />
                <div className="blog-text bg-stone-100 p-10">
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center ms-3">
                      <span>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="blue">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12l-.5-.5zM14 14H2V5h12v9zm0-10H2V3h12v1zM4 8H3v1h1V8zm-1 2h1v1H3v-1zm1 2H3v1h1v-1zm2-4h1v1H6V8zm1 2H6v1h1v-1zm-1 2h1v1H6v-1zm1-6H6v1h1V6zm2 2h1v1H9V8zm1 2H9v1h1v-1zm-1 2h1v1H9v-1zm1-6H9v1h1V6zm2 2h1v1h-1V8zm1 2h-1v1h1v-1zm-1-4h1v1h-1V6z" />
                        </svg>
                      </span>
                      <span className="ms-2 mt-1">01 Jan 2045</span>
                    </div>
                    <div className="flex items-center ms-3">
                      <span>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="blue"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.29l1-1v1.42l-1.15 1.14L3 12.5V10H1.5L1 9.5v-8l.5-.5h12l.5.5V6h-1V2H2v7h1.5l.5.5v1.79zM10.29 13l1.86 1.85.85-.35V13h1.5l.5-.5v-5l-.5-.5h-8l-.5.5v5l.5.5h3.79zm.21-1H7V8h7v4h-1.5l-.5.5v.79l-1.15-1.14-.35-.15z" /></svg>
                      </span>
                      <span className="ms-2 mt-1">3 comments</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-semibold py-9">Getting Back Into CrossFit After Vacation.</h2>
                  <p>Passion is the driving force behind our gym team members. They have a genuine love for fitness and a deep-rooted desire to inspire and motivate others. Their contagious enthusiasm creates a positive and energizing atmosphere within our gym</p>
                </div>
              </div>
              <div className="blog-post">
                <div className="bg-stone-100 p-4 max-w-[300px]">
                  <h1 className="text-xl font-semibold mb-6">Popular Tags</h1>
                  <div className="grid md:grid-cols-3 gap-4">
                    <p className="hover:text-red-600 cursor-pointer">#CrossFit</p>
                    <p className="hover:text-red-600 cursor-pointer">#Fitness</p>
                    <p className="hover:text-red-600 cursor-pointer">#Yoga</p>
                    <p className="hover:text-red-600 cursor-pointer">#BodyBuild</p>
                    <p className="hover:text-red-600 cursor-pointer">#Running</p>
                    <p className="hover:text-red-600 cursor-pointer">#Boxing</p>
                    <p className="hover:text-red-600 cursor-pointer">#Meditation</p>
                    <p className="hover:text-red-600 cursor-pointer">#Workout</p>
                    <p className="hover:text-red-600 cursor-pointer">#Gym</p>
                  </div>
                </div>
                <div className="bg-stone-100 p-4 max-w-[300px]">
                <h1 className="text-xl font-semibold mb-6">Project Gallery</h1>
                <div className="grid grid-cols-3 md:grid-cols-3 gap-2 ">
                    <Image src={gall1} alt='picture' width={80} height={80} />
                    <Image src={gall2} alt='picture' width={80} height={80} />
                    <Image src={gall3} alt='picture' width={80} height={80} />
                    <Image src={gall4} alt='picture' width={80} height={80} />
                    <Image src={gall5} alt='picture' width={80} height={80} />
                    <Image src={gall12} alt='picture' width={80} height={80} />
                    <Image src={gall13} alt='picture' width={80} height={80} />
                    <Image src={gall14} alt='picture' width={80} height={80} />
                    <Image src={gall1} alt='picture' width={80} height={80} />
                  </div>
                </div>

                
              </div>
            </div>
            <div className="blog-1 grid md:grid-cols-2 gap-20">
              <div className="blog-detail">
                <Image src={blog3} alt='blog picture' />
                <div className="blog-text bg-stone-100 p-10">
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center ms-3">
                      <span>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="blue">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12l-.5-.5zM14 14H2V5h12v9zm0-10H2V3h12v1zM4 8H3v1h1V8zm-1 2h1v1H3v-1zm1 2H3v1h1v-1zm2-4h1v1H6V8zm1 2H6v1h1v-1zm-1 2h1v1H6v-1zm1-6H6v1h1V6zm2 2h1v1H9V8zm1 2H9v1h1v-1zm-1 2h1v1H9v-1zm1-6H9v1h1V6zm2 2h1v1h-1V8zm1 2h-1v1h1v-1zm-1-4h1v1h-1V6z" />
                        </svg>
                      </span>
                      <span className="ms-2 mt-1">01 Jan 2045</span>
                    </div>
                    <div className="flex items-center ms-3">
                      <span>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="blue"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.29l1-1v1.42l-1.15 1.14L3 12.5V10H1.5L1 9.5v-8l.5-.5h12l.5.5V6h-1V2H2v7h1.5l.5.5v1.79zM10.29 13l1.86 1.85.85-.35V13h1.5l.5-.5v-5l-.5-.5h-8l-.5.5v5l.5.5h3.79zm.21-1H7V8h7v4h-1.5l-.5.5v.79l-1.15-1.14-.35-.15z" /></svg>
                      </span>
                      <span className="ms-2 mt-1">3 comments</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-semibold py-9">How to Get Fit Your Kids Moving Throughout The Summer</h2>
                  <p>Passion is the driving force behind our gym team members. They have a genuine love for fitness and a deep-rooted desire to inspire and motivate others. Their contagious enthusiasm creates a positive and energizing atmosphere within our gym</p>
                </div>
              </div>
              <div className="blog-post">
              </div>
            </div>
            <div className="blog-1 grid md:grid-cols-2 gap-20">
              <div className="blog-detail">
                <Image src={blog4} alt='blog picture' />
                <div className="blog-text bg-stone-100 p-10">
                  <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center ms-3">
                      <span>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="blue">
                          <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M14.5 2H13V1h-1v1H4V1H3v1H1.5l-.5.5v12l.5.5h13l.5-.5v-12l-.5-.5zM14 14H2V5h12v9zm0-10H2V3h12v1zM4 8H3v1h1V8zm-1 2h1v1H3v-1zm1 2H3v1h1v-1zm2-4h1v1H6V8zm1 2H6v1h1v-1zm-1 2h1v1H6v-1zm1-6H6v1h1V6zm2 2h1v1H9V8zm1 2H9v1h1v-1zm-1 2h1v1H9v-1zm1-6H9v1h1V6zm2 2h1v1h-1V8zm1 2h-1v1h1v-1zm-1-4h1v1h-1V6z" />
                        </svg>
                      </span>
                      <span className="ms-2 mt-1">01 Jan 2045</span>
                    </div>
                    <div className="flex items-center ms-3">
                      <span>
                        <svg width="20px" height="20px" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="blue"><path fill-rule="evenodd" clip-rule="evenodd" d="M4 11.29l1-1v1.42l-1.15 1.14L3 12.5V10H1.5L1 9.5v-8l.5-.5h12l.5.5V6h-1V2H2v7h1.5l.5.5v1.79zM10.29 13l1.86 1.85.85-.35V13h1.5l.5-.5v-5l-.5-.5h-8l-.5.5v5l.5.5h3.79zm.21-1H7V8h7v4h-1.5l-.5.5v.79l-1.15-1.14-.35-.15z" /></svg>
                      </span>
                      <span className="ms-2 mt-1">3 comments</span>
                    </div>
                  </div>
                  <h2 className="text-4xl font-semibold py-9">Give your fitness a boost with our new gym challengev</h2>
                  <p>Passion is the driving force behind our gym team members. They have a genuine love for fitness and a deep-rooted desire to inspire and motivate others. Their contagious enthusiasm creates a positive and energizing atmosphere within our gym</p>
                </div>
              </div>
              <div className="blog-post">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default blog