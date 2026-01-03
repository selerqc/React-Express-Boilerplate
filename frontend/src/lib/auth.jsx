import { createContext, useContext, useState, useCallback, useEffect } from 'react'
import { api } from './api-client'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {

    api.get('/auth/me')
      .then(data => setUser(data.user))
      .catch(() => {
        setUser(null)
      })
      .finally(() => setIsLoading(false))
  }, [])

  const login = useCallback(async (credentials) => {
    const data = await api.post('/auth/login', credentials)
    setUser(data.user)
    return data
  }, [])

  const register = useCallback(async (userData) => {
    const data = await api.post('/auth/register', userData)
    setUser(data.user)
    return data
  }, [])

  const logout = useCallback(async () => {
    await api.post('/auth/logout')
    setUser(null)
  }, [])

  const value = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    register,
    logout,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export function useUser() {
  const { user } = useAuth()
  return user
}

