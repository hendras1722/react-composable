'use client'

import { useDisplayMedia } from '@msa_cli/react-composable'
import React, { useRef, useEffect } from 'react'

function SimpleScreenShare() {
  const { stream, error, startSharing, stopSharing, isSharing } =
    useDisplayMedia({ video: true, audio: false })
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null // Clean up the video source
      }
    }
  }, [stream])

  return (
    <div>
      <h1>Simple Screen Share</h1>
      <button onClick={isSharing ? stopSharing : startSharing}>
        {isSharing ? 'Stop Sharing' : 'Start Sharing'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      <video ref={videoRef} autoPlay muted width="640" height="360" />

      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import { useDisplayMedia } from '@msa_cli/react-composable'
import React, { useRef, useEffect } from 'react'

function SimpleScreenShare() {
  const { stream, error, startSharing, stopSharing, isSharing } =
    useDisplayMedia({ video: true, audio: false })
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.srcObject = null // Clean up the video source
      }
    }
  }, [stream])

  return (
    <div>
      <h1>Simple Screen Share</h1>
      <button onClick={isSharing ? stopSharing : startSharing}>
        {isSharing ? 'Stop Sharing' : 'Start Sharing'}
      </button>
      {error && <p style={{ color: 'red' }}>Error: {error.message}</p>}
      <video ref={videoRef} autoPlay muted width="640" height="360" />
    </div>
  )
}

export default SimpleScreenShare
      `}</code>
      </pre>
    </div>
  )
}

export default SimpleScreenShare
