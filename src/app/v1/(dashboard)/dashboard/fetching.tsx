// Page.tsx atau di mana pun komponen Anda berada
import { useEffect, useState } from 'react'
import { useReactive } from '@/composable/useRef'
import { createFetch, useFetch } from '@/composable/usFetch'

export function Fetching() {
  const [isHydrated, setIsHydrated] = useState(false)
  const [page, setPage] = useState(1) // Ganti useReactive dengan useState

  const { data } = useFetch<{
    // Hapus execute disini
    userId: number
    id: number
    title: string
    completed: boolean
  }>(`https://jsonplaceholder.typicode.com/todos/${page}`) // Gunakan template literal, kirim page disini

  const [dataState, setDataState] = useState<{
    userId: number
    id: number
    title: string
    completed: boolean
  }>({ userId: 0, id: 0, title: '', completed: false })

  useEffect(() => {
    if (data) {
      setDataState(data)
    }
  }, [data])

  const handleClick = () => {
    setPage((prevPage) => prevPage + 1) // Update state dengan function update, HAPUS AWAIT EXECUTE DISINI
  }

  useEffect(() => {
    setIsHydrated(true)
  }, [])

  if (!isHydrated) {
    return <div>Loading...</div>
  }

  return (
    <div>
      <div>{JSON.stringify(dataState)}</div>
      <button onClick={handleClick}>Next</button>
    </div>
  )
}
