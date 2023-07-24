import React, { useState } from 'react'
import { FaBars } from "react-icons/fa"
import { RxCross2 } from "react-icons/rx"
import { Link } from 'react-scroll'
const Header = () => {

  const [nav, setNav] = useState(false)

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "portfolio",
    },
    {
      id: 3,
      link: "about",
    },
    {
      id: 4,
      link: "skills",
    },
    {
      id: 5,
      link: "blog",
    },
    {
      id: 6,
      link: "contact",
    }
  ]

  const buttonClick =()=>{
    window.location.href="https://github.com/Ganutidke"
  }

  return (
    <>
      <div className='bg-black text-white h-20 w-full justify-center content-center items-center text-center fixed' >
        <div className='flex justify-between items-center h-20 w-11/12 mx-auto'>
          <div>
            <h1 className='font-sign font-extrabold text-4xl text-gray-400 z-50'>Ganesh</h1>
          </div>

          

          <div className='hidden md:block'>
            <ul className=' flex font-poppins h-full text-lg gap-7 items-center text-gray-400 capitalize'>

              {links.map((linkItem) => (

                <div key={linkItem.id}>
                  <Link to={linkItem.link} duration={500} smooth className='hover:text-gray-500 font-medium cursor-pointer duration-300 hover:scale-105'>
                    {linkItem.link}
                  </Link>

                </div>
              ))}

            </ul>
          </div>

          <div className='mt-3'>
            <button type="button" className="group flex flex-col text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2" onClick={buttonClick}>
              <svg className="group-hover:scale-105 w-4 h-4 mr-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
          
          <div className='md:hidden'>

            {!nav ? <FaBars className='text-[30px] cursor-pointer hover:scale-110 text-gray-400 duration-500 ' onClick={() => { setNav(true) }} /> :
              <RxCross2 className='text-[30px] cursor-pointer hover:scale-110 text-gray-400 duration-500 ' onClick={() => { setNav(false) }} />
            }



          </div>

        </div>

        {
          nav && <div className='flex justify-center items-center bg-gradient-to-b from-black to-gray-800  h-screen transition duration-500'>
            <ul className='md:hidden flex flex-col font-poppins text-lg gap-6 text-gray-400 capitalize'>

              {links.map((linkItem) => (

                <div key={linkItem.id}>
                  <Link to={linkItem.link} smooth duration={500} className='hover:text-gray-500 font-medium cursor-pointer duration-300 hover:scale-105' onClick={() => setNav(!nav)}>
                    {linkItem.link}
                  </Link>
                </div>
              ))}
            </ul>
          </div>
        }

      </div>
    </>
  )
}

export default Header