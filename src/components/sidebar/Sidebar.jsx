import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  FaHome,
  FaMusic,
  FaHeart,
  FaUser,
  FaInfoCircle
} from 'react-icons/fa'

const Sidebar = () => {
  const menus = [
    { name: 'Home', path: '/', icon: <FaHome /> },
    { name: 'Player', path: '/player', icon: <FaMusic /> },
    { name: 'Favorites', path: '/favourites', icon: <FaHeart /> },
    { name: 'Profile', path: '/profile', icon: <FaUser /> },
    { name: 'About', path: '/about', icon: <FaInfoCircle /> },
  ]

  return (
    <div
      className="p-4 rounded-5 shadow-sm d-flex flex-column"
      style={{
        background: '#E3ECFF',
        minHeight: '95vh'
      }}
    >
      <div className="mb-5">
        <h2
          className="fw-bold mb-1"
          style={{ color: '#5A7FD8' }}
        >
          MoodMusic
        </h2>

        <small className="text-secondary">
          Feel Every Beat 🎧
        </small>
      </div>

      {menus.map((menu) => (
        <NavLink
          key={menu.name}
          to={menu.path}
          className={({ isActive }) =>
            `text-decoration-none d-flex align-items-center rounded-4 px-3 py-3 mb-2 ${
              isActive ? 'text-white' : 'text-dark'
            }`
          }
          style={({ isActive }) => ({
            background: isActive ? '#7EA9F8' : '#F8FAFF'
          })}
        >
          <span className="me-3 fs-5">{menu.icon}</span>
          <span className="fw-semibold">{menu.name}</span>
        </NavLink>
      ))}

     
        
      </div>
    
  )
}

export default Sidebar