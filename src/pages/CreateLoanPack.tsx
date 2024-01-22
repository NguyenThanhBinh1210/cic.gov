import girl2 from '~/assets/images/A2.png'
import bg from '~/assets/images/bg-card.png'
import { Slider } from '@material-tailwind/react'
const CreateLoanPack = () => {
  return (
    <div className='relative h-max'>
      <img src={bg} alt='bg' className='hidden lg:block' />
      <div className='flex lg:absolute top-0 left-0 lg:left-1/2 lg:-translate-x-1/2 w-full h-full max-w-[1360px] '>
        <img src={girl2} alt='girl2' className='hidden lg:block' />
        <div
          style={{ boxShadow: '0 0 10px #e2e2e2' }}
          className='bg-white gap-3 w-full md:mx-auto md:my-10 lg:ml-0 flex-col md:flex-row md:w-max  h-max  rounded-md py-[50px] px-[30px] flex'
        >
          <div className='flex-1'>
            <div className='flex items-center gap-3 mb-3 text-[#212529]'>
              <p>Đối tượng</p>
              <div className='flex items-center gap-x-10'>
                <div className='flex items-center gap-1'>
                  <input type='radio' id='canhan' name='doituong' defaultChecked />
                  <label htmlFor='canhan'>Cá nhân</label>
                </div>
                <div className='flex items-center gap-1'>
                  <input type='radio' id='doanhnghiep' name='doituong' />
                  <label htmlFor='doanhnghiep'>Doanh nghiệp</label>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3 mb-3 text-[#212529]'>
              <p>Loại thẻ</p>
              <div className='flex items-center gap-x-10'>
                <div className='flex items-center gap-1'>
                  <input type='radio' id='tinchap' name='loaithe' defaultChecked />
                  <label htmlFor='tinchap'>Tín dụng</label>
                </div>
                <div className='flex items-center gap-1'>
                  <input type='radio' id='thechap' name='loaithe' />
                  <label htmlFor='thechap'>Tài sản thế chấp</label>
                </div>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='num'>Số tiền cần vay</label>
              <input
                type='text'
                id='num'
                defaultValue={'100.000.000'}
                className='w-full  mt-2 max-w-[320px] rounded block border p-1.5 px-3'
              />
            </div>

            <div className='mb-3 pt-2'>
              <Slider
                barClassName=' bg-[#4f4fb8]'
                thumbClassName='[&::-moz-range-thumb]:rounded-none  [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:-mt-[8px]'
                color='deep-purple'
                placeholder={''}
                size='sm'
                defaultValue={50}
              />
              <div className='flex justify-between px-3 mt-3'>
                <div>0</div>
                <div>100tr</div>
                <div>500tr</div>
                <div>1tỷ</div>
              </div>
            </div>
            <div className='mb-3'>
              <label htmlFor='num'>Thời gian vay (tháng)</label>
              <input
                type='text'
                id='num'
                defaultValue={'48'}
                className='w-full  mt-2 max-w-[320px] rounded block border p-1.5 px-3'
              />
            </div>
            <div className='mb-3 pt-2'>
              <Slider
                barClassName=' bg-[#4f4fb8]'
                thumbClassName='[&::-moz-range-thumb]:rounded-none  [&::-webkit-slider-thumb]:w-[20px] [&::-webkit-slider-thumb]:h-[20px] [&::-webkit-slider-thumb]:-mt-[8px]'
                color='deep-purple'
                placeholder={''}
                size='sm'
                defaultValue={50}
              />
              <div className='flex justify-between px-3 mt-3'>
                <div>0</div>
                <div>24</div>
                <div>48</div>
                <div>60</div>
                <div>120</div>
              </div>
            </div>
            <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
              <div className=' w-[220px]'>
                Thu nhập (tháng) <span className='text-red-600'>*</span>
              </div>
              <div className='flex items-center'>
                <div className='flex w-[200px] items-center border rounded-l overflow-hidden'>
                  <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
                  <div className='flex-1 p-1.5'>
                    <input type='text' className='w-full' placeholder='Thu nhập' />
                  </div>
                </div>
                <div className='bg-[#e9ecef] py-1.5 border rounded-r px-2'>VND</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex md:w-[215px] items-center border rounded overflow-hidden w-full'>
              <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Họ và tên' />
              </div>
            </div>
            <div className='flex md:w-[215px] items-center border rounded overflow-hidden w-full'>
              <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Số điện thoại' />
              </div>
            </div>
            <div className='flex md:w-[215px] items-center border rounded overflow-hidden w-full'>
              <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='CMND/CCCD' />
              </div>
            </div>
            <div className='flex md:w-[215px] items-center border rounded overflow-hidden w-full'>
              <div className='w-1 h-[33px] text-transparent bg-red-500'></div>
              <div className='flex-1 p-1.5'>
                <input type='text' className='w-full' placeholder='Email' />
              </div>
            </div>
            <button className='bg-[#d0d0de] text-white w-full h-[48px] rounded-md'>Tiếp tục</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateLoanPack
