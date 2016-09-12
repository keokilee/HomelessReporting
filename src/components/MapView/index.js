// @flow
import React, { Component } from 'react'
import RNMapView from 'react-native-maps'

import type { LocationType } from '../../types'

export default class MapView extends Component {
  props: {
    location: LocationType,
    styles: Object
  }

  render () {
    const { location, styles } = this.props
    const { latitude, longitude } = location

    if (!latitude || !longitude) {
      return null
    }

    const initialRegion = {
      latitude,
      longitude,
      latitudeDelta: 0.0017,
      longitudeDelta: 0.0016
    }

    const markerCoordinate = { latitude, longitude }

    return <RNMapView style={styles} initialRegion={initialRegion}>
      <RNMapView.Marker coordinate={markerCoordinate} />
    </RNMapView>
  }
}
