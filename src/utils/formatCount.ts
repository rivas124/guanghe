import numeral from 'numeral'

export const formatCount = (
  count?: number | string | null,
  int: boolean = false
) => {
  if (count === null || typeof count === 'undefined') {
    return '—'
  }

  if (count < 1000) {
    return count
  }

  const number = typeof count === 'string' ? Number(count) : count
  if (number === 0) {
    return 0
  }

  return numeral(number)
    .format(int ? '0a' : '0.0a')
    .replace('m', 'M')
    .replace('b', 'B')
    .replace('.0', '')
}

export const formatCountFull = (count?: number | string | null) => {
  if (count === null || typeof count === 'undefined') {
    return '—'
  }

  const number = typeof count === 'string' ? Number(count) : count
  if (number === 0) {
    return 0
  }

  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}
