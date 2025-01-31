'use client'
import { Button } from '@/components/ui/button'
import {
  useDevicesList,
  type UseDevicesListResult,
} from '@msa_cli/react-composable'
import { FaCamera, FaHeadphones, FaMicrophone } from 'react-icons/fa6'

function DeviceSelector() {
  const {
    videoInputs: cameras,
    audioInputs: microphones,
    audioOutputs: speakers,
    permissionGranted,
    ensurePermissions,
  } = useDevicesList({
    requestPermissions: true,
  }) as UseDevicesListResult

  return (
    <div>
      <div className="flex justify-center mb-5">
        {!permissionGranted && (
          <Button onClick={ensurePermissions}>Request Permissions</Button>
        )}
      </div>
      <div className="grid grid-cols-3 text-center place-items-center place-content-start gap-2 py-4">
        <FaCamera className="text-5xl" />
        <FaMicrophone className="text-5xl" />
        <FaHeadphones className="text-5xl" />

        <div className="title">Camera ({cameras.length})</div>
        <div className="title">Microphones ({microphones.length})</div>
        <div className="title">Speakers ({speakers.length})</div>

        <div>
          {cameras.length > 0 &&
            cameras.map((item, index) => (
              <div key={'cameras-' + index}>{item.label}</div>
            ))}
        </div>
        <div>
          {microphones.length > 0 &&
            microphones.map((item, index) => (
              <div key={'microphone-' + index}>{item.label}</div>
            ))}
        </div>
        <div>
          {speakers.length > 0 &&
            speakers.map((item, index) => (
              <div key={'speaker-' + index}>{item.label}</div>
            ))}
        </div>
      </div>
      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { Button } from '@/components/ui/button'
import useDevicesList, {
  type UseDevicesListResult,
} from '@msa_cli/react-composable'
import { FaCamera, FaHeadphones, FaMicrophone } from 'react-icons/fa6'

export default function DeviceSelector() {
  const {
    videoInputs: cameras,
    audioInputs: microphones,
    audioOutputs: speakers,
    permissionGranted,
    ensurePermissions,
  } = useDevicesList({
    requestPermissions: true,
  }) as UseDevicesListResult

  return (
    <div>
      <div className="flex justify-center mb-5">
        {!permissionGranted && (
          <Button onClick={ensurePermissions}>Request Permissions</Button>
        )}
      </div>
      <div className="grid grid-cols-3 text-center place-items-center place-content-start gap-2 py-4">
        <FaCamera className="text-5xl" />
        <FaMicrophone className="text-5xl" />
        <FaHeadphones className="text-5xl" />

        <div className="title">Camera ({cameras.length})</div>
        <div className="title">Microphones ({microphones.length})</div>
        <div className="title">Speakers ({speakers.length})</div>

        <div>
          {cameras.length > 0 &&
            cameras.map((item, index) => (
              <div key={'cameras-' + index}>{item.label}</div>
            ))}
        </div>
        <div>
          {microphones.length > 0 &&
            microphones.map((item, index) => (
              <div key={'microphone-' + index}>{item.label}</div>
            ))}
        </div>
        <div>
          {speakers.length > 0 &&
            speakers.map((item, index) => (
              <div key={'speaker-' + index}>{item.label}</div>
            ))}
        </div>
      </div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}

export default DeviceSelector
