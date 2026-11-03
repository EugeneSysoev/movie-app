import { marked } from 'marked'
import DOMPurify from 'dompurify'

export function parseAndSanitizeMarkdown(content: string): string {
  const rawHtml = marked.parse(content, { async: false })

  const cleanHtml = DOMPurify.sanitize(rawHtml, {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'b', 'em', 'i', 'ul', 'ol', 'li', 'a'],
    ALLOWED_ATTR: ['href', 'title'],
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false,
    ALLOWED_URI_REGEXP: /^https?:\/\//i
  })

  return cleanHtml
}
