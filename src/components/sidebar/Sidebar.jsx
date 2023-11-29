import React from 'react';
import './Sidebar.css';
import menu from '../../utils/menu';


const Sidebar = () => {
  
  return (
    <div className='sidebar'>
     <div className="profile">
     <div className="profile-overlay"></div>
     <div className="image">
          <img width={70} height={70} src="../../../public/assets/avatar1.png" alt="profile" />
      </div>
      <h1>
        <span>John</span>
        <span>Doe</span></h1>
     </div>
     <ul className='nav-items'>
      {menu.map((item, index) => {
        return <li key={index} className='nav-item'>{item.icon}
        <a href={item.path}>{item.title}</a>
        </li>
      })}
     </ul>
      
      
     
    </div>
  )
}

export default Sidebar