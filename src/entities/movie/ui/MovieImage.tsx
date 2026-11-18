import { TMDB_IMAGE_URLS } from '@/shared/config'
import { Image } from '@/shared/ui/image'

interface MovieImageProps {
  imagePath: string | null
  size: 'w780' | 'w1280'
  className: string
  loading?: 'eager' | 'lazy'
  canLoad?: boolean
}

export function MovieImage(props: MovieImageProps) {
  const { imagePath, size, className, loading, canLoad } = props
  const backdropUrl = imagePath ? `${TMDB_IMAGE_URLS[size]}${imagePath}` : null

  return (
    <Image src={backdropUrl} alt="" className={className} loading={loading} canLoad={canLoad} />
  )
}
