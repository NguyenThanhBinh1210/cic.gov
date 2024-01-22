/* eslint-disable @typescript-eslint/no-explicit-any */
import { menuLink } from '~/constants/renaral.const'
import BaseModal from '../Modal/BaseModal'
import { useNavigate } from 'react-router-dom'
import AboutModal from '~/modules/modal/AboutModal'
import { useState } from 'react'

const Menu = ({ showMenu, onCloseMenu }: { showMenu: boolean; onCloseMenu: () => void }) => {
  const navigate = useNavigate()
  const [showAbout, setShowAbout] = useState(false)

  return (
    <>
      <BaseModal show={showMenu} onClose={onCloseMenu} />
      <div
        className={`flex ${
          showMenu ? '-translate-x-0' : '-translate-x-full'
        } transition-all z-50  lg:-translate-x-0 fixed lg:static pt-10 lg:pt-0 bg-white lg:bg-transparent top-0 left-0 w-max h-screen lg:h-max justify-start flex-col lg:flex-row items-center lg:w-full lg:justify-center`}
      >
        {menuLink.map((item, index) => (
          <div
            key={index}
            className='text-blue19 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border border-gray-500'
          >
            <div
              onClick={() => {
                if (item.path) {
                  navigate(item.path)
                }
                if (item.title === 'Giới thiệu') {
                  setShowAbout(true)
                }
              }}
              className='w-full h-full px-8 flex gap-x-1 items-center'
            >
              {item.title}{' '}
              {item.children && (
                <svg
                  className='w-2.5 h-2.5 group-hover:text-white text-blue19 :text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 16 10'
                >
                  <path d='M15.434 1.235A2 2 0 0 0 13.586 0H2.414A2 2 0 0 0 1 3.414L6.586 9a2 2 0 0 0 2.828 0L15 3.414a2 2 0 0 0 .434-2.179Z' />
                </svg>
              )}
            </div>
            {item?.children && (
              <ul className='absolute opacity-0 z-10 invisible group-hover:opacity-100 group-hover:visible w-full h-max top-full left-0 bg-white border border-gray-400'>
                {item.children.map((item2: any, index2) => {
                  return (
                    <li
                      onClick={() => navigate(item2.path)}
                      key={index2}
                      className='text-center relative group hover:bg-blue19  group-hover:text-blue19 hover:text-white border-b border-gray-400 last:border-none'
                    >
                      <div className='w-full h-full py-0.5 hover:text-white'>{item2.title}</div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        ))}
        <svg
          onClick={onCloseMenu}
          className='lg:hidden absolute cursor-pointer  top-2 right-2 w-5 h-5 text-gray-600'
          aria-hidden='true'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 14 14'
        >
          <path
            stroke='currentColor'
            strokeLinecap='round'
            strokeLinejoin='round'
            strokeWidth='2'
            d='m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6'
          />
        </svg>
      </div>
      <AboutModal showAbout={showAbout} onCloseAbout={() => setShowAbout(false)} />
    </>
  )
}

export default Menu
