import { X_RAPID_API_KEY, OPEN_TRIP_AUTHORIZATION } from "@env";

import { defaultJsonExample } from "./payload_example";

export const postOptimizationAPI = (inputOptimizationJson) => {
  const optimizationResponse = fetch("https://api.openrouteservice.org/optimization", {
    method: "POST",
    headers: {
      Authorization: `${OPEN_TRIP_AUTHORIZATION}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputOptimizationJson),
  })
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => {
      console.log(err);
      return err;
    });

  return optimizationResponse;
};
