import React, { PropTypes } from 'react'
import { View, Text } from 'react-native'

import styles from './styles'

const HeaderBar = (props) => {
  const text = props.text || ''

  return (
    <View style={styles.bar}>
      <View style={styles.navButton}>
        {props.leftNavButton
         ? props.leftNavButton
         : null}
      </View>
      <Text style={styles.title}>{text}</Text>
      <View style={styles.navButton}>
        {props.rightNavButton
         ? props.rightNavButton
         : null}
      </View>
    </View>
  )
}

HeaderBar.propTypes = {
  text: PropTypes.string,
  leftNavButton: PropTypes.object,
  rightNavButton: PropTypes.object
}

export default HeaderBar
