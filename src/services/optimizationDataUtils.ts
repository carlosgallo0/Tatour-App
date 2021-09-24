import { coordinates } from "../global/types/vroomTypes";

const Polyline = require("@mapbox/polyline");

//input handling

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
        time_windows: [[32400, 68400]],
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

    const options = {
      g: true,
    };
    return {
      jobs,
      vehicles,
      options,
    };
  }
}

//response handling

export function getLatLngFromMyResponse(response) {
  // debugger;
  if (response?.code === 0) {
    const latLng = response.routes[0].steps.map((step) => {
      return {
        latitude: step.location[1],
        longitude: step.location[0],
      };
    });
    return latLng;
  } else {
    return [];
  }
}

export function getOptimizedCoordinatesFromMyResponse() {
  return Polyline.decode(
    "yxfiHaxoMs@jGK`AIr@eA~JCLMd@K|@E^MfAADE^SN[RKNILTGVOPMROB[D[Js@AIEc@I]qAgJEWAMw@aF]cCCMCSIg@WcBIa@Ko@CQQgAQeACScAmGGYTKdAg@r@y@LOn@u@RUv@}@dAoA^c@DGj@q@tCmDHKJMhDcELKb@c@^~Af@tCDNTxAFVF`@JEjAg@tBaAPIE]]iBKGkEnBIDTxAFVMFkCpAKAUIMlAk@`FCRCRi@vEWzBC\\E\\EVE^AJYjCSlB"
  );
}
