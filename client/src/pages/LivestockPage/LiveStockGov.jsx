import React from 'react'

const LiveStockGov = () => {

    const livestockData = [
        {
            id: 1,
            animal: 'Cow',
            family: 'Bos taurus',
            weight: 500,
            gender: 'Male',
            age: 24,
            vaccine: 'Vaccine A',
            breeder: 'John Doe'
        },
        {
            id: 2,
            animal: 'Goat',
            family: 'Capra aegagrus hircus',
            weight: 50,
            gender: 'Male',
            age: 12,
            vaccine: 'Vaccine B',
            breeder: 'Jane Doe'
        },
        {
            id: 3,
            animal: 'Chicken',
            family: 'Gallus gallus domesticus',
            weight: 2,
            gender: 'Female',
            age: 6,
            vaccine: 'Vaccine C',
            breeder: 'John Doe'
        },
    ]

    return (
        <div className="container mx-auto p-6">
            <h2 className="text-2xl font-bold mb-4">Mobs</h2>
            <table className='border border-gray-400 mr-5'>
                <thead className='bg-gray-200 text-gray-900'>
                    <tr>
                        <th className='px-6 border py-3 border-gray-400'>Animal</th>
                        <th className='px-4 border border-gray-400'>Family</th>
                        <th className='px-6 border border-gray-400'>Weight (Kg)</th>
                        <th className='px-4 border border-gray-400'>Gender</th>
                        <th className='px-6 border border-gray-400'>Age (Month)</th>
                        <th className='px-4 border border-gray-400'>Vaccine</th>
                        <th className='px-4 border border-gray-400'>Breeder</th>
                    </tr>
                </thead>
                <tbody>
                    {livestockData.map(({ id, animal, family, weight, gender, age, vaccine, breeder }) => (
                        <tr key={id}>
                            <td className='border text-center border-gray-400 px-2 py-3'>
                                {animal}
                            </td>
                            <td className='border text-center border-gray-400 px-2 py-3'>
                                {family}
                            </td>
                            <td className='border text-center border-gray-400 px-2 py-3'>
                                {weight}
                            </td>
                            <td className='border text-center border-gray-400 px-2 py-3'>
                                {gender}
                            </td>
                            <td className='border text-center border-gray-400 px-2 py-3'>
                                {age}
                            </td>
                            <td className='border text-center border-gray-400 px-2 py-3'>
                                {vaccine}
                            </td>
                            <td className='border text-center border-gray-400 px-2 py-3'>
                                {breeder}
                            </td>
                        </tr>
                    ))}


                </tbody>
            </table>


        </div>
    )
}

export default LiveStockGov