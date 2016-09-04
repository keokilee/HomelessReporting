// @flow

export function getLocation (opts: Object = {}) {
  const options = {
    enableHighAccuracy: true,
    timeout: 20000,
    maximumAge: 1000,
    ...opts
  }

  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject, options)
  })
}
