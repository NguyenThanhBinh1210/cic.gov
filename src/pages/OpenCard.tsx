/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button, Card, CardBody, CardFooter, Dialog, Input, Option, Select, Typography } from '@material-tailwind/react'
import { useContext, useState } from 'react'
import { AppContext } from '~/contexts/app.context'

const OpenCard = () => {
  const { showSidebar, setShowSidebar } = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)
  const [valueView, setValueView] = useState('')
  const handleInputChange = (event: any) => {
    let value = event.target.value
    value = value.replace(/[^0-9]/g, '')
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    setValueView(value)
  }
  return (
    <div className='px-2'>
      <div className='flex items-center justify-between'>
        <h2 className='mt-4 mb-4 text-[28px] font-medium'>Nộp đơn tín dụng</h2>
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          className='text-white lg:hidden flex items-center gap-2 bg-[#007bff] hover:bg-blue-600 transition-all h-max focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-auto   focus:outline-none'
        >
          Xem thông tin
        </button>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mb-4'>
        <Select className='' placeholder={''} color='blue' label='Nộp cho'>
          <Option>Nộp cho nhân viên</Option>
          <Option>Nộp cho QLCC</Option>
        </Select>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>
        <button
          type='button'
          className='text-white transition-all bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2   focus:outline-none '
        >
          Yêu cầu cấp hạn mức
        </button>
        <button
          onClick={handleOpen}
          type='button'
          className='text-white transition-all bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2   focus:outline-none '
        >
          Yêu cầu hạn mức
        </button>
        <button
          type='button'
          className='text-white transition-all bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2   focus:outline-none '
        >
          Yêu cầu nâng cấp hạn mức
        </button>
      </div>
      <Dialog placeholder={''} size='xs' open={open} handler={handleOpen} className='bg-transparent shadow-none'>
        <Card placeholder={''} className='mx-auto w-full max-w-[24rem]'>
          <CardBody placeholder={''} className='flex flex-col gap-4'>
            <Typography placeholder={''} variant='h4' color='blue-gray'>
              Yêu cầu cấp hạn mức
            </Typography>
            <Typography placeholder={''} className='mb-3 font-normal' variant='paragraph' color='gray'>
              Điền số tiền muốn yêu cầu vào bên dưới
            </Typography>

            <Input
              value={valueView}
              onChange={handleInputChange}
              color='blue'
              crossOrigin
              label='Số tiền: (vnđ)'
              size='lg'
            />
          </CardBody>
          <CardFooter placeholder={''} className='pt-0'>
            <Button placeholder={''} variant='gradient' color='blue' onClick={handleOpen} fullWidth>
              Xác nhận
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  )
}

export default OpenCard
