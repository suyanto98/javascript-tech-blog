"use client"
import { projects } from "../../data/constants";
import Projectcard from '../cards/ProjectCards'

const Projects = () => {
  return (
    <div
      id="projects"
      className="flex flex-col justify-center relative z-1 items-center mb-12"
    >
      {/* wrapper */}
      <div className="max-w-[1100px] relative flex flex-col justify-between items-center w-full gap-[12px]">
        {/* tittle */}
        <div className="text-[42px] font-[600] text-center mt-[20px] text-[#F2F3F4] max-md:mt-[12px] max-md:text-[32px]">
          Projects
        </div>
        {/* desc */}
        <div className="text-[18px] max-w-[600] text-[#b1b2b3]  max-md:text-[16px] max-sm:text-center max-sm:py-[13px]">
          The following are some web app projects that I have worked on
        </div>
        {/* card container */}
        <div className="mt-[25px] flex justify-center items-center flex-wrap gap-[28px]">
          {projects.map((project) => (
            <Projectcard project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
