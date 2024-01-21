import Footer from '~/components/layouts/Footer'
import Header from '~/components/layouts/Header'
import { LayoutPropsInterface } from '~/types/base.type'

const HomeLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default HomeLayout
