// @flow
import ImageResizer from 'react-native-image-resizer'
import RNFS from 'react-native-fs'
import Config from 'react-native-config'
import sha1 from 'sha1'

export async function uploadImage (imageUri: string) {
  const resizedUri = await resizeImage(imageUri)
  const imageData = await base64Data(resizedUri)

  const form = new FormData()
  const timestamp = new Date().getTime() / 1000
  const dataUri = `data:image/jpeg;base64,${imageData}`

  form.append('file', dataUri)
  form.append('api_key', Config.CLOUDINARY_API_KEY)
  form.append('timestamp', timestamp)
  form.append('signature', createSignature(timestamp))

  const response = await fetch(Config.CLOUDINARY_IMAGE_URL, {
    method: 'POST',
    headers: {
      'Accept': 'application/json'
    },
    body: form
  })

  return response.json()
}

async function resizeImage (imageUri: string) {
  return await ImageResizer.createResizedImage(imageUri, 1024, 1024, 'JPEG', 80)
}

async function base64Data (uri: string) {
  return await RNFS.readFile(uri, 'base64')
}

function createSignature (timestamp: number) {
  const secretKey = Config.CLOUDINARY_SECRET_KEY
  const params = `timestamp=${timestamp}${secretKey}`
  return sha1(params)
}
