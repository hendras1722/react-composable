'use client'
import ArrayMap from '@/components/ArrayMap'
import { useFetch, useVirtualList } from '@msa_cli/react-composable'
import { useEffect } from 'react'

export interface JSONDummy {
  name: string
  language: string
  id: string
  bio: string
  version: number
}

export default function VirtualListExample() {
  const {
    data,
    error,
    isLoading: isFetching,
    mutate: execute,
  } = useFetch<JSONDummy[]>(
    'https://microsoftedge.github.io/Demos/json-dummy-data/1MB.json',
    {},
    {
      revalidateOnFocus: true,
      errorRetryCount: 3,
    }
  )
  const longList = Array.from({ length: 100000 }, (_, i) => {
    return {
      name: "I'm is " + i,
      language: 'language ' + i,
      id: i,
      bio: 'Bio ' + i,
      version: Math.random(),
    }
  })
  const addData = (data && [...data, ...longList]) || []
  useEffect(() => {
    execute()
  }, [])

  const {
    ref,
    handleScroll,
    items: visibleItems,
    startIndex,
    styleContainer,
    styleList,
    bottomPadding,
  } = useVirtualList(addData, {
    overscan: 20,
    containerHeight: window.innerHeight - 500,
  })

  if (isFetching && !data) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <div ref={ref} onScroll={handleScroll} style={styleContainer}>
        <div style={{ ...styleList, paddingBottom: bottomPadding + 10 }}>
          <ArrayMap
            of={visibleItems}
            render={(item, index) => (
              <div key={startIndex + index} className="py-4 first:pt-0">
                <div>{item.name}</div>
                <div>
                  {item.id} + {index}
                </div>
              </div>
            )}
          />
        </div>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import ArrayMap from '@/components/ArrayMap'
import { useVirtualList } from '@/composable/useVirtuallist'
import { useFetch } from '@msa_cli/react-composable'
import { useEffect } from 'react'

export interface JSONDummy {
  name: string
  language: string
  id: string
  bio: string
  version: number
}

export default function VirtualListExample() {
   const {
    data,
    error,
    isLoading: isFetching,
    mutate: execute,
  } = useFetch<JSONDummy[]>(
    'https://microsoftedge.github.io/Demos/json-dummy-data/1MB.json',
    {},
    {
      revalidateOnFocus: false,
      errorRetryCount: 3,
    }
  )
  const longList = Array.from({ length: 100000 }, (_, i) => {
    return {
      name: 'name',
      bio: 'bio',
    }
  })
  const addData = (data && [...data, ...longList]) || []
  useEffect(() => {
    execute()
  }, [])

  const {
    ref,
    handleScroll,
    items: visibleItems,
    startIndex,
    styleContainer,
    styleList,
    bottomPadding,
  } = useVirtualList(addData, {
    overscan: 10,
    containerHeight: window.innerHeight - 500,
  })

   if (isFetching && !data) return <div>Loading...</div>
  if (error) return <div>Error: {error}</div>

  return (
    <div>
      <div ref={ref} onScroll={handleScroll} style={styleContainer}>
        <div style={{ ...styleList, paddingBottom: bottomPadding + 10 }}>
          <ArrayMap
            of={visibleItems}
            render={(item, index) => (
              <div key={startIndex + index} className="py-5 first:pt-0">
                <div>{item.name}</div>
                <div>{item.bio}</div>
              </div>
            )}
          />
        </div>
      </div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
