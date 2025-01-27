'use client'

import React, { useState, useEffect, useRef } from 'react'

const CameraPage = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  const [stream, setStream] = useState<MediaStream | null>(null)
  const [deviceId, setDeviceId] = useState<string | null>(null)
  const [devices, setDevices] = useState<MediaDeviceInfo[]>([])
  const [isFrontCamera, setIsFrontCamera] = useState(true)
  const [snapshotBlob, setSnapshotBlob] = useState<Blob | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Fetch available devices
  useEffect(() => {
    const getDevices = async () => {
      try {
        // Request camera permission first
        await navigator.mediaDevices.getUserMedia({ video: true })

        const deviceList = await navigator.mediaDevices.enumerateDevices()
        const videoDevices = deviceList.filter(
          (device) => device.kind === 'videoinput'
        )
        setDevices(videoDevices)

        if (videoDevices.length > 0 && !deviceId) {
          setDeviceId(videoDevices[0].deviceId)
        }
      } catch (err) {
        setError(
          'Failed to access camera devices. Please ensure camera permissions are granted.'
        )
        console.error('Error accessing devices:', err)
      }
    }

    getDevices()
  }, [deviceId])

  // Start the camera with the selected device ID
  const startCamera = async () => {
    try {
      setError(null)
      // First try with exact constraints
      const exactConstraints: MediaStreamConstraints = {
        video: {
          deviceId: deviceId ? { exact: deviceId } : undefined,
          facingMode: isFrontCamera ? 'user' : 'environment',
        },
      }

      try {
        const newStream = await navigator.mediaDevices.getUserMedia(
          exactConstraints
        )
        setStream(newStream)
        if (videoRef.current) {
          videoRef.current.srcObject = newStream
        }
        return
      } catch (exactError) {
        console.log('Exact constraints failed, trying fallback...', exactError)
      }

      // Fallback to more lenient constraints
      const fallbackConstraints: MediaStreamConstraints = {
        video: {
          deviceId: deviceId ? { ideal: deviceId } : undefined,
          facingMode: { ideal: isFrontCamera ? 'user' : 'environment' },
        },
      }

      const newStream = await navigator.mediaDevices.getUserMedia(
        fallbackConstraints
      )
      setStream(newStream)
      if (videoRef.current) {
        videoRef.current.srcObject = newStream
      }
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : 'Unknown error occurred'
      setError(`Failed to start camera: ${errorMessage}`)
      console.error('Error starting camera:', error)
    }
  }

  // Stop the camera
  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop())
      setStream(null)
      if (videoRef.current) {
        videoRef.current.srcObject = null
      }
    }
  }

  // Take a snapshot and get Blob
  const takeSnapshot = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext('2d')

      if (context && video.videoWidth && video.videoHeight) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        canvas.toBlob((blob) => {
          if (blob) {
            setSnapshotBlob(blob)

            // Download the blob as an image file
            const url = URL.createObjectURL(blob)
            const a = document.createElement('a')
            a.href = url
            a.download = `snapshot-${new Date().toISOString()}.png`
            a.click()
            URL.revokeObjectURL(url)
          }
        }, 'image/png')
      }
    }
  }

  function Render() {
    return (
      <video
        ref={videoRef}
        autoPlay
        playsInline
        muted
        style={{
          width: '100%',
          maxHeight: '480px',
          backgroundColor: 'black',
          borderRadius: '8px',
        }}
      />
    )
  }

  return {
    Render,
    startCamera,
    stopCamera,
    takeSnapshot,
    setIsFrontCamera,
    isFrontCamera,
    stream,
    devices,
    deviceId,
    snapshotBlob,
    setDeviceId,
    canvasRef,
    error,
    videoRef,
  }
}

export default CameraPage
