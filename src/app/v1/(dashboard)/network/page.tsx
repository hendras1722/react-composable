'use client'

import { Textarea } from '@/components/ui/textarea'
import { useFetch, useNetwork } from '@msa_cli/react-composable'

export default function NetworkStatus() {
  const network = useNetwork()
  const { data } = useFetch('/api/data', {})
  return (
    <div>
      {JSON.stringify(data)}
      <p className="text-sm">Online: {network.isOnline ? 'Yes' : 'No'}</p>
      <p className="text-sm">Connection Type: {network.type}</p>
      <p className="text-sm">Network Speed: {network.effectiveType}</p>
      <p className="text-sm">network: </p>{' '}
      <Textarea
        readOnly
        rows={10}
        onChange={(e) => console.log(e.target.value)}
        value={JSON.stringify(network, null, 5)}
      />
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { useNetwork } from '@msa_cli/react-composable'

export default function NetworkStatus() {
  const network = useNetwork()

  return (
    <div>
      <p>Online: {network.isOnline ? 'Yes' : 'No'}</p>
      <p>Connection Type: {network.type}</p>
      <p>Network Speed: {network.effectiveType}</p>
      <p>network: {JSON.stringify(network, null, 2)}</p>
    </div>
  )
}

      `}</code>
      </pre>
    </div>
  )
}
