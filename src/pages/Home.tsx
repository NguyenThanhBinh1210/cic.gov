/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link, useNavigate } from 'react-router-dom'
import Sliders from '~/components/Silder'
import { nhucauLink, toChucLink } from '~/constants/renaral.const'
import bidv from '~/assets/images/bidv120x50.jpg'
import banner from '~/assets/images/20210518160930_bannercic.png'
import { useEffect, useState } from 'react'
import axios from 'axios'
import AboutModal from '~/modules/modal/AboutModal'
const Home = () => {
  const [cityList, setCityList] = useState([])
  const [selectedCity, setSelectedCity] = useState<any>({})
  const [selectedDistrict, setSelectedDistrict] = useState<any>({})
  const [districtList, setDistrictList] = useState<any>([])
  useEffect(() => {
    axios
      .get('https://provinces.open-api.vn/api/?depth=3')
      .then((response) => {
        setCityList(response.data)
      })
      .catch((error) => {
        console.error('Lỗi khi tải danh sách tỉnh/thành phố: ', error)
      })
  }, [])
  useEffect(() => {
    if (selectedCity) {
      const selectedA = cityList.find((c: any) => c.name === selectedCity)
      setDistrictList(selectedA)
    }
  }, [cityList, selectedCity])

  const [showAbout, setShowAbout] = useState(false)
  const navigate = useNavigate()
  const handleSearch = () => {
    setTimeout(() => {
      navigate('/loan-pack')
    }, 700)
  }
  return (
    <div>
      <AboutModal showAbout={showAbout} onCloseAbout={() => setShowAbout(false)} />
      <section className='relative  lg:block hidden'>
        <img src={banner} alt='banner' className='h-full md:h-auto ' />
        <div className='absolute bottom-0   left-1/2 -translate-x-1/2 bg-[rgba(0,0,0,0.5)] px-5 py-4'>
          <p className='text-white mb-2 text-base'>Tìm nhanh gói vay. Nhận ngay kết quả</p>
          <div className='flex  py-4 items-center gap-3 w-max'>
            <div className='flex items-center gap-3 bg-white p-2 py-2.5 rounded'>
              <div className='flex items-center '>
                <input
                  id='default-radio-1'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  '
                />
                <label htmlFor='default-radio-1' className='ms-2 text-sm font-medium text-gray-400 '>
                  Cá nhân
                </label>
              </div>
              <div className='flex items-center'>
                <input
                  defaultChecked
                  id='default-radio-2'
                  type='radio'
                  value=''
                  name='default-radio'
                  className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  '
                />
                <label htmlFor='default-radio-2' className='ms-2 text-sm font-medium text-gray-400 '>
                  Doanh nghiệp
                </label>
              </div>
            </div>
            <div className='flex items-center gap-3 bg-white p-2 py-2.5 rounded'>
              <svg
                className='w-3.5 h-3.5 text-gray-400 '
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 20 20'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2.5'
                  d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                />
              </svg>
              <input
                type='text'
                placeholder='Nhu cầu vay: Vay tiêu dùng...'
                className='min-w-[225px] placeholder:text-gray-400'
              />
            </div>
            <div className='flex items-center gap-3 bg-white p-2 py-2.5 rounded'>
              <svg
                className='w-4 h-4 text-gray-400 :text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 16 20'
              >
                <path d='M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
              </svg>{' '}
              <select
                value={selectedCity || ''}
                onChange={(e) => setSelectedCity(e.target.value)}
                className='text-gray-400 min-w-[170px]'
                name=''
                id=''
              >
                <option value='0' className='text-gray-400'>
                  Tỉnh/Thành phố
                </option>
                {cityList?.map((item: any) => (
                  <option key={item.code} value={item.name} className='text-gray-400'>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div className='flex items-center gap-3 bg-white p-2 py-2.5 rounded'>
              <svg
                className='w-4 h-4 text-gray-400 :text-white'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                viewBox='0 0 16 20'
              >
                <path d='M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
              </svg>{' '}
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className='text-gray-400 min-w-[170px]'
                name=''
                id=''
              >
                <option value='0' selected className='text-gray-400'>
                  Quận/huyện
                </option>
                {districtList?.districts?.map((item: any) => (
                  <option key={item.code} value={item.name} className='text-gray-400'>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <button
              onClick={handleSearch}
              className='border-2 w-[130px] h-[38px] hover:bg-white hover:text-[#ef9c33] hover:border-[#ef9c33] transition-all text-white border-white bg-[#ef9c33]'
            >
              Tìm kiếm
            </button>
          </div>
        </div>
      </section>
      <section className='max-w-[1360px] mx-auto mb-4'>
        <h2 className='text-center text-gray61 uppercase text-2xl font-bold mt-2 mb-4'>Đăng ký nhu cầu tín dụng</h2>
        <Sliders width={100}>
          {nhucauLink.map((item, index) => (
            <Link to={`/loan-pack/create`} key={index} className='mx-4'>
              <div
                className='w-[100px] h-[100px] flex items-center justify-center rounded-lg'
                style={{ background: item.bg }}
              >
                <img src={item.img} alt='' />
              </div>
              <p className='w-[100px] text-center mt-2'>{item.title}</p>
            </Link>
          ))}
        </Sliders>
      </section>
      <div className='bg-grayec pb-8'>
        <section className='max-w-[1160px] mx-auto  pt-3 px-2'>
          <h2 className='text-center text-gray61 uppercase text-2xl font-bold mt-2 mb-4'>Thông báo</h2>
          <ul>
            <li>
              <h3 className='text-sm md:text-[21px] '>THÔNG BÁO VỀ GIÁ SẢN PHẨM THÔNG TIN TÍN DỤNG KHÁCH HÀNG VAY</h3>
              <div className='flex justify-between'>
                <p className='text-xs md:text-lg'>15:33 | 02/08/2023</p>
                <Link
                  className='text-blue0b mr-20 font-bold text-xs md:text-lg italic flex items-center gap-2'
                  to={'/'}
                >
                  Chi tiết{' '}
                  <svg
                    className='w-3 h-3 text-blue0b '
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </Link>
              </div>
            </li>
            <li>
              <h3 className='text-sm md:text-[21px] '>
                THÔNG BÁO VỀ CUNG CẤP BỔ SUNG KẾT QUẢ XẾP HẠNG TÍN DỤNG VÀO BÁO CÁO VỀ DOANH NGHIỆP CỦA CIC
              </h3>
              <div className='flex justify-between'>
                <p className='text-xs md:text-lg'>15:33 | 02/08/2023</p>
                <Link
                  className='text-blue0b mr-20 font-bold text-xs md:text-lg italic flex items-center gap-2'
                  to={'/'}
                >
                  Chi tiết{' '}
                  <svg
                    className='w-3 h-3 text-blue0b '
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 14 10'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M1 5h12m0 0L9 1m4 4L9 9'
                    />
                  </svg>
                </Link>
              </div>
            </li>
          </ul>
        </section>
        <section className='max-w-[1160px] mx-auto  pt-3 px-2'>
          <h2 className='text-center text-gray61 uppercase text-2xl font-bold mt-2 mb-4'>CÁC GÓI VAY NỔI BẬT</h2>
          <div className='bg-white rounded-lg p-3 w-max mx-auto mt-6'>
            <div className='pb-2 border-b px-3'>
              <img src={bidv} alt='bidv' className='w-[204px]' />
            </div>
            <div className='pb-2 border-b px-3'>
              <h4 className='text-center font-semibold text-[#339] text-lg mt-3 mb-1'>Vay tiêu dùng</h4>
              <p className='w-[192px] text-center'>Vay BIDV mua nhà siêu nhanh, lãi suất ưu đãi chỉ từ 6,5%/năm</p>
            </div>
            <div className='pb-2 border-b px-3'>
              <h4 className='text-center w-[153px] mx-auto text-[#e11b10] text-[16px] mt-3 mb-1'>
                Lãi suất ưu đãi chỉ từ 6,5%/năm
              </h4>
              <p className='w-[192px] text-center'>Hạn mức cho vay tối đa đến 100% phương án vay vốn</p>
            </div>
            <div className='pb-2 b px-3 pt-3'>
              <p className='w-[192px] text-center'>Tự tin sở hữu căn nhà như ý</p>
              <button className='text-white bg-blue19 p-1 block mt-4 mx-auto px-3 rounded-md'>Đăng ký ngay</button>
            </div>
          </div>
        </section>
      </div>
      <section className='max-w-[1360px] mx-auto mb-4 pb-10'>
        <h2 className='text-center text-gray61 uppercase  text-2xl font-bold mt-2 mb-10'>
          CÁC TỔ CHỨC TÍN DỤNG TÀI CHÍNH ĐÃ KẾT NỐI
        </h2>
        <Sliders width={100}>
          {toChucLink.map((item, index) => (
            <Link to='/' key={index} className='mx-4'>
              <div className=' flex items-center justify-center rounded-lg mr-7'>
                <img src={item.img} alt='' />
              </div>
            </Link>
          ))}
        </Sliders>
      </section>
    </div>
  )
}

export default Home
