'use client'

import { Button } from '@/components/ui/button'
import { useClipboard } from '@msa_cli/react-composable'
import { FaCopy } from 'react-icons/fa6'

export default function Dashboard() {
  const { copy, copied } = useClipboard()
  return (
    <div className="dark:text-white">
      <h4 className="font-bold mb-3">
        Welcome to documentation @msa_cli/react-composable
      </h4>
      <div>
        <h3 className="p-5 rounded-lg font-bold">Getting started</h3>
        <div className="p-5 rounded-lg ">
          A powerful and easy-to-use package providing composable utilities for
          React projects. This library is designed to simplify and enhance your
          React development workflow, and it is fully compatible with the latest
          versions of React and Next.js.
        </div>
      </div>
      <div>
        <h3 className="p-5 rounded-lg font-bold">Installation</h3>
        <div className="p-5 rounded-lg bg-gray-100 flex justify-between items-center">
          <div>
            <span>npm</span> install @msa_cli/react-composable
          </div>{' '}
          <Button
            onClick={() => copy('npm install @msa_cli/react-composable')}
            title="Copy code"
            variant={'ghost'}
          >
            {copied && 'copied'} <FaCopy />
          </Button>
        </div>
      </div>
      <div>
        <h3 className="p-5 rounded-lg font-bold">Usage Example</h3>
        <div className="p-5 rounded-lg ">
          Simply importing the functions you need from{' '}
          <span className="font-bold text-gray-600 bg-gray-100 p-1 rounded">
            @msa_cli/react-composable
          </span>
        </div>
        <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
          <code className="text-black">{`
'use client'
import { useIdle } from '@msa_cli/react-composable'
import { useTimestamp } from '@msa_cli/react-composable'

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
    </div>
  )
}
