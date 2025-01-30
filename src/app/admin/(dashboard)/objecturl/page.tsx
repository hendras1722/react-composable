'use client'
import { useObjectUrl } from '@msa_cli/react-composable'
import { useState } from 'react'

export default function ObjectUrl() {
  const [file, setFile] = useState<File | null>(null)
  const url = useObjectUrl(file)
  function onFileChange(event) {
    setFile(event.target.files[0])
  }
  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <div className="mt-3">
        Object url:{' '}
        {url ?? <span className="text-red-500 font-semibold">none</span>}
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { useObjectUrl } from '@msa_cli/react-composable'
import { useState } from 'react'

export default function ObjectUrl() {
  const [file, setFile] = useState<File | null>(null)
  const url = useObjectUrl(file)
  function onFileChange(event) {
    setFile(event.target.files[0])
  }
  return (
    <div>
      <input type="file" onChange={onFileChange} />
      <div className="mt-3">
        Object url:{' '}
        {url ?? <span className="text-red-500 font-semibold">none</span>}
      </div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
