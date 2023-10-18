// APIKEY
const apiKey = "AHaIPLAJTEmSG9nxvdyBaVRDvzh3yiun";

// doc getters
const cityName = document.getElementById("city-name")
const conditions = document.getElementById("conditions")

// get conditions for city
const getConditions = async (key) => {

  const baseURL = "http://dataservice.accuweather.com/currentconditions/v1/";
  const query = `${key}`

  const response = await fetch(baseURL + query);
  const data = await response.json()
  .then((data) => {
    cityName.innerText = data.EnglishName
  })
  .catch((err) => {
    console.log(err)
  })

  // console.log(data.DataSets.MinuteCast);

}

// get city data
const getCity = async (city) => {

  const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apikey=${apiKey}&q=${city}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  return data[0];

}

getCity("london")
  .then(data => console.log(data))
  .catch(error => console.log(error))
