import { Navigate, Outlet, useRoutes } from 'react-router-dom'
import NotFound from '~/pages/NotFound'
import Register from '~/pages/Register'
import Login from '~/pages/Login'
import { AppContext } from '~/contexts/app.context'
import LoginLayout from '~/layouts/LoginLayout'
import HomeLayout from '~/layouts/HomeLayout'
import Home from '~/pages/Home'
import { useContext } from 'react'
import LoanPack from '~/pages/LoanPack'
import CardPack from '~/pages/CardPack'
import Report from '~/pages/Report'
import CreditRatting from '~/pages/CreditRatting'
import CreateCardPack from '~/pages/CreateCardPack'
import CreateLoanPack from '~/pages/CreateLoanPack'
import ChangePassword from '~/pages/ChangePassword'
import ProfileLayout from '~/layouts/ProfileLayout'
import Settings from '~/pages/Settings'
import QuanLy from '~/pages/QuanLy'
import OpenCard from '~/pages/OpenCard'

const useRouteElements = () => {
  function ProtecedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to='login' />
  }
  function RejectedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  }
  const routeElements = useRoutes([
    {
      path: '',
      element: <RejectedRoute />,
      children: [
        {
          path: 'login',
          element: (
            <LoginLayout>
              <Login />
            </LoginLayout>
          )
        },
        {
          path: 'register',
          element: (
            <HomeLayout>
              <Register />
            </HomeLayout>
          )
        }
      ]
    },
    {
      path: '',
      element: <ProtecedRoute />,
      children: [
        {
          path: '/profile/password',
          element: (
            <ProfileLayout>
              <ChangePassword />
            </ProfileLayout>
          )
        },
        {
          path: '/profile/settings',
          element: (
            <ProfileLayout>
              <Settings />
            </ProfileLayout>
          )
        },
        {
          path: '/profile/loan-demand',
          element: (
            <ProfileLayout>
              <QuanLy />
            </ProfileLayout>
          )
        },
        {
          path: '/open-card',
          element: (
            <ProfileLayout>
              <OpenCard />
            </ProfileLayout>
          )
        }
      ]
    },
    {
      path: '/',
      index: true,
      element: (
        <HomeLayout>
          <Home />
        </HomeLayout>
      )
    },
    {
      path: '/loan-pack',
      element: (
        <HomeLayout>
          <LoanPack />
        </HomeLayout>
      )
    },
    {
      path: '/card-pack',
      element: (
        <HomeLayout>
          <CardPack />
        </HomeLayout>
      )
    },
    {
      path: '/report',
      element: (
        <HomeLayout>
          <Report />
        </HomeLayout>
      )
    },
    {
      path: '/credit-ratting',
      element: (
        <HomeLayout>
          <CreditRatting />
        </HomeLayout>
      )
    },
    {
      path: '/card-pack/create',
      element: (
        <HomeLayout>
          <CreateCardPack />
        </HomeLayout>
      )
    },
    {
      path: '/loan-pack/create',
      element: (
        <HomeLayout>
          <CreateLoanPack />
        </HomeLayout>
      )
    },
    {
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
