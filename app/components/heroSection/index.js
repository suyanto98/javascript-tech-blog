import { Bio } from "../../data/constants";
import Typewriter from "../../components/TypewriterComp";
import Image from "next/image";
import myProfile from "../../../public/myprofile-image.jpg";

const Hero = () => {
  return (
    <div>    
        {/* hero section */}
        <div
          id="about"
          className="bg-[#191924] flex justify-center relative py-[80px] px-[30px] "
        >
          {/* inner container */}
          <div className="flex justify-between items-center w-full max-w-[1100px] max-lg:flex-col">
            {/* hero left container */}
            <div className="w-full order-1 max-sm:order-2 max-sm:mb-8 max-sm:flex max-sm:items-center max-sm:flex-col">
              {/* title */}
              <div className="text-[50px] font-bold text-[#F2F3F4] leading-[68px] max-lg:text-center max-sm:font-[40px] max-sm:leading-[48px] max-mb-[8px]">
                Hello, I am <br />
                {Bio.name}
              </div>
              {/* text loop */}
              <div className="text-[32px] font-[600px] text-[#F2F3F4] leading-[68px] gap-[12px] flex max-lg:text-center max-sm:text-[22px] max-sm:leading-[48px] max-sm:mb-16px">
                I am a
                <span className="text-[#854CE6] cursor-pointer">
                  <Typewriter />
                </span>
              </div>
              {/* sub title */}
              <div className="text-[20px] text-[#F2F3F4] opacity-60 leading-[32px] mb-[42px] max-lg:text-center max-sm:text-[16px] max-sm:leading-[32px]">
                {Bio.description}
              </div>
            </div>
            {/* HeroRightContainer */}
            <div className="w-full order-2 flex justify-end gap-[12px] max-lg:order-1 max-lg:justify-center max-lg:items-center max-lg:mb-[80px] max-sm:order-1 max-sm:mb-[30px]">
              <Image
                className="relative w-full h-full max-w-[400px] max-h-[400px] rounded-[50%] border-2 border-[#854CE6] max-md:max-w-[400px] max-md:max-h-[400px] max-sm:max-w-[280px] max-sm:max-h-[280px]"
                src={myProfile}
                alt="Picture of the author"
              />
            </div>
          </div>
        </div>
      </div>
  );
};

export default Hero;
