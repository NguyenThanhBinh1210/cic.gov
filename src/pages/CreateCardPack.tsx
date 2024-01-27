/* eslint-disable @typescript-eslint/no-explicit-any */
import girl2 from '~/assets/images/girl2.png'
import bg from '~/assets/images/bg-card.png'
import { useState } from 'react'
import { Button, Dialog, DialogBody, DialogFooter, DialogHeader, Typography } from '@material-tailwind/react'
const CreateCardPack = () => {
  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(!open)
  const initialFromState = {
    name: '',
    phone: '',
    cmnd: '',
    email: ''
  }
  const [formState, setFormState] = useState(initialFromState)
  const handleChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: event.target.value }))
  }
  const [valueView, setValueView] = useState('10.000.000')
  const handleInputChange = (event: any) => {
    let value = event.target.value
    value = value.replace(/[^0-9]/g, '')
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    setValueView(value)
  }
  return (
    <div className='relative h-max'>
      <img src={bg} alt='bg' className='hidden lg:block' />
      <div className='flex lg:absolute top-0 left-0 w-full h-full'>
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
                  <input type='radio' id='canhan' defaultChecked name='doituong' />
                  <label htmlFor='canhan'>Cá nhân</label>
                </div>
                <div className='flex items-center gap-1'>
                  <input type='radio' id='doanhnghiep' name='doituong' />
                  <label htmlFor='doanhnghiep'>Cá nhân</label>
                </div>
              </div>
            </div>
            <div className='flex items-center gap-3 mb-3 text-[#212529]'>
              <p>Loại thẻ</p>
              <div className='flex items-center gap-x-10'>
                <div className='flex items-center gap-1'>
                  <input type='radio' id='canhan' defaultChecked name='loaithe' />
                  <label htmlFor='canhan'>Tín dụng</label>
                </div>
                <div className='flex items-center gap-1'>
                  <input type='radio' id='doanhnghiep' name='loaithe' />
                  <label htmlFor='doanhnghiep'>Ghi nợ</label>
                </div>
              </div>
            </div>
            <div className='flex md:items-center col-span-3 md:col-span-1 flex-col md:flex-row'>
              <div className=' w-[220px]'>
                Thu nhập (tháng) <span className='text-red-600'>*</span>
              </div>
              <div className='flex items-center'>
                <div className='flex w-[200px] items-center border rounded-l overflow-hidden'>
                  <div className=' '></div>
                  <div className='flex-1 p-1.5'>
                    <input
                      onChange={handleInputChange}
                      value={valueView}
                      type='text'
                      className='w-full'
                      placeholder='Thu nhập'
                    />
                  </div>
                </div>
                <div className='bg-[#e9ecef] py-1.5 border rounded-r px-2'>VND</div>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-3'>
            <div className='flex md:w-[215px] items-center border rounded overflow-hidden w-full'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input
                  value={formState.name}
                  onChange={handleChange('name')}
                  type='text'
                  className='w-full'
                  placeholder='Họ và tên'
                />
              </div>
            </div>
            <div className='flex md:w-[215px] items-center border rounded overflow-hidden w-full'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input
                  value={formState.phone}
                  onChange={handleChange('phone')}
                  type='text'
                  className='w-full'
                  placeholder='Số điện thoại'
                />
              </div>
            </div>
            <div className='flex md:w-[215px] items-center border rounded overflow-hidden w-full'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input
                  value={formState.cmnd}
                  onChange={handleChange('cmnd')}
                  type='text'
                  className='w-full'
                  placeholder='CMND/CCCD'
                />
              </div>
            </div>
            <div className='flex md:w-[215px] items-center border rounded overflow-hidden w-full'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input
                  value={formState.email}
                  onChange={handleChange('email')}
                  type='text'
                  className='w-full'
                  placeholder='Email'
                />
              </div>
            </div>
            <button
              onClick={handleOpen}
              disabled={!formState.cmnd || !formState.email || !formState.name || !formState.phone}
              type='button'
              className='bg-blue-400 disabled:bg-[#d0d0de] text-white transition-all w-full h-[48px] rounded-md'
            >
              Đăng ký ngay
            </button>
          </div>
        </div>
      </div>
      <Dialog placeholder='' open={open} handler={handleOpen}>
        <DialogHeader placeholder=''>
          <Typography placeholder='' variant='h5' color='blue-gray'>
            Thao tác của bạn đã được gửi
          </Typography>
        </DialogHeader>
        <DialogBody placeholder='' divider className='grid place-items-center gap-4'>
          <Typography placeholder='' className='text-center font-normal'>
            Chúng tôi đã nhận được yêu cầu từ bạn và sẽ phản hồi trong thời gian sớm nhất! Xin cảm ơn!
          </Typography>
        </DialogBody>
        <DialogFooter placeholder='' className='space-x-2'>
          <Button
            placeholder=''
            variant='gradient'
            color='blue'
            onClick={() => {
              handleOpen()
              setFormState(initialFromState)
            }}
          >
            Đóng
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  )
}

export default CreateCardPack
