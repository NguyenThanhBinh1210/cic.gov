import lpbank from '~/assets/images/lpbank.png'
import hot from '~/assets/images/hot.png'
const CardPack = () => {
  return (
    <div className='bg-[#f2f0f0] py-10 px-3 md:px-0'>
      <div className='max-w-[1330px] mx-auto px-3 md:px-0'>
        <h1 className='text-[#5b5858] text-[28px] font-bold text-center'>
          CÁC ƯU ĐÃI DỊCH VỤ THẺ TỐT NHẤT TỪ CÁC NGÂN HÀNG
        </h1>
        <p className='text-center mt-5 mb-2'>Số liệu luôn luôn được cập nhật mới nhất và chính xác nhất</p>

        {[1, 1, 1, 1, 1, 1].map((_, index) => (
          <div key={index} className='pt-3 mb-3 md:pr-6 pb-3 bg-white flex flex-col md:flex-row items-center gap-3'>
            <div className='w-[140px]'>
              <img src={lpbank} alt='lpbank' className='w-[120px] block mx-auto' />
            </div>
            <div className='flex-1 px-2 md:px-0 '>
              <div className='flex flex-col md:flex-row mb-3 md:mb-0'>
                <img src={hot} className='w-16' alt='' />
                <p className='text-base font-medium'>VISA GOLD</p>
              </div>
              <div className='grid md:grid-cols-5 gap-x-4 md:gap-5 md:gap-y-1'>
                <div className='md:border-r col-span-2 border-b md:border-b-0 mb-5 md:mb-0 md:col-span-1'>
                  <p className='font-medium'>Hạng thẻ</p>
                  <p className='text-[#3e93ef] leading-8'>Thẻ khác</p>
                </div>
                <div className='md:border-r col-span-2 border-b md:border-b-0 mb-5 md:mb-0 md:col-span-1'>
                  <p className='font-medium'>Lãi suất</p>
                  <p className='text-[#3e93ef] leading-8'>2%/tháng, miễn lãi...</p>
                </div>
                <div className='md:border-r col-span-2 border-b md:border-b-0 mb-5 md:mb-0 md:col-span-1'>
                  <p className='font-medium'>Hạn mức tối đa</p>
                  <p className='text-[#3e93ef] leading-8'>Từ 20 - 200 triệu</p>
                </div>
                <div className='md:border-r col-span-2 border-b md:border-b-0 mb-5 md:mb-0 md:col-span-1'>
                  <p className='font-medium'>Thời hạn thẻ</p>
                  <p className='text-[#3e93ef] leading-8'>3 Năm</p>
                </div>
                <div className='col-span-2  mb-5 md:mb-0 md:col-span-1'>
                  <p className='font-medium'>Thời gian duyệt hồ sơ</p>
                  <p className='text-[#3e93ef] leading-8'>1 Ngày</p>
                </div>
                <div className='col-span-5 uppercase text-[#f1485e] text-center md:text-left'>Tìm hiểu thêm</div>
              </div>
            </div>
            <div className='w-[130px] '>
              <button className='bg-[#f1485e] text-white w-full py-1 border'>Đăng ký ngay</button>
              <button className=' text-gray-500 mt-2 w-full py-1 border'>Chọn</button>
            </div>
          </div>
        ))}
        <button className='bg-[#f1485e] text-white block mx-auto px-2 rounded transition-all hover:bg-[#e4334b] py-1 border'>
          Xem thêm
        </button>
      </div>
    </div>
  )
}

export default CardPack
