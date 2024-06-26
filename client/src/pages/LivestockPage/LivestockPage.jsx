import React, { useState } from "react";
import QRCode from "qrcode.react";

export const LiveStock = ({ vaccineOptions }) => {
  const [livestockData, setLivestockData] = useState([]);
  const [editMobId, setEditMobId] = useState(null);

  const handleAddMob = () => {
    const id = livestockData.length + 1;
    const newMob = {
      id,
      animal: "",
      family: "",
      weight: "",
      gender: "",
      age: "",
      vaccine: "",
    };
    setLivestockData([...livestockData, newMob]);
    setEditMobId(id);
  };

  const handleEditMob = (id) => {
    setEditMobId(id);
  };

  const handleSaveMob = () => {
    setEditMobId(null);
  };

  const handleInputChange = (id, key, value) => {
    const updatedData = livestockData.map((mob) =>
      mob.id === id ? { ...mob, [key]: value } : mob
    );
    setLivestockData(updatedData);
  };

  const handleDeleteMob = (id) => {
    const updatedData = livestockData.filter((mob) => mob.id !== id);
    setLivestockData(updatedData);
  };

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
        vaccineOptions={vaccineOptions}
      />
    </div>
  );
};

export const LivestockTable = ({
  livestockData,
  editMobId,
  onEditMob,
  onSaveMob,
  onInputChange,
  onDeleteMob,
}) => {
  const familyData = {
    Cow: ["Bovidae"],
    Sheep: ["Bovidae"],
    Goat: ["Bovidae"],
    Chicken: ["Phasianidae"],
    Buffalo: ["Bovidae"],
    Pig: ["Suidae"],
  };

  const vaccineOptions = {
    Cow: ["Anthrax", "Brucellosis", "IBR", "Leptospirosis", "BVD", "SE"],
    Sheep: [
      "Pasteurellosis",
      "Chlamydia",
      "Clostridium",
      "Caseous Lymphadenitis",
      "Anthelmintic",
    ],
    Goat: [
      "Pasteurellosis",
      "Chlamydia",
      "Clostridium",
      "Caseous Lymphadenitis",
      "Anthelmintic",
    ],
    Chicken: [
      "Newcastle Disease",
      "Avian Influenza",
      "Infectious Bronchitis",
      "Marek's Disease",
      "Gumboro",
    ],
    Buffalo: ["Anthrax", "FMD", "Enterotoxemia", "Blackleg", "Pasteurellosis"],
    Pig: [
      "Classical Swine Fever",
      "PRRS",
      "FMD",
      "Swine Influenza",
      "Erysipelas",
    ],
  };

  return (
    <div className="space-y-6">
      {livestockData.map(
        ({ id, animal, family, weight, gender, age, vaccine }) => (
          <div
            key={id}
            className="border border-gray-400 p-4 rounded-md shadow-md flex"
          >
            <div className="w-1/4 flex justify-center items-center">
              <QRCode value={`#${id}`} size={128} />
            </div>
            <div className="w-3/4 pl-4">
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700">Animal</label>
                  {editMobId === id ? (
                    <select
                      value={animal}
                      onChange={(e) =>
                        onInputChange(id, "animal", e.target.value)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    >
                      <option value="">Select Animal</option>
                      {Object.keys(familyData).map((animal, index) => (
                        <option key={index} value={animal}>
                          {animal}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <p>{animal}</p>
                  )}
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700">Family</label>
                  {editMobId === id ? (
                    <select
                      value={family}
                      onChange={(e) =>
                        onInputChange(id, "family", e.target.value)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    >
                      <option value="">Select Family</option>
                      {familyData[animal] &&
                        familyData[animal].map((family, index) => (
                          <option key={index} value={family}>
                            {family}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <p>{family}</p>
                  )}
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700">Weight (Kg)</label>
                  {editMobId === id ? (
                    <input
                      type="number"
                      value={weight}
                      onChange={(e) =>
                        onInputChange(id, "weight", e.target.value)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    <p>{weight}</p>
                  )}
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700">Gender</label>
                  {editMobId === id ? (
                    <select
                      value={gender}
                      onChange={(e) =>
                        onInputChange(id, "gender", e.target.value)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    >
                      <option value="">Select Gender</option>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                    </select>
                  ) : (
                    <p>{gender}</p>
                  )}
                </div>
              </div>
              <div className="flex mb-4">
                <div className="w-1/2 pr-2">
                  <label className="block text-gray-700">Age (Month)</label>
                  {editMobId === id ? (
                    <input
                      type="number"
                      value={age}
                      onChange={(e) => onInputChange(id, "age", e.target.value)}
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    />
                  ) : (
                    <p>{age}</p>
                  )}
                </div>
                <div className="w-1/2 pl-2">
                  <label className="block text-gray-700">Vaccine</label>
                  {editMobId === id ? (
                    <select
                      value={vaccine}
                      onChange={(e) =>
                        onInputChange(id, "vaccine", e.target.value)
                      }
                      className="bg-gray-200 px-2 py-1 rounded-md w-full"
                    >
                      <option value="">Select Vaccine</option>
                      {vaccineOptions &&
                        vaccineOptions[animal]?.map((vaccine, index) => (
                          <option key={index} value={vaccine}>
                            {vaccine}
                          </option>
                        ))}
                    </select>
                  ) : (
                    <p>{vaccine}</p>
                  )}
                </div>
              </div>
              <div className="flex justify-between">
                {editMobId === id ? (
                  <button
                    onClick={() => onSaveMob(id)}
                    className="px-3 py-2 bg-green-500 hover:bg-green-600 rounded-md text-white"
                  >
                    Save
                  </button>
                ) : (
                  <button
                    onClick={() => onEditMob(id)}
                    className="px-3 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white"
                  >
                    Edit
                  </button>
                )}
                <button
                  onClick={() => onDeleteMob(id)}
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
