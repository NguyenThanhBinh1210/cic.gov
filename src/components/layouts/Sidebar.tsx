/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import gỉl from '~/assets/images/girl1.png'
import BaseModal from '../Modal/BaseModal'
import { AppContext } from '~/contexts/app.context'
import { Dialog } from '@material-tailwind/react'
import { useMutation, useQuery } from 'react-query'
import { getToiThieu, getWallet, postWithdrawt } from '~/apis/recharge'
import { createChuyenTien, getPayment } from '~/apis/payment.api'
const Sidebar = () => {
  const { showSidebar, setShowSidebar, profile } = useContext(AppContext)
  const location = useLocation().pathname
  const initialFromState = {
    userId: profile?._id,
    totalAmount: '',
    codeOder: ''
  }
  const [toiThieu, setToiThieu] = useState<any>()
  const [formState] = useState(initialFromState)
  const [value, setValue] = useState(0)
  const [valueView, setValueView] = useState('')
  const [value2, setValue2] = useState(0)
  const [valueView2, setValueView2] = useState('')
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
  const handleInputChange2 = (event: any) => {
    const inputValue = event.target.value
    if (inputValue === '') {
      setValue2(0)
    }
    setValue2(inputValue.replace(/[^0-9]/g, ''))

    let value = event.target.value
    value = value.replace(/[^0-9]/g, '')
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    setValueView2(value)
  }
  const [totalAmount, setTotalAmount] = useState<string | number>(0)
  const [money, setMoney] = useState<string | number>(0)

  const mutationCreate = useMutation((body: any) => {
    return postWithdrawt(body)
  })
  const mutationChuyenTien = useMutation((body: any) => {
    return createChuyenTien(body)
  })
  const handleSubmit = () => {
    if (Number(money) >= value) {
      const newData = {
        ...formState,
        totalAmount: value
      }
      mutationCreate.mutate(newData, {
        onSuccess: () => {
          alert('Yêu cầu rút tiền hoàn tất. Số thứ tự hàng đợi đến lượt rút tiền:xxxx \nVui lòng chờ!!')
          setMoney(Number(money) - Number(value))
        },
        onError: (error: any) => {
          alert(error?.response.data.message)
        }
      })
    } else {
      alert('Tiền rút nhiều hơn số dư!')
    }
  }
  const handleSubmit2 = () => {
    if (Number(totalAmount) >= value2) {
      const newData = {
        ...formState,
        changeMoney: value2
      }
      mutationChuyenTien.mutate(newData, {
        onSuccess: (data) => {
          alert('Chuyển tiền hoàn tất!')
          setMoney(Number(money) + Number(value2))
          setTotalAmount(Number(totalAmount) - Number(value2))
          console.log(data.data)
        },
        onError: (error: any) => {
          alert(error?.response.data.message)
        }
      })
    } else {
      alert('Tiền chuyển nhiều hơn số hạn mức!')
    }
  }
  const [banks, setTotalbanks] = useState<any>(null)
  console.log(banks)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(!open)
  const [open2, setOpen2] = useState(false)
  const handleOpen2 = () => setOpen2(!open2)
  useQuery({
    queryKey: 'get-wallets',
    queryFn: () => getWallet(),
    onSuccess: (data) => {
      setTotalAmount(data.data.getWallet?.totalAmount)
      setMoney(data.data.getWallet?.money)
    }
  })
  const { data: paymentInfo } = useQuery({
    queryKey: 'get-payment',
    queryFn: () => getPayment({ userId: profile?._id }),
    onSuccess: (data) => {
      setTotalbanks(data?.data?.userId?.isDongBang)
    }
  })
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
      <BaseModal show={showSidebar} onClose={() => setShowSidebar(false)}></BaseModal>
      <div
        className={` ${!showSidebar ? '-translate-x-full' : ' translate-x-0 '}  ${location.includes('profile') || location.includes('open-card')
          ? 'fixed top-0 left-0  min-h-screen z-50 '
          : 'hidden  lg:block'
          } w-[275px] lg:translate-x-0  bg-[#f8f8f8] lg:sticky top-0 min-h-screen transition-all`}
      >
        <div className='mt-10 px-3'>
          <img src={gỉl} className='rounded-full block mx-auto w-[180px] h-[170px]' alt='' />
          <p className='font-bold mt-3 text-center'>
            {profile?.name || profile?.username} <span className='text-gray-500'> Lv{profile?.level}</span>
          </p>
          <p className='text-center mt-2'>Hạn mức tín dụng</p>
          <p className='text-center text-xl font-medium'>
            {new Intl.NumberFormat('vi-VN', {
              style: 'currency',
              currency: 'VND',
              minimumFractionDigits: 0
            }).format(totalAmount as number)}
          </p>
          <button
            onClick={handleOpen2}
            className='block w-max mx-auto hover:bg-blue-gray-50 p-2 rounded-full transition-all'
          >
            <svg
              className='w-6 h-6 text-gray-800 dark:text-white'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 16 14'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M11 10H1m0 0 3-3m-3 3 3 3m1-9h10m0 0-3 3m3-3-3-3'
              />
            </svg>
          </button>
          <p className='text-center mt-2'>Số tiền trong TK</p>
          <p className='text-center text-xl font-medium'>
            {!banks ? (
              <>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(money as number)}
              </>
            ) : (
              '0 đ'
            )}
          </p>

          <div className=' text-center'>
            <span>Đóng băng:</span>{' '}
            <span className='line-through font-bold text-orange-900'>
              {banks ? (
                <>
                  {new Intl.NumberFormat('vi-VN', {
                    style: 'currency',
                    currency: 'VND',
                    minimumFractionDigits: 0
                  }).format(money as number)}
                </>
              ) : (
                '0 đ'
              )}
            </span>
          </div>

          <button
            onClick={handleOpen}
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
            {paymentInfo?.data !== null && (
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
              </svg>
            )}
          </li>
        </ul>
      </div>
      <Dialog placeholder={''} open={open} handler={handleOpen}>
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
                }).format(money as number)}
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
      <Dialog placeholder={''} open={open2} handler={handleOpen2}>
        <div className=' max-w-[945px] mx-auto rounded overflow-hidden'>
          <div className='p-4 bg-[#333399] font-medium text-white text-2xl pl-6'>
            Chuyển tiền từ tín dụng sang tài khoản
          </div>
          <div className='p-4 bg-white border-b'>
            <div>
              <span>Hạn mức hiện tại:</span>
              <span className='ml-1 font-bold'>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(totalAmount as number)}
              </span>
            </div>
            <div className='flex flex-col mb-4 mt-4'>
              <div className='w-[110px] md:w-[150px] mb-1 '>Số tiền cần chuyển:</div>
              <div className='flex items-center flex-1 border rounded overflow-hidden'>
                <div className='flex-1 p-1.5'>
                  <input
                    onChange={handleInputChange2}
                    value={valueView2}
                    type='text'
                    className='w-[300px] '
                    placeholder='Nhập số tiền'
                  />
                </div>
              </div>
            </div>
            {/* <div>
              <span>Số tiền chuyển tối thiểu:</span>
              <span className='ml-1 font-bold'>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(toiThieu as number)}
              </span>
            </div> */}
          </div>
          <div className='p-4 bg-white flex items-center justify-between'>
            <button
              onClick={() => {
                setValue(Number(totalAmount))
                setValueView(String(totalAmount).replace(/\B(?=(\d{3})+(?!\d))/g, '.'))
              }}
              className='bg-[#333399] text-white  py-1.5 px-3 rounded-md'
            >
              Chuyển hết hết
            </button>
            <div className='flex items-center gap-2'>
              <button onClick={handleOpen2} className='bg-gray-600 text-white  py-1.5 px-3 rounded-md'>
                Đóng
              </button>
              <button onClick={handleSubmit2} className='bg-[#4545d4] text-white  py-1.5 px-3 rounded-md'>
                Chuyển
              </button>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  )
}

export default Sidebar
