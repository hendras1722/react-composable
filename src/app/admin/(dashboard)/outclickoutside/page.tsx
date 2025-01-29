'use client'

import { Button } from '@/components/ui/button'
import { useClickOutside } from '@msa_cli/react-composable'
import { useState } from 'react'
import { FaCircleXmark } from 'react-icons/fa6'

export default function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClickOutside = (event: PointerEvent | FocusEvent) => {
    setIsModalOpen(false)
  }

  const modalRef = useClickOutside<HTMLDivElement>(handleClickOutside, {
    ignore: ['.ignore-me'], // Optional CSS selectors or elements to ignore
    detectIframe: true, // Optional iframe detection
  })

  return (
    <div className="relative">
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      {isModalOpen && (
        <div
          ref={modalRef}
          className="bg-gray-300 border absolute my-auto right-0 left-0 top-0 border-gray-500 rounded mt-5 p-3 ease-linear transition-all duration-300"
        >
          <div className="inner">
            <button
              className="flex justify-end w-full"
              title="Close"
              onClick={() => setIsModalOpen(false)}
            >
              <FaCircleXmark />
            </button>
            <p className="text-lg">Demo Modal</p>
            <p>Click outside of the modal to close it.</p>
          </div>
        </div>
      )}
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { Button } from '@/components/ui/button'
import { useClickOutside } from '@msa_cli/react-composable'
import { useState } from 'react'
import { FaCircleXmark } from 'react-icons/fa6'

export default function MyComponent() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const handleClickOutside = (event: PointerEvent | FocusEvent) => {
    setIsModalOpen(false)
  }

  const modalRef = useClickOutside<HTMLDivElement>(handleClickOutside, {
    ignore: ['.ignore-me'], // Optional CSS selectors or elements to ignore
    detectIframe: true, // Optional iframe detection
  })

  return (
    <div className="relative">
      <Button onClick={() => setIsModalOpen(true)}>Open Modal</Button>
      {isModalOpen && (
        <div
          ref={modalRef}
          className="bg-gray-300 border absolute my-auto right-0 left-0 top-0 border-gray-500 rounded mt-5 p-3 ease-linear transition-all duration-300"
        >
          <div className="inner">
            <button
              className="flex justify-end w-full"
              title="Close"
              onClick={() => setIsModalOpen(false)}
            >
              <FaCircleXmark />
            </button>
            <p className="text-lg">Demo Modal</p>
            <p>Click outside of the modal to close it.</p>
          </div>
        </div>
      )}
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
