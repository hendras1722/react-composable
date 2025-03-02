'use client'

import { Button } from '@/components/ui/button'
import { useFetch } from '@msa_cli/react-composable'
import { FaSpinner } from 'react-icons/fa6'

interface User {
  id: number
  name: string
  email: string
}
export interface Jsonplaceholder {
  userId: number
  id: number
  title: string
  completed: boolean
}
export default function FetchData() {
  const { data, error, isLoading } = useFetch<User>(
    'https://jsonplaceholder.typicode.com/todos/1',
    {},
    {
      revalidateOnFocus: false,
      errorRetryCount: 3,
    }
  )

  const { mutate } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    },
    {
      responseType: 'json',
      revalidateOnFocus: true,
      errorRetryCount: 5,
      onFetchError: (context) => {
        console.error('Fetch failed:', context.error)
        return {}
      },
    }
  )

  return (
    <div>
      <div className="mb-5 flex gap-3 items-center">
        <div>
          <div className="mb-2">useFetch update in version version 1.1</div>
          <Button variant={'destructive'} onClick={mutate}>
            Fetch
          </Button>
        </div>

        <div>{isLoading && <FaSpinner className="animate-spin" />}</div>
      </div>

      <div>{error && 'Error Fetching'}</div>
      <div>{data && JSON.stringify(data, null, 2)}</div>
      <div className="mt-5">How to use:</div>

      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { Button } from '@/components/ui/button'
import { useFetch } from '@msa_cli/react-composable'
import { FaSpinner } from 'react-icons/fa6'

interface User {
  id: number
  name: string
  email: string
}
export interface Jsonplaceholder {
  userId: number
  id: number
  title: string
  completed: boolean
}
export default function FetchData() {
  const { data, error, isLoading } = useFetch<User>(
    'https://jsonplaceholder.typicode.com/todos/1',
    {},
    {
      revalidateOnFocus: false,
      errorRetryCount: 3,
    }
  )

  const {
    data: DataPost,
    isLoading: loadingPost,
    mutate,
  } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: 'foo',
        body: 'bar',
        userId: 1,
      }),
    },
    {
      responseType: 'json',
      revalidateOnFocus: true,
      errorRetryCount: 5,
      onFetchError: (context) => {
        console.error('Fetch failed:', context.error)
        return {}
      },
    }
  )

  function handleCLick() {
    mutate()
  }
  return (
    <div>
      <div className="mb-5 flex gap-3 items-center">
        <Button variant={'destructive'} onClick={mutate}>
          Fetch
        </Button>
        {/*
        // */}
        <div>{isLoading && <FaSpinner className="animate-spin" />}</div>
      </div>

      <div>{error && 'Error Fetching'}</div>
      <div>{data && JSON.stringify(data, null, 2)}</div>
      <div className="mt-5">How to use:</div>
      
      
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
