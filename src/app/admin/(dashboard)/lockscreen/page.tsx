'use client'

import { Button } from '@/components/ui/button'
import { useScreenlock } from '@msa_cli/react-composable'
import { useRef } from 'react'

export default function Lockscreen() {
  const containter = useRef<HTMLDivElement | null>(null)
  const [isLocked, setIsLocked] = useScreenlock(containter)
  return (
    <div>
      <div
        ref={containter}
        className="flex items-center justify-center h-40 overflow-auto "
      >
        <div>lockscreen</div>
        <div className="mt-52">Element</div>
      </div>
      {(isLocked && 'Screen is locked') || 'Screen is unlocked'}
      <Button onClick={() => setIsLocked(true)} className="mx-5">
        Lock Screen
      </Button>
      <Button onClick={() => setIsLocked(false)}>Unlock Screen</Button>

      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-300 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { Button } from '@/components/ui/button'
import { useScreenlock } from '@msa_cli/react-composable'
import { useRef } from 'react'

export default function Lockscreen() {
  const containter = useRef<HTMLDivElement | null>(null)
  const [isLocked, setIsLocked] = useScreenlock(containter)
  return (
    <div>
      <div
        ref={containter}
        className="flex items-center justify-center h-40 overflow-auto "
      >
        <div>lockscreen</div>
        <div className="mt-52">Element</div>
      </div>
      {(isLocked && 'Screen is locked') || 'Screen is unlocked'}
      <Button onClick={() => setIsLocked(true)} className="mx-5">
        Lock Screen
      </Button>
      <Button onClick={() => setIsLocked(false)}>Unlock Screen</Button>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
