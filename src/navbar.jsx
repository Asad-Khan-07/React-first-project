import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon,ChevronDownIcon } from '@heroicons/react/24/outline'
import Header from './header'
import Body from './body'
import { useContext, useState } from 'react';
import  { themeContext} from './mode'



// const {mode}=Background


const navigation = [
  { name: 'Home', href: '#', current: false },
  { name: 'About', href: '#', current: false },
  { name: 'Blog', href: '#', current: false },
  { name: 'Support', href: '#', current: false },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  
  
const {mode, setMode} = useContext(themeContext);





// const show=(e)=>{
//   // setMode(true)
   
//   console.log(mode);
// }

// show()




  return (
    <Disclosure as="nav" className={`fixed z-20 sm:w-full`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-white/5 hover:text-white focus:outline-2 focus:-outline-offset-1 focus:outline-indigo-500">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon aria-hidden="true" className="block size-6 group-data-open:hidden" />
              <XMarkIcon aria-hidden="true" className="hidden size-6 group-data-open:block" />
            </DisclosureButton>
          </div>

          <div className="flex items-center mb:border-2 border-amber-50 sm:border-none mb:justify-around  mb:w-2xs sm:justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://themewagon.github.io/startup-nextjs/images/logo/logo-2.svg"
                className={`h-8 sm:w-30 mb:w-20 p-1 rounded-md  ${mode ? "bg-amber-100": "bg-white"} tranistion delay-150 duration-500 ease`}
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className={`flex space-x-4 `}>
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    aria-current={item.current ? 'page' : undefined}
                    className={classNames(
                      item.current ? 'bg-gray-900 text-white' : ' hover:bg-white/5 ',
                      'rounded-md px-3 py-2 text-sm font-medium hover:text-blue-600',
                      mode ? "text-amber-100" : "text-gray-900",
                      "transition delay-150 duration-500 ease"
                    )}
                    
                  >
                    {item.name}
                  </a>
                ))}
                              <Menu as="div" className="relative inline-block">
      <MenuButton className={`inline-flex w-full justify-center gap-x-1.5 rounded-md px-3 py-2 text-sm font-semibold cursor-pointer ${ mode ? "text-amber-100" : "text-gray-900"} shadow-xs hover:text-blue-600 transition delay-150 duration-500 ease`}>
        Pages
        <ChevronDownIcon aria-hidden="true" className="-mr-1 size-5 text-gray-400" />
      </MenuButton>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-amber-100 shadow-lg outline-1 outline-black/5 transition data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
             About Page
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Blog Page
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
            >
              Blog grid Page
            </a>
          </MenuItem>
          <form action="#" method="POST">
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"   >
                Blog sidebar page
              </button>
            </MenuItem>
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Blog Details page
              </button>
            </MenuItem>
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Sign In page
              </button>
            </MenuItem>
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm  text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Sign Up page
              </button>
            </MenuItem>
            <MenuItem>
              <button
                type="submit"
                className="block w-full px-4 py-2 text-left text-sm text-gray-700 data-focus:bg-gray-100 data-focus:text-gray-900 data-focus:outline-hidden"
              >
                Error page
              </button>
            </MenuItem>
          </form>
        </div>
      </MenuItems>
    </Menu>

              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center justify-around w-2xs pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 ">
  

            <button
              type="button"
              className={`relative rounded-md p-2 ${ mode ? "text-amber-100" : "text-gray-900"} mb:hidden sm:block shadow-xs cursor-pointer hover:bg-white/5 hover:text-blue-600 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-500  transition delay-150 duration-500 ease`}
            >
            Sign in
            </button>
                {/* <a class="ease-in-up hidden rounded-sm bg-primary px-8 py-3 text-base font-medium text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block md:px-9 lg:px-6 xl:px-9 bg-amber-700" href="/startup-nextjs/signup">Sign Up</a> */}
                <button className='ease-in-up hidden rounded-sm bg-primary px-8 py-3 text-center font-medium h-12 bg-blue-600 text-white shadow-btn transition duration-300 hover:bg-opacity-90 hover:shadow-btn-hover md:block cursor-pointer'
              
                >Sign Up</button>



            <button
            onClick={(e) => {
            e.stopPropagation();
            setMode(!mode)
            console.log(mode);
              }}
          className="relative z-50 bg-blue-600 text-white px-4 py-2 rounded-4xl cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 text-white transition duration-300">
          <path strokeLinecap="round" strokeLinejoin="round"  d={mode?"M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z":"M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z"} />
          </svg>
          </button>              

          </div>
        </div>
      </div>

      <DisclosurePanel className="sm:hidden">      
        <div className="space-y-1 px-2 pt-2 pb-3">
          {navigation.map((item) => (
            <DisclosureButton
            key={item.name}
            as="a"
              href={item.href}
              aria-current={item.current ? 'page' : undefined}
              className={classNames(
                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-white/5 hover:text-white',
                'block rounded-md px-3 py-2 text-base font-medium',
              )}
            >
              {item.name}
            </DisclosureButton>
            
          ))}

        </div>
        
      </DisclosurePanel>      
    </Disclosure>


  )
}