// File src/services/api.js

const callToApi = () => {
    // Llamamos a la API
  return fetch('./data/data.json')
    .then((response) =>
      response.json());
  };
  
export default callToApi;