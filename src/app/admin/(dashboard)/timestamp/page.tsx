'use client'

import { useTimestamp } from from '@msa_cli/react-composable'

export default function Timestamp() {
  const timestamp = useTimestamp()
  return (
    <div>
      <div className="p-3 bg-gray-500/10 rounded">
        timestamp: {timestamp.toString()}
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { useTimestamp } from from '@msa_cli/react-composable'

export default function Timestamp() {
  const timestamp = useTimestamp()
  // Basic usage
  // const timestamp = useTimestamp()

  // With controls
  // const { timestamp, pause, resume, isActive } = useTimestamp({
  //   controls: true,
  // })

  // With interval
  const now = useTimestamp({ interval: 1000 }) // Updates every second

  // With callback
  // const timestamp = useTimestamp({
  //   callback: (ts) => console.log('New timestamp:', ts),
  // })
  return (
    <div>
      <div>timestamp: {timestamp.toString()}</div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
