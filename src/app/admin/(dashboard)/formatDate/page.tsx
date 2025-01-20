import { useDateFormat, useRelativeDate } from '@msa_cli/react-composable'
import { id } from 'date-fns/locale'

export default function FormatDate() {
  // formatted date
  const formattedDate = useDateFormat(new Date(), 'MM/dd/yyyy')

  // With locale
  const frenchDate = useDateFormat(new Date(), 'PPPP', { locale: id })

  // Relative time
  const relativeTime = useRelativeDate(new Date(2024, 0, 1))

  return (
    <div>
      <p>Formatted: {formattedDate}</p>
      <p>Indonesia: {frenchDate}</p>
      <p>Relative: {relativeTime}</p>

      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-300 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
import { useDateFormat, useRelativeDate } from '@msa_cli/react-composable'
import { id } from 'date-fns/locale'

export default function FormatDate() {
  // formatted date
  const formattedDate = useDateFormat(new Date(), 'MM/dd/yyyy')

  // With locale
  const frenchDate = useDateFormat(new Date(), 'PPPP', { locale: id })

  // Relative time
  const relativeTime = useRelativeDate(new Date(2024, 0, 1))

  return (
    <div>
      <p>Formatted: {formattedDate}</p>
      <p>Indonesia: {frenchDate}</p>
      <p>Relative: {relativeTime}</p>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
