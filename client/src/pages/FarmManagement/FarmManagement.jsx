import React, { useState } from "react";
import { IconButton, Typography } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";


const FarmFilter = () => {
    const [showFarmForm, setShowFarmForm] = useState(false); // State untuk menampilkan FarmForm

    const [farmAddress, setFarmAddress] = useState(
        "kjbojnsv fwqajkjfdbwas Queensland Australia"
    );

    const handleAddFarm = () => {
        // Add farm functionality here
    };

    const handleSettings = () => {
        // Settings functionality here
    };

    const handleEdit = () => {
        // User access functionality here
        setShowFarmForm(!showFarmForm);
    };

    return (
        <>
            <div className="container w-full mt-4">
                <div className="flex col-span-2 relative">
                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                        <path d="M15.7955 15.8111L21 21M18 10.5C18 14.6421 14.6421 18 10.5 18C6.35786 18 3 14.6421 3 10.5C3 6.35786 6.35786 3 10.5 3C14.6421 3 18 6.35786 18 10.5Z" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                    </svg>
                    <input
                        type="text"
                        className="rounded-md border border-gray-500 pl-10" // Tambahkan padding kiri untuk memberi ruang kepada ikon
                    />
                    <button className="flex ms-auto px-3 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1 nt-0.5">
                            <path d="M12 5V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M5 12H19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        Add Farm
                    </button>
                </div>


                <table className="table-auto w-full mt-3 border border-gray-400"> {/* Tambahkan class w-full untuk membuat table penuh lebar */}
                    <thead >
                        <tr>
                            <th className="px-4 py-2 w-1/3 text-start border border-gray-400">Farm</th> {/* Atur lebar relatif menggunakan class w-1/3 */}
                            <th className="px-4 py-2 w-1/3 text-start border border-gray-400">Address</th> {/* Atur lebar relatif menggunakan class w-1/3 */}
                            <th className="px-4 py-2 w-1/3 text-start border border-gray-400">Action</th> {/* Atur lebar relatif menggunakan class w-1/3 */}
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="bg-white">
                            <td className="px-4 py-2 border border-gray-400">Syahid Farm</td>
                            <td className="px-4 py-2 border border-gray-400">Bekasi</td>
                            <td className=" px-4 py-2 border border-gray-400">
                                <button onClick={handleSettings} className="px-3 py-2 bg-white rounded-md hover:bg-gray-200 transition duration-300 text-gray-900 mr-2 border border-gray-400">Settings</button>
                                <button onClick={handleEdit} className="px-3 py-2 bg-blue-500 rounded-md hover:bg-blue-600 transition duration-300 text-white">Edit</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div className="flex justify-end mt-4">
                    <SimplePagination />
                </div>
            </div>
            {/* {showFarmForm && <FarmForm />} */}
            {showFarmForm && <FarmForm setShowFarmForm={setShowFarmForm} />}


        </>
    );
};

export default FarmFilter;



export function SimplePagination() {
    const [active, setActive] = React.useState(1);

    const next = () => {
        if (active === 10) return;

        setActive(active + 1);
    };

    const prev = () => {
        if (active === 1) return;

        setActive(active - 1);
    };

    return (
        <div className="flex items-center gap-8">
            <IconButton
                size="sm"
                variant="outlined"
                onClick={prev}
                disabled={active === 1}
            >
                <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
            <Typography color="gray" className="font-normal">
                Page <strong className="text-gray-900">{active}</strong> of{" "}
                <strong className="text-gray-900">10</strong>
            </Typography>
            <IconButton
                size="sm"
                variant="outlined"
                onClick={next}
                disabled={active === 10}
            >
                <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
            </IconButton>
        </div>
    );
}



