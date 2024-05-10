import React, { useState } from "react";

const SellRecordsTableGov = () => {
    // Dummy data for the table
    const data = [
        {
            animal: "Ayam",
            family: "Broiler",
            sellingPrice: "Rp. 30.000",
            breeder: "PT. Sierad Produce Tbk",


        },
        {
            animal: "Sapi",
            family: "Holstein",
            sellingPrice: "Rp. 10.000.000",
            breeder: "PT. Japfa Comfeed Indonesia Tbk",
        },

    ];


    // const handleSell = (index) => {
    //     const newData = [...data];
    //     newData[index].status = "Terjual";
    //     newData[index].tanggalPenjualan = new Date().toLocaleDateString();
    //     setData(newData);
    // };

    // State to store the table data
    const [tableData, setData] = useState(data);

    return (
        <>
            <div className="container mx-auto p-6">
                <h2 className="text-2xl font-bold mb-4">Sales Data</h2>
                <table className="border border-gray-400">
                    <thead className="bg-gray-200 text-gray-900 bg-clip-border border-white">
                        <tr>
                            <th className="px-6 py-3 border border-gray-400">Sell Date</th>
                            <th className="px-4 border border-gray-400">Animal</th>
                            <th className="px-4 border border-gray-400">Family</th>
                            <th className="px-4 border border-gray-400">Selling Price</th>
                            <th className="px-4 border border-gray-400">Breeder</th>


                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td className="border text-center border-gray-400">{row.tanggalPenjualan || "-"}</td>
                                <td className="border text-center border-gray-400">{row.animal}</td>
                                <td className="border text-center px-4 py-3 border-gray-400">{row.family}</td>
                                <td className="border text-center py-3 border-gray-400">{row.sellingPrice}</td>
                                <td className="border text-center px-4 py-3 border-gray-400">{row.breeder}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default function SellRecordContentGov() {
    return (
        <div>
            <SellRecordsTableGov />
        </div>
    );
}
