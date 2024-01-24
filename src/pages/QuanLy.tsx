/* eslint-disable @typescript-eslint/no-explicit-any */
import ic1 from '~/assets/images/ic1.png'
import ic2 from '~/assets/images/ic2.png'
import ic3 from '~/assets/images/ic3.png'
import { Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react'
import { useState } from 'react'
const QuanLy = () => {
  const [open, setOpen] = useState(0)
  const handleOpen = (value: any) => setOpen(open === value ? 0 : value)
  return (
    <div className='py-3 md:py-10 px-3 md:px-6'>

      <div className='w-full bg-white shadow-md rounded-md p-2.5 mb-4'>
        <h2 className='font-bold text-[#333399] border-b pb-1'>THỐNG KÊ</h2>
        <div className='mt-3 grid grid-cols-1 md:grid-cols-3 gap-3'>
          <div className='bg-[#82ac40] flex items-center md:h-[150px] justify-between px-[25px] py-2.5'>
            <img className='w-[50px] h-[50px]' src={ic1} alt='ic1' />
            <div>
              <p className='text-right text-white'>TỔNG SỐ LẦN GỬI NHU CẦU</p>
              <p className='text-3xl font-bold text-white text-right'>1</p>
            </div>
          </div>
          <div className='bg-[#e75d5b] flex items-center md:h-[150px] justify-between px-[25px] py-2.5'>
            <img className='w-[50px] h-[50px]' src={ic2} alt='ic2' />
            <div>
              <p className='text-right text-white'>NHU CẦU CBTD ĐÃ KẾT NỐI</p>
              <p className='text-3xl font-bold text-white text-right'>0</p>
            </div>
          </div>
          <div className='bg-[#55a67d] flex items-center md:h-[150px] justify-between px-[25px] py-2.5'>
            <img className='w-[50px] h-[50px]' src={ic3} alt='ic3' />
            <div>
              <p className='text-right text-white'>NHU CẦU CHỜ CBTD KẾT NỐI</p>
              <p className='text-3xl font-bold text-white text-right'>0</p>
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
              <span>Tổng số điểm:</span>
              <span className='ml-1 font-medium'>414.434 ₫</span>
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
                      <div className='w-max  md:w-full'>Tổng cược</div>
                    </th>
                    <th className='p-2 text-[12px] md:p-[15px] font-medium  border-r md:text-[13px] border-b'>
                      <div className='w-max  md:w-full'>Trạng thái</div>
                    </th>
                  </tr>
                </thead>
                <tbody className=' overflow-y-auto'>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                      Không có dữ liệu
                    </td>
                  </tr>
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
              <span>Tổng số điểm:</span>
              <span className='ml-1 font-medium'>414.434 ₫</span>
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
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr className='border-b'>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>2201242918</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>46677</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r'>90.000 ₫</td>
                    <td className='p-2 text-[12px] md:p-[15px] text-center border-r '>Đang chờ</td>
                  </tr>
                  <tr>
                    <td colSpan={4} className='p-2 text-[12px] md:p-[15px] text-center border-r'>
                      Không có dữ liệu
                    </td>
                  </tr>
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
