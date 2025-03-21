import type { Metadata } from 'next'
import Navbar from '@/components/layouts/Navbar'
import ListMenu from '@/components/layouts/Menu'
import Body from '@/components/layouts/Body'

export const metadata: Metadata = {
  title: 'React Composable',
  description: 'package react or next for support your project',
}

export default function RootLayoutAdmin({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // <html lang="en" suppressHydrationWarning>
    //   <body className={`${poppins.variable} antialiased`}>
    <Body>
      <Navbar />
      <div
        id="sidebar_menu"
        className="grid grid-cols-[250px_1fr] h-[calc(100vh-65px)] duration-300 ease-in-out"
      >
        <div className="w-full overflow-y-auto overflow-x-hidden">
          <ListMenu />
        </div>
        <div className="h-full w-full bg-white border-l-2 border-gray-200 relative z-10 p-5 overflow-y-auto dark:bg-black dark:shadow-white dark:shadow-lg dark:border-white">
          <div className="shadow-md p-5 rounded-lg">{children}</div>
        </div>
      </div>
    </Body>
    //   </body>
    // </html>
  )
}
