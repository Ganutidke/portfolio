import React, { useEffect, useState } from 'react'
import {AiOutlineArrowRight} from 'react-icons/ai'
import { Link } from 'react-scroll';

const useIntervalArray=()=>{
    const intervals=["Ganesh Tidke","web developer","Programmer"]
    return intervals;
}

const Home = () => {
    const [name,setName]=useState('Ganesh Tidke');
    const intervals = useIntervalArray();
    useEffect(()=>{
        const intervalId=setInterval(()=>{

            const randomIndex = Math.floor(Math.random() * intervals.length);
            setName(intervals[randomIndex]);
            
        },3000);

        return ()=>{
            clearInterval(intervalId);
        };
    },[intervals]);

  return (
    <div name='home' className='flex w-full  items-center text-white bg-gradient-to-b from-black to-gray-800 md:h-screen h-full '>
        <div className='md:flex mt-40  md:flex-row  flex-col-reverse w-11/12 mx-auto font-poppins flex gap-10'>
            <div className='flex md:w-3/4 flex-col gap-4'>
                <h1 className='text-gray-300 font-bold text-3xl md:text-4xl'>I am <span className={`text-5xl capitalize md:text-6xl transition-opacity duration-500 ${name ? 'opacity-100' : 'opacity-0'} text-purple-500`} >{name}</span></h1>
                <p className='text-gray-300 '>
                {/* Welcome to my web developer portfolio! I'm an experienced and passionate web developer proficient in front-end and back-end technologies. My portfolio showcases a diverse range of projects, highlighting my skills in creating modern, user-friendly websites and web applications. I specialize in HTML, CSS, JavaScript, React, Node.js, and database management. I prioritize accessibility, performance, and collaborative teamwork. Explore my projects and feel free to contact me for any inquiries or opportunities. Let's create innovative online experiences together! */}
                {/* I am Ganesh Tidke, a young and ambitious individual, currently immersed in the enriching college life of Dr. D Y Patil Science and Computer Science College in Pune. Embracing my 20s, I'm driven by an insatiable thirst for knowledge and creativity. */}
                Hey there, I'm Ganesh Tidke, and I'm on a thrilling adventure of knowledge and creativity at Dr. D Y Patil Science and Computer Science College in Pune. Age 20, I'm fueled by curiosity and passion, eager to conquer the world of web development!
                </p>
                
                <p className='text-gray-300'>
                But wait, there's more! I'm not just a college student; I'm a freelancer, a web developer, and a programmer! Cue the applause My journey in the digital realm is a rollercoaster ride of exciting challenges and jaw-dropping creations.
                </p>

                <div className='flex mt-7 gap-8'>
                    <button className='bg-gradient-to-r from-cyan-300 to-purple-500 py-3 px-2 text-lg font-poppins rounded-lg hover:scale-105 duration-200' download>
                        <a href="/cv.pdf" download={true}>Download CV </a>
                    </button>
                    <Link to='portfolio' smooth duration={500} className='group bg-gradient-to-r flex items-center justify-center from-cyan-300 to-purple-500 py-3 w-32 px-2 text-lg font-poppins rounded-lg hover:scale-105 duration-200' name='portfolio'>
                        Portfolio
                        <span className='pl-1 group-hover:rotate-90 duration-300'>
                            <AiOutlineArrowRight/>
                        </span>
                    </Link>
                </div>
            </div>
            <div className='flex justify-center md:w-1/4'>
                <img src='./heroImage.jpg' alt=""  className='h-80 md:h-[450px] rounded-xl'/>
            </div>
        </div>
    </div>
  )
}

export default Home