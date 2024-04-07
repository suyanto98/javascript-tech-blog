import { skills } from "../../data/constants";

const Skills = () => {
  return (
    <>
      {/* container */}
      <div id="skills" className="flex flex-col justify-center relative z-1 items-center">
            {/* wrapper */}
            <div className="max-w-[1100px] relative flex flex-col justify-between items-center w-full gap-[12px]">
              {/* title */}
              <div className="text-[42px] font-[600] text-center mt-[20px] text-[#F2F3F4] max-md:mt-[12px] max-md:text-[32px]">
                Skills
              </div>
              {/* desc */}
              <div className="text-[18px] max-w-[600px] text-center text-[#b1b2b3] max-md:text-[16px] max-md:px-2">
                The following are some skills that I have mastered in building a modern website
              </div>
              {/* SkillsContainer */}
              <div className="w-full flex flex-wrap justify-center mt-[30px] gap-[30px] mb-[50px]">
                {skills.map((item) => (
                  // skills
                  <div className="w-full max-w-[500px] bg-[#171721] border border-solid border-purple-600 rounded-[16px] py-[18px] px-[36px] max-md:max-w-[400px] max-md:py-[10px] max-md:px-[36px] max-sm:max-w-[330px] max-sm:py-[10px] max-sm:px-[36px]" style={{ boxShadow: '0px 4px 24px rgba(23, 92, 230, 0.15)' }}>
                    {/* skilltitle */}
                    <div className="text-[28px] font-[600] text-[#b1b2b3] mb-[20px] text-center">
                      {item.title}
                    </div>
                    {/* skilllist */}
                    <div className="flex justify-center flex-wrap gap-[12px] mb-[20px]">
                      {item.skills.map((skill) => (
                        // skill item
                        <div className="flex items-center gap-[8px] justify-center text-[16px] text-[#F2F3F4] opacity-80 rounded-[12px] border border-solid border-[#F2F3F4] opacity-79 py-[12px] px-[16px] font-normal max-md:text-[14px]  max-md:py-[8px] max-md:px-[12px] max-sm:text-[14px] max-sm:py-[6px] max-sm:px-[12px]">
                          <img src={skill.image} className="w-[24px] h-[24px]"/>
                          {skill.name}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
    </>
  );
};

export default Skills;
