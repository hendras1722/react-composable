import { useState, useMemo, useCallback } from 'react'

// Define the case transformers directly since we're not using change-case library
const caseTransformers = {
  camelCase: (str: string): string => {
    // Split by spaces and other non-alphanumeric characters
    const words = str.split(/[^a-zA-Z0-9]+/)

    // Make first word lowercase, capitalize others
    return words
      .map((word, index) => {
        if (index === 0) {
          // First word should be lowercase
          return word.toLowerCase()
        }
        // Other words should have first letter capitalized
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
      })
      .join('')
  },
  capitalCase: (str: string): string => {
    return str.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
  },
  constantCase: (str: string): string => {
    return str.toUpperCase().replace(/[^A-Z0-9]+/g, '_')
  },
  dotCase: (str: string): string => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '.')
  },
  kebabCase: (str: string): string => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '-')
  },
  noCase: (str: string): string => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, ' ')
  },
  pascalCase: (str: string): string => {
    // Split by spaces and other non-alphanumeric characters
    const words = str.split(/[^a-zA-Z0-9]+/)

    // Capitalize first letter of each word
    return words
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('')
  },
  pascalSnakeCase: (str: string): string => {
    return str
      .split(/[^a-zA-Z0-9]+/)
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join('_')
  },
  pathCase: (str: string): string => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '/')
  },
  sentenceCase: (str: string): string => {
    return str.toLowerCase().replace(/^\w/, (char) => char.toUpperCase())
  },
  snakeCase: (str: string): string => {
    return str.toLowerCase().replace(/[^a-zA-Z0-9]+/g, '_')
  },
  trainCase: (str: string): string => {
    return str
      .toLowerCase()
      .replace(/[^a-zA-Z0-9]+/g, '-')
      .replace(
        /(^|-)([a-z])/g,
        (_, separator, char) => separator + char.toUpperCase()
      )
  },
}

// Create the type from the keys of our transformer object
type ChangeCaseType = keyof typeof caseTransformers

// Options interface
interface Options {
  [key: string]: any
}

/**
 * React hook for transforming strings using various case transformations
 * @param initialInput The initial string input
 * @param type The case transformation type to apply
 * @param options Optional configuration for the transformation
 * @returns [transformedValue, setValue] - The transformed string and a function to update the input
 */
function useChangeCase(
  initialInput: string,
  type: ChangeCaseType,
  options?: Options
): [string, (value: string) => void] {
  // Validate the transformation type
  if (!caseTransformers[type]) {
    throw new Error(`Invalid change case type "${type}"`)
  }

  // State to hold the input value
  const [input, setInput] = useState(initialInput)

  // Memoize the transformed value to avoid unnecessary recalculations
  const transformedValue = useMemo(() => {
    return caseTransformers[type](input)
  }, [input, type, options])

  // Create a stable function reference to update the input
  const setValue = useCallback((value: string) => {
    setInput(value)
  }, [])

  return [transformedValue, setValue]
}

export { useChangeCase, caseTransformers, type ChangeCaseType }
