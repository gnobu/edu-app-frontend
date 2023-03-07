import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './error-page'
import AccountRoute from './routes/account'
import LoginForm from './routes/login'
import SignupForm from './routes/signup'
import TestLayout from './routes/test'
import TestPage from './routes/test/$testId'
import TestForm from './routes/test/index'
import Dashboard from './routes/teacher'
import Overview from './routes/teacher/overview'
import LandingPage from './routes/LandingPage'
import Calendar from './routes/teacher/calendar'
import Courses from './routes/teacher/courses'
import Drafts, { loader as draftsLoader } from './routes/teacher/drafts'
import Profile from './routes/teacher/profile'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />} errorElement={<ErrorPage />} >
      <Route index element={<LandingPage />} />
      <Route path='getin' element={<AccountRoute />} />
      <Route path='login' element={<LoginForm />} />
      <Route path='signup' element={<SignupForm />} />
      <Route path='test' element={<TestLayout />}>
        <Route index element={<TestForm />} />
        <Route path=':testId' element={<TestPage />} />
      </Route>
      <Route path='teacher' element={<Dashboard />}>
        <Route errorElement={<ErrorPage />} >
          <Route index element={<Overview />} />
          <Route path='overview' element={<Overview />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='courses' element={<Courses />} />
          <Route path='drafts' loader={draftsLoader} element={<Drafts />} />
          <Route path='profile' element={<Profile />} />
        </Route>
      </Route>
    </Route>
  )
)

export default router