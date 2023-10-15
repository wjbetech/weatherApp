require("dotenv").config();

const apiKey = process.env.APIKEY

const getCity = async () => {
  const baseURL = "http://dataservice.accuweather.com/locations/v1/cities/search";
  const query = `?apiKey=${apiKey}`
}
