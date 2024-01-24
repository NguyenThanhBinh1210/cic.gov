/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gỉl from '~/assets/images/girl1.png'
import RechargeModal from '~/modules/modal/RechargeModal'
import BaseModal from '../Modal/BaseModal'
import { AppContext } from '~/contexts/app.context'
const Sidebar = () => {
  const location = useLocation().pathname
  const [showRecharge, setShowRecharge] = useState(false)
  const { showSidebar, setShowSidebar } = useContext(AppContext)
  return (
    <>
      <BaseModal show={showSidebar} onClose={() => setShowSidebar(false)}></BaseModal>
      <div
        className={` ${!showSidebar ? '-translate-x-full' : ' translate-x-0 '}  ${location.includes('profile') ? 'fixed top-0 left-0  h-screen z-50 lg:static' : 'hidden  lg:block'
          } w-[275px] lg:translate-x-0  bg-[#f8f8f8] h-screen transition-all`}
      >
        <div className='mt-10 px-3'>
          <img src={gỉl} className='rounded-full block mx-auto w-[180px] h-[170px]' alt='' />
          <p className='font-bold mt-3 text-center'>Nguyễn Thanh Bình</p>
          <p className='text-center mt-2'>Tài khoản chính</p>
          <p className='text-center text-xl font-medium'>966.312.062 đ</p>
          <div className=' text-center'>
            <span>Đóng băng:</span> <span className='line-through font-bold text-orange-900'>100.000 đ</span>
          </div>
          <button
            onClick={() => setShowRecharge(true)}
            className='bg-[#333399] block mt-2 mx-auto text-white rounded py-2 px-6 mb-4 shadow-md hover:shadow-none transition-all hover:translate-y-0.5'
          >
            Rút tiền
          </button>
        </div>
        <ul className='px-3 mt-6'>
          <li
            className={`py-1 px-2 ${location === '/profile/settings' && 'bg-[#333399] text-white'
              } hover:bg-[#333399] hover:text-white cursor-pointer transition-all border-y `}
          >
            <Link className='w-full block' to={'/profile/settings'}>
              Hồ sơ tài khoản
            </Link>
          </li>
          <li
            className={`py-1 px-2 ${location === '/profile/loan-demand' && 'bg-[#333399] text-white'
              } hover:bg-[#333399] hover:text-white cursor-pointer transition-all border-b`}
          >
            <Link className='w-full block' to={'/profile/loan-demand'}>
              Quản lý
            </Link>
          </li>
          <li
            className={`py-1 px-2 ${location === '/profile/password' && 'bg-[#333399] text-white'
              } hover:bg-[#333399] hover:text-white cursor-pointer transition-all border-b`}
          >
            <Link className='w-full block' to={'/profile/password'}>
              Đổi mật khẩu
            </Link>
          </li>
        </ul>

        <ul className='px-3 mt-6 '>
          <li
            className={`py-1 px-2 
             flex items-center justify-between border-t cursor-pointer transition-all border-b`}
          >
            <Link className='w-full block' to={'/profile/settings'}>
              Xác minh CMND/CCCD
            </Link>
            <svg
              className='w-[18px] h-[18px] text-green-600 -translate-y-0.5 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='m5 12 4.7 4.5 9.3-9'
              />
            </svg>{' '}
          </li>
          <li
            className={`py-1 px-2 
             flex items-center justify-between  cursor-pointer transition-all border-b`}
          >
            <Link className='w-full block' to={'/profile/settings'}>
              Liên kết ngân hàng
            </Link>
            <svg
              className='w-[18px] h-[18px] text-green-600 -translate-y-0.5 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='m5 12 4.7 4.5 9.3-9'
              />
            </svg>{' '}
          </li>
        </ul>
      </div>
      <RechargeModal showRecharge={showRecharge} onCloseRecharge={() => setShowRecharge(false)}></RechargeModal>
    </>
  )
}

export default Sidebar
