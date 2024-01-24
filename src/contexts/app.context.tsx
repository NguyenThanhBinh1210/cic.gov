/* eslint-disable react-refresh/only-export-components */
import { createContext, useState } from 'react'
import { Profile } from '~/types/auth.type'
import { clearLS, getAccessTokenFromLS, getProfileFromLS } from '~/utils/auth'

interface AppContextInterface {
  isAuthenticated: boolean
  setIsAuthenticated: React.Dispatch<React.SetStateAction<boolean>>
  profile: Profile | null
  setProfile: React.Dispatch<React.SetStateAction<Profile | null>>
  showSidebar: boolean
  setShowSidebar: React.Dispatch<React.SetStateAction<boolean>>
  reset: () => void
}
export const getInitialAppContext: () => AppContextInterface = () => ({
  isAuthenticated: Boolean(getAccessTokenFromLS()),
  setIsAuthenticated: () => null,
  profile: getProfileFromLS(),
  setProfile: () => null,
  showSidebar: false,
  setShowSidebar: () => null,
  reset: () => null
})
const initialAppContext = getInitialAppContext()

export const AppContext = createContext<AppContextInterface>(initialAppContext)

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(initialAppContext.isAuthenticated)
  const [profile, setProfile] = useState<Profile | null>(initialAppContext.profile)
  const [showSidebar, setShowSidebar] = useState(false)

  const reset = () => {
    setIsAuthenticated(false)
    setProfile(null)
    clearLS()
  }
  return (
    <AppContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        profile,
        setProfile,
        reset,
        showSidebar,
        setShowSidebar
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
