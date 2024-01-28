import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

const ScrollToTop = () => {
  // const [showButton, setShowButton] = useState<boolean>(false)
  const { pathname } = useLocation()

  const handleScroll = () => {
    if (window.scrollY > 300) {
      // setShowButton(true)
    } else {
      // setShowButton(false)
    }
  }
  useEffect(() => {
    window.scrollTo({
      top: 0
    })
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [pathname])

  return null
}

export default ScrollToTop
