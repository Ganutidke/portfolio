import React from 'react'

const Blog = () => {

    const blog=[
        {
            id:1,
            title:'Internet',
            imgSrc:'./blog/internet.png',
            description:"Learn about the internet and how it works.",
        },
        {
            id:2,
            title:'Web Development',
            imgSrc:'./blog/web.png',
            description:"Learn web development with HTML CSS JavaScript",
        },
        {
            id:3,
            title:'Programming Languages',
            imgSrc:'./blog/pi.png',
            description:"There are so many programming Language to learn"
        }

    ]

    return (
        <div name="blog" className='bg-gradient-to-t pb-20 from-black to-gray-800 flex flex-col w-full  items-center text-white md:h-screen h-full '>
            <div className='w-11/12 mx-auto font-poppins'>
                <div className='pb-1  border-b-2 '>
                    <h1 className='font-semibold text-4xl text-gray-400'>Blog</h1>
                </div>
            </div>
            <div className='w-11/12 mx-auto font-poppins grid md:grid-cols-3 grid-cols-1 gap-8 mt-8'>

                {blog.map((blogItem)=>(
                    <div className='flex w-full flex-col items-center my-2' key={blogItem.id}>
                    <div>
                        <div className=''>
                            <img src={blogItem.imgSrc} alt="Done by me sites demo" className='w-96 h-60 rounded-t-lg hover:scale-105 duration-300' />
                        </div>
                        <div className='flex flex-col gap-5 text-gray-400 pt-2 pb-2 border-b-2 border-cyan-300 border-l-2 border-r-2 rounded-b-lg'>
                            <h1 className='text-center font-semibold text-lg'>
                                {blogItem.title} 
                            </h1>
                            <p className='text-ellipsis text w-96 text-center'>
                                {blogItem.description}
                            </p>
                            <button className='capitalize hover:text-white text-red-300 duration-300'>read</button>
                        </div>
                    </div>
                </div>
            
                ))}

            </div>
        </div>
    )
}

export default Blog