/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useEffect, useState } from 'react'
import NotifyCMNDModal from '~/modules/modal/NotifyCMNDModal'

const Settings = () => {
  const [showNoti, setShowNoti] = useState(false)
  const [data, setData] = useState([])
  const [showList, setShowList] = useState(false)
  const [filteredData, setFilteredData] = useState([])
  const [searchTerm, setSearchTerm] = useState('')
  const [formState, setFormState] = useState<any>({})
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.vietqr.io/v2/banks')
        setData(response.data.data)
        setFilteredData(response.data.data) // Initialize filteredData with all data
      } catch (error) {
        console.error('Error fetching data:', error)
      }
    }

    fetchData()
  }, [])
  const handleInputChange = (event: any) => {
    const term = event.target.value.toLowerCase()
    setSearchTerm(term)

    if (data.length > 0) {
      const filtered = data.filter((item: any) => item.name.toLowerCase().includes(term))
      setFilteredData(filtered)
    }
  }
  return (
    <div className='py-3 md:py-10 px-3 md:px-6'>
      <div className='w-full bg-white shadow-md rounded-md p-2.5 mb-4'>
        <h2 className='font-bold text-[#333399] border-b pb-1'>Xác minh CCCD/CMND</h2>
        <div className='flex md:items-center col-span-3 flex-col md:flex-row mt-3'>
          <div className='flex gap-2 items-center flex-col md:flex-row'>
            <div className='bg-[#f2f0f0] border w-full md:w-[118px] h-[150px] md:h-[80px] flex flex-col items-center justify-center'>
              <svg
                className='w-8 h-8 text-[#999] mb-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 18'
              >
                <path
                  fill='currentColor'
                  d='M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z'
                />
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                />
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z'
                />
              </svg>
              <p className='text-[#999]'>Mặt trước</p>
            </div>
            <div className='bg-[#f2f0f0] border w-full md:w-[118px] h-[150px] md:h-[80px] flex flex-col items-center justify-center'>
              <svg
                className='w-8 h-8 text-[#999] mb-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 18'
              >
                <path
                  fill='currentColor'
                  d='M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z'
                />
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                />
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z'
                />
              </svg>
              <p className='text-[#999]'>Mặt sau</p>
            </div>
            <div className='bg-[#f2f0f0] border w-full md:w-[118px] h-[150px] md:h-[80px] flex flex-col items-center justify-center'>
              <svg
                className='w-8 h-8 text-[#999] mb-1'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 18'
              >
                <path
                  fill='currentColor'
                  d='M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z'
                />
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M18 1H2a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1Z'
                />
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 5.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0ZM7.565 7.423 4.5 14h11.518l-2.516-3.71L11 13 7.565 7.423Z'
                />
              </svg>
              <p className='text-[#999]'>Chân dung</p>
            </div>
            <button
              type='button'
              onClick={() => setShowNoti(true)}
              className='text-white flex items-center gap-2 bg-[#007bff] hover:bg-blue-600 transition-all h-max focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 :bg-blue-600 :hover:bg-[#007bff] focus:outline-none :focus:ring-blue-800'
            >
              <svg
                className='w-4 h-4 inline-block text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 20 18'
              >
                <path d='M4.09 7.586A1 1 0 0 1 5 7h13V6a2 2 0 0 0-2-2h-4.557L9.043.8a2.009 2.009 0 0 0-1.6-.8H2a2 2 0 0 0-2 2v14c.001.154.02.308.058.457L4.09 7.586Z' />
                <path d='M6.05 9 2 17.952c.14.031.281.047.424.048h12.95a.992.992 0 0 0 .909-.594L20 9H6.05Z' />
              </svg>{' '}
              Chọn file
            </button>
          </div>
        </div>
      </div>
      <div className='w-full bg-white shadow-md rounded-md p-2.5 mb-4'>
        <h2 className='font-bold text-[#333399] border-b pb-1'>Liên kết ngân hàng</h2>

        <div className='grid grid-cols-1 gap-y-3 lg:grid-cols-3 md:gap-x-6  py-3'>
          <div className='flex items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Ngân hàng</div>
            <div
              onClick={() => {
                setShowList(true)
              }}
              className={`bg-white w-full flex-1 relative p-[6px] rounded border flex items-start `}
            >
              <div>{formState?.bankName || 'Chọn ngân hàng'}</div>
              {showList && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className='absolute bg-gray-200 w-full p-1 h-max top-full left-0'
                >
                  <input
                    value={searchTerm}
                    onChange={handleInputChange}
                    type='text'
                    className='w-full bg-white py-1 rounded text-sm px-3 border'
                  />
                  <div className='h-[300px] overflow-y-auto bg-white p-1 '>
                    {filteredData?.map((item: any) => (
                      <div
                        onClick={() => {
                          setFormState({ ...formState, bankName: item.shortName })
                          setShowList(false)
                        }}
                        key={item.id}
                        className='flex items-center p-[5px] py-2 gap-x-[5px] hover:bg-gray-200 cursor-pointer'
                      >
                        <img src={item.logo} alt='' className='w-[64px] object-cover' />
                        <span>{item.shortName}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className='flex items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Tên chủ tài khoản</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='' />
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Số tài khoản</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-white shadow-lg rounded-md p-2.5'>
        <h2 className='font-bold text-[#333399] border-b pb-1'>THÔNG TIN TÀI KHOẢN CỦA QUÝ KHÁCH</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 md:gap-x-14  py-3'>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Mã CIC</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='Mã CIC' />
              </div>
            </div>
          </div>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Tên đăng nhập</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='Tên đăng nhập' />
              </div>
            </div>
          </div>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Họ và tên</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='Họ và tên' />
              </div>
            </div>
          </div>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Ngày sinh</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='Ngày sinh' />
              </div>
            </div>
          </div>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Giới tính</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='Giới tính' />
              </div>
            </div>
          </div>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>CCCD/CMND</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='CCCD/CMND' />
              </div>
            </div>
          </div>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Ngày cấp</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='Ngày cấp' />
              </div>
            </div>
          </div>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Nơi cấp</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='Nơi cấp' />
              </div>
            </div>
          </div>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Email</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='Email' />
              </div>
            </div>
          </div>
          <div className='flex  mb-4 items-center'>
            <div className='w-[110px] md:w-[150px] mb-1 font-bold'>Số điện thoại</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full ' placeholder='Số điện thoại' />
              </div>
            </div>
          </div>
        </div>
        <button className='bg-[#333399] text-white rounded px-3 py-1 text-base block mx-auto'>
          Cập nhật thông tin
        </button>
      </div>
      <NotifyCMNDModal showNoti={showNoti} onCloseNoti={() => setShowNoti(false)}></NotifyCMNDModal>
    </div>
  )
}

export default Settings
