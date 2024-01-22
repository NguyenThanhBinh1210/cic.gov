const CreditRatting = () => {
  return (
    <div>
      <div className='bg-white text-[28px] font-bold py-3 text-center text-[#5b5858]'>
        Khai thác báo cáo xếp hạng tín dụng
      </div>
      <div className='bg-[#ececf1] py-10 px-3 md:px-0'>
        <div className='max-w-[1330px] mx-auto '>
          <div className='bg-white mb-5 rounded-b shadow-md'>
            <div className='bg-[#339] text-white text-base font-medium p-2 px-4'>Danh sách sản phẩm CIC cung cấp</div>
            <div className='px-4 py-2 overflow-x-auto'>
              <table className='w-full border'>
                <thead>
                  <tr className='bg-[#f5f5f5] w-max'>
                    <th className='p-[15px] font-medium  border-r text-[13px] border-b'>
                      <div className='w-max md:w-full'>Mã Báo Cáo</div>
                    </th>
                    <th className='p-[15px] font-medium  border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Tên Báo cáo</div>
                    </th>
                    <th className='p-[15px] font-medium  border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Giá tiền trước thuế</div>
                    </th>
                    <th className='p-[15px] font-medium  border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Giá tiền bao gồm VAT 10%</div>
                    </th>
                    <th className='p-[15px] font-medium  border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Mẫu báo cáo</div>
                    </th>
                    <th className='p-[15px] font-medium  border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Thao Tác</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className='p-[15px] text-center border-r'>
                      Không có dữ liệu
                    </td>
                    <td colSpan={1}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='bg-white shadow-md rounded p-3 text-red-500'>
            <p>Khách hàng cần chuẩn bị đầy đủ các thông tin sau để thực hiện xếp hạng tín dụng:</p>
            <p>1. Phiếu thu nhập thông tin đã điền đầy đủ thông tin (định dạng file pdf, docx)</p>
            <p>2. Báo cáo tài chính 3 năm gần nhất (Ưu tiên BCTC kiểm toán, BCTC thuế)(định dạng file pdf, docx)</p>
            <p>3. Đăng ký kinh doanh gần nhất</p>
            <p>4. Chứng chỉ giải thưởng</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreditRatting
