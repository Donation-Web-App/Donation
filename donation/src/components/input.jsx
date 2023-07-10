import React from 'react'

function Input({ type, name, placeholder, id }) {
	return (
		<input className="border-2 border-gray-300 rounded-md w-full h-10 p-4"
			placeholder={placeholder}
			type={type}
			name={name}
			id={id}
			// onChange={onChange}
		/>
	);
}

export default Input;