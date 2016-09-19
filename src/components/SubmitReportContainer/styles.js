import { StyleSheet } from 'react-native'
import { BUTTON_COLOR } from '../../styles'

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: 'transparent'
  },
  formSection: {
    marginBottom: 20
  },
  sectionHeader: {
    color: 'white',
    fontSize: 16
  },
  description: {
    marginTop: 20,
    height: 100,
    fontSize: 14,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#E0E0E0',
    padding: 8,
    color: 'white'
  },
  imageToUpload: {
    marginTop: 20,
    height: 400
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
    backgroundColor: BUTTON_COLOR
  },
  disabledButtonContainer: {
    backgroundColor: '#454545'
  },
  button: {
    fontSize: 16,
    color: 'white'
  },
  submitButtonContainer: {
    marginTop: 0,
    marginBottom: 10
  }
})
