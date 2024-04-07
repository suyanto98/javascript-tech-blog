import projectImg from '../../../public/project-image.png'
import Image from "next/image";

const Projectcard = ({ project }) => {
  return (
    <>
      {/* card  BELUM CELAR */}
      <div className="w-[330px] h-[490px] bg-[#171721] cursor-pointer rounded-[10px] shadow-md overflow-hidden 
      py-[26px] px-[20px] flex flex-col gap-[14px] transition-all duration-500 ease-in-out
      hover:-translate-y-[10px]
      ">
        {/* image project */}
        <Image src={projectImg} className="w-full h-[180px] bg-white rounded-[10px] object-cover shadow-box-image"/>
        {/* TAGS */}
        <div className="w-full flex flex-wrap gap-[8px] mt-[4px] items-center">
          {project.tags.map((tag) => (
            <div className="text-[12px] font-normal text-[#7640da] bg-[#201b31]  py-[2px] px-[8px] rounded-[10px]" key={tag}>{tag}</div>
          ))}
        </div>
        {/* details */}
        <div className="w-full flex flex-col gap-0 px-[2px]">
            {/* title */}
            <div className="text-[20px] font-[600] text-[#b1b2b3] overflow-hidden overflow-ellipsis 
            whitespace-nowrap max-w-full line-clamp-2">
              {project.title}
            </div>
            {/* desc */}
            <div className="font-[400] text-[#b1b2b3] overflow-hidden overflow-ellipsis line-clamp-3 flex flex-col -webkit-box max-w-full mt-[8px]">
              {project.description}
            </div>
        </div>
        {/* members */}
        <div className="flex items-center pl-[10px]">
        {project.member?.map((member) => (
            <Image className="w-[38px] h-[38px] rounded-full ml-[10px] bg-white shadow-md border-3 border-solid border-[#171721]" src={member.img} />
        ))}
        </div>
      </div>
    </>
  );
};


export default Projectcard;



