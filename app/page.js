import Navbar from "./components/navbar";
import Hero from "./components/heroSection";
import React from 'react'
import Skills from "./components/skills";
import Projects from "./components/projects";
import Contact from "./components/contact";
import Footer from "./components/footer";

const Body = ({children}) => {
  return (
    <div className="bg-[#1C1C27] w-full h-full overflow-x-hidden z-0">
      {children}
    </div>
  )
}

const Wrapper = ({children}) => {
  return (
    <div className="bg-gradient-to-r from-[#34193b] via-[#1c1c27] to-[#19213b] w-full" class="clip-polygon">
      {children}
    </div>
  );
};

export default function Home() {

  return (
    <div>
      <Navbar />
      <Body>
        <Hero />
        <Wrapper>
          <Skills/>
        </Wrapper>
        <Projects/>
        <Wrapper>
          <Contact/>
        </Wrapper>
        <Footer/>
      </Body>
    </div>
  )
}
