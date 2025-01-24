'use client'

import { Button } from '@/components/ui/button'
import { useFetch } from '@msa_cli/react-composable'
import { useEffect } from 'react'
import { FaSpinner } from 'react-icons/fa6'

export interface Jsonplaceholder {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function FetchData() {
  const { data, error, execute, isFetching, refetch } = useFetch<string>(
    '/js-holder/todos/1',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      keepalive: true,
      redirect: 'follow',
    },
    {
      responseType: 'json',
      method: 'GET',
      onFetchError: async (ctx) => {
        // Custom error handling
        console.error('API Error:', ctx.error)
        return {
          error: 'Something went wrong! Please try again.',
        }
      },
    }
  )

  if (error) {
    throw new Error(error)
  }

  useEffect(() => {
    execute()
  }, [])

  // POST request with JSON payload
  // const { data, execute } = useFetch<User>(
  //   '/api/users',
  //   {}, // fetch options
  //   {
  //     method: 'POST',
  //     payload: { name: 'John' },
  //     immediate: false,
  //   }
  // )

  // Text response
  // const { data } = useFetch<string>('/api/text', {}, { responseType: 'text' })

  // With all options
  // const { data, error, refetch } = useFetch<User>(
  //   '/api/users/1',
  //   {
  //     headers: {
  //       Authorization: 'Bearer token',
  //     },
  //   },
  //   {
  //     method: 'PUT',
  //     responseType: 'json',
  //     payload: { name: 'John' },
  //     immediate: true,
  //     timeout: 5000,
  //     updateDataOnError: false,
  //     beforeFetch: async (ctx) => {
  //       // Modify request before sending
  //       return ctx
  //     },
  //     afterFetch: async (ctx) => {
  //       // Process response data
  //       return ctx
  //     },
  //   }
  // )
  return (
    <div>
      <div className="mb-5 flex gap-3 items-center">
        <Button variant={'destructive'} onClick={refetch}>
          Fetch
        </Button>
        <div>{isFetching && <FaSpinner className="animate-spin" />}</div>
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

export interface Jsonplaceholder {
  userId: number
  id: number
  title: string
  completed: boolean
}

export default function FetchData() {
  // Basic JSON GET request
  const { data, error, execute, isFetching, refetch } = useFetch<string>(
    '/js-holder/todos',
    {
      headers: {
        'Content-Type': 'application/json',
      },
      keepalive: true,
      redirect: 'follow',
    },
    {
      responseType: 'json',
      method: 'GET',
      params: {
        id: 'wewe',
        name: 'wewew',
      },
      onFetchError: async (ctx) => {
        // Custom error handling
        console.error('API Error:', ctx.error)
        return {
          error: 'Something went wrong! Please try again.',
        }
      },
    }
  )
  if (error) {
    throw new Error(error)
  }

  useEffect(() => {
    execute()
  }, [])

  // POST request with JSON payload
  // const { data, execute } = useFetch<User>(
  //   '/api/users',
  //   {}, // fetch options
  //   {
  //     method: 'POST',
  //     payload: { name: 'John' },
  //     immediate: false,
  //   }
  // )

  // Text response
  // const { data } = useFetch<string>('/api/text', {}, { responseType: 'text' })

  // With all options
  // const { data, error, refetch } = useFetch<User>(
  //   '/api/users/1',
  //   {
  //     headers: {
  //       Authorization: 'Bearer token',
  //     },
  //   },
  //   {
  //     method: 'PUT',
  //     responseType: 'json',
  //     payload: { name: 'John' },
  //     immediate: true,
  //     timeout: 5000,
  //     updateDataOnError: false,
  //     beforeFetch: async (ctx) => {
  //       // Modify request before sending
  //       return ctx
  //     },
  //     afterFetch: async (ctx) => {
  //       // Process response data
  //       return ctx
  //     },
  //   }
  // )

  useEffect(() => {
    execute()
  }, [])
  return (
    <div>
      <div className="mb-5 flex gap-3 items-center">
        <Button variant={'destructive'} onClick={refetch}>
          Fetch
        </Button>
        <div>{isFetching && <FaSpinner className="animate-spin" />}</div>
      </div>

      <div>{error && 'Error Fetching'}</div>
      <div>{data && JSON.stringify(data, null, 2)}</div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
