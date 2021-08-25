import { baseCoordinates, pointsCoordinates } from './stateExample'
import { coordinates} from '../global/types/vroomTypes'

interface setRouteOptimizationInputProps{
    baseCoordinates:coordinates;
    pointsCoordinates:coordinates[];
    
}

export function setRouteOptimizationInput(baseCoordinates:coordinates,pointsCoordinates:coordinates[]){

    // const jobs = pointsCoordinates.map(

    // )
    const vehicles = [{
        "id": 1, 
        "profile": "driving-car",
        "start":[
            baseCoordinates.latitude,
            baseCoordinates.longitude
        ],
        "end":[
            baseCoordinates.latitude,
            baseCoordinates.longitude
        ]


    }]

    console.log('baseCoordinates: ', typeof baseCoordinates, baseCoordinates)
    
    console.log('pointsCoordinates: ', typeof pointsCoordinates, pointsCoordinates)

    console.log('vehicles: ', vehicles)
    
}
