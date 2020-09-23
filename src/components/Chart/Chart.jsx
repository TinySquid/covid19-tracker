import React, { useEffect, useState } from "react";

// Chartjs
import { Line } from "react-chartjs-2";

// Styles
import styles from "./Chart.module.css";

// API
import { fetchDailyData } from "../../api";

function Chart(props) {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const getDailyData = async () => {
      setDailyData(await fetchDailyData());
    };

    getDailyData();
  }, []);

  // Disable linechart on mobile and or when data isn't available yet
  const lineChart =
    dailyData.length && window.innerWidth > 500 ? (
      <Line
        data={{
          labels: dailyData.map(({ date }) => date),
          datasets: [
            {
              data: dailyData.map(({ confirmed }) => confirmed),
              label: "Infected",
              borderColor: "#483290",
              backgroundColor: "rgba(72, 50, 144, 0.15)",
              fill: true,
            },
            {
              data: dailyData.map(({ deaths }) => deaths),
              label: "Deaths",
              borderColor: "#ee3425",
              backgroundColor: "rgba(238, 52, 37, 0.45)",
              fill: true,
            },
          ],
        }}
      />
    ) : null;

  return (
    <div className={styles.container}>
      {props.country ? <h3>Chart data not provided on a per-country basis (only works on Global view)</h3> : lineChart}
    </div>
  );
}

export default Chart;
