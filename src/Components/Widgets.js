import React from "react";
import data from "../DummyData/widget.json";
import "../css/widgets.css";
import { useNavigate } from "react-router-dom";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { IoArrowUp } from "react-icons/io5";
import { IoArrowDown } from "react-icons/io5";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Widgets = () => {
  const navigate = useNavigate();

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },

    scales: {
      x: {
        ticks: {
          display: false,
        },

        grid: {
          drawBorder: false,
          display: false,
        },
      },

      y: {
        display: false,
      },
    },

    elements: {
      line: {
        tension: 0.4,
        borderColor: "blue",
        borderWidth: 2,
      },
    },
  };

  options.plugins = {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.raw}` || "";
        },
      },
    },
    legend: {
      display: false,
    },
  };

  const findDataForChart = (id, constant) => {
    const cityData = data.find((city) => city.id === id);
    if (cityData) {
      return {
        labels: ["Monday", "Tuesday", "Wed", "Thurs"],
        datasets: [
          {
            data:
              constant == "precipitation"
                ? cityData["precipitation1"]
                : cityData["temperature1"],
            borderColor: "blue",
          },
          {
            data:
              constant == "precipitation"
                ? cityData["precipitation2"]
                : cityData["temperature2"],
            borderColor: "rgb(53, 162, 235)",
            borderDash: [5, 5],
          },
        ],
      };
    } else {
      return {};
    }
  };
  return (
    <div className="box-container" id="better_scrollbar">
      {data &&
        data.map((city) => {
          return (
            <div className="box">
              <div
                className="box-children"
                onClick={() => {
                  navigate(`/details/${city.id}`);
                }}
              >
                <p>{city.name}</p>
                <p>Forecast</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <p>{city.forecast}</p>
                  <div className="small-graph-design">
                    <Line
                      style={{
                        height: "100%",
                        width: "50%",
                        marginLeft: "2rem",
                      }}
                      options={options}
                      data={findDataForChart(city.id, "precipitation")}
                    ></Line>
                  </div>
                  <div className="small-icon-design">
                    <IoArrowUp color="green" />
                  </div>
                </div>
                <p>Forecast</p>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    width: "100%",
                  }}
                >
                  <p>{city.percentage}</p>
                  <div className="small-graph-design">
                    <Line
                      style={{
                        height: "100%",
                        width: "50%",
                        marginLeft: "3rem",
                      }}
                      options={options}
                      data={findDataForChart(city.id, "temperature")}
                    ></Line>
                  </div>
                  <div className="small-icon-design">
                    <IoArrowDown color="red" />
                  </div>
                </div>
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default Widgets;
