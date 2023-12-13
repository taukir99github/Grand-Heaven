import React from 'react'
import footerimg from "../../Images/NavLogo.png"
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa6";
import { IoLogoTwitter } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa6";

const Footer:React.FC = () => {
  return (
    <div className=' pt-8 cursor-pointer'>
     <div className='flex justify-between px-8 cursor-pointer'>
        <div className='flex flex-col gap-2'>
            <img src={footerimg} alt="" />
            <span className='font-light text-[16px]'>Crafting Seamless Real Estate <br />Experiences</span>
        </div>
        <div className='flex flex-col gap-2 cursor-pointer'>
            <h1 className='font-semibold text-[25px]'>Company</h1>
            <p className='font-light text-[16px]'>About Us</p>
            <p className='font-light text-[16px]'>Terms of service</p>
            <p className='font-light text-[16px]'>Blog</p>
        </div>
        <div className='flex flex-col gap-2 cursor-pointer'>
            <h1 className='font-semibold text-[25px]'>Resources</h1>
            <p className='font-light text-[16px]'>FAQ</p>
            <p className='font-light text-[16px]'>Career</p>
            <p className='font-light text-[16px]'>Videos</p>
            <p className='font-light text-[16px]'>Our Homes</p>
        </div>
        <div className='flex flex-col gap-2 cursor-pointer'>
            <h1 className='font-semibold text-[25px]'>Contact Us</h1>
            <p className='font-light text-[16px]'>www.grandheavens.com</p>
            <p className='font-light text-[16px]'>Twitter Support</p>
        </div>
     </div>
     <div className='flex gap-7 text-xl pl-7 '>
        <div className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 ...'><FaInstagram/></div>
        <div  className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 ...'><FaFacebookF/></div>
        <div  className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 ...'><IoLogoTwitter/></div>
        <div  className='transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-110 duration-300 ...'><FaLinkedinIn/></div>
     </div>
     <div className='mt-10'><hr /></div>
     <div>
        <div className='flex justify-between px-16 text-[16px] font-light'>
            <p>© 2023 Hello, PropertyPulse</p>
            <div className='flex gap-6 '>
            <p>Privacy</p>
            <p>Terms of Agreement</p>
            <p>Licenses</p></div>
        </div>
     </div>
    </div>
  )
}

export default Footer
