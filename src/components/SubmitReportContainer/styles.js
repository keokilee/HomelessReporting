import { StyleSheet } from 'react-native'
import { HEADER_COLOR } from '../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: 'white'
  },
  description: {
    height: 60,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 4
  },
  buttonContainer: {
    padding: 10,
    height: 45,
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: HEADER_COLOR
  },
  button: {
    fontSize: 16,
    color: 'white'
  }
})
