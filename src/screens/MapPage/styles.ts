
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
/* background-color: ${theme.colors.outline }; */
`;

export const MapContainer = styled.View`
align-items:center;
width:100%;
height:100%;
`;

export const Map = styled(MapView)`
position: relative;
height:${RFPercentage(90)}px;
width: ${RFPercentage(90)}px;
z-index:1;

`;

export const Button = styled.TouchableOpacity`
    position: absolute; 

    align-items:center;
    flex-direction:row;
    justify-content:space-evenly



   
    
    height: ${RFPercentage(7)}px;
    width: ${RFPercentage(40)}px;
    
    background-color: ${theme.colors.light50};

    border-color: ${theme.colors.line } ;
    border-width: 1px;
    border-radius: 10px;
    margin-top: 50px;
    
    
    
    /* left: ${(Dimensions.get('window').width)/2};
    top: 30 px;  */
`;

export const Title = styled.Text`
color: ${theme.colors.dark100};;
font-size: 24px;

`;

export const Icon = styled(MaterialCommunityIcons).attrs(
)`
    color: ${theme.colors.line};
    font-size: ${RFValue(30)}px;

`;