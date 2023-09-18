import React from "react";
import ApexChart from "react-apexcharts";
import ApexOptions from "react-apexcharts";

function Chart() {
  const options = {
    xaxis: {
      type: "bar",
    },
    yaxis: {
      tolltip: {
        enabled: true,
      },
    },
  };

  const series = [
    {
      data: [
        {
          x: "segunda-feira",
          y: 1000,
        },
        {
          x: "terça-feira",
          y: 240,
        },
        {
          x: "quarta-feira",
          y: 700,
        },
        {
          x: "quinta-feira",
          y: 1000,
        },
        {
          x: "sexta-feira",
          y: 100,
        },
        {
          x: "sabado",
          y: 600,
        },
        {
          x: "domingo",
          y: 1000,
        },
      ],
    },
  ];

  return (
    <>
      <ApexChart
        options={options}
        series={series}
        type="bar"
        width={1200}
        height={480}
      />
    </>
  );
}

export default Chart;
