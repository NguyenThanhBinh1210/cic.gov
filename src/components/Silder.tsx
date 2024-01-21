/* eslint-disable @typescript-eslint/no-explicit-any */
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const Sliders = ({ children, width }: any) => {
  const settings = {
    // dots: true, // Hiển thị dấu chấm điều hướng
    infinite: true, // Vô hạn lặp lại slider
    speed: 500, // Tốc độ trượt (milliseconds)
    slidesToShow: 9, // Số lượng ảnh hiển thị cùng lúc
    slidesToScroll: 2, // Số lượng ảnh trượt khi bạn kéo,
    prevArrow: <SampleNextArrow></SampleNextArrow>,
    nextArrow: <SamplePrevArrow></SamplePrevArrow>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 6,
          slidesToScroll: 2,
          infinite: true,
          initialSlide: 6
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          initialSlide: 3
        }
      }
    ]
  }

  return (
    <div style={{ width: `${width}%` }} className={`mx-auto  md:px-4`}>
      <Slider {...settings}>{children}</Slider>
    </div>
  )
}
function SampleNextArrow(props: any) {
  const { onClick } = props
  return (
    <div
      className={` absolute cursor-pointer -left-2 z-10 p-2 -translate-y-1/2 top-1/2 rounded-full bg-[#ffffffa6]  w-[40px] h-[40px] flex items-center justify-center`}
      onClick={onClick}
    >
      <svg
        className='w-6 h-6 text-gray-800 :text-white'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 8 14'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13'
        />
      </svg>
    </div>
  )
}

function SamplePrevArrow(props: any) {
  const { onClick } = props
  return (
    <div
      className={` absolute cursor-pointer rotate-180  -right-5 p-2 -translate-y-1/2 top-1/2 rounded-full bg-[#ffffffa6]  w-[40px] h-[40px] flex items-center justify-center`}
      onClick={onClick}
    >
      <svg
        className='w-6 h-6 text-gray-800 :text-white'
        aria-hidden='true'
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 8 14'
      >
        <path
          stroke='currentColor'
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeWidth='2'
          d='M7 1 1.3 6.326a.91.91 0 0 0 0 1.348L7 13'
        />
      </svg>
    </div>
  )
}
export default Sliders
