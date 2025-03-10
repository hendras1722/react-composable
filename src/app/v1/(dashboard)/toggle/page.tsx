'use client'

import { Button } from '@/components/ui/button'
import { useToggle } from '@msa_cli/react-composable'

export default function Page() {
  const [toggle, setToggle] = useToggle(false)
  return (
    <div>
      <div>Toggle</div>
      <div className="mt-5">
        <span className="bg-gray-300 p-3 rounded font-bold text-black/10">
          {(toggle && 'Active') || 'Not Active'}
        </span>
        &nbsp;
        <Button onClick={setToggle}>
          {' '}
          {(toggle && 'Not Active') || 'Active'}
        </Button>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { Button } from '@/components/ui/button'
import { useToggle } from '@msa_cli/react-composable'

export default function Page() {
  const [toggle, setToggle] = useToggle(false)
  return (
    <div>
      <div>Toggle</div>
      <div className="mt-5">
        <span className="bg-gray-300 p-3 rounded font-bold text-black/10">
          {(toggle && 'Active') || 'Not Active'}
        </span>
        &nbsp;
        <Button onClick={setToggle}>
          {' '}
          {(toggle && 'Not Active') || 'Active'}
        </Button>
      </div>
    
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
