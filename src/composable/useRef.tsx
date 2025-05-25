import { useRef, useReducer } from 'react'

export function useReactive<T extends object>(initialValue: T) {
  const ref = useRef(initialValue)
  const [, forceUpdate] = useReducer((x) => x + 1, 0)

  // Proxy untuk melacak perubahan
  const proxy = new Proxy(ref.current, {
    set(target, property, value) {
      target[property] = value // Ubah nilai
      forceUpdate() // Pemicu render ulang
      return true // Penting untuk Proxy
    },
  })

  return proxy // Kembalikan Proxy, BUKAN ref.current
}
