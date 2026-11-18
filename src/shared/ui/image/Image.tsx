import { useState } from 'react'
import iconNoImg from '@/shared/assets/icons/no-image.svg'
import styles from './Image.module.css'

export interface ImageProps {
  src: string | null
  alt: string
  className: string
  loading?: 'eager' | 'lazy'
  fetchPriority?: 'high' | 'low' | 'auto'
  canLoad?: boolean
}

export function Image(props: ImageProps) {
  const { src, alt, className, loading, fetchPriority, canLoad = true } = props

  const [loadedSrc, setLoadedSrc] = useState<string | null>(null)
  const [failedSrc, setFailedSrc] = useState<string | null>(null)

  const isLoaded = src !== null && src === loadedSrc
  const isError = src !== null && src === failedSrc

  const imgClassName = `${styles.image} ${isLoaded ? styles['image--loaded'] : ''}`

  return (
    <div className={`${styles.frame} ${className}`}>
      {canLoad &&
        (src === null || isError ? (
          <img className={styles.placeholderIcon} src={iconNoImg} alt="" />
        ) : (
          <img
            className={imgClassName}
            src={src}
            decoding="async"
            alt={alt}
            loading={loading}
            fetchPriority={fetchPriority}
            onLoad={() => setLoadedSrc(src)}
            onError={() => setFailedSrc(src)}
          />
        ))}
    </div>
  )
}
