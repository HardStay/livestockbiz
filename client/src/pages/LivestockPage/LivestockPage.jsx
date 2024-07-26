import React, { useState, useEffect } from "react";
import axios from "axios";
import QRCode from "qrcode.react";
import DisplayDataModal from "../../components/Modal/QrModal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMe } from "../../features/authSlice.js";

export const LiveStock = () => {
  const [livestockData, setLivestockData] = useState([]);
  const [editMobId, setEditMobId] = useState(null);
  const [modalData, setModalData] = useState(null);
  const [qrCodeUrl, setQRCodeUrl] = useState(""); // State for QR code URL
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
    if (peternak) {
      (async () => {
        try {
          const res = await axios.post(
            "https://localhost:5000/gethewanTernak",
            {
              idPeternak: peternak.idPeternak,
            }
          );
          setLivestockData(res.data);
        } catch (error) {
          console.error("Error fetching livestock data:", error);
        }
      })();
    }
  }, [peternak]);

  const handleAddMob = async () => {
    try {
      const newMob = {
        jenisHewan: "",
        famili: "",
        berat: "",
        jenisKelamin: "",
        usia: "",
        vaksin: "0",
        idPeternak: peternak.idPeternak,
        idLokasi: peternak.idLokasi,
        waktuPerubahan: new Date().toISOString(),
      };
      const res = await axios.post(
        "https://localhost:5000/hewanTernak",
        newMob
      );
      setLivestockData([res.data, ...livestockData]);
      setEditMobId(res.data.idHewanTernak);

      // Build QR code URL
      const qrCodeUrl = `https://localhost:5000/hewanTernak/${res.data.idHewanTernak}`;

      // Set QR code URL
      setQRCodeUrl(qrCodeUrl);
    } catch (error) {
      console.error("Error adding new livestock:", error);
    }
  };

  const handleEditMob = (id) => setEditMobId(id);

  const handleSaveMob = async (id) => {
    const mobToUpdate = livestockData.find((mob) => mob.idHewanTernak === id);
    try {
      await axios.patch(
        `https://localhost:5000/hewanTernak/${id}`,
        mobToUpdate
      );
      setEditMobId(null);
    } catch (error) {
      console.error("Error saving livestock data:", error);
    }
  };

  const handleInputChange = (id, key, value) => {
    setLivestockData((prevData) =>
      prevData.map((mob) =>
        mob.idHewanTernak === id ? { ...mob, [key]: value } : mob
      )
    );
  };

  const handleDeleteMob = async (id) => {
    try {
      await axios.delete(
        `https://localhost:5000/hewanTernak/${id}`
      );
      setLivestockData((prevData) =>
        prevData.filter((mob) => mob.idHewanTernak !== id)
      );
    } catch (error) {
      console.error("Error deleting livestock data:", error);
    }
  };

  const handleShowDataQr = (mob) => setModalData(mob);

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Mobs</h2>
      <button
        onClick={handleAddMob}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add Mob
      </button>
      <LivestockTable
        livestockData={livestockData}
        editMobId={editMobId}
        onEditMob={handleEditMob}
        onSaveMob={handleSaveMob}
        onInputChange={handleInputChange}
        onDeleteMob={handleDeleteMob}
        onShowDataQr={handleShowDataQr}
      />
      {modalData && (
        <DisplayDataModal
          modalData={modalData}
          setShowModal={() => setModalData(null)}
        />
      )}
      {/* {qrCodeUrl && (
        <div className="mt-4">
          <h3 className="text-lg font-bold mb-2">QR Code for Newly Added Livestock</h3>
          <QRCode size={128} value={qrCodeUrl} />
        </div>
      )} */}
    </div>
  );
};

