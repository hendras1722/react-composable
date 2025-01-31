'use client'
import { useDocumentVisibility } from '@msa_cli/react-composable'
import { useEffect, useRef } from 'react'

export default function MyComponent() {
  const startMessage = useRef('💡 Minimize the page or switch tab then return')
  const visibility = useDocumentVisibility()
  const message = useRef(startMessage.current)

  setTimeout(() => {
    message.current = startMessage.current
  }, 1000)

  useEffect(() => {
    if (visibility === 'visible' || visibility === 'hidden') {
      startMessage.current = '🎉 Welcome back!'
    }
    console.log(startMessage.current)
  }, [visibility])

  return <div>Document is currently: {message.current}</div>
}
