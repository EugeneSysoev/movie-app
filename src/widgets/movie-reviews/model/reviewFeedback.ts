import DOMPurify from 'dompurify'

export const MAX_COMMENT_LENGTH = 2000

export type ReviewReaction = 'like' | 'dislike' | null

export interface LocalComment {
  id: string
  content: string
  createdAt: string
}

export interface ReviewFeedback {
  reaction: ReviewReaction
  comments: LocalComment[]
}

export function validateComment(content: string): string | null {
  if (!content.trim()) return 'Введите комментарий.'
  if (content.length > MAX_COMMENT_LENGTH) {
    return `Комментарий должен содержать не больше ${MAX_COMMENT_LENGTH} символов.`
  }

  const normalizedText = content.replace(/\r\n?/g, '\n')

  const escapedText = normalizedText.replace(/&/g, '&amp;')
  const cleanFragment = DOMPurify.sanitize(escapedText, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: [],
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false,
    RETURN_DOM_FRAGMENT: true
  })

  if (cleanFragment.textContent !== normalizedText) {
    return 'HTML-разметка запрещена. Оставьте обычный текст.'
  }

  return null
}
