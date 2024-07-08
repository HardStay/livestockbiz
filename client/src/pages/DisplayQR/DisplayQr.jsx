import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

const DisplayQr = () => {
  const { id } = useParams();
  const [jenisHewan, setJenisHewan] = useState("");
  const [famili, setFamili] = useState("");
  const [berat, setBerat] = useState("");
  const [jenisKelamin, setJenisKelamin] = useState("");
  const [usia, setUsia] = useState("");
  const [vaksin, setVaksin] = useState("");
  const [idPeternak, setIdPeternak] = useState("");
  const [namaLengkap, setNamaLengkap] = useState("");
  const [nomorTelepon, setNomorTelepon] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/hewanTernak/${id}`);
        setJenisHewan(res.data.jenisHewan);
        setFamili(res.data.famili);
        setBerat(res.data.berat);
        setJenisKelamin(res.data.jenisKelamin);
        setUsia(res.data.usia);
        setVaksin(res.data.vaksin);
        setIdPeternak(res.data.idPeternak);
      } catch (error) {
        console.error("Error fetching livestock data:", error);
      }
    };

    fetchData();
  }, [id]);

  useEffect(() => {
    const fetchPeternak = async () => {
      if (idPeternak) {
        try {
          const res = await axios.get(`http://localhost:5000/peternak/${idPeternak}`);
          setNamaLengkap(res.data.namaPeternak);
          setNomorTelepon(res.data.nomorTelepon);
        } catch (error) {
          console.error("Error fetching peternak data:", error);
        }
      }
    };

    fetchPeternak();
  }, [idPeternak]);

  return (
    <div className="container mx-auto p-4 flex flex-col justify-center items-center min-h-screen space-y-4">
      <div className="border border-gray-400 p-4 rounded-md shadow-md flex flex-col space-y-4 w-full max-w-2xl">
        <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
          <div className="w-full md:w-1/2 text-center">
            <label className="block text-gray-700">Hewan</label>
            <p className="text-gray-900">{jenisHewan}</p>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <label className="block text-gray-700">Famili</label>
            <p className="text-gray-900">{famili}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
          <div className="w-full md:w-1/2 text-center">
            <label className="block text-gray-700">Berat (Kg)</label>
            <p className="text-gray-900">{berat}</p>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <label className="block text-gray-700">Jenis Kelamin</label>
            <p className="text-gray-900">{jenisKelamin}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
          <div className="w-full md:w-1/2 text-center">
            <label className="block text-gray-700">Umur (Tahun)</label>
            <p className="text-gray-900">{usia}</p>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <label className="block text-gray-700">Vaksin</label>
            <p className="text-gray-900">{vaksin ? "Sudah" : "Belum"}</p>
          </div>
        </div>
        <div className="flex flex-wrap justify-center space-y-4 md:space-y-0 md:flex-nowrap md:space-x-4">
          <div className="w-full md:w-1/2 text-center">
            <label className="block text-gray-700">Peternak</label>
            <p className="text-gray-900">{namaLengkap}</p>
          </div>
          <div className="w-full md:w-1/2 text-center">
            <label className="block text-gray-700">Nomor Telepon</label>
            <p className="text-gray-900">{nomorTelepon}</p>
          </div>
        </div>
      </div>
      <Link to="/home">
        <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Go to Home
        </button>
      </Link>
    </div>
  );
};

export default DisplayQr;
