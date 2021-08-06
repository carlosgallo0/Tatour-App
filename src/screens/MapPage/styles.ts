
import {theme} from "../../global/styles/theme"

import styled from 'styled-components/native'
import MapView from 'react-native-maps'
import { Dimensions } from "react-native";

export const Container = styled.View`
align-items: center ;
justify-content: space-around;
flex:1;
width: 100%;
`;

export const MapContainer = styled.View`
`;


export const Map = styled(MapView)`
width: 400px;
height:600px

`;

export const Title = styled.Text`
color: black;
font-size: 24px;
`;
