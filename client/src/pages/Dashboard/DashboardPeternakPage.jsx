import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardBody } from "@material-tailwind/react";
import Chart from "react-apexcharts";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice.js";

function DashboardDataPeternak() {
  const [tahun, setTahun] = useState("2024");
  const [jenisHewan, setJenisHewan] = useState("Sapi");
  const [chartData, setChartData] = useState([]);
  const [dataHewan, setDataHewan] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isError, peternak } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getMe());
  }, [dispatch]);

  useEffect(() => {
    if (isError) {
      navigate("/home");
    }
  }, [isError, navigate]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const idPeternak = peternak.idPeternak;
        const res = await axios.post(
          "https://localhost:5000/hewanTernakByTahunAndId",
          { tahun, idPeternak }
        );
        setDataHewan(res.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, [tahun, peternak]);

  useEffect(() => {
    const handleData = async () => {
      try {
        const idPeternak = peternak.idPeternak;
        const res = await axios.post(
          "https://localhost:5000/hewanTernakByTahunAndJenisId",
          { tahun, jenisHewan, idPeternak }
        );
        setChartData(res.data);
      } catch (err) {
        console.log(err);
      }
    };

    handleData();
  }, [tahun, jenisHewan, peternak]);

  const handleYearChange = (event) => {
    setTahun(event.target.value);
  };

  const handleJenisHewanChange = (event) => {
    setJenisHewan(event.target.value);
  };

  const dataDisplay = chartData.reduce((acc, item) => {
    const bulan = item.Bulan;
    if (!acc[bulan]) {
      acc[bulan] = {
        Bulan: bulan,
      };
    }
    acc[bulan][item.jenisHewan] = item.JumlahHewan;
    return acc;
  }, {});

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
          y: item[jenisHewan],
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
          formatter: function (val) {
            return `
              <div style="text-align: left;">
                <div><strong>Total:</strong> ${val}</div>
              </div>
            `;
          },
        },
        shared: true,
        intersect: false,
        marker: {
          show: false,
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

  const livestockData = [
    { imgSrc: "/assets/noun-pig-6542616.png", type: "Babi" },
    { imgSrc: "/assets/noun-cow-6694922.png", type: "Sapi" },
    { imgSrc: "/assets/noun-sheep-6186377.png", type: "Domba" },
    { imgSrc: "/assets/noun-buffalo-4576873.png", type: "Kerbau" },
    { imgSrc: "/assets/noun-goat-6694931.png", type: "Kambing" },
    { imgSrc: "/assets/noun-horse-6722214.png", type: "Kuda" },
  ];

  return (
    <div className="bg-gray-200 h-full">
      <div className="flex flex-wrap justify-between items-center px-4 pt-4">
        <div className="text-2xl font-medium text-gray-900">Livestocks</div>
        <div>
          <select
            className="py-2 px-3 border rounded-md text-gray-700"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
        {livestockData.map((livestock, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center rounded-md h-28 bg-white p-2"
          >
            <img src={livestock.imgSrc} alt="" className="w-[70px] h-[70px]" />
            <label className="text-gray-900 font-semibold mt-2">
              {dataHewan.length > 0
                ? dataHewan.find((item) => item.jenisHewan === livestock.type)
                    ?.JumlahHewan || 0
                : 0}
            </label>
          </div>
        ))}
      </div>
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
                Grafik Data Hewan Per Bulan
              </h4>
              <div>
                <select
                  className="py-2 px-3 border rounded-md text-gray-700"
                  value={jenisHewan}
                  onChange={handleJenisHewanChange}
                >
                  {["Sapi", "Babi", "Kambing", "Domba", "Kerbau", "Kuda"].map(
                    (jenisHewan) => (
                      <option
                        key={jenisHewan}
                        value={jenisHewan}
                        className="text-sm"
                      >
                        {jenisHewan}
                      </option>
                    )
                  )}
                </select>
              </div>
            </div>
          </CardHeader>
          <CardBody className="px-2 pb-0">
            <Chart {...chartConfig} />
          </CardBody>
        </Card>
      </div>
      <hr className="border-2 mb-12 mt-4" style={{ color: "#333" }} />
    </div>
  );
}

export function DashboardTabsPeternak() {
  return <DashboardDataPeternak />;
}
