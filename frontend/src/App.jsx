import React from 'react'
import Allpages from './components/Allpages'
import { BrowserRouter,Route,Routes } from 'react-router'
import Anav from './admin-components/Anav'
import Login from './admin-components/Login'
import Protected from './admin-components/Protected'
import Acourse from './admin-components/Acourse'
import Ateachers from './admin-components/Ateachers'
import Aannouncements from './admin-components/Aannouncement'
const App = () => {
  return (
    <div className='overflow-x-hidden'>
      < BrowserRouter>
   <Routes>
    <Route path='/' element={<Allpages/>} />
    <Route path='/admin' element={<Protected><Anav/><Acourse /></Protected>}/>
    <Route path='/admin/teacher' element={<Protected><Anav/><Ateachers /></Protected>}/>
    <Route path='/admin/announcement' element={<Protected><Anav/><Aannouncements /></Protected>}/>
  
    <Route path='/admin/login' element={<Login/>}/>
   </Routes>
   </BrowserRouter>
    </div>
 
  )
}

export default App