'use client'

import { useRoute } from '@/composable/useRoute'
import MenuSidebar from '../MenuSidebar'
import {
  FaArrowDownWideShort,
  FaCalendarDays,
  FaClipboard,
  FaClock,
  FaCodePullRequest,
  FaComputerMouse,
  FaDatabase,
  FaDownLeftAndUpRightToCenter,
  FaFile,
  FaHouse,
  FaNetworkWired,
  FaRegBuilding,
  FaScroll,
  FaTable,
  FaTarpDroplet,
} from 'react-icons/fa6'

export default function ListMenu() {
  const route = useRoute()
  const menu = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: () => <FaHouse /> },
    {
      name: 'Draggable',
      href: '/admin/draggable',
      icon: () => <FaComputerMouse />,
    },
    {
      name: 'LocalStorage',
      href: '/admin/localstorage',
      icon: () => <FaDatabase />,
    },
    {
      name: 'Dropzone',
      href: '/admin/dropzone',
      icon: () => <FaTarpDroplet />,
    },
    {
      name: 'Base64',
      href: '/admin/base64',
      icon: () => <FaFile />,
    },
    {
      name: 'Debounce',
      href: '/admin/debounce',
      icon: () => <FaClock />,
    },
    {
      name: 'Format Date',
      href: '/admin/formatDate',
      icon: () => <FaCalendarDays />,
    },
    {
      name: 'Network',
      href: '/admin/network',
      icon: () => <FaNetworkWired />,
    },
    {
      name: 'Fetching Data',
      href: '/admin/fetch',
      icon: () => <FaDownLeftAndUpRightToCenter />,
    },
    {
      name: 'Element Bounding',
      href: '/admin/element',
      icon: () => <FaRegBuilding />,
    },
    {
      name: 'Scroll lock',
      href: '/admin/lockscreen',
      icon: () => <FaScroll />,
    },
    {
      name: 'Clipboard',
      href: '/admin/clipboard',
      icon: () => <FaClipboard />,
    },
    {
      name: 'State History',
      href: '/admin/stateHistory',
      icon: () => <FaCodePullRequest />,
    },
    {
      name: 'infinite scroll',
      href: '/admin/infinitescroll',
      icon: () => <FaArrowDownWideShort />,
    },
  ]
  return <MenuSidebar menu={menu} route={route} />
}
