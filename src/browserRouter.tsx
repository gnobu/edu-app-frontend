import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Root from './routes/root'
import ErrorPage from './components/ErrorPage'
import AccountRoute from './routes/account'
import LoginForm from './routes/login'
import SignupForm from './routes/signup'
import TestLayout from './routes/test'
import TestPage from './routes/test/$testId'
import TestForm from './routes/test/index'
import Dashboard from './routes/teacher'
import Overview, {loader as overviewLoader} from './routes/teacher/overview'
import LandingPage from './routes/LandingPage'
import Calendar from './routes/teacher/calendar'
import Courses from './routes/teacher/courses'
import DraftsLayout from './routes/teacher/drafts'
import Drafts, { loader as draftsLoader } from './routes/teacher/drafts/index'
import Draft, { loader as draftLoader } from './routes/teacher/drafts/$draftId'
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
          <Route index loader={overviewLoader} element={<Overview />} />
          <Route path='overview' loader={overviewLoader} element={<Overview />} />
          <Route path='calendar' element={<Calendar />} />
          <Route path='courses' element={<Courses />} />
          <Route path='drafts' element={<DraftsLayout />}>
            <Route index loader={draftsLoader} element={<Drafts />} />
            <Route path=':draftId' loader={draftLoader} element={<Draft />} />
          </Route>
          <Route path='profile' element={<Profile />} />
        </Route>
      </Route>
    </Route>
  )
)

export default router