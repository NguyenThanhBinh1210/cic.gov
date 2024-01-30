/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import { resetPassword } from '~/apis/auth.api'
import { AppContext } from '~/contexts/app.context'

const ChangePassword = () => {
  const { profile } = useContext(AppContext)
  const initialFromState = {
    username: '',
    password: '',
    newPassword: '',
    confirmPassword: ''
  }
  const [formState, setFormState] = useState(initialFromState)
  const handleChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: event.target.value }))
  }
  const mutationPassword = useMutation((body: any) => {
    return resetPassword(body)
  })
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const newData = {
      username: profile?.username,
      password: formState.password,
      newPassword: formState.newPassword
    }
    if (formState.newPassword !== formState.confirmPassword) {
      alert('Nhập lại không khớp!')
    } else {
      mutationPassword.mutate(newData, {
        onSuccess: () => {
          alert('Đổi mật khẩu thành công!')
        },
        onError: (error: any) => {
          alert(error.response.data.errMessage)
        }
      })
    }
  }
  return (
    <div className='p-8'>
      <div className='py-6 rounded-md bg-white shadow-lg w-full'>
        <form onSubmit={handleSubmit} className='max-w-[453px] mx-auto px-2 md:px-0'>
          <h1 className='text-[#616161] font-bold text-[28px] mb-4 text-center md:text-left'>ĐỔI MẬT KHẨU </h1>
          <div className='flex  col-span-3 flex-col mb-4 '>
            <div className=' w-[150px] mb-1'>Mật khẩu hiện tại</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input
                  value={formState.password}
                  onChange={handleChange('password')}
                  type='password'
                  className='w-full'
                  placeholder='Nhập mật khẩu hiện tại của quý khách'
                />
              </div>
            </div>
          </div>
          <div className='flex  col-span-3 flex-col mb-4 '>
            <div className=' w-[150px] mb-1'>Nhập mật khẩu</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input
                  value={formState.newPassword}
                  onChange={handleChange('newPassword')}
                  type='password'
                  className='w-full'
                  placeholder='Nhập mật khẩu'
                />
              </div>
            </div>
          </div>
          <div className='flex  col-span-3 flex-col mb-4 '>
            <div className=' w-[150px] mb-1'>Nhập lại mật khẩu</div>
            <div className='flex items-center flex-1 border rounded overflow-hidden'>
              <div className=' '></div>
              <div className='flex-1 p-1.5'>
                <input
                  type='password'
                  value={formState.confirmPassword}
                  onChange={handleChange('confirmPassword')}
                  className='w-full'
                  placeholder='Nhập lại mật khẩu'
                />
              </div>
            </div>
          </div>
          <button type='submit' className='bg-blue-400 rounded text-white font-medium w-max px-4 py-2'>
            Lưu
          </button>
        </form>
      </div>
    </div>
  )
}

export default ChangePassword
