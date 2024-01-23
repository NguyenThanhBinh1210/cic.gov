/* eslint-disable @typescript-eslint/no-explicit-any */
import axios from 'axios'
import { useEffect, useState } from 'react'

const RegisterSingle = () => {
  const [cityList, setCityList] = useState([])
  const [selectedCity, setSelectedCity] = useState<any>({})
  const [selectedDistrict, setSelectedDistrict] = useState<any>({})
  const [districtList, setDistrictList] = useState<any>([])
  const [selectedWard, setSelectedWard] = useState<any>({})
  const [wardList, setWardList] = useState<any>([])
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
    if (selectedDistrict) {
      const selectedA = districtList?.districts?.find((c: any) => c.name === selectedDistrict)
      setWardList(selectedA?.wards)
    }
  }, [cityList, districtList?.districts, selectedCity, selectedDistrict])
  return (
    <div style={{ boxShadow: '0 0 4px #bfbebe' }} className='rounded-md mb-4 py-4 px-8 bg-white '>
      <h2 className='text-[#339] text-2xl'>Thông tin cá nhân</h2>
      <div className='grid grid-cols-3 gap-2'>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
          <div className='font-bold w-[150px]'>
            Họ và tên <span className='text-red-600'>*</span>
          </div>
          <div className='flex items-center border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <input type='text' className='w-full' placeholder='Nhập họ và tên theo CMND' />
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
          <div className='font-bold w-[150px]'>
            Ngày sinh <span className='text-red-600'>*</span>
          </div>
          <div className='flex items-center border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <input type='text' className='w-full' placeholder='Ngày tháng năm sinh' />
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
          <div className='font-bold w-[150px]'>
            Số điện thoại <span className='text-red-600'>*</span>
          </div>
          <div className='flex items-center border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <input type='text' className='w-full' placeholder='Nhập số điện thoại' />
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
          <div className='font-bold w-[150px]'>
            Số CMND / CCCD <span className='text-red-600'>*</span>
          </div>
          <div className='flex items-center border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <input type='text' className='w-full' placeholder='Nhập số CMND / CCCD' />
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
          <div className='font-bold w-[150px]'>Ngày cấp</div>
          <div className='flex items-center border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <input type='text' className='w-full' placeholder='Ngày cấp CMND / CCCD' />
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
          <div className='font-bold w-[150px]'>Nơi cấp</div>
          <div className='flex items-center border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <input type='text' className='w-full' placeholder='Nơi cấp CMND / CCCD' />
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
          <div className='font-bold w-[150px]'>Email</div>
          <div className='flex items-center border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <input type='text' className='w-full' placeholder='Nhập email' />
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
          <p className='font-semibold w-[150px]'>Đối tượng</p>
          <div className='flex items-center gap-3 bg-white p-2 py-2.5 rounded'>
            <div className='flex items-center '>
              <input
                id='default-radio-1'
                type='radio'
                value=''
                name='default-radio'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  '
              />
              <label htmlFor='default-radio-1' className='ms-2 text-sm font-medium  '>
                Nam
              </label>
            </div>
            <div className='flex items-center'>
              <input
                checked
                id='default-radio-2'
                type='radio'
                value=''
                name='default-radio'
                className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500  '
              />
              <label htmlFor='default-radio-2' className='ms-2 text-sm font-medium  '>
                Nữ
              </label>
            </div>
          </div>
        </div>

        <div className='flex md:items-center col-span-3 flex-col md:flex-row'>
          <div className='font-bold w-[150px]'>
            Địa chỉ<span className='text-red-600'>*</span>
          </div>
          <div className='flex items-center flex-1 border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <input
                type='text'
                className='w-full'
                placeholder='Lưu ý: chỉ nhập số nhà, tên đường, tổ/xóm, khu phố/thôn'
              />
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row '>
          <div className='font-bold w-[150px]'>
            Tỉnh/Thành phố<span className='text-red-600'>*</span>
          </div>
          <div className='flex items-center flex-1 border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <select
                value={selectedCity}
                onChange={(e) => setSelectedCity(e.target.value)}
                className='w-full text-gray-400'
              >
                <option value='0' selected>
                  Chọn tỉnh/ thành phố
                </option>
                {cityList?.map((item: any) => (
                  <option key={item.code} value={item.name} className='text-gray-400'>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row '>
          <div className='font-bold w-[150px]'>
            Quận/ huyện<span className='text-red-600'>*</span>
          </div>
          <div className='flex items-center flex-1 border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                className='w-full text-gray-400'
              >
                <option value='0' selected>
                  Chọn quận/ huyện
                </option>
                {districtList?.districts?.map((item: any) => (
                  <option key={item.code} value={item.name} className='text-gray-400'>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row '>
          <div className='font-bold w-[150px]'>
            Phường xã<span className='text-red-600'>*</span>
          </div>
          <div className='flex items-center flex-1 border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <select
                value={selectedWard}
                onChange={(e) => setSelectedWard(e.target.value)}
                className='w-full text-gray-400'
              >
                <option value='' selected>
                  Chọn phường xã
                </option>
                {wardList?.map((item: any) => (
                  <option key={item.code} value={item.name} className='text-gray-400'>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className='flex md:items-center col-span-3 md:col-span-2 flex-col md:flex-row '>
          <div className='font-bold w-[150px]'>
            Giấy tờ khác<span className='text-red-600'>*</span>
          </div>
          <div className='flex items-center flex-1 border rounded overflow-hidden'>
            <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
            <div className='flex-1 p-1.5'>
              <input type='text' className='w-full' placeholder='Nhập CMND cũ 9 số để được cấp tài khoản sớm nhất' />
            </div>
          </div>
        </div>
      </div>
      <div className='text-red-600 mt-1'>
        <p>
          Lưu ý: Khách hàng vui lòng đính kèm 3 ảnh chứng minh nhân dân hoặc căn cước công dân (CMND/CCCD) theo định
          dạng png, jpg, jpeg bao gồm:
        </p>

        <p>Ảnh mặt trước, mặt sau CMND/CCCD và Ảnh chân dung khách hàng chụp kèm mặt trước CMND/CCCD.</p>
        <p className='mt-2'>
          Trung tâm thông tin tín dụng Quốc gia Việt Nam thông báo về việc, quý khách hàng đã đăng ký tài khoản trên hệ
          thống https://cic.org.vn, sẽ sử dụng tài khoản đã được cung cấp để đăng nhập vào Cổng thông tin Khách hàng vay
          https://cic.gov.vn, quý khách vui lòng KHÔNG ĐĂNG KÝ LẠI và đề nghị quý khách thay đổi mật khẩu trên hệ thống
          Cổng thông tin Khách hàng vay trên màn hình Đăng nhập. Xin cảm ơn!
        </p>
      </div>
    </div>
  )
}

export default RegisterSingle
