import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  appLogo: {
    flex: 1
  },
  appTitle: {
    fontSize: 24,
    backgroundColor: 'transparent',
    color: 'white',
    textAlign: 'center'
  },
  appLinks: {
    alignItems: 'center',
    marginBottom: 20
  },
  appLink: {
    flexDirection: 'row',
    marginTop: 10,
    backgroundColor: 'black',
    padding: 10
  },
  appLinkIcon: {
    width: 50,
    height: 50
  },
  appLinkText: {
    flex: 1,
    opacity: 1,
    fontSize: 20,
    color: 'white',
    alignSelf: 'center'
  }
})
