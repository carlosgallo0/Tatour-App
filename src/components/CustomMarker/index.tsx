import React from 'react'
import {MarkerContainer} from './styles'

import {MarkerProps} from 'react-native-maps'

export interface CustomMarkerProps extends MarkerProps{

    
}

export function CustomMarker(){
  return(
    <MarkerContainer>
    
    </MarkerContainer>
  )
}