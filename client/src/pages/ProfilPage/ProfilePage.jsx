import React, { useState } from 'react';
import FarmFilter from '../FarmManagement/FarmManagement';


const ProfilePage = () => {
    const [isEditProfileOpen, setIsEditProfileOpen] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [isFarmFilterOpen, setIsFarmFilterOpen] = useState(false); // State untuk menampilkan FarmFilter


    const handleEditProfileClick = () => {
        setIsEditProfileOpen(!isEditProfileOpen);
    };

    const handleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleChangePassword = (event) => {
        const newPassword = event.target.value;
        setPassword(newPassword);

        // Regular expression for password validation
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

        // Check if password matches the regex pattern
        if (!passwordRegex.test(newPassword)) {
            setPasswordError('Password must be at least 6 characters long and contain at least 1 uppercase letter and 1 digit.');
        } else {
            setPasswordError('');
        }
    };

    const handleFarmManagementClick = () => {
        setIsFarmFilterOpen(!isFarmFilterOpen); // Toggle FarmFilter
    };


    return (
        <div className="container mx-auto p-6 bg-gray-200">
            <h2 className="text-2xl font-bold mb-4">Account</h2>
            <h4 className='text-md font-normal mb-4 text-gray-600'>Profile Settings</h4>
            <button
                className='px-3 py-3 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300'
                onClick={handleEditProfileClick}
            >
                <div className="flex col-span-2 items-center">
                    <img src="/assets/noun-profile-4808974.png" alt="Profile_Logo" className="w-6 h-6 mr-2" />
                    <div className='text-gray-900'>Syahedd</div>
                </div>
            </button>
            <h4 className='text-md font-normal mb-4 text-gray-600 mt-6'>Farm Settings</h4>
            <button
                className='px-3 py-3 bg-gray-300 rounded-md hover:bg-gray-400 transition duration-300 block mt-2'
                onClick={handleFarmManagementClick}
            >
                <div className="flex col-span-2 items-center">
                    <img src="/assets/noun-farm-6714843.png" alt="Farm_Logo" className="w-6 h-6 mr-2" />
                    <div className='text-gray-900'>Farm Management</div>
                </div>
            </button>


            {isFarmFilterOpen && <FarmFilter />}


            {isEditProfileOpen && (
                <>
                    <div className="mt-4 p-4 border border-gray-300 rounded-md w-64">
                        <form method='post' >
                            <div className="mb-4">
                                <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
                                <input type="text" name="username" id="username" className="mt-1 p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" name="email" id="email" className="mt-1 p-2 border border-gray-300 rounded-md" />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone</label>
                                <input type="text" name="phone" id="phone" className="mt-1 p-2 border border-gray-300 rounded-md" defaultValue="+62" />
                            </div>

                            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Save Changes</button>
                        </form>
                    </div>
                    <div className="mt-4 p-4 border border-gray-300 rounded-md w-80">
                        <form method='post'>
                            <div className="mb-4">
                                <div className="flex">
                                    <label htmlFor="currentPassword" className="block text-sm font-medium text-gray-700">Current Password</label>
                                    <label htmlFor="showPassword" className="flex text-sm font-medium text-gray-700 ms-auto">Show Password</label>
                                    <input
                                        type="checkbox"
                                        name="showPwd"
                                        id="showPwd"
                                        className='ml-2'
                                        onChange={handleShowPassword}
                                    />
                                </div>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="currentPassword"
                                    id="currentPassword"
                                    className="mt-1 p-2 border border-gray-300 rounded-md"
                                />
                            </div>
                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-gray-700">New Password</label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    name="password"
                                    id="password"
                                    className="mt-1 p-2 border border-gray-300 rounded-md"
                                    value={password}
                                    onChange={handleChangePassword}
                                />
                                {passwordError && <p className="text-red-500 text-sm mt-1">{passwordError}</p>}
                            </div>
                            <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Save Changes</button>
                        </form>
                    </div>
                </>
            )}
        </div>


    );
};

export default function ProfilePageContent() {
    return (
        <div>
            <ProfilePage />
        </div>
    );
}
