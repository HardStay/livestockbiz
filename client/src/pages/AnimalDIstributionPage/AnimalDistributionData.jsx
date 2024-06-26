import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  GeoJSON,
  Popup,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { statesData } from "../../data/dataMap";
import axios from "axios";

const center = [-4.448201, 119.810278];

const AnimalDistributionData = () => {
  const [response, setResponse] = useState([]);
  const [namaProvinsi, setNamaProvinsi] = useState("");

  const handleData = async (provinsi) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/hewanTernakByProvinsi",
        { namaProvinsi: provinsi }
      );
      setResponse(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const onPolygonClick = (state) => {
    setNamaProvinsi(state.properties.state);
    handleData(state.properties.state);
  };

  return (
    <MapContainer
      center={center}
      zoom={5}
      style={{ width: "100%", height: "88vh" }}
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=5KHpou8qpDbcNwLZygbu"
        attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
      />

      <GeoJSON data={statesData.features} />
      {statesData.features.map((state, index) => {
        const coordinates = state.geometry.coordinates.map((polygon) => {
          return polygon[0].map((coordinate) => [coordinate[1], coordinate[0]]);
        });

        return (
          <Polygon
            key={index}
            pathOptions={{
              fillColor: "#FD8D3C",
              fillOpacity: 0.7,
              weight: 2,
              opacity: 1,
              dashArray: 3,
              color: "white",
            }}
            positions={coordinates}
            eventHandlers={{
              click: () => onPolygonClick(state),
              mouseover: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 1,
                  weight: 5,
                  dashArray: "",
                  color: "#666",
                  fillColor: "#D45962",
                });
              },
              mouseout: (e) => {
                const layer = e.target;
                layer.setStyle({
                  fillOpacity: 0.7,
                  weight: 2,
                  dashArray: 3,
                  color: "white",
                  fillColor: "#FD8D3C",
                });
              },
            }}
          >
            <Popup>
            <div>
                <h3>{namaProvinsi}</h3>
                <br />
                {response.length > 0 &&
                response[0].namaProvinsi === state.properties.state ? (
                  <>
                    <h1>Banyak Hewan Ternak</h1>
                    {response.map((item) => (
                      <div key={item.idHewanTernak}>
                        <h4>{item.jenisHewan}: {item.jumlahHewan}</h4>
                      </div>
                    ))}
                  </>
                ) : (
                  <p>Belum ada data hewan ternak di provinsi ini</p>
                )}
              </div>
            </Popup>
          </Polygon>
        );
      })}
    </MapContainer>
  );
};

export default AnimalDistributionData;
