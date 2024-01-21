import { loanPackLink } from '~/constants/renaral.const'
import lpbank from '~/assets/images/lpbank.png'
import hot from '~/assets/images/hot.png'
const LoanPack = () => {
  return (
    <div className='bg-[#f2f0f0] py-10 px-3 md:px-0'>
      <div className='max-w-[1330px] mx-auto px-3 md:px-0'>
        <h1 className='text-[#5b5858] text-[28px] font-bold text-center'>CÁC GÓI VAY TỐT NHẤT TỪ CÁC NGÂN HÀNG</h1>
        <p className='text-center mt-5 mb-2'>Số liệu luôn luôn được cập nhật mới nhất và chính xác nhất</p>
        <div style={{ boxShadow: '0 0 8px 0 rgba(0,0,0,0.15)' }} className='mb-5 bg-white'>
          <p className='border-b pb-1.5 mb-4 text-center pt-3'>CHỌN MỤC ĐÍCH VAY</p>
          <div className='p-3 grid grid-cols-3 gap-y-3 md:grid-cols-6 '>
            {loanPackLink.map((item, index) => (
              <div className=''>
                <div
                  className='py-3 hover:-translate-y-1 transition-all'
                  style={{ backgroundColor: `${item.bg}` }}
                  key={index}
                >
                  <img className='w-[50px] block mx-auto' src={item.img} alt={item.title} />
                </div>
                <p className='text-center pt-2'>{item.title}</p>
              </div>
            ))}
          </div>
        </div>
        {[1, 1, 1, 1, 1, 1].map((_, index) => (
          <div key={index} className='pt-3 mb-3 md:pr-6 pb-3 bg-white flex flex-col md:flex-row items-center gap-3'>
            <div className='w-[140px]'>
              <img src={lpbank} alt='lpbank' className='w-[120px] block mx-auto' />
            </div>
            <div className='flex-1 px-2 md:px-0'>
              <div className='flex flex-col md:flex-row'>
                <img src={hot} className='w-16 h-[22px] flex-shrink-0' alt='' />
                <p className='text-base font-medium'>GÓI ƯU ĐÃI CHO VAY SẢN XUẤT KINH DOANH LÂM THỦY SẢN</p>
              </div>
              <p>Vay sản xuất kinh doanh</p>
              <div className='grid grid-cols-1 md:grid-cols-4 md:gap-5'>
                <div className='md:border-r'>
                  <p className='font-bold'>Lãi suất</p>
                  <p className='text-[#3e93ef] leading-8'>LÃI SUẤT CHỈ TỪ...</p>
                </div>
                <div className='md:border-r'>
                  <p className='font-bold'>Hạn mức tối đa</p>
                  <p className='text-[#3e93ef] leading-8'>Quy mô 300 tỷ đồng</p>
                </div>
                <div className='md:border-r'>
                  <p className='font-bold'>Thời hạn</p>
                  <p className='text-[#3e93ef] leading-8'>Không quy định</p>
                </div>
                <div className=''>
                  <p className='font-bold'>Thời gian duyệt</p>
                  <p className='text-[#3e93ef] leading-8'>Không quy định</p>
                </div>
              </div>
            </div>
            <div className='w-[130px] '>
              <button className='bg-[#f1485e] text-white w-full py-1 border'>Chọn</button>
              <button className=' text-gray-500 mt-2 w-full py-1 border'>Chi tiết</button>
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

export default LoanPack
