import HideSidebar from '../sidebar'

export default function Navbar() {
  return (
    <div
      id="sidebar_nav"
      className="grid grid-cols-[250px_1fr] duration-300 ease-in-out"
    >
      <div className="h-16 w-auto  border-b-2 border-gray-200 ">
        <nav
          id="navbar"
          className="py-3 px-5 flex justify-center items-center h-full"
        >
          <div>MSA CLI React Composable</div>
        </nav>
      </div>
      <div className="h-16 w-auto border-l-2 border-b-2 border-gray-200 flex items-center pl-5">
        <HideSidebar />
      </div>
    </div>
  )
}
