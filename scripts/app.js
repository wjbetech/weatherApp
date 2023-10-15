const apiKey = "YOURKEYHERE";

const getCity = async (city) => {

  const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apiKey=${apiKey}&q=${city}`;

  const response = await fetch(baseURL + query);
  const data = await response.json();

  console.log(data);

}

getCity("London");
