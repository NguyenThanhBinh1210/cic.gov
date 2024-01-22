const Report = () => {
  return (
    <div>
      <div className='bg-white text-[28px] font-bold py-3 text-center text-[#5b5858]'>Khai thác báo cáo tín dụng</div>
      <div className='bg-[#ececf1] py-10 px-3 md:px-0'>
        <div className='max-w-[1330px] mx-auto '>
          <div className='bg-white mb-5 rounded-b shadow-md'>
            <div className='bg-[#339] text-white text-base font-medium p-2 px-4'>Danh sách sản phẩm CIC cung cấp</div>
            <div className='px-4 py-2 overflow-x-auto'>
              <table className='w-full border'>
                <thead>
                  <tr className='bg-[#f5f5f5] w-max'>
                    <th className='p-[15px] font-medium md:w-[12.5%] border-r text-[13px] border-b'>
                      <div className='w-max md:w-full'>Mã Báo Cáo</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[12.5%] border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Tên Báo cáo</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[12.5%] border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Giá Tiền</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[12.5%] border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Số lượng báo cáo / Khoảng thời gian</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[12.5%] border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Loại Combo</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[12.5%] border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Ghi chú</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[12.5%] border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Mẫu báo cáo</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[12.5%] border-r text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Thao Tác</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={5} className='p-[15px] text-center border-r'>
                      Không có dữ liệu
                    </td>
                    <td colSpan={3}></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className='bg-white mb-5 rounded-b shadow-md'>
            <div className='bg-[#339] text-white text-base font-medium p-2 px-4'>
              Danh sách Combo CIC cung cấp đã mua
            </div>
            <div className='px-4 py-2 overflow-x-auto'>
              <div>
                <button className='bg-[#17a2b8] text-white text-xs rounded-md px-1 font-medium block ml-auto mb-4'>
                  Tổng số:
                </button>
              </div>
              <table className='w-full border'>
                <thead>
                  <tr className='bg-[#f5f5f5]'>
                    <th className='p-[15px]  font-medium md:w-[11.11%]  border-r text-[13px] border-b'>
                      <div className='w-max md:w-full '>STT</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[11.11%] border-r text-[13px] border-b'>
                      <div className='w-max md:w-full '>Mã báo cáo</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[11.11%] border-r text-[13px] border-b'>
                      <div className='w-max md:w-full '>Ngày thanh toán</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[11.11%] border-r text-[13px] border-b'>
                      <div className='w-max md:w-full '>Ngày hết hạn</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[11.11%] border-r text-[13px] border-b'>
                      <div className='w-max md:w-full '>Giá tiền</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[11.11%] border-r text-[13px] border-b'>
                      <div className='w-max md:w-full '>Số lần đã tra cứu</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[11.11%] border-r text-[13px] border-b'>
                      <div className='w-max md:w-full '>Trạng thái thanh toán</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[11.11%] border-r text-[13px] border-b'>
                      <div className='w-max md:w-full '>Hình thức thanh toán</div>
                    </th>
                    <th className='p-[15px] font-medium md:w-[11.11%] border-r text-[13px] border-b'>
                      <div className='w-max md:w-full '>Thao Tác</div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={9} className='p-[15px] text-center border-r'>
                      Không có dữ liệu
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Report
