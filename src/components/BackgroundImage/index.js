// @flow
import React from 'react'
import { Image } from 'react-native'

type BackgroundImageProps = {
  children?: React.Element<*>
}

export default function (props: BackgroundImageProps) {
  const styles = {
    flex: 1,
    resizeMode: 'cover',
    height: null,
    width: null
  }

  return (
    <Image source={require('../../assets/background.png')} style={styles}>
      {props.children}
    </Image>
  )
}
