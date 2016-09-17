// @flow
import React, { PropTypes } from 'react'
import { Text } from 'react-native'
import Button from 'react-native-button'

import styles from './styles'

type NavButtonProps = {
  text: string,
  onPress: () => void
}

const NavButton = function (props: NavButtonProps) {
  const { text, onPress } = props

  return (
    <Button onPress={onPress} containerStyle={styles.button}>
      <Text style={styles.text}>{text}</Text>
    </Button>
  )
}

export default NavButton
