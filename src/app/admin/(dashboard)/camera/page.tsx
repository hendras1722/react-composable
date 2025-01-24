'use client'

import React, { useEffect } from 'react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Textarea } from '@/components/ui/textarea'
import { useElementBounding, useCamera } from '@msa_cli/react-composable'
import { cn } from '@/utils/lib'

export default function CameraComponent() {
  const [constraints, setConstraints] = React.useState({
    video: {
      width: { ideal: 275 },
      height: { ideal: 567 },
    },
  })
  const { start, stop, switchCamera, picture, takeSnapshot, loadingVideos } =
    useCamera(constraints)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const { width, height } = useElementBounding(
    videoRef as React.RefObject<HTMLElement>
  )

  useEffect(() => {
    setConstraints({
      video: {
        width: { ideal: 275 },
        height: { ideal: 567 },
      },
    })
  }, [width, height])

  useEffect(() => {
    start()
    return () => stop()
  }, [])

  return (
    <div>
      <div>Default constraints</div>
      <Textarea
        onChange={() => {}}
        className="mb-5"
        rows={15}
        value={JSON.stringify(
          {
            audio: false,
            video: {
              width: { ideal: 640 },
              height: { ideal: 480 },
              facingMode: 'user',
              frameRate: { ideal: 30 },
            },
          },
          null,
          2
        )}
      />
      {loadingVideos && <p>Loading camera...</p>}
      <div className={cn('relative', `min-w-${width}px] min-h-[${height}px]`)}>
        <video
          ref={videoRef}
          id="video"
          width="0"
          height="0"
          style={{ width: '50%', height: '50%', border: '1px solid black' }}
        ></video>
        {/* set frame as background customized width only. don't change height,customize width with tag video */}
        <div className="absolute w-full h-full z-10 top-0 ">
          <Image
            src="/frame.png"
            width={0}
            height={0}
            alt="frame"
            className="w-2/4 h-full"
          />
        </div>
      </div>

      {picture && (
        <Image
          src={picture ?? ''}
          alt="wewe"
          width={0}
          height={0}
          className="w-auto h-auto"
        />
      )}
      <div className="flex gap-3 mt-5 flex-wrap">
        <Button onClick={() => switchCamera('user')}>Front Camera</Button>
        <Button onClick={() => switchCamera('environment')}>Back Camera</Button>
        <Button onClick={() => stop()}>Stop</Button>
        <Button onClick={() => start()}>Start</Button>
        <Button onClick={() => takeSnapshot()}>takeSnapshot</Button>
      </div>

      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'

import React, { useEffect } from 'react'
import useCamera from '@/composable/useCamera'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { Textarea } from '@/components/ui/textarea'
import { useElementBounding } from '@msa_cli/react-composable'
import { cn } from '@/utils/lib'

export default function CameraComponent() {
  const [constraints, setConstraints] = React.useState({
    video: {
      width: { ideal: 275 },
      height: { ideal: 567 },
    },
  })
  const { start, stop, switchCamera, picture, takeSnapshot, loadingVideos } =
    useCamera(constraints)
  const videoRef = React.useRef<HTMLVideoElement>(null)
  const { width, height } = useElementBounding(
    videoRef as React.RefObject<HTMLElement>
  )

  useEffect(() => {
    setConstraints({
      video: {
        width: { ideal: 275 },
        height: { ideal: 567 },
      },
    })
  }, [width, height])

  useEffect(() => {
    start()
    return () => stop()
  }, [])

  return (
    <div>
      <div>Default constraints</div>
      <Textarea
        onChange={() => {}}
        className="mb-5"
        rows={15}
        value={JSON.stringify(
          {
            audio: false,
            video: {
              width: { ideal: 640 },
              height: { ideal: 480 },
              facingMode: 'user',
              frameRate: { ideal: 30 },
            },
          },
          null,
          2
        )}
      />
      {loadingVideos && <p>Loading camera...</p>}
      <div className={cn('relative', 'min-w-[${width}px] min-h-[${height}px]'}>
        <video
          ref={videoRef}
          id="video"
          width="0"
          height="0"
          style={{ width: '50%', height: '50%', border: '1px solid black' }}
        ></video>
        {/* set frame as background customized width only. don't change height,customize width with tag video */}
        <div className="absolute w-full h-full z-10 top-0 ">
          <Image
            src="/frame.png"
            width={0}
            height={0}
            alt="frame"
            className="w-2/4 h-full"
          />
        </div>
      </div>

      {picture && (
        <Image
          src={picture ?? ''}
          alt="wewe"
          width={0}
          height={0}
          className="w-auto h-auto"
        />
      )}
      <div className="flex gap-3 mt-5 flex-wrap">
        <Button onClick={() => switchCamera('user')}>Front Camera</Button>
        <Button onClick={() => switchCamera('environment')}>Back Camera</Button>
        <Button onClick={() => stop()}>Stop</Button>
        <Button onClick={() => start()}>Start</Button>
        <Button onClick={() => takeSnapshot()}>takeSnapshot</Button>
      </div>
    </div>
  )
}
      `}</code>
      </pre>
    </div>
  )
}
