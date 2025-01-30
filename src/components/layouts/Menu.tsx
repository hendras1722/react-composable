'use client'

import { useRoute } from '@/composable/useRoute'
import MenuSidebar from '../MenuSidebar'
import {
  FaArrowDownWideShort,
  FaArrowsToCircle,
  FaArrowsUpDown,
  FaBahai,
  FaCalendarDays,
  FaCamera,
  FaChild,
  FaClipboard,
  FaClock,
  FaCmplid,
  FaCodePullRequest,
  FaComputer,
  FaComputerMouse,
  FaDatabase,
  FaDownLeftAndUpRightToCenter,
  FaFile,
  FaImage,
  FaJetFighterUp,
  FaNetworkWired,
  FaPlaneDeparture,
  FaRegBuilding,
  FaScroll,
  FaTarpDroplet,
} from 'react-icons/fa6'

export default function ListMenu() {
  const route = useRoute()
  const menu = [
    {
      name: 'Getting Started',
      href: '/admin/dashboard',
      icon: () => <FaPlaneDeparture />,
    },
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
    {
      name: 'timestamp',
      href: '/admin/timestamp',
      icon: () => <FaClock />,
    },
    {
      name: 'idle',
      href: '/admin/idle',
      icon: () => <FaChild />,
    },
    {
      name: 'Camera',
      href: '/admin/camera',
      icon: () => <FaCamera />,
    },
    {
      name: 'Device list',
      href: '/admin/devicelist',
      icon: () => <FaComputer />,
    },
    {
      name: 'Permission',
      href: '/admin/permission',
      icon: () => <FaArrowsToCircle />,
    },
    {
      name: 'UseInteractiveObserver',
      href: '/admin/interactive',
      icon: () => <FaArrowsUpDown />,
    },
    {
      name: 'Out Click Outside',
      href: '/admin/outclickoutside',
      icon: () => <FaJetFighterUp />,
    },
    {
      name: 'Mouse basic usage',
      href: '/admin/mouse',
      icon: () => <FaComputerMouse />,
    },
    {
      name: 'Mouse in Element',
      href: '/admin/mouseinelement',
      icon: () => <FaComputerMouse />,
    },
    {
      name: 'Animate',
      href: '/admin/Animate',
      icon: () => <FaBahai />,
    },
    {
      name: 'Object url',
      href: '/admin/objecturl',
      icon: () => <FaCmplid />,
    },
    {
      name: 'Image',
      href: '/admin/image',
      icon: () => <FaImage />,
    },
  ]
  return <MenuSidebar menu={menu} route={route} />
}
