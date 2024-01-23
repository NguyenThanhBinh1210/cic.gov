const RegisterMultiple = () => {
  return (
    <>
      <div style={{ boxShadow: '0 0 4px #bfbebe' }} className='rounded-md mb-4 py-4 px-8 bg-white '>
        <h2 className='text-[#339] text-2xl'>Thông tin doanh nghiệp</h2>
        <div className='grid grid-cols-3 gap-x-3 gap-y-2'>
          <div className='flex items-center'>
            <div className='font-bold w-[150px]'>
              Mã số DN <span className='text-red-600'>*</span>
            </div>
            <div className='flex items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Mã số doanh nghiệp' />
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='font-bold w-[150px]'>
              Ngày cấp MSDN <span className='text-red-600'>*</span>
            </div>
            <div className='flex items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Ngày tháng năm cấp' />
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='font-bold w-[150px]'>
              Email <span className='text-red-600'>*</span>
            </div>
            <div className='flex items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Nhập email' />
              </div>
            </div>
          </div>
          <div className='flex items-center col-span-3'>
            <div className='font-bold w-[150px]'>
              Tên DN <span className='text-red-600'>*</span>
            </div>
            <div className='flex flex-1 items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Tên doanh nghiệp' />
              </div>
            </div>
          </div>
          <div className='flex items-center col-span-3'>
            <div className='font-bold w-[150px]'>Tên viết tắt</div>
            <div className='flex flex-1 items-center border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Tên viết tắt ' />
              </div>
            </div>
          </div>
          <div className='flex items-center col-span-3'>
            <div className='font-bold w-[150px]'>Tên đối ngoại</div>
            <div className='flex flex-1 items-center border rounded overflow-hidden'>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Tên đối ngoại ' />
              </div>
            </div>
          </div>
          <div className='flex items-center '>
            <div className='font-bold w-[150px]'>
              Tỉnh/Thành phố<span className='text-red-600'>*</span>
            </div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <select className='w-full text-gray-400'>
                  <option value='' selected disabled>
                    Chọn tỉnh/ thành phố
                  </option>
                  <option value=''>kkk</option>
                  <option value=''>hihi</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex items-center '>
            <div className='font-bold w-[150px]'>
              Quận/ huyện<span className='text-red-600'>*</span>
            </div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <select className='w-full text-gray-400'>
                  <option value='' selected disabled>
                    Chọn quận/ huyện
                  </option>
                  <option value=''>kkk</option>
                  <option value=''>hihi</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex items-center '>
            <div className='font-bold w-[150px]'>
              Phường xã<span className='text-red-600'>*</span>
            </div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <select className='w-full text-gray-400'>
                  <option value='' selected disabled>
                    Chọn phường xã
                  </option>
                  <option value=''>kkk</option>
                  <option value=''>hihi</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex items-center col-span-3'>
            <div className='font-bold w-[150px]'>
              Địa chỉ liên hệ<span className='text-red-600'>*</span>
            </div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input
                  type='text'
                  className='w-full'
                  placeholder='Lưu ý: chỉ nhập số nhà, tên đường, tổ/xóm, khu phố/thôn'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='font-bold w-[150px]'>
              Số ĐKKD
              <span className='text-red-600'>*</span>
            </div>
            <div className='flex items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input
                  type='text'
                  className='w-full'
                  placeholder='Số ĐKKD
'
                />
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='font-bold w-[150px]'>
              Ngày cấp ĐKKD
              <span className='text-red-600'>*</span>
            </div>
            <div className='flex items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Ngày tháng năm cấp' />
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='font-bold w-[150px]'>
              Loại hình DN <span className='text-red-600'>*</span>
            </div>
            <div className='flex flex-1 items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <select className='w-full text-gray-400'>
                  <option value='' selected disabled>
                    Loại hình DN
                  </option>
                  <option value=''>kkk</option>
                  <option value=''>hihi</option>
                </select>
              </div>
            </div>
          </div>
          <div className='flex items-center'>
            <div className='font-bold w-[150px]'>
              <span className='w-[110px] block'>
                Bản scan Chứng nhận đăng ký doanh nghiệp<span className='text-red-600'>*</span>
              </span>
            </div>
            <div>
              <button
                type='button'
                className='text-white flex items-center gap-2 bg-[#007bff] hover:bg-blue-600 transition-all h-max focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 :bg-blue-600 :hover:bg-[#007bff] focus:outline-none :focus:ring-blue-800'
              >
                <svg
                  className='w-4 h-4 inline-block text-gray-800 dark:text-white'
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
              <p className='text-red-500'>Đính kèm file định dạng .*pdf</p>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxShadow: '0 0 4px #bfbebe' }} className='rounded-md mb-4 py-4 px-8 bg-white '>
        <h2 className='text-[#339] text-2xl'>Thông tin lãnh đạo</h2>
        <div className='grid grid-cols-2 gap-10'>
          <div className='flex items-center '>
            <div className='font-bold w-[150px]'>
              Giám đốc/TGĐ <span className='text-red-600'>*</span>
            </div>
            <div className='flex flex-1 items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Giám đốc/ Tổng giám đốc' />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ boxShadow: '0 0 4px #bfbebe' }} className='rounded-md mb-4 py-4 px-8 bg-white '>
        <h2 className='text-[#339] text-2xl'>Thông tin người đại diện</h2>
        <div className='grid grid-cols-2 gap-x-10 gap-y-2'>
          <div className='flex items-center '>
            <div className='font-bold w-[150px]'>
              Người đại diện <span className='text-red-600'>*</span>
            </div>
            <div className='flex flex-1 items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Người đại diện' />
              </div>
            </div>
          </div>
          <div className='flex items-center '>
            <div className='font-bold w-[150px]'>
              Số điện thoại <span className='text-red-600'>*</span>
            </div>
            <div className='flex flex-1 items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Số điện thoại di động' />
              </div>
            </div>
          </div>
          <div className='flex items-center '>
            <div className='font-bold w-[150px]'>
              Chức vụ
              <span className='text-red-600'>*</span>
            </div>
            <div className='flex flex-1 items-center border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Chức vụ người đại diện' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default RegisterMultiple
