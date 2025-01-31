'use client'

import { useMouseInElement } from '@msa_cli/react-composable'
import { useRef } from 'react'

export default function MouseInElement() {
  const target = useRef<HTMLDivElement>(null)
  const {
    elementX,
    elementY,
    isOutside,
    elementPositionX,
    elementPositionY,
    x,
    y,
    elementHeight,
    elementWidth,
    sourceType,
  } = useMouseInElement(target.current)

  return (
    <div>
      <div ref={target} className="w-fit h-20 bg-red-500 p-3 text-nowrap mb-5">
        {' '}
        Hover me
      </div>
      <div>
        <div> x: {x}</div>
        <div> y: {y}</div>
        <div> sourceType: '{sourceType}'</div>
        <div> elementX: {elementX}</div>
        <div> elementY: {elementY}</div>
        <div> elementPositionX: {elementPositionX}</div>
        <div> elementPositionY: {elementPositionY}</div>
        <div>
          {' '}
          elementHeight:
          {elementHeight}
        </div>
        <div> elementWidth: {elementWidth}</div>
        <div>isOutside: {isOutside ? 'true' : 'false'}</div>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { useMouseInElement } from '@msa_cli/react-composable'
import { useRef } from 'react'

export default function MouseInElement() {
  const target = useRef<HTMLDivElement>(null)
  const {
    elementX,
    elementY,
    isOutside,
    elementPositionX,
    elementPositionY,
    x,
    y,
    elementHeight,
    elementWidth,
    sourceType,
  } = useMouseInElement(target.current)

  return (
    <div>
      <div ref={target} className="w-fit h-20 bg-red-500 p-3 text-nowrap mb-5">
        {' '}
        Hover me
      </div>
      <div>
        <div> x: {x}</div>
        <div> y: {y}</div>
        <div> sourceType: '{sourceType}'</div>
        <div> elementX: {elementX}</div>
        <div> elementY: {elementY}</div>
        <div> elementPositionX: {elementPositionX}</div>
        <div> elementPositionY: {elementPositionY}</div>
        <div>
          {' '}
          elementHeight:
          {elementHeight}
        </div>
        <div> elementWidth: {elementWidth}</div>
        <div>isOutside: {isOutside ? 'true' : 'false'}</div>
      </div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
