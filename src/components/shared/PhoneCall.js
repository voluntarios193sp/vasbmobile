import { Linking } from 'react-native'

const isString = (str) => Object.prototype.toString.call(str) === '[object String]'

const createError = (msg = '') => Promise.reject(new Error(msg))

const openLink = (url, cb) => {
  return Linking.canOpenURL(url).then(canOpen => {
    if (!canOpen) {
      return createError(`invalid URL provided: ${url}`)
    } else {
      return Linking.openURL(url).catch((err) => Promise.reject(err))
    }
  })
}

const call = (number) => {
  if (!number) { return createError('no number provided') }
  if (!isString(number)) { return createError('number should be string') }

  const url = `tel:${number}`

  return openLink(url)
}

export default call