import BaseModal from '~/components/Modal/BaseModal'

const AboutModal = ({ showAbout, onCloseAbout }: { showAbout: boolean; onCloseAbout: () => void }) => {
  return (
    <BaseModal show={showAbout} onClose={onCloseAbout}>
      <div className=' max-w-[945px] mx-auto rounded overflow-hidden'>
        <div className='p-4 bg-[#ffa500] font-medium text-white text-2xl pl-6'>Về chúng tôi</div>
        <div className='p-4 bg-white border-b'>
          Trung tâm Thông Tin Tín Dụng Quốc gia Việt Nam (CIC) là đơn vị sự nghiệp trực thuộc Ngân hàng Nhà nước Việt
          Nam. Hoạt động với mục tiêu hạn chế, ngăn ngừa rủi ro cho hệ thống tổ chức tín dụng Việt Nam. Đồng thời kết
          nối nhu cầu tín dụng giữa cá nhân, doanh nghiệp với các Tổ chức tín dụng nhằm hạn chế tín dụng đen, cải thiện
          chỉ số tiếp cận tín dụng của Việt Nam trên bảng xếp hạng của World Bank. Cổng thông tin "Kết nối khách hàng
          vay" có địa chỉ: http://cic.gov.vn . Tại đây cá nhân và doanh nghiệp có thể tìm kiếm gói vay, đăng ký nhu cầu
          vay và khai thác báo cáo Thông tin tín dụng, Xếp hạng tín dụng về bản thân, doanh nghiệp mình. Cổng thông tin
          này khác với địa chỉ http://cic.org.vn - Cũng là của CIC nhưng dành riêng cho các TCTD khai thác
        </div>
        <div className='p-4 bg-white'>
          <button onClick={onCloseAbout} className='bg-red-600 text-white block mx-auto py-1.5 px-3 rounded-md'>
            Đóng
          </button>
        </div>
      </div>
    </BaseModal>
  )
}

export default AboutModal
