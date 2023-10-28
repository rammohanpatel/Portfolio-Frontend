import React from 'react';
import { SocialIcon } from 'react-social-icons'

const About = (props) => {
  return (
    <>
      <header className=" text-white body-font shadow-lg bg-gradient-to-r from-rose-100 to-teal-100  " id='about'>
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <img src="/modernPortfolio.png" alt="logo" className="w-10 h-10" />
            <span className="ml-3 text-xl ">Portfolio</span>
          </a>
          <nav className="md:ml-auto flex flex-wrap items-center  justify-center text-xl font-bold">
            <SocialIcon url="https://www.linkedin.com/in/ram-mohan-patel-1b5597220/" className="mr-4 hover:text-indigo-500 transition transform hover:scale-110" target="_blank" fgColor="#fff" style={{ height: 45, width: 45 }} />
            <SocialIcon url="https://github.com/rammohanpatel" className="mr-4 hover:text-indigo-500 transition transform hover:scale-110" target="_blank" fgColor="#fff" style={{ height: 45, width: 45 }} />
            <SocialIcon network="x" url="https://twitter.com/crazyrammohan" className="mr-4 hover:text-indigo-500 transition transform hover:scale-110" target="_blank" fgColor="#fff" style={{ height: 45, width: 45 }} />
            <SocialIcon url="https://www.facebook.com/profile.php?id=100065251880041" className="mr-4 hover:text-indigo-500 transition transform hover:scale-110" target="_blank" fgColor="#fff" style={{ height: 45, width: 45 }} />
          </nav>
        </div>
      </header>
      <section className="text-white body-font h-[100vh] flex justify-around bg-gradient-to-r from-gray-700 via-gray-900 to-black  ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16  flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center mt-[-50px]">
            <h1 className=" font-semibold text-white mb-10 text-5xl mt-6">HEY, I'M RAM MOHAN</h1>
            <p className="text-lg mb-6 leading-relaxed ">
              A Full Stack Web Developer with a deep-rooted love for technology.
            </p>
            <div className="flex justify-center">
              <a href="/21AG30029.pdf" download>
                <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
                  Download CV
                </button>       
              </a>
              <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
                <a href={props.projects} className="mr-5  cursor-pointer hover:text-indigo-600">Projects</a>
              </button>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center rounded" alt="hero" src="/ramMohan.png" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
