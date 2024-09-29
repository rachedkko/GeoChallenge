import { BASE_URL } from "/src/apiConfig.js";
import countryList from "./countries.js";

function generateCode() {
  const rand = Math.floor(Math.random() * countryList.length);
  const id = countryList[rand].countryCode;
  return id;
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': "", //add ur API key here
		'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
	}
};

function getCountry(code) {
  const url = BASE_URL + code;
  return fetch(url, options)
    .then(getJSON_ACB)
    .catch((error) => {
      throw error;
    });
}
function getCountryPlace(code) {
  const url = BASE_URL + code+"/places";
  return fetch(url, options)
    .then(getJSON_ACB)
    .catch((error) => {
      throw error;
    });
}

// We will never need this function.
function getImage() {
  return (
    "https://staging.teuteuf-assets.pages.dev/data/worldle/countries/" +
    generateCode() +
    "/vector.svg"
  );
}

function getJSON_ACB(response) {
  if (!response.ok) {
    throw new Error("response not OK");
  }
  return response.json();
}

export { getCountry,getCountryPlace, getImage,generateCode};
