'use client'
import { Button } from '@/components/ui/button'
import { useStateHistory } from '@msa_cli/react-composable'

export default function StateHistory() {
  // We'll use local state to track the current value
  const { value, history, setValue, commit, undo, redo, canUndo, canRedo } =
    useStateHistory(0)

  const handleIncrement = () => {
    setValue((prev) => prev + 1)
    // After state update, commit the change
    commit()
  }

  const handleDecrement = () => {
    setValue((prev) => prev - 1)
    // After state update, commit the change
    commit()
  }

  return (
    <div className="p-4 space-y-4">
      <div className="text-2xl font-bold text-center">
        Current Value: {value}
      </div>
      <div>
        <div className="text-md font-bold text-center">
          History: {JSON.stringify(history, null, 2)}
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleIncrement}>Increment</Button>
      </div>

      <div className="flex gap-2 justify-center">
        <Button onClick={undo} disabled={!canUndo} variant="outline">
          Undo
        </Button>
        <Button onClick={redo} disabled={!canRedo} variant="outline">
          Redo
        </Button>
      </div>
      <pre className="bg-gray-300 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { Button } from '@/components/ui/button'
import { useRefHistory } from '@/composable/useStateHistory'

export default function StateHistory() {
  // We'll use local state to track the current value
  const { value, history, setValue, commit, undo, redo, canUndo, canRedo } =
    useRefHistory(0)

  const handleIncrement = () => {
    setValue((prev) => prev + 1)
    // After state update, commit the change
    commit()
  }

  const handleDecrement = () => {
    setValue((prev) => prev - 1)
    // After state update, commit the change
    commit()
  }

  return (
    <div className="p-4 space-y-4">
      <div className="text-2xl font-bold text-center">
        Current Value: {value}
      </div>
      <div>
        <div className="text-md font-bold text-center">
          History: {JSON.stringify(history, null, 2)}
        </div>
      </div>

      <div className="flex gap-2 justify-center">
        <Button onClick={handleDecrement}>Decrement</Button>
        <Button onClick={handleIncrement}>Increment</Button>
      </div>

      <div className="flex gap-2 justify-center">
        <Button onClick={undo} disabled={!canUndo} variant="outline">
          Undo
        </Button>
        <Button onClick={redo} disabled={!canRedo} variant="outline">
          Redo
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
