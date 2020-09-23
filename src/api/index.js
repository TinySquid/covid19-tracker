import axios from "axios";

const url = "https://covid19.mathdro.id/api";

//* Retrieves cases confirmed, recovered, dead, and update time for card components
export const fetchData = async (country) => {
  // Data is global cases by default
  let dynamicUrl = url;

  // If a country is provided then get data for that specific country
  if (country) {
    dynamicUrl = `${url}/countries/${country}`;
  }

  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(dynamicUrl);

    return {
      confirmed,
      recovered,
      deaths,
      lastUpdate,
    };
  } catch (error) {
    console.error(error);
  }
};

//* Retrieves case data and formats it for display with chartjs
export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);

    const filteredData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return filteredData;
  } catch (error) {
    console.error(error);
  }
};

//* Gets list of countries so we can fill our options dropdown dynamically
export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    return countries.map((country) => country.name);
  } catch (error) {
    console.error(error);
  }
};
