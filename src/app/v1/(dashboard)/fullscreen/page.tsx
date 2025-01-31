'use client'

import { Button } from '@/components/ui/button'
import { useFullscreen } from '@msa_cli/react-composable'
import { useRef } from 'react'

export default function MyComponent() {
  const elementRef = useRef<HTMLDivElement>(null)
  const { isFullscreen, toggle, isSupported } = useFullscreen(
    elementRef.current
  )

  if (!isSupported) return <div>Fullscreen is not support</div>

  return (
    <div>
      <video
        ref={elementRef}
        className="m-auto rounded"
        src="https://vjs.zencdn.net/v/oceans.mp4"
        width="600"
        controls
      />
      <div className=" grid place-items-center mt-5">
        <Button className="bg-green-500" onClick={toggle}>
          {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
        </Button>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { Button } from '@/components/ui/button'
import { useFullscreen } from '@msa_cli/react-composable'
import { useRef } from 'react'

export default function MyComponent() {
  const elementRef = useRef<HTMLDivElement>(null)
  const { isFullscreen, toggle, isSupported } = useFullscreen(
    elementRef.current
  )

  if (!isSupported) return <div>Fullscreen is not support</div>

  return (
    <div>
      <video
        ref={elementRef}
        className="m-auto rounded"
        src="https://vjs.zencdn.net/v/oceans.mp4"
        width="600"
        controls
      />
      <div className=" grid place-items-center mt-5">
        <Button className="bg-green-500" onClick={toggle}>
          {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
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
