'use client'
import { useMouse } from '@msa_cli/react-composable'

export default function Mouse() {
  const { x, y, sourceType } = useMouse()
  return (
    <div>
      <div>Basic Usage</div>
      <div>x: {String(x)}</div>
      <div>y: {String(y)}</div>
      <div>sourceType: '{sourceType}'</div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { useMouse } from '@msa_cli/react-composable'

export default function Mouse() {
  const { x, y, sourceType } = useMouse()
  return (
    <div>
      <div>Basic Usage</div>
      <div>x: {String(x)}</div>
      <div>y: {String(y)}</div>
      <div>sourceType: '{sourceType}'</div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
