'use client'

import ArrayMap from '@/components/ArrayMap'
import { useInfiniteScroll } from '@msa_cli/react-composable'
import { useRef, useState } from 'react'

export default function MyComponent() {
  const [data, setData] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ])
  const containerRef = useRef<HTMLDivElement>(null)

  const { isLoading } = useInfiniteScroll(
    containerRef,
    async (state) => {
      // Load more data here
      setData((prevState) => [...prevState, prevState.length + 1])
    },
    {
      distance: 50,
      direction: 'bottom',
    }
  )

  return (
    <div>
      <div
        ref={containerRef}
        className="overflow-auto text-lg"
        style={{ height: '400px', overflow: 'auto' }}
      >
        <ArrayMap
          of={data}
          render={(item) => (
            <div className="border border-black first:mt-0 mt-2 p-3 bg-blue-500 text-white">
              {item}
            </div>
          )}
        />
        {isLoading && 'loading..'}
      </div>

      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import ArrayMap from '@/components/ArrayMap'
import { Button } from '@/components/ui/button'
import { useInfiniteScroll } from from '@msa_cli/react-composable'
import { useRef, useState } from 'react'

export default function MyComponent() {
  const [data, setData] = useState<number[]>([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15,
  ])
  const containerRef = useRef<HTMLDivElement>(null)

  const { isLoading } = useInfiniteScroll(
    containerRef,
    async (state) => {
      // Load more data here
      setData((prevState) => [...prevState, prevState.length + 1])
    },
    {
      distance: 50,
      direction: 'bottom',
    }
  )

  return (
    <div>
      <div
        ref={containerRef}
        className="overflow-auto text-lg"
        style={{ height: '400px', overflow: 'auto' }}
      >
        <ArrayMap
          of={data}
          render={(item) => (
            <div className="border border-black first:mt-0 mt-2 p-3 bg-blue-500 text-white">
              {item}
            </div>
          )}
        />
        {isLoading && 'loading..'}
      </div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
