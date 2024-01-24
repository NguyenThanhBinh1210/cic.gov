import navbg from '~/assets/images/background_navbar_customer.jpg'
import logo from '~/assets/images/logo-header.png'
import logotext from '~/assets/images/logo-text.png'
import face from '~/assets/images/icon_facebook.png'
import ytb from '~/assets/images/icon_youtube.png'
import Menu from './Menu'
import { Link } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '~/contexts/app.context'
const Header = () => {
  const [showMenu, setShowMenu] = useState(false)
  const { isAuthenticated, profile, reset } = useContext(AppContext)
  const handleLogout = () => {
    reset()
  }
  return (
    <div className='relative z-50'>
      <img src={navbg} alt='navbg' className='absolute top-0 left-0 w-full h-full' />
      <div className='flex max-w-[1360px] mx-auto md:pt-5 relative'>
        <Link to={'/'}>
          <img src={logo} alt='logo' className='w-[80px] h-[60px] md:h-[100px]  md:w-full max-w-[127px]' />
        </Link>
        <div className='flex-1 flex flex-col justify-center'>
          <div style={{ zIndex: !showMenu ? 1000 : 1 }} className='flex flex-col lg:flex-row justify-between md:mb-4'>
            <Link to={'/'} className='w-max'>
              <img src={logotext} alt='logotext' className='w-[200px] md:w-full max-w-[441px]' />
            </Link>
            <div className='hidden md:block'>
              <div className='flex gap-3 mb-3'>
                {!isAuthenticated && (
                  <>
                    <button className='border border-white px-1.5 font-medium rounded text-red-500'>
                      Dành cho tổ chức tín dụng
                    </button>
                    <Link to={'/register'} className='border border-white px-1.5 font-medium rounded text-blue-500'>
                      Đăng ký
                    </Link>
                    <Link to={'/login'} className='border border-white px-1.5 font-medium rounded text-blue-500'>
                      Đăng nhập
                    </Link>
                  </>
                )}
                {isAuthenticated && (
                  <div className='group relative z-50'>
                    <button className='border border-white px-1.5 font-medium rounded text-blue-800'>
                      {profile?.username}
                    </button>
                    <ul className='bg-white group-hover:opacity-100 group-hover:visible opacity-0 invisible transition-all py-1 text-blue-800 text-base rounded absolute top-full right-0 w-max h-max'>
                      <li className='w-[150px] pl-5 py-1 hover:bg-slate-100 cursor-pointer transition-all'>
                        <Link className='w-full block' to={'/profile/loan-demand'}>
                          Hồ sơ
                        </Link>
                      </li>
                      <li className='w-[150px] pl-5 py-1 hover:bg-slate-100 cursor-pointer transition-all'>
                        <Link className='w-full block' to={'/profile/password'}>
                          Đổi mật khẩu
                        </Link>
                      </li>
                      <li
                        onClick={handleLogout}
                        className='w-[150px] pl-5 py-1 hover:bg-slate-100 cursor-pointer transition-all'
                      >
                        Đăng xuất
                      </li>
                    </ul>
                  </div>
                )}
                <button className='border hidden md:block border-white px-1.5 font-medium rounded text-red-500'>
                  <svg
                    className='w-4 h-4 text-[#191991] :text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 14 20'
                  >
                    <path d='M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z' />
                  </svg>
                </button>
                <button className='border hidden md:block border-white px-1.5 font-medium rounded text-red-500'>
                  <svg
                    className='w-3.5 h-3.5 -translate-y-0.5 inline-block text-[#191991] :text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 19 18'
                  >
                    <path d='M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z' />
                  </svg>
                  <span>1800 585891</span>
                </button>
              </div>
              <div className='flex  lg:justify-end gap-x-3'>
                <img src={face} alt='face' className='w-[26px]' />
                <img src={ytb} alt='ytb' className='w-[30px]' />
              </div>
            </div>
          </div>

          <Menu onCloseMenu={() => setShowMenu(false)} showMenu={showMenu}></Menu>
          {!showMenu && (
            <button
              onClick={() => setShowMenu(true)}
              style={{ zIndex: 1001 }}
              className=' lg:hidden absolute top-1/2 md:top-10 -translate-y-1/2 right-3'
            >
              <svg
                className='w-6 h-6 text-white '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 17 14'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M1 1h15M1 7h15M1 13h15'
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Header
