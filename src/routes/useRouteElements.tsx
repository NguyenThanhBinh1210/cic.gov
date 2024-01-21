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

const useRouteElements = () => {
  function ProtecedRoute() {
    const { isAuthenticated } = useContext(AppContext)
    return isAuthenticated ? <Outlet /> : <Navigate to='login' />
  }
  // function RejectedRoute() {
  //   const { isAuthenticated } = useContext(AppContext)
  //   return !isAuthenticated ? <Outlet /> : <Navigate to='/' />
  // }
  const routeElements = useRoutes([
    {
      path: '',
      element: <ProtecedRoute />,
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
          path: '/',
          index: true,
          element: (
            <HomeLayout>
              <Home />
            </HomeLayout>
          )
        }
      ]
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
      path: '*',
      element: <NotFound />
    }
  ])

  return routeElements
}
export default useRouteElements
