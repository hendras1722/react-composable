'use client'

import { useState } from 'react'
import { FaAlignJustify } from 'react-icons/fa6'
import { version } from '../../package.json'

export default function HideSidebarButton() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  const hideSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState)
    const sidebar = document.getElementById('sidebar_nav')
    const menu = document.getElementById('sidebar_menu')
    const navbar = document.getElementById('navbar')
    if (isSidebarOpen) {
      if (sidebar && menu && navbar) {
        navbar.classList.add('translate-x-[-255px]')
        navbar.classList.remove('translate-x-0')
        menu.classList.remove('grid-cols-[255px_1fr]')
        menu.classList.add('grid-cols-[70px_1fr]')
        sidebar.classList.remove('grid-cols-[255px_1fr]')
        sidebar.classList.add('grid-cols-[70px_1fr]')
      }
    } else if (sidebar && menu && navbar) {
      navbar.classList.add('translate-x-0')
      navbar.classList.remove('translate-x-[-255px]')

      menu.classList.remove('grid-cols-[70px_1fr]')
      menu.classList.add('grid-cols-[255px_1fr]')
      sidebar.classList.remove('grid-cols-[70px_1fr]')
      sidebar.classList.add('grid-cols-[255px_1fr]')
    }
  }

  return (
    <div className="flex gap-3 items-center">
      <button onClick={hideSidebar} className="p-2 bg-gray-200 rounded">
        <FaAlignJustify />
      </button>
      <span className="font-bold">v{version}</span>
    </div>
  )
}
