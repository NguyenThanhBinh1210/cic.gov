import Header from '~/components/layouts/Header'
import Sidebar from '~/components/layouts/Sidebar'
import { LayoutPropsInterface } from '~/types/base.type'

const ProfileLayout = ({ children }: LayoutPropsInterface) => {
  return (
    <div>
      <Header></Header>
      <div className='flex'>
        <Sidebar></Sidebar>
        <div className='flex-1'>{children}</div>
      </div>
    </div>
  )
}

export default ProfileLayout
