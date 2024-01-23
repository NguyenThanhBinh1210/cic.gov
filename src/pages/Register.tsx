import { useState } from 'react'
import { Link } from 'react-router-dom'
import RegisterMultiple from '~/modules/register/RegisterMultiple'
import RegisterSingle from '~/modules/register/RegisterSingle'

const Register = () => {
  const [typeRegister, setType] = useState(1)
  return (
    <div className='bg-[#f2f0f0] py-10 px-3 md:px-0'>
      <div className='max-w-[1100px] mx-auto'>
        <div className='flex items-center gap-2 px-2 py-0.5 bg-[rgba(255,255,0,0.3333333333333333)]'>
          <svg
            className='w-4 h-4 text-[#dc3545]'
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='currentColor'
            viewBox='0 0 15 20'
          >
            <path d='M9.092 18h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2Zm-2-18a7.009 7.009 0 0 0-7 7 7.8 7.8 0 0 0 2.219 5.123c.956 1.195 1.781 2.228 1.781 3.877a1 1 0 0 0 1 1h4a1 1 0 0 0 1-1c0-1.7.822-2.7 1.774-3.868A7.63 7.63 0 0 0 14.092 7a7.009 7.009 0 0 0-7-7Zm0 5a2 2 0 0 0-2 2 1 1 0 0 1-2 0 4 4 0 0 1 4-4 1 1 0 0 1 0 2Z' />
          </svg>
          <span className='text-[#dc3545]'>
            Đây là trang đăng ký dành cho Khách hàng vay, cán bộ tín dụng vui lòng đăng ký tài khoản
          </span>
          <Link to={'/'} className='underline text-blue-400'>
            Tại đây
          </Link>
        </div>
        <div style={{ boxShadow: '0 0 4px #bfbebe' }} className='rounded-md mb-4 py-4 px-8 bg-white '>
          <h2 className='text-[#339] text-2xl'>Đăng ký tài khoản cá nhân</h2>
          <div className='flex items-center flex-col md:flex-row'>
            <p className='font-semibold md:mr-20'>Đối tượng</p>
            <div className='flex items-center gap-3 bg-white p-2 py-2.5 rounded'>
              <div className='flex items-center '>
                <input
                  id='single'
                  type='radio'
                  value=''
                  name='type'
                  onChange={() => setType(1)}
                  checked={typeRegister === 1}
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  '
                />
                <label htmlFor='single' className='ms-2 text-sm font-medium  '>
                  Cá nhân
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  checked={typeRegister === 2}
                  onChange={() => setType(2)}
                  id='multiple'
                  type='radio'
                  value=''
                  name='type'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  '
                />
                <label htmlFor='multiple' className='ms-2 text-sm font-medium  '>
                  Doanh nghiệp
                </label>
              </div>
            </div>
          </div>
        </div>
        {typeRegister === 1 && <RegisterSingle />}
        {typeRegister === 2 && <RegisterMultiple />}

        <div style={{ boxShadow: '0 0 4px #bfbebe' }} className='rounded-md mb-4 py-4 px-8 bg-white '>
          <h2 className='text-[#339] text-2xl'>Nhập mật khẩu đăng nhập</h2>
          <p className='text-[#339] my-1'>(Hệ thống tự động tạo tài khoản, vui lòng nhập mật khẩu để đăng nhập)</p>
          <div className='grid grid-cols-3 gap-4'>
            <div className='flex md:items-center flex-col md:flex-row col-span-3 md:col-span-1'>
              <div className='font-bold w-[150px]'>
                Mật khẩu <span className='text-red-600'>*</span>
              </div>
              <div className='flex items-center border rounded overflow-hidden'>
                <div className=' '></div>
                <div className='flex-1 p-1.5'>
                  <input type='text' className='w-full' placeholder='Nhập mật khẩu' />
                </div>
              </div>
            </div>
            <div className='flex md:items-center flex-col md:flex-row col-span-3 md:col-span-1'>
              <div className='font-bold w-[150px]'>
                Xác nhận <span className='text-red-600'>*</span>
              </div>
              <div className='flex items-center border rounded overflow-hidden'>
                <div className=' '></div>
                <div className='flex-1 p-1.5'>
                  <input type='text' className='w-full' placeholder='Nhập mật khẩu' />
                </div>
              </div>
            </div>
            {/* <div className='flex items-center'>
              <div className='font-bold w-[150px]'>Mức độ bảo mật: </div>
              <div className='flex items-center gap-2'>
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div key={index} className='w-[20px] h-[4px] bg-red-500 rounded-sm'></div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className='max-w-[1100px] mx-auto'>
        <button className='block ml-auto uppercase text-white bg-[#339] rounded-md px-5 shadow-md py-1 text-base font-medium'>
          Tiếp tục
        </button>
      </div>
    </div>
  )
}

export default Register
