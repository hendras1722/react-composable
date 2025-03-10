'use client'

import { Button } from '@/components/ui/button'
import { useArrayState } from '@msa_cli/react-composable'
import React from 'react'

function MyComponent() {
  const [myArray, arrayActions] = useArrayState<string>([
    'initial item 1',
    'initial item 2',
  ]) // Specify the type!

  const handleAddItem = () => {
    const newItem = prompt('Enter new item:')
    if (newItem) {
      arrayActions.add(newItem)
    }
  }

  const handleRemoveItem = (index: number) => {
    arrayActions.remove(index)
  }

  const handleClearArray = () => {
    arrayActions.clear()
  }

  const handleReplaceItem = (index: number) => {
    const newItem = prompt(`Enter new item for index ${index}:`)
    if (newItem) {
      arrayActions.replace(index, newItem)
    }
  }

  return (
    <div>
      <h2>My Array:</h2>
      <ul>
        {myArray.map((item, index) => (
          <li className="mt-2" key={index}>
            <span className="mr-2"> {item} </span>
            <Button className="mr-2" onClick={() => handleRemoveItem(index)}>
              Remove
            </Button>
            <Button className="mr-2" onClick={() => handleReplaceItem(index)}>
              Replace
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <Button className="mr-2" onClick={handleAddItem}>
          Add Item
        </Button>
        <Button className="mr-2" onClick={handleClearArray}>
          Clear Array
        </Button>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { Button } from '@/components/ui/button'
import { useArrayState } from '@msa_cli/react-composable'
import React from 'react'

function MyComponent() {
  const [myArray, arrayActions] = useArrayState<string>([
    'initial item 1',
    'initial item 2',
  ]) // Specify the type!

  const handleAddItem = () => {
    const newItem = prompt('Enter new item:')
    if (newItem) {
      arrayActions.add(newItem)
    }
  }

  const handleRemoveItem = (index: number) => {
    arrayActions.remove(index)
  }

  const handleClearArray = () => {
    arrayActions.clear()
  }

  const handleReplaceItem = (index: number) => {
    const newItem = prompt('Enter new item for index :' + index)
    if (newItem) {
      arrayActions.replace(index, newItem)
    }
  }

  return (
    <div>
      <h2>My Array:</h2>
      <ul>
        {myArray.map((item, index) => (
          <li className="mt-2" key={index}>
            <span className="mr-2"> {item} </span>
            <Button className="mr-2" onClick={() => handleRemoveItem(index)}>
              Remove
            </Button>
            <Button className="mr-2" onClick={() => handleReplaceItem(index)}>
              Replace
            </Button>
          </li>
        ))}
      </ul>
      <div className="mt-2">
        <Button className="mr-2" onClick={handleAddItem}>
          Add Item
        </Button>
        <Button className="mr-2" onClick={handleClearArray}>
          Clear Array
        </Button>
      </div>
    </div>
  )
}

export default MyComponent

      `}</code>
      </pre>
    </div>
  )
}

export default MyComponent
