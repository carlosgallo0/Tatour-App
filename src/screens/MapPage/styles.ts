import { theme } from "../../global/styles/theme";

import styled from "styled-components/native";

import MapView from "react-native-maps";

import { MaterialCommunityIcons } from "@expo/vector-icons";

import { RFValue, RFPercentage } from "react-native-responsive-fontsize";

import { Dimensions } from "react-native";

export const Container = styled.View`
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  background-color: ${theme.colors.outline};
`;

export const Map = styled(MapView)`
  height: 100%;
  width: 100%;
  flex-grow: 1;
`;

export const Title = styled.Text`
  color: ${theme.colors.light100};
  font-size: 24px;
  font-weight: 700;
`;

export const Icon = styled(MaterialCommunityIcons).attrs()`
  color: ${theme.colors.light100};
  font-size: ${RFValue(30)}px;
`;

export const Button = styled.TouchableOpacity`
  position: absolute;
  align-items: center;
  flex-direction: row;
  justify-content: space-evenly;

  height: ${RFPercentage(7)}px;
  width: ${RFPercentage(40)}px;

  background-color: ${theme.colors.primary150};

  border-color: ${theme.colors.light50};
  border-width: 2px;
  border-radius: 10px;

  bottom: 60px;

  /* left: ${Dimensions.get("window").width / 2};
    top: 30 px;  */
`;
