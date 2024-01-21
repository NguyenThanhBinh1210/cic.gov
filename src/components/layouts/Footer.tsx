import { Link } from 'react-router-dom'
import logo from '~/assets/images/logo-lg.png'
import footer1 from '~/assets/images/handle_cert.png'
import ios from '~/assets/images/appstore_d.png'
import apk from '~/assets/images/chplay_d.png'
import logo2 from '~/assets/images/logo-xs.png'
const Footer = () => {
  return (
    <div className='bg-grayec pt-4 md:pt-10'>
      <div className='max-w-[1360px] mx-auto'>
        <div className='grid grid-cols-1 gap-4 lg:grid-cols-2 border-b pb-2 mb-4'>
          <div className='px-4'>
            <h3 className='uppercase my-4 font-bold text-gray61'>Thông tin liên hệ</h3>
            <ul>
              <li className='flex items-center leading-7'>
                <svg
                  className='w-4 h-4 mr-2 flex-shrink-0 text-gray-800 :text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 16 20'
                >
                  <path d='M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
                </svg>{' '}
                Trụ sở chính: Số 10 Quang Trung, Quận Hà Đông, Hà Nội, Việt Nam
              </li>
              <li className='flex items-center leading-7'>
                <svg
                  className='w-4 h-4 mr-2 flex-shrink-0 text-gray-800 :text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 16 20'
                >
                  <path d='M8 0a7.992 7.992 0 0 0-6.583 12.535 1 1 0 0 0 .12.183l.12.146c.112.145.227.285.326.4l5.245 6.374a1 1 0 0 0 1.545-.003l5.092-6.205c.206-.222.4-.455.578-.7l.127-.155a.934.934 0 0 0 .122-.192A8.001 8.001 0 0 0 8 0Zm0 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z' />
                </svg>{' '}
                Chi nhánh: Lầu 14 Vietcombank Tower, Số 5 - Công trường Mê Linh, P.Bến Nghé, Q.1, TP HCM
              </li>
              <li className='flex flex-col md:flex-row md:items-center gap-x-3 leading-7'>
                <div className='flex items-center leading-7'>
                  <svg
                    className='w-4 h-4 mr-2 flex-shrink-0 text-gray-800 :text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 20 16'
                  >
                    <path d='m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z' />
                    <path d='M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z' />
                  </svg>{' '}
                  htkh@creditinfo.org.vn
                </div>
                <div className='flex items-center leading-7'>
                  <svg
                    className='w-4 h-4 mr-2 flex-shrink-0 text-gray-800 :text-white'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='currentColor'
                    viewBox='0 0 19 18'
                  >
                    <path d='M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z' />
                  </svg>{' '}
                  Điện thoại hỗ trợ: 1800 585891
                </div>
              </li>
              <li className='flex items-center leading-7'>
                <svg
                  className='w-4 h-4 mr-2 flex-shrink-0 text-gray-800 :text-white'
                  aria-hidden='true'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  viewBox='0 0 18 20'
                >
                  <path d='M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z' />
                </svg>{' '}
                Fax: +8424 3382 4693 (Hà Nội) / +8428 3915 3680 (TP Hồ Chí Minh)
              </li>
            </ul>
          </div>
          <div className='px-4 flex flex-col  lg:items-end'>
            <img src={logo} alt='logo' className='w-full max-w-[524px] mb-4' />
            <div className='flex gap-3 md:gap-x-1 flex-wrap'>
              <Link to='/'>
                <img className='max-w-[150px] max-h-[60px]' src={footer1} alt='footer1' />
              </Link>
              <Link to='/'>
                <img className='max-w-[183px]' src={ios} alt='ios' />
              </Link>
              <Link to='/'>
                <img className='max-w-[183px]' src={apk} alt='apk' />
              </Link>
            </div>
          </div>
        </div>
        <div className='flex gapx-2 pb-4'>
          <img src={logo2} alt='logo2' className='h-[30px]' />
          <span>Hệ thống được hợp tác và phát triển bởi CIC và SoftDreams</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
