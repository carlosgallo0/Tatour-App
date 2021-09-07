import { X_RAPID_API_KEY, OPEN_TRIP_AUTHORIZATION } from "@env";

import { defaultJsonExample } from "./payload_example";

export const fetchApiCallExample = () => {
  fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
    method: "GET",
    headers: {
      "x-rapidapi-host": "quotes15.p.rapidapi.com",
      "x-rapidapi-key": `${X_RAPID_API_KEY}`,
    },
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response.content);
      console.log(response.originator.name);
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postOptimizationAPI = (
  inputOptimizationJson = defaultJsonExample
) => {
  fetch("https://api.openrouteservice.org/optimization", {
    method: "POST",
    headers: {
      Authorization: `${OPEN_TRIP_AUTHORIZATION}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(inputOptimizationJson),
  })
    .then((response) => response.json())
    .then((response) => {
      console.log(response);
    })
    .catch((err) => {
      console.log(err);
    });
};
