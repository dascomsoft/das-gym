
'use client'
import { useState } from "react"
import Link from "next/link"
import './Navbar.css'

const Navbar = () => {

    const [openLinks, setOpenLinks] = useState<boolean>(true)

    const open = "open";
    const close = "close";

    const openLinksUpdate = () => {
        setOpenLinks(!openLinks)
    }

    return (
        <div>
            <div className="main-navbar bg-black text-white fixed top-0 left-0 w-full z-50">
                <div className="container mx-auto px-4 py-6">
                    <header>
                        <Link className="logo" href='/'>
                            <h2 className="font-bold text-3xl">Das<span className="text-yellow-300">Gym</span></h2>
                        </Link>
                        <div className="navleft" id={openLinks ? open : close}>
                            <svg onClick={openLinksUpdate} className ="closeIcon" id="closeBtn" fill="yellow" width="30px" height="30px" viewBox="0 0 1024 1024"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M512.481 421.906L850.682 84.621c25.023-24.964 65.545-24.917 90.51.105s24.917 65.545-.105 90.51L603.03 512.377 940.94 850c25.003 24.984 25.017 65.507.033 90.51s-65.507 25.017-90.51.033L512.397 602.764 174.215 940.03c-25.023 24.964-65.545 24.917-90.51-.105s-24.917-65.545.105-90.51l338.038-337.122L84.14 174.872c-25.003-24.984-25.017-65.507-.033-90.51s65.507-25.017 90.51-.033L512.48 421.906z" />
                            </svg>                              <a className="head-link" href="/">Home</a>
                            <a className="head-link" href="/about">About Us</a>
                            <a className="head-link" href="/program">Program</a>
                            <a className="head-link" href="/pricing">Pricing</a>
                            <a className="head-link" href="/schedule">Schedule</a>
                            <a className="head-link" href="/gallery">Gallery</a>
                            <a className="head-link" href="/blog">blog</a>
                            <a className="px-5 font-extrabold bg-yellow-400 rounded-full text-white" href="/contact">Contact Us</a>
                        </div>
                        <nav className="flex gap-5 navright" >
                            <a className="head-link" href="/">Home</a>
                            <a className="head-link" href="/about">About Us</a>
                            <a className="head-link" href="/program">Program</a>
                            <a className="head-link" href="/pricing">Pricing</a>
                            <a className="head-link" href="/schedule">Schedule</a>
                            <a className="head-link" href="/gallery">Gallery</a>
                            <a className="head-link" href="/blog">blog</a>
                            <a className="px-5 font-extrabold bg-yellow-400 rounded-full text-white" href="/contact">Contact Us</a>
                        </nav>
                        <svg onClick={openLinksUpdate} className="cursor-pointer jam jam-menu" id="openBtn" fill="#fff" width="50px" height="50px" viewBox="-5 -7 24 24"
                            xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMinYMin">
                            <path
                                d='M1 0h5a1 1 0 1 1 0 2H1a1 1 0 1 1 0-2zm7 8h5a1 1 0 0 1 0 2H8a1 1 0 1 1 0-2zM1 4h12a1 1 0 0 1 0 2H1a1 1 0 1 1 0-2z' />
                        </svg>
                    </header>
                </div>
            </div>
        </div>
    )
}

export default Navbar