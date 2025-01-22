'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useClipboard } from '@msa_cli/react-composable'
import { useState } from 'react'

export default function Clipboard() {
  const [state, setState] = useState('')
  const { isSupported, text, copied, copy } = useClipboard({
    read: true,
    source: 'Default text',
    copiedDuring: 2000,
  })
  if (!isSupported) return <div>Clipboard is not support</div>
  return (
    <div>
      <Input
        value={state}
        onChange={(e) => {
          setState(e.target.value)
        }}
      />
      <Button className="mt-5 mr-5" onClick={() => copy(state)}>
        {copied ? 'Copied!' : 'Copy text'}
      </Button>

      <div className="font-bold">
        <span className="font-normal mt-5">Result: </span>
        {text}
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import useClipboard from '@/composable/useClipboard'
import { useState } from 'react'

export default function Clipboard() {
  const [state, setState] = useState('')
  const { isSupported, text, copied, copy } = useClipboard({
    read: true,
    source: 'Default text',
    copiedDuring: 2000,
  })
  if (!isSupported) return <div>Clipboard is not support</div>
  return (
    <div>
      <Input
        value={state}
        onChange={(e) => {
          setState(e.target.value)
        }}
      />
      <Button className="mt-5 mr-5" onClick={() => copy(state)}>
        {copied ? 'Copied!' : 'Copy text'}
      </Button>

      <div className="font-bold">
        <span className="font-normal mt-5">Result: </span>
        {text}
      </div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
