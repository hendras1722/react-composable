'use client'
import { Button } from '@/components/ui/button'
import { useAnimate } from '@msa_cli/react-composable'
import { RefObject, useRef } from 'react'

export default function Animate() {
  const elementRef = useRef<HTMLDivElement>(null)

  const {
    play,
    reverse,
    finish,
    cancel,
    startTime,
    currentTime,
    playbackRate,
    playState,
    replaceState,
    pending,
  } = useAnimate(
    elementRef as RefObject<HTMLDivElement>,
    [
      {
        // from
        opacity: 0,
        color: '#fff',
      },
      {
        // to
        opacity: 1,
        color: '#000',
      },
    ],
    {
      duration: 3000,
      iterations: 1,
      direction: 'alternate',
      easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
      immediate: true,
    }
  )
  return (
    <>
      <div className="flex items-center justify-center w-full h-60">
        <p ref={elementRef} className="text-5xl text-blue-600 font-800">
          VueUse useAnimate
        </p>
      </div>
      <div className="flex gap-4">
        <Button onClick={play}>play</Button>
        <Button onClick={reverse}>reverse</Button>
        <Button onClick={finish}>finish</Button>
        <Button onClick={cancel}>cancel</Button>
      </div>
      <pre className="code-block">
        playstate: {playState} <br />
        pending: {pending} <br />
        replaceState: {replaceState} <br />
        startTime: {startTime} <br />
        currentTime: {currentTime} <br />
        playbackRate: {playbackRate}
      </pre>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { Button } from '@/components/ui/button'
import { useAnimate } from '@msa_cli/react-composable'
import { RefObject, useRef } from 'react'

export default function Animate() {
  const elementRef = useRef<HTMLDivElement>(null)

  const {
    play,
    reverse,
    finish,
    cancel,
    startTime,
    currentTime,
    playbackRate,
    playState,
    replaceState,
    pending,
  } = useAnimate(
    elementRef as RefObject<HTMLDivElement>,
    [
      {
        // from
        opacity: 0,
        color: '#fff',
      },
      {
        // to
        opacity: 1,
        color: '#000',
      },
    ],
    {
      duration: 3000,
      iterations: 1,
      direction: 'alternate',
      easing: 'cubic-bezier(0.46, 0.03, 0.52, 0.96)',
      immediate: true,
    }
  )
  return (
    <>
      <div className="flex items-center justify-center w-full h-60">
        <p ref={elementRef} className="text-5xl text-blue-600 font-800">
          VueUse useAnimate
        </p>
      </div>
      <div className="flex gap-4">
        <Button onClick={play}>play</Button>
        <Button onClick={reverse}>reverse</Button>
        <Button onClick={finish}>finish</Button>
        <Button onClick={cancel}>cancel</Button>
      </div>
      <pre className="code-block">
        playstate: {playState} <br />
        pending: {pending} <br />
        replaceState: {replaceState} <br />
        startTime: {startTime} <br />
        currentTime: {currentTime} <br />
        playbackRate: {playbackRate}
      </pre>
    </>
  )
}
      `}</code>
      </pre>
    </>
  )
}
