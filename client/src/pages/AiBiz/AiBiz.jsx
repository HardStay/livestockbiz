import React, { useState, useEffect } from "react";
import axios from "axios";

const convertToTitleCase = (str) => {
  if (!str) {
    return "";
  }
  return str.toLowerCase().replace(/\b\w/g, (s) => s.toUpperCase());
};

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
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    axios
      .post("http://localhost:5000/aibiz", { jenisHewan, tanggal, selectedAi })
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
    <div className="wrapper pl-3">
      <form onSubmit={handleSubmit}>
        {selectedAi === "PrediksiHarga" ? (
          <div className="inline">
            <label className="block text-sm font-medium text-gray-700">
              Pilih jenis hewan dan tanggal harga hewan yang ingin diprediksi
            </label>
            <input
              className="mr-3 pl-3 pr-2 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              value={convertToTitleCase(jenisHewan)}
              onChange={(e) => setJenisHewan(e.target.value)}
              type="text"
              placeholder="Masukkan jenis hewan"
            />
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
    <div className="w-full">
      <div className="w-fit m-2">
        <label className="block text-sm font-medium text-gray-700">
          Pilih prediksi yang diinginkan
        </label>
        <select
          id="ai"
          name="ai"
          value={selectedAi}
          onChange={handleAiChange}
          className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
        >
          <option value="PrediksiHarga">Prediksi Harga</option>
          <option value="PrediksiPenjualanHarian">
            Prediksi Penjualan Harian
          </option>
        </select>
      </div>
    </div>
  );
};

const AiSelected = () => {
  const [selectedAi, setSelectedAi] = useState("PrediksiHarga");
  const [jenisHewan, setJenisHewan] = useState("");
  const [tanggal, setTanggal] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAiChange = (event) => {
    setSelectedAi(event.target.value);
  };

  return (
    <div className="w-full flex-row mt-4">
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
