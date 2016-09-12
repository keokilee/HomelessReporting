// @flow
import Config from 'react-native-config'

type ReportParams = {
  latitude: number,
  longitude: number,
  name: string,
  phone: string,
  photo: string,
  description: ?string
}

export function createReport (params: ReportParams) {
  const url = `${Config.IHS_SERVER_URL}/reports`
  return fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(params)
  }).then(response => response.json())
}
