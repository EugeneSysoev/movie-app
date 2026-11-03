import { Button } from '@/shared/ui/button'
import { useId, useRef, useState, type FormEvent } from 'react'
import {
  MAX_COMMENT_LENGTH,
  validateComment,
  type LocalComment
} from '../model/reviewFeedback'
import { getReviewDate } from '../model/reviewDetails'
import styles from './MovieReviews.module.css'

interface ReviewCommentsProps {
  comments: LocalComment[]
  onAddComment: (comment: LocalComment) => void
}

export function ReviewComments({ comments, onAddComment }: ReviewCommentsProps) {
  const [content, setContent] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)
  const fieldId = useId()
  const hintId = `${fieldId}-hint`
  const errorId = `${fieldId}-error`
  const validationError = validateComment(content)
  const visibleError = content.length > 0 || isTouched ? validationError : null

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setIsTouched(true)
    if (validateComment(content)) return

    onAddComment({
      id: crypto.randomUUID(),
      content: content.trim(),
      createdAt: new Date().toISOString()
    })
    setContent('')
    setIsTouched(false)
    textareaRef.current?.focus()
  }

  return (
    <section className={styles.comments} aria-label="Комментарии к рецензии">
      <h4 className={styles.commentsTitle}>
        Комментарии{comments.length > 0 && ` (${comments.length})`}
      </h4>
      {comments.length > 0 && (
        <ul className={styles.commentList} aria-live="polite">
          {comments.map((comment) => (
            <li className={styles.comment} key={comment.id}>
              <div className={styles.commentMeta}>
                <span className={styles.commentAuthor}>Вы</span>
                <time dateTime={comment.createdAt}>
                  {getReviewDate(comment.createdAt)}
                </time>
              </div>
              <p className={styles.commentText}>{comment.content}</p>
            </li>
          ))}
        </ul>
      )}
      <form className={styles.commentForm} onSubmit={handleSubmit} noValidate>
        <label htmlFor={fieldId}>Ваш комментарий</label>
        <textarea
          id={fieldId}
          className={styles.commentInput}
          ref={textareaRef}
          value={content}
          rows={3}
          placeholder="Написать комментарий…"
          aria-invalid={visibleError ? true : undefined}
          aria-describedby={`${hintId}${visibleError ? ` ${errorId}` : ''}`}
          onChange={(event) => setContent(event.currentTarget.value)}
          onBlur={() => setIsTouched(true)}
        />
        <div className={styles.commentHint} id={hintId}>
          <span>Обычный текст, до {MAX_COMMENT_LENGTH} символов</span>
          <span>{content.length}/{MAX_COMMENT_LENGTH}</span>
        </div>
        {visibleError && (
          <p className={styles.fieldError} id={errorId} role="alert">
            {visibleError}
          </p>
        )}
        <Button type="submit" className={styles.publishButton} disabled={Boolean(validationError)}>
          Опубликовать
        </Button>
      </form>
    </section>
  )
}
