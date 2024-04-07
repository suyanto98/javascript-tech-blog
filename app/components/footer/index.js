import FacebookIcon from '@mui/icons-material/Facebook'
import InstagramIcon from '@mui/icons-material/Instagram'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import { Bio } from '../../data/constants'
import Link from 'next/link'

const Footer = () => {
  return (
    <>
        {/* FooterContainer */}
        <div className="w-full py-[32px] flex justify-center bg-gradient-to-br from-[#1d1d31] to-[#1b2032]">
          {/* FooterWrapper */}
          <footer className="w-full max-w-[1200px] flex flex-col gap-[14px] items-center p-[1rem] text-[#F2F3F4]">
            {/* Logo */}
            <h1 className="font-[600] text-[20px] text-[#854CE6]">
              Suyanto
            </h1>
            {/* Nav */}
            <nav className="w-full max-w-[800px] mt-[0.5rem] flex flex-row gap-[2rem] justify-center max-md:flex-wrap max-md:gap-[1rem] max-md:text-center max-md:font-[12px]">
              {/* NavLink */}
              <Link href="#about" className="text-[#F2F3F4] no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-[#854CE6] max-md:text-[1rem]">About</Link>
              <Link href="#skills" className="text-[#F2F3F4] no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-[#854CE6] max-md:text-[1rem]">Skills</Link>
              <Link href="#projects" className="text-[#F2F3F4] no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-[#854CE6] max-md:text-[1rem]">Projects</Link>
              <Link href="#contact" className="text-[#F2F3F4] no-underline text-[1.2rem] transition-colors duration-200 ease-in-out hover:text-[#854CE6] max-md:text-[1rem]">Contact</Link>
            </nav>
            {/* SocialMediaIcons */}
            <div className="flex mt-[1rem]">
              {/* SocialMediaIcon */}
              <Link href={Bio.facebook} className="inline-block mx-[1rem] text-[1.5rem] text-[#F2F3F4] transition-colors duration-200 ease-in-out hover:text-[#854CE6]"><FacebookIcon /></Link>
              <Link href={Bio.instagram} className="inline-block mx-[1rem] text-[1.5rem] text-[#F2F3F4] transition-colors duration-200 ease-in-out hover:text-[#854CE6]"><InstagramIcon /></Link>
              <Link href={Bio.linkedin} className="inline-block mx-[1rem] text-[1.5rem] text-[#F2F3F4] transition-colors duration-200 ease-in-out hover:text-[#854CE6]"><LinkedInIcon /></Link>
            </div>
            {/* Copyright */}
            <p className="mt-[1rem] text-[0.9rem] text-soft2 text-center">
              &copy; 2023 Suyanto. All rights reserved.
            </p>
          </footer>
        </div>
    </>
  )
}

export default Footer
