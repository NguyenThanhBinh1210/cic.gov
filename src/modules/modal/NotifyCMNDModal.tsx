/* eslint-disable @typescript-eslint/no-explicit-any */
import cm1 from '~/assets/images/a1.png'
import cm2 from '~/assets/images/a2 (1).png'
import cm3 from '~/assets/images/a3.png'
import { useState } from 'react'
import { Dialog } from '@material-tailwind/react'
import { objectToFormData } from '~/utils/utils'
import { useMutation } from 'react-query'
import { updateCCCDMT, updateCCCDMS, updateCCCDCD } from '~/apis/auth.api'
const NotifyCMNDModal = ({ showNoti, onCloseNoti }: { showNoti: boolean; onCloseNoti: () => void }) => {
  const [formState, setFormState] = useState<any>({})
  const [imageList, setImageList] = useState<any>([])
  const [image, setImage] = useState<any>(null)
  const [image2, setImage2] = useState<any>(null)
  const [image3, setImage3] = useState<any>(null)
  const [error, setError] = useState(false)
  const mutationUpdateUser = useMutation((body: any) => {
    return updateCCCDMT(body)
  })
  const mutationUpdateUser2 = useMutation((body: any) => {
    return updateCCCDMS(body)
  })
  const mutationUpdateUser3 = useMutation((body: any) => {
    return updateCCCDCD(body)
  })
  const handleImageChange = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    const newData = {
      frontImage: file
    }
    console.log(newData)
    setImageList([...imageList, file])
    mutationUpdateUser.mutate(objectToFormData(newData), {
      onSuccess: () => {
        console.log('oke');
      },
      onError: () => {
        console.log('no oke');
      }
    })
    reader.onloadend = () => {
      setImage(reader.result)
    }
    if (file) {
      reader.readAsDataURL(file)
    }
    if (imageList.length >= 3) {
      setError(false)
    }
  }
  const handleImageChange2 = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    setImageList([...imageList, file])
    const newData = {
      backImage: file
    }
    mutationUpdateUser2.mutate(objectToFormData(newData), {
      onSuccess: () => {
        console.log('oke');
      },
      onError: () => {
        console.log('no oke');
      }
    })
    console.log(newData)
    reader.onloadend = () => {
      setImage2(reader.result)
    }
    if (file) {
      reader.readAsDataURL(file)
    }
    if (imageList.length >= 3) {
      setError(false)
    }
  }
  const handleImageChange3 = (e: any) => {
    const file = e.target.files[0]
    const reader = new FileReader()
    setImageList([...imageList, file])
    const newData = {
      backImage: file
    }
    mutationUpdateUser3.mutate(objectToFormData(newData), {
      onSuccess: () => {
        console.log('oke');
      },
      onError: () => {
        console.log('no oke');
      }
    })
    reader.onloadend = () => {
      setImage3(reader.result)
    }
    if (file) {
      reader.readAsDataURL(file)
    }
    if (imageList.length >= 3) {
      setError(false)
    }
  }
  const handleUpdate = () => {
    if (imageList.length < 3) {
      setError(true)
    } else {
      const newForm = {
        avatar: imageList
      }
      const newdata = objectToFormData(newForm)
      mutationUpdateUser.mutate(newdata, {
        onSuccess: () => {
          console.log('oke')
        },
        onError: () => {
          console.log('no oke')
        }
      })
    }
  }
  return (
    <Dialog placeholder={''} open={showNoti} handler={onCloseNoti}>
      <div className='max-h-[90vh] overflow-y-auto'>
        <div className='flex items-center justify-between bg-[#333399] py-2 px-2 rounded-t-md text-white text-base font-bold'>
          <h1>Chọn ảnh CMND/ CCCD</h1>
          <svg
            onClick={onCloseNoti}
            className='w-6 h-6 text-white cursor-pointer '
            aria-hidden='true'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
          >
            <path
              stroke='currentColor'
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18 18 6m0 12L6 6'
            />
          </svg>
        </div>
        <div className='bg-white px-4 py-2 rounded-b-md'>
          <div className='flex items-center gap-1 text-gray-400 mb-2'>
            <svg
              className='w-[18px] h-[18px] text-green-600 -translate-y-0.5 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='m5 12 4.7 4.5 9.3-9'
              />
            </svg>{' '}
            Ảnh được chụp từ CMND/ CCCD do chính phủ cấp.
          </div>
          <div className='flex items-center gap-1 text-gray-400 mb-2'>
            <svg
              className='w-[18px] h-[18px] text-green-600 -translate-y-0.5 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='m5 12 4.7 4.5 9.3-9'
              />
            </svg>{' '}
            Ảnh CMND/ CCCD được chụp trên nền một màu.
          </div>
          <div className='flex items-center gap-1 text-gray-400 mb-2'>
            <svg
              className='w-[18px] h-[18px] text-green-600 -translate-y-0.5 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='m5 12 4.7 4.5 9.3-9'
              />
            </svg>{' '}
            Ảnh CMND/ CCCD phải rõ nét, không bị cắt, không bị bóng, không bị mờ.
          </div>
          <div className='flex items-center gap-1 text-gray-400 mb-2'>
            <svg
              className='w-[18px] h-[18px] text-green-600 -translate-y-0.5 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='m5 12 4.7 4.5 9.3-9'
              />
            </svg>{' '}
            Ảnh chân dung khách hàng chụp kèm mặt trước CMND/CCCD
          </div>
          <div className='flex items-center gap-1 text-gray-400 mb-2'>
            <svg
              className='w-[18px] h-[18px] text-red-500 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='M6 18 18 6m0 12L6 6'
              />
            </svg>
            Không dùng hình ảnh dạng đen trắng.
          </div>
          <div className='flex items-center gap-1 text-gray-400 mb-2'>
            <svg
              className='w-[18px] h-[18px] text-red-500 '
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='3'
                d='M6 18 18 6m0 12L6 6'
              />
            </svg>
            Không dùng hình ảnh đã qua chỉnh sửa.
          </div>
          <div className='mt-3'>
            <div className='flex gap-2 items-center flex-col md:flex-row'>
              <label
                htmlFor='mattruoc'
                className='bg-[#f2f0f0] cursor-pointer border w-[271px] rounded-2xl md:rounded-md md:w-[140px]  h-[150px] md:h-[80px] flex flex-col items-center justify-center'
              >
                <img src={image || cm1} className='w-full h-full object-cover' alt='cm1' />
                <input
                  onChange={(e) => {
                    handleImageChange(e)

                    setFormState({ ...formState, mattruoc: e.target.files && e.target.files[0] })
                  }}
                  multiple={true}
                  id='mattruoc'
                  type='file'
                  className='absolute opacity-0 invisible'
                />
              </label>
              <label
                htmlFor='matsau'
                className='bg-[#f2f0f0] cursor-pointer border w-[271px] rounded-2xl md:rounded-md md:w-[140px]  h-[150px] md:h-[80px] flex flex-col items-center justify-center'
              >
                <img src={image2 || cm2} className='w-full h-full object-cover' alt='cm2' />
                <input
                  onChange={(e) => {
                    handleImageChange2(e)

                    setFormState({ ...formState, matsau: e.target.files && e.target.files[0] })
                  }}
                  id='matsau'
                  type='file'
                  className='absolute opacity-0 invisible'
                />
              </label>
              <label
                htmlFor='chandung'
                className='bg-[#f2f0f0] cursor-pointer border w-[271px] rounded-2xl md:rounded-md md:w-[140px]  h-[150px] md:h-[80px] flex flex-col items-center justify-center'
              >
                <img src={image3 || cm3} className='w-full h-full object-cover' alt='cm3' />
                <input
                  onChange={(e) => {
                    handleImageChange3(e)
                    setFormState({ ...formState, chandung: e.target.files && e.target.files[0] })
                  }}
                  id='chandung'
                  type='file'
                  className='absolute opacity-0 invisible'
                />
              </label>
            </div>
            {error && <div className='mt-2 text-red-500'>Vui lòng chọn đủ 3 ảnh</div>}
          </div>
          <div className='border-t py-3 mt-3'>
            <div className='flex items-center justify-end gap-x-2'>
              <button onClick={onCloseNoti} className='px-3 py-1 text-base text-white font-bold rounded bg-gray-500'>
                Huỷ
              </button>
              <button onClick={handleUpdate} className='px-3 py-1 text-base text-white font-bold rounded bg-blue-500'>
                Tiếp tục
              </button>
            </div>
          </div>
        </div>
      </div>
    </Dialog>
  )
}

export default NotifyCMNDModal
