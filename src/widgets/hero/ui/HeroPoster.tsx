import { Image } from '@/shared/ui/image'
import styles from './HeroPoster.module.css'

interface HeroPosterProps {
  src: string
  priority: boolean
}

export function HeroPoster({ src, priority }: HeroPosterProps) {
  return (
    <Image
      src={src}
      alt=""
      className={styles.posterFrame}
      loading="eager"
      fetchPriority={priority ? 'high' : 'auto'}
    />
  )
}
