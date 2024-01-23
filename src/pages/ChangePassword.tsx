const ChangePassword = () => {
  return (
    <div className='p-8'>
      <div className='py-6 rounded-md bg-white shadow-lg w-full'>
        <div className='max-w-[453px] mx-auto'>
          <h1 className='text-[#616161] font-bold text-[28px] mb-4'>ĐỔI MẬT KHẨU ĐĂNG NHẬP</h1>
          <div className='flex  col-span-3 flex-col mb-4 '>
            <div className=' w-[150px] mb-1'>
              Mật khẩu hiện tại
            </div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
              <div className='flex-1 p-1.5'>
                <input
                  type='password'
                  className='w-full'
                  placeholder='Nhập mật khẩu hiện tại của quý khách'
                />
              </div>
            </div>
          </div>
          <div className='flex  col-span-3 flex-col mb-4 '>
            <div className=' w-[150px] mb-1'>
              Nhập mật khẩu
            </div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
              <div className='flex-1 p-1.5'>
                <input
                  type='password'
                  className='w-full'
                  placeholder='Nhập mật khẩu'
                />
              </div>
            </div>
          </div>
          <div className='flex  col-span-3 flex-col mb-4 '>
            <div className=' w-[150px] mb-1'>
              Nhập lại mật khẩu
            </div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
              <div className='flex-1 p-1.5'>
                <input
                  type='password'
                  className='w-full'
                  placeholder='Nhập lại mật khẩu'
                />
              </div>
            </div>
          </div>
          <div className="bg-blue-400 rounded text-white font-medium w-max px-4 py-2">
            Lưu
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChangePassword
