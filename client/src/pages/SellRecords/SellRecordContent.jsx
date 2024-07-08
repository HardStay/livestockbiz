import React, { useState } from "react";

const SellRecordsTable = () => {
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
      sellPrice: "",
      status: "Belum Terjual",
    };
    setLivestockData([...livestockData, newMob]);
    setEditMobId(id);
  };

  const handleEditMob = (id) => {
    setEditMobId(id);
  };

  const handleSaveMob = (id) => {
    const updatedData = livestockData.map((mob) =>
      mob.id === id
        ? {
            ...mob,
            status: "Terjual",
            sellDate: new Date().toLocaleDateString(),
          }
        : mob
    );
    setLivestockData(updatedData);
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
      <h2 className="text-2xl font-bold mb-4">Sales Data</h2>
      <button
        onClick={handleAddMob}
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
      >
        Add Mob
      </button>
      <div className="grid grid-cols-1 gap-4">
        {livestockData.map((mob) => (
          <SellDataCard
            key={mob.id}
            mob={mob}
            editMobId={editMobId}
            onEditMob={handleEditMob}
            onSaveMob={handleSaveMob}
            onInputChange={handleInputChange}
            onDeleteMob={handleDeleteMob}
            setEditMobId={setEditMobId}
          />
        ))}
      </div>
    </div>
  );
};

const SellDataCard = ({
  mob,
  editMobId,
  onEditMob,
  onSaveMob,
  onInputChange,
  onDeleteMob,
  setEditMobId,
}) => {
  const {
    id,
    animal,
    family,
    weight,
    gender,
    age,
    vaccine,
    sellPrice,
    status,
  } = mob;

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
    <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 flex flex-col sm:flex-row">
      <div className="w-full sm:w-3/4 pl-4">
        {status === "Terjual" && (
          <p className="text-sm text-gray-500 mb-2">
            Sell Date: {new Date().toLocaleDateString()}
          </p>
        )}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Animal
            </label>
            {editMobId === id ? (
              <select
                value={animal}
                onChange={(e) => onInputChange(id, "animal", e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Family
            </label>
            {editMobId === id ? (
              <select
                value={family}
                onChange={(e) => onInputChange(id, "family", e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
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
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Weight (Kg)
            </label>
            {editMobId === id ? (
              <input
                type="number"
                value={weight}
                onChange={(e) => onInputChange(id, "weight", e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            ) : (
              <p>{weight}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Gender
            </label>
            {editMobId === id ? (
              <select
                value={gender}
                onChange={(e) => onInputChange(id, "gender", e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            ) : (
              <p>{gender}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Age (Month)
            </label>
            {editMobId === id ? (
              <input
                type="number"
                value={age}
                onChange={(e) => onInputChange(id, "age", e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            ) : (
              <p>{age}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Vaccine
            </label>
            {editMobId === id ? (
              <select
                value={vaccine}
                onChange={(e) => onInputChange(id, "vaccine", e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option value="">Select Vaccine</option>
                {vaccineOptions[animal] &&
                  vaccineOptions[animal].map((vaccine, index) => (
                    <option key={index} value={vaccine}>
                      {vaccine}
                    </option>
                  ))}
              </select>
            ) : (
              <p>{vaccine}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Sell Price
            </label>
            {editMobId === id ? (
              <input
                type="number"
                value={sellPrice}
                onChange={(e) => onInputChange(id, "sellPrice", e.target.value)}
                className="mt-1 block w-full pl-3 pr-10 py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              />
            ) : (
              <p>{sellPrice}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Status
            </label>
            <p>{status}</p>
          </div>
        </div>
        <div className="flex justify-between mt-4">
          {editMobId === id ? (
            <>
              <button
                onClick={() => onSaveMob(id)}
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
              >
                Save
              </button>
              <button
                onClick={() => setEditMobId(null)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => onEditMob(id)}
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-2 px-4 rounded"
              >
                Edit
              </button>
              <button
                onClick={() => onDeleteMob(id)}
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
              >
                Delete
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default SellRecordsTable;
