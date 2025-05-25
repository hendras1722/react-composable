'use client'
import { useIdlePage } from '@/composable/useIdleDetector'
import { useIdle, useTimestamp } from '@msa_cli/react-composable'

export default function FormPage() {
  const { idle, lastActive } = useIdle(5000) // 5 seconds

  const { isIdle, isSystemIdle } = useIdlePage({
    idleTimeout: 5000, // 5 seconds of inactivity
    syncInterval: 2000, // Check every 2 seconds
    onIdleChange: (idle) => {
      console.log('System idle state changed:', idle)
    },
  })

  // With interval
  const now = useTimestamp({ interval: 1000 }) // Updates every second
  const idledFor = Math.floor((now - lastActive) / 1000)

  return (
    <div>
      For demonstration purpose, the idle timeout is set to 5s in this demo
      (default 1min).
      <div className="my-2 font-bold">Idle: {idle ? 'Yes' : 'No'}</div>
      <div className="font-bold">Last Active: {idledFor}</div>
      <div className="mt-5">
        using idle different tab activity, pls open tab browser using this page
        <div>
          <p className="my-3">
            <b>Current Tab Idle:</b> {isIdle ? 'Yes' : 'No'}
          </p>
          <p className="my-3">
            <b>System Idle (All Tabs):</b> {isSystemIdle ? 'Yes' : 'No'}
          </p>
          <p className="mt-2">
            (Move your mouse or type something to reset the timer. Open in
            multiple tabs to test the system-wide idle state.)
          </p>
        </div>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { useIdle, useTimestamp } from '@msa_cli/react-composable'

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
