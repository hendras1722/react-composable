'use client'
import { useIdle } from '@/composable/useIdle'
import { useTimestamp } from '@/composable/useTimestamp'

export default function FormPage() {
  const { idle, lastActive } = useIdle(5000) // 5 seconds

  // With interval
  const now = useTimestamp({ interval: 1000 }) // Updates every second
  const idledFor = Math.floor((now - lastActive) / 1000)

  return (
    <div>
      For demonstration purpose, the idle timeout is set to 5s in this demo
      (default 1min).
      <div className="my-2 font-bold">Idle: {idle ? 'Yes' : 'No'}</div>
      <div className="font-bold">Last Active: {idledFor}</div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { useIdle } from '@/composable/useIdle'
import { useTimestamp } from '@/composable/useTimestamp'

export default function FormPage() {
  const { idle, lastActive } = useIdle(5000) // 5 seconds
   const now = useTimestamp({ interval: 1000 }) // Updates every second

  const idledFor = Math.floor((now - lastActive) / 1000)

  return (
    <div>
      For demonstration purpose, the idle timeout is set to 5s in this demo
      (default 1min).
      <div className="my-2 font-bold">Idle: {idle ? 'Yes' : 'No'}</div>
      <div className="font-bold">Last Active: {idledFor}</div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
