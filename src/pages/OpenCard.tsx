/* eslint-disable @typescript-eslint/no-explicit-any */
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  Input,
  Tab,
  Tabs,
  TabsHeader,
  Typography
} from '@material-tailwind/react'
import { useContext, useEffect, useState } from 'react'
import { useMutation, useQuery, useQueryClient } from 'react-query'
import { getClientNewCode, getFashionNewCode, getProductNewCode } from '~/apis/payment.api'
import { AppContext } from '~/contexts/app.context'
import { io } from 'socket.io-client'
import serverUrl from '~/apis/socket.api'
import { createOrder } from '~/apis/recharge'
const OpenCard = () => {
  const [valueInput, setValueInput] = useState(500000)
  const [valueView, setValueView] = useState('')
  const handleInputChange = (event: any) => {
    let value = event.target.value
    value = value.replace(/[^0-9]/g, '')
    setValueInput(Number(value))
    value = value.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    setValueView(value)
  }
  const formatNumberWithCommas = (number: number) => {
    return new Intl.NumberFormat('en-US').format(number)
  }
  const formatTime = (timeInSeconds: any) => {
    const minutes = Math.floor(timeInSeconds / 60)
    const seconds = timeInSeconds % 60
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
  }
  const { showSidebar, setShowSidebar } = useContext(AppContext)
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen((cur) => !cur)

  // clm

  const [clientCode, setClientCode] = useState<any>()
  const [fashionCode, setFashionCode] = useState<any>()
  const [productCode, setProductCode] = useState<any>()
  const [countdown, setCountdown] = useState<number | null>(0)
  const [codeState, setCodeState] = useState<any>()
  useQuery({
    queryKey: ['get-client-new-code'],
    queryFn: () => {
      return getClientNewCode()
    },
    onSuccess: (data) => {
      setClientCode(data.data[0])
      setCodeState({ ...data.data[0], type: '1' })
    }
  })
  useQuery({
    queryKey: ['get-fashion-new-code'],
    queryFn: () => {
      return getFashionNewCode()
    },
    onSuccess: (data) => {
      setFashionCode(data.data[0])
    }
  })
  useQuery({
    queryKey: ['get-product-new-code'],
    queryFn: () => {
      return getProductNewCode()
    },
    onSuccess: (data) => {
      setProductCode(data.data[0])
    }
  })
  const mutationCreate = useMutation((body: any) => {
    return createOrder(body)
  })
  const handleSubmit = () => {
    // e.preventDefault();
    const newForm = {
      countNum: valueInput,
      codeOrder: codeState?.fashionPlus || codeState?.productCodePlus || codeState?.clientCodePlus || '0000000',
      randomNumber: codeState?.randomNumber
    }
    mutationCreate.mutate(newForm, {
      onSuccess: () => {
        alert('Tạo đơn thành công!')
        queryClient.invalidateQueries({ queryKey: ['get-wallets'] })
        handleOpen()
      },
      onError: (error: any) => {
        alert(error?.response.data.error)
        console.log(error)
      }
    })
  }
  const queryClient = useQueryClient()
  useEffect(() => {
    const socket = io(serverUrl)
    socket.on('updateTime', (newTimeLeft: any) => {
      setCountdown(newTimeLeft)
    })
    socket.on('countdownFinished', () => {
      // Start countdown again when finished
      socket.emit('startCountdown')
      // Load lại api /
      queryClient.invalidateQueries({ queryKey: ['get-client-new-code'] })
      queryClient.invalidateQueries({ queryKey: ['get-fashion-new-code'] })
      queryClient.invalidateQueries({ queryKey: ['get-product-new-code'] })
    })

    return () => {
      socket.disconnect()
    }
  }, [queryClient])
  return (
    <div className='px-2 md:px-8 max-w-[500px] md:shadow-md mx-2 rounded-md md:mx-auto my-4  pb-10 md:pb-10'>
      <button
        onClick={() => setShowSidebar(!showSidebar)}
        className='text-white lg:hidden mb-2 flex items-center gap-2 bg-[#007bff] hover:bg-blue-600 transition-all h-max focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2 ml-auto   focus:outline-none'
      >
        Xem thông tin
      </button>
      <div className='flex items-center justify-between   py-2'>
        <div className='text-black flex gap-1 items-center'>
          <span className='text-sm'>Phiên giao dịch tiếp theo:</span>
          <span className='text-base font-medium text-gray-600'>
            {Number(codeState?.fashionPlus) + 1 ||
              Number(codeState?.productCodePlus) + 1 ||
              Number(codeState?.clientCodePlus) + 1 ||
              '0000000'}
          </span>
        </div>
        <div className='flex items-center gap-1 text-black'>
          <svg fill='black' xmlns='http://www.w3.org/2000/svg' height='16' width='16' viewBox='0 0 512 512'>
            <path d='M75 75L41 41C25.9 25.9 0 36.6 0 57.9V168c0 13.3 10.7 24 24 24H134.1c21.4 0 32.1-25.9 17-41l-30.8-30.8C155 85.5 203 64 256 64c106 0 192 86 192 192s-86 192-192 192c-40.8 0-78.6-12.7-109.7-34.4c-14.5-10.1-34.4-6.6-44.6 7.9s-6.6 34.4 7.9 44.6C151.2 495 201.7 512 256 512c141.4 0 256-114.6 256-256S397.4 0 256 0C185.3 0 121.3 28.7 75 75zm181 53c-13.3 0-24 10.7-24 24V256c0 6.4 2.5 12.5 7 17l72 72c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-65-65V152c0-13.3-10.7-24-24-24z' />
          </svg>
          <span>{formatTime(countdown)}</span>
        </div>
      </div>
      <div className='text-black flex gap-1 items-center  py-2'>
        <span className='text-sm'>Phiên giao dịch hiện tại:</span>
        <span className='text-base font-medium text-green-600'>
          {codeState?.fashionPlus || codeState?.productCodePlus || codeState?.clientCodePlus || '0000000'}
        </span>
      </div>
      <div className='flex p-2.5 gap-x-4 items-center justify-center  relative'>
        {Array.from(String(codeState?.randomNumber || '00000'), Number).map((item: number, index: number) => (
          <div
            key={index}
            // style={{ boxShadow: '0 -4px 8px rgba(238, 198, 110, 0.2)' }}
            className='bg-white border rounded-md shadow shadow-blue-600 w-[45px] h-[55px] text-black text-2xl flex items-center justify-center'
          >
            {item}
          </div>
        ))}
      </div>
      <h2 className='mt-4 mb-4 text-xl md:text-[28px] font-medium'>Chọn yêu cầu</h2>

      <div className='grid grid-cols-1 gap-2 mt-3'>
        <button
          onClick={() => setCodeState({ ...clientCode, type: '1' })}
          type='button'
          className={`${
            codeState?.type === '1' ? 'text-white bg-blue-700' : 'text-blue-700 bg-white'
          }  border-blue-700 border-2  transition-all  hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2   focus:outline-none `}
        >
          Yêu cầu cấp hạn mức
        </button>
        <button
          onClick={() => setCodeState({ ...fashionCode, type: '2' })}
          type='button'
          className={`${
            codeState?.type === '2' ? 'text-white bg-blue-700' : 'text-blue-700 bg-white'
          }  border-blue-700 border-2  transition-all  hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2   focus:outline-none `}
        >
          Yêu cầu hạn mức
        </button>
        <button
          onClick={() => setCodeState({ ...productCode, type: '3' })}
          type='button'
          className={`${
            codeState?.type === '3' ? 'text-white bg-blue-700' : 'text-blue-700 bg-white'
          }  border-blue-700 border-2  transition-all  hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2   focus:outline-none `}
        >
          Yêu cầu nâng cấp hạn mức
        </button>
      </div>
      <div className='flex items-center justify-between'>
        <h2 className='mt-4 mb-4 text-xl md:text-[28px] font-medium'>Nộp cho</h2>
      </div>

      <Tabs value='true' className='mb-4'>
        <TabsHeader placeholder={''}>
          {data.map(({ label, value }, index) => (
            <Tab value={value} placeholder={''} key={index}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
      </Tabs>
      <button
        onClick={handleOpen}
        type='button'
        className={`text-blue-700 w-full mt-2 bg-white border-blue-700 border-2  transition-all  hover:bg-blue-700 hover:text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5  mb-2   focus:outline-none `}
      >
        Xác nhận
      </button>
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
            <div className='grid grid-cols-3 gap-3 '>
              {[100000, 200000, 500000, 1000000, 2000000, 5000000].map((item, index) => (
                <div
                  onClick={() => {
                    setValueInput(item)
                    setValueView(String(item).replace(/\B(?=(\d{3})+(?!\d))/g, '.'))
                  }}
                  key={index}
                  className={`${
                    item === valueInput ? '!bg-blue-600 text-white' : ''
                  } h-[35.6px] cursor-pointer hover:text-white flex items-center justify-center border bg-white hover:bg-blue-600 border-blue-600 transition-all duration-300 rounded-lg`}
                >
                  {formatNumberWithCommas(item)}₫
                </div>
              ))}
            </div>
          </CardBody>
          <CardFooter placeholder={''} className='pt-0'>
            <Button
              onClick={() => {
                handleSubmit()
              }}
              placeholder={''}
              variant='gradient'
              color='blue'
              fullWidth
            >
              Xác nhận
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  )
}
const data = [
  {
    label: 'Nộp cho nhân viên',
    value: 'true'
  },
  {
    label: 'Nộp cho QLCC',
    value: 'false'
  }
]
export default OpenCard
