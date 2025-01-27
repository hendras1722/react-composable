import { useEffect, useState } from 'react'
import { useSupported } from '@msa_cli/react-composable'

export interface UseUserMediaOptions {
  /**
   * If the stream is enabled
   * @default false
   */
  enabled?: boolean

  /**
   * Recreate stream when deviceIds or constraints change
   * @default true
   */
  autoSwitch?: boolean

  /**
   * MediaStreamConstraints to be applied to the requested MediaStream
   * If provided, the constraints will override videoDeviceId and audioDeviceId
   * @default {}
   */
  constraints?: MediaStreamConstraints
}

/**
 * Reactive mediaDevices.getUserMedia streaming
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaDevices/getUserMedia
 * @param options
 */
export default function useUserMedia(options: UseUserMediaOptions = {}) {
  const {
    enabled: initialEnabled = false,
    autoSwitch = true,
    constraints: initialConstraints = { video: true }, // Default to video
  } = options

  const [enabled, setEnabled] = useState(initialEnabled)
  const [constraints, setConstraints] = useState(initialConstraints)
  const [stream, setStream] = useState<MediaStream | undefined>(undefined)

  const isSupported = useSupported(
    () => navigator?.mediaDevices?.getUserMedia !== undefined
  )

  const start = async () => {
    if (!isSupported || stream) return

    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia(constraints)
      setStream(mediaStream)
      setEnabled(true)
      return mediaStream
    } catch (error) {
      console.error('Failed to start media stream:', error)
      return undefined
    }
  }

  const stop = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(undefined)
    }
    setEnabled(false)
  }

  const restart = async () => {
    stop()
    return await start()
  }

  useEffect(() => {
    if (enabled) {
      start()
    } else {
      stop()
    }

    return () => stop()
  }, [enabled])

  useEffect(() => {
    if (autoSwitch && stream) {
      restart()
    }
  }, [constraints])

  return {
    isSupported,
    stream,
    start,
    stop,
    restart,
    setConstraints,
    enabled,
    setEnabled,
  }
}

export type UseUserMediaReturn = ReturnType<typeof useUserMedia>
