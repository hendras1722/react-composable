'use client'

import { Button } from '@/components/ui/button'
import { useCookies } from '@msa_cli/react-composable'

export default function Cookies() {
  const { get, set, remove } = useCookies()

  // Get a cookie
  const user = get('user')

  // Remove a cookie

  return (
    <div>
      <div>result: {JSON.stringify(user)}</div>
      <Button onClick={() => set('user', { id: 1, name: 'John' })}>
        Set Cookies
      </Button>
      <Button onClick={() => remove('user')}>Delete Cookies</Button>
    </div>
  )
}
