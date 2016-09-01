import { StyleSheet } from 'react-native'

import { HEADER_COLOR, IOS_STATUS_BAR_HEIGHT } from '../../styles'

const styles = StyleSheet.create({
  bar: {
    height: 60,
    paddingBottom: 5,
    flexDirection: 'row',
    backgroundColor: HEADER_COLOR,
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    flex: 1,
    textAlign: 'center',
    paddingTop: IOS_STATUS_BAR_HEIGHT,
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  navButton: {
    paddingTop: IOS_STATUS_BAR_HEIGHT,
    marginLeft: 5,
    marginRight: 5,
    width: 30
  }
})

export default styles
