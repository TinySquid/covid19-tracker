import React, { useEffect, useState } from "react";

// Components
import { Cards, Chart, CountryPicker } from "./components";

// Styles
import styles from "./App.module.css";

// API
import { fetchData } from "./api";

function App() {
  const [data, setData] = useState(null);
  const [country, setCountry] = useState(null);

  useEffect(() => {
    const getData = async () => {
      setData(await fetchData());
    };

    getData();
  }, []);

  const handleCountryChange = async (country) => {
    setData(await fetchData(country));
    setCountry(country);
  };

  if (!data) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <CountryPicker handleCountryChange={handleCountryChange} />
      <Cards data={data} />
      <Chart country={country} />
    </div>
  );
}

export default App;
