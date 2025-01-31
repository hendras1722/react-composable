'use client'
import { useTextSelection } from '@msa_cli/react-composable'
import { cn } from '@/utils/lib'

export default function TextSelectionComponent() {
  const { text, rects } = useTextSelection()

  return (
    <div className="p-4 space-y-4">
      <p className="font-semibold text-blue-600">
        You can select any text on the page.
      </p>

      <div className="space-y-2">
        <strong>Selected Text:</strong>
        <em
          className={cn(
            'block h-44 overflow-y-auto whitespace-pre p-2 rounded border',
            text ? 'text-blue-500' : 'text-gray-400'
          )}
        >
          {text || <span className="select-none">No text selected</span>}
        </em>
      </div>

      <div className="space-y-2">
        <p>
          <strong>Selection Rectangles:</strong>
        </p>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          {JSON.stringify(rects, null, 2)}
        </pre>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { useTextSelection } from '@/composable/useTextSelection'
import { cn } from '@/utils/lib'

export default function TextSelectionComponent() {
  const { text, rects } = useTextSelection()

  return (
    <div className="p-4 space-y-4">
      <p className="font-semibold text-blue-600">
        You can select any text on the page.
      </p>

      <div className="space-y-2">
        <strong>Selected Text:</strong>
        <em
          className={cn(
            'block h-44 overflow-y-auto whitespace-pre p-2 rounded border',
            text ? 'text-blue-500' : 'text-gray-400'
          )}
        >
          {text || <span className="select-none">No text selected</span>}
        </em>
      </div>

      <div className="space-y-2">
        <p>
          <strong>Selection Rectangles:</strong>
        </p>
        <pre className="bg-gray-100 p-2 rounded overflow-x-auto">
          {JSON.stringify(rects, null, 2)}
        </pre>
      </div>
    </div>
  )
}

      `}</code>
      </pre>
    </div>
  )
}
