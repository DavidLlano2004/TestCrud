import { HashRouter, Route, Routes } from 'react-router-dom'
import { paths } from './routes/paths'
import { Login } from './pages/Login/Login'
import { TemplateApp } from './pages/TemplateApp/TemplateApp'
import { Register } from './pages/Register/Register'
import { TemplateHomeApp } from './pages/TemplateHomeApp/TemplateHomeApp'
import { Profile } from './pages/TemplateHomeApp/Profile/Profile'
import { TemplateUsers } from './pages/TemplateHomeApp/Users/TemplateUsers'
import { ViewUsers } from './pages/TemplateHomeApp/Users/ViewUsers/ViewUsers'
import { CreateUsers } from './pages/TemplateHomeApp/Users/CreateUsers/CreateUsers'
import { EditUsers } from './pages/TemplateHomeApp/Users/EditUsers/EditUsers'

function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path={paths.TEMPLATEAPP} element={<TemplateApp />}>
          <Route path={paths.LOGIN} element={<Login />} />
          <Route path={paths.REGISTER} element={<Register />} />
        </Route>
        <Route path={paths.TEMPLATEHOMEAPP} element={<TemplateHomeApp />}>
          <Route path={paths.PROFILE} element={<Profile />} />
          <Route path={paths.ADMIN} element={<TemplateUsers />}>
            <Route path={paths.VIEWUSERS} element={<ViewUsers />} />
            <Route path={paths.CREATEUSERS} element={<CreateUsers />} />
            <Route path={paths.EDITUSERS} element={<EditUsers />} />

          </Route>
        </Route>

      </Routes>
    </HashRouter>
  )
}

export default App
