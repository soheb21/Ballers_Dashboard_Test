import React from 'react'

const Input = ({ controls, formData, setFormData }) => {
    return (
        <>
            {
                controls && controls.map((item, index) => (
                    <div key={index} className="mb-5">
                        <label htmlFor={item.name} className="block mb-2 text-sm font-medium text-orange-500 shadow-md">{item.label}</label>
                        <input type={item.type} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-pribg-primary-btn focus:border-pribg-primary-btn block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pribg-primary-btn dark:focus:border-pribg-primary-btn"
                            placeholder={item.placeholder}
                            name={item.name}
                            id={item.name}
                            value={formData[item.name]}
                            onChange={(e) => setFormData({ ...formData, [item.name]: e.target.value })}
                        />
                    </div>
                ))
            }
        </>
    )
}

export default Input