import React, { useEffect, useRef } from "react";
import { Chart, registerables } from "chart.js";

Chart.register(...registerables);

function mapValueToRange(value, inputMin, inputMax, outputMin, outputMax) {
  const scale = (outputMax - outputMin) / (inputMax - inputMin);
  return outputMin + (value - inputMin) * scale;
}

function getXPositionWithOffset(xValue, chart) {
  const xAxis = chart.scales.x;
  const xPosition = xAxis.getPixelForValue(xValue);

  const chartElement = chart.canvas;
  const chartRect = chartElement.getBoundingClientRect();

  const chartOffset = chartRect.left;
  return xPosition - chartOffset;
}

export default function Graph(props: any) {
  const chartRef = useRef<Chart | null>(null);

  useEffect(() => {
    // const verticalLinePlugin = {
    //   id: "verticalLinePlugin",
    //   beforeDraw: (chart) => {
    //     const ctx = chart.ctx;
    //     const xAxis = chart.scales.x;
    //     const chartArea = chart.chartArea;

    //     const xPosition = mapValueToRange(
    //       getXPositionWithOffset(props.userPercentile, chart),
    //       -186,
    //       13055,
    //       0,
    //       chart.chartArea.right - chart.chartArea.left
    //     );

    //     ctx.strokeStyle = "#ff0000";
    //     ctx.lineWidth = 2;
    //     ctx.beginPath();
    //     ctx.moveTo(xPosition, chartArea.top);
    //     ctx.lineTo(xPosition, chartArea.bottom);
    //     ctx.stroke();

    //     ctx.fillStyle = "#ff0000";
    //     ctx.font = "bold 12px Arial";
    //     ctx.textAlign = "left";
    //     ctx.textBaseline = "middle";
    //     ctx.fillText(
    //       "Your Percentile",
    //       xPosition + 5,
    //       (chartArea.top + chartArea.bottom) / 2
    //     );
    //   },
    // };

    const ctx = document.getElementById(
      "percentile-chart"
    ) as HTMLCanvasElement;

    if (chartRef.current) {
      chartRef.current.destroy();
    }

    // Chart.register(verticalLinePlugin);

    const config = {
      type: "line",
      data: {
        labels: [0, 25, 50, 75, 100],
        datasets: [
          {
            label: "Percentile Data",
            backgroundColor: "rgba(0, 0, 0, 0)",
            borderColor: "#3182ce",
            data: [10, 58, 47, 97, props.userPercentile],
            fill: false,
          },
        ],
      },
      options: {
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
          tooltip: {
            enabled: false,
          },
          legend: {
            display: false,
          },
          verticalLinePlugin: {
            lineAt: props.userPercentile,
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: "Percentiles",
            },
            grid: {
              display: false,
            },
          },
          y: {
            display: false,
            grid: {
              display: false,
            },
          },
        },
      },
    };

    chartRef.current = new Chart(ctx, config);

    return () => {
      if (chartRef.current) {
        chartRef.current.destroy();
      }
    };
  }, [props.userPercentile]);

  return (
    <div>
      <div className="flex flex-col">
        <p className="text-bold block font-bold m-2">Comparision Graph</p>
        <p className="pl-4">
          {" "}
          <b>You Scored {props.userPercentile}% percentile </b> which is lower
          than the
        </p>
        <p className="pl-4">
          Average percentile 72% of all the engineers who took this assessment
        </p>
      </div>
      <div className="relative flex justify-center items-center h-[270px] flex flex-col">
        <canvas id="percentile-chart"></canvas>
      </div>
    </div>
  );
}
