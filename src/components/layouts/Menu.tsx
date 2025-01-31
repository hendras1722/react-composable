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
      href: '/v1/dashboard',
      icon: () => <FaPlaneDeparture />,
    },
    {
      name: 'Draggable',
      href: '/v1/draggable',
      icon: () => <FaComputerMouse />,
    },
    {
      name: 'LocalStorage',
      href: '/v1/localstorage',
      icon: () => <FaDatabase />,
    },
    {
      name: 'Dropzone',
      href: '/v1/dropzone',
      icon: () => <FaTarpDroplet />,
    },
    {
      name: 'Base64',
      href: '/v1/base64',
      icon: () => <FaFile />,
    },
    {
      name: 'Debounce',
      href: '/v1/debounce',
      icon: () => <FaClock />,
    },
    {
      name: 'Format Date',
      href: '/v1/formatDate',
      icon: () => <FaCalendarDays />,
    },
    {
      name: 'Network',
      href: '/v1/network',
      icon: () => <FaNetworkWired />,
    },
    {
      name: 'Fetching Data',
      href: '/v1/fetch',
      icon: () => <FaDownLeftAndUpRightToCenter />,
    },
    {
      name: 'Element Bounding',
      href: '/v1/element',
      icon: () => <FaRegBuilding />,
    },
    {
      name: 'Scroll lock',
      href: '/v1/lockscreen',
      icon: () => <FaScroll />,
    },
    {
      name: 'Clipboard',
      href: '/v1/clipboard',
      icon: () => <FaClipboard />,
    },
    {
      name: 'State History',
      href: '/v1/stateHistory',
      icon: () => <FaCodePullRequest />,
    },
    {
      name: 'infinite scroll',
      href: '/v1/infinitescroll',
      icon: () => <FaArrowDownWideShort />,
    },
    {
      name: 'timestamp',
      href: '/v1/timestamp',
      icon: () => <FaClock />,
    },
    {
      name: 'idle',
      href: '/v1/idle',
      icon: () => <FaChild />,
    },
    {
      name: 'Camera',
      href: '/v1/camera',
      icon: () => <FaCamera />,
    },
    {
      name: 'Device list',
      href: '/v1/devicelist',
      icon: () => <FaComputer />,
    },
    {
      name: 'Permission',
      href: '/v1/permission',
      icon: () => <FaArrowsToCircle />,
    },
    {
      name: 'UseInteractiveObserver',
      href: '/v1/interactive',
      icon: () => <FaArrowsUpDown />,
    },
    {
      name: 'Out Click Outside',
      href: '/v1/outclickoutside',
      icon: () => <FaJetFighterUp />,
    },
    {
      name: 'Mouse basic usage',
      href: '/v1/mouse',
      icon: () => <FaComputerMouse />,
    },
    {
      name: 'Mouse in Element',
      href: '/v1/mouseinelement',
      icon: () => <FaComputerMouse />,
    },
    {
      name: 'Animate',
      href: '/v1/Animate',
      icon: () => <FaBahai />,
    },
    {
      name: 'Object url',
      href: '/v1/objecturl',
      icon: () => <FaCmplid />,
    },
    {
      name: 'Image',
      href: '/v1/image',
      icon: () => <FaImage />,
    },
  ]
  return <MenuSidebar menu={menu} route={route} />
}
