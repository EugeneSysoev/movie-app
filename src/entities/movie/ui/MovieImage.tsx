import { TMDB_IMAGE_URLS } from '@/shared/config'
import { useState } from 'react'
import styles from './MovieImage.module.css'

interface MovieImageProps {
  imagePath: string | null
  size: 'w780' | 'w1280'
  className: string
  loading?: 'eager' | 'lazy'
}

export function MovieImage({
  imagePath,
  size,
  className,
  loading,
}: MovieImageProps) {
  const [failedImagePath, setFailedImagePath] = useState<string | null>(null)

  const backdropUrl =
    imagePath && imagePath !== failedImagePath
      ? `${TMDB_IMAGE_URLS[size]}${imagePath}`
      : null

  return backdropUrl ? (
    <img
      src={backdropUrl}
      alt=""
      className={className}
      loading={loading}
      onError={() => setFailedImagePath(imagePath)}
    />
  ) : (
    <p className={`${styles.placeholder} ${className}`}>
      Изображение отсутствует
    </p>
  )
}
