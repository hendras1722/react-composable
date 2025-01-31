'use client'
import { Button } from '@/components/ui/button'
import { useCycleList } from '@msa_cli/react-composable'

export default function CycleList() {
  const list = [
    'Dog',
    'Cat',
    'Lizard',
    'Shark',
    'Whale',
    'Dolphin',
    'Octopus',
    'Seal',
  ]

  const { state, next, prev } = useCycleList(list)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-primary text-lg font-bold">{state}</div>
      <div className="flex gap-2">
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { Button } from '@/components/ui/button'
import { useCycleList } from '@/composable/useCyclelist'

export default function CycleList() {
  const list = [
    'Dog',
    'Cat',
    'Lizard',
    'Shark',
    'Whale',
    'Dolphin',
    'Octopus',
    'Seal',
  ]

  const { state, next, prev } = useCycleList(list)

  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-primary text-lg font-bold">{state}</div>
      <div className="flex gap-2">
        <Button onClick={prev}>Prev</Button>
        <Button onClick={next}>Next</Button>
      </div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
