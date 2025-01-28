'use client'

import React, { useEffect } from 'react'
import { useCamera } from '@msa_cli/react-composable'
import { useRoute } from '@/composable/useRoute'

function CameraPage() {
  const {
    videoRef,
    error,
    startCamera,
    stream,
    stopCamera,
    setIsFrontCamera,
    deviceId,
    setDeviceId,
    devices,
    takeSnapshot,
    canvasRef,
    snapshotBlob,
  } = useCamera()

  const route = useRoute()

  useEffect(() => {
    console.log('Effect is running')
    return () => {
      console.log('Stopping camera')
      stopCamera()
    }
  }, [route.pathname, stopCamera])

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Camera Control Page</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="mb-4">
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
      </div>

      <div className="space-x-2 mb-4">
        <button
          onClick={startCamera}
          disabled={!!stream}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Start Camera
        </button>
        <button
          onClick={stopCamera}
          disabled={!stream}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
        >
          Stop Camera
        </button>
        <button
          onClick={() => {
            setIsFrontCamera((prev) => !prev)
            stopCamera()
            setTimeout(startCamera, 500)
          }}
          disabled={!stream}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
        >
          Switch Camera
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="deviceSelect" className="mr-2">
          Select Camera:
        </label>
        <select
          id="deviceSelect"
          value={deviceId ?? ''}
          onChange={(e) => {
            setDeviceId(e.target.value)
            stopCamera()
            setTimeout(startCamera, 500)
          }}
          disabled={!devices.length || !stream}
          className="px-2 py-1 border rounded"
        >
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || 'Unknown Camera'}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <button
          onClick={takeSnapshot}
          disabled={!stream}
          className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-gray-300"
        >
          Take Snapshot
        </button>
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>

      {snapshotBlob && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Snapshot Preview:</h3>
          <img
            src={URL.createObjectURL(snapshotBlob)}
            alt="Snapshot"
            className="max-w-full rounded"
          />
        </div>
      )}

      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import React from 'react'
import { useCamera } from '@msa_cli/react-composable'

function CameraPage() {
  const {
    videoRef,
    error,
    startCamera,
    stream,
    stopCamera,
    setIsFrontCamera,
    deviceId,
    setDeviceId,
    devices,
    takeSnapshot,
    canvasRef,
    snapshotBlob,
  } = useCamera()

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Camera Control Page</h1>

      {error && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
          {error}
        </div>
      )}

      <div className="mb-4">
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
      </div>

      <div className="space-x-2 mb-4">
        <button
          onClick={startCamera}
          disabled={!!stream}
          className="px-4 py-2 bg-blue-500 text-white rounded disabled:bg-gray-300"
        >
          Start Camera
        </button>
        <button
          onClick={stopCamera}
          disabled={!stream}
          className="px-4 py-2 bg-red-500 text-white rounded disabled:bg-gray-300"
        >
          Stop Camera
        </button>
        <button
          onClick={() => {
            setIsFrontCamera((prev) => !prev)
            stopCamera()
            setTimeout(startCamera, 500)
          }}
          disabled={!stream}
          className="px-4 py-2 bg-green-500 text-white rounded disabled:bg-gray-300"
        >
          Switch Camera
        </button>
      </div>

      <div className="mb-4">
        <label htmlFor="deviceSelect" className="mr-2">
          Select Camera:
        </label>
        <select
          id="deviceSelect"
          value={deviceId ?? ''}
          onChange={(e) => {
            setDeviceId(e.target.value)
            stopCamera()
            setTimeout(startCamera, 500)
          }}
          disabled={!devices.length || !stream}
          className="px-2 py-1 border rounded"
        >
          {devices.map((device) => (
            <option key={device.deviceId} value={device.deviceId}>
              {device.label || 'Unknown Camera'}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-4">
        <button
          onClick={takeSnapshot}
          disabled={!stream}
          className="px-4 py-2 bg-purple-500 text-white rounded disabled:bg-gray-300"
        >
          Take Snapshot
        </button>
        <canvas ref={canvasRef} style={{ display: 'none' }} />
      </div>

      {snapshotBlob && (
        <div>
          <h3 className="text-xl font-semibold mb-2">Snapshot Preview:</h3>
          <img
            src={URL.createObjectURL(snapshotBlob)}
            alt="Snapshot"
            className="max-w-full rounded"
          />
        </div>
      )}
      
    </div>
  )
}
export default CameraPage
      `}</code>
      </pre>
    </div>
  )
}

export default CameraPage
