import { useState } from 'react'
import styles from './HeroPoster.module.css'

type ImageStatus = 'loading' | 'loaded' | 'error'

interface HeroPosterProps {
  src: string
  priority: boolean
}

export function HeroPoster({ src, priority }: HeroPosterProps) {
  const [status, setStatus] = useState<ImageStatus>('loading')

  const isLoaded = status === 'loaded'
  const isError = status === 'error'

  return (
    <div className={styles.posterFrame}>
      <img
        className={styles.poster}
        data-loaded={isLoaded}
        src={src}
        alt=""
        width={378}
        height={488}
        loading="eager"
        fetchPriority={priority ? 'high' : 'auto'}
        decoding="async"
        onLoad={() => setStatus('loaded')}
        onError={() => setStatus('error')}
      />

      {isError && (
        <span className={styles.posterError}>Не удалось загрузить постер</span>
      )}
    </div>
  )
}
