'use client'

import { Textarea } from '@/components/ui/textarea'
import { useElementBounding } from '@msa_cli/react-composable'
import { useRef } from 'react'

export default function Element() {
  const textarea = useRef<HTMLTextAreaElement | null>(null)
  const { height, width, x, y } = useElementBounding(
    textarea as React.RefObject<HTMLElement>
  )
  const obj = JSON.stringify({ height, width, x, y }, null, 2)
  return (
    <div className="w-full">
      <Textarea
        className="max-w-full resize"
        rows={8}
        ref={textarea}
        value={obj}
      />
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { Textarea } from '@/components/ui/textarea'
import { useElementBounding } from '@msa_cli/react-composable'
import { useRef } from 'react'

export default function Element() {
  const textarea = useRef<HTMLTextAreaElement | null>(null)
  const { height, width, x, y } = useElementBounding(
    textarea as React.RefObject<HTMLElement>
  )
  const obj = JSON.stringify({ height, width, x, y }, null, 2)
  return (
    <div className="w-full">
      <Textarea
        className="max-w-full resize"
        rows={8}
        ref={textarea}
        value={obj}
      />
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
