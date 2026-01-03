export function formatDate(date) {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(new Date(date))
}

export function formatRelativeTime(date) {
  const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' })
  const diff = new Date(date) - new Date()
  const diffDays = Math.ceil(diff / (1000 * 60 * 60 * 24))

  if (Math.abs(diffDays) < 1) {
    const diffHours = Math.ceil(diff / (1000 * 60 * 60))
    return rtf.format(diffHours, 'hour')
  }

  return rtf.format(diffDays, 'day')
}
