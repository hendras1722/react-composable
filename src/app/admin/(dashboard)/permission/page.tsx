'use client'

import { usePermission } from '@msa_cli/react-composable'

export default function PermissionExample() {
  // Simple usage
  const accelerometer = usePermission('accelerometer')
  const accessibilityEvents = usePermission('accessibility-events')
  const ambientLightSensor = usePermission('ambient-light-sensor')
  const backgroundSync = usePermission('background-sync')
  const camera = usePermission('camera')
  const clipboardRead = usePermission('clipboard-read')
  const clipboardWrite = usePermission('clipboard-write')
  const geolocation = usePermission('geolocation')
  const gyroscope = usePermission('gyroscope')
  const magnetometer = usePermission('magnetometer')
  const microphone = usePermission('microphone')
  const notifications = usePermission('notifications')
  const paymentHandler = usePermission('payment-handler')
  const persistentStorage = usePermission('persistent-storage')
  const push = usePermission('push')
  const speaker = usePermission('speaker')
  const localFonts = usePermission('local-fonts')

  return (
    <div>
      <p className="text-lg">accelerometer: {accelerometer}</p>
      <p className="text-lg">accessibility-events: {accessibilityEvents}</p>
      <p className="text-lg">ambient-light-sensor: {ambientLightSensor}</p>
      <p className="text-lg">background-sync: {backgroundSync}</p>
      <p className="text-lg">camera: {camera}</p>
      <p className="text-lg">clipboard-read: {clipboardRead}</p>
      <p className="text-lg">clipboard-write: {clipboardWrite}</p>
      <p className="text-lg">geolocation: {geolocation}</p>
      <p className="text-lg">gyroscope: {gyroscope}</p>
      <p className="text-lg">magnetometer: {magnetometer}</p>
      <p className="text-lg">microphone: {microphone}</p>
      <p className="text-lg">notifications: {notifications}</p>
      <p className="text-lg">payment-handler: {paymentHandler}</p>
      <p className="text-lg">persistent-storage: {persistentStorage}</p>
      <p className="text-lg">push: {push}</p>
      <p className="text-lg">speaker: {speaker}</p>
      <p className="text-lg">local-fonts: {localFonts}</p>

      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import usePermission from '@msa_cli/react-composable'

export default function PermissionExample() {
  // Simple usage
  const accelerometer = usePermission('accelerometer')
  const accessibilityEvents = usePermission('accessibility-events')
  const ambientLightSensor = usePermission('ambient-light-sensor')
  const backgroundSync = usePermission('background-sync')
  const camera = usePermission('camera')
  const clipboardRead = usePermission('clipboard-read')
  const clipboardWrite = usePermission('clipboard-write')
  const geolocation = usePermission('geolocation')
  const gyroscope = usePermission('gyroscope')
  const magnetometer = usePermission('magnetometer')
  const microphone = usePermission('microphone')
  const notifications = usePermission('notifications')
  const paymentHandler = usePermission('payment-handler')
  const persistentStorage = usePermission('persistent-storage')
  const push = usePermission('push')
  const speaker = usePermission('speaker')
  const localFonts = usePermission('local-fonts')

  return (
    <div>
      <p className="text-lg">accelerometer: {accelerometer}</p>
      <p className="text-lg">accessibility-events: {accessibilityEvents}</p>
      <p className="text-lg">ambient-light-sensor: {ambientLightSensor}</p>
      <p className="text-lg">background-sync: {backgroundSync}</p>
      <p className="text-lg">camera: {camera}</p>
      <p className="text-lg">clipboard-read: {clipboardRead}</p>
      <p className="text-lg">clipboard-write: {clipboardWrite}</p>
      <p className="text-lg">geolocation: {geolocation}</p>
      <p className="text-lg">gyroscope: {gyroscope}</p>
      <p className="text-lg">magnetometer: {magnetometer}</p>
      <p className="text-lg">microphone: {microphone}</p>
      <p className="text-lg">notifications: {notifications}</p>
      <p className="text-lg">payment-handler: {paymentHandler}</p>
      <p className="text-lg">persistent-storage: {persistentStorage}</p>
      <p className="text-lg">push: {push}</p>
      <p className="text-lg">speaker: {speaker}</p>
      <p className="text-lg">local-fonts: {localFonts}</p>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
