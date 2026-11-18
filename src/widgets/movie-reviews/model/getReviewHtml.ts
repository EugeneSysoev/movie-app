import { Marked, Parser, type Token } from 'marked'
import DOMPurify from 'dompurify'

const markdown = new Marked({
  gfm: true,
  breaks: true,
  renderer: {
    paragraph({ tokens }) {
      const body = tokens.map((token) => {
        if (token.type === 'br' && token.raw === '\n') return '</p>\n<p>'
        return this.parser.parseInline([token])
      }).join('')

      return `<p>${body}</p>\n`
    },
    heading({ tokens }) {
      return `<p><strong>${this.parser.parseInline(tokens)}</strong></p>\n`
    }
  }
})

function normalizeOpeningBold(content: string) {
  return content.replace(/^\*\*([^*]+)\*\*(?=[ \t]*(?:\n|$))/, (original, text: string) => {
    const stanzas = text.split(/\n(?:[ \t]*\n)+/)
    if (stanzas.length === 1) return original
    return stanzas.map((stanza) => `**${stanza.trim()}**`).join('\n\n')
  })
}

function takeTitle(blocks: Token[]): Token[] {
  const first = blocks[0]
  if (first?.type === 'heading' && first.tokens) {
    blocks.shift()
    return first.tokens
  }

  if (first?.type === 'paragraph' && first.tokens) {
    const [lead, next] = first.tokens
    if (lead?.type === 'strong' && !lead.raw.includes('\n') && (!next || next.type === 'br')) {
      if (next) first.tokens = first.tokens.slice(2)
      else blocks.shift()
      return [lead]
    }
  }
  return []
}

export function getReviewHtml(content = '') {
  const source = normalizeOpeningBold(content.replace(/\r\n?/g, '\n').trim())
  const blocks = markdown.lexer(source)
  const title = DOMPurify.sanitize(Parser.parseInline(takeTitle(blocks)), {
    ALLOWED_TAGS: [],
    RETURN_DOM_FRAGMENT: true
  }).textContent?.trim() ?? ''

  const html = DOMPurify.sanitize(markdown.parser(blocks), {
    ALLOWED_TAGS: ['p', 'br', 'strong', 'b', 'em', 'i', 'ul', 'ol', 'li', 'a'],
    ALLOWED_ATTR: ['href', 'title'],
    ALLOW_DATA_ATTR: false,
    ALLOW_ARIA_ATTR: false,
    ALLOWED_URI_REGEXP: /^https?:\/\//i
  })

  return { title, html: html.trim() }
}
