/* eslint-disable @typescript-eslint/no-explicit-any */
import ic1 from '~/assets/images/ic1.png'
import ic2 from '~/assets/images/ic2.png'
import ic3 from '~/assets/images/ic3.png'
import { Accordion, AccordionHeader, AccordionBody, Chip } from '@material-tailwind/react'
import { useContext, useState } from 'react'
import { AppContext } from '~/contexts/app.context'
import { useQuery } from 'react-query'
import { getHistoryOrder, getHistoryWallet, getWallet } from '~/apis/recharge'
import { formatTime, tachDoanVan } from '~/utils/utils'
import { getChuyenTien } from '~/apis/payment.api'
const QuanLy = () => {
  const [open, setOpen] = useState(0)
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value)
  const { showSidebar, setShowSidebar } = useContext(AppContext)
  const [totalHisOrder, setHistoryOrder] = useState<any>(0)
  const [totalHisWL, setHistoryWL] = useState<any>(0)
  const [totalHisTranf, setHistoryTranf] = useState<any>(0)
  const [totalAmount, setTotalAmount] = useState<string | number>(0)
  const [totalMoney, setTotalMoney] = useState<string | number>(0)
  useQuery({
    queryKey: 'get-lich-su-tham-gia',
    queryFn: () => getHistoryOrder(),
    onSuccess: (data) => {
      setHistoryOrder(data.data.history)
    }
  })
  useQuery({
    queryKey: 'get-lich-su-rut',
    queryFn: () => getHistoryWallet(),
    onSuccess: (data) => {
      setHistoryWL(data.data)
    }
  })
  useQuery({
    queryKey: 'get-chuyen-tien',
    queryFn: () => getChuyenTien(),
    onSuccess: (data) => {
      setHistoryTranf(data.data.getUser)
    }
  })
  useQuery({
    queryKey: 'get-order',
    queryFn: () => getWallet(),
    onSuccess: (data) => {
      setTotalAmount(data.data.getWallet?.totalAmount)
      setTotalMoney(data.data.getWallet?.money)
    }
  })
  return (
    <div className='py-3 md:py-10 px-3 md:px-6'>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className='text-white mb-3 lg:hidden flex items-center gap-2 bg-[#007bff] hover:bg-blue-600 transition-all h-max focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-auto   focus:outline-none'
      >
        Xem thông tin
      </button>
      <div className='w-full bg-white shadow-md rounded-md p-2.5 mb-4'>
        <h2 className='font-bold text-[#333399] border-b pb-1'>THỐNG KÊ</h2>
        <div className='mt-3 grid grid-cols-1 md:grid-cols-3 gap-3'>
          <div className='bg-[#82ac40] flex items-center md:h-[150px] justify-between px-[25px] py-2.5'>
            <img className='w-[50px] h-[50px]' src={ic1} alt='ic1' />
            <div>
              <p className='text-right text-white'>TỔNG SỐ LẦN NỘP YÊU CẦU</p>
              <p className='text-3xl font-bold text-white text-right'>{totalHisOrder?.length}</p>
            </div>
          </div>
          <div className='bg-[#e75d5b] flex items-center md:h-[150px] justify-between px-[25px] py-2.5'>
            <img className='w-[50px] h-[50px]' src={ic2} alt='ic2' />
            <div>
              <p className='text-right text-white'>TỔNG SỐ LẦN RÚT TIỀN</p>
              <p className='text-3xl font-bold text-white text-right'>{totalHisWL?.length}</p>
            </div>
          </div>
          <div className='bg-[#55a67d] flex items-center md:h-[150px] justify-between px-[25px] py-2.5'>
            <img className='w-[50px] h-[50px]' src={ic3} alt='ic3' />
            <div>
              <p className='text-right text-white'>TỔNG SỐ LẦN CHUYỂN ĐỔI</p>
              <p className='text-3xl font-bold text-white text-right'>{totalHisTranf?.length}</p>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full bg-white shadow-md rounded-md p-2.5 mb-4'>
        <Accordion placeholder={''} open={open === 1} icon={<Icon id={1} open={open} />}>
          <AccordionHeader
            className='font-bold normal-case text-md pt-2 text-[#333399] border-b pb-1'
            placeholder={''}
            onClick={() => handleOpen(1)}
          >
            LỊCH SỬ THAM GIA
          </AccordionHeader>
          <AccordionBody className='py-0'>
            <div className='text-xs md:text-sm bg-[#f5f5f5] py-1.5 border my-2 px-2'>
              <span>Tổng số hạn mức:</span>
              <span className='ml-1 font-medium'>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(totalAmount as number)}
              </span>
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full border'>
                <thead>
                  <tr className='bg-[#f5f5f5] w-max'>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max md:w-full'>Mã phiên</div>
                    </th>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Mã hàng</div>
                    </th>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Số tiền phí</div>
                    </th>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Trạng thái</div>
                    </th>
                  </tr>
                </thead>
                <tbody className=' overflow-y-auto'>
                  {totalHisOrder &&
                    totalHisOrder?.map((item: any, index: number) => (
                      <tr key={index} className='border-b'>
                        <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>{item.codeOrder}</td>
                        <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>{item.randomNumber}</td>
                        <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                          {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0
                          }).format(item.countNum as number)}
                        </td>
                        <td className={`p-2 text-[12px] md:p-[15px] text-center border-r`}>
                          {item.status === 'pending' ? (
                            <Chip className='w-max mx-auto normal-case font-normal' color='amber' value='Đang chờ' />
                          ) : item.status === 'done' ? (
                            <Chip className='w-max mx-auto normal-case font-normal' color='green' value='Hoàn thành' />
                          ) : (
                            <Chip className='w-max mx-auto normal-case font-normal' color='red' value='Huỷ' />
                          )}
                        </td>
                      </tr>
                    ))}
                  {totalHisOrder?.length === 0 ||
                    (!totalHisOrder && (
                      <tr>
                        <td colSpan={4} className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                          Không có dữ liệu
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion placeholder={''} open={open === 2} icon={<Icon id={2} open={open} />}>
          <AccordionHeader
            className='font-bold normal-case text-md pt-2 text-[#333399] border-b pb-1'
            placeholder={''}
            onClick={() => handleOpen(2)}
          >
            LỊCH SỬ RÚT TIỀN
          </AccordionHeader>
          <AccordionBody className='py-0'>
            <div className='text-xs md:text-sm bg-[#f5f5f5] py-1.5 border my-2 px-2'>
              <span>Tổng số tiền:</span>
              <span className='ml-1 font-medium'>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(totalMoney as number)}
              </span>
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full border'>
                <thead>
                  <tr className='bg-[#f5f5f5] w-max'>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max md:w-full'>Thời gian</div>
                    </th>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Số tiền</div>
                    </th>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Trạng thái</div>
                    </th>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Lý do</div>
                    </th>
                  </tr>
                </thead>
                <tbody className=' overflow-y-auto'>
                  {totalHisWL &&
                    totalHisWL?.map((item: any, index: number) => (
                      <tr key={index} className='border-b'>
                        <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                          {formatTime(item.createdAt)}
                        </td>
                        <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                          {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0
                          }).format(item.totalAmount as number)}
                        </td>
                        <td className={`p-2 text-[12px] md:p-[15px] text-center border-r `}>
                          {item.status === 'pending' ? (
                            <Chip
                              className='w-max mx-auto normal-case font-normal'
                              color='amber'
                              value='Đang xác nhận'
                            />
                          ) : item.status === 'done' ? (
                            <Chip className='w-max mx-auto normal-case font-normal' color='green' value='Thành công' />
                          ) : (
                            <Chip className='w-max mx-auto normal-case font-normal' color='red' value='Thất bại' />
                          )}
                        </td>
                        <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>{tachDoanVan(item.nfo)}</td>
                      </tr>
                    ))}
                  {totalHisWL?.length === 0 ||
                    (!totalHisWL && (
                      <tr>
                        <td colSpan={4} className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                          Không có dữ liệu
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </AccordionBody>
        </Accordion>
        <Accordion placeholder={''} open={open === 3} icon={<Icon id={3} open={open} />}>
          <AccordionHeader
            className='font-bold normal-case text-md pt-2 text-[#333399] border-b pb-1'
            placeholder={''}
            onClick={() => handleOpen(3)}
          >
            LỊCH SỬ CHUYỂN ĐỔI
          </AccordionHeader>
          <AccordionBody className='py-0'>
            <div className='text-xs md:text-sm bg-[#f5f5f5] py-1.5 border my-2 px-2'>
              <span>Tổng số hạn mức:</span>
              <span className='ml-1 font-medium'>
                {new Intl.NumberFormat('vi-VN', {
                  style: 'currency',
                  currency: 'VND',
                  minimumFractionDigits: 0
                }).format(totalAmount as number)}
              </span>
            </div>
            <div className='overflow-x-auto'>
              <table className='w-full border'>
                <thead>
                  <tr className='bg-[#f5f5f5] w-max'>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max md:w-full'>Thời gian</div>
                    </th>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Số tiền</div>
                    </th>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Trạng thái</div>
                    </th>
                    {/* <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Lý do</div>
                    </th> */}
                  </tr>
                </thead>
                <tbody className=' overflow-y-auto'>
                  {totalHisTranf &&
                    totalHisTranf?.map((item: any, index: number) => (
                      <tr key={index} className='border-b'>
                        <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                          {formatTime(item.createdAt)}
                        </td>
                        <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                          {new Intl.NumberFormat('vi-VN', {
                            style: 'currency',
                            currency: 'VND',
                            minimumFractionDigits: 0
                          }).format(item.changeMoney as number)}
                        </td>
                        <td className={`p-2 text-[12px] md:p-[15px] text-center border-r `}>
                          {/* {item.status === 'pending' ? (
                            <Chip
                              className='w-max mx-auto normal-case font-normal'
                              color='amber'
                              value='Đang xác nhận'
                            />
                          ) : item.status === 'done' ? (
                            <Chip className='w-max mx-auto normal-case font-normal' color='green' value='Thành công' />
                          ) : (
                            <Chip className='w-max mx-auto normal-case font-normal' color='red' value='Thất bại' />
                          )} */}
                          <Chip className='w-max mx-auto normal-case font-normal' color='green' value='Thành công' />
                        </td>
                        {/* <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>{tachDoanVan(item.nfo)}</td> */}
                      </tr>
                    ))}
                  {totalHisTranf?.length === 0 ||
                    (!totalHisTranf && (
                      <tr>
                        <td colSpan={3} className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                          Không có dữ liệu
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </AccordionBody>
        </Accordion>
      </div>
    </div>
  )
}
function Icon({ id, open }: any) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={2}
      stroke='currentColor'
      className={`${id === open ? 'rotate-180' : ''} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M19.5 8.25l-7.5 7.5-7.5-7.5' />
    </svg>
  )
}

export default QuanLy
