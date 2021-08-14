
import { X_RAPID_API_KEY } from '@env'
export const fetchApiCallExample = () => {
    fetch("https://quotes15.p.rapidapi.com/quotes/random/?language_code=en", {
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "quotes15.p.rapidapi.com",
        "x-rapidapi-key": `${X_RAPID_API_KEY}`
      }
    })
      .then(response => response.json())
      .then(response => {
        console.log(response.content);
        console.log(response.originator.name)
      })
      .catch(err => {
        console.log(err);
      });
  } 