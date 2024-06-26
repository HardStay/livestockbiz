import React, { useState, useEffect } from "react";
import { Card, CardBody, CardHeader } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import axios from "axios";

function ChartPenjualan() {
  const [tahun, setTahun] = useState("2023");
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/penjualanHewanTernakPerBulan/${tahun}`
        );
        setChartData(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [tahun]);

  const handleYearChange = (event) => {
    setTahun(event.target.value);
  };

  // Mengelompokkan data berdasarkan bulan dan jenis hewan
  const dataDisplay = chartData.reduce((acc, item) => {
    const bulan = item.Bulan;
    if (!acc[bulan]) {
      acc[bulan] = {
        Bulan: bulan,
        Kambing: 0,
        Sapi: 0,
        Babi: 0,
        Domba: 0,
        Kerbau: 0,
        Kuda: 0,
      };
    }
    acc[bulan][item.jenisHewan] = item.JumlahHewanTerjual;
    return acc;
  }, {});

  // Mengonversi data untuk digunakan dalam chart
  const seriesData = Object.keys(dataDisplay).map((bulan) => ({
    x: bulan,
    y: Object.values(dataDisplay[bulan]).reduce((a, b) => a + b, 0),
    ...dataDisplay[bulan],
  }));

  const chartConfig = {
    type: "bar",
    height: 240,
    series: [
      {
        name: "",
        data: seriesData.map((item) => ({
          x: item.Bulan,
          y: item.Kambing + item.Sapi + item.Babi + item.Domba + item.Kerbau + item.Kuda,
          Kambing: item.Kambing,
          Sapi: item.Sapi,
          Babi: item.Babi,
          Domba: item.Domba,
          Kerbau: item.Kerbau,
          Kuda: item.Kuda,
        })),
      },
    ],
    options: {
      chart: {
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "60%",
          endingShape: "rounded",
          distributed: true,
        },
      },
      dataLabels: {
        enabled: false,
      },
      colors: ["#FF9800"],
      xaxis: {
        type: "categories",
        categories: seriesData.map((item) => item.Bulan),
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      yaxis: {
        labels: {
          style: {
            colors: "#616161",
            fontSize: "12px",
            fontFamily: "inherit",
            fontWeight: 400,
          },
        },
      },
      tooltip: {
        theme: "dark",
        x: {
          formatter: function (val) {
            return val;
          },
        },
        y: {
          formatter: function (val, { dataPointIndex, w }) {
            const dataPoint = w.globals.initialSeries[0].data[dataPointIndex];
            return `
              <div style="text-align: left;">
                <div><strong>Total:</strong> ${val}</div>
                <div><strong>Kambing:</strong> ${dataPoint.Kambing}</div>
                <div><strong>Sapi:</strong> ${dataPoint.Sapi}</div>
                <div><strong>Babi:</strong> ${dataPoint.Babi}</div>
                <div><strong>Domba:</strong> ${dataPoint.Domba}</div>
                <div><strong>Kerbau:</strong> ${dataPoint.Kerbau}</div>
                <div><strong>Kuda:</strong> ${dataPoint.Kuda}</div>
              </div>
            `;
          },
        },
        shared: true,
        intersect: false,
        marker: {
          show: false, // Menonaktifkan marker tooltip
        },
      },
      legend: {
        show: false,
      },
      grid: {
        borderColor: "#dddddd",
        strokeDashArray: 5,
        xaxis: {
          lines: {
            show: true,
          },
        },
        padding: {
          top: 5,
          right: 20,
        },
      },
    },
  };

  return (
    <div className="p-4">
      <Card className="rounded-sm">
        <CardHeader
          floated={false}
          shadow={false}
          color="gray-200"
          className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
        >
          <div className="flex justify-between gap-2 w-full">
            <h4 className="text-xl font-semibold flex items-center justify-center h-fit">
              Grafik Penjualan
            </h4>
            <div className="float-right">
              <select
                className="py-2 px-3 border rounded-md flex mx-auto text-gray-700"
                value={tahun}
                onChange={handleYearChange}
              >
                {[2023, 2024].map((year) => (
                  <option key={year} value={year} className="text-sm">
                    {year}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </CardHeader>
        <CardBody className="px-2 pb-0">
          <Chart {...chartConfig} />
        </CardBody>
      </Card>
    </div>
  );
}

export default function SellRecordContentGov() {
  return (
    <div>
      <ChartPenjualan />
    </div>
  );
}
