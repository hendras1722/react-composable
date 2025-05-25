'use client'

import { Button } from '@/components/ui/button'
import { createFetch, useFetch } from '@/composable/usFetch'
// import { createFetch, useFetch } from '@msa_cli/react-composable'

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
  // Using useFetch to fetch data from an API
  let AbortController: AbortController | null = null
  const { data, error, abort, execute } = useFetch<User>(
    'https://jsonplaceholder.typicode.com/todos/1',
    {
      afterFetch(ctx) {
        ctx.data.title = 'Hunter x Hunter' // Modifies the response data
        return ctx
      },
      beforeFetch: () => {
        console.log('Fetching data...')
      },
    }
  )

  async function handleCancel() {
    abort()
  }

  function getMyToken() {}

  // If you want to control the behavior of beforeFetch, afterFetch, onFetchError between the pre-configured instance and newly spawned instance. You can provide a combination option to toggle between overwrite or chaining.
  // const api = createFetch({
  //   baseUrl: 'https://jsonplaceholder.typicode.com/',
  //   combination: 'overwrite',
  //   fetchOptions: { mode: 'cors' },
  //   options: {
  //     // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
  //     async beforeFetch({ options }) {
  //       const myToken = await getMyToken()
  //       // Ensure headers is an object before setting Authorization
  //       if (!options.headers) {
  //         options.headers = {}
  //       }
  //       if (options.headers instanceof Headers) {
  //         options.headers.set('Authorization', `Bearer ${myToken}`)
  //       } else if (Array.isArray(options.headers)) {
  //         options.headers.push(['Authorization', `Bearer ${myToken}`])
  //       } else {
  //         ;(options.headers as Record<string, string>)[
  //           'Authorization'
  //         ] = `Bearer ${myToken}`
  //       }

  //       return { options }
  //     },
  //   },
  // })
  // const { post } = api<{
  //   title: string
  //   body: string
  //   userId: number
  // }>('/posts', {
  //   immediate: false,
  // })

  const handleSubmit = async () => {
    // method post, PUT, DELETE, PATCH set immediete to false
    // if you want to use post, PUT, DELETE, PATCH with immediate: true, you can use the post method directly

    execute()
    // const res = await post<{
    //   title: string
    //   body: string
    //   userId: number
    // }>(
    //   {
    //     title: 'foo',
    //     body: 'bar',
    //     userId: 1,
    //   },
    //   'json'
    // )

    // console.log(res.data, 'inires')
  }

  return (
    <div>
      <div className="mb-5 flex gap-3 items-center">
        <div>
          <div className="mb-2">useFetch update in version version 1.1</div>
          <Button
            variant={'destructive'}
            onClick={handleSubmit}
            className="mr-2"
          >
            Fetch
          </Button>
          <Button variant={'destructive'} onClick={handleCancel}>
            Cancel
          </Button>
        </div>

        {/* <div>{isLoading && <FaSpinner className="animate-spin" />}</div> */}
      </div>

      <div>{error && 'Error Fetching'}</div>
      <div>{data && JSON.stringify(data, null, 2)}</div>
      <div className="mt-5">How to use:</div>

      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
// method post, PUT, DELETE, PATCH set immediete to false
// if you want to use post, PUT, DELETE, PATCH with immediate: true, you can use the post method directly

const { data, error } = useFetch<User>(
  'https://jsonplaceholder.typicode.com/todos/1',
    {
      immediate: false, // set immediate to false to prevent automatic fetching
      afterFetch(ctx) {
        ctx.data.title = 'Hunter x Hunter' // Modifies the response data
        return ctx
      },
      beforeFetch: () => {
        console.log('Fetching data...')
      },
    }
)


const res = await post<{
  title: string
  body: string
  userId: number
}>(
  {
    title: 'foo',
    body: 'bar',
    userId: 1,
  },
  'json'
)


 // If you want to control the behavior of beforeFetch, afterFetch, onFetchError between the pre-configured instance and newly spawned instance. You can provide a combination option to toggle between overwrite or chaining.
  const api = createFetch({
    baseUrl: 'https://jsonplaceholder.typicode.com/',
    combination: 'overwrite',
    fetchOptions: { mode: 'cors' },
    options: {
      // beforeFetch in pre-configured instance will only run when the newly spawned instance do not pass beforeFetch
      async beforeFetch({ options }) {
        const myToken = await getMyToken()
        // Ensure headers is an object before setting Authorization
        if (!options.headers) {
          options.headers = {}
        }
        if (options.headers instanceof Headers) {
          options.headers.set('Authorization', Bearer myToken)
        } else if (Array.isArray(options.headers)) {
          options.headers.push(['Authorization', Bearer myToken])
        } else {
          ;(options.headers as Record<string, string>)[
            'Authorization'
          ] = 'Bearer myToken'
        }

        return { options }
      },
    },
  })
  const { post } = api<{
    title: string
    body: string
    userId: number
  }>("/posts", {
    immediate: false,
  })
      `}</code>
      </pre>
    </div>
  )
}
