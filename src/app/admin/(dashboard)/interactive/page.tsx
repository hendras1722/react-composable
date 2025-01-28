'use client'

import { useIntersectionObserver } from '@msa_cli/react-composable'
import { RefObject, useRef, useState } from 'react'

export default function Interactive() {
  const root = useRef<HTMLDivElement | null>(null)
  const target = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const { isActive, pause, resume } = useIntersectionObserver(
    target as RefObject<Element>,
    ([entry]) => {
      setIsVisible(entry.isIntersecting)
    },
    { root: root as RefObject<Element> }
  )

  return (
    <div>
      <div className="text-center">
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={() => (isActive ? pause() : resume())}
          />
          <span>Enable</span>
        </label>
      </div>
      <div ref={root} className="root">
        <p className="notice">Scroll me down!</p>
        <div ref={target} className="target">
          <p>Hello world!</p>
        </div>
      </div>
      <div className="text-center">
        Element {isVisible ? 'inside' : 'outside '} the viewport
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { useIntersectionObserver } from '@msa_cli/react-composable'
import { RefObject, useRef, useState } from 'react'

export default function Interactive() {
  const root = useRef<HTMLDivElement | null>(null)
  const target = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const { isActive, pause, resume } = useIntersectionObserver(
    target as RefObject<Element>,
    ([entry]) => {
      setIsVisible(entry.isIntersecting)
    },
    { root: root as RefObject<Element> }
  )

  return (
    <div>
      <div className="text-center">
        <label className="checkbox">
          <input
            type="checkbox"
            onChange={() => (isActive ? pause() : resume())}
          />
          <span>Enable</span>
        </label>
      </div>
      <div ref={root} className="root">
        <p className="notice">Scroll me down!</p>
        <div ref={target} className="target">
          <p>Hello world!</p>
        </div>
      </div>
      <div className="text-center">
        Element {isVisible ? 'inside' : 'outside '} the viewport
      </div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