const FarmForm = ({ setShowFarmForm }) => {

    const [selectedProvince, setSelectedProvince] = useState("");

    const [form, setForm] = useState({
        farmName: '',
        address: '',
        town: '',
        country: 'Indonesia',
        contact: '',
        postcode: '',
        state: ''
    });

    const handleInputChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add farm functionality here
    };

    const handleClose = () => {
        setShowFarmForm(false);
    };


    const initialForm = {
        farmName: '',
        address: '',
        town: '',
        country: '',
        contact: '',
        pic: '',
        postcode: '',
        state: ''
    };

    const provinces = [
        "Aceh",
        "Sumatera Utara",
        "Sumatera Barat",
        "Riau",
        "Kepulauan Riau",
        "Jambi",
        "Bengkulu",
        "Sumatera Selatan",
        "Kepulauan Bangka Belitung",
        "Lampung",
        "Banten",
        "DKI Jakarta",
        "Jawa Barat",
        "Jawa Tengah",
        "DI Yogyakarta",
        "Jawa Timur",
        "Bali",
        "Nusa Tenggara Barat",
        "Nusa Tenggara Timur",
        "Kalimantan Barat",
        "Kalimantan Tengah",
        "Kalimantan Selatan",
        "Kalimantan Timur",
        "Kalimantan Utara",
        "Sulawesi Utara",
        "Gorontalo",
        "Sulawesi Tengah",
        "Sulawesi Barat",
        "Sulawesi Selatan",
        "Sulawesi Tenggara",
        "Maluku",
        "Maluku Utara",
        "Papua Barat",
        "Papua"
    ];



    const handleProvinceChange = (e) => {
        setSelectedProvince(e.target.value);
    };

    // const onClose = () => {
    //     // Reset form state
    //     setForm(initialForm);
    //     console.log('close');
    // }





    return (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center">
            <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
            <div className="modal-container bg-white w-96 md:w-2/3 mx-auto rounded shadow-lg z-50 overflow-y-auto">
                <div className="modal-content py-4 text-left px-6">
                    <div className="flex justify-between items-center pb-3">
                        <p className="text-2xl font-bold">Edit Farm</p>
                        <button onClick={handleClose} className="modal-close cursor-pointer z-50" id="closeBtn">
                            <svg
                                className="fill-current text-gray-900"
                                xmlns="http://www.w3.org/2000/svg"
                                width="20"
                                height="20"
                                viewBox="0 0 18 18"
                            >
                                <path
                                    d="M6.016 6l5.525 5.525-1.018 1.019L5 7.018l-5.525 5.525-1.019-1.018L3.981 6 .456.475l1.018-1.019L5 4.982l5.525-5.525 1.019 1.018L6.016 6z"
                                />
                            </svg>
                        </button>

                    </div>
                    <form className="p-4" method="post">
                        <label htmlFor="farmName" className="block text-sm font-medium text-gray-700">Farm Name</label>
                        <input type="text" name="username" id="username" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mt-2">Address</label>
                        <input type="text" name="username" id="username" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                        <div className="grid grid-cols-2 gap-2">
                            <div className="">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mt-2">Town</label>
                                <input type="text" name="username" id="username" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>
                            <div className="">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mt-2">Postcode</label>
                                <input type="text" name="username" id="username" className="mt-1 p-2 border border-gray-300 rounded-md w-full" />
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-2">
                            <div className="">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mt-2">Country</label>
                                <select name="country" id="country" className="mt-1 p-2 border border-gray-300 rounded-md w-full">

                                    <option value="Indonesia">Indonesia</option>

                                </select>
                            </div>
                            <div className="">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mt-2">State</label>
                                <select
                                    name="province"
                                    id="province"
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    value={selectedProvince}
                                    onChange={handleProvinceChange}
                                >
                                    <option value="">Select Province</option>
                                    {provinces.map((province, index) => (
                                        <option key={index} value={province}>
                                            {province}
                                        </option>
                                    ))}
                                </select>
                            </div>


                        </div>
                        <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mt-2">Contact</label>
                        <input type="text" name="contact" id="contact" className="mt-1 p-2 border border-gray-300 rounded-md w-full" placeholder="+62" />
                        <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 mt-4 w-full">Save Changes</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

