'use client'

import React, { useState } from 'react'
import { cn } from '@/utils/lib'
import { useChangeCase } from '@msa_cli/react-composable'

type ChangeCaseType =
  | 'camelCase'
  | 'capitalCase'
  | 'constantCase'
  | 'dotCase'
  | 'kebabCase'
  | 'noCase'
  | 'pascalCase'
  | 'pascalSnakeCase'
  | 'pathCase'
  | 'sentenceCase'
  | 'snakeCase'
  | 'trainCase'

const CaseConverter = () => {
  const [selectedCase, setSelectedCase] = useState<ChangeCaseType>('camelCase')
  const [text, setText] = useChangeCase('Hello World', selectedCase)
  const [inputText, setInputText] = useState('Hello World')

  const cases: ChangeCaseType[][] = [
    ['camelCase', 'capitalCase', 'constantCase', 'dotCase'],
    ['kebabCase', 'noCase', 'pascalCase', 'pascalSnakeCase'],
    ['pathCase', 'sentenceCase', 'snakeCase', 'trainCase'],
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
    setText(e.target.value)
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-gray-300 max-w-3xl">
      <div className="mb-6">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-gray-300"
          placeholder="Enter text to transform..."
        />
      </div>

      {cases.map((row, rowIndex) => (
        <div key={`${rowIndex}-${row[0]}`} className="flex gap-4 mb-2">
          {row.map((caseType) => (
            <button
              key={caseType}
              onClick={() => setSelectedCase(caseType)}
              className={cn(
                'flex items-center gap-2 hover:text-gray-100 transition-colors',
                selectedCase === caseType ? 'text-emerald-400' : ''
              )}
            >
              <div
                className={cn(
                  'w-3 h-3 rounded-full',
                  selectedCase === caseType ? 'bg-emerald-400' : 'bg-gray-600'
                )}
              />
              <span className="text-lg">{caseType}</span>
            </button>
          ))}
        </div>
      ))}

      <div className="mt-6 p-4 bg-gray-800 rounded">
        <p className="font-mono text-lg">{text}</p>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-gray-900">{`
'use client'

import React, { useState } from 'react'
import { useChangeCase } from '@msa_cli/react-composable'
import { cn } from '@/utils/lib'

type ChangeCaseType =
  | 'camelCase'
  | 'capitalCase'
  | 'constantCase'
  | 'dotCase'
  | 'kebabCase'
  | 'noCase'
  | 'pascalCase'
  | 'pascalSnakeCase'
  | 'pathCase'
  | 'sentenceCase'
  | 'snakeCase'
  | 'trainCase'

const CaseConverter = () => {
  const [selectedCase, setSelectedCase] = useState<ChangeCaseType>('camelCase')
  const [text, setText] = useChangeCase('Hello World', selectedCase)
  const [inputText, setInputText] = useState('Hello World')

  const cases: ChangeCaseType[][] = [
    ['camelCase', 'capitalCase', 'constantCase', 'dotCase'],
    ['kebabCase', 'noCase', 'pascalCase', 'pascalSnakeCase'],
    ['pathCase', 'sentenceCase', 'snakeCase', 'trainCase'],
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value)
    setText(e.target.value)
  }

  return (
    <div className="bg-gray-900 p-6 rounded-lg text-gray-300 max-w-3xl">
      <div className="mb-6">
        <input
          type="text"
          value={inputText}
          onChange={handleInputChange}
          className="w-full bg-gray-800 border border-gray-700 rounded p-2 text-gray-300"
          placeholder="Enter text to transform..."
        />
      </div>

      {cases.map((row, rowIndex) => (
        <div key={rowIndex} className="flex gap-4 mb-2">
          {row.map((caseType) => (
            <button
              key={caseType}
              onClick={() => setSelectedCase(caseType)}
              className={cn(
                'flex items-center gap-2 hover:text-gray-100 transition-colors',
                selectedCase === caseType ? 'text-emerald-400' : ''
              )}
            >
              <div
                className={cn(
                  'w-3 h-3 rounded-full',
                  selectedCase === caseType ? 'bg-emerald-400' : 'bg-gray-600'
                )}
              />
              <span className="text-lg">{caseType}</span>
            </button>
          ))}
        </div>
      ))}

      <div className="mt-6 p-4 bg-gray-800 rounded">
        <p className="font-mono text-lg">{text}</p>
      </div>
    </div>
  )
}

export default CaseConverter

      `}</code>
      </pre>
    </div>
  )
}

export default CaseConverter
