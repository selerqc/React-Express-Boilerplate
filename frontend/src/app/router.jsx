import { Routes, Route } from 'react-router-dom'
import { Suspense, lazy } from 'react'
import { MainLayout } from '../components/layouts/MainLayout'
import { Spinner } from '../components/ui/Spinner'

const LandingPage = lazy(() => import('../features/auth/components/LandingPage'))
const LoginPage = lazy(() => import('../features/auth/components/LoginPage'))
const RegisterPage = lazy(() => import('../features/auth/components/RegisterPage'))
const DashboardPage = lazy(() => import('../features/auth/components/DashboardPage'))

export function AppRouter() {
  return (
    <Suspense fallback={<Spinner />}>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route element={<MainLayout />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </Suspense>
  )
}
