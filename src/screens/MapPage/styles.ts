
import {theme} from "../../global/styles/theme"

import styled from 'styled-components/native'

import MapView from 'react-native-maps'

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

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
position: relative;
height:${RFPercentage(90)}px;
width: ${RFPercentage(90)}px;
z-index:1;

`;

export const Button = styled.TouchableOpacity`
    background-color: ${theme.colors.light100 };
    align-items:center;

    height: ${RFPercentage(10)}px;
    width: ${RFPercentage(30)}px;

    border-radius: 5px;

    position:relative;
    left: ${(Dimensions.get('window').width)/2};
    top: 30 px;
`;

export const Title = styled.Text`
color: black;
font-size: 24px;
`;

export const Icon = styled(MaterialCommunityIcons).attrs(
)`
    color: ${theme.colors.primary150 };
    font-size: ${RFValue(30)}px;

`;