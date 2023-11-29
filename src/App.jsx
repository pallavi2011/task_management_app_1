// import { useState } from 'react'
import './App.css'
import Sidebar from './components/sidebar/Sidebar';
import Tasks from './components/tasks/Tasks'

function App() {
  return (
    <div className='app'>
         <Sidebar/>
         <Tasks/>
    </div>
  )
}

export default App
