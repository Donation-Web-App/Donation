import React from 'react'

function Input({ type, name, placeholder, onChange, value }) {
	return (
		<input
			className='border-2 border-gray-300 rounded-md w-96 h-10 p-4'
			placeholder={placeholder}
			type={type}
			name={name}
			onChange={onChange}
			// value={value}
		/>
	);
}

export default Input;