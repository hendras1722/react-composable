'use client'
import { useState } from 'react'
import { useImage } from '@msa_cli/react-composable'
import { Button } from '@/components/ui/button'

export default function UseImageComponent() {
  const colors = ['fff', 'ababa', '5f0caa']
  const [imageSrc, setImageSrc] = useState(() => {
    const initialColor = colors[Math.floor(Math.random() * colors.length)]
    return `https://place-hold.it/300x200/${initialColor}`
  })

  const { loading, error, image } = useImage({
    src: imageSrc,
    alt: 'Example image',
  })

  function change() {
    const color = colors[Math.floor(Math.random() * colors.length)]
    setImageSrc(`https://place-hold.it/300x200/${color}`)
  }

  return (
    <div className="space-y-4">
      <div className="min-h-[200px]">
        {loading && <div>Loading...</div>}
        {error && <div>Error loading image: {error.message}</div>}
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            width={0}
            height={0}
            className="w-full"
          />
        )}
      </div>
      <Button
        onClick={change}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Change Image
      </Button>
      <Button
        onClick={() => setImageSrc('')}
        className="px-4 py-2 bg-red-500 text-white rounded ml-3"
      >
        Error
      </Button>

      <div className="mt-5">How to use:</div>
      <pre className="bg-gray-100 rounded-lg overflow-auto h-96 mt-3  p-3">
        <code className="text-black">{`
'use client'
import { useState } from 'react'
import { useImage } from '@msa_cli/react-composable'
import { Button } from '@/components/ui/button'

export default function UseImageComponent() {
  const colors = ['fff', 'ababa', '5f0caa']
  const [imageSrc, setImageSrc] = useState(() => {
    const initialColor = colors[Math.floor(Math.random() * colors.length)]
    return 'https://place-hold.it/300x200/' + initialColor
  })

  const { loading, error, image } = useImage({
    src: imageSrc,
    alt: 'Example image',
  })

  function change() {
    const color = colors[Math.floor(Math.random() * colors.length)]
    setImageSrc('https://place-hold.it/300x200/' + initialColor)
  }

  return (
    <div className="space-y-4">
      <div className="min-h-[200px]">
        {loading && <div>Loading...</div>}
        {error && <div>Error loading image: {error.message}</div>}
        {image && (
          <img
            src={image.src}
            alt={image.alt}
            width={0}
            height={0}
            className="w-full"
          />
        )}
      </div>
      <Button
        onClick={change}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Change Image
      </Button>
      <Button
        onClick={() => setImageSrc('')}
        className="px-4 py-2 bg-red-500 text-white rounded ml-3"
      >
        Error
      </Button>
    </div>
  )
}

      `}</code>
      </pre>
    </div>
  )
}
