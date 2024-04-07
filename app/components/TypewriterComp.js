'use client'
import Typewriter from 'typewriter-effect'
import { Bio } from "../data/constants";


const TypewriterComp = () => {
  return (
    <Typewriter
      options={{
        strings: Bio.roles,
        autoStart: true,
        loop: true,
      }}
    />
  );
};

export default TypewriterComp;
