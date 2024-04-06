import React, { useEffect } from "react";
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
import "../css/graph.css";
import { useContext, useState } from "react";
import { AppContext } from "../Context/context";
import sidebarData from "../DummyData/sidebar.json";
import { FaToggleOff } from "react-icons/fa6";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Graph = () => {
  const { sidebarOpen, setSidebarOpen, stackId, dataValue, setDataValue } =
    useContext(AppContext);

  useEffect(() => {
    sidebarData.map((item) => {
      if (stackId.outerId === item.id) {
        item.tabs.map((tab) => {
          if (tab.tab_id === stackId.tabId) {
            tab.items.map((finalValue) => {
              if (finalValue.id_items === stackId.innerId) {
                setDataValue([
                  finalValue["Data 1"],
                  finalValue["Data 2"],
                  finalValue["Data 3"],
                  finalValue["Data 4"],
                  finalValue["Data 5"],
                  finalValue["Data 6"],
                ]);
              }
            });
          }
        });
      }
    });
  }, [stackId]);

  const labels = [
    "Q2 2022",
    "Q3 2022",
    "Q4 2022",
    "Q1 2023",
    "Q2 2023",
    "Q3 2023",
    "Q4 2023",
    "Q2 2024",
    "Q3 2024",
    "Q4 2024",
    "Q1 2025",
    "Q2 2025",
    "Q3 2025",
    "Q4 2025",
    "Q1 2026",
    "Q2 2026",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "FINAL FORECAST",
        data: dataValue && dataValue[0],
        borderColor: "yellow",
      },
      {
        label: "CONSUMPTION",
        data: dataValue && dataValue[1],
        borderColor: "rgb(53, 162, 235)",
      },
      {
        label: "AI FORECAST",
        data: dataValue && dataValue[2],
        borderColor: "green",
      },
      {
        label: "Final Forecast",
        data: dataValue && dataValue[3],
        borderColor: "yellow",
        borderDash: [5, 5],
      },
      {
        label: "AI Forecast",
        data: dataValue && dataValue[4],
        borderColor: "green",
        borderDash: [5, 5],
      },
      {
        label: "Previous year AI forecasts",
        data: dataValue && dataValue[5],
        borderColor: "pink",
        borderDash: [5, 5],
      },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          color: "#3F5483",
          borderWidth: "1px",
        },
        ticks: {
          callback: (value, index) => {
            return labels[index].split(" ");
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "CONSUMPTION (FT,THOUSANDS)",
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    suggestedMin: 0,
    suggestedMax: 900,
  };

  options.plugins = {
    tooltip: {
      callbacks: {
        label: function (context) {
          return `${context.raw * 1000} Thousand` || "";
        },
      },
    },
    legend: {
      display: false,
    },
  };

  const chartBackground = {
    id: "chart",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        chartArea: { left, right, bottom, top, width, height },
      } = chart;

      ctx.save();
      ctx.strokeStyle = "white";
      ctx.lineWidth = "5px";
      ctx.setLineDash([5, 5]);
      ctx.beginPath();
      ctx.moveTo(right / 2 + 25, bottom);
      ctx.lineTo(right / 2 + 25, 0);
      ctx.stroke();
    },
  };

  const customLegend = {
    id: "customLegend",
    beforeDatasetsDraw(chart, args, pluginOptions) {
      const {
        ctx,
        data,
        chartArea: { right, top, width },
      } = chart;
      ctx.save();
      let constant = 100;
      const legendItemWidth = width / data.datasets.length;
      ctx.fillStyle = "white";
      ctx.font = "12px Arial";
      ctx.lineWidth = 5;
      ctx.fillText("HISTORICAL", right / 2 - 60, top - 10);
      ctx.fillStyle = "aqua";
      ctx.fillText("FORECAST", right / 2 + 40, top - 10);
      data.datasets.forEach((dataset) => {
        const color = dataset.borderColor;
        ctx.strokeStyle = color;
        ctx.lineWidth = 5;
        ctx.setLineDash([]);
        ctx.beginPath();
        ctx.moveTo(constant, top);
        ctx.lineTo(constant, top - 10);
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.font = "9px Arial";
        ctx.lineWidth = 5;
        if (width > 900) {
          ctx.fillText(dataset.label, constant + 10, top);
        }
        constant += legendItemWidth;
      });
    },
  };

  const increasedGraphIcon = {
    id: "increasedGraphIcon",
    beforeInit(chart, args, pluginOptions) {
      const fitValue = chart.legend.fit;
      chart.legend.fit = function fit() {
        fitValue.bind(chart.legend)();
        return (this.height += 20);
      };
    },
  };

  return (
    <div className="graph">
      <Line
        options={options}
        data={data}
        plugins={[chartBackground, customLegend, increasedGraphIcon]}
      ></Line>
    </div>
  );
};

export default Graph;