const LivestockTable = ({
  livestockData,
  editMobId,
  onEditMob,
  onSaveMob,
  onInputChange,
  onDeleteMob,
  onShowDataQr,
}) => {
  const familyData = {
    Sapi: ["Bovidae"],
    Domba: ["Bovidae"],
    Kambing: ["Bovidae"],
    Kuda: ["Equidae"],
    Kerbau: ["Bovidae"],
    Babi: ["Suidae"],
  };

  return (
    <div className="space-y-6">
      {livestockData.map(
        ({
          idHewanTernak,
          jenisHewan,
          famili,
          berat,
          jenisKelamin,
          usia,
          vaksin,
        }) => (
          <div
            key={idHewanTernak}
            className="border border-gray-400 p-4 rounded-md shadow-md flex flex-col md:flex-row"
          >
            <div className="md:w-1/4 flex justify-center items-center mb-4 md:mb-0">
              <QRCode
                size={128}
                value={`https://localhost:3000/displayQR/${idHewanTernak}`} // ini
                onClick={() =>
                  onShowDataQr({
                    idHewanTernak,
                    jenisHewan,
                    famili,
                    berat,
                    jenisKelamin,
                    usia,
                    vaksin,
                  })
                }
              />
            </div>
            <div className="md:w-3/4 md:pl-4">
              <div className="flex flex-wrap md:flex-nowrap mb-4">
                <div className="w-full md:w-1/2 pr-2">
                  <label className="block text-gray-700">Hewan</label>
                  {editMobId === idHewanTernak ? (
                    <select
                      value={jenisHewan}
                      onChange={(e) =>
                        onInputChange(
                          idHewanTernak,
                          "jenisHewan",
                          e.target.value
                        )
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    >
                      <option value="">Pilih Hewan</option>
                      {Object.keys(familyData).map((animal, index) => (
                        <option key={index} value={animal}>
                          {animal}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p>{jenisHewan}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2 pl-2">
                  <label className="block text-gray-700">Famili</label>
                  {editMobId === idHewanTernak ? (
                    <select
                      value={famili}
                      onChange={(e) =>
                        onInputChange(idHewanTernak, "famili", e.target.value)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    >
                      <option value="">Pilih Famili</option>
                      {familyData[jenisHewan] &&
                        familyData[jenisHewan].map((family, index) => (
                          <option key={index} value={family}>
                            {family}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <p>{famili}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap mb-4">
                <div className="w-full md:w-1/2 pr-2">
                  <label className="block text-gray-700">Berat (Kg)</label>
                  {editMobId === idHewanTernak ? (
                    <input
                      type="number"
                      value={berat}
                      onChange={(e) =>
                        onInputChange(idHewanTernak, "berat", e.target.value)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    <p>{berat}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2 pl-2">
                  <label className="block text-gray-700">Jenis Kelamin</label>
                  {editMobId === idHewanTernak ? (
                    <select
                      value={jenisKelamin}
                      onChange={(e) =>
                        onInputChange(
                          idHewanTernak,
                          "jenisKelamin",
                          e.target.value
                        )
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    >
                      <option value="">Pilih Jenis Kelamin</option>
                      <option value="Jantan">Jantan</option>
                      <option value="Betina">Betina</option>
                    </select>
                  ) : (
                    <p>{jenisKelamin}</p>
                  )}
                </div>
              </div>
              <div className="flex flex-wrap md:flex-nowrap mb-4">
                <div className="w-full md:w-1/2 pr-2">
                  <label className="block text-gray-700">Umur (Tahun)</label>
                  {editMobId === idHewanTernak ? (
                    <input
                      type="number"
                      value={usia}
                      onChange={(e) =>
                        onInputChange(idHewanTernak, "usia", e.target.value)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    <p>{usia}</p>
                  )}
                </div>
                <div className="w-full md:w-1/2 pl-2">
                  <label className="block text-gray-700">Vaksin</label>
                  {editMobId === idHewanTernak ? (
                    <select
                      value={vaksin}
                      onChange={(e) =>
                        onInputChange(idHewanTernak, "vaksin", e.target.value)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    >
                      <option value="1">Sudah</option>
                      <option value="0">Belum</option>
                    </select>
                  ) : (
                    <p>{vaksin === "1" ? "Sudah" : "Belum"}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                {editMobId === idHewanTernak ? (
                  <button
                    onClick={() => onSaveMob(idHewanTernak)}
                    className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => onEditMob(idHewanTernak)}
                    className="px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => onDeleteMob(idHewanTernak)}
                  className="px-3 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        )
      )}
    </div>
  );
};

export default LiveStock;
