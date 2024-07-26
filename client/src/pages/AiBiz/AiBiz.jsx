import React, { useState, useEffect } from "react";
import axios from "axios";

const AiConfig = ({
  selectedAi,
  jenisHewan,
  setJenisHewan,
  tanggal,
  setTanggal,
  response,
  setResponse,
  loading,
  setLoading,
}) => {
  useEffect(() => {
    if (selectedAi === "PrediksiPenjualanHarian") {
      setJenisHewan("");
      setTanggal("");
      setResponse("");
    } else if (selectedAi === "PrediksiHarga") {
      setResponse("");
      setTanggal("");
    }
  }, [selectedAi, setJenisHewan, setTanggal, setResponse]);

  const options = [
    { value: "Sapi", label: "Sapi" },
    { value: "Kerbau", label: "Kerbau" },
    { value: "Kuda", label: "Kuda" },
    { value: "Domba", label: "Domba" },
    { value: "Kambing", label: "Kambing" },
    { value: "Babi", label: "Babi" },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("https://localhost:5000/aibiz", { jenisHewan, tanggal, selectedAi })
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  };

  return (
    <div className="wrapper p-4 max-w-screen-lg mx-auto">
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {selectedAi === "PrediksiHarga" ? (
            <div className="inline">
              <label className="block text-sm font-medium text-gray-700">
                Pilih jenis hewan dan tanggal harga hewan yang ingin diprediksi
              </label>
              <select
                onChange={(e) => setJenisHewan(e.target.value)}
                className="mt-1 block w-full pl-3 pr-2 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                {options.map((option) => (
                  <option value={option.value}>{option.label}</option>
                ))}
              </select>
            </div>
          ) : selectedAi === "PrediksiPenjualanHarian" ? (
            <label className="block text-sm font-medium text-gray-700">
              Pilih tanggal penjualan harian yang ingin diprediksi
            </label>
          ) : null}

          <input
            className="pl-3 pr-2 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
            value={tanggal}
            onChange={(e) => setTanggal(e.target.value)}
            type="date"
            placeholder="Masukkan tanggal"
          />
        </div>
        <button
          className="px-3 py-3 bg-green-500 rounded-md hover:bg-green-600 text-white transition duration-300 ml-2"
          type="submit"
        >
          Tanya AiBiz
        </button>
      </form>
      <div className="mr-3 mb-3 h-72 mt-3 p-4 text-xs bg-white text-gray-800 border rounded-lg shadow-xl whitespace-pre-line overflow-y-auto">
        {loading ? "Loading..." : response}
      </div>
    </div>
  );
};

const AiOption = ({ selectedAi, handleAiChange }) => {
  return (
    <div className="w-full max-w-screen-lg mx-auto p-4">
      <label className="block text-sm font-medium text-gray-700">
        Pilih prediksi yang diinginkan
      </label>
      <select
        id="ai"
        name="ai"
        value={selectedAi}
        onChange={handleAiChange}
        className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
      >
        <option value="PrediksiHarga">Prediksi Harga</option>
        <option value="PrediksiPenjualanHarian">
          Prediksi Penjualan Harian
        </option>
      </select>
    </div>
  );
};

const AiSelected = () => {
  const [selectedAi, setSelectedAi] = useState("PrediksiHarga");
  const [jenisHewan, setJenisHewan] = useState("Sapi");
  const [tanggal, setTanggal] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAiChange = (event) => {
    setSelectedAi(event.target.value);
  };

  return (
    <div className="w-full">
      <AiOption selectedAi={selectedAi} handleAiChange={handleAiChange} />
      <AiConfig
        selectedAi={selectedAi}
        jenisHewan={jenisHewan}
        setJenisHewan={setJenisHewan}
        tanggal={tanggal}
        setTanggal={setTanggal}
        response={response}
        setResponse={setResponse}
        loading={loading}
        setLoading={setLoading}
      />
    </div>
  );
};

export default function AiBiz() {
  return (
    <div>
      <AiSelected />
    </div>
  );
}
