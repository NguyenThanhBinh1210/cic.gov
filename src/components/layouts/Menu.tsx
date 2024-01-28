/* eslint-disable @typescript-eslint/no-explicit-any */
import { menuLink } from '~/constants/renaral.const'
import BaseModal from '../Modal/BaseModal'
import { Link, useNavigate } from 'react-router-dom'
import { useContext, useState } from 'react'
import { AppContext } from '~/contexts/app.context'
import { Dialog } from '@material-tailwind/react'
import { useMutation, useQuery } from 'react-query'
import { getToiThieu, getWallet, postWithdrawt } from '~/apis/recharge'

const Menu = ({ showMenu, onCloseMenu }: { showMenu: boolean; onCloseMenu: () => void }) => {
  const navigate = useNavigate()
  const { isAuthenticated, profile } = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const initialFromState = {
    userId: profile?._id,
    totalAmount: '',
    codeOder: ''
  }
  const handleOpen = () => setOpen(!open)
  const [open2, setOpen2] = useState(false)
  const handleOpen2 = () => setOpen2(!open2)
  const [totalAmount, setTotalAmount] = useState<string | number>(0)
  useQuery({
    queryKey: 'get-wallets',
    queryFn: () => getWallet(),
    onSuccess: (data) => {
      setTotalAmount(data.data.getWallet?.money)
    }
  })
  const [value, setValue] = useState(0)
  const [valueView, setValueView] = useState('')
  const handleInputChange = (event: any) => {
    const inputValue = event.target.value
    if (inputValue === '') {
      setValue(0)
    }
    setValue(inputValue.replace(/[^0-9]/g, ''))

    let value = event.target.value
    value = value.replace(/[^0-9]/g, '')
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    setValueView(value)
  }
  const [formState] = useState(initialFromState)

  const mutationCreate = useMutation((body: any) => {
    return postWithdrawt(body)
  })
  const handleSubmit = () => {
    if (Number(totalAmount) >= value) {
      const newData = {
        ...formState,
        totalAmount: value
      }
      mutationCreate.mutate(newData, {
        onSuccess: () => {
          alert('Yêu cầu rút tiền hoàn tất. Số thứ tự hàng đợi đến lượt rút tiền:xxxx \nVui lòng chờ!!')
          setTotalAmount(Number(totalAmount) - Number(value))
        },
        onError: (error: any) => {
          alert(error?.response.data.message)
        }
      })
    } else {
      alert('Điểm rút nhiều hơn số dư!')
    }
  }
  const [toiThieu, setToiThieu] = useState<any>()

  useQuery({
    queryKey: ['get-toi-thieu'],
    queryFn: () => {
      return getToiThieu()
    },
    onSuccess: (data) => {
      setToiThieu(data.data.number)
    }
  })
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
            className='text-blue19 border-x-0 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border-y md:border-x border-gray-500'
          >
            <div
              onClick={() => {
                if (item.path) {
                  navigate(item.path)
                }
                if (item.title === 'Giới thiệu') {
                  handleOpen()
                }
              }}
              className={`w-full h-full px-8 flex gap-x-1 items-center ${item.title === 'Menu' && 'lg:!px-20'}`}
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
                      className='px-8 bg-gray-200 lg:bg-white lg:text-center relative group hover:bg-blue19  group-hover:text-blue19 hover:text-white border-b border-gray-400 last:border-none'
                    >
                      <div className='w-full h-full py-0.5 hover:text-white'>{item2.title}</div>
                    </li>
                  )
                })}
              </ul>
            )}
          </div>
        ))}
        {isAuthenticated ? (
          <>
            <div className='lg:hidden text-blue19 border-x-0 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border-y md:border-x border-gray-500'>
              <div className='w-full h-full px-8 flex gap-x-1 items-center'>
                <Link to={'/profile/settings'}>Thông tin cá nhân</Link>
              </div>
            </div>
            <div className='lg:hidden text-blue19 border-x-0 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border-y md:border-x border-gray-500'>
              <div className='w-full h-full px-8 flex gap-x-1 items-center'>
                <Link to={'/profile/password'}>Đổi mật khẩu</Link>
              </div>
            </div>
            <div className='lg:hidden text-blue19 border-x-0 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border-y md:border-x border-gray-500'>
              <div className='w-full h-full px-8 flex gap-x-1 items-center'>
                <Link to={'/profile/loan-demand'}>Quản lý tài khoản</Link>
              </div>
            </div>
            <div className='lg:hidden text-blue19 border-x-0 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border-y md:border-x border-gray-500'>
              <div className='w-full h-full px-8 flex gap-x-1 items-center'>
                <Link to={'/profile/settings'}>Xác minh CCCD/CMND</Link>
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
              </div>
            </div>
            <div className='lg:hidden text-blue19 border-x-0 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border-y md:border-x border-gray-500'>
              <div className='w-full h-full px-8 flex gap-x-1 items-center'>
                <Link to={'/profile/settings'}>liên kết ngân hàng</Link>
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
              </div>
            </div>
            <div className='lg:hidden text-blue19 border-x-0 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border-y md:border-x border-gray-500'>
              <div className='w-full h-full px-8 flex gap-x-1 items-center'>
                <button className='block w-full text-left uppercase' onClick={handleOpen2}>
                  Rút tiền{' '}
                </button>
              </div>
            </div>
          </>
        ) : (
          <>
            <div className='lg:hidden text-blue19 border-x-0 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border-y md:border-x border-gray-500'>
              <div className='w-full h-full px-8 flex gap-x-1 items-center'>
                <Link to={'/login'}>Đăng nhập</Link>
              </div>
            </div>
            <div className='lg:hidden text-blue19 border-x-0 w-full lg:w-max relative group cursor-pointer hover:text-white hover:bg-blue19  hover:border-white transition-all duration-300 font-medium py-0.5  uppercase text-[15px] bg-white border-y md:border-x border-gray-500'>
              <div className='w-full h-full px-8 flex gap-x-1 items-center'>
                <Link to={'/register'}>Đăng ký</Link>
              </div>
            </div>
          </>
        )}

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
      <Dialog placeholder={''} open={open} handler={handleOpen}>
        <div className=' max-w-[945px] mx-auto rounded overflow-hidden'>
          <div className='p-4 bg-[#ffa500] font-medium text-white text-2xl pl-6'>Về chúng tôi</div>
          <div className='p-4 bg-white border-b'>
            Trung tâm Thông Tin Tín Dụng Quốc gia Việt Nam (CIC) là đơn vị sự nghiệp trực thuộc Ngân hàng Nhà nước Việt
            Nam. Hoạt động với mục tiêu hạn chế, ngăn ngừa rủi ro cho hệ thống tổ chức tín dụng Việt Nam. Đồng thời kết
            nối nhu cầu tín dụng giữa cá nhân, doanh nghiệp với các Tổ chức tín dụng nhằm hạn chế tín dụng đen, cải
            thiện chỉ số tiếp cận tín dụng của Việt Nam trên bảng xếp hạng của World Bank. Cổng thông tin "Kết nối khách
            hàng vay" có địa chỉ: http://cic.gov.vn . Tại đây cá nhân và doanh nghiệp có thể tìm kiếm gói vay, đăng ký
            nhu cầu vay và khai thác báo cáo Thông tin tín dụng, Xếp hạng tín dụng về bản thân, doanh nghiệp mình. Cổng
            thông tin này khác với địa chỉ http://cic.org.vn - Cũng là của CIC nhưng dành riêng cho các TCTD khai thác
          </div>
          <div className='p-4 bg-white'>
            <button onClick={handleOpen} className='bg-red-600 text-white block mx-auto py-1.5 px-3 rounded-md'>
              Đóng
            </button>
          </div>
        </div>
      </Dialog>
      <Dialog placeholder={''} open={open2} handler={handleOpen2}>
        <div className=' max-w-[945px] mx-auto rounded overflow-hidden'>
          <div className='p-4 bg-[#333399] font-medium text-white text-2xl pl-6'>Rút tiền</div>
          <div className='p-4 bg-white border-b'>
            <div>
              <span>Số dư hiện có:</span>
              <span className='ml-1 font-bold'>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(totalAmount as number)}
              </span>
            </div>
            <div className='flex flex-col mb-4 mt-4'>
              <div className='w-[110px] md:w-[150px] mb-1 '>Số tiền cần rút:</div>
              <div className='flex items-center flex-1 border rounded overflow-hidden'>
                <div className='flex-1 p-1.5'>
                  <input
                    onChange={handleInputChange}
                    value={valueView}
                    type='text'
                    className='w-[300px] '
                    placeholder='Nhập số tiền'
                  />
                </div>
              </div>
            </div>
            <div>
              <span>Số tiền rút tối thiểu:</span>
              <span className='ml-1 font-bold'>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(toiThieu as number)}
              </span>
            </div>
          </div>
          <div className='p-4 bg-white flex items-center justify-between'>
            <button
              onClick={() => {
                setValue(Number(totalAmount))
                setValueView(String(totalAmount).replace(/\B(?=(\d{3})+(?!\d))/g, '.'))
              }}
              className='bg-[#333399] text-white  py-1.5 px-3 rounded-md'
            >
              Rút hết
            </button>
            <div className='flex items-center gap-2'>
              <button onClick={handleOpen} className='bg-gray-600 text-white  py-1.5 px-3 rounded-md'>
                Đóng
              </button>
              <button onClick={handleSubmit} className='bg-[#4545d4] text-white  py-1.5 px-3 rounded-md'>
                Rút
              </button>
            </div>
          </div>
        </div>
      </Dialog>
      {/* <AboutModal showAbout={showAbout} onCloseAbout={() => setShowAbout(false)} /> */}
    </>
  )
}

export default Menu
