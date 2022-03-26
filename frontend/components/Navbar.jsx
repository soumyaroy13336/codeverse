import Image from 'next/image'
import { useEffect, useState } from 'react'
import { LogoutIcon, PlusIcon, TrendingUpIcon } from '@heroicons/react/outline'
import { FaSearch } from 'react-icons/fa'
import SidebarLink from './SidebarLink'
import Link from 'next/link'

const Navbar = () => {
  const [show, setShow] = useState(true)
  const [colorChange, setColorchange] = useState(false)
  const changeNavbarColor = () => {
    if (window.scrollY >= 80) {
      setColorchange(true)
    } else {
      setColorchange(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor)
  }, [])

  const user = true
  return (
    <>
      <nav
        className={`fixed flex flex-wrap items-center justify-between py-3  ${
          colorChange ? 'bg-[#232226da] ' : 'bg-skin-color4'
        } w-full z-[1000] `}
      >
        <div className="flex justify-between items-center w-full container mx-auto px-18">
          <div className="text-2xl font-medium h-full p-1 w-48 cursor-pointer">
            <span className="text-skin-base">Code</span>
            <span className="text-skin-inverted">Verse</span>
          </div>
          {user ? (
            <>
              <div className="hidden justify-center border-none bg-skin-color7 w-auto rounded-full p-1">
                <div className="content-center grid text-skin-base bg-skin-color7 ml-3 p-2">
                  <FaSearch />
                </div>
                <input
                  type="text"
                  placeholder="Search for posts, people or topics ..."
                  className=" mx-3 hidden w-80 lg:w-96  text-skin-base bg-skin-color7 border-none outline-none"
                />
              </div>
            </>
          ) : null}

          <div className="flex justify-end items-center w-48 space-x-8">
            {user ? (
              <>
                <button className="hidden rounded-full bg-skin-color7 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300 w-[36px] h-[36px] lg:flex items-center justify-center">
                  <PlusIcon className="h-5" />
                </button>
                <button className="rounded-full bg-skin-color7 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300 w-[36px] h-[36px] hidden lg:flex items-center justify-center">
                  <TrendingUpIcon className="h-5" />
                </button>
                <div
                  className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer"
                  onClick={() => setShow(!show)}
                >
                  <Image
                    src="/dummyProfileImg.jpg"
                    alt="profile image"
                    width={180}
                    height={180}
                    className="object-cover rounded-full"
                  />
                </div>
              </>
            ) : (
              <>
                <Link href="/login">
                  <button className=" md:block py-1 w-36 bg-skin-primary text-skin-base rounded-2xl">
                    <a> login</a>
                  </button>
                </Link>
                <Link href="/register">
                  <button className="hidden lg:block py-1 w-36 bg-skin-primary text-skin-base rounded-2xl">
                    <a>Register</a>
                  </button>
                </Link>
              </>
            )}
            {!show ? (
              <div
                className={`absolute h-auto bg-skin-color7 top-16 rounded-2xl`}
              >
                <div className="lg:hidden flex justify-evenly my-2">
                <button className="rounded-full bg-skin-color4 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300 w-[36px] h-[36px] flex items-center justify-center">
                  <PlusIcon className="h-5" />
                </button>
                <button className="rounded-full bg-skin-color4 hover:bg-skin-primary text-skin-base p-1 ease-in-out duration-300 w-[36px] h-[36px] flex items-center justify-center">
                  <TrendingUpIcon className="h-5" />
                </button>
                </div>
                <SidebarLink text="Logout" icon={LogoutIcon}  />
              </div>
            ) : null}
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
