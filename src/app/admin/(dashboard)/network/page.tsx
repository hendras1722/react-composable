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
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-300 rounded-lg overflow-auto h-96 mt-3  p-3">
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
