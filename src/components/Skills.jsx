import React from 'react';
import {BsCode} from "react-icons/bs"
import {PiClockCounterClockwiseBold} from "react-icons/pi"

const Skills = () => {

    const skillsData = [
        { id: 1, name: 'HTML,CSS', percentage:"w-[80%]" , imageSrc: './skillspng/html.png' },
        { id: 2, name: 'Next JS 13', percentage: "w-[70%]", imageSrc: './skillspng/nextjs.png' },
        { id: 3, name: 'Tailwind CSS', percentage: "w-[80%]", imageSrc: './skillspng/tailwind.webp' },
        { id: 4, name: 'JavaScript', percentage: "w-[70%]", imageSrc: './skillspng/javascript.png' },
        { id: 5, name: 'React JS', percentage: "w-[70%]", imageSrc: './skillspng/react.png' },
        { id: 6, name: 'MongoDB', percentage: "w-[65%]", imageSrc: './skillspng/mongodb.png' },
        { id: 7, name: 'Node Js', percentage: "w-[65%]", imageSrc: './skillspng/node.png' },
        { id: 8, name: 'Express Js', percentage: "w-[80%]", imageSrc: './skillspng/problem.png' },
        { id: 9, name: 'Java', percentage: "w-[50%]", imageSrc: './skillspng/Java.png' },
    ];


    return (
        <div name='skills' className='bg-gradient-to-b pb-20 from-black to-gray-800 flex flex-col w-full  items-center text-white md:h-full h-full '>
            <div className='w-11/12 mx-auto font-poppins'>
                <div className='pb-1  border-b-2 '>
                    <h1 className='font-semibold text-4xl text-gray-400'>Skills</h1>
                </div>
            </div>
            <div className='w-11/12 mx-auto font-poppins grid md:grid-cols-3 grid-cols-1 gap-8 mt-8'>
                
            {skillsData.map((skill)=>(
                    <div key={skill.id} className='flex w-full flex-col items-center'>
                    <div>
                        <div className=''>
                            <img src={skill.imageSrc} alt="" className='w-96 h-60 rounded-t-lg'  />
                            <div className=''>
                                <div className='bg-white  w-full rounded-b-lg backdrop-filter'>
                                    <div className={`border-2 py-1 border-green-500 bg-green-500 rounded-es-lg ${skill.percentage}`} >
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='pt-3 flex gap-2 flex-col text-gray-400 cursor-pointer'>
                            <h1 className='font-semibold text-xl'>{skill.name}</h1>
                            <div className='flex gap-4 text-center text-gray-700'>
                                <span className='flex items-center gap-1 text-sm'><BsCode className='text-lg'/> 1128</span>
                                <span className='flex items-center gap-1 text-sm'><PiClockCounterClockwiseBold className='text-lg'/> 1 Day ago</span>
                            </div>
                        </div>
                    </div>
                </div>
            
                ))}
            </div>

        </div>
    )
}

export default Skills