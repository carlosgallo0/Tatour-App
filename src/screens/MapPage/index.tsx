
import React from 'react'
import {SafeAreaView,View, Text} from 'react-native'
import MapView from 'react-native-maps'
import {styles} from './styles';

export function MapPage(){

return(
    
    <SafeAreaView style={styles.container}>
        <MapView 
        style={styles.map}
        initialRegion={{
            latitude: -22.9094853,
            longitude: -43.1784147,
            latitudeDelta: 0.06,
            longitudeDelta: 0.02,
          }}
        
        />

        <View style={styles.textContainer}>
            <Text style={styles.title}>
                Olá mundo! 👋
            </Text>

            <Text style={styles.text}>
              {`Eu sou a pagina de mapas \n 🌎`}
            </Text>
        </View>
    </SafeAreaView>
)

}
