/* eslint-disable @typescript-eslint/no-explicit-any */
import { useContext, useState } from 'react'
import { useMutation } from 'react-query'
import { useNavigate } from 'react-router-dom'
import { loginAccount } from '~/apis/auth.api'
import { AppContext } from '~/contexts/app.context'

const Login = () => {
  const { setIsAuthenticated, setProfile } = useContext(AppContext)
  const [showPass, setShowPass] = useState(false)
  const initialFromState = {
    username: '',
    password: ''
  }
  const [formState, setFormState] = useState(initialFromState)
  const handleChange = (name: any) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormState((prev) => ({ ...prev, [name]: event.target.value }))
  }
  const mutationLogin = useMutation((body: any) => {
    return loginAccount(body)
  })
  const navigate = useNavigate()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    mutationLogin.mutate(formState, {
      onSuccess: (dataUser) => {
        setIsAuthenticated(true)
        setProfile(dataUser.data.user)
        navigate('/')
      },
      onError: (err: any) => {
        alert(err?.response.data.errMessage)
      }
    })
  }
  return (
    <div className='w-full h-screen flex items-center justify-center'>
      <div className='max-w-[500px] w-full mx-auto px-3 '>
        <h2 className='text-[28px] leading-8 text-center max-w-[400px] mx-auto font-medium'>
          TRANG QUẢN LÝ NHU CẦU TÍN DỤNG KHÁCH HÀNG VAY
        </h2>
        <h3 className='text-[#414069] text-lg text-center font-medium my-2'>DÙNG CHO KHÁCH HÀNG</h3>
        <h4 className='text-[#a1a1a1] text-[20px] text-center '>Đăng nhập</h4>
        <form action='' onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='name'>Tên tài khoản</label>
            <div className='p-2 border rounded-md mt-2'>
              <input
                id='name'
                type='text'
                value={formState.username}
                onChange={handleChange('username')}
                placeholder='Nhập tên tài khoản của quý khách'
                className='text-base w-full'
              />
            </div>
          </div>
          <div className='mb-3'>
            <label htmlFor='password'>Mật khẩu</label>
            <div className='p-2 border rounded-md mt-2 flex items-center justify-between'>
              <input
                id='password'
                type={showPass ? 'text' : 'password'}
                placeholder='Nhập mật khẩu của quý khách'
                className='text-base w-full'
                value={formState.password}
                onChange={handleChange('password')}
              />
              <button onClick={() => setShowPass(!showPass)} type='button' className='border-l px-2'>
                {showPass ? (
                  <svg
                    className='w-4 h-4 text-gray-800 '
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                  >
                    <path d='m2 13.587 3.055-3.055A4.913 4.913 0 0 1 5 10a5.006 5.006 0 0 1 5-5c.178.008.356.026.532.054l1.744-1.744A8.973 8.973 0 0 0 10 3C4.612 3 0 8.336 0 10a6.49 6.49 0 0 0 2 3.587Z' />
                    <path d='m12.7 8.714 6.007-6.007a1 1 0 1 0-1.414-1.414L11.286 7.3a2.98 2.98 0 0 0-.588-.21l-.035-.01a2.981 2.981 0 0 0-3.584 3.583c0 .012.008.022.01.033.05.204.12.401.211.59l-6.007 6.007a1 1 0 1 0 1.414 1.414L8.714 12.7c.189.091.386.162.59.211.011 0 .021.007.033.01a2.981 2.981 0 0 0 3.584-3.584c0-.012-.008-.023-.011-.035a3.05 3.05 0 0 0-.21-.588Z' />
                    <path d='M17.821 6.593 14.964 9.45a4.952 4.952 0 0 1-5.514 5.514L7.665 16.75c.767.165 1.55.25 2.335.251 6.453 0 10-5.258 10-7 0-1.166-1.637-2.874-2.179-3.407Z' />
                  </svg>
                ) : (
                  <svg
                    className='w-4 h-4 text-gray-800 '
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 14'
                  >
                    <path d='M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
                  </svg>
                )}
              </button>
            </div>
          </div>
          {/* <Link to='/' className='text-[#007bff] text-right block hover:text-[#0051ff]'>
            Quý khách quên mật khẩu ?
          </Link> */}
          <button
            type='submit'
            className='block bg-[#007bff] text-white transition-all text-base w-full py-2 rounded-md mt-3 mb-3 hover:bg-[#0956fb]'
          >
            Đăng nhập
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
