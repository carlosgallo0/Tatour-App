import { coordinates } from "../global/types/vroomTypes";
import { postOptimizationAPI } from "./api";

export function setOptimizationInput(
  baseCoordinates: coordinates,
  pointsCoordinates: coordinates[]
) {
  if (baseCoordinates && pointsCoordinates) {
    const jobs = pointsCoordinates.map((pointCoordinates, index) => {
      return {
        id: index,
        service: 300,
        location: [pointCoordinates.longitude, pointCoordinates.latitude],
        time_windows: [[32400, 36000]],
      };
    });
    const vehicles = [
      {
        id: 1,
        profile: "driving-car",
        start: [baseCoordinates.longitude, baseCoordinates.latitude],
        end: [baseCoordinates.longitude, baseCoordinates.latitude],
      },
    ];
    return {
      jobs,
      vehicles,
    };
  }
}
