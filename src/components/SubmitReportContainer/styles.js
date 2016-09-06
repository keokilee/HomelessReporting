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
    marginTop: 20,
    height: 100,
    fontSize: 14,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    padding: 4
  },
  mapContainer: {
    marginTop: 20,
    height: 100,
    paddingTop: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    paddingRight: 0,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    flex: 1,
    alignSelf: 'stretch'
  },
  buttonContainer: {
    marginTop: 20,
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
