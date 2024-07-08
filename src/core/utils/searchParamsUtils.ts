export const objectToSearchParamString = (object: SearchParamsObject) => {
  const searchArr = Object.entries(object)

  if (searchArr.length === 0) return ''

  return searchArr.reduce((prev, [key, value], idx) => {
    if (idx === searchArr.length - 1) return `${prev}${key}=${value}`
    return `${prev}${key}=${value}&`
  }, '?')
}
